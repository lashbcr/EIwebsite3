import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const features = [
  {
    title: 'Automated Diagram Generation',
    description:
      'Connect your data sources and watch professional architecture diagrams generate themselves — always up to date, always on-brand.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
        <line x1="10" y1="6.5" x2="14" y2="6.5" /><line x1="10" y1="17.5" x2="14" y2="17.5" />
        <line x1="6.5" y1="10" x2="6.5" y2="14" /><line x1="17.5" y1="10" x2="17.5" y2="14" />
      </svg>
    ),
  },
  {
    title: 'TOGAF & ArchiMate Support',
    description:
      'Built-in support for industry standards. Get started with the KeystoneEA™ seven-layer framework, shipped ready to use out of the box.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Insights',
    description:
      'Surface patterns, risks, and opportunities across your enterprise landscape. Data-driven decision-making at every level.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: 'Team Collaboration',
    description:
      'Real-time collaboration for architecture teams. Share, review, and refine diagrams with stakeholders across your organisation.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Flexible Configuration',
    description:
      'Adapt the platform to your unique processes and terminology. No rigid templates — just a framework that works your way.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M2 12h2M20 12h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41M12 20v2M12 2v2" />
      </svg>
    ),
  },
  {
    title: 'Integration Capabilities',
    description:
      'Connect with your existing toolchain. Import data from CMDBs, spreadsheets, APIs, and more to keep your repository current.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <Section id="features" className="bg-white dark:bg-[#060b14]">
      <Container>
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Everything your EA team needs
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            A fully-featured platform that eliminates manual effort and lets your architects focus on strategy.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 dark:bg-white/6 rounded-2xl overflow-hidden border border-slate-100 dark:border-white/6">
          {features.map((feat, i) => (
            <AnimatedSection key={feat.title} delay={i * 0.06}>
              <div className="group p-8 bg-white dark:bg-[#060b14] hover:bg-slate-50 dark:hover:bg-white/3 transition-colors h-full">
                <div className="w-9 h-9 rounded-lg bg-primary-500/10 text-primary-500 dark:text-primary-400 flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">{feat.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feat.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
