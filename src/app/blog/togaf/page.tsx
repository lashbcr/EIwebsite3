import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import { BookDemoButton } from '@/components/ui/BookDemoButton';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Why Can't Financial Institutions Ignore TOGAF Anymore? — Enterprise Insight",
  description:
    'Banks and insurers now face regulatory mandates, cross-border complexity, and legacy modernisation pressure. TOGAF has become a compliance tool, a strategic alignment framework, and a competitive necessity.',
  keywords: [
    'TOGAF financial institutions',
    'enterprise architecture banking',
    'TOGAF regulatory compliance',
    'DORA enterprise architecture',
    'TOGAF ADM banking',
    'legacy modernisation financial services',
  ],
  openGraph: {
    title: "Why Can't Financial Institutions Ignore TOGAF Anymore?",
    description:
      'Banks and insurers now face regulatory mandates, cross-border complexity, and legacy modernisation pressure. TOGAF has become a compliance tool, a strategic alignment framework, and a competitive necessity.',
    url: 'https://enterpriseinsight.io/blog/togaf',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Why Can't Financial Institutions Ignore TOGAF Anymore?",
    description:
      'Banks and insurers now face regulatory mandates, cross-border complexity, and legacy modernisation pressure. TOGAF has become a compliance tool, a strategic alignment framework, and a competitive necessity.',
  },
  alternates: {
    canonical: 'https://enterpriseinsight.io/blog/togaf',
  },
};

