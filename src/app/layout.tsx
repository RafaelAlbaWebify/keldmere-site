import type { Metadata } from "next";
import "./globals.css";
import "./demos.css";
import "./everwell.css";
export const metadata: Metadata = { title: "Keldmere | Web Design, Development & Website Care", description: "Website design, development and care for small businesses. Clear pricing, responsive layouts and practical ongoing support.", robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a>{children}</body></html>; }
