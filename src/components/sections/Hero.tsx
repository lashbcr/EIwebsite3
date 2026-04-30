'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookDemoDialog } from '@/components/ui/BookDemoDialog';
import { Container } from '@/components/ui/Container';

// ── Architect character ────────────────────────────────────────────────────────

type Mood = 'puzzled' | 'clarity' | 'satisfied';

const SEQUENCE: Mood[] = ['puzzled', 'clarity', 'satisfied'];
const DURATIONS: Record<Mood, number> = { puzzled: 3200, clarity: 2000, satisfied: 4000 };

function ArchitectCharacter() {
  const [moodIdx, setMoodIdx] = useState(0);
  const mood = SEQUENCE[moodIdx];

  useEffect(() => {
    const t = setTimeout(
      () => setMoodIdx((i) => (i + 1) % SEQUENCE.length),
      DURATIONS[mood],
    );
    return () => clearTimeout(t);
  }, [mood]);

  // Head x shifts slightly per mood
  const headX = mood === 'puzzled' ? -4 : mood === 'clarity' ? 0 : 2;
  // Torso lean
  const torsoRotate = mood === 'puzzled' ? -3 : mood === 'clarity' ? 0 : 3;

  return (
    <div className="relative flex items-center justify-center w-full h-full select-none" aria-hidden>
      <svg
        viewBox="0 0 260 300"
        className="w-full max-w-[260px] md:max-w-[300px]"
        style={{ overflow: 'visible' }}
      >
        {/* ── Desk ── */}
        <rect x="20" y="212" width="220" height="7" rx="2" fill="#161b2e" />
        <rect x="40"  y="219" width="7" height="55" rx="2" fill="#111623" />
        <rect x="213" y="219" width="7" height="55" rx="2" fill="#111623" />

        {/* ── Monitor ── */}
        <rect x="82" y="142" width="96" height="72" rx="5"
          fill="#0a0f1c" stroke="#252a40" strokeWidth="1.5" />
        <rect x="87" y="147" width="86" height="60" rx="3" fill="#060b14" />
        {/* Stand */}
        <rect x="124" y="214" width="12" height="7" fill="#161b2e" />
        <rect x="114" y="219" width="32" height="4" rx="1" fill="#161b2e" />

        {/* ── Screen content: mini architecture diagram ── */}
        <g opacity="0.65">
          <rect x="95"  y="155" width="22" height="11" rx="1.5" fill="none" stroke="#534AB7" strokeWidth="0.9" />
          <text x="106" y="163" textAnchor="middle" fontFamily="monospace" fontSize="4.5" fill="#534AB7">BIZ</text>

          <rect x="124" y="155" width="22" height="11" rx="1.5" fill="none" stroke="#0F6E56" strokeWidth="0.9" />
          <text x="135" y="163" textAnchor="middle" fontFamily="monospace" fontSize="4.5" fill="#0F6E56">APP</text>

          <rect x="109" y="173" width="22" height="11" rx="1.5" fill="none" stroke="#EC2C44" strokeWidth="0.9" />
          <text x="120" y="181" textAnchor="middle" fontFamily="monospace" fontSize="4.5" fill="#EC2C44">TECH</text>

          <line x1="113" y1="166" x2="118" y2="173" stroke="#EC2C44" strokeWidth="0.6" strokeOpacity="0.5" />
          <line x1="135" y1="166" x2="124" y2="173" stroke="#EC2C44" strokeWidth="0.6" strokeOpacity="0.5" />

          {/* Cursor blink on screen */}
          <motion.rect
            x="152" y="193" width="6" height="1.5" rx="0.5"
            fill="#EC2C44" opacity="0.7"
            animate={{ opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        </g>

        {/* ── Torso / body ── */}
        <motion.g
          animate={{ rotate: torsoRotate }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 180, damping: 18 }}
          style={{ transformOrigin: '130px 175px' }}
        >
          {/* Shirt */}
          <rect x="104" y="108" width="52" height="46" rx="10" fill="#1e2540" />
          {/* Collar */}
          <path d="M122 108 L130 120 L138 108" fill="#273050" />
          {/* Tie */}
          <path d="M128 115 L132 115 L133 140 L130 144 L127 140 Z" fill="#EC2C44" opacity="0.85" />

          {/* Left arm — rests on desk */}
          <motion.path
            d="M104 122 Q76 148 68 170"
            stroke="#1e2540" strokeWidth="12" strokeLinecap="round" fill="none"
            animate={{
              d: mood === 'clarity'
                ? 'M104 115 Q80 95 72 78'
                : 'M104 122 Q76 148 68 170',
            }}
            transition={{ duration: 0.45, type: 'spring', stiffness: 160, damping: 22 }}
          />
          {/* Left hand */}
          <motion.circle
            cx="66" cy="172"
            r="7"
            fill="#c8956a"
            animate={{ cx: mood === 'clarity' ? 70 : 66, cy: mood === 'clarity' ? 76 : 172 }}
            transition={{ duration: 0.45, type: 'spring', stiffness: 160, damping: 22 }}
          />

          {/* Right arm — on keyboard */}
          <path d="M156 122 Q182 148 188 170" stroke="#1e2540" strokeWidth="12" strokeLinecap="round" fill="none" />
          <circle cx="190" cy="172" r="7" fill="#c8956a" />
        </motion.g>

        {/* ── Neck ── */}
        <motion.rect
          x="124" y="97" width="12" height="14" rx="4"
          fill="#c8956a"
          animate={{ x: 124 + headX * 0.6 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 180 }}
        />

        {/* ── Head ── */}
        <motion.g
          animate={{ x: headX, rotate: mood === 'puzzled' ? -6 : 0 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 180, damping: 18 }}
          style={{ transformOrigin: '130px 76px' }}
        >
          {/* Head shape */}
          <ellipse cx="130" cy="76" rx="28" ry="30" fill="#c8956a" />

          {/* Hair */}
          <ellipse cx="130" cy="52" rx="28" ry="10" fill="#2e1f14" />
          <path d="M102 68 Q104 50 130 46 Q156 50 158 68" fill="#2e1f14" />

          {/* Ears */}
          <ellipse cx="102" cy="76" rx="5" ry="7" fill="#b87d52" />
          <ellipse cx="158" cy="76" rx="5" ry="7" fill="#b87d52" />

          {/* Glasses frames */}
          <circle cx="120" cy="76" r="9" fill="none" stroke="#8a7050" strokeWidth="1.5" />
          <circle cx="140" cy="76" r="9" fill="none" stroke="#8a7050" strokeWidth="1.5" />
          <line x1="129" y1="76" x2="131" y2="76" stroke="#8a7050" strokeWidth="1.5" />
          <line x1="111" y1="73" x2="106" y2="71" stroke="#8a7050" strokeWidth="1.5" />
          <line x1="149" y1="73" x2="154" y2="71" stroke="#8a7050" strokeWidth="1.5" />

          {/* ── Eyes — swap per mood ── */}
          <AnimatePresence mode="wait">
            {mood === 'puzzled' && (
              <motion.g key="eyes-puzzled"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {/* Slightly squinting, one eyebrow raised */}
                <ellipse cx="120" cy="76" rx="4" ry="3.5" fill="#2a1a0e" />
                <ellipse cx="140" cy="76" rx="4" ry="3.5" fill="#2a1a0e" />
                {/* Furrowed brows — one higher */}
                <path d="M113 67 Q120 65 127 67" stroke="#5a3820" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <path d="M133 66 Q140 64 147 67" stroke="#5a3820" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              </motion.g>
            )}

            {mood === 'clarity' && (
              <motion.g key="eyes-clarity"
                initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ transformOrigin: '130px 76px' }}
              >
                {/* Wide open eyes */}
                <ellipse cx="120" cy="76" rx="5.5" ry="5.5" fill="#2a1a0e" />
                <ellipse cx="140" cy="76" rx="5.5" ry="5.5" fill="#2a1a0e" />
                <circle cx="122" cy="74" r="1.8" fill="white" />
                <circle cx="142" cy="74" r="1.8" fill="white" />
                {/* Raised brows */}
                <path d="M113 65 Q120 62 127 65" stroke="#5a3820" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <path d="M133 65 Q140 62 147 65" stroke="#5a3820" strokeWidth="1.8" fill="none" strokeLinecap="round" />
              </motion.g>
            )}

            {mood === 'satisfied' && (
              <motion.g key="eyes-satisfied"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* Happy arc eyes */}
                <path d="M115 76 Q120 71 125 76" stroke="#2a1a0e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M135 76 Q140 71 145 76" stroke="#2a1a0e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Relaxed brows */}
                <path d="M113 68 Q120 67 127 68" stroke="#5a3820" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M133 68 Q140 67 147 68" stroke="#5a3820" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </motion.g>
            )}
          </AnimatePresence>

          {/* ── Mouth — swap per mood ── */}
          <AnimatePresence mode="wait">
            {mood === 'puzzled' && (
              <motion.path key="mouth-puzzled"
                d="M122 92 Q130 90 138 92"
                stroke="#9a6040" strokeWidth="2" fill="none" strokeLinecap="round"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              />
            )}
            {mood === 'clarity' && (
              <motion.path key="mouth-clarity"
                d="M122 91 Q130 97 138 91"
                stroke="#9a6040" strokeWidth="2" fill="none" strokeLinecap="round"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              />
            )}
            {mood === 'satisfied' && (
              <motion.g key="mouth-satisfied"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <path d="M119 90 Q130 102 141 90"
                  stroke="#9a6040" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Cheek blush */}
                <ellipse cx="111" cy="85" rx="6" ry="3.5" fill="rgba(220,120,90,0.3)" />
                <ellipse cx="149" cy="85" rx="6" ry="3.5" fill="rgba(220,120,90,0.3)" />
              </motion.g>
            )}
          </AnimatePresence>
        </motion.g>

        {/* ── Floating indicators ── */}
        <AnimatePresence>
          {mood === 'puzzled' && (
            <motion.g key="float-puzzled"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <motion.text
                x="166" y="52"
                textAnchor="middle" fontFamily="monospace" fontSize="24"
                fill="#8890a8"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              >?</motion.text>
              <motion.text
                x="182" y="66"
                textAnchor="middle" fontFamily="monospace" fontSize="14"
                fill="#8890a8" opacity="0.4"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              >?</motion.text>
            </motion.g>
          )}

          {mood === 'clarity' && (
            <motion.g key="float-clarity"
              initial={{ opacity: 0, scale: 0.2 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{ type: 'spring', stiffness: 320, damping: 16 }}
              style={{ transformOrigin: '168px 44px' }}
            >
              {/* Lightbulb */}
              <circle cx="168" cy="44" r="16"
                fill="rgba(236,44,68,0.12)" stroke="rgba(236,44,68,0.5)" strokeWidth="1.5" />
              {/* Bulb body */}
              <path d="M162 44 Q162 36 168 34 Q174 36 174 44 L173 49 L163 49 Z"
                fill="rgba(236,44,68,0.6)" />
              <rect x="163" y="49" width="10" height="3" rx="1" fill="rgba(236,44,68,0.5)" />
              <rect x="164" y="52" width="8" height="2" rx="1" fill="rgba(236,44,68,0.4)" />
              {/* Rays */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                const rad = (deg * Math.PI) / 180;
                const x1 = 168 + Math.cos(rad) * 19;
                const y1 = 44 + Math.sin(rad) * 19;
                const x2 = 168 + Math.cos(rad) * 23;
                const y2 = 44 + Math.sin(rad) * 23;
                return (
                  <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#EC2C44" strokeWidth="1.5" strokeLinecap="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.6] }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  />
                );
              })}
            </motion.g>
          )}

          {mood === 'satisfied' && (
            <motion.g key="float-satisfied"
              initial={{ opacity: 0, scale: 0.3, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              style={{ transformOrigin: '170px 46px' }}
            >
              <circle cx="170" cy="46" r="16"
                fill="rgba(93,224,230,0.1)" stroke="rgba(93,224,230,0.45)" strokeWidth="1.5" />
              <motion.path
                d="M162 46 L168 52 L178 38"
                stroke="#5de0e6" strokeWidth="2.5" fill="none"
                strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
              />
            </motion.g>
          )}
        </AnimatePresence>

        {/* ── Mood label ── */}
        <AnimatePresence mode="wait">
          {mood === 'puzzled' && (
            <motion.text key="lbl-p" x="130" y="293"
              textAnchor="middle" fontFamily="monospace" fontSize="7.5"
              letterSpacing="2.5" fill="#475569"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >WORKING THROUGH IT…</motion.text>
          )}
          {mood === 'clarity' && (
            <motion.text key="lbl-c" x="130" y="293"
              textAnchor="middle" fontFamily="monospace" fontSize="7.5"
              letterSpacing="2.5" fill="#EC2C44"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >BREAKTHROUGH</motion.text>
          )}
          {mood === 'satisfied' && (
            <motion.text key="lbl-s" x="130" y="293"
              textAnchor="middle" fontFamily="monospace" fontSize="7.5"
              letterSpacing="2.5" fill="#5de0e6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >PROBLEM SOLVED</motion.text>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative bg-[#060b14] overflow-hidden min-h-[88vh] flex flex-col">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.035,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        {/* Subtle red radial wash, top-left */}
        <div className="absolute -top-40 -left-20 w-[600px] h-[500px] rounded-full blur-[140px]"
          style={{ background: 'rgba(236,44,68,0.06)' }} />
      </div>

      <Container className="relative z-10 flex-1 flex flex-col">

        {/* ── Headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="pt-28 md:pt-32 pb-6"
        >
          <h1
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: 'clamp(2.2rem, 7vw, 5rem)' }}
          >
            Make Your<br />
            Architects<br />
            <span className="text-primary-500">Unstoppable.</span>
          </h1>
        </motion.div>

        {/* ── Two-column: copy + character ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="border-t border-white/10 pt-8 pb-14 md:pb-20 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left: subtext + CTAs */}
          <div className="flex flex-col gap-8">
            <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-md">
              Move fast without losing context. Keep your architecture in sync with a
              tool built for today&apos;s enterprise architects.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center justify-center h-12 px-8 text-sm font-bold uppercase tracking-widest text-white bg-primary-500 hover:bg-primary-600 active:translate-y-px transition-all duration-100 focus-visible:outline-none"
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
              <span className="hidden md:block sm:ml-auto text-[10px] font-mono uppercase tracking-wider text-slate-700 self-center whitespace-nowrap">
                No commitment · Live Q&amp;A
              </span>
            </div>
          </div>

          {/* Right: animated architect */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center"
            style={{ minHeight: 320 }}
          >
            <ArchitectCharacter />
          </motion.div>
        </motion.div>

      </Container>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
