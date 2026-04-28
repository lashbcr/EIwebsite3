'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const FEATURES = [
  {
    id: 'top' as const,
    path: 'M17,85.2v60h149h149v-60v-60H166H17V85.2',
    side: 'left' as const,
    title: 'Automated Diagram Generation',
    description:
      'Connect your data sources and watch professional architecture diagrams generate themselves — always up to date, always on-brand.',
  },
  {
    id: 'middle' as const,
    path: 'M17,263.7v59.5h149h149v-59.5v-59.5H166H17V263.7',
    side: 'left' as const,
    title: 'AI-Powered Insights',
    description:
      'Surface patterns, risks, and opportunities across your enterprise landscape. Data-driven decision-making at every level.',
  },
  {
    id: 'bottom' as const,
    path: 'M17,442.2v60h149h149v-60v-60H166H17V442.2',
    side: 'left' as const,
    title: 'Integration Capabilities',
    description:
      'Connect with your existing toolchain. Import data from CMDBs, spreadsheets, APIs, and more to keep your repository current.',
  },
  {
    id: 'right' as const,
    path: 'M374,263.7v238.5h60h60V263.7V25.2h-60h-60V263.7',
    side: 'right' as const,
    title: 'TOGAF & ArchiMate Support',
    description:
      'Built-in support for industry standards. Get started with the KeystoneEA™ seven-layer framework, shipped ready to use out of the box.',
  },
] as const;

type FeatureId = 'top' | 'middle' | 'bottom' | 'right';
type Feature = (typeof FEATURES)[number];

function FeaturePanel({ feature }: { feature: Feature }) {
  return (
    <div className="p-6 md:p-8 rounded-xl border border-slate-200 bg-white backdrop-blur-sm max-w-xs w-full dark:border-white/10 dark:bg-white/5">
      <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mb-3" />
      <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug dark:text-white">
        {feature.title}
      </h3>
      <p className="text-xs text-slate-500 leading-relaxed dark:text-slate-400">{feature.description}</p>
    </div>
  );
}

