import { readFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const read=(p)=>readFileSync(join(process.cwd(),p),"utf8");
const checks=[];
function check(id,ok,critical,note){checks.push({id,pass:Boolean(ok),critical,note});}
const layout=read("src/app/layout.tsx"),page=read("src/app/page.tsx"),company=read("src/app/company/page.tsx"),privacy=read("src/app/privacy/page.tsx");
const workflow=read(".github/workflows/verify.yml");
const robots=read("public/robots.txt");
check("static-export",read("next.config.ts").includes('output: "export"'),true,"Static deployment must not need an application server");
check("indexing-block",layout.includes("index: false")&&robots.includes("Disallow: /"),true,"Preserve noindex before launch approval");
check("company-page",existsSync("src/app/company/page.tsx")&&page.includes('href="/company/"'),true,"Company page linked");
check("privacy-page",existsSync("src/app/privacy/page.tsx")&&page.includes('href="/privacy/"'),true,"Privacy page linked");
check("working-with-us",existsSync("src/app/working-with-us/page.tsx")&&page.includes('href="/working-with-us/"'),false,"Service engagement page linked");
check("company-number-verified",!company.includes("registered number, registered office")&&!company.includes("must be verified"),true,"Obtain exact CRO number and registered office");
check("privacy-approved",!privacy.includes("pre-publication summary")&&!privacy.includes("not an approved"),true,"Approve accurate privacy notice and processing details");
check("business-name-cleared",!page.includes("Legal trading-name formalities pending"),true,"Verify business/trading name before public marketing");
check("brand-mailbox-tested",!page.includes("webify.reception@gmail.com"),false,"Replace temporary mailbox only after DNS and two-way email tests");
check("font-privacy-reviewed",!read("src/app/globals.css").includes("fonts.googleapis.com"),false,"Self-host fonts or record privacy review");
check("visual-qa-ci",workflow.includes("capture-visual-qa.mjs"),true,"Visual regression smoke tests in CI");
const passed=checks.filter(c=>c.pass).length, blockers=checks.filter(c=>!c.pass&&c.critical).length;
const report={generatedAt:new Date().toISOString(),passed,total:checks.length,criticalBlockers:blockers,launchReady:blockers===0,checks};
writeFileSync("launch-audit.json",JSON.stringify(report,null,2)+"\n");
for(const c of checks) console.log((c.pass?"PASS":"HOLD")+" "+c.id+" — "+c.note);
console.log(`Summary: ${passed}/${checks.length} passed; ${blockers} critical launch blockers`);
if(process.argv.includes("--require-launch-ready") && blockers) process.exitCode=1;
