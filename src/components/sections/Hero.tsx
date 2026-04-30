'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookDemoDialog } from '@/components/ui/BookDemoDialog';
import { Container } from '@/components/ui/Container';

// ── Architect character — playful, unstoppable energy ─────────────────────────

type Mood = 'planning' | 'ignition' | 'blastoff';

const SEQUENCE: Mood[] = ['planning', 'ignition', 'blastoff'];
const DURATIONS: Record<Mood, number> = { planning: 2800, ignition: 1500, blastoff: 3200 };

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

  // Body bob & lean
  const bodyY     = mood === 'blastoff' ? -8 : 0;
  const torsoTilt = mood === 'planning' ? -2 : mood === 'ignition' ? -3 : 0;
  const headTilt  = mood === 'planning' ? -8 : mood === 'ignition' ? 4 : 0;

  // Glow colour shifts with mood
  const glowColor =
    mood === 'planning' ? 'rgba(83,74,183,0.18)'   :
    mood === 'ignition' ? 'rgba(255,107,53,0.30)'  :
                          'rgba(236,44,68,0.32)';

  return (
    <div className="relative flex items-center justify-center w-full select-none" aria-hidden>
      {/* Ambient glow that shifts with mood */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        animate={{ background: glowColor }}
        transition={{ duration: 0.6 }}
        style={{ width: 460, height: 460, filter: 'blur(90px)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />

      <svg
        viewBox="0 0 380 360"
        style={{ width: '100%', maxWidth: 540, height: 'auto', overflow: 'visible', display: 'block' }}
      >
        <defs>
          {/* Rocket flame gradient */}
          <linearGradient id="flame" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff5b8" />
            <stop offset="35%" stopColor="#ffd23f" />
            <stop offset="75%" stopColor="#ff6b35" />
            <stop offset="100%" stopColor="#ec2c44" stopOpacity="0" />
          </linearGradient>
          {/* Hair highlight */}
          <linearGradient id="hairLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5a3820" />
            <stop offset="100%" stopColor="#2c1a0e" />
          </linearGradient>
        </defs>

        {/* ── Floor shadow ── */}
        <ellipse cx="190" cy="312" rx="155" ry="14" fill="rgba(0,0,0,0.35)" />

        {/* ── Body bob group — wraps everything that should idle-float ── */}
        <motion.g
          animate={{ y: bodyY }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 14 }}
        >
          {/* Idle bob — gentle continuous up-down */}
          <motion.g
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >

            {/* ── Launch console / desk ── */}
            <rect x="78" y="252" width="180" height="58" rx="6" fill="#1a2240" stroke="#2c3568" strokeWidth="1.5" />
            <rect x="78" y="252" width="180" height="6" fill="#2c3568" />
            {/* Console buttons */}
            <circle cx="100" cy="278" r="5" fill="rgba(236,44,68,0.85)" />
            <circle cx="116" cy="278" r="5" fill="#5de0e6" opacity="0.75" />
            <circle cx="132" cy="278" r="5" fill="#ffd23f" opacity="0.8" />
            {/* Console screen */}
            <rect x="150" y="266" width="100" height="32" rx="3" fill="#0a0f1c" stroke="#2c3568" strokeWidth="1" />
            <motion.rect
              x="155" y="270" width="0" height="3" rx="1" fill="#5de0e6"
              animate={{ width: mood === 'planning' ? [0, 90, 0] : mood === 'ignition' ? 90 : [90, 90, 0] }}
              transition={{ duration: mood === 'planning' ? 2.4 : 0.8, repeat: mood === 'planning' ? Infinity : 0 }}
            />
            <motion.rect
              x="155" y="278" width="0" height="3" rx="1" fill="#EC2C44"
              animate={{ width: mood === 'ignition' ? [0, 90] : mood === 'blastoff' ? 90 : 0 }}
              transition={{ duration: 0.6 }}
            />
            <motion.rect
              x="155" y="286" width="0" height="3" rx="1" fill="#ffd23f"
              animate={{ width: mood === 'blastoff' ? [0, 90] : 0 }}
              transition={{ duration: 0.5 }}
            />
            {/* Status label on console */}
            <motion.text
              x="200" y="247" textAnchor="middle" fontFamily="monospace" fontSize="7" letterSpacing="1.5"
              fill={mood === 'planning' ? '#5de0e6' : mood === 'ignition' ? '#ffd23f' : '#EC2C44'}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              {mood === 'planning' ? 'SYSTEMS NOMINAL' : mood === 'ignition' ? 'IGNITION READY' : 'LAUNCH COMMITTED'}
            </motion.text>

            {/* ── Architect — torso ── */}
            <motion.g
              animate={{ rotate: torsoTilt }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 160, damping: 18 }}
              style={{ transformOrigin: '140px 220px' }}
            >
              {/* Torso (suit) */}
              <path d="M104 158 Q104 154 110 152 L170 152 Q176 154 176 158 L182 252 L98 252 Z"
                fill="#2d3a8c" />
              {/* Suit lapels */}
              <path d="M132 152 L140 176 L148 152 Z" fill="#3d4d9c" />
              {/* Shirt collar v */}
              <path d="M134 152 L140 168 L146 152 Z" fill="#f0f4ff" />
              {/* Tie */}
              <path d="M137 168 L143 168 L145 215 L140 222 L135 215 Z" fill="#EC2C44" />
              <path d="M137 168 L143 168 L142 174 L138 174 Z" fill="#c41f35" />

              {/* Left arm — varies per mood */}
              <motion.path
                d="M104 165 Q70 195 64 232"
                stroke="#2d3a8c" strokeWidth="20" strokeLinecap="round" fill="none"
                animate={{
                  d:
                    mood === 'ignition' ? 'M104 158 Q92 132 96 100' :   // pointing up at rocket
                    mood === 'blastoff' ? 'M104 156 Q70 110 60 70' :    // arm raised in triumph
                                          'M104 165 Q70 195 64 232',    // resting at console
                }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 140, damping: 20 }}
              />
              <motion.circle
                r="10" fill="#d4a574"
                animate={{
                  cx: mood === 'ignition' ? 96  : mood === 'blastoff' ? 60  : 62,
                  cy: mood === 'ignition' ? 98  : mood === 'blastoff' ? 68  : 234,
                }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 140, damping: 20 }}
              />
              {/* Pointing finger during ignition */}
              {mood === 'ignition' && (
                <motion.line
                  x1="96" y1="98" x2="96" y2="86"
                  stroke="#d4a574" strokeWidth="4" strokeLinecap="round"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3 }}
                />
              )}

              {/* Right arm */}
              <motion.path
                stroke="#2d3a8c" strokeWidth="20" strokeLinecap="round" fill="none"
                animate={{
                  d:
                    mood === 'blastoff' ? 'M176 156 Q210 110 220 70'  :  // raised triumph
                                          'M176 165 Q210 195 218 232',   // resting on console
                }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 140, damping: 20 }}
              />
              <motion.circle
                r="10" fill="#d4a574"
                animate={{
                  cx: mood === 'blastoff' ? 220 : 220,
                  cy: mood === 'blastoff' ? 68  : 234,
                }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 140, damping: 20 }}
              />
            </motion.g>

            {/* ── Neck ── */}
            <rect x="132" y="138" width="16" height="18" rx="6" fill="#d4a574" />

            {/* ── Head with modern hair ── */}
            <motion.g
              animate={{ rotate: headTilt }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 160, damping: 18 }}
              style={{ transformOrigin: '140px 100px' }}
            >
              {/* Head */}
              <ellipse cx="140" cy="100" rx="36" ry="40" fill="#d4a574" />
              {/* Ears */}
              <ellipse cx="105" cy="102" rx="6" ry="9" fill="#c49060" />
              <ellipse cx="175" cy="102" rx="6" ry="9" fill="#c49060" />

              {/* Modern swept hair — undercut + voluminous top */}
              {/* Sides (shorter, darker) */}
              <path d="M104 92 Q102 78 110 70 L112 86 Q108 90 104 92 Z" fill="#1a0f08" />
              <path d="M176 92 Q178 78 170 70 L168 86 Q172 90 176 92 Z" fill="#1a0f08" />
              {/* Main hair mass — swept from right to left */}
              <path
                d="M104 88 Q102 60 124 50 Q145 40 168 46 Q182 52 178 70 Q176 80 174 86 Q170 78 162 76 Q150 76 142 80 Q132 84 124 78 Q116 76 110 80 Q106 84 104 88 Z"
                fill="url(#hairLight)"
              />
              {/* Hair flick / forelock — gives motion */}
              <motion.path
                d="M126 50 Q140 36 158 40 Q156 50 148 52 Q138 54 126 50 Z"
                fill="#5a3820"
                animate={{ rotate: mood === 'blastoff' ? 6 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: '142px 48px' }}
              />
              {/* Highlight strand */}
              <path d="M132 52 Q142 46 154 50" stroke="#7a5036" strokeWidth="1.5" fill="none" strokeLinecap="round" />

              {/* Glasses — modern square frames */}
              <rect x="116" y="92" width="20" height="16" rx="3" fill="rgba(255,255,255,0.05)" stroke="#b8a070" strokeWidth="2" />
              <rect x="144" y="92" width="20" height="16" rx="3" fill="rgba(255,255,255,0.05)" stroke="#b8a070" strokeWidth="2" />
              <line x1="136" y1="100" x2="144" y2="100" stroke="#b8a070" strokeWidth="2" />
              <line x1="116" y1="96" x2="108" y2="93" stroke="#b8a070" strokeWidth="2" />
              <line x1="164" y1="96" x2="172" y2="93" stroke="#b8a070" strokeWidth="2" />

              {/* Eyes — swap per mood */}
              <AnimatePresence mode="wait">
                {mood === 'planning' && (
                  <motion.g key="ep" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                    {/* Focused, looking down at console */}
                    <ellipse cx="126" cy="103" rx="3.5" ry="3.5" fill="#1a0e06" />
                    <ellipse cx="154" cy="103" rx="3.5" ry="3.5" fill="#1a0e06" />
                    <path d="M120 88 Q126 86 132 88" stroke="#5a3820" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M148 88 Q154 86 160 88" stroke="#5a3820" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </motion.g>
                )}
                {mood === 'ignition' && (
                  <motion.g key="ei" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} style={{ transformOrigin: '140px 100px' }}>
                    {/* Wide, alert, sparkles */}
                    <ellipse cx="126" cy="100" rx="6" ry="6.5" fill="#1a0e06" />
                    <ellipse cx="154" cy="100" rx="6" ry="6.5" fill="#1a0e06" />
                    <circle cx="128" cy="98" r="2.4" fill="#fff" />
                    <circle cx="156" cy="98" r="2.4" fill="#fff" />
                    <circle cx="124" cy="103" r="1" fill="#fff" />
                    <circle cx="152" cy="103" r="1" fill="#fff" />
                    <path d="M118 86 Q126 81 134 86" stroke="#5a3820" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                    <path d="M146 86 Q154 81 162 86" stroke="#5a3820" strokeWidth="2.2" fill="none" strokeLinecap="round" />
                  </motion.g>
                )}
                {mood === 'blastoff' && (
                  <motion.g key="eb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
                    {/* Triumphant — eyes closed in joy */}
                    <path d="M119 102 Q126 96 133 102" stroke="#1a0e06" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M147 102 Q154 96 161 102" stroke="#1a0e06" strokeWidth="3" fill="none" strokeLinecap="round" />
                    <path d="M118 88 Q126 86 134 88" stroke="#5a3820" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M146 88 Q154 86 162 88" stroke="#5a3820" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </motion.g>
                )}
              </AnimatePresence>

              {/* Mouth — swap per mood */}
              <AnimatePresence mode="wait">
                {mood === 'planning' && (
                  <motion.path key="mp" d="M132 122 Q140 121 148 122"
                    stroke="#b07848" strokeWidth="2.4" fill="none" strokeLinecap="round"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} />
                )}
                {mood === 'ignition' && (
                  <motion.g key="mi" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                    {/* Mouth open in surprise/excitement */}
                    <ellipse cx="140" cy="122" rx="5" ry="3.5" fill="#1a0e06" />
                  </motion.g>
                )}
                {mood === 'blastoff' && (
                  <motion.g key="mb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
                    {/* Big smile + cheeks */}
                    <path d="M128 118 Q140 132 152 118" stroke="#1a0e06" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M128 118 Q140 130 152 118 L150 122 Q140 128 130 122 Z" fill="#7a2030" />
                    <ellipse cx="118" cy="114" rx="6" ry="4" fill="rgba(220,120,80,0.4)" />
                    <ellipse cx="162" cy="114" rx="6" ry="4" fill="rgba(220,120,80,0.4)" />
                  </motion.g>
                )}
              </AnimatePresence>
            </motion.g>
          </motion.g>
        </motion.g>

        {/* ── ROCKET — the unstoppable momentum ─────────────────────────────── */}
        <motion.g
          animate={
            mood === 'planning' ? { x: 0, y: 0, rotate: 0 } :
            mood === 'ignition' ? { x: [0, -1, 1, -1, 1, 0], y: [0, -2, -3, -4, -5], rotate: 0 } :
            { x: 220, y: -340, rotate: 14 }
          }
          transition={
            mood === 'blastoff'
              ? { x: { duration: 1.6, ease: [0.4, 0, 0.2, 1] }, y: { duration: 1.6, ease: [0.4, 0, 0.2, 1] }, rotate: { duration: 1.6 } }
              : mood === 'ignition'
                ? { duration: 0.4, repeat: Infinity, repeatType: 'reverse' }
                : { duration: 0.5 }
          }
          style={{ transformOrigin: '290px 220px' }}
        >
          {/* Flame — only during ignition + blastoff */}
          <AnimatePresence>
            {(mood === 'ignition' || mood === 'blastoff') && (
              <motion.g
                key="flame"
                initial={{ opacity: 0, scaleY: 0.3 }}
                animate={{ opacity: 1, scaleY: mood === 'ignition' ? [0.6, 1, 0.6] : [1, 1.4, 1] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, repeat: Infinity, repeatType: 'reverse' }}
                style={{ transformOrigin: '290px 232px' }}
              >
                <path d="M278 232 L302 232 L296 260 L290 250 L284 260 Z" fill="url(#flame)" />
                <path d="M283 232 L297 232 L294 248 L290 242 L286 248 Z" fill="#fff5b8" opacity="0.9" />
              </motion.g>
            )}
          </AnimatePresence>

          {/* Rocket body */}
          <g>
            {/* Nose cone */}
            <path d="M290 178 Q280 188 282 200 L298 200 Q300 188 290 178 Z" fill="#EC2C44" />
            {/* Body */}
            <rect x="282" y="200" width="16" height="32" rx="2" fill="#f5f5f8" />
            {/* Window */}
            <circle cx="290" cy="210" r="3" fill="#5de0e6" stroke="#2d3568" strokeWidth="1" />
            {/* Stripe */}
            <rect x="282" y="220" width="16" height="3" fill="#EC2C44" />
            {/* Fins */}
            <path d="M282 224 L274 234 L282 232 Z" fill="#EC2C44" />
            <path d="M298 224 L306 234 L298 232 Z" fill="#EC2C44" />
            {/* Nozzle */}
            <rect x="285" y="231" width="10" height="3" rx="1" fill="#2d3568" />
          </g>
        </motion.g>

        {/* ── Smoke + spark particles at launch base ── */}
        <AnimatePresence>
          {mood === 'ignition' && (
            <motion.g key="smoke" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {[0, 1, 2, 3].map((i) => (
                <motion.circle
                  key={i}
                  cx={285 + (i - 1.5) * 6}
                  cy="245"
                  r="4"
                  fill="rgba(255,255,255,0.45)"
                  animate={{
                    cx: 285 + (i - 1.5) * 14,
                    cy: 252,
                    r: [4, 8, 0],
                    opacity: [0.6, 0.4, 0],
                  }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </motion.g>
          )}
        </AnimatePresence>

        {/* ── Trail particles during blastoff ── */}
        <AnimatePresence>
          {mood === 'blastoff' && (
            <motion.g key="trail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {[...Array(18)].map((_, i) => {
                // Sample points along rocket arc from (290, 232) to (510, -108)
                const t = i / 17;
                const x = 290 + 220 * t;
                const y = 232 - 340 * t + 40 * t * (1 - t); // slight curve
                return (
                  <motion.circle
                    key={i}
                    cx={x} cy={y}
                    fill={i % 3 === 0 ? '#ffd23f' : i % 3 === 1 ? '#ff6b35' : '#fff'}
                    initial={{ r: 0, opacity: 0 }}
                    animate={{ r: [0, 4, 0], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 1.4, delay: i * 0.06, ease: 'easeOut' }}
                  />
                );
              })}
              {/* Burst at launch position */}
              {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                const r = Math.PI / 180;
                const x2 = 290 + Math.cos(deg * r) * 24;
                const y2 = 240 + Math.sin(deg * r) * 24;
                return (
                  <motion.line
                    key={`burst-${i}`}
                    x1="290" y1="240" x2={x2} y2={y2}
                    stroke="#ffd23f" strokeWidth="2.5" strokeLinecap="round"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: [0, 1, 0], pathLength: [0, 1, 1] }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                  />
                );
              })}
            </motion.g>
          )}
        </AnimatePresence>

        {/* ── Stars / sparkles in the upper space ── */}
        <AnimatePresence>
          {mood === 'blastoff' && (
            <motion.g key="stars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {[
                [60, 40], [340, 90], [50, 160], [350, 30], [220, 20], [80, 90],
              ].map(([cx, cy], i) => (
                <motion.path
                  key={i}
                  d={`M${cx} ${cy - 4} L${cx + 1.5} ${cy - 1.5} L${cx + 4} ${cy} L${cx + 1.5} ${cy + 1.5} L${cx} ${cy + 4} L${cx - 1.5} ${cy + 1.5} L${cx - 4} ${cy} L${cx - 1.5} ${cy - 1.5} Z`}
                  fill="#fff"
                  animate={{ opacity: [0, 1, 0.6], scale: [0, 1, 1] }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.08 }}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                />
              ))}
            </motion.g>
          )}
        </AnimatePresence>

        {/* ── State label ── */}
        <AnimatePresence mode="wait">
          {mood === 'planning' && (
            <motion.text key="lp" x="190" y="345" textAnchor="middle" fontFamily="monospace" fontSize="10" letterSpacing="3" fill="#475569"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              MAPPING THE MISSION
            </motion.text>
          )}
          {mood === 'ignition' && (
            <motion.text key="li" x="190" y="345" textAnchor="middle" fontFamily="monospace" fontSize="10" letterSpacing="3" fill="#ffd23f"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
              T-MINUS ZERO
            </motion.text>
          )}
          {mood === 'blastoff' && (
            <motion.text key="lb" x="190" y="345" textAnchor="middle" fontFamily="monospace" fontSize="10" letterSpacing="3" fill="#EC2C44"
              initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, type: 'spring' }}>
              UNSTOPPABLE
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
            style={{ minHeight: 520 }}
          >
            <ArchitectCharacter />
          </motion.div>

        </div>
      </Container>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
