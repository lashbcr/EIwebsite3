'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/ui/Container';

const CYAN = '#5de0e6';
const BLUE = '#004aad';

// ── Mini previews ──────────────────────────────────────────────────────────────

function NLPreview() {
  return (
    <div className="mt-6 border border-white/8 bg-black/20 p-4 font-mono text-xs space-y-2.5">
      <div className="flex items-start gap-2">
        <span className="shrink-0 mt-px" style={{ color: 'var(--ai-icon-cyan)' }}>›</span>
        <span className="text-white">Map our cloud estate to ArchiMate 3.1</span>
      </div>
      <div className="flex items-start gap-2 pl-4 text-slate-300">
        <span className="shrink-0" style={{ color: 'var(--ai-icon-cyan)' }}>↳</span>
        <span>14 components identified across 3 layers</span>
      </div>
      <div className="flex items-start gap-2 pl-4 text-slate-300">
        <span className="text-orange-400 shrink-0">↳</span>
        <span>Governance gap flagged — Application layer</span>
      </div>
      <div className="flex items-start gap-2 pl-4 text-slate-300">
        <span className="shrink-0" style={{ color: 'var(--ai-icon-cyan)' }}>↳</span>
        <span>Diagram generated · 2 recommendations ready</span>
      </div>
    </div>
  );
}

function DocsPreview() {
  return (
    <div className="mt-6 border border-white/8 bg-black/20 p-4 space-y-2.5">
      <div className="flex items-center gap-2 mb-3.5">
        <div className="w-1.5 h-1.5" style={{ background: 'var(--ai-icon-cyan)' }} />
        <span className="text-xs font-semibold text-white">Architecture Overview — Q2 2025</span>
        <span
          className="ml-auto text-[10px] px-2 py-0.5 font-medium"
          style={{ background: 'rgba(93,224,230,0.12)', color: 'var(--ai-icon-cyan)' }}
        >
          AI-generated
        </span>
      </div>
      <div className="h-1.5 bg-slate-500/60 w-3/4" />
      <div className="h-1.5 bg-slate-600/60 w-full" />
      <div className="h-1.5 bg-slate-600/60 w-5/6" />
      <div className="h-1.5 bg-slate-500/50 w-2/3 mt-3" />
      <div className="h-1.5 bg-slate-600/60 w-full" />
      <div className="h-1.5 bg-slate-600/60 w-4/5" />
      <div className="h-1.5 bg-slate-500/50 w-3/5 mt-3" />
      <div className="h-1.5 bg-slate-600/60 w-full" />
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────────

function NLIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  );
}

function RiskIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function ImpactIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function DocsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

// ── Feature card data ──────────────────────────────────────────────────────────

const FEATURES = [
  {
    id: 'nl',
    badge: 'Natural Language',
    title: 'Ask in plain English. Get architecture.',
    description:
      'Describe changes, queries, or models in plain language. Enterprise Insight maps your intent across Business, Application, and Technology layers — automatically.',
    accent: 'var(--ai-icon-cyan)',
    accentAlpha: 'var(--ai-cyan-a)',
    accentBorder: 'var(--ai-cyan-b)',
    accentGlow: `0 0 48px rgba(93,224,230,0.18)`,
    col: 'lg:col-span-2',
    Icon: NLIcon,
    Preview: NLPreview,
  },
  {
    id: 'risk',
    badge: 'Risk Intelligence',
    title: 'Risks surfaced before they escalate',
    description:
      'Continuous AI monitoring flags gaps, redundancies, and compliance violations across your entire architecture landscape in real time.',
    accent: 'var(--ai-icon-cyan)',
    accentAlpha: 'var(--ai-cyan-a)',
    accentBorder: 'var(--ai-cyan-b)',
    accentGlow: `0 0 40px rgba(93,224,230,0.15)`,
    col: 'lg:col-span-1',
    Icon: RiskIcon,
    Preview: null,
  },
  {
    id: 'impact',
    badge: 'Impact Analysis',
    title: 'Know the blast radius instantly',
    description:
      'Trace upstream and downstream dependencies with one click. Model proposed changes before committing — and catch breaking changes before they happen.',
    accent: BLUE,
    accentAlpha: 'var(--ai-blue-a)',
    accentBorder: 'var(--ai-blue-b)',
    accentGlow: `0 0 40px rgba(0,74,173,0.30)`,
    col: 'lg:col-span-1',
    Icon: ImpactIcon,
    Preview: null,
  },
  {
    id: 'docs',
    badge: 'Auto Documentation',
    title: 'Documentation that writes itself',
    description:
      'AI drafts clear, stakeholder-ready architecture documents from your live data. Always accurate. Zero manual overhead.',
    accent: BLUE,
    accentAlpha: 'var(--ai-blue-a)',
    accentBorder: 'var(--ai-blue-b)',
    accentGlow: `0 0 48px rgba(0,74,173,0.30)`,
    col: 'lg:col-span-2',
    Icon: DocsIcon,
    Preview: DocsPreview,
  },
] as const;

// ── Card ───────────────────────────────────────────────────────────────────────

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { Icon, Preview } = feature;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`group relative p-7 flex flex-col transition-all duration-300 ${feature.col}`}
      style={{
        background: `linear-gradient(135deg, ${feature.accentAlpha} 0%, var(--ai-grad-end) 100%)`,
        border: `1px solid ${feature.accentBorder}`,
      }}
      whileHover={{
        boxShadow: feature.accentGlow,
        transition: { duration: 0.2 },
      }}
    >
      {/* Icon + badge row */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 flex items-center justify-center shrink-0"
          style={{ background: feature.accentAlpha, color: feature.accent }}
        >
          <Icon />
        </div>
        <span
          className="text-[10px] font-mono font-bold tracking-[0.18em] uppercase"
          style={{ color: feature.accent }}
        >
          {feature.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-white leading-snug mb-3">{feature.title}</h3>
      <p className="text-sm text-slate-300 leading-relaxed">{feature.description}</p>

      {Preview && <Preview />}
    </motion.div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function AIFeatures() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  return (
    <section
      id="ai-features"
      className="border-t border-white/8 relative overflow-hidden bg-[#020c1a]
        [--ai-icon-cyan:#5de0e6]
        [--ai-grad-end:rgba(255,255,255,0.02)]
        [--ai-cyan-a:rgba(93,224,230,0.10)]
        [--ai-cyan-b:rgba(93,224,230,0.25)]
        [--ai-blue-a:rgba(0,74,173,0.18)]
        [--ai-blue-b:rgba(0,74,173,0.45)]"
    >
      <Container className="py-16 md:py-24">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[10px] font-mono tracking-[0.22em] text-slate-500 uppercase shrink-0">AI-Powered</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Intelligence Built Into<br />
            <span style={{ color: CYAN }}>Every Layer.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Enterprise Insight doesn&apos;t just store your architecture — it understands it.
            Ask questions, detect risk, and publish insights at the speed of thought.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.id} feature={f} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
