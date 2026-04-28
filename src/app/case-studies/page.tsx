import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies — Enterprise Insight',
  description: 'See how leading organisations use Enterprise Insight to transform their enterprise architecture practice.',
};

const caseStudies = [
  {
    slug: 'construction',
    company: 'Hercules PLS',
    industry: 'Construction',
    summary: 'How Hercules PLS reduced application portfolio complexity by 40% and cut architecture review cycles from weeks to hours.',
    metrics: [{ label: 'Apps rationalised', value: '40%' }, { label: 'Review time saved', value: '80%' }],
  },
  {
    slug: 'consulting',
    company: 'BDAT',
    industry: 'Consulting',
    summary: 'How Gabor and BDAT leveraged Enterprise Insight to deliver faster, higher-confidence EA advice for their enterprise clients.',
    metrics: [{ label: 'Delivery speed', value: '3×' }, { label: 'Client satisfaction', value: '94%' }],
  },
  {
    slug: 'coming-soon',
    company: '[Customer Name]',
    industry: 'Financial Services',
    summary: '[Case study summary to be added.]',
    metrics: [{ label: '[Metric]', value: '[Value]' }],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white dark:bg-[#060b14] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 rounded-full bg-primary-600/10 blur-3xl" />
        </div>
        <Container>
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/5 dark:bg-primary-500/10 px-4 py-1.5 text-xs font-medium text-primary-500 mb-6">
              Customer stories
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Trusted by EA teams worldwide
            </h1>
            <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              See how organisations across every industry are using Enterprise Insight to make faster, better-informed architecture decisions.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Stats banner */}
      <section className="py-12 bg-slate-50 dark:bg-[#080f1c] border-y border-slate-200 dark:border-white/6">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Enterprise customers', value: '150+' },
              { label: 'Countries', value: '30+' },
              { label: 'Architecture objects managed', value: '10M+' },
              { label: 'NPS score', value: '72' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.06} className="text-center">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Case studies */}
      <section className="py-20 md:py-28 bg-white dark:bg-[#060b14]">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <AnimatedSection key={cs.slug} delay={i * 0.08}>
                <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 h-full flex flex-col">
                  <span className="text-xs font-medium text-slate-400 mb-2">{cs.industry}</span>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{cs.company}</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{cs.summary}</p>
                  <div className="flex gap-6 mt-6 pt-4 border-t border-slate-100 dark:border-white/6">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-xl font-bold text-primary-500">{m.value}</p>
                        <p className="text-xs text-slate-400">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  {cs.slug !== 'coming-soon' && (
                    <Link href={`/case-studies/${cs.slug}`} className="mt-4 text-sm font-medium text-primary-500 hover:text-primary-400 transition-colors">
                      Read case study →
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Logo wall placeholder */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#080f1c]">
        <Container>
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-4">Our customers</p>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Trusted by industry leaders</h2>
            <p className="text-slate-400 dark:text-slate-600 text-sm">[Customer logo wall to be added]</p>
          </AnimatedSection>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
