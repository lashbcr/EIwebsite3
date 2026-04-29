'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const FEATURES = [
  {
    id: 'top',
    index: '01',
    path: 'M17,85.2v60h149h149v-60v-60H166H17V85.2',
    fo: { x: 25, y: 31, w: 282, h: 108 },
    drawRange: [0.00, 0.18] as const,
    textRange: [0.18, 0.26] as const,
    title: 'Automated Diagram Generation',
    description: 'Connect data sources and watch architecture diagrams generate — always current.',
  },
  {
    id: 'middle',
    index: '02',
    path: 'M17,263.7v59.5h149h149v-59.5v-59.5H166H17V263.7',
    fo: { x: 25, y: 211, w: 282, h: 105 },
    drawRange: [0.25, 0.43] as const,
    textRange: [0.43, 0.51] as const,
    title: 'AI-Powered Insights',
    description: 'Surface risks, gaps, and opportunities across your enterprise landscape in real time.',
  },
  {
    id: 'bottom',
    index: '03',
    path: 'M17,442.2v60h149h149v-60v-60H166H17V442.2',
    fo: { x: 25, y: 389, w: 282, h: 106 },
    drawRange: [0.50, 0.68] as const,
    textRange: [0.68, 0.76] as const,
    title: 'Integration Capabilities',
    description: 'Import from CMDBs, spreadsheets, and APIs. Keep your repository perpetually current.',
  },
  {
    id: 'right',
    index: '04',
    path: 'M374,263.7v238.5h60h60V263.7V25.2h-60h-60V263.7',
    fo: { x: 381, y: 31, w: 106, h: 471 },
    drawRange: [0.75, 0.93] as const,
    textRange: [0.93, 1.00] as const,
    title: 'TOGAF & ArchiMate',
    description:
      'Industry-standard support built in. Get started with the KeystoneEA™ seven-layer framework — shipped ready out of the box.',
    vertical: true,
  },
] as const;

type Feature = (typeof FEATURES)[number];

function FeatureStroke({
  feature,
  scrollYProgress,
}: {
  feature: Feature;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const pathLength = useTransform(scrollYProgress, [...feature.drawRange], [0, 1]);
  const strokeOpacity = useTransform(
    scrollYProgress,
    [feature.drawRange[0], feature.drawRange[0] + 0.04],
    [0, 0.8],
  );
  const textOpacity = useTransform(scrollYProgress, [...feature.textRange], [0, 1]);

  const { fo } = feature;

  return (
    <g>
      <motion.path
        d={feature.path}
        fill="none"
        stroke="#EC2C44"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        style={{ pathLength, opacity: strokeOpacity }}
      />
      <foreignObject x={fo.x} y={fo.y} width={fo.w} height={fo.h}>
        {/* @ts-ignore — xmlns required for foreignObject HTML content */}
        <motion.div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            opacity: textOpacity,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: feature.vertical ? '16px 10px' : '8px 14px',
            gap: feature.vertical ? '10px' : '6px',
            boxSizing: 'border-box',
          }}
        >
          <span
            style={{
              fontSize: '7px',
              letterSpacing: '0.20em',
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
              fontSize: feature.vertical ? '8px' : '9px',
              fontWeight: 700,
              fontFamily: 'monospace',
              textTransform: 'uppercase',
              letterSpacing: '0.10em',
              color: '#fff',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {feature.title}
          </p>
          <p
            style={{
              fontSize: feature.vertical ? '7.5px' : '8px',
              color: '#64748b',
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {feature.description}
          </p>
        </motion.div>
      </foreignObject>
    </g>
  );
}

export function LogoFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={scrollRef} style={{ height: '500vh' }} id="logo-features">
      {/* Sticky visual container */}
      <div className="sticky top-0 h-screen bg-[#060b14] flex flex-col justify-center overflow-hidden border-t border-white/8">
        <Container>
          <AnimatedSection className="mb-6 md:mb-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase shrink-0">Platform</span>
              <div className="flex-1 h-px bg-white/8" />
            </div>
            <h2
              className="font-black uppercase tracking-tighter leading-[0.9] text-white"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
            >
              The Platform,<br />Deconstructed.
            </h2>
            <p className="mt-2 text-xs font-mono text-slate-600 uppercase tracking-widest">
              Scroll to reveal each capability.
            </p>
          </AnimatedSection>

          {/* SVG — shapes reveal as red outlines, text lives inside each shape */}
          <div className="flex justify-center">
            <svg
              viewBox="10 20 490 490"
              className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[600px]"
              style={{ height: 'auto', display: 'block' }}
              aria-label="Enterprise Insight platform capabilities"
            >
              {FEATURES.map((f) => (
                <FeatureStroke
                  key={f.id}
                  feature={f}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </svg>
          </div>
        </Container>
      </div>
    </div>
  );
}
