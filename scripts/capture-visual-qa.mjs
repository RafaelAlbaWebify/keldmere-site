import { chromium, devices } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.KELDMERE_URL || "http://127.0.0.1:3000";
const outDir = path.resolve("qa-screenshots");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const profiles = [
  ["desktop-1440", { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 }],
  ["tablet-768", { viewport: { width: 768, height: 1024 }, deviceScaleFactor: 1 }],
  ["iphone-13", { ...devices["iPhone 13"], defaultBrowserType: undefined }],
  ["android-pixel-7", { ...devices["Pixel 7"], defaultBrowserType: undefined }],
];

const report = [];
try {
  for (const [name, profile] of profiles) {
    const { defaultBrowserType: _ignored, ...contextOptions } = profile;
    const context = await browser.newContext({ ...contextOptions, colorScheme: "light" });
    const page = await context.newPage();
    const failures = [];
    page.on("pageerror", (error) => failures.push(error.message));
    const response = await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(outDir, name + ".png"), fullPage: true, animations: "disabled" });
    const data = await page.evaluate(() => ({
      title: document.title,
      viewportWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      horizontalOverflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      headings: Array.from(document.querySelectorAll("h1")).map((h) => h.textContent?.trim()),
      mailtoLinks: document.querySelectorAll('a[href^="mailto:"]').length,
    }));
    report.push({ profile: name, status: response?.status(), ...data, pageErrors: failures });
    await context.close();
  }
  await writeFile(path.join(outDir, "report.json"), JSON.stringify(report, null, 2));
  for (const item of report) {
    console.log(`${item.profile}: HTTP ${item.status}, viewport ${item.viewportWidth}, document ${item.documentWidth}, overflow=${item.horizontalOverflow}, JS errors=${item.pageErrors.length}`);
  }
  console.log("Screenshots and report:", outDir);
  if (report.some((item) => item.horizontalOverflow || item.pageErrors.length || item.status !== 200)) process.exitCode = 1;
} finally {
  await browser.close();
}
