'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookDemoDialog } from '@/components/ui/BookDemoDialog';
import { Container } from '@/components/ui/Container';

const STATS = [
  { value: '50+',   label: 'EA Teams' },
  { value: '10×',   label: 'Faster',   accent: true },
  { value: '100%',  label: 'TOGAF Ready' },
];

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative bg-[#060b14] overflow-hidden">
      {/* Diagonal stripe texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #5de0e6 0, #5de0e6 1px, transparent 0, transparent 60%)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Hard vertical rule far right */}
        <div className="absolute inset-y-0 right-[5%] w-px bg-white/4 hidden lg:block" />
      </div>

      {/* ── Status bar ──────────────────────────────────── */}
      <div className="relative z-10 border-b border-white/8">
        <Container>
          <div className="flex items-center justify-between pt-20 md:pt-24 pb-3">
            <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase">
              Enterprise Insight · AI Platform
            </span>
            <span className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.16em] text-primary-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-none bg-primary-500 animate-pulse" />
              AI-First · Now Available
            </span>
          </div>
        </Container>
      </div>

      <Container className="relative z-10">

        {/* ── Headline ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="pt-10 md:pt-14 pb-10"
        >
          <h1
            className="font-black uppercase tracking-tighter leading-[0.88] text-white"
            style={{ fontSize: 'clamp(3rem, 11vw, 7.5rem)' }}
          >
            Make Your<br />
            Architects<br />
            <span className="text-primary-500">Unstoppable.</span>
          </h1>
        </motion.div>

        {/* ── Divider + body / stats row ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="border-t border-white/10 pt-8 pb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16 items-start">
            {/* Subtext */}
            <p className="md:col-span-3 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
              Legacy EA platforms were built for compliance decks and consultant slide shows.
              Enterprise Insight is built for architects who move at the speed of the
              business — AI that understands your architecture, end to end.
            </p>

            {/* Stats */}
            <div className="md:col-span-2 grid grid-cols-3 gap-0 self-end">
              {STATS.map((s) => (
                <div key={s.label} className="border-l border-white/10 pl-4">
                  <div
                    className={`font-black leading-none text-2xl md:text-4xl ${
                      s.accent ? 'text-primary-500' : 'text-white'
                    }`}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-600 mt-2 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Divider + CTA row ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="border-t border-white/10 pt-8 pb-20 md:pb-28"
        >
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <button
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-bold uppercase tracking-widest text-white bg-primary-500 hover:bg-primary-600 active:translate-y-px active:translate-x-px transition-all duration-100 focus-visible:outline-none"
              style={{ boxShadow: '4px 4px 0 rgba(120,10,20,0.55)' }}
            >
              Book a Demo
            </button>
            <a
              href="#ai-features"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-bold uppercase tracking-widest text-slate-300 border border-white/15 hover:border-white/35 hover:text-white transition-colors duration-150"
            >
              See How It Works →
            </a>
            <span className="hidden md:block sm:ml-auto text-[10px] font-mono uppercase tracking-wider text-slate-700 self-center">
              No commitment · Live Q&amp;A · Personalised walkthrough
            </span>
          </div>
        </motion.div>

      </Container>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
