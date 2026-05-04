'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { Container } from '@/components/ui/Container';

// ── Visuals — real-world stock photos via Unsplash ─────────────────────────────

function StockImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
      {/* Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Subtle dark overlay so red caption pops */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06101e]/95 via-[#06101e]/30 to-transparent" />
      {/* Caption pill */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#EC2C44] shrink-0" />
        <span className="text-[11px] font-mono uppercase tracking-widest text-white/90 truncate">
          {caption}
        </span>
      </div>
    </div>
  );
}

function NLVisual() {
  return (
    <StockImage
      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
      alt="Architect typing on a laptop keyboard"
      caption="Plain-language prompts, instant architecture"
    />
  );
}

function RiskVisual() {
  return (
    <StockImage
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
      alt="Analyst reviewing a risk dashboard with charts"
      caption="Continuous risk monitoring across the estate"
    />
  );
}

function ImpactVisual() {
  return (
    <StockImage
      src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
      alt="Connected network of servers and infrastructure"
      caption="Trace dependencies before changes ship"
    />
  );
}

function DocsVisual() {
  return (
    <StockImage
      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
      alt="Architecture overview document on a laptop screen"
      caption="Stakeholder-ready docs, drafted automatically"
    />
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
  const FADE = 0.07;

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
  const { scrollYProgress: rawProgress } = useScroll({
    target: cardsRef,
    offset: ['start start', 'end end'],
  });

  // Smooth the scroll progress with a spring — gives the carousel a calmer, premium feel
  const scrollYProgress = useSpring(rawProgress, {
    stiffness: 80,
    damping: 30,
    mass: 0.6,
    restDelta: 0.0005,
  });

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
        style={{ height: `${130 * FEATURES.length}vh` }}
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

        </div>
      </div>
    </section>
  );
}
