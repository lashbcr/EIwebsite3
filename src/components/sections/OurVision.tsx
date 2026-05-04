'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

// ── Icons ──────────────────────────────────────────────────────────────────────

function StrategyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3L13.2 8.8L19 10L13.2 11.2L12 17L10.8 11.2L5 10L10.8 8.8L12 3Z" />
      <path d="M19 17l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
    </svg>
  );
}

function ImplementIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────

const STEPS = [
  {
    index: '01',
    label: 'Conceptual Change Management',
    description: 'Your architecture models define what needs to change and why.',
    glowColor: 'rgba(236,44,68,0.28)',
    accentColor: '#EC2C44',
    iconBg: 'rgba(236,44,68,0.1)',
    iconBorder: 'rgba(236,44,68,0.22)',
    topBorder: 'rgba(236,44,68,0.5)',
    Icon: StrategyIcon,
  },
  {
    index: '02',
    label: 'AI-Generated Change Manifests',
    description: 'Enterprise Insight converts architecture into structured, machine-readable change manifests automatically.',
    glowColor: 'rgba(93,224,230,0.22)',
    accentColor: '#5de0e6',
    iconBg: 'rgba(93,224,230,0.08)',
    iconBorder: 'rgba(93,224,230,0.2)',
    topBorder: 'rgba(93,224,230,0.45)',
    Icon: AIIcon,
  },
  {
    index: '03',
    label: 'Physical Change Implementation',
    description: 'Downstream teams get ready-to-execute tickets and runbooks — derived directly from architectural decisions.',
    glowColor: 'rgba(148,163,184,0.18)',
    accentColor: '#94a3b8',
    iconBg: 'rgba(148,163,184,0.07)',
    iconBorder: 'rgba(148,163,184,0.18)',
    topBorder: 'rgba(148,163,184,0.35)',
    Icon: ImplementIcon,
  },
];

// ── Glass card ─────────────────────────────────────────────────────────────────

function GlassCard({ step, delay }: { step: typeof STEPS[number]; delay: number }) {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div
        className="relative h-full flex flex-col overflow-hidden"
        style={{
          /* Glass surface — dark enough to mask background blobs */
          background: 'linear-gradient(160deg, rgba(255,255,255,0.055) 0%, rgba(14,22,40,0.85) 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderTop: `1px solid ${step.topBorder}`,
          borderRadius: '16px',
          backdropFilter: 'blur(20px) saturate(130%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)',
        }}
      >
        {/* Bottom glow — contained, won't reach text */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '110px',
            background: `radial-gradient(ellipse at 50% 110%, ${step.glowColor} 0%, transparent 70%)`,
          }}
        />

        {/* Content — sits above glow via relative z-index */}
        <div className="relative z-10 flex flex-col flex-1 p-7 md:p-8">
          {/* Index */}
          <span className="text-[9px] font-mono tracking-[0.26em] uppercase block mb-5"
            style={{ color: step.accentColor, opacity: 0.7 }}>
            {step.index}
          </span>

          {/* Icon box */}
          <div
            className="w-11 h-11 flex items-center justify-center mb-6 shrink-0"
            style={{
              background: step.iconBg,
              border: `1px solid ${step.iconBorder}`,
              borderRadius: '10px',
              color: step.accentColor,
              boxShadow: `0 0 12px ${step.glowColor}`,
            }}
          >
            <step.Icon />
          </div>

          {/* Title */}
          <h3 className="text-[15px] font-bold text-white leading-snug mb-3 tracking-tight">
            {step.label}
          </h3>

          {/* Description */}
          <p className="text-[13px] text-slate-300 leading-relaxed flex-1">
            {step.description}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ── Closing the gap graphic — two diverging worlds converging through EI ─────

