'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { Container } from '@/components/ui/Container';

// ── Visuals ────────────────────────────────────────────────────────────────────

function NLVisual() {
  return (
    <div className="w-full font-mono text-xs space-y-3">
      <div className="flex items-start gap-2">
        <span className="shrink-0 mt-px text-[#EC2C44]">›</span>
        <span className="text-white">Map our cloud estate to ArchiMate 3.1</span>
      </div>
      <div className="flex items-start gap-2 pl-4 text-slate-400">
        <span className="shrink-0 text-[#EC2C44]">↳</span>
        <span>14 components identified across 3 layers</span>
      </div>
      <div className="flex items-start gap-2 pl-4 text-slate-400">
        <span className="text-[#EC2C44] shrink-0">↳</span>
        <span>Governance gap flagged — <span className="text-[#EC2C44]">Application layer</span></span>
      </div>
      <div className="flex items-start gap-2 pl-4 text-slate-400">
        <span className="shrink-0 text-[#EC2C44]">↳</span>
        <span>Diagram generated · <span className="text-white">2 recommendations ready</span></span>
      </div>
      <div className="flex items-start gap-2 pl-4 text-slate-500">
        <motion.span
          className="shrink-0 inline-block w-1.5 h-3 bg-[#EC2C44]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1.1, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

function RiskVisual() {
  const alerts = [
    { level: 'HIGH', color: '#EC2C44', bg: 'rgba(236,44,68,0.08)',  label: 'Compliance gap',     layer: 'Application layer' },
    { level: 'MED',  color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', label: 'Redundant services', layer: 'Technology layer'  },
    { level: 'LOW',  color: '#94a3b8', bg: 'rgba(148,163,184,0.06)', label: 'Naming inconsistency', layer: 'Business layer' },
  ];
  return (
    <div className="w-full space-y-2.5">
      {alerts.map((a, i) => (
        <motion.div
          key={a.label}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12, duration: 0.3 }}
          className="flex items-center gap-3 px-4 py-3 border font-mono text-xs rounded"
          style={{ borderColor: `${a.color}30`, background: a.bg }}
        >
          <span
            className="text-[9px] font-bold tracking-widest uppercase shrink-0 px-1.5 py-0.5 rounded"
            style={{ color: a.color, border: `1px solid ${a.color}40` }}
          >
            {a.level}
          </span>
          <span className="text-white flex-1">{a.label}</span>
          <span className="text-slate-600 text-[9px] tracking-widest shrink-0">{a.layer}</span>
        </motion.div>
      ))}
    </div>
  );
}

function ImpactVisual() {
  const nodes = [
    { id: 'A', label: 'Billing API',     x: 20, y: 50, changed: true },
    { id: 'B', label: 'Auth Service',    x: 50, y: 20, changed: false },
    { id: 'C', label: 'User DB',         x: 80, y: 20, changed: false },
    { id: 'D', label: 'Notifications',   x: 80, y: 50, changed: false },
    { id: 'E', label: 'Payment Gateway', x: 50, y: 80, changed: false },
  ];
  const edges = [['A','B'],['A','E'],['B','C'],['B','D']];
  return (
    <div className="w-full">
      <svg viewBox="0 0 100 100" className="w-full" style={{ height: 200 }}>
        {edges.map(([a, b]) => {
          const from = nodes.find(n => n.id === a)!;
          const to   = nodes.find(n => n.id === b)!;
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={from.x} y1={from.y} x2={to.x} y2={to.y}
              stroke="#EC2C44" strokeWidth="0.5" strokeOpacity="0.4"
              strokeDasharray="2 2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          );
        })}
        {nodes.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.25 }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <rect
              x={n.x - 11} y={n.y - 5.5} width={22} height={11} rx="1.5"
              fill={n.changed ? 'rgba(236,44,68,0.2)' : 'rgba(255,255,255,0.04)'}
              stroke={n.changed ? '#EC2C44' : 'rgba(255,255,255,0.12)'}
              strokeWidth="0.5"
            />
            <text x={n.x} y={n.y + 1.6} textAnchor="middle" fontSize="3.2" fill={n.changed ? '#EC2C44' : '#94a3b8'} fontFamily="monospace">
              {n.label.split(' ')[0]}
            </text>
          </motion.g>
        ))}
      </svg>
      <div className="flex items-center gap-4 mt-3 text-[9px] font-mono text-slate-600">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-[#EC2C44]/30 border border-[#EC2C44]/60 inline-block" /> Changed</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-white/4 border border-white/12 inline-block" /> Impacted</span>
      </div>
    </div>
  );
}