export default function TogafPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white dark:bg-[#060b14] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 rounded-full bg-primary-600/8 blur-3xl" />
        </div>
        <Container>
          <AnimatedSection className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary-500 transition-colors mb-8">
              ← Back to Blog
            </Link>
            <span className="text-xs font-medium text-primary-500 mb-4 block">Enterprise Architecture</span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              Why Can&apos;t Financial Institutions Ignore TOGAF Anymore?
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Banks and insurance companies operate in increasingly complex technological and regulatory environments — and TOGAF has quietly become a compliance requirement, not just a best practice.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>April 23, 2026</span>
              <span>·</span>
              <span>7 min read</span>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Hero image */}
      <section className="bg-white dark:bg-[#060b14]">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
              <Image
                src="/pexels-pixabay-163056-scaled.jpg"
                alt="Financial institutions and enterprise architecture"
                fill
                loading="eager"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Article body */}
      <section className="py-12 bg-white dark:bg-[#060b14]">
        <Container>
          <div className="max-w-3xl mx-auto">

            {/* Intro */}
            <AnimatedSection>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>TOGAF: From Best Practice to Business Necessity</h2>
                <p>
                  For years, TOGAF sat comfortably in the category of &ldquo;good to have&rdquo; — a structured framework that
                  serious enterprise architects used, but one that rarely reached the board agenda in financial services.
                  That era is ending.
                </p>
                <p>
                  Across Europe, the Middle East, Africa, and beyond, financial regulators are now explicitly referencing
                  TOGAF-based frameworks in their expectations. The EU&apos;s Digital Operational Resilience Act (DORA), effective
                  January 2025, is just the most prominent signal. <strong>TOGAF is no longer just a best practice; it is becoming
                  a compliance tool, a strategic alignment framework, and a competitive necessity</strong> for financial institutions
                  navigating regulatory transparency and digital transformation at scale.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats strip */}
            <AnimatedSection delay={0.05} className="my-10">
              <div className="grid grid-cols-3 gap-4 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6">
                {[
                  { stat: '9+', label: 'Jurisdictions with TOGAF-aligned regulatory requirements' },
                  { stat: 'Jan 2025', label: 'EU DORA effective date' },
                  { stat: '20+', label: 'Years of EA expertise behind this analysis' },
                ].map(({ stat, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-primary-500">{stat}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Reason section header */}
            <AnimatedSection delay={0.1}>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>5 Reasons Financial Institutions Can No Longer Afford to Ignore TOGAF</h2>
              </div>
            </AnimatedSection>

            {/* Reason 1 */}
            <AnimatedSection delay={0.12}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-6">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Reason 1</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Architecture is becoming a regulatory mandate
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  In several countries, financial regulators now explicitly require or strongly encourage TOGAF or
                  TOGAF-based frameworks. Failing to demonstrate architectural maturity can delay licensing, increase
                  regulatory scrutiny, or result in operational penalties.
                </p>
                <ul className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-2 list-none p-0 m-0">
                  {[
                    { region: 'Hungary', detail: 'The Hungarian National Bank (MNB) references TOGAF-based enterprise architecture in regulatory expectations.' },
                    { region: 'Saudi Arabia', detail: 'The Digital Government Authority mandates TOGAF-aligned principles through the National Overall Reference Architecture (NORA).' },
                    { region: 'Nigeria', detail: 'NITDA introduced the National Enterprise Architecture Framework (NEAF) based on TOGAF for modernising digital governance across banking.' },
                    { region: 'Finland', detail: 'Public sector IT procurements must be grounded in enterprise architecture, strongly reflecting TOGAF principles.' },
                    { region: 'EU (DORA)', detail: 'The Digital Operational Resilience Act aligns closely with TOGAF\'s structured approach to architecture and governance.' },
                  ].map(({ region, detail }) => (
                    <li key={region} className="flex gap-2">
                      <span className="text-primary-500 font-semibold shrink-0">{region}:</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Reason 2 */}
            <AnimatedSection delay={0.14}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-4">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Reason 2</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Cross-border operations demand a consistent architecture language
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Multinational banks and insurers operating across jurisdictions benefit from TOGAF&apos;s standard,
                  adaptable architecture language. It ensures internal consistency while allowing localised extensions,
                  enabling organisations to scale across borders without fragmenting their technology landscape or
                  duplicating governance effort in every market they enter.
                </p>
              </div>
            </AnimatedSection>

            {/* Reason 3 */}
            <AnimatedSection delay={0.16}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-4">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Reason 3</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Strategic alignment of IT and business capabilities
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  TOGAF&apos;s Architecture Development Method (ADM) guides institutions from high-level goals down to
                  detailed execution steps, ensuring every technology initiative supports business priorities — whether
                  that&apos;s credit risk modelling, ESG reporting, or customer onboarding optimisation. Without this
                  alignment, IT investments drift from strategic intent, creating complexity without value.
                </p>
              </div>
            </AnimatedSection>

            {/* Reason 4 */}
            <AnimatedSection delay={0.18}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-4">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Reason 4</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Modernising legacy systems with minimal disruption
                </h3>
                <blockquote className="border-l-2 border-primary-500/40 pl-4 text-slate-500 dark:text-slate-400 italic text-sm mb-4">
                  &ldquo;Define where you are. Design where you&apos;re going. Manage how you get there.&rdquo;
                  <cite className="block not-italic mt-1 text-xs text-slate-400">— Core principle of the TOGAF ADM</cite>
                </blockquote>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  TOGAF provides financial institutions with the tools to define a Baseline Architecture, design
                  Transition Architectures, and articulate a Target Architecture. This staged approach dramatically
                  reduces risk and manages the cost, change resistance, and data migration challenges inherent in
                  core banking or insurance platform modernisation programmes.
                </p>
              </div>
            </AnimatedSection>

            {/* Reason 5 */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-4">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Reason 5</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Faster, cheaper compliance with sectoral architecture mandates
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                  Organisations already using TOGAF internally can map their architecture models to external
                  regulatory requirements more quickly, reducing compliance time and cost. As adoption accelerates
                  across the UAE, South Africa, Egypt, and Estonia, institutions that invest now will spend far less
                  on each subsequent jurisdiction they enter.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  The first-mover advantage is real: being the institution that can demonstrate architectural maturity
                  to regulators — not scramble to build it after a request — is increasingly a licensing and
                  reputation differentiator.
                </p>
              </div>
            </AnimatedSection>

            {/* TL;DR */}
            <AnimatedSection delay={0.22} className="mt-10">
              <div className="rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8 p-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">TL;DR</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  TOGAF has crossed the line from advisory to essential in financial services. Regulatory mandates in
                  nine or more jurisdictions, the EU&apos;s DORA framework, and the demands of cross-border operations
                  mean financial institutions can no longer treat enterprise architecture as an optional discipline.
                  Those that adopt TOGAF now will navigate compliance faster, modernise systems with less risk, and
                  align technology to strategy with greater precision.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.24} className="mt-10">
              <div className="rounded-xl bg-primary-500/5 dark:bg-primary-500/10 border border-primary-500/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-white mb-1">Load TOGAF into your EA tooling in two clicks</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Enterprise Insight supports TOGAF natively. Book a demo and see how your team can go from zero to compliant architecture in a single afternoon.</p>
                </div>
                <BookDemoButton size="md" />
              </div>
            </AnimatedSection>

          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
