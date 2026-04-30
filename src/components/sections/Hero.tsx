'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookDemoDialog } from '@/components/ui/BookDemoDialog';
import { Container } from '@/components/ui/Container';

// ── Architect — quiet mastery of complexity ───────────────────────────────────

type Phase = 'observing' | 'connecting' | 'aligned';

const SEQUENCE: Phase[] = ['observing', 'connecting', 'aligned'];
const DURATIONS: Record<Phase, number> = { observing: 3000, connecting: 3000, aligned: 3500 };

// Four TOGAF-style framework layers — drift positions (chaotic) → grid positions (aligned)
const NODES = [
  { id: 'B', label: 'BUSINESS',    drift: { x:  76, y: 162, r:  -6 }, grid: { x:  60, y:  50, r: 0 } },
  { id: 'A', label: 'APPLICATION', drift: { x: 200, y:  46, r:   8 }, grid: { x: 180, y:  50, r: 0 } },
  { id: 'D', label: 'DATA',        drift: { x:  68, y:  64, r:   4 }, grid: { x:  60, y: 132, r: 0 } },
  { id: 'T', label: 'TECHNOLOGY',  drift: { x: 188, y: 152, r: -10 }, grid: { x: 180, y: 132, r: 0 } },
] as const;

// Connections between aligned nodes (B↔A, B↔D, A↔T, D↔T)
const EDGES: { from: typeof NODES[number]['id']; to: typeof NODES[number]['id'] }[] = [
  { from: 'B', to: 'A' },
  { from: 'B', to: 'D' },
  { from: 'A', to: 'T' },
  { from: 'D', to: 'T' },
];

