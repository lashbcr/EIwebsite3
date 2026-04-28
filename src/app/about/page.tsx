import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'About Us — Enterprise Insight',
  description:
    'Enterprise architecture software built with 20+ years of industry experience — designed to optimize, not hinder your work.',
};

const pillars = [
  {
    heading: 'Built for architects, by architects',
    body: 'Nothing is less productive than fighting complex, expensive and unintuitive EA software that belongs in the 00\'s. 20+ years in the industry have shown us that architects invest in EA tools that promise a quick time-to-value but are expensive, with a steep learning curve, only to create inflexible views that send audiences to sleep.',
  },
  {
    heading: 'Easy to use, effortless to share',
    body: 'Irritating your team with complex new software isn\'t helpful, so we created software that\'s easy to use and automates the manual labour of redrawing diagrams and filling out fields. We want leadership to be blown away by your beautiful architecture, so we created customisable, shareable views that are automatically updated with your edits.',
  },
  {
    heading: 'Affordable and flexible from day one',
    body: 'It won\'t take 18 months to get started, either. Our monthly, affordable platform allows for flexibility for individuals and teams. Go at your own pace with demo videos or get personalised support from our experts with decades of experience.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white dark:bg-[#060b14] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full bg-primary-600/10 blur-3xl" />
        </div>
        <Container>
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Your enterprise architecture software should optimize, not hinder your work.
            </h1>
          </AnimatedSection>
        </Container>
      </section>

      {/* Pillars */}
      <section className="pb-24 bg-white dark:bg-[#060b14]">
        <Container>
          <div className="max-w-2xl mx-auto space-y-0 divide-y divide-slate-100 dark:divide-white/6">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.heading} delay={i * 0.08}>
                <div className="py-10">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    {pillar.heading}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience banner */}
      <section className="py-20 bg-slate-50 dark:bg-[#080f1c]">
        <Container>
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
              The tool developed with{' '}
              <span className="text-primary-500">20+ years of experience</span>{' '}
              in enterprise architecture.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-[#060b14] border-t border-slate-100 dark:border-white/6">
        <Container>
          <AnimatedSection className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Ready to see it in action?
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
              Book a personalised demo with one of our experts and discover how Enterprise Insight
              fits your team&apos;s workflow.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-10 px-6 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold transition-colors shadow-[0_4px_20px_rgba(236,44,68,0.35)]"
            >
              Book a Demo
            </a>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