function DocsVisual() {
  return (
    <div className="w-full space-y-2.5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 bg-[#EC2C44]" />
        <span className="text-xs font-semibold text-white">Architecture Overview — Q2 2025</span>
        <span className="ml-auto text-[10px] px-2 py-0.5 font-mono rounded" style={{ background: 'rgba(236,44,68,0.12)', color: '#EC2C44' }}>
          AI-generated
        </span>
      </div>
      {[['w-3/4', 0], ['w-full', 0.05], ['w-5/6', 0.1], ['w-2/3', 0.18], ['w-full', 0.23], ['w-4/5', 0.28], ['w-3/5', 0.35], ['w-full', 0.4]].map(([w, delay], i) => (
        <motion.div
          key={i}
          className={`h-1.5 bg-slate-600/50 ${w} rounded-sm`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ transformOrigin: 'left' }}
          transition={{ delay: delay as number, duration: 0.4 }}
        />
      ))}
    </div>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    id: 'nl',
    badge: 'Natural Language',
    shortTitle: 'Ask in plain English. Get architecture.',
    title: 'Ask in plain English.\nGet architecture.',
    description: 'Describe changes, queries, or models in plain language. Enterprise Insight maps your intent across Business, Application, and Technology layers — automatically.',
    previewLabel: 'Ask anything about your architecture',
    visualTitle: 'AI Prompt Console',
    Visual: NLVisual,
  },
  {
    id: 'risk',
    badge: 'Risk Intelligence',
    shortTitle: 'Risks surfaced before they escalate.',
    title: 'Risks surfaced\nbefore they escalate.',
    description: 'Continuous AI monitoring flags gaps, redundancies, and compliance violations across your entire architecture landscape — in real time.',
    previewLabel: 'Detect compliance and structural risks',
    visualTitle: 'Live Risk Feed',
    Visual: RiskVisual,
  },
  {
    id: 'impact',
    badge: 'Impact Analysis',
    shortTitle: 'Know the blast radius instantly.',
    title: 'Know the blast\nradius instantly.',
    description: 'Trace upstream and downstream dependencies with one click. Model proposed changes before committing — and catch breaking changes before they happen.',
    previewLabel: 'Trace downstream dependencies',
    visualTitle: 'Dependency Graph',
    Visual: ImpactVisual,
  },
  {
    id: 'docs',
    badge: 'Auto Documentation',
    shortTitle: 'Documentation that writes itself.',
    title: 'Documentation\nthat writes itself.',
    description: 'AI drafts clear, stakeholder-ready architecture documents from your live data. Always accurate. Zero manual overhead.',
    previewLabel: 'Generate Q2 architecture overview',
    visualTitle: 'Auto-Generated Doc',
    Visual: DocsVisual,
  },
] as const;

type Feature = (typeof FEATURES)[number];

// ── Card content (the two-pane card body) ─────────────────────────────────────

