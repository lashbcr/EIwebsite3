'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

// ── Icons ──────────────────────────────────────────────────────────────────────

function StrategyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
      <path d="M19 16l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" />
      <path d="M5 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </svg>
  );
}

function ImplementIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    description:
      'Architectural models, strategic intent, and transformation frameworks — the authoritative source of what needs to change and why.',
    glow: 'rgba(236,44,68,0.45)',
    iconColor: '#EC2C44',
    iconBg: 'rgba(236,44,68,0.12)',
    iconBorder: 'rgba(236,44,68,0.25)',
    Icon: StrategyIcon,
  },
  {
    index: '02',
    label: 'AI-Generated Change Manifests',
    description:
      'Enterprise Insight automatically produces structured, machine-readable change manifests from your architecture — eliminating manual translation and interpretation loss.',
    glow: 'rgba(93,224,230,0.35)',
    iconColor: '#5de0e6',
    iconBg: 'rgba(93,224,230,0.1)',
    iconBorder: 'rgba(93,224,230,0.25)',
    Icon: AIIcon,
  },
  {
    index: '03',
    label: 'Physical Change Implementation',
    description:
      'Downstream teams receive ready-to-execute artefacts — tickets, runbooks, and implementation packages — derived directly from architectural decisions.',
    glow: 'rgba(148,163,184,0.3)',
    iconColor: '#cbd5e1',
    iconBg: 'rgba(148,163,184,0.08)',
    iconBorder: 'rgba(148,163,184,0.2)',
    Icon: ImplementIcon,
  },
];

// ── Glass card ─────────────────────────────────────────────────────────────────

function GlassCard({ step, delay }: { step: typeof STEPS[number]; delay: number }) {
  return (
    <AnimatedSection delay={delay}>
      <div
        className="relative overflow-hidden h-full flex flex-col p-7 md:p-8"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: '20px',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Bottom colour glow */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '200px',
            background: `radial-gradient(ellipse at 50% 100%, ${step.glow} 0%, transparent 70%)`,
          }}
        />

        {/* Index */}
        <span className="text-[9px] font-mono tracking-[0.24em] text-slate-600 uppercase block mb-5">
          {step.index}
        </span>

        {/* Icon box */}
        <div
          className="w-12 h-12 flex items-center justify-center mb-6 shrink-0"
          style={{
            background: step.iconBg,
            border: `1px solid ${step.iconBorder}`,
            borderRadius: '12px',
            color: step.iconColor,
          }}
        >
          <step.Icon />
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-white leading-snug mb-3 tracking-tight">
          {step.label}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed flex-1">
          {step.description}
        </p>
      </div>
    </AnimatedSection>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function OurVision() {
  return (
    <section className="bg-[#060b14] border-t border-white/8 overflow-hidden relative">

      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'rgba(236,44,68,0.05)' }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'rgba(93,224,230,0.04)' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full blur-3xl"
          style={{ background: 'rgba(148,163,184,0.04)' }} />
      </div>

      <Container className="relative py-16 md:py-24">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase shrink-0">Platform Vision</span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        {/* Headline */}
        <AnimatedSection className="mb-14">
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: 'clamp(1.6rem, 4.5vw, 3.2rem)' }}
          >
            Closing the Gap Between<br />
            <span className="text-primary-500">Intent</span> and Reality.
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl">
            Enterprise architecture has always excelled at defining <em>what</em> needs to change.
            We are extending that capability into driving <em>how</em> it happens — automatically generating
            the change manifests that translate strategic decisions into downstream implementation, end to end.
          </p>
        </AnimatedSection>

        {/* Glass cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          {STEPS.map((step, i) => (
            <GlassCard key={step.label} step={step} delay={i * 0.1} />
          ))}
        </div>

        {/* Vision statement — full-width glass card */}
        <AnimatedSection delay={0.35}>
          <div
            className="relative overflow-hidden p-8 md:p-12"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '20px',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Subtle red glow bottom-left */}
            <div className="absolute bottom-0 left-0 w-[400px] h-[200px] pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(236,44,68,0.12) 0%, transparent 70%)' }} />

            <div className="grid md:grid-cols-2 gap-10 items-start relative">
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
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
                <p>
                  Today, a chasm exists between the models architects produce and the work that engineers execute.
                  That gap is where transformation stalls. Enterprise Insight is purpose-built to eliminate it.
                </p>
                <p>
                  By automating the production of change manifests directly from your architecture, we give
                  organisations a single, AI-powered thread that runs from strategic vision all the way through
                  to verified, auditable implementation — without losing fidelity at every handoff.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </Container>
    </section>
  );
}
