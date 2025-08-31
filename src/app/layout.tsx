import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StackSaver - Save on AI SaaS Tools",
  description: "A Chrome extension that shows real discounts the moment you visit AI SaaS sites. Never overpay for AI marketing tools again.",
  keywords: "AI marketing tools, SaaS discounts, Chrome extension, AI deals, marketing automation, StackSaver",
  authors: [{ name: "StackSaver" }],
  openGraph: {
    title: "StackSaver - Save on AI SaaS Tools",
    description: "A Chrome extension that shows real discounts the moment you visit AI SaaS sites.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "StackSaver - Save on AI SaaS Tools",
    description: "A Chrome extension that shows real discounts the moment you visit AI SaaS sites.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