function CardBody({
  feature,
  stepNum,
  totalSteps,
}: {
  feature: Feature;
  stepNum: number;
  totalSteps: number;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] rounded-2xl border border-white/8 bg-[rgba(10,17,32,0.85)] backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Left pane */}
      <div className="p-7 md:p-10 flex flex-col justify-center gap-5 border-b lg:border-b-0 lg:border-r border-white/6">
        <div className="flex items-center gap-4">
          <span className="text-sm font-mono text-slate-500">
            <span className="text-white font-semibold">{String(stepNum).padStart(2, '0')}</span>
            <span className="mx-1.5">/</span>
            <span>{String(totalSteps).padStart(2, '0')}</span>
          </span>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-primary-500 font-semibold">
            {feature.badge}
          </span>
        </div>

        <h3
          className="font-black uppercase tracking-tighter leading-[0.95] text-white"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
        >
          {feature.title.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h3>

        <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-md">
          {feature.description}
        </p>

        <div className="pt-1">
          <a
            href="/ai"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-150 rounded-full px-5 py-2.5 shadow-[0_4px_20px_rgba(236,44,68,0.35)]"
          >
            Read more about AI features
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right pane */}
      <div className="p-6 md:p-8 flex flex-col bg-[#06101e] min-h-[300px]">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ec2c44]" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              {feature.visualTitle}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-500">
              Live
            </span>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full">
            <feature.Visual />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 mt-5 pt-4 border-t border-white/6">
          <div className="flex items-center gap-2 min-w-0">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#EC2C44" className="shrink-0">
              <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" />
            </svg>
            <span className="text-sm text-slate-300 truncate">{feature.previewLabel}</span>
          </div>
          <a
            href="/ai"
            className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-white/8 hover:bg-primary-500 text-white transition-colors duration-150"
            aria-label="Explore"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Peek bar — preview of the next step ───────────────────────────────────────

function PeekBar({
  feature,
  stepNum,
  totalSteps,
}: {
  feature: Feature;
  stepNum: number;
  totalSteps: number;
}) {
  return (
    <div className="mt-3 px-6 py-4 rounded-xl border border-white/6 bg-white/[0.025] backdrop-blur-sm flex items-center gap-4">
      <span className="text-xs font-mono text-slate-600 shrink-0">
        <span className="text-slate-400">{String(stepNum).padStart(2, '0')}</span>
        <span className="mx-1">/</span>
        <span>{String(totalSteps).padStart(2, '0')}</span>
      </span>
      <span className="text-sm text-slate-400 truncate">{feature.shortTitle}</span>
      <span className="ml-auto text-[10px] font-mono uppercase tracking-widest text-slate-600 shrink-0">
        Next →
      </span>
    </div>
  );
}

// ── Scroll-driven step ─────────────────────────────────────────────────────────

