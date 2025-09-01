import { Metadata } from 'next';
import Landing from '@/components/landing/Landing';

export const metadata: Metadata = {
  title: 'StackSaver - Save on AI SaaS Tools',
  description: 'A Chrome extension that shows real discounts the moment you visit AI SaaS sites. Never overpay for AI marketing tools again.',
  keywords: 'AI marketing tools, SaaS discounts, Chrome extension, AI deals, marketing automation, StackSaver',
  openGraph: {
    title: 'StackSaver - Save on AI SaaS Tools',
    description: 'A Chrome extension that shows real discounts the moment you visit AI SaaS sites.',
    type: 'website',
    url: 'https://stacksaver.io',
    siteName: 'StackSaver',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StackSaver - Save on AI SaaS Tools',
    description: 'A Chrome extension that shows real discounts the moment you visit AI SaaS sites.',
  },
  alternates: {
    canonical: 'https://stacksaver.io',
  },
};

export default function Home() {
  return <Landing />;
}
