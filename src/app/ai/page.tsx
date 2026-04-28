import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/sections/CTABanner';
import { BookDemoButton } from '@/components/ui/BookDemoButton';

export const metadata: Metadata = {
  title: 'AI Enterprise Architecture Tools — Enterprise Insight',
  description:
    'AI enterprise architecture tools that automate architecture diagrams, surface insights instantly, and accelerate every stage of your EA programme.',
  keywords: [
    'AI enterprise architecture',
    'automated architecture diagrams',
    'AI EA tool',
    'architecture automation',
    'enterprise architecture AI',
  ],
  openGraph: {
    title: 'AI Enterprise Architecture Tools — Enterprise Insight',
    description:
      'AI enterprise architecture tools that automate architecture diagrams, surface insights instantly, and accelerate every stage of your EA programme.',
    url: 'https://lashwebsitetwo.netlify.app/ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Enterprise Architecture Tools — Enterprise Insight',
    description:
      'AI enterprise architecture tools that automate architecture diagrams, surface insights instantly, and accelerate every stage of your EA programme.',
  },
  alternates: {
    canonical: 'https://lashwebsitetwo.netlify.app/ai',
  },
};

export default function AiFeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white dark:bg-[#060b14] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 rounded-full bg-primary-600/15 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-75 h-75 rounded-full bg-secondary-500/10 blur-3xl" />
        </div>
        <Container>
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/5 dark:bg-primary-500/10 px-4 py-1.5 text-xs font-medium text-primary-500 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              AI-powered
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              AI that works the way architects think
            </h1>
            <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Enterprise Insight embeds AI throughout the platform — not as a bolt-on chatbot, but as a native layer of intelligence that augments every decision, analysis, and communication.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
              <BookDemoButton size="lg" />
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* AI capabilities */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#080f1c]">
        <Container>
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-4">AI capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Intelligence across every workflow</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {[
              {
                title: 'Natural language architecture queries',
                description: 'Ask questions about your architecture in plain English. "Which applications are at risk if we decommission this service?" — answered in seconds.',
                badge: 'Available now',
              },
              {
                title: 'Automated impact analysis',
                description: 'AI traces the dependency graph and predicts downstream effects of any proposed change, surfacing risks your team might miss.',
                badge: 'Available now',
              },
              {
                title: 'AI-generated roadmap summaries',
                description: 'Turn complex multi-year transformation plans into clear, audience-specific narratives your stakeholders will actually read.',
                badge: 'Available now',
              },
              {
                title: 'Anomaly & debt detection',
                description: 'Automatically identify technical debt, duplicate capabilities, shadow IT, and compliance gaps across your application landscape.',
                badge: 'Coming soon',
              },
            ].map((capability, i) => (
              <AnimatedSection key={capability.title} delay={i * 0.06}>
                <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-8 flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{capability.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${capability.badge === 'Available now' ? 'bg-primary-500/10 text-primary-500' : 'bg-slate-100 dark:bg-white/8 text-slate-500 dark:text-slate-400'}`}>
                        {capability.badge}
                      </span>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust & safety */}
      <section className="py-20 md:py-28 bg-white dark:bg-[#060b14]">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-4">Responsible AI</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Enterprise-grade AI you can trust</h2>
              <p className="mt-5 text-slate-500 dark:text-slate-400 leading-relaxed">
                Every AI output in Enterprise Insight is explainable, auditable, and grounded in your own architecture data. We don't hallucinate — we reason.
              </p>
              <ul className="mt-6 space-y-3">
                {['All AI runs on your data — never mixed with other tenants', 'Full audit trail of AI-generated recommendations', 'Human-in-the-loop controls for high-impact actions', 'On-premise and private cloud deployment options'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 aspect-square max-w-sm mx-auto flex items-center justify-center">
                <p className="text-slate-400 dark:text-slate-600 text-sm">[AI trust illustration placeholder]</p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