function ArchitectCharacter() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const phase = SEQUENCE[phaseIdx];

  useEffect(() => {
    const t = setTimeout(
      () => setPhaseIdx((i) => (i + 1) % SEQUENCE.length),
      DURATIONS[phase],
    );
    return () => clearTimeout(t);
  }, [phase]);

  // Subtle pose adjustments
  const headTilt  = phase === 'observing' ? -6 : phase === 'connecting' ? -2 : 0;

  // Helper: get node position based on phase
  const nodePos = (n: typeof NODES[number]) =>
    phase === 'observing' ? n.drift : n.grid;

  return (
    <div className="relative flex items-center justify-center w-full select-none" aria-hidden>
      {/* Very subtle ambient wash — no colour shift */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 360,
          height: 360,
          filter: 'blur(80px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          background: 'rgba(236,44,68,0.07)',
        }}
      />

      <svg
        viewBox="0 0 380 240"
        style={{ width: '100%', maxWidth: 420, height: 'auto', overflow: 'visible', display: 'block' }}
      >
        <defs>
          <linearGradient id="hairLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a2a1c" />
            <stop offset="100%" stopColor="#1f1410" />
          </linearGradient>
        </defs>

        {/* ── Subtle baseline ── */}
        <line x1="20" y1="220" x2="360" y2="220" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        {/* ── Architect — quiet, on the left ── */}
        <g>
          {/* Idle bob — barely perceptible */}
          <motion.g
            animate={{ y: [0, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >

            {/* ── Torso — refined slate suit ── */}
            <g>
              <path d="M22 138 Q22 134 28 132 L80 132 Q86 134 86 138 L92 220 L16 220 Z"
                fill="#324158" />
              {/* Lapels */}
              <path d="M44 132 L54 158 L64 132 Z" fill="#3d4d68" />
              {/* Shirt collar */}
              <path d="M48 132 L54 152 L60 132 Z" fill="#e8edf5" />
              {/* Subtle tie */}
              <path d="M51 152 L57 152 L58 192 L54 198 L50 192 Z" fill="#9c4452" />

              {/* Left arm — at rest */}
              <path d="M22 144 Q-2 174 -4 210" stroke="#324158" strokeWidth="14" strokeLinecap="round" fill="none" />
              <circle cx="-4" cy="212" r="7" fill="#c89d72" />

              {/* Right arm — extends slightly during connecting phase */}
              <motion.path
                stroke="#324158" strokeWidth="14" strokeLinecap="round" fill="none"
                animate={{
                  d: phase === 'connecting'
                    ? 'M86 144 Q116 158 132 152'   // gestures toward framework
                    : 'M86 144 Q108 174 110 210', // resting
                }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.circle
                r="7" fill="#c89d72"
                animate={{
                  cx: phase === 'connecting' ? 134 : 110,
                  cy: phase === 'connecting' ? 152 : 212,
                }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              />
            </g>

            {/* Neck */}
            <rect x="46" y="118" width="14" height="16" rx="5" fill="#c89d72" />

            {/* ── Head — modest, refined ── */}
            <motion.g
              animate={{ rotate: headTilt }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: '54px 84px' }}
            >
              {/* Head */}
              <ellipse cx="54" cy="84" rx="28" ry="32" fill="#c89d72" />
              {/* Ears */}
              <ellipse cx="27" cy="86" rx="4" ry="7" fill="#a87f54" />
              <ellipse cx="81" cy="86" rx="4" ry="7" fill="#a87f54" />

              {/* Hair — clean side part, professional */}
              <path
                d="M26 78 Q24 56 42 46 Q58 38 76 44 Q84 50 82 64 Q80 72 78 76 Q72 64 60 64 Q48 64 38 70 Q30 72 26 78 Z"
                fill="url(#hairLight)"
              />
              {/* Side part line */}
              <path d="M48 50 Q56 46 64 50" stroke="#0f0a06" strokeWidth="0.8" fill="none" />

              {/* Glasses — thin minimalist frames */}
              <rect x="34" y="80" width="16" height="12" rx="1.5" fill="none" stroke="#8a7556" strokeWidth="1.3" />
              <rect x="58" y="80" width="16" height="12" rx="1.5" fill="none" stroke="#8a7556" strokeWidth="1.3" />
              <line x1="50" y1="86" x2="58" y2="86" stroke="#8a7556" strokeWidth="1.3" />
              <line x1="34" y1="84" x2="28" y2="82" stroke="#8a7556" strokeWidth="1.3" />
              <line x1="74" y1="84" x2="80" y2="82" stroke="#8a7556" strokeWidth="1.3" />

              {/* Soft cheek warmth */}
              <ellipse cx="33" cy="96" rx="5" ry="3" fill="rgba(220,140,110,0.32)" />
              <ellipse cx="75" cy="96" rx="5" ry="3" fill="rgba(220,140,110,0.32)" />

              {/* Eyes — friendly, gently smiling across all phases */}
              <AnimatePresence mode="wait">
                {phase === 'aligned' ? (
                  <motion.g key="ea" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                    {/* Smiling-eye arcs when aligned */}
                    <path d="M37 86 Q42 82 47 86" stroke="#1a0e06" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M61 86 Q66 82 71 86" stroke="#1a0e06" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </motion.g>
                ) : (
                  <motion.g key="en" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                    {/* Open, attentive eyes with bright catchlights */}
                    <ellipse cx="42" cy="86" rx="2.6" ry="2.9" fill="#1a0e06" />
                    <ellipse cx="66" cy="86" rx="2.6" ry="2.9" fill="#1a0e06" />
                    <circle cx="43" cy="85" r="1" fill="#fff" />
                    <circle cx="67" cy="85" r="1" fill="#fff" />
                  </motion.g>
                )}
              </AnimatePresence>

              {/* Brows — gently lifted (open, friendly) */}
              <path d="M35 75 Q42 73 48 75" stroke="#3a2a1c" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d="M60 75 Q66 73 72 75" stroke="#3a2a1c" strokeWidth="1.4" fill="none" strokeLinecap="round" />

              {/* Mouth — warm smile across all phases, broader when aligned */}
              <AnimatePresence mode="wait">
                {phase === 'aligned' ? (
                  <motion.g key="ma" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                    <path d="M46 100 Q54 109 62 100"
                      stroke="#7a4828" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                    {/* Subtle inner mouth tone for genuine smile */}
                    <path d="M48 101 Q54 107 60 101 L59 103 Q54 106 49 103 Z" fill="rgba(140,60,60,0.4)" />
                  </motion.g>
                ) : (
                  <motion.path key="mn"
                    d="M47 102 Q54 106 61 102"
                    stroke="#7a4828" strokeWidth="1.7" fill="none" strokeLinecap="round"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </AnimatePresence>
            </motion.g>
          </motion.g>
        </g>

        {/* ── Framework diagram — the focus, on the right ────────────────────── */}
        <g transform="translate(140, 0)">

          {/* Subtle frame */}
          <rect x="0" y="20" width="240" height="180" rx="4"
            fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

          {/* Connection lines — only render when in connecting / aligned phases */}
          {EDGES.map(({ from, to }) => {
            const f = NODES.find((n) => n.id === from)!;
            const t = NODES.find((n) => n.id === to)!;
            return (
              <motion.line
                key={`${from}-${to}`}
                x1={f.grid.x + 28} y1={f.grid.y + 60}
                x2={t.grid.x + 28} y2={t.grid.y + 60}
                stroke="rgba(236,44,68,0.45)"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={false}
                animate={{
                  pathLength: phase === 'observing' ? 0 : 1,
                  opacity:    phase === 'observing' ? 0 : phase === 'connecting' ? 0.7 : 1,
                }}
                transition={{
                  pathLength: { duration: 1.2, delay: phase === 'connecting' ? 0.3 : 0, ease: [0.4, 0, 0.2, 1] },
                  opacity:    { duration: 0.6, delay: 0.2 },
                }}
              />
            );
          })}

          {/* Nodes */}
          {NODES.map((n, i) => {
            const target = nodePos(n);
            return (
              <motion.g
                key={n.id}
                animate={{
                  x: target.x,
                  y: target.y,
                  rotate: target.r,
                  opacity: phase === 'observing' ? 0.55 : 1,
                }}
                transition={{
                  duration: 1.4,
                  delay: phase === 'connecting' ? i * 0.08 : 0,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <rect width="56" height="38" rx="3"
                  fill="rgba(15,21,35,0.85)"
                  stroke={phase === 'aligned' ? 'rgba(236,44,68,0.55)' : 'rgba(255,255,255,0.18)'}
                  strokeWidth="1"
                />
                {/* Layer letter */}
                <text x="28" y="20" textAnchor="middle"
                  fontFamily="monospace" fontSize="11" fontWeight="700"
                  fill={phase === 'aligned' ? '#EC2C44' : '#94a3b8'}
                  letterSpacing="1.5"
                >{n.id}</text>
                {/* Layer label */}
                <text x="28" y="31" textAnchor="middle"
                  fontFamily="monospace" fontSize="5" letterSpacing="1.2"
                  fill={phase === 'aligned' ? '#cbd5e1' : '#64748b'}
                >{n.label}</text>
              </motion.g>
            );
          })}

          {/* Center connector dot — appears subtly when aligned */}
          <AnimatePresence>
            {phase === 'aligned' && (
              <motion.circle key="ctr"
                cx="120" cy="110" r="2" fill="#EC2C44"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0.7], scale: [0, 1.4, 1] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            )}
          </AnimatePresence>
        </g>

        {/* ── Phase label ── */}
        <AnimatePresence mode="wait">
          {phase === 'observing' && (
            <motion.text key="po" x="260" y="232" textAnchor="middle"
              fontFamily="monospace" fontSize="8" letterSpacing="2.5" fill="#475569"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >ASSESSING COMPLEXITY</motion.text>
          )}
          {phase === 'connecting' && (
            <motion.text key="pc" x="260" y="232" textAnchor="middle"
              fontFamily="monospace" fontSize="8" letterSpacing="2.5" fill="#64748b"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >MAPPING DEPENDENCIES</motion.text>
          )}
          {phase === 'aligned' && (
            <motion.text key="pa" x="260" y="232" textAnchor="middle"
              fontFamily="monospace" fontSize="8" letterSpacing="2.5" fill="#EC2C44"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >ALIGNED</motion.text>
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

        {/* ── Single unified two-column layout ── */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center pt-24 md:pt-28 pb-12 md:pb-16">

          {/* ── Left column: headline → divider → body → CTAs ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Headline */}
            <h1
              className="font-black uppercase tracking-tighter leading-[0.9] text-white"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)' }}
            >
              Make Your<br />
              Architects<br />
              <span className="text-primary-500">Unstoppable.</span>
            </h1>

            {/* Thin rule */}
            <div className="w-12 h-[2px] bg-primary-500" />

            {/* Body copy */}
            <p className="text-base text-slate-400 leading-relaxed max-w-sm">
              Move fast without losing context. Keep your architecture in sync with a
              tool built for today&apos;s enterprise architects.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 items-center pt-2">
              <button
                onClick={() => setDemoOpen(true)}
                className="inline-flex items-center justify-center h-12 px-8 text-sm font-bold uppercase tracking-widest text-white bg-primary-500 hover:bg-primary-600 active:translate-y-px transition-all duration-100 focus-visible:outline-none whitespace-nowrap shrink-0"
                style={{ boxShadow: '4px 4px 0 rgba(120,10,20,0.55)' }}
              >
                Book a Demo
              </button>
              <a
                href="#ai-features"
                className="inline-flex items-center justify-center h-12 px-6 text-sm font-bold uppercase tracking-widest text-slate-300 border border-white/15 hover:border-white/35 hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                See How It Works →
              </a>
            </div>

            {/* Trust line */}
            <p className="text-[11px] font-mono uppercase tracking-widest text-slate-600">
              No commitment · Live Q&amp;A · Personalised walkthrough
            </p>
          </motion.div>

          {/* ── Right column: animated architect ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: 'easeOut' }}
            className="hidden md:flex items-center justify-center"
            style={{ minHeight: 420 }}
          >
            <ArchitectCharacter />
          </motion.div>

        </div>
      </Container>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
