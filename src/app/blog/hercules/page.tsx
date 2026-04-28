import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import { BookDemoButton } from '@/components/ui/BookDemoButton';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'How Hercules PLC Achieves Strategic Transformation During Rapid Growth — Enterprise Insight',
  description:
    'Hercules PLC grew revenue 28% to £102M and acquired three companies in a year. Here are the 4 EA strategies their digital team used to keep pace without losing control.',
  keywords: [
    'enterprise architecture case study',
    'digital transformation growth',
    'Hercules PLC',
    'EA tooling UK',
    'enterprise architecture rapid growth',
    'change management enterprise architecture',
  ],
  openGraph: {
    title: 'How Hercules PLC Achieves Strategic Transformation During Rapid Growth',
    description:
      'Hercules PLC grew revenue 28% to £102M and acquired three companies in a year. Here are the 4 EA strategies their digital team used to keep pace without losing control.',
    url: 'https://enterpriseinsight.io/blog/hercules',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Hercules PLC Achieves Strategic Transformation During Rapid Growth',
    description:
      'Hercules PLC grew revenue 28% to £102M and acquired three companies in a year. Here are the 4 EA strategies their digital team used to keep pace without losing control.',
  },
  alternates: {
    canonical: 'https://enterpriseinsight.io/blog/hercules',
  },
};

export default function HerculesPage() {
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
            <span className="text-xs font-medium text-primary-500 mb-4 block">Case Study</span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
              How Hercules PLC Achieves Strategic Transformation During Rapid Growth and Complex Change
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              4 strategies the Hercules digital team used to stay in control while growing revenue 28% and completing three acquisitions in a single year.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>April 10, 2026</span>
              <span>·</span>
              <span>8 min read</span>
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
                src="/DSCF0030-scaled.jpg"
                alt="Hercules PLC — strategic transformation"
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
                <h2>From Strength to Strength: The Hercules PLC Story</h2>
                <p>
                  In just 15 years, Hercules PLC has grown from a startup to a public company listed on the London AIM
                  market, becoming a significant player in the UK labour supply sector. Between 2023 and 2024, their
                  annual revenue grew by 28% to £102 million. The company acquired three organisations in 2025 alone
                  and aims to reach £400–500 million in revenue by 2029.
                </p>
                <p>
                  <strong>Their competitive edge is agility.</strong> Using sophisticated software solutions, Hercules
                  supplies labour quickly to large-scale projects like HS2.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats strip */}
            <AnimatedSection delay={0.05} className="my-10">
              <div className="grid grid-cols-3 gap-4 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6">
                {[
                  { stat: '28%', label: 'Revenue growth (2023–2024)' },
                  { stat: '£102M', label: 'Annual revenue in 2024' },
                  { stat: '3', label: 'Acquisitions completed in 2025' },
                ].map(({ stat, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-primary-500">{stat}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Challenges */}
            <AnimatedSection delay={0.08}>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>The Challenges of Rapid Growth for a Digital Team</h2>
                <p>
                  During this unprecedented expansion, the Digital and Technology team at Hercules PLC faced several
                  compounding obstacles:
                </p>
                <ul>
                  <li>Reactive, ad hoc decisions that lacked consistency for long-term planning</li>
                  <li>Growing complexity of processes and technology from new acquisitions and contractors</li>
                  <li>Risk of uncoordinated change across the business without a unified perspective</li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Strategy section header */}
            <AnimatedSection delay={0.1}>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>4 Strategies to Effectively Manage Digital Transformation Through Growth</h2>
              </div>
            </AnimatedSection>

            {/* Strategy 1 */}
            <AnimatedSection delay={0.12}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-6">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Strategy 1</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Gain visibility and reduce complexity to ensure uninterrupted services
                </h3>
                <blockquote className="border-l-2 border-primary-500/40 pl-4 text-slate-500 dark:text-slate-400 italic text-sm mb-4">
                  "We run a large business with a large payroll. We can't afford to make mistakes."
                  <cite className="block not-italic mt-1 text-xs text-slate-400">— Ed Horner, Head of Digital and Technology</cite>
                </blockquote>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Each acquired company brings its own recruitment processes, pay rates, and systems. By leveraging
                  process and capability modelling, the digital team identifies risks affecting service delivery and
                  understands how processes, services, and technology interconnect for efficient labour onboarding.
                </p>
              </div>
            </AnimatedSection>

            {/* Strategy 2 */}
            <AnimatedSection delay={0.14}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-4">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Strategy 2</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Stay focused and prioritise quick service delivery
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Hercules maintains its pioneering reputation for rapid recruitment through an agile philosophy. The
                  team avoids prolonged technology implementations, data migrations, and complex modelling exercises.
                  They use AI-generated content to streamline productivity further — keeping pace with the business
                  without getting lost in tooling overhead.
                </p>
              </div>
            </AnimatedSection>

            {/* Strategy 3 */}
            <AnimatedSection delay={0.16}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-4">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Strategy 3</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Plan for long-term success with a single source of truth
                </h3>
                <blockquote className="border-l-2 border-primary-500/40 pl-4 text-slate-500 dark:text-slate-400 italic text-sm mb-4">
                  "There's a lot of changes, a lot of growth — our business plan is through integrations, so we need to
                  ensure that any company coming in, any change in digital transformation is managed and controlled."
                  <cite className="block not-italic mt-1 text-xs text-slate-400">— Hercules PLC leadership</cite>
                </blockquote>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Hercules is transitioning from reactive decisions to controlled, consistent change management. With
                  unified visibility into processes, services, and technology, the team can plan more effectively and
                  identify possible challenges before they become incidents.
                </p>
              </div>
            </AnimatedSection>

            {/* Strategy 4 */}
            <AnimatedSection delay={0.18}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-4">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Strategy 4</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Communicate change across teams with data-driven visuals
                </h3>
                <blockquote className="border-l-2 border-primary-500/40 pl-4 text-slate-500 dark:text-slate-400 italic text-sm mb-4">
                  "People might want something, but when you go through the end-to-end process and how that's going to
                  knock things down the road, it makes them rethink and address things in a different way — from system
                  or process."
                  <cite className="block not-italic mt-1 text-xs text-slate-400">— Ed Horner, Head of Digital and Technology</cite>
                </blockquote>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Communicating new technologies means adjusting how people work. Because people naturally resist
                  change, clear narratives supported by data and visual information are essential. Visualisations —
                  dashboards, diagrams, and data-driven models — help teams understand how changes ripple through
                  operations before they happen.
                </p>
              </div>
            </AnimatedSection>

            {/* TLDR */}
            <AnimatedSection delay={0.2} className="mt-10">
              <div className="rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8 p-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">TL;DR</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  By gaining visibility into processes, systems, and services, Hercules PLC's digital team achieved
                  strategic transformation during unprecedented growth and complex change — supported by enterprise
                  architecture solutions that kept the whole business aligned.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.22} className="mt-10">
              <div className="rounded-xl bg-primary-500/5 dark:bg-primary-500/10 border border-primary-500/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-white mb-1">See how Enterprise Insight powers transformation at scale</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Book a personalised demo and we'll show you how EA tooling can give your team the same visibility Hercules PLC has.</p>
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
