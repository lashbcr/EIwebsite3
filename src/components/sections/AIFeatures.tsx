'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Container } from '@/components/ui/Container';

const RED = '#EC2C44';
const TAB_DURATION = 5; // seconds per tab

// ── Visuals ────────────────────────────────────────────────────────────────────

function NLVisual() {
  return (
    <div className="border border-white/6 bg-black/30 p-5 font-mono text-xs space-y-3">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/6">
        <div className="w-1.5 h-1.5 bg-[#EC2C44]" />
        <span className="text-[10px] tracking-widest text-slate-500 uppercase">AI Prompt Console</span>
      </div>
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
    </div>
  );
}

function RiskVisual() {
  const alerts = [
    { level: 'HIGH', color: '#EC2C44', bg: 'rgba(236,44,68,0.08)', label: 'Compliance gap', layer: 'Application layer' },
    { level: 'MED',  color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', label: 'Redundant services', layer: 'Technology layer' },
    { level: 'LOW',  color: '#94a3b8', bg: 'rgba(148,163,184,0.06)', label: 'Naming inconsistency', layer: 'Business layer' },
  ];
  return (
    <div className="space-y-2">
      {alerts.map((a, i) => (
        <motion.div
          key={a.label}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12, duration: 0.3 }}
          className="flex items-center gap-3 px-4 py-3 border font-mono text-xs"
          style={{ borderColor: `${a.color}30`, background: a.bg }}
        >
          <span className="text-[9px] font-bold tracking-widest uppercase shrink-0 px-1.5 py-0.5" style={{ color: a.color, border: `1px solid ${a.color}40` }}>
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
    { id: 'A', label: 'Billing API',     x: 20,  y: 50, changed: true },
    { id: 'B', label: 'Auth Service',    x: 50,  y: 20, changed: false },
    { id: 'C', label: 'User DB',         x: 80,  y: 20, changed: false },
    { id: 'D', label: 'Notifications',   x: 80,  y: 50, changed: false },
    { id: 'E', label: 'Payment Gateway', x: 50,  y: 80, changed: false },
  ];
  const edges = [['A','B'],['A','E'],['B','C'],['B','D']];
  return (
    <div className="border border-white/6 bg-black/30 p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 bg-[#EC2C44] animate-pulse" />
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Dependency Blast Radius</span>
      </div>
      <svg viewBox="0 0 100 100" className="w-full" style={{ height: 160 }}>
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
              x={n.x - 9} y={n.y - 5} width={18} height={10}
              fill={n.changed ? 'rgba(236,44,68,0.2)' : 'rgba(255,255,255,0.04)'}
              stroke={n.changed ? '#EC2C44' : 'rgba(255,255,255,0.12)'}
              strokeWidth="0.5"
            />
            <text x={n.x} y={n.y + 1.5} textAnchor="middle" fontSize="3.2" fill={n.changed ? '#EC2C44' : '#94a3b8'} fontFamily="monospace">
              {n.label.split(' ')[0]}
            </text>
          </motion.g>
        ))}
      </svg>
      <div className="flex items-center gap-4 mt-2 text-[9px] font-mono text-slate-600">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-[#EC2C44]/30 border border-[#EC2C44]/60 inline-block" /> Changed</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-white/4 border border-white/12 inline-block" /> Impacted</span>
      </div>
    </div>
  );
}

