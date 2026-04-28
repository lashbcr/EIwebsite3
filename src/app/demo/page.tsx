import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Book a Demo — Enterprise Insight',
  description: 'See Enterprise Insight in action. Book a personalised walkthrough with our team.',
};

export default function DemoPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white dark:bg-[#060b14] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-112.5 rounded-full bg-primary-600/10 blur-3xl" />
        </div>
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/5 dark:bg-primary-500/10 px-4 py-1.5 text-xs font-medium text-primary-500 mb-6">
                Book a demo
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                See Enterprise Insight in action
              </h1>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                Get a personalised walkthrough of the platform tailored to your organisation's specific challenges. Live Q&A included.
              </p>
              <ul className="space-y-4">
                {[
                  { title: '45-minute session', description: 'A focused, no-fluff demo of the features most relevant to you.' },
                  { title: 'Tailored to your use case', description: "Tell us your challenges in advance — we'll show you exactly how EI solves them." },
                  { title: 'Meet the team', description: 'Talk directly with our solutions architects, not a sales script.' },
                  { title: 'No commitment required', description: 'Explore the platform freely before making any decisions.' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{item.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/4 p-8">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Request your demo</h2>
                <p className="text-slate-400 dark:text-slate-600 text-sm text-center py-12">[Demo booking form / Calendly embed to be added]</p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
    </>
  );
}
