'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const BG = '#0e1f38';

const FEATURES = [
  {
    id: 'top',
    index: '01',
    path: 'M17,85.2v60h149h149v-60v-60H166H17V85.2',
    hitbox: { x: 17, y: 25.2, w: 298, h: 120 },
    fo: { x: 25, y: 38, w: 282, h: 94 },
    drawRange: [0.00, 0.18] as const,
    textRange: [0.18, 0.26] as const,
    title: 'Automated Diagram Generation',
    popup: {
      layer: 'Application · Technology',
      phase: 'TOGAF ADM Phase C',
      inputs: ['CMDBs', 'REST APIs', 'Spreadsheets'],
      outputs: ['ArchiMate Views', 'Roadmaps', 'Gap Matrices'],
      metric: { label: 'Automation Coverage', value: 94, unit: '%' as const },
      body: 'AI reads your live data sources and produces standards-compliant architecture views continuously — without manual drawing or stale exports.',
    },
  },
  {
    id: 'middle',
    index: '02',
    path: 'M17,263.7v59.5h149h149v-59.5v-59.5H166H17V263.7',
    hitbox: { x: 17, y: 204.2, w: 298, h: 119 },
    fo: { x: 25, y: 216, w: 282, h: 95 },
    drawRange: [0.25, 0.43] as const,
    textRange: [0.43, 0.51] as const,
    title: 'AI-Powered Insights',
    popup: {
      layer: 'Motivation · Strategy',
      phase: 'TOGAF ADM Phase E & F',
      inputs: ['Architecture Repository', 'Change History', 'KPI Data'],
      outputs: ['Risk Flags', 'Gap Reports', 'Recommendations'],
      metric: { label: 'Detection Accuracy', value: 91, unit: '%' as const },
      body: 'Continuous analysis surfaces hidden compliance gaps, redundancies, and governance risks before they escalate into incidents.',
    },
  },
  {
    id: 'bottom',
    index: '03',
    path: 'M17,442.2v60h149h149v-60v-60H166H17V442.2',
    hitbox: { x: 17, y: 382.2, w: 298, h: 120 },
    fo: { x: 25, y: 394, w: 282, h: 96 },
    drawRange: [0.50, 0.68] as const,
    textRange: [0.68, 0.76] as const,
    title: 'Integration Capabilities',
    popup: {
      layer: 'Technology · Physical',
      phase: 'TOGAF ADM Phase D',
      inputs: ['ServiceNow', 'Jira', 'Excel / CSV', 'REST APIs'],
      outputs: ['Synced Repository', 'Change Manifests', 'Audit Trail'],
      metric: { label: 'Native Connectors', value: 100, unit: '+' as const },
      body: 'Bidirectional integrations keep your EA repository in sync with the tools your teams already use — no manual re-entry required.',
    },
  },
  {
    id: 'right',
    index: '04',
    path: 'M374,263.7v238.5h60h60V263.7V25.2h-60h-60V263.7',
    hitbox: { x: 374, y: 25.2, w: 120, h: 477 },
    fo: { x: 381, y: 180, w: 106, h: 168 },
    drawRange: [0.75, 0.93] as const,
    textRange: [0.93, 1.00] as const,
    title: 'TOGAF & ArchiMate Support',
    vertical: true as const,
    popup: {
      layer: 'All Layers',
      phase: 'KeystoneEA™ Framework',
      inputs: ['TOGAF ADM 10', 'ArchiMate 3.1', 'Custom Metamodels'],
      outputs: ['Compliant Views', 'Framework Reports', 'EA Artefacts'],
      metric: { label: 'Standards Compliance', value: 100, unit: '%' as const },
      body: 'Ship with the KeystoneEA™ seven-layer enterprise framework out of the box, or extend it with your own metamodel definitions.',
    },
  },
] as const;

type Feature = (typeof FEATURES)[number];

// ── TOGAF-style popup ──────────────────────────────────────────────────────────