function ScrollStep({
  feature,
  nextFeature,
  stepNum,
  totalSteps,
  scrollProgress,
  startFraction,
  endFraction,
  isFirst,
  isLast,
}: {
  feature: Feature;
  nextFeature: Feature | null;
  stepNum: number;
  totalSteps: number;
  scrollProgress: MotionValue<number>;
  startFraction: number;
  endFraction: number;
  isFirst: boolean;
  isLast: boolean;
}) {
  const FADE = 0.04;

  // First card: starts visible from progress 0 (no entry fade).
  // Last card: stays visible past its endFraction (no exit fade).
  const opacity = useTransform(scrollProgress, (p) => {
    if (isFirst && p < startFraction) return 1;
    if (!isFirst && p < startFraction - FADE) return 0;
    if (!isFirst && p < startFraction) return (p - (startFraction - FADE)) / FADE;
    if (p < endFraction) return 1;
    if (isLast) return 1;
    if (p < endFraction + FADE) return 1 - (p - endFraction) / FADE;
    return 0;
  });

  const y = useTransform(scrollProgress, (p) => {
    if (isFirst && p < startFraction) return 0;
    if (!isFirst && p < startFraction - FADE) return 40;
    if (!isFirst && p < startFraction) return 40 - ((p - (startFraction - FADE)) / FADE) * 40;
    if (p < endFraction) return 0;
    if (isLast) return 0;
    if (p < endFraction + FADE) return -((p - endFraction) / FADE) * 40;
    return -40;
  });

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center px-4 md:px-6 pt-12 md:pt-16 pb-20 md:pb-24"
      style={{ opacity, y }}
    >
      <div className="w-full max-w-5xl">
        <CardBody feature={feature} stepNum={stepNum} totalSteps={totalSteps} />
        {nextFeature && (
          <PeekBar feature={nextFeature} stepNum={stepNum + 1} totalSteps={totalSteps} />
        )}
      </div>
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function AIFeatures() {
  // useScroll on the sticky-card wrapper specifically — gives clean 0→1 across the cards' scroll zone
  const cardsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ['start start', 'end end'],
  });

  // Active step index for nav highlighting
  const activeStepIndex = useTransform(scrollYProgress, (v) =>
    Math.max(0, Math.min(FEATURES.length - 1, Math.floor(v * FEATURES.length)))
  );

  return (
    <section
      id="ai-features"
      className="relative bg-[#020c1a] border-t border-white/8"
    >
      {/* ── Section heading — scrolls naturally with the page ── */}
      <div className="relative pt-16 md:pt-24 pb-10 md:pb-12">
        {/* Ambient wash for the heading area */}
        <div className="absolute -top-32 -left-40 w-[500px] h-[400px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: 'rgba(236,44,68,0.05)' }} />
        <Container className="relative">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-mono tracking-[0.22em] text-slate-500 uppercase shrink-0">AI-Powered</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-black uppercase tracking-tighter leading-[0.9] text-white"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
            >
              Simpler<br />with AI.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs md:text-right">
              Four AI capabilities working together — scroll to explore.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Sticky cards zone ── */}
      <div
        ref={cardsRef}
        className="relative"
        style={{ height: `${100 * FEATURES.length}vh` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">

          {/* Ambient bottom corner */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -bottom-32 -right-32 w-[480px] h-[400px] rounded-full blur-[120px]"
              style={{ background: 'rgba(93,224,230,0.03)' }} />
          </div>

          {/* Cards stack */}
          <div className="absolute inset-0 z-10">
            <Container className="h-full">
              {FEATURES.map((f, i) => (
                <ScrollStep
                  key={f.id}
                  feature={f}
                  nextFeature={FEATURES[i + 1] ?? null}
                  stepNum={i + 1}
                  totalSteps={FEATURES.length}
                  scrollProgress={scrollYProgress}
                  startFraction={i / FEATURES.length}
                  endFraction={(i + 1) / FEATURES.length}
                  isFirst={i === 0}
                  isLast={i === FEATURES.length - 1}
                />
              ))}
            </Container>
          </div>

          {/* Step nav at bottom */}
          <div className="absolute bottom-0 left-0 right-0 pb-6 md:pb-8 z-20">
            <Container>
              <StepNavBar features={FEATURES} activeStepIndex={activeStepIndex} />
            </Container>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── Step nav at bottom ─────────────────────────────────────────────────────────

function StepNavBar({
  features,
  activeStepIndex,
}: {
  features: readonly Feature[];
  activeStepIndex: MotionValue<number>;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {features.map((f, i) => (
        <NavCell key={f.id} feature={f} index={i} activeStepIndex={activeStepIndex} />
      ))}
    </div>
  );
}

function NavCell({
  feature,
  index,
  activeStepIndex,
}: {
  feature: Feature;
  index: number;
  activeStepIndex: MotionValue<number>;
}) {
  const opacity = useTransform(activeStepIndex, (v) => (v === index ? 1 : 0.4));
  const barWidth = useTransform(activeStepIndex, (v) =>
    v > index ? '100%' : v === index ? '100%' : '0%'
  );

  return (
    <motion.div className="text-left" style={{ opacity }}>
      <div className="h-[2px] bg-white/6 overflow-hidden mb-2.5">
        <motion.div className="h-full bg-primary-500" style={{ width: barWidth }} />
      </div>
      <div className="flex items-baseline gap-2">
        <motion.span
          className="text-xs font-mono"
          style={{ color: useTransform(activeStepIndex, (v) => (v === index ? '#fff' : '#475569')) }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
          {feature.badge}
        </span>
      </div>
    </motion.div>
  );
}
