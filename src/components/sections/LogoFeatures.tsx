'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const BG = '#060b14';

const FEATURES = [
  {
    id: 'top',
    index: '01',
    path: 'M17,85.2v60h149h149v-60v-60H166H17V85.2',
    hitbox: { x: 17, y: 25.2, w: 298, h: 120 },
    fo: { x: 25, y: 36, w: 282, h: 96 },
    drawRange: [0.00, 0.18] as const,
    textRange: [0.18, 0.26] as const,
    title: 'Automated Diagram Generation',
    popup: {
      layer: 'Application · Technology',
      phase: 'TOGAF ADM Phase C',
      body: 'Enterprise Insight connects to your existing data sources and automatically generates ArchiMate-compliant architecture diagrams — no manual drawing required. Diagrams refresh in real time as your data changes, so your views are always current without periodic updates.',
    },
  },
  {
    id: 'middle',
    index: '02',
    path: 'M17,263.7v59.5h149h149v-59.5v-59.5H166H17V263.7',
    hitbox: { x: 17, y: 204.2, w: 298, h: 119 },
    fo: { x: 25, y: 215, w: 282, h: 97 },
    drawRange: [0.25, 0.43] as const,
    textRange: [0.43, 0.51] as const,
    title: 'AI-Powered Insights',
    popup: {
      layer: 'Motivation · Strategy',
      phase: 'TOGAF ADM Phase E & F',
      body: 'Continuous AI monitoring scans your full architecture landscape for compliance gaps, governance issues, and structural redundancies. Risks surface in real time — before they escalate into incidents or missed deadlines.',
    },
  },
  {
    id: 'bottom',
    index: '03',
    path: 'M17,442.2v60h149h149v-60v-60H166H17V442.2',
    hitbox: { x: 17, y: 382.2, w: 298, h: 120 },
    fo: { x: 25, y: 392, w: 282, h: 98 },
    drawRange: [0.50, 0.68] as const,
    textRange: [0.68, 0.76] as const,
    title: 'Integration Capabilities',
    popup: {
      layer: 'Technology · Physical',
      phase: 'TOGAF ADM Phase D',
      body: 'Enterprise Insight integrates bidirectionally with ServiceNow, Jira, Excel, REST APIs, and more — keeping your repository in sync with the tools your teams already use. Changes propagate automatically in both directions, with no manual re-entry required.',
    },
  },
  {
    id: 'right',
    index: '04',
    path: 'M374,263.7v238.5h60h60V263.7V25.2h-60h-60V263.7',
    hitbox: { x: 374, y: 25.2, w: 120, h: 477 },
    fo: { x: 380, y: 155, w: 108, h: 215 },
    drawRange: [0.75, 0.93] as const,
    textRange: [0.93, 1.00] as const,
    title: 'TOGAF & ArchiMate Support',
    vertical: true as const,
    popup: {
      layer: 'All Layers',
      phase: 'KeystoneEA™ Framework',
      body: 'Enterprise Insight ships with full TOGAF ADM 10 and ArchiMate 3.1 notation support, alongside the KeystoneEA™ seven-layer framework as a ready-to-use starting point. Bring your own metamodel or adopt KeystoneEA and iterate as your EA practice matures.',
    },
  },
] as const;

type Feature = (typeof FEATURES)[number];

