import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog — Enterprise Insight',
  description: 'Insights, guides, and news from the Enterprise Insight team and the broader EA community.',
};

const posts = [
  {
    title: 'How Hercules PLC Achieves Strategic Transformation During Rapid Growth and Complex Change',
    description: 'Hercules PLC is a leading construction labour supplier growing at pace: they`ve acquired three companies in 2024 alone. How do they deliver their competitive',
    date: 'April 10, 2026',
    readTime: '8 min read',
    href: '/blog/hercules',
    image: '/DSCF0030-scaled.jpg',
  },
  {
    title: 'Why Can`t Financial Institutions Ignore TOGAF Anymore?',
    description: 'Banks and insurance companies operate in increasingly complex technological and regulatory environments. Gabor Sulok, CEO of Bdat Solutions with 20+ years in the Enterprise Architecture',
    date: 'April 23, 2026',
    readTime: '7 min read',
    href: '/blog/togaf',
    image: '/pexels-pixabay-163056-scaled.jpg',
  },
  {
    title: 'Successfully Navigating Standards and Frameworks for Your Organization',
    description: 'Hundreds of EA standards prescribe overlapping metamodels — and no single one fits every organisation. A practical guide to tailoring TOGAF, ArchiMate, and beyond.',
    date: 'April 23, 2026',
    readTime: '6 min read',
    href: '/blog/frameworks',
    image: '/pexels-enginakyurt-2283803.jpg',
  }
];

export default function BlogPage() {
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
              Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Insights for modern EA teams
            </h1>
            <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Practical guides, in-depth comparisons, and thinking on the future of enterprise architecture.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Posts */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#080f1c]">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <AnimatedSection key={post.href} delay={i * 0.06}>
                <Link href={post.href} className="block rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 h-full hover:border-primary-500/30 transition-colors group overflow-hidden">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      loading={i === 0 ? 'eager' : 'lazy'}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-semibold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-primary-500 transition-colors">{post.title}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{post.description}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3} className="mt-12 text-center">
            <p className="text-slate-400 dark:text-slate-600 text-sm">[More posts to be added]</p>
          </AnimatedSection>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
