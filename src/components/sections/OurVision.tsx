'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const steps = [
  {
    label: 'Conceptual Change Management',
    description:
      'Architectural models, strategic intent, and transformation frameworks — the authoritative source of what needs to change and why.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    color: 'text-primary-500',
    iconBg: 'bg-primary-500/10 text-primary-500',
    border: 'border-primary-500/20',
  },
  {
    label: 'AI-Generated Change Manifests',
    description:
      'Enterprise Insight automatically produces structured, machine-readable change manifests from your architecture — eliminating manual translation and interpretation loss.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 6v6l4 2" />
        <path d="M18 2v4h4" />
        <path d="M22 2l-4 4" />
      </svg>
    ),
    color: 'text-secondary-500',
    iconBg: 'bg-secondary-500/10 text-secondary-500',
    border: 'border-secondary-500/20',
  },
  {
    label: 'Physical Change Implementation',
    description:
      'Downstream teams receive ready-to-execute artefacts — tickets, runbooks, and implementation packages — derived directly from architectural decisions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    color: 'text-cyan-500',
    iconBg: 'bg-cyan-500/10 text-cyan-500',
    border: 'border-cyan-500/20',
  },
];

export function OurVision() {
  return (
    <Section className="bg-slate-50 dark:bg-[#080f1c] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-80 rounded-full bg-secondary-600/8 dark:bg-secondary-600/12 blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-primary-600/6 dark:bg-primary-600/8 blur-3xl" />
      </div>

      <Container>
        {/* Header */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Closing the Gap Between{' '}
            <span className="text-primary-500 relative">
              Architectural Intent
            </span>{' '}
            and Operational Reality
          </h2>

          <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Enterprise architecture has always excelled at defining <em>what</em> needs to change. We are extending
            that capability into driving <em>how</em> it happens — automatically generating the change manifests
            that translate strategic decisions into downstream implementation, end to end.
          </p>
        </AnimatedSection>

        {/* Bridge steps */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-0 relative">
         
          {steps.map((step, i) => (
            <AnimatedSection key={step.label} delay={i * 0.15} className="relative">
              {/* Arrow connector (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute top-10 -right-3 z-10 w-6 h-6 items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-slate-300 dark:text-slate-600">
                    <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              <div className={`mx-2 md:mx-3 rounded-2xl border ${step.border} bg-white dark:bg-white/3 p-8 h-full transition-all duration-300 hover:shadow-lg`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${step.iconBg}`}>
                  {step.icon}
                </div>
                <h3 className={`text-base font-semibold mb-3 ${step.color}`}>{step.label}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Vision statement */}
        <AnimatedSection delay={0.4} className="mt-14">
          <div className="rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-mono text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-4">
                  The Platform Positioning
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                  The tool that bridges conceptual and physical change management — powered by AI.
                </h3>
              </div>
              <div className="space-y-5">
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Today, a chasm exists between the models architects produce and the work that engineers execute.
                  That gap is where transformation stalls. Enterprise Insight is purpose-built to eliminate it.
                </p>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  By automating the production of change manifests directly from your architecture, we give
                  organisations a single, AI-powered thread that runs from strategic vision all the way through
                  to verified, auditable implementation — without losing fidelity at every handoff.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
