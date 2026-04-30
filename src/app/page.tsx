import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Pillars } from '@/components/sections/Pillars';
import { VideoPromo } from '@/components/sections/VideoPromo';
import { LogoFeatures } from '@/components/sections/LogoFeatures';
import { Products } from '@/components/sections/Products';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { UseCases } from '@/components/sections/UseCases';
import { Testimonial } from '@/components/sections/Testimonial';
import { AICanvasDemo } from '@/components/sections/AICanvasDemo';
import { AICanvas } from '@/components/sections/AICanvas';
import { OurVision } from '@/components/sections/OurVision';
import { BlogTeaser } from '@/components/sections/BlogTeaser';
import { CTABanner } from '@/components/sections/CTABanner';
import { LogoTicker } from '@/components/sections/LogoTicker';
import { AIFeatures } from '@/components/sections/AIFeatures';
import { ClientVideo } from '@/components/sections/ClientVideo';

export const metadata: Metadata = {
  title: 'Enterprise Architecture Software — Enterprise Insight',
  description:
    'AI-powered enterprise architecture software for modern EA teams. Automated diagrams, TOGAF/ArchiMate support, and real-time stakeholder publishing.',
  keywords: [
    'enterprise architecture software',
    'EA platform',
    'enterprise architecture tool',
    'EA software',
    'architecture management platform',
  ],
  openGraph: {
    title: 'Enterprise Architecture Software — Enterprise Insight',
    description:
      'AI-powered enterprise architecture software for modern EA teams. Automated diagrams, TOGAF/ArchiMate support, and real-time stakeholder publishing.',
    url: 'https://lashwebsitetwo.netlify.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Architecture Software — Enterprise Insight',
    description:
      'AI-powered enterprise architecture software for modern EA teams. Automated diagrams, TOGAF/ArchiMate support, and real-time stakeholder publishing.',
  },
  alternates: {
    canonical: 'https://lashwebsitetwo.netlify.app',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoFeatures />
      <LogoTicker />
      {/* <Pillars /> */}
      <OurVision />
      <AICanvasDemo />
      <AICanvas />
      {/* <VideoPromo /> */}
      <AIFeatures />
      <ClientVideo />
      {/* <Products /> */}
      {/* <HowItWorks /> */}
      {/* <UseCases /> */}
      {/* <Testimonial /> */}
      <BlogTeaser />
      <CTABanner />
    </>
  );
}
