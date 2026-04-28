import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/sections/CTABanner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BDAT Consulting Case Study — Enterprise Insight',
  description: 'How Gabor and BDAT used Enterprise Insight to deliver faster, higher-confidence EA consulting for enterprise clients.',
};

export default function ConsultingCaseStudyPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white dark:bg-[#060b14] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 rounded-full bg-primary-600/8 blur-3xl" />
        </div>
        <Container>
          <AnimatedSection className="max-w-3xl mx-auto">
            <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary-500 transition-colors mb-8">
              ← All case studies
            </Link>
            <span className="text-xs font-medium text-slate-400 mb-4 block">Consulting · Case Study</span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              How BDAT delivers faster, higher-confidence EA advice with Enterprise Insight
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Gabor's team at BDAT turned Enterprise Insight into a competitive advantage — reducing engagement setup time and increasing client confidence in architecture recommendations.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Key metrics */}
      <section className="py-12 bg-slate-50 dark:bg-[#080f1c] border-y border-slate-200 dark:border-white/6">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { label: 'Delivery speed', value: '3×' },
              { label: 'Client satisfaction', value: '94%' },
              { label: 'Engagements accelerated', value: '50+' },
              { label: 'Time to insight', value: '< 1 week' },
            ].map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.06} className="text-center">
                <p className="text-3xl font-bold text-primary-500">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Case study content */}
      <section className="py-16 bg-white dark:bg-[#060b14]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-12">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The challenge</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                [Detailed description of BDAT's consulting challenges before Enterprise Insight — time-consuming architecture assessments, inconsistent data quality across client environments, difficulty scaling EA practices across multiple engagements. To be filled in.]
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <div className="rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/8 p-6">
                <blockquote className="text-lg font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                  "[Customer quote placeholder — to be filled in with real quote from Gabor or BDAT stakeholder.]"
                </blockquote>
                <footer className="mt-4 text-sm text-slate-400">
                  — Gabor, [Title], BDAT
                </footer>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The solution</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                [How BDAT adopted Enterprise Insight as a core tool in their consulting methodology — onboarding approach, which modules drove the most value, how they integrated it into client engagements. To be filled in.]
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">The results</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                [Detailed outcomes — quantitative and qualitative improvements across BDAT's consulting practice. To be filled in.]
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/demo" size="md">Book a Similar Demo</Button>
                <Button href="/case-studies" size="md" variant="outline">More Case Studies</Button>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
