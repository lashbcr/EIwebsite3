import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const steps = [
  {
    number: '01',
    title: 'Connect your data',
    description:
      'Import from CMDBs, spreadsheets, APIs, or manual entry. Enterprise Insight normalises everything into a unified architecture repository.',
  },
  {
    number: '02',
    title: 'Structure with KeystoneEA™',
    description:
      'Data is automatically organised using the KeystoneEA™ framework — seven layers, fifteen object types, six relationships. No setup required.',
  },
  {
    number: '03',
    title: 'Generate diagrams automatically',
    description:
      'Professional, standards-compliant architecture views generate automatically from your data. Always current, always accurate.',
  },
  {
    number: '04',
    title: 'Publish and collaborate',
    description:
      'Share interactive architecture portals with stakeholders via Enterprise Publisher. Role-based access ensures everyone sees exactly what they need.',
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-white dark:bg-[#060b14]">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            How it works
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            From data import to stakeholder communication in four simple steps.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.1}>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-5 relative z-10">
                  <span className="text-lg font-bold text-primary-500 font-mono">{step.number}</span>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
