'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookDemoDialog } from '@/components/ui/BookDemoDialog';
import { Container } from '@/components/ui/Container';
import { ArchitectFlow } from '@/components/sections/ArchitectFlow';

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#060b14] pt-24 pb-20 md:pt-36 md:pb-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Deep blue glow */}
        <div
          className="absolute -top-60 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-20"
          style={{ background: 'radial-gradient(ellipse at center top, #004aad 0%, transparent 65%)' }}
        />
        {/* Diagonal stripe — neobrutalist texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #5de0e6 0, #5de0e6 1px, transparent 0, transparent 60%)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Right-side fade */}
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#060b14] to-transparent" />
      </div>

      <Container className="relative z-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div className="flex flex-col">

            {/* Challenger badge — square corners, mono */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2.5 border border-primary-500/50 bg-primary-500/6 px-3 py-1.5 text-[11px] font-mono font-bold text-primary-400 tracking-[0.18em] uppercase">
                <span className="w-1.5 h-1.5 bg-primary-500 animate-pulse shrink-0" />
                AI-First · Not an Afterthought
              </span>
            </motion.div>

            {/* Headline with hard left accent bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-l-[3px] border-primary-500 pl-5"
            >
              <h1 className="text-[2.6rem] md:text-6xl font-bold tracking-tight leading-[1.05]">
                <span className="block text-white">Make Your Architects</span>
                <span className="block text-primary-500 mt-1">Unstoppable.</span>
              </h1>
            </motion.div>

            {/* Challenger subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-7 text-base md:text-lg text-slate-400 max-w-xl leading-relaxed"
            >
              Legacy EA platforms were built for compliance decks and consultant slide shows.
              Enterprise Insight is built for architects who move at the speed of the business —
              AI that understands your architecture, end to end.
            </motion.p>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 shrink-0" />50+ EA teams
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 shrink-0" />10× faster diagrams
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 shrink-0" />TOGAF &amp; ArchiMate ready
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
            >
              {/* Primary — neobrutalist hard shadow */}
              <button
                onClick={() => setDemoOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center h-13 sm:h-12 px-7 text-base font-semibold text-white bg-primary-500 hover:bg-primary-600 active:translate-y-0.5 active:translate-x-0.5 transition-all duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                style={{ boxShadow: '4px 4px 0 rgba(120,10,20,0.6)' }}
              >
                Book a Demo
              </button>

              {/* Secondary — gradient border */}
              <div
                className="w-full sm:w-auto shrink-0"
                style={{ background: 'linear-gradient(90deg, #5de0e6, #004aad)', padding: '1.5px' }}
              >
                <a
                  href="#ai-features"
                  className="flex w-full items-center justify-center font-semibold h-[calc(3.25rem-3px)] sm:h-[calc(3rem-3px)] px-7 text-base text-white bg-[#060b14] hover:bg-[#0c1525] transition-colors duration-150 focus-visible:outline-none"
                >
                  See How It Works →
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right: animated flow (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <ArchitectFlow />
          </motion.div>

        </div>
      </Container>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
