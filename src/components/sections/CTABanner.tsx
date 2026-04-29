'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { BookDemoButton } from '@/components/ui/BookDemoButton';

export function CTABanner() {
  return (
    <section id="demo" className="py-16 md:py-24 bg-[#060b14] relative overflow-hidden border-t border-white/6">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-primary-600/15 blur-3xl" />
        {/* Diagonal stripe — mirrors hero */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #5de0e6 0, #5de0e6 1px, transparent 0, transparent 60%)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <Container>
        <AnimatedSection className="text-center">

          {/* Badge — square, mono, matches hero */}
          <div className="inline-flex items-center gap-2.5 border border-primary-500/50 bg-primary-500/6 px-3 py-1.5 text-[11px] font-mono font-bold text-primary-400 tracking-[0.18em] uppercase mb-10">
            <span className="w-1.5 h-1.5 bg-primary-500 animate-pulse shrink-0" />
            The AI-native alternative
          </div>

          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
          >
            Stop settling for EA tools<br />built for a different era.
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Enterprise Insight is the AI-first platform purpose-built for architects who need speed,
            clarity, and real business impact — not another diagramming tool dressed up with a chatbot.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <BookDemoButton
              size="lg"
              className="rounded-none! shadow-[4px_4px_0_rgba(120,10,20,0.6)]"
            >
              Book a Free Demo
            </BookDemoButton>
            <a
              href="#ai-features"
              className="inline-flex items-center justify-center h-9 px-4 text-sm font-medium text-slate-300 border border-white/15 hover:border-white/30 hover:text-white transition-colors duration-150"
            >
              Explore the platform →
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-600">
            No commitment · Personalised walkthrough · Live Q&amp;A included
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
