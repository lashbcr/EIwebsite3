'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

export function ClientVideo() {
  return (
    <section className="bg-[#060b14] border-t border-white/8 overflow-hidden relative">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'rgba(236,44,68,0.06)' }} />
      </div>

      <Container className="relative py-16 md:py-24">

        {/* Section label + heading */}
        <AnimatedSection className="mb-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/8 max-w-[120px]" />
            <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase shrink-0">Client Story</span>
            <div className="flex-1 h-px bg-white/8 max-w-[120px]" />
          </div>
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
          >
            Hear It From<br />
            <span className="text-primary-500">A Client.</span>
          </h2>
        </AnimatedSection>

        {/* Video embed — glass card */}
        <AnimatedSection delay={0.15}>
          <div className="max-w-[560px] mx-auto">
          <div
            className="relative overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(14,22,40,0.92) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: '1px solid rgba(236,44,68,0.4)',
              borderRadius: '16px',
              backdropFilter: 'blur(20px) saturate(130%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)',
            }}
          >
            {/* 16:9 responsive wrapper */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/MuGuGniqqN8?rel=0&modestbranding=1&color=white&hl=en&cc_lang_pref=en"
                title="Enterprise Insight — Client Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{ border: 'none', display: 'block' }}
              />
            </div>
          </div>
          </div>
        </AnimatedSection>

      </Container>
    </section>
  );
}