function FeatureModal({ feature, onClose }: { feature: Feature; onClose: () => void }) {
  const { popup } = feature;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      {/* Modal — TOGAF process view aesthetic */}
      <motion.div
        className="relative z-10 w-full max-w-xl bg-[#08121e] border border-white/15"
        style={{ boxShadow: '0 0 0 1px rgba(236,44,68,0.25), 0 32px 64px rgba(0,0,0,0.7)' }}
        initial={{ opacity: 0, scale: 0.97, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 12 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#EC2C44]">
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono tracking-[0.22em] text-white/50 uppercase">
              {feature.index}
            </span>
            <div className="w-px h-3 bg-white/20" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white leading-none">
              {feature.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors text-lg leading-none ml-4"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Meta: layer + phase */}
        <div className="grid grid-cols-2 border-b border-white/10">
          <div className="px-5 py-3 border-r border-white/10">
            <span className="text-[8px] font-mono tracking-[0.2em] text-slate-600 uppercase block mb-1">
              ArchiMate Layer
            </span>
            <span className="text-[11px] font-mono text-slate-300">{popup.layer}</span>
          </div>
          <div className="px-5 py-3">
            <span className="text-[8px] font-mono tracking-[0.2em] text-slate-600 uppercase block mb-1">
              ADM Phase
            </span>
            <span className="text-[11px] font-mono text-slate-300">{popup.phase}</span>
          </div>
        </div>

        {/* Flow diagram: inputs → outputs */}
        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-start gap-3">

            {/* Inputs column */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-1 h-1 bg-slate-600" />
                <span className="text-[8px] font-mono tracking-[0.2em] text-slate-600 uppercase">
                  Inputs
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {popup.inputs.map((inp) => (
                  <div
                    key={inp}
                    className="px-2.5 py-1.5 border border-white/10 bg-white/2"
                  >
                    <span className="text-[10px] font-mono text-slate-400">{inp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connector arrow */}
            <div className="flex items-center self-center pt-5 shrink-0">
              <svg width="44" height="14" viewBox="0 0 44 14" fill="none">
                <line x1="0" y1="7" x2="36" y2="7" stroke="#EC2C44" strokeWidth="1.5" strokeDasharray="3 2"/>
                <polygon points="36,3.5 44,7 36,10.5" fill="#EC2C44" />
              </svg>
            </div>

            {/* Outputs column */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-1 h-1 bg-[#EC2C44]/60" />
                <span className="text-[8px] font-mono tracking-[0.2em] text-slate-600 uppercase">
                  Outputs
                </span>
              </div>
              <div className="flex flex-col gap-1">
                {popup.outputs.map((out) => (
                  <div
                    key={out}
                    className="px-2.5 py-1.5 border border-[#EC2C44]/25 bg-[#EC2C44]/5"
                  >
                    <span className="text-[10px] font-mono text-slate-300">{out}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Metric bar */}
        <div className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] font-mono tracking-[0.2em] text-slate-600 uppercase">
              {popup.metric.label}
            </span>
            <span className="text-xs font-mono font-bold text-white">
              {popup.metric.value}{popup.metric.unit}
            </span>
          </div>
          <div className="h-px bg-white/8 w-full relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#EC2C44]"
              initial={{ width: 0 }}
              animate={{ width: `${popup.metric.unit === '+' ? Math.min(popup.metric.value, 100) : popup.metric.value}%` }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            />
          </div>
        </div>

        {/* Description */}
        <div className="px-5 py-4">
          <p className="text-xs text-slate-500 leading-relaxed">{popup.body}</p>
        </div>

        {/* Footer: diagram reference */}
        <div className="px-5 py-2.5 border-t border-white/6 flex items-center justify-between">
          <span className="text-[8px] font-mono text-slate-700 uppercase tracking-widest">
            Enterprise Insight · Platform Reference
          </span>
          <span className="text-[8px] font-mono text-slate-700 uppercase tracking-widest">
            EI-{feature.index}-{feature.id.toUpperCase()}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Stroke-draw shape with text label ─────────────────────────────────────────

function FeatureStroke({
  feature,
  scrollYProgress,
  onOpen,
}: {
  feature: Feature;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  onOpen: () => void;
}) {
  const pathLength = useTransform(scrollYProgress, [...feature.drawRange], [0, 1]);
  const strokeOpacity = useTransform(
    scrollYProgress,
    [feature.drawRange[0], feature.drawRange[0] + 0.04],
    [0, 0.85],
  );
  const textOpacity = useTransform(scrollYProgress, [...feature.textRange], [0, 1]);

  const { fo, hitbox } = feature;
  const isVertical = 'vertical' in feature && feature.vertical;

  return (
    <g>
      {/* Stroke-draw outline */}
      <motion.path
        d={feature.path}
        fill="none"
        stroke="#EC2C44"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        style={{ pathLength, opacity: strokeOpacity }}
      />

      {/* Hover fill — subtle red wash appears on hover after drawn */}
      <rect
        x={hitbox.x}
        y={hitbox.y}
        width={hitbox.w}
        height={hitbox.h}
        fill="transparent"
        className="cursor-pointer hover:fill-[#EC2C44]/8 transition-colors duration-200"
        onClick={onOpen}
        role="button"
        aria-label={`Learn more about ${feature.title}`}
      />

      {/* Text label inside the shape */}
      <foreignObject x={fo.x} y={fo.y} width={fo.w} height={fo.h} style={{ pointerEvents: 'none' }}>
        {/* @ts-ignore */}
        <motion.div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            opacity: textOpacity,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: isVertical ? '12px 10px' : '6px 14px',
            gap: '5px',
            boxSizing: 'border-box',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              fontSize: '7px',
              letterSpacing: '0.22em',
              color: '#475569',
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              display: 'block',
            }}
          >
            {feature.index}
          </span>
          <p
            style={{
              fontSize: isVertical ? '8px' : '10px',
              fontWeight: 700,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#fff',
              lineHeight: 1.25,
              margin: 0,
            }}
          >
            {feature.title}
          </p>
          <span
            style={{
              fontSize: '7px',
              fontFamily: 'monospace',
              letterSpacing: '0.15em',
              color: '#EC2C44',
              textTransform: 'uppercase',
              opacity: 0.7,
            }}
          >
            Click to expand →
          </span>
        </motion.div>
      </foreignObject>
    </g>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function LogoFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const activeFeature = FEATURES.find((f) => f.id === activeId) ?? null;

  return (
    <div ref={scrollRef} style={{ height: '500vh' }} id="logo-features">
      {/* Sticky visual container */}
      <div
        className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-white/8"
        style={{ background: BG }}
      >
        <Container>
          <AnimatedSection className="mb-6 md:mb-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10px] font-mono tracking-[0.22em] text-slate-500 uppercase shrink-0">
                Platform
              </span>
              <div className="flex-1 h-px bg-white/8" />
            </div>
            <h2
              className="font-black uppercase tracking-tighter leading-[0.9] text-white"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
            >
              The Platform,<br />Deconstructed.
            </h2>
            <p className="mt-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
              Scroll to reveal · Click any shape to explore.
            </p>
          </AnimatedSection>

          {/* SVG */}
          <div className="flex justify-center">
            <svg
              viewBox="10 20 490 490"
              className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[580px]"
              style={{ height: 'auto', display: 'block' }}
              aria-label="Enterprise Insight platform capabilities"
            >
              {FEATURES.map((f) => (
                <FeatureStroke
                  key={f.id}
                  feature={f}
                  scrollYProgress={scrollYProgress}
                  onOpen={() => setActiveId(f.id)}
                />
              ))}
            </svg>
          </div>
        </Container>
      </div>

      {/* TOGAF-style popup modal */}
      <AnimatePresence>
        {activeFeature && (
          <FeatureModal
            key={activeFeature.id}
            feature={activeFeature}
            onClose={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