function ClosingGapGraphic() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <svg
        viewBox="0 0 800 200"
        className="w-full h-auto"
        style={{ display: 'block' }}
        aria-hidden
      >
        <defs>
          <linearGradient id="leftFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#534AB7" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#534AB7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="rightFade" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="#0F6E56" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#0F6E56" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="centerGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EC2C44" stopOpacity="0" />
            <stop offset="50%" stopColor="#EC2C44" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#EC2C44" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Soft glow column behind centre */}
        <rect x="370" y="20" width="60" height="160" fill="url(#centerGlow)" opacity="0.4" />
        <motion.circle
          cx="400" cy="100" r="60"
          fill="rgba(236,44,68,0.06)"
          animate={{ r: [60, 70, 60] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── LEFT WORLD: "Intent" — strategic, abstract ── */}
        <text x="60" y="38" fontFamily="monospace" fontSize="9" letterSpacing="2.5" fill="#a8a2f0" opacity="0.85">INTENT</text>
        <text x="60" y="50" fontFamily="monospace" fontSize="7" letterSpacing="1.5" fill="#5a5e80">Strategic models</text>

        {/* Left scattered nodes — fragmented, drifting toward centre */}
        {[
          { x: 70,  y: 80,  w: 64, h: 18, label: 'Strategy' },
          { x: 50,  y: 108, w: 48, h: 16, label: 'Capability' },
          { x: 110, y: 132, w: 56, h: 16, label: 'Roadmap' },
          { x: 160, y: 100, w: 44, h: 14, label: 'Value' },
        ].map((n, i) => (
          <motion.g
            key={`L${i}`}
            initial={{ opacity: 0.3, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="2"
              fill="rgba(83,74,183,0.12)" stroke="rgba(168,162,240,0.45)" strokeWidth="0.8" />
            <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 2.5}
              textAnchor="middle" fontFamily="monospace" fontSize="6"
              fill="#a8a2f0" letterSpacing="0.5">{n.label}</text>
          </motion.g>
        ))}

        {/* Left convergence lines — flowing toward centre */}
        {[80, 100, 120, 140].map((y, i) => (
          <motion.path
            key={`Ll${i}`}
            d={`M210 ${y} Q310 ${y + (i - 1.5) * 8} 380 100`}
            stroke="url(#leftFade)" strokeWidth="1" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}

        {/* Animated data pulses traveling from left to centre */}
        {[0.3, 0.6, 0.9].map((delay, i) => {
          const yPath = 90 + i * 20;
          return (
            <motion.circle
              key={`Lp${i}`}
              r="2.5" fill="#a8a2f0"
              animate={{
                cx: [210, 380],
                cy: [yPath, 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay,
                times: [0, 0.5, 1],
                ease: 'easeOut',
              }}
              style={{ filter: 'drop-shadow(0 0 4px rgba(168,162,240,0.7))' }}
            />
          );
        })}

        {/* ── CENTER: Enterprise Insight bridge ── */}
        <motion.rect
          x="380" y="60" width="40" height="80" rx="4"
          fill="rgba(236,44,68,0.18)"
          stroke="#EC2C44" strokeWidth="1.5"
          animate={{ stroke: ['#EC2C44', '#ff5a72', '#EC2C44'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text x="400" y="86" textAnchor="middle"
          fontFamily="monospace" fontSize="6.5" letterSpacing="1.2" fill="#EC2C44">EI</text>
        <text x="400" y="100" textAnchor="middle"
          fontFamily="monospace" fontSize="5.5" letterSpacing="0.8" fill="#f09595">enterprise</text>
        <text x="400" y="110" textAnchor="middle"
          fontFamily="monospace" fontSize="5.5" letterSpacing="0.8" fill="#f09595">insight</text>
        {/* Vertical accent dots */}
        <circle cx="400" cy="68" r="1.5" fill="#EC2C44" />
        <circle cx="400" cy="132" r="1.5" fill="#EC2C44" />

        {/* Animated sync sweep */}
        <motion.line
          x1="380" x2="420" y1="100" y2="100"
          stroke="#ff5a72" strokeWidth="1.5"
          animate={{ y1: [60, 140, 60], y2: [60, 140, 60], opacity: [0, 0.9, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── RIGHT WORLD: "Reality" — concrete, structured ── */}
        <text x="740" y="38" textAnchor="end" fontFamily="monospace" fontSize="9" letterSpacing="2.5" fill="#7ddcb8" opacity="0.85">REALITY</text>
        <text x="740" y="50" textAnchor="end" fontFamily="monospace" fontSize="7" letterSpacing="1.5" fill="#5a5e80">Implementation</text>

        {/* Right ordered nodes — clean, aligned */}
        {[
          { x: 626, y: 78,  w: 60, h: 16, label: 'Tickets' },
          { x: 696, y: 78,  w: 60, h: 16, label: 'Runbooks' },
          { x: 626, y: 100, w: 60, h: 16, label: 'Pipelines' },
          { x: 696, y: 100, w: 60, h: 16, label: 'IaC' },
          { x: 626, y: 122, w: 60, h: 16, label: 'Monitoring' },
          { x: 696, y: 122, w: 60, h: 16, label: 'Audits' },
        ].map((n, i) => (
          <motion.g
            key={`R${i}`}
            initial={{ opacity: 0.3, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.6 + i * 0.05 }}
          >
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="2"
              fill="rgba(15,110,86,0.15)" stroke="rgba(125,220,184,0.45)" strokeWidth="0.8" />
            <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 2.5}
              textAnchor="middle" fontFamily="monospace" fontSize="6"
              fill="#7ddcb8" letterSpacing="0.5">{n.label}</text>
          </motion.g>
        ))}

        {/* Right convergence lines — flowing from centre out */}
        {[86, 108, 130].map((y, i) => (
          <motion.path
            key={`Rl${i}`}
            d={`M420 100 Q500 ${y - 4 + i * 4} 620 ${y}`}
            stroke="url(#rightFade)" strokeWidth="1" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.7 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, delay: 0.7 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}

        {/* Animated data pulses traveling from centre to right */}
        {[0.0, 0.6, 1.2].map((delay, i) => {
          const yPath = 86 + i * 22;
          return (
            <motion.circle
              key={`Rp${i}`}
              r="2.5" fill="#7ddcb8"
              animate={{
                cx: [420, 620],
                cy: [100, yPath],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: 1.1 + delay,
                times: [0, 0.5, 1],
                ease: 'easeIn',
              }}
              style={{ filter: 'drop-shadow(0 0 4px rgba(125,220,184,0.7))' }}
            />
          );
        })}

        {/* ── Bottom caption arrows ── */}
        <text x="160" y="180" textAnchor="middle" fontFamily="monospace" fontSize="7" letterSpacing="2" fill="#475569" opacity="0.6">
          What needs to change
        </text>
        <text x="640" y="180" textAnchor="middle" fontFamily="monospace" fontSize="7" letterSpacing="2" fill="#475569" opacity="0.6">
          What actually changes
        </text>
      </svg>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function OurVision() {
  return (
    <section className="bg-[#060b14] border-t border-white/8 overflow-hidden relative">

      {/* Background ambient — pushed to corners, well away from card content */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-[120px]"
          style={{ background: 'rgba(236,44,68,0.04)' }} />
        <div className="absolute -bottom-24 -right-24 w-[520px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'rgba(93,224,230,0.03)' }} />
      </div>

      <Container className="relative py-16 md:py-24">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase shrink-0">Platform Vision</span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        {/* Headline */}
        <AnimatedSection className="mb-10">
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: 'clamp(1.6rem, 4.5vw, 3.2rem)' }}
          >
            Closing the Gap Between<br />
            <span className="text-primary-500">Intent</span> and Reality.
          </h2>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-xl">
            EA defines <em>what</em> to change. Enterprise Insight drives <em>how</em> — automatically translating
            strategic decisions into downstream implementation.
          </p>
        </AnimatedSection>

        {/* "Closing the gap" visual — two halves converging through Enterprise Insight */}
        <AnimatedSection delay={0.15} className="mb-12">
          <ClosingGapGraphic />
        </AnimatedSection>

        {/* Glass cards — equal-height row */}
        <div className="grid md:grid-cols-3 gap-4 mb-4 md:items-stretch">
          {STEPS.map((step, i) => (
            <GlassCard key={step.label} step={step} delay={i * 0.1} />
          ))}
        </div>

        {/* Vision statement card */}
        <AnimatedSection delay={0.35}>
          <div
            className="relative overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(14,22,40,0.85) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: '1px solid rgba(236,44,68,0.3)',
              borderRadius: '16px',
              backdropFilter: 'blur(20px) saturate(130%)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {/* Contained corner glow */}
            <div aria-hidden className="absolute bottom-0 left-0 w-[320px] h-[160px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(236,44,68,0.1) 0%, transparent 70%)' }} />

            <div className="relative z-10 p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start">
              <div>
                <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase block mb-5">
                  The Platform Positioning
                </span>
                <h3
                  className="font-black tracking-tighter leading-[0.95] text-white uppercase"
                  style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.9rem)' }}
                >
                  The tool that bridges conceptual and physical change management.
                </h3>
              </div>

              {/* Divider — only on md+ */}
              <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-white/6 pointer-events-none" />

              <div className="space-y-3 text-[13px] text-slate-300 leading-relaxed">
                <p>
                  The gap between architectural models and engineering execution is where transformation stalls.
                  Enterprise Insight is built to close it.
                </p>
                <p>
                  One AI-powered thread from strategic vision to verified, auditable implementation — no fidelity lost at handoff.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </Container>
    </section>
  );
}
