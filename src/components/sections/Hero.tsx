'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { BookDemoDialog } from '@/components/ui/BookDemoDialog';
import { Container } from '@/components/ui/Container';
import { ArchitectFlow } from '@/components/sections/ArchitectFlow';

const WORDS = ['Unstoppable', 'Informed', 'Efficient', 'Aligned', 'Empowered'];
const TYPE_MS = 80;
const DELETE_MS = 45;
const PAUSE_MS = 1800;

function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];

    if (!deleting && displayed === word) {
      const t = setTimeout(() => setDeleting(true), PAUSE_MS);
      return () => clearTimeout(t);
    }

    if (deleting && displayed === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
      return;
    }

    const delay = deleting ? DELETE_MS : TYPE_MS;
    const t = setTimeout(() => {
      setDisplayed(
        deleting
          ? word.slice(0, displayed.length - 1)
          : word.slice(0, displayed.length + 1),
      );
    }, delay);
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex]);

  return (
    <span className="">
      {displayed}
      <motion.span
        className="inline-block w-0.75 h-[0.85em] ml-1 align-middle rounded-sm bg-primary-500"
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear', times: [0, 0.48, 0.5, 0.98] }}
      />
    </span>
  );
}

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#060b14] pt-24 pb-20 md:pt-36 md:pb-32">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 dark:hidden"
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
          }}
        />
        <motion.div
          className="absolute inset-0 hidden dark:block"
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
          }}
        />
        <div
          className="absolute -top-60 left-1/2 -translate-x-1/2 w-225 h-150 opacity-15 dark:opacity-20"
          style={{ background: 'radial-gradient(ellipse at center top, #004aad 0%, transparent 65%)' }}
        />
      </div>

      <Container className="relative z-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-38 items-center">
          {/* Left: text content */}
          <div className="flex flex-col">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tight"
            >
              <span className="block text-slate-900 dark:text-white">Make Your Architects</span>
              <span className="block min-h-[1.1em]">
                <TypewriterText />
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-7 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl"
            >
              The EA platform built for speed, clarity and business-wide communication
            </motion.p>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />50+ EA teams</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />10× faster diagrams</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />TOGAF &amp; ArchiMate ready</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
            >
              <Button variant="primary" size="lg" className="w-full sm:w-auto h-13 sm:h-12 px-7 text-base shadow-[0_4px_20px_rgba(236,44,68,0.45)]" onClick={() => setDemoOpen(true)}>
                Book a Demo
              </Button>
              <div className="rounded-full w-full sm:w-auto" style={{ background: 'linear-gradient(90deg, #5de0e6, #004aad)', padding: '2px' }}>
                <a
                  href="#ai-features"
                  className="flex items-center justify-center font-semibold rounded-full h-13 sm:h-12 px-7 text-base text-slate-900 dark:text-white bg-white dark:bg-[#060b14] transition-all duration-200 focus-visible:outline-none"
                >
                  Build with AI
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: animated flow visualization (desktop only) */}
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