function DocsVisual() {
  return (
    <div className="border border-white/6 bg-black/30 p-5 space-y-3">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 bg-[#EC2C44]" />
        <span className="text-xs font-semibold text-white">Architecture Overview — Q2 2025</span>
        <span className="ml-auto text-[10px] px-2 py-0.5 font-mono" style={{ background: 'rgba(236,44,68,0.12)', color: '#EC2C44' }}>
          AI-generated
        </span>
      </div>
      {[['w-3/4', 0], ['w-full', 0.05], ['w-5/6', 0.1], ['w-2/3', 0.18], ['w-full', 0.23], ['w-4/5', 0.28], ['w-3/5', 0.35], ['w-full', 0.4]].map(([w, delay], i) => (
        <motion.div
          key={i}
          className={`h-1.5 bg-slate-600/50 ${w}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ transformOrigin: 'left' }}
          transition={{ delay: delay as number, duration: 0.4 }}
        />
      ))}
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────────

function NLIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  );
}
function RiskIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
function ImpactIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}
function DocsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    id: 'nl',
    badge: 'Natural Language',
    title: 'Ask in plain English.\nGet architecture.',
    description: ['Describe changes, queries, or models in ', 'plain language', '. Enterprise Insight maps your intent across Business, Application, and Technology layers — ', 'automatically', '.'],
    accent: RED,
    Icon: NLIcon,
    Visual: NLVisual,
  },
  {
    id: 'risk',
    badge: 'Risk Intelligence',
    title: 'Risks surfaced\nbefore they escalate',
    description: ['Continuous AI monitoring flags ', 'gaps, redundancies, and compliance violations', ' across your entire architecture landscape in ', 'real time', '.'],
    accent: RED,
    Icon: RiskIcon,
    Visual: RiskVisual,
  },
  {
    id: 'impact',
    badge: 'Impact Analysis',
    title: 'Know the blast\nradius instantly',
    description: ['Trace upstream and downstream ', 'dependencies', ' with one click. Model proposed changes before committing — and catch ', 'breaking changes before they happen', '.'],
    accent: RED,
    Icon: ImpactIcon,
    Visual: ImpactVisual,
  },
  {
    id: 'docs',
    badge: 'Auto Documentation',
    title: 'Documentation\nthat writes itself',
    description: ['AI drafts clear, ', 'stakeholder-ready', ' architecture documents from your live data. ', 'Always accurate. Zero manual overhead', '.'],
    accent: RED,
    Icon: DocsIcon,
    Visual: DocsVisual,
  },
] as const;

type Feature = (typeof FEATURES)[number];
// description is [plain, emphasized, plain, emphasized?, plain?] — odd indices are red

// ── Tab row ────────────────────────────────────────────────────────────────────

function TabRow({
  feature,
  isActive,
  progressKey,
  onClick,
}: {
  feature: Feature;
  isActive: boolean;
  progressKey: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative w-full text-left px-6 py-5 border-b border-white/6 transition-colors duration-200 group focus-visible:outline-none"
      style={{ background: isActive ? 'linear-gradient(90deg, rgba(236,44,68,0.07) 0%, rgba(255,255,255,0.04) 100%)' : 'transparent' }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500"
        style={{ background: isActive ? feature.accent : 'transparent' }}
      />

      {/* Icon + badge */}
      <div className="flex items-center gap-2.5 mb-2">
        <span
          className="transition-colors duration-500"
          style={{ color: isActive ? feature.accent : '#475569' }}
        >
          <feature.Icon />
        </span>
        <span
          className="text-[9px] font-mono tracking-[0.18em] uppercase transition-colors duration-500"
          style={{ color: isActive ? '#94a3b8' : '#475569' }}
        >
          {feature.badge}
        </span>
      </div>

      {/* Title */}
      <p
        className="text-sm font-bold leading-snug transition-colors duration-500"
        style={{ color: isActive ? '#ffffff' : '#475569' }}
      >
        {feature.title.replace('\n', ' ')}
      </p>

      {/* Progress bar */}
      <div className="mt-3.5 h-px bg-white/6 overflow-hidden">
        {isActive && (
          <motion.div
            key={progressKey}
            className="h-full"
            style={{ background: feature.accent, transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: TAB_DURATION, ease: 'linear' }}
          />
        )}
      </div>
    </button>
  );
}

// ── Content panel ──────────────────────────────────────────────────────────────

function ContentPanel({ feature }: { feature: Feature }) {
  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col h-full"
    >
      {/* Badge */}
      <div className="flex items-center gap-2 mb-5">
        <span
          className="text-[9px] font-mono tracking-[0.2em] uppercase font-bold"
          style={{ color: feature.accent }}
        >
          {feature.badge}
        </span>
        <div className="flex-1 h-px bg-white/6" />
      </div>

      {/* Title */}
      <h3
        className="font-black uppercase tracking-tighter leading-[0.9] text-white mb-4"
        style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}
      >
        {feature.title.split('\n').map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {i === 1 ? <span style={{ color: feature.accent }}>{line}</span> : line}
          </span>
        ))}
      </h3>

      {/* Description with red key-word emphasis on odd indices */}
      <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-sm">
        {(feature.description as readonly string[]).map((chunk, i) =>
          i % 2 === 1
            ? <span key={i} style={{ color: '#EC2C44' }} className="font-medium">{chunk}</span>
            : <span key={i}>{chunk}</span>
        )}
      </p>

      {/* Visual */}
      <div className="flex-1">
        <feature.Visual />
      </div>
    </motion.div>
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
      setActive(prev => (prev + 1) % FEATURES.length);
      setProgressKey(k => k + 1);
    }, TAB_DURATION * 1000);
    return () => clearTimeout(id);
  }, [active, paused, sectionInView]);

  function selectTab(i: number) {
    setActive(i);
    setProgressKey(k => k + 1);
  }

  return (
    <section
      id="ai-features"
      className="border-t border-white/8 relative overflow-hidden bg-[#020c1a]"
    >
      {/* Ambient blobs — corners only, don't bleed into card */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[130px]"
          style={{ background: 'rgba(236,44,68,0.04)' }} />
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
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-mono tracking-[0.22em] text-slate-500 uppercase shrink-0">AI-Powered</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              className="font-black uppercase tracking-tighter leading-[0.9] text-white"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
            >
              Your Favourite<br />
              Functionalities.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs md:text-right">
              Ask questions, detect risk, and publish insights at the speed of thought.
            </p>
          </div>
        </motion.div>

        {/* Tabs layout — glass card */}
        <div
          ref={sectionRef}
          className="overflow-hidden grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[320px_1fr]"
          style={{
            background: 'linear-gradient(160deg, rgba(255,255,255,0.045) 0%, rgba(14,22,40,0.92) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderTop: '1px solid rgba(236,44,68,0.45)',
            borderRadius: '16px',
            backdropFilter: 'blur(20px) saturate(130%)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.07)',
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left: tab list — slightly darker glass pane */}
          <div
            className="border-b md:border-b-0 md:border-r flex flex-col"
            style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(0,0,0,0.18)' }}
          >
            {FEATURES.map((f, i) => (
              <TabRow
                key={f.id}
                feature={f}
                isActive={active === i}
                progressKey={active === i ? progressKey : -1}
                onClick={() => selectTab(i)}
              />
            ))}
          </div>

          {/* Right: content panel */}
          <div className="p-8 md:p-10 min-h-[380px] flex items-start">
            <AnimatePresence mode="wait">
              <ContentPanel key={active} feature={FEATURES[active]} />
            </AnimatePresence>
          </div>
        </div>

      </Container>
    </section>
  );
}