export function LogoFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRefs = useRef<Partial<Record<FeatureId, SVGPathElement>>>({});
  const panelRefs = useRef<Partial<Record<FeatureId, HTMLDivElement>>>({});
  const [curves, setCurves] = useState<Partial<Record<FeatureId, string>>>({});

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  // ── Feature 0 (top, left) ──────────────────────────────────────
  const f0LogoOpacity  = useTransform(scrollYProgress, [0.00, 0.08], [0, 1]);
  const f0LogoX        = useTransform(scrollYProgress, [0.00, 0.08], [-60, 0]);
  const f0Line         = useTransform(scrollYProgress, [0.08, 0.17], [0, 1]);
  const f0LineOpacity  = useTransform(scrollYProgress, [0.08, 0.10], [0, 0.55]);

  // ── Feature 1 (middle, left) ───────────────────────────────────
  const f1LogoOpacity  = useTransform(scrollYProgress, [0.25, 0.33], [0, 1]);
  const f1LogoX        = useTransform(scrollYProgress, [0.25, 0.33], [-60, 0]);
  const f1Line         = useTransform(scrollYProgress, [0.33, 0.42], [0, 1]);
  const f1LineOpacity  = useTransform(scrollYProgress, [0.33, 0.35], [0, 0.55]);

  // ── Feature 2 (bottom, left) ───────────────────────────────────
  const f2LogoOpacity  = useTransform(scrollYProgress, [0.50, 0.58], [0, 1]);
  const f2LogoX        = useTransform(scrollYProgress, [0.50, 0.58], [-60, 0]);
  const f2Line         = useTransform(scrollYProgress, [0.58, 0.67], [0, 1]);
  const f2LineOpacity  = useTransform(scrollYProgress, [0.58, 0.60], [0, 0.55]);

  // ── Feature 3 (right) ─────────────────────────────────────────
  const f3LogoOpacity  = useTransform(scrollYProgress, [0.75, 0.83], [0, 1]);
  const f3LogoX        = useTransform(scrollYProgress, [0.75, 0.83], [60, 0]);
  const f3Line         = useTransform(scrollYProgress, [0.83, 0.92], [0, 1]);
  const f3LineOpacity  = useTransform(scrollYProgress, [0.83, 0.85], [0, 0.55]);

  // ── Panel opacity/x — useMotionValue(0) guarantees hidden on load ──────
  // useTransform computes its initial value from the current scroll position,
  // which can be > 0 if the section is already in view. useMotionValue(0) is
  // always exactly 0 until the first scroll event fires.
  const f0PanelOpacity = useMotionValue(0);
  const f0PanelX       = useMotionValue(-20);
  const f1PanelOpacity = useMotionValue(0);
  const f1PanelX       = useMotionValue(-20);
  const f2PanelOpacity = useMotionValue(0);
  const f2PanelX       = useMotionValue(-20);
  const f3PanelOpacity = useMotionValue(0);
  const f3PanelX       = useMotionValue(20);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const prog = (val: number, lo: number, hi: number) =>
      Math.max(0, Math.min(1, (val - lo) / (hi - lo)));

    const p0 = prog(v, 0.17, 0.25);
    f0PanelOpacity.set(p0);
    f0PanelX.set(-20 + 20 * p0);

    const p1 = prog(v, 0.42, 0.50);
    f1PanelOpacity.set(p1);
    f1PanelX.set(-20 + 20 * p1);

    const p2 = prog(v, 0.67, 0.75);
    f2PanelOpacity.set(p2);
    f2PanelX.set(-20 + 20 * p2);

    const p3 = prog(v, 0.92, 0.99);
    f3PanelOpacity.set(p3);
    f3PanelX.set(20 - 20 * p3);
  });

  const FEATURE_MOTION = [
    { logoOpacity: f0LogoOpacity, logoX: f0LogoX, line: f0Line, lineOpacity: f0LineOpacity, panelOpacity: f0PanelOpacity, panelX: f0PanelX },
    { logoOpacity: f1LogoOpacity, logoX: f1LogoX, line: f1Line, lineOpacity: f1LineOpacity, panelOpacity: f1PanelOpacity, panelX: f1PanelX },
    { logoOpacity: f2LogoOpacity, logoX: f2LogoX, line: f2Line, lineOpacity: f2LineOpacity, panelOpacity: f2PanelOpacity, panelX: f2PanelX },
    { logoOpacity: f3LogoOpacity, logoX: f3LogoX, line: f3Line, lineOpacity: f3LineOpacity, panelOpacity: f3PanelOpacity, panelX: f3PanelX },
  ];

  const computeCurves = useCallback(() => {
    if (!containerRef.current) return;
    const cR = containerRef.current.getBoundingClientRect();
    const next: Partial<Record<FeatureId, string>> = {};

    for (const f of FEATURES) {
      const logoEl = pathRefs.current[f.id];
      const panelEl = panelRefs.current[f.id];
      if (!logoEl || !panelEl) continue;

      const pR = logoEl.getBoundingClientRect();
      const panelR = panelEl.getBoundingClientRect();

      const sx = (f.side === 'left' ? pR.left : pR.right) - cR.left;
      const sy = pR.top + pR.height / 2 - cR.top;
      const ex = (f.side === 'left' ? panelR.right : panelR.left) - cR.left;
      const ey = panelR.top + panelR.height / 2 - cR.top;
      const cx = Math.abs(ex - sx) * 0.45;

      next[f.id] =
        f.side === 'left'
          ? `M ${sx},${sy} C ${sx - cx},${sy} ${ex + cx},${ey} ${ex},${ey}`
          : `M ${sx},${sy} C ${sx + cx},${sy} ${ex - cx},${ey} ${ex},${ey}`;
    }

    setCurves(next);
  }, []);

  useEffect(() => {
    const t = setTimeout(computeCurves, 500);
    window.addEventListener('resize', computeCurves);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', computeCurves);
    };
  }, [computeCurves]);

  return (
    <div ref={scrollRef} style={{ height: '500vh' }} id="logo-features">
      {/* Sticky visual container — pinned for the duration of scroll */}
      <div className="sticky top-0 h-screen bg-white dark:bg-[#060b14] flex flex-col justify-center overflow-hidden">
        <Container>
          <AnimatedSection className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              The platform, deconstructed
            </h2>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Every element of our mark represents a core capability. Scroll to reveal.
            </p>
          </AnimatedSection>

          {/* ── Desktop layout ──────────────────────────────────── */}
          <div
            ref={containerRef}
            className="relative hidden md:flex flex-row items-center justify-center gap-10 lg:gap-16"
          >
            {/* Left column — 3 panels, evenly gapped */}
            <div className="flex-1 flex flex-col gap-10 items-end py-4">
              {([0, 1, 2] as const).map(i => (
                <motion.div
                  key={FEATURES[i].id}
                  ref={(el: HTMLDivElement | null) => {
                    panelRefs.current[FEATURES[i].id] = el ?? undefined;
                  }}
                  style={{
                    opacity: FEATURE_MOTION[i].panelOpacity,
                    x: FEATURE_MOTION[i].panelX,
                  }}
                >
                  <FeaturePanel feature={FEATURES[i]} />
                </motion.div>
              ))}
            </div>

            {/* Logo SVG — center */}
            <div className="shrink-0 flex items-center">
              <svg
                viewBox="10 20 490 490"
                className="w-45.5 h-45.5 md:w-65 md:h-65 lg:w-78 lg:h-78"
                aria-label="Enterprise Insight logo"
              >
                {FEATURES.map((f, i) => (
                  <motion.path
                    key={f.id}
                    ref={(el: SVGPathElement | null) => {
                      pathRefs.current[f.id] = el ?? undefined;
                    }}
                    d={f.path}
                    fill="#EC2C44"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    style={{
                      opacity: FEATURE_MOTION[i].logoOpacity,
                      x: FEATURE_MOTION[i].logoX,
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Right column — 1 panel for the right feature */}
            <div className="flex-1 flex flex-col justify-center items-start py-4">
              <motion.div
                ref={(el: HTMLDivElement | null) => {
                  panelRefs.current[FEATURES[3].id] = el ?? undefined;
                }}
                style={{
                  opacity: FEATURE_MOTION[3].panelOpacity,
                  x: FEATURE_MOTION[3].panelX,
                }}
              >
                <FeaturePanel feature={FEATURES[3]} />
              </motion.div>
            </div>

            {/* Connector curves — absolute overlay, desktop only */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              aria-hidden="true"
              style={{ overflow: 'visible' }}
            >
              {FEATURES.map((f, i) => {
                const d = curves[f.id];
                if (!d) return null;
                return (
                  <motion.path
                    key={f.id}
                    d={d}
                    fill="none"
                    stroke="#EC2C44"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    style={{
                      pathLength: FEATURE_MOTION[i].line,
                      opacity: FEATURE_MOTION[i].lineOpacity,
                    }}
                  />
                );
              })}
            </svg>
          </div>

          {/* ── Mobile layout ───────────────────────────────────── */}
          <div className="md:hidden flex flex-col items-center gap-6">
            <svg
              viewBox="10 20 490 490"
              className="w-45.5 h-45.5"
              aria-label="Enterprise Insight logo"
            >
              {FEATURES.map((f, i) => (
                <motion.path
                  key={f.id}
                  d={f.path}
                  fill="#EC2C44"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  style={{
                    opacity: FEATURE_MOTION[i].logoOpacity,
                    x: FEATURE_MOTION[i].logoX,
                  }}
                />
              ))}
            </svg>

            {FEATURES.map((f, i) => (
              <motion.div
                key={f.id}
                className="w-full max-w-sm"
                style={{
                  opacity: FEATURE_MOTION[i].panelOpacity,
                  x: FEATURE_MOTION[i].panelX,
                }}
              >
                <FeaturePanel feature={f} />
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
