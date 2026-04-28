import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import { BookDemoButton } from '@/components/ui/BookDemoButton';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Successfully Navigating Standards and Frameworks for Your Organization — Enterprise Insight',
  description:
    'Hundreds of EA standards prescribe overlapping metamodels. Here is a practical guide to tailoring frameworks like TOGAF and ArchiMate so they actually work for your organization.',
  keywords: [
    'enterprise architecture standards',
    'EA framework tailoring',
    'TOGAF ArchiMate',
    'EA metamodel',
    'enterprise architecture tools',
    'Graham Berrisford EA',
  ],
  openGraph: {
    title: 'Successfully Navigating Standards and Frameworks for Your Organization',
    description:
      'Hundreds of EA standards prescribe overlapping metamodels. Here is a practical guide to tailoring frameworks like TOGAF and ArchiMate so they actually work for your organization.',
    url: 'https://enterpriseinsight.io/blog/frameworks',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Successfully Navigating Standards and Frameworks for Your Organization',
    description:
      'Hundreds of EA standards prescribe overlapping metamodels. Here is a practical guide to tailoring frameworks like TOGAF and ArchiMate so they actually work for your organization.',
  },
  alternates: {
    canonical: 'https://enterpriseinsight.io/blog/frameworks',
  },
};

export default function FrameworksPage() {
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
              Successfully Navigating Standards and Frameworks for Your Organization
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Hundreds of EA standards prescribe overlapping metamodels — and no single one fits every organisation. Here is a practical guide to tailoring frameworks so they actually work for yours.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-slate-400">
              <span>April 23, 2026</span>
              <span>·</span>
              <span>6 min read</span>
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
                src="/pexels-enginakyurt-2283803.jpg"
                alt="Enterprise architecture standards and frameworks"
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
                <h2>A Guide to Effectively Tailoring Standards</h2>
                <p>
                  Walk into any enterprise architecture team and you will quickly encounter a familiar problem: the
                  debate about terminology. What is a &ldquo;capability&rdquo;? Is a &ldquo;function&rdquo; different from a &ldquo;service&rdquo;? Does your
                  metamodel need ArchiMate relationships, TOGAF phases, or both?
                </p>
                <p>
                  As EA researcher Graham Berrisford has documented extensively, <strong>hundreds of standards prescribe
                  overlapping metamodels for enterprise architecture</strong> — each with its own vocabulary, notation, and
                  structural assumptions. The result is not clarity; it is decision paralysis. Teams spend weeks
                  debating definitions while the architecture work stalls.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats strip */}
            <AnimatedSection delay={0.05} className="my-10">
              <div className="grid grid-cols-3 gap-4 rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6">
                {[
                  { stat: '100s', label: 'EA standards with overlapping metamodels' },
                  { stat: '1–2', label: 'Standards most organisations actually tailor and use' },
                  { stat: '2', label: 'Core tailoring approaches used by leading EA teams' },
                ].map(({ stat, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-primary-500">{stat}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* No silver bullet */}
            <AnimatedSection delay={0.08}>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>Accept That There Is No Silver Bullet</h2>
                <p>
                  The most important insight in EA framework selection is also the most counterintuitive: <strong>there is
                  no universally correct answer</strong>. What works for a global bank operating under DORA will not work
                  for a mid-market logistics company undergoing a cloud migration. What suits a heavily regulated
                  public-sector body will frustrate a product-led tech firm.
                </p>
                <p>
                  The goal is not to find the &ldquo;best&rdquo; framework. The goal is to find the framework — or combination
                  of frameworks — that fits your organisation&apos;s context, maturity, and strategic intent, and then
                  tailor it accordingly.
                </p>
              </div>
            </AnimatedSection>

            {/* Tailoring approaches header */}
            <AnimatedSection delay={0.1}>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2>How Organisations Tailor Standards</h2>
                <p>
                  In practice, most organisations settle on one or two standards as a foundation and then tailor them
                  to match their specific needs. There are two predominant approaches:
                </p>
              </div>
            </AnimatedSection>

            {/* Approach 1 */}
            <AnimatedSection delay={0.12}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-6">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Approach 1</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Turn off what you don&apos;t need
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  The simplest tailoring strategy is subtraction. Start with a comprehensive standard — TOGAF,
                  ArchiMate, or a government reference architecture — and systematically disable the viewpoints,
                  object types, and metadata fields that your organisation will never use.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  This approach reduces cognitive load for architects, accelerates onboarding for new team members,
                  and prevents the sprawl of half-populated models. The risk is under-tailoring: leaving enough of
                  the standard intact that architects still spend time navigating irrelevant constructs. The discipline
                  is to be ruthless — if your team will not use it in the next six months, remove it.
                </p>
              </div>
            </AnimatedSection>

            {/* Approach 2 */}
            <AnimatedSection delay={0.14}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-4">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">Approach 2</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  Merge standards to get the best of each
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                  More sophisticated EA teams combine elements from multiple standards into a single, coherent
                  metamodel. A common example: pair TOGAF&apos;s Architecture Development Method (ADM) — which provides
                  a powerful governance and phase structure — with ArchiMate&apos;s rich relationship model, which
                  enables precise, notation-based diagramming.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  The benefit is a metamodel precisely tuned to your organisation&apos;s needs. The challenge is the
                  upfront investment: merging standards requires careful debate about which elements to retain, how
                  to resolve naming conflicts, and how to document the resulting bespoke model so future team members
                  understand it. Done well, it becomes a durable competitive advantage. Done poorly, it produces a
                  confusing hybrid that architects quietly abandon.
                </p>
              </div>
            </AnimatedSection>

            {/* Define before you buy */}
            <AnimatedSection delay={0.16}>
              <div className="prose prose-slate dark:prose-invert max-w-none mt-8">
                <h2>Define Your Standard Before You Choose Your Tool</h2>
                <p>
                  One of the most common — and costly — mistakes in EA programme setup is selecting tooling before
                  the metamodel is defined. Most legacy EA platforms encode their own assumptions about structure,
                  relationships, and notation. Once you are inside a tool, those assumptions become constraints.
                </p>
                <p>
                  The right sequence is always: define your standard first, then find a tool that can support it —
                  not the other way around.
                </p>
              </div>
            </AnimatedSection>

            {/* Legacy tool constraint */}
            <AnimatedSection delay={0.18}>
              <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-6 mt-6">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-widest">The Constraint</span>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-2 mb-3">
                  &ldquo;You can&apos;t do that&rdquo; — escaping legacy EA tool limitations
                </h3>
                <blockquote className="border-l-2 border-primary-500/40 pl-4 text-slate-500 dark:text-slate-400 italic text-sm mb-4">
                  &ldquo;What works for one organisation won&apos;t work for another.&rdquo;
                </blockquote>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                  Legacy EA tools were built when the field had fewer standards and less diversity in organisational
                  approaches. As a result, they typically support one or two fixed metamodels and offer limited
                  ability to deviate from them. When an architect tries to implement a bespoke standard, the answer
                  is often: &ldquo;The tool doesn&apos;t support that.&rdquo;
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  This forces a damaging compromise: organisations bend their carefully considered standards to fit
                  the tool, rather than having the tool support their standard. The downstream cost — in misaligned
                  models, workarounds, and eventual platform replacement — is substantial.
                </p>
              </div>
            </AnimatedSection>

            {/* Enterprise Insight section */}
            <AnimatedSection delay={0.2}>
              <div className="prose prose-slate dark:prose-invert max-w-none mt-8">
                <h2>Tooling That Follows Your Standard — Not the Other Way Around</h2>
                <p>
                  Enterprise Insight was built specifically to address this constraint. Rather than encoding a single
                  fixed metamodel, the platform enables architects to implement <strong>virtually any metamodel setup</strong>,
                  with popular standards available as pre-configured starting points that can be modified, extended,
                  or merged without restriction.
                </p>
                <p>
                  Whether your organisation runs TOGAF, ArchiMate, a national reference architecture, or a proprietary
                  bespoke model, Enterprise Insight adapts to your standard — not the reverse. The result is faster
                  programme setup, better adoption from architects, and models that remain accurate and useful
                  as your standard evolves over time.
                </p>
              </div>
            </AnimatedSection>

            {/* TL;DR */}
            <AnimatedSection delay={0.22} className="mt-10">
              <div className="rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/8 p-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2">TL;DR</p>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  There is no single correct EA framework. Successful organisations select one or two standards,
                  tailor them aggressively to remove irrelevant constructs or merge the best of each, and define
                  their metamodel before choosing tooling. Legacy tools that force organisations to reverse this
                  sequence are a hidden source of programme failure. The right tool follows your standard — it
                  does not constrain it.
                </p>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.24} className="mt-10">
              <div className="rounded-xl bg-primary-500/5 dark:bg-primary-500/10 border border-primary-500/20 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-white mb-1">Implement your standard, not ours</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Enterprise Insight supports virtually any metamodel out of the box. Book a demo and configure your framework in a single session.</p>
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
