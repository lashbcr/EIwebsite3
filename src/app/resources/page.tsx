import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Resources — Enterprise Insight',
  description: 'Guides, templates, whitepapers, and research to help your EA practice thrive.',
};

const categories = [
  { label: 'Whitepapers', count: 12 },
  { label: 'Templates', count: 24 },
  { label: 'Webinar recordings', count: 18 },
  { label: 'Case studies', count: 9 },
  { label: 'Research reports', count: 6 },
  { label: 'Toolkits', count: 8 },
];

const featured = [
  {
    category: 'Whitepaper',
    title: 'The State of Enterprise Architecture 2025',
    description: 'Our annual research report covering EA maturity, tooling trends, and priorities across 500+ organisations.',
    readTime: '15 min read',
  },
  {
    category: 'Template',
    title: 'Application Portfolio Assessment Toolkit',
    description: 'A practical, ready-to-use template for scoring and rationalising your application landscape.',
    readTime: 'Downloadable',
  },
  {
    category: 'Webinar',
    title: 'AI in Enterprise Architecture: What\'s Real, What\'s Hype',
    description: 'Panel discussion with EA leaders from Fortune 500 companies on practical AI adoption.',
    readTime: '48 min watch',
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white dark:bg-[#060b14] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full bg-primary-600/10 blur-3xl" />
        </div>
        <Container>
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/5 dark:bg-primary-500/10 px-4 py-1.5 text-xs font-medium text-primary-500 mb-6">
              Resource hub
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Everything you need to level up your EA practice
            </h1>
            <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Free guides, templates, research reports, and webinar recordings from our team and the wider EA community.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-16 bg-slate-50 dark:bg-[#080f1c]">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.label} delay={i * 0.04}>
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/3 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-primary-500/30 hover:text-primary-500 transition-colors">
                  {cat.label}
                  <span className="text-xs text-slate-400">{cat.count}</span>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured resources */}
      <section className="py-20 md:py-28 bg-white dark:bg-[#060b14]">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-2">Featured</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Top picks</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.08}>
                <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 h-full flex flex-col">
                  <span className="text-xs font-medium text-primary-500 mb-3">{item.category}</span>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{item.description}</p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 dark:border-white/6">
                    <span className="text-xs text-slate-400">{item.readTime}</span>
                    <span className="text-xs font-medium text-primary-500 cursor-pointer hover:text-primary-400">Access →</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* All resources placeholder */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#080f1c]">
        <Container>
          <AnimatedSection className="text-center">
            <p className="text-slate-400 dark:text-slate-600 text-sm">[Full resource library / search to be added]</p>
          </AnimatedSection>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
