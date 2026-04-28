import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ServiceWorkerInit } from '@/components/ui/ServiceWorkerInit';
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lashwebsitetwo.netlify.app'),
  title: 'Enterprise Insight — Make Your Architects Unstoppable',
  description:
    'The EA platform built for speed, clarity, and organisation-wide communication — powered by KeystoneEA™. Automated diagrams, TOGAF/ArchiMate support, and real-time publishing.',
  keywords: [
    'enterprise architecture',
    'EA tool',
    'KeystoneEA',
    'TOGAF',
    'ArchiMate',
    'architecture diagrams',
    'digital transformation',
    'enterprise architects',
    'architecture automation',
    'collaborative EA',
    'architecture governance',
    'business architecture',
  ],
  authors: [{ name: 'Enterprise Insight', url: 'https://lashwebsitetwo.netlify.app' }],
  openGraph: {
    title: 'Enterprise Insight — Make Your Architects Unstoppable',
    description:
      'AI-powered enterprise architecture tooling for productive, collaborative teams. Automated diagrams, TOGAF/ArchiMate support, and real-time publishing — powered by KeystoneEA™.',
    type: 'website',
    url: 'https://lashwebsitetwo.netlify.app',
    siteName: 'Enterprise Insight',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Enterprise Insight — Make Your Architects Unstoppable',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Insight — Make Your Architects Unstoppable',
    description:
      'AI-powered enterprise architecture tooling for productive, collaborative teams.',
    site: '@enterpriseinsight',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: 'https://lashwebsitetwo.netlify.app',
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Enterprise Insight',
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#060b14' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", montserrat.variable)} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="bg-white dark:bg-[#060b14] text-slate-900 dark:text-slate-100 antialiased">
        <Providers>
          <ServiceWorkerInit />
          <Navbar />
          <main className="pt-24">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
