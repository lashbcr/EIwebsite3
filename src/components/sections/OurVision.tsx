'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

const steps = [
  {
    index: '01',
    label: 'Conceptual Change Management',
    description:
      'Architectural models, strategic intent, and transformation frameworks — the authoritative source of what needs to change and why.',
    color: 'text-primary-500',
    borderAccent: 'border-t-primary-500',
  },
  {
    index: '02',
    label: 'AI-Generated Change Manifests',
    description:
      'Enterprise Insight automatically produces structured, machine-readable change manifests from your architecture — eliminating manual translation and interpretation loss.',
    color: 'text-[#5de0e6]',
    borderAccent: 'border-t-[#5de0e6]',
  },
  {
    index: '03',
    label: 'Physical Change Implementation',
    description:
      'Downstream teams receive ready-to-execute artefacts — tickets, runbooks, and implementation packages — derived directly from architectural decisions.',
    color: 'text-slate-300',
    borderAccent: 'border-t-slate-500',
  },
];

export function OurVision() {
  return (
    <section className="bg-[#060b14] border-t border-white/8">
      {/* Diagonal texture */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #5de0e6 0, #5de0e6 1px, transparent 0, transparent 60%)',
            backgroundSize: '28px 28px',
          }}
        />
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

        {/* Three-step grid — shared border, no gaps, no radius */}
        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-3 border border-white/10">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className={`p-8 md:p-10 border-t-2 ${step.borderAccent} ${i < steps.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
              >
                <span className="text-[10px] font-mono tracking-[0.22em] text-slate-700 uppercase block mb-6">{step.index}</span>
                <h3 className={`text-sm font-bold uppercase tracking-wide mb-4 ${step.color}`}>{step.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Vision statement — hard border, no radius */}
        <AnimatedSection delay={0.25} className="mt-0 border-l border-r border-b border-white/10">
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-10 items-start border-t border-white/5">
            <div>
              <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase block mb-5">The Platform Positioning</span>
              <h3
                className="font-black tracking-tighter leading-[0.95] text-white uppercase"
                style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.9rem)' }}
              >
                The tool that bridges conceptual and physical change management.
              </h3>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base">
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
        </AnimatedSection>

      </Container>
    </section>
  );
}
