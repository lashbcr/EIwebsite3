import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const useCases = [
  {
    emoji: '🏛️',
    title: 'Enterprise Architecture',
    description:
      'Enhance team efficacy through streamlined deliverable creation and powerful analysis. Build a living architecture repository your whole organisation can trust.',
  },
  {
    emoji: '📊',
    title: 'Application Portfolio Management',
    description:
      'A turn-key solution leveraging over a decade of EA experience. Rationalise your application landscape and plan migrations with confidence.',
  },
  {
    emoji: '⚙️',
    title: 'Business Process Management',
    description:
      'Model, analyse, and optimise your business processes with standards-based tooling. Visualise how processes connect to capabilities and systems.',
  },
  {
    emoji: '🎯',
    title: 'Business Capability Management',
    description:
      'Align strategy with technology through clear capability models. Understand what your organisation can do and where gaps exist.',
  },
];

export function UseCases() {
  return (
    <Section id="use-cases" className="bg-slate-50 dark:bg-[#080f1c]">
      <Container>
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Built for every EA discipline
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Whether you&apos;re managing applications, modelling capabilities, or mapping processes — Enterprise Insight has you covered.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {useCases.map((uc, i) => (
            <AnimatedSection key={uc.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-7 hover:border-primary-500/30 dark:hover:border-primary-500/25 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 h-full">
                <div className="text-3xl mb-4 leading-none">{uc.emoji}</div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{uc.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{uc.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
