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

  const headX   = mood === 'puzzled' ? -5 : mood === 'clarity' ? 0 : 3;
  const headRot = mood === 'puzzled' ? -8 : 0;
  const torsoRot = mood === 'puzzled' ? -2 : mood === 'clarity' ? 0 : 2;

  // Glow colours per mood
  const glowColor =
    mood === 'puzzled'   ? 'rgba(136,144,168,0.18)' :
    mood === 'clarity'   ? 'rgba(236,44,68,0.22)'   :
                           'rgba(93,224,230,0.20)';

  return (
    <div className="relative flex items-center justify-center w-full select-none" aria-hidden>
      {/* Soft ambient glow behind character */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        animate={{ background: glowColor }}
        transition={{ duration: 0.6 }}
        style={{ width: 420, height: 420, filter: 'blur(80px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />

      <svg
        viewBox="0 0 320 380"
        style={{ width: '100%', maxWidth: 480, height: 'auto', overflow: 'visible', display: 'block' }}
      >
        {/* ── Background plate — gives the character a subtle stage ── */}
        <ellipse cx="160" cy="310" rx="130" ry="18" fill="rgba(0,0,0,0.25)" />

        {/* ── Desk surface ── */}
        <rect x="20" y="262" width="280" height="10" rx="3" fill="#2a3050" />
        <rect x="40"  y="272" width="10" height="70" rx="3" fill="#222740" />
        <rect x="270" y="272" width="10" height="70" rx="3" fill="#222740" />

        {/* ── Monitor ── */}
        <rect x="92" y="172" width="136" height="92" rx="6"
          fill="#111827" stroke="#374151" strokeWidth="2" />
        <rect x="99" y="179" width="122" height="76" rx="3" fill="#0a0f1c" />
        {/* Stand */}
        <rect x="151" y="264" width="18" height="10" fill="#2a3050" />
        <rect x="138" y="272" width="44" height="6" rx="2" fill="#2a3050" />

        {/* ── Screen: architecture diagram ── */}
        <g>
          <rect x="107" y="189" width="32" height="16" rx="2" fill="rgba(83,74,183,0.25)" stroke="#534AB7" strokeWidth="1" />
          <text x="123" y="200" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="#a8a2f0">BIZ</text>

          <rect x="150" y="189" width="32" height="16" rx="2" fill="rgba(15,110,86,0.25)" stroke="#0F6E56" strokeWidth="1" />
          <text x="166" y="200" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="#5DCAA5">APP</text>

          <rect x="128" y="214" width="32" height="16" rx="2" fill="rgba(236,44,68,0.2)" stroke="#EC2C44" strokeWidth="1" />
          <text x="144" y="225" textAnchor="middle" fontFamily="monospace" fontSize="6.5" fill="#f09595">TECH</text>

          <line x1="131" y1="205" x2="138" y2="214" stroke="#EC2C44" strokeWidth="0.8" opacity="0.6" />
          <line x1="166" y1="205" x2="155" y2="214" stroke="#EC2C44" strokeWidth="0.8" opacity="0.6" />

          <motion.rect x="186" y="237" width="8" height="2" rx="1"
            fill="#EC2C44"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </g>

        {/* ── Keyboard ── */}
        <rect x="95" y="264" width="90" height="8" rx="2" fill="#1e2538" stroke="#2d3650" strokeWidth="1" />

        {/* ── Body / shirt ── */}
        <motion.g
          animate={{ rotate: torsoRot }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 160, damping: 18 }}
          style={{ transformOrigin: '160px 215px' }}
        >
          <rect x="126" y="134" width="68" height="58" rx="14" fill="#2d3a8c" />
          {/* Lapels */}
          <path d="M152 134 L160 152 L168 134" fill="#3d4d9c" />
          {/* Tie */}
          <path d="M157 145 L163 145 L164 176 L160 181 L156 176 Z" fill="#EC2C44" />
          {/* Shirt buttons */}
          <circle cx="160" cy="160" r="1.5" fill="#4a5aac" />
          <circle cx="160" cy="168" r="1.5" fill="#4a5aac" />

          {/* Left arm */}
          <motion.path
            d="M126 150 Q90 182 80 210"
            stroke="#2d3a8c" strokeWidth="18" strokeLinecap="round" fill="none"
            animate={{ d: mood === 'clarity' ? 'M126 144 Q100 120 88 98' : 'M126 150 Q90 182 80 210' }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 140, damping: 20 }}
          />
          <motion.circle
            cx="78" cy="212" r="9" fill="#d4a574"
            animate={{ cx: mood === 'clarity' ? 84 : 78, cy: mood === 'clarity' ? 96 : 212 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 140, damping: 20 }}
          />

          {/* Right arm */}
          <path d="M194 150 Q230 182 240 210" stroke="#2d3a8c" strokeWidth="18" strokeLinecap="round" fill="none" />
          <circle cx="242" cy="212" r="9" fill="#d4a574" />
        </motion.g>

        {/* ── Neck ── */}
        <motion.rect
          x="152" y="122" width="16" height="16" rx="5" fill="#d4a574"
          animate={{ x: 152 + headX * 0.5 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 180 }}
        />

        {/* ── Head ── */}
        <motion.g
          animate={{ x: headX, rotate: headRot }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 160, damping: 18 }}
          style={{ transformOrigin: '160px 90px' }}
        >
          {/* Head */}
          <ellipse cx="160" cy="90" rx="38" ry="42" fill="#d4a574" />

          {/* Hair */}
          <ellipse cx="160" cy="52" rx="38" ry="14" fill="#2c1a0e" />
          <path d="M122 78 Q124 52 160 47 Q196 52 198 78" fill="#2c1a0e" />

          {/* Ears */}
          <ellipse cx="122" cy="90" rx="7" ry="10" fill="#c49060" />
          <ellipse cx="198" cy="90" rx="7" ry="10" fill="#c49060" />

          {/* Glasses */}
          <circle cx="148" cy="90" r="12" fill="rgba(255,255,255,0.06)" stroke="#b8a070" strokeWidth="2" />
          <circle cx="172" cy="90" r="12" fill="rgba(255,255,255,0.06)" stroke="#b8a070" strokeWidth="2" />
          <line x1="160" y1="90" x2="160" y2="90" stroke="#b8a070" strokeWidth="2" />
          <line x1="136" y1="86" x2="128" y2="83" stroke="#b8a070" strokeWidth="2" />
          <line x1="184" y1="86" x2="192" y2="83" stroke="#b8a070" strokeWidth="2" />

          {/* Eyes */}
          <AnimatePresence mode="wait">
            {mood === 'puzzled' && (
              <motion.g key="ep" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                <ellipse cx="148" cy="90" rx="5" ry="4.5" fill="#1a0e06" />
                <ellipse cx="172" cy="90" rx="5" ry="4.5" fill="#1a0e06" />
                <path d="M141 81 Q148 78 155 81" stroke="#7a4820" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                <path d="M165 80 Q172 77 179 81" stroke="#7a4820" strokeWidth="2.2" fill="none" strokeLinecap="round" />
              </motion.g>
            )}
            {mood === 'clarity' && (
              <motion.g key="ec" initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} style={{ transformOrigin: '160px 90px' }}>
                <ellipse cx="148" cy="90" rx="7" ry="7" fill="#1a0e06" />
                <ellipse cx="172" cy="90" rx="7" ry="7" fill="#1a0e06" />
                <circle cx="150" cy="87" r="2.5" fill="white" />
                <circle cx="174" cy="87" r="2.5" fill="white" />
                <path d="M141 79 Q148 75 155 79" stroke="#7a4820" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                <path d="M165 79 Q172 75 179 79" stroke="#7a4820" strokeWidth="2.2" fill="none" strokeLinecap="round" />
              </motion.g>
            )}
            {mood === 'satisfied' && (
              <motion.g key="es" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <path d="M142 91 Q148 85 154 91" stroke="#1a0e06" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M166 91 Q172 85 178 91" stroke="#1a0e06" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M141 82 Q148 80 155 82" stroke="#7a4820" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M165 82 Q172 80 179 82" stroke="#7a4820" strokeWidth="2" fill="none" strokeLinecap="round" />
              </motion.g>
            )}
          </AnimatePresence>

          {/* Mouth */}
          <AnimatePresence mode="wait">
            {mood === 'puzzled' && (
              <motion.path key="mp" d="M151 109 Q160 107 169 109"
                stroke="#b07848" strokeWidth="2.5" fill="none" strokeLinecap="round"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} />
            )}
            {mood === 'clarity' && (
              <motion.path key="mc" d="M151 108 Q160 116 169 108"
                stroke="#b07848" strokeWidth="2.5" fill="none" strokeLinecap="round"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} />
            )}
            {mood === 'satisfied' && (
              <motion.g key="ms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <path d="M148 106 Q160 120 172 106" stroke="#b07848" strokeWidth="3" fill="none" strokeLinecap="round" />
                <ellipse cx="138" cy="102" rx="8" ry="5" fill="rgba(220,120,80,0.35)" />
                <ellipse cx="182" cy="102" rx="8" ry="5" fill="rgba(220,120,80,0.35)" />
              </motion.g>
            )}
          </AnimatePresence>
        </motion.g>

        {/* ── Floating indicators ── */}
        <AnimatePresence>
          {mood === 'puzzled' && (
            <motion.g key="fp"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.text x="210" y="60" textAnchor="middle" fontFamily="sans-serif" fontSize="36" fontWeight="bold" fill="#8890a8"
                animate={{ y: [0, -8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>?</motion.text>
              <motion.text x="232" y="82" textAnchor="middle" fontFamily="sans-serif" fontSize="22" fill="#8890a8" opacity="0.45"
                animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}>?</motion.text>
            </motion.g>
          )}
          {mood === 'clarity' && (
            <motion.g key="fc"
              initial={{ opacity: 0, scale: 0.2 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.2 }}
              transition={{ type: 'spring', stiffness: 300, damping: 16 }}
              style={{ transformOrigin: '212px 52px' }}
            >
              <circle cx="212" cy="52" r="24" fill="rgba(236,44,68,0.15)" stroke="rgba(236,44,68,0.55)" strokeWidth="2" />
              <path d="M204 52 Q204 40 212 37 Q220 40 220 52 L219 59 L205 59 Z" fill="rgba(236,44,68,0.7)" />
              <rect x="205" y="59" width="14" height="4" rx="1.5" fill="rgba(236,44,68,0.6)" />
              <rect x="206" y="63" width="12" height="3" rx="1" fill="rgba(236,44,68,0.45)" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                const r = Math.PI / 180;
                const x1 = 212 + Math.cos(deg * r) * 28, y1 = 52 + Math.sin(deg * r) * 28;
                const x2 = 212 + Math.cos(deg * r) * 34, y2 = 52 + Math.sin(deg * r) * 34;
                return <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#EC2C44" strokeWidth="2" strokeLinecap="round"
                  initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.7] }} transition={{ delay: i * 0.04, duration: 0.4 }} />;
              })}
            </motion.g>
          )}
          {mood === 'satisfied' && (
            <motion.g key="fs"
              initial={{ opacity: 0, scale: 0.2, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              style={{ transformOrigin: '214px 52px' }}
            >
              <circle cx="214" cy="52" r="24" fill="rgba(93,224,230,0.12)" stroke="rgba(93,224,230,0.5)" strokeWidth="2" />
              <motion.path d="M204 52 L211 60 L224 40"
                stroke="#5de0e6" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: 0.1 }} />
            </motion.g>
          )}
        </AnimatePresence>

        {/* ── State label ── */}
        <AnimatePresence mode="wait">
          {mood === 'puzzled' && (
            <motion.text key="lp" x="160" y="358" textAnchor="middle" fontFamily="monospace" fontSize="10" letterSpacing="3" fill="#475569"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              WORKING THROUGH IT…
            </motion.text>
          )}
          {mood === 'clarity' && (
            <motion.text key="lc" x="160" y="358" textAnchor="middle" fontFamily="monospace" fontSize="10" letterSpacing="3" fill="#EC2C44"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              BREAKTHROUGH
            </motion.text>
          )}
          {mood === 'satisfied' && (
            <motion.text key="ls" x="160" y="358" textAnchor="middle" fontFamily="monospace" fontSize="10" letterSpacing="3" fill="#5de0e6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              PROBLEM SOLVED
            </motion.text>
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
    <section className="relative bg-[#060b14] overflow-hidden min-h-screen flex flex-col">

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
            style={{ minHeight: 480 }}
          >
            <ArchitectCharacter />
          </motion.div>
        </motion.div>

      </Container>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
