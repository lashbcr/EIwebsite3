import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const products = [
  {
    name: 'Enterprise Insight',
    tagline: 'Core Platform',
    description:
      'A flexible, powerful, and automated tool for enterprise architecture teams. Built on KeystoneEA™ with TOGAF and ArchiMate support, automated diagram production, and affordable, accessible pricing.',
    highlights: [
      'KeystoneEA™ — 7 layers, 15 object types, 6 viewpoints',
      'Fully automated view production',
      'TOGAF & ArchiMate standards support',
      'Highly configurable environments',
      'Accessible, affordable pricing',
    ],
    accent: 'primary' as const,
    visual: <CorePlatformVisual />,
  },
  {
    name: 'Enterprise Publisher',
    tagline: 'Stakeholder Portal',
    description:
      'An architecture communication platform built for the modern world. Publish and share your architecture data interactively, giving every stakeholder the right view at the right time.',
    highlights: [
      'Interactive stakeholder portal',
      'Real-time architecture publishing',
      'Role-based access and dashboards',
      'Dynamic navigation and search',
      'No training required for viewers',
    ],
    accent: 'secondary' as const,
    visual: <PublisherVisual />,
  },
];

export function Products() {
  return (
    <Section id="products" className="bg-slate-50 dark:bg-[#080f1c]">
      <Container>
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Two powerful products, one platform
          </h2>
          <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Use Enterprise Insight to build and manage your architecture. Use Enterprise Publisher to communicate it to the world.
          </p>
        </AnimatedSection>

        <div className="space-y-20">
          {products.map((product, i) => (
            <AnimatedSection key={product.name}>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className={`inline-block text-xs font-semibold uppercase tracking-widest mb-4 ${product.accent === 'primary' ? 'text-primary-500' : 'text-secondary-500'}`}>
                    {product.tagline}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">{product.description}</p>
                  <ul className="space-y-3 mb-8">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3">
                        <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${product.accent === 'primary' ? 'bg-primary-500/15 text-primary-500' : 'bg-secondary-500/15 text-secondary-500'}`}>
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-sm text-slate-600 dark:text-slate-300">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="#demo" variant={product.accent === 'primary' ? 'primary' : 'outline'}>
                    Learn more →
                  </Button>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`rounded-2xl border p-8 min-h-64 flex items-center justify-center ${product.accent === 'primary' ? 'border-primary-500/20 dark:border-primary-500/15 bg-primary-500/5 dark:bg-primary-500/5' : 'border-secondary-500/20 dark:border-secondary-500/15 bg-secondary-500/5 dark:bg-secondary-500/5'}`}>
                    {product.visual}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CorePlatformVisual() {
  const layers = ['Governance', 'Strategy', 'Business', 'Data', 'Application', 'Technology'];
  const colors = ['#c4253a', '#d42840', '#ec2c44', '#f05060', '#f0687a', '#f58090'];
  return (
    <div className="w-full max-w-xs mx-auto space-y-2">
      {layers.map((layer, i) => (
        <div key={layer} className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: colors[i] }} />
          <div
            className="flex-1 h-8 rounded-lg flex items-center px-3"
            style={{ backgroundColor: colors[i] + '15', border: `1px solid ${colors[i]}30` }}
          >
            <span className="text-xs font-medium" style={{ color: colors[i] }}>{layer}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function PublisherVisual() {
  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="rounded-xl border border-secondary-500/20 bg-white dark:bg-[#0d0d1f] overflow-hidden shadow-xl shadow-secondary-500/5">
        <div className="bg-secondary-600 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
            <span className="w-2 h-2 rounded-full bg-white/30" />
          </div>
          <span className="text-xs text-white/80 font-medium ml-1">Architecture Portal</span>
        </div>
        <div className="p-4 space-y-1">
          {['Application Landscape', 'Capability Map', 'Roadmap 2026', 'Risk Assessment'].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
            >
              <span className="text-xs text-slate-600 dark:text-slate-400">{item}</span>
              <span className="text-xs text-secondary-500 font-medium">View →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