// ── TOGAF-style popup (simplified) ────────────────────────────────────────────

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
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />

      <motion.div
        className="relative z-10 w-full max-w-lg bg-[#08121e] border border-white/15"
        style={{ boxShadow: '0 0 0 1px rgba(236,44,68,0.2), 0 32px 64px rgba(0,0,0,0.7)' }}
        initial={{ opacity: 0, scale: 0.97, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#EC2C44]">
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono tracking-[0.24em] text-white/50 uppercase">{feature.index}</span>
            <div className="w-px h-3 bg-white/25" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">{feature.title}</span>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors text-base leading-none ml-4" aria-label="Close">✕</button>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 border-b border-white/8">
          <div className="px-5 py-3 border-r border-white/8">
            <span className="text-[8px] font-mono tracking-[0.2em] text-slate-600 uppercase block mb-1">ArchiMate Layer</span>
            <span className="text-[11px] font-mono text-white">{popup.layer}</span>
          </div>
          <div className="px-5 py-3">
            <span className="text-[8px] font-mono tracking-[0.2em] text-slate-600 uppercase block mb-1">ADM Phase</span>
            <span className="text-[11px] font-mono text-white">{popup.phase}</span>
          </div>
        </div>

        {/* Body */}
        <div className="px-5 py-6">
          <p className="text-sm text-slate-300 leading-relaxed">{popup.body}</p>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/6 flex items-center justify-between">
          <span className="text-[8px] font-mono text-slate-700 uppercase tracking-widest">Enterprise Insight · Platform Reference</span>
          <span className="text-[8px] font-mono text-slate-700 uppercase tracking-widest">EI-{feature.index}-{feature.id.toUpperCase()}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Electric animated stroke ───────────────────────────────────────────────────

function ElectricStroke({ d, strokeOpacity }: { d: string; strokeOpacity: ReturnType<typeof useTransform> }) {
  return (
    <>
      {/* Flowing dash layer */}
      <motion.path
        d={d}
        fill="none"
        stroke="#EC2C44"
        strokeWidth="3"
        strokeLinecap="square"
        strokeDasharray="12 18"
        animate={{ strokeDashoffset: [0, -30] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
        style={{ opacity: strokeOpacity }}
      />
      {/* Bright spark — shorter dash, faster */}
      <motion.path
        d={d}
        fill="none"
        stroke="#ff8a8a"
        strokeWidth="1.8"
        strokeLinecap="square"
        strokeDasharray="4 200"
        animate={{ strokeDashoffset: [0, -204] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
        style={{ opacity: strokeOpacity }}
      />
    </>
  );
}

// ── Shape with text label ──────────────────────────────────────────────────────

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
      {/* Draw-on outline */}
      <motion.path
        d={feature.path}
        fill="none"
        stroke="#EC2C44"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
        style={{ pathLength, opacity: strokeOpacity }}
      />

      {/* Electric animated overlay */}
      <ElectricStroke d={feature.path} strokeOpacity={strokeOpacity} />

      {/* Hover fill */}
      <rect
        x={hitbox.x}
        y={hitbox.y}
        width={hitbox.w}
        height={hitbox.h}
        fill="transparent"
        className="cursor-pointer hover:fill-[#EC2C44]/6 transition-colors duration-200"
        onClick={onOpen}
        role="button"
        aria-label={`Learn more about ${feature.title}`}
      />

      {/* Text label */}
      {isVertical ? (
        // Native SVG text for the vertical column — avoids foreignObject clipping
        <motion.g style={{ opacity: textOpacity }} pointerEvents="none">
          {/* Centre of the right column: x=434, y=263 */}
          <text x="434" y="228" textAnchor="middle" fontFamily="monospace" fontSize="7" letterSpacing="2" fill="#94a3b8" textLength="" style={{ textTransform: 'uppercase' }}>
            {feature.index}
          </text>
          <text x="434" y="248" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="900" fill="#ffffff">
            TOGAF &amp;
          </text>
          <text x="434" y="263" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="900" fill="#ffffff">
            ARCHIMATE
          </text>
          <text x="434" y="278" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="900" fill="#ffffff">
            SUPPORT
          </text>
          <text x="434" y="296" textAnchor="middle" fontFamily="monospace" fontSize="7" letterSpacing="1" fill="#EC2C44">
            CLICK TO EXPAND
          </text>
        </motion.g>
      ) : (
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
              padding: '6px 14px',
              gap: '5px',
              boxSizing: 'border-box',
              pointerEvents: 'none',
            }}
          >
            <span style={{ fontSize: '7px', letterSpacing: '0.22em', color: '#94a3b8', fontFamily: 'monospace', textTransform: 'uppercase', display: 'block' }}>
              {feature.index}
            </span>
            <p style={{
              fontSize: '14px',
              fontWeight: 900,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#ffffff',
              textShadow: '0 1px 8px rgba(0,0,0,0.8)',
              lineHeight: 1.25,
              margin: 0,
            }}>
              {feature.title}
            </p>
            <span style={{ fontSize: '7px', fontFamily: 'monospace', letterSpacing: '0.14em', color: '#EC2C44', textTransform: 'uppercase', opacity: 0.85 }}>
              Click to expand →
            </span>
          </motion.div>
        </foreignObject>
      )}
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
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-white/8" style={{ background: BG }}>

        {/* ── Background layers ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Outer red ambient glow — large, soft */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(236,44,68,0.12) 0%, transparent 70%)' }} />
          {/* Inner concentrated glow — tighter, brighter */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(236,44,68,0.18) 0%, transparent 70%)' }} />
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(circle, #5de0e6 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }} />
          {/* Diagonal stripe — mirrors hero */}
          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: 'repeating-linear-gradient(135deg, #5de0e6 0, #5de0e6 1px, transparent 0, transparent 60%)',
              backgroundSize: '28px 28px',
            }} />
          {/* Edge vignette */}
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(6,11,20,0.7) 100%)' }} />
        </div>
        <Container>
          <AnimatedSection className="mb-6 md:mb-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10px] font-mono tracking-[0.22em] text-slate-500 uppercase shrink-0">Platform</span>
              <div className="flex-1 h-px bg-white/8" />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-[0.9] text-white" style={{ fontSize: 'clamp(1.3rem, 3vw, 2.4rem)' }}>
              The Platform,<br />Deconstructed.
            </h2>
            <p className="mt-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
              Scroll to reveal · Click any shape to explore.
            </p>
          </AnimatedSection>

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

      <AnimatePresence>
        {activeFeature && (
          <FeatureModal key={activeFeature.id} feature={activeFeature} onClose={() => setActiveId(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
