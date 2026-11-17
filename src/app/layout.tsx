import type { Metadata } from 'next';
import { Barlow_Condensed, Be_Vietnam_Pro } from 'next/font/google';
import { siteContent } from '@/data/content';
import { event } from '@/data/event';
import './globals.css';

const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  'http://localhost:3000';
const metadataBase = new URL(
  deploymentUrl.startsWith('http') ? deploymentUrl : `https://${deploymentUrl}`,
);

const bodyFont = Be_Vietnam_Pro({
  variable: '--font-body',
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const displayFont = Barlow_Condensed({
  variable: '--font-display',
  subsets: ['latin', 'vietnamese'],
  weight: ['700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase,
  title: siteContent.title,
  description: siteContent.description,
  openGraph: {
    title: siteContent.title,
    description: siteContent.description,
    type: 'website',
    locale: 'vi_VN',
    images: [
      {
        url: event.portraitSrc,
        alt: `Chân dung tốt nghiệp của ${event.graduate}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.title,
    description: siteContent.description,
    images: [event.portraitSrc],
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="vi" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
