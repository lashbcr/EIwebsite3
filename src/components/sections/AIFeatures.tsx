'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const RED = '#EC2C44';
const STEP_DURATION = 6; // seconds per step

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
    { level: 'HIGH', color: '#EC2C44', bg: 'rgba(236,44,68,0.08)', label: 'Compliance gap',     layer: 'Application layer' },
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
    title: 'Ask in plain English.\nGet architecture.',
    description: 'Describe changes, queries, or models in plain language. Enterprise Insight maps your intent across Business, Application, and Technology layers — automatically.',
    previewLabel: 'Ask anything about your architecture',
    visualTitle: 'AI Prompt Console',
    Visual: NLVisual,
  },
  {
    id: 'risk',
    badge: 'Risk Intelligence',
    title: 'Risks surfaced\nbefore they escalate.',
    description: 'Continuous AI monitoring flags gaps, redundancies, and compliance violations across your entire architecture landscape — in real time.',
    previewLabel: 'Detect compliance and structural risks',
    visualTitle: 'Live Risk Feed',
    Visual: RiskVisual,
  },
  {
    id: 'impact',
    badge: 'Impact Analysis',
    title: 'Know the blast\nradius instantly.',
    description: 'Trace upstream and downstream dependencies with one click. Model proposed changes before committing — and catch breaking changes before they happen.',
    previewLabel: 'Trace downstream dependencies',
    visualTitle: 'Dependency Graph',
    Visual: ImpactVisual,
  },
  {
    id: 'docs',
    badge: 'Auto Documentation',
    title: 'Documentation\nthat writes itself.',
    description: 'AI drafts clear, stakeholder-ready architecture documents from your live data. Always accurate. Zero manual overhead.',
    previewLabel: 'Generate Q2 architecture overview',
    visualTitle: 'Auto-Generated Doc',
    Visual: DocsVisual,
  },
] as const;

type Feature = (typeof FEATURES)[number];

// ── Step card ──────────────────────────────────────────────────────────────────

function StepCard({
  feature,
  stepNum,
  totalSteps,
  progressKey,
}: {
  feature: Feature;
  stepNum: number;
  totalSteps: number;
  progressKey: number;
}) {
  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
      className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] min-h-[440px]"
    >
      {/* ── Left: copy ── */}
      <div className="p-8 md:p-12 flex flex-col justify-center gap-6 border-b lg:border-b-0 lg:border-r border-white/6">
        {/* Step counter + badge */}
        <div className="flex items-center gap-4 mb-2">
          <span className="text-sm font-mono text-slate-500">
            <span className="text-white font-semibold">{String(stepNum).padStart(2, '0')}</span>
            <span className="mx-1.5">/</span>
            <span>{String(totalSteps).padStart(2, '0')}</span>
          </span>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-primary-500 font-semibold">
            {feature.badge}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-black uppercase tracking-tighter leading-[0.95] text-white"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)' }}
        >
          {feature.title.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h3>

        {/* Description */}
        <p className="text-base text-slate-300 leading-relaxed max-w-md">
          {feature.description}
        </p>

        {/* CTA */}
        <div className="pt-2">
          <a
            href="/ai"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-150 rounded-full px-6 py-3 shadow-[0_4px_20px_rgba(236,44,68,0.35)]"
          >
            Read more about AI features
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Right: live product preview ── */}
      <div className="p-6 md:p-8 flex flex-col bg-[#06101e]">
        {/* Window chrome */}
        <div className="flex items-center justify-between mb-6">
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

        {/* Visual */}
        <div className="flex-1 flex items-center justify-center min-h-[200px]">
          <div className="w-full">
            <feature.Visual key={progressKey} />
          </div>
        </div>

        {/* Footer label + arrow */}
        <div className="flex items-center justify-between gap-3 mt-6 pt-5 border-t border-white/6">
          <div className="flex items-center gap-2 min-w-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EC2C44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" fill="#EC2C44" />
            </svg>
            <span className="text-sm text-slate-300 truncate">{feature.previewLabel}</span>
          </div>
          <a
            href="/ai"
            className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-white/8 hover:bg-primary-500 text-white transition-colors duration-150"
            aria-label="Explore this feature"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ── Step navigation ────────────────────────────────────────────────────────────

function StepNav({
  features,
  active,
  progressKey,
  onSelect,
}: {
  features: readonly Feature[];
  active: number;
  progressKey: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
      {features.map((f, i) => {
        const isActive = active === i;
        return (
          <button
            key={f.id}
            onClick={() => onSelect(i)}
            className="group text-left focus-visible:outline-none"
          >
            {/* Top progress bar */}
            <div className="h-[2px] bg-white/6 overflow-hidden mb-3">
              {isActive ? (
                <motion.div
                  key={progressKey}
                  className="h-full bg-primary-500"
                  style={{ transformOrigin: 'left' }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: STEP_DURATION, ease: 'linear' }}
                />
              ) : (
                <div className="h-full w-0 bg-primary-500" />
              )}
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className={`text-xs font-mono ${isActive ? 'text-white' : 'text-slate-600'}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                  isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                }`}
              >
                {f.badge}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function AIFeatures() {
  const [active, setActive] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [paused, setPaused] = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });
  const sectionInView = useInView(sectionRef, { once: false, margin: '-120px' });

  // Auto-advance
  useEffect(() => {
    if (paused || !sectionInView) return;
    const id = setTimeout(() => {
      setActive((prev) => (prev + 1) % FEATURES.length);
      setProgressKey((k) => k + 1);
    }, STEP_DURATION * 1000);
    return () => clearTimeout(id);
  }, [active, paused, sectionInView]);

  function selectStep(i: number) {
    setActive(i);
    setProgressKey((k) => k + 1);
  }

  return (
    <section
      id="ai-features"
      className="border-t border-white/8 relative overflow-hidden bg-[#020c1a]"
    >
      {/* Ambient corners */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: 'rgba(236,44,68,0.05)' }} />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'rgba(93,224,230,0.03)' }} />
      </div>

      <Container className="relative py-16 md:py-24">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-mono tracking-[0.22em] text-slate-500 uppercase shrink-0">AI-Powered</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-black uppercase tracking-tighter leading-[0.9] text-white"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
            >
              Simpler<br />
              with AI.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs md:text-right">
              Four AI capabilities working together — ask, detect, trace, document.
            </p>
          </div>
        </motion.div>

        {/* Step card */}
        <div
          ref={sectionRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="overflow-hidden rounded-2xl border border-white/8 bg-[rgba(10,17,32,0.85)] backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <AnimatePresence mode="wait">
            <StepCard
              key={FEATURES[active].id}
              feature={FEATURES[active]}
              stepNum={active + 1}
              totalSteps={FEATURES.length}
              progressKey={progressKey}
            />
          </AnimatePresence>
        </div>

        {/* Step navigation */}
        <StepNav
          features={FEATURES}
          active={active}
          progressKey={progressKey}
          onSelect={selectStep}
        />

      </Container>
    </section>
  );
}
