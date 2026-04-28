import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const pillars = [
  {
    number: '01',
    title: 'Generate',
    description:
      'Producing architecture content has never been easier. Automated diagram generation from your data — always current, always accurate.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: 'text-primary-500',
    glow: 'shadow-primary-500/20',
    border: 'hover:border-primary-500/30',
    iconBg: 'bg-primary-500/10 dark:bg-primary-500/10 text-primary-500',
  },
  {
    number: '02',
    title: 'Optimise',
    description:
      'Flexible, adaptive content creation. Customise your environment to exceed the expectations of every audience across your organisation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    color: 'text-secondary-500',
    glow: 'shadow-secondary-500/20',
    border: 'hover:border-secondary-500/30',
    iconBg: 'bg-secondary-500/10 dark:bg-secondary-500/10 text-secondary-500',
  },
  {
    number: '03',
    title: 'Communicate',
    description:
      'Enable stakeholders to interact with architecture data in ways never seen before. Real-time publishing across every layer of your organisation.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: 'text-cyan-500',
    glow: 'shadow-cyan-500/20',
    border: 'hover:border-cyan-500/30',
    iconBg: 'bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-500',
  },
];

export function Pillars() {
  return (
    <Section className="bg-slate-50 dark:bg-[#080f1c]">
      <Container>
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Built around three core principles
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Everything Enterprise Insight does is designed to help your architects work faster, smarter, and with greater impact.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1}>
              <div className={`group rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-8 h-full transition-all duration-300 hover:shadow-xl ${pillar.glow} ${pillar.border} dark:hover:border-opacity-30`}>
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${pillar.iconBg}`}>
                    {pillar.icon}
                  </div>
                  <span className="text-xs font-mono text-slate-300 dark:text-slate-700">{pillar.number}</span>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${pillar.color}`}>{pillar.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{pillar.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
