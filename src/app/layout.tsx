import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Keldmere Technology | Microsoft 365 & Modern IT Services", description: "Practical Microsoft 365 reviews, secure setup and remote IT support for small businesses. Enterprise experience. Personal service.", robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to main content</a>{children}</body></html>; }
