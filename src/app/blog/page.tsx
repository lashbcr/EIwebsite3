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
    title: 'Beyond OrbusInfinity: What Modern AI-Native EA Looks Like',
    description: 'Enterprise architecture has a design-era problem. Most EA platforms were built around assumptions that made sense at the time — diagrams in desktop files, reporting via export, architecture moving slower than the business. Here\'s what changes when you build for the present.',
    date: 'April 29, 2026',
    readTime: '12 min read',
    href: '/blog/beyond-orbusinfinity',
    image: '/pexels-pixabay-163056-scaled.jpg',
    tag: 'AI & Automation',
    featured: true,
  },
  {
    title: 'How Hercules PLC Achieves Strategic Transformation During Rapid Growth and Complex Change',
    description: 'Hercules PLC is a leading construction labour supplier growing at pace: they\'ve acquired three companies in 2024 alone. How do they deliver their competitive advantage through enterprise architecture?',
    date: 'April 10, 2026',
    readTime: '8 min read',
    href: '/blog/hercules',
    image: '/DSCF0030-scaled.jpg',
    tag: 'Case Study',
  },
  {
    title: 'Why Can\'t Financial Institutions Ignore TOGAF Anymore?',
    description: 'Banks and insurance companies operate in increasingly complex technological and regulatory environments. TOGAF has quietly become a compliance requirement, not just a best practice.',
    date: 'April 23, 2026',
    readTime: '7 min read',
    href: '/blog/togaf',
    image: '/pexels-pixabay-163056-scaled.jpg',
    tag: 'Enterprise Architecture',
  },
  {
    title: 'Successfully Navigating Standards and Frameworks for Your Organization',
    description: 'Hundreds of EA standards prescribe overlapping metamodels — and no single one fits every organisation. A practical guide to tailoring TOGAF, ArchiMate, and beyond.',
    date: 'April 23, 2026',
    readTime: '6 min read',
    href: '/blog/frameworks',
    image: '/pexels-enginakyurt-2283803.jpg',
    tag: 'Frameworks',
  },
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
          {/* Featured post */}
          <AnimatedSection className="mb-6">
            <Link
              href={posts[0].href}
              className="group flex flex-col md:flex-row border border-white/10 bg-white/2 hover:bg-white/4 transition-colors duration-200 overflow-hidden"
            >
              <div className="relative md:w-2/5 h-56 md:h-auto shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
                <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  loading="eager"
                  className="object-cover grayscale-[30%] transition-transform duration-500 group-hover:scale-103"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest text-[#5de0e6] bg-[#060b14]/80 px-2 py-1">
                  {posts[0].tag}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <span className="text-[9px] font-mono tracking-[0.22em] text-slate-600 uppercase mb-3">Featured</span>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-[0.95] text-white mb-4 group-hover:text-[#5de0e6] transition-colors duration-150">
                  {posts[0].title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{posts[0].description}</p>
                <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-slate-700">
                  <span>{posts[0].date}</span>
                  <span className="w-px h-3 bg-white/10" />
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Remaining posts */}
          <div className="grid md:grid-cols-3 border border-white/10">
            {posts.slice(1).map((post, i) => (
              <AnimatedSection key={post.href} delay={i * 0.06}>
                <Link
                  href={post.href}
                  className={`group flex flex-col h-full bg-transparent hover:bg-white/2 transition-colors duration-200 ${i < posts.length - 2 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
                >
                  <div className="relative h-44 w-full shrink-0 overflow-hidden border-b border-white/8">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      loading="lazy"
                      className="object-cover grayscale-[30%] transition-transform duration-500 group-hover:scale-103"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 text-[9px] font-mono font-bold uppercase tracking-widest text-slate-300 bg-[#060b14]/80 px-2 py-0.5">
                      {post.tag}
                    </span>
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h2 className="text-sm font-bold leading-snug text-white group-hover:text-primary-400 transition-colors duration-150 mb-3">{post.title}</h2>
                    <p className="text-xs text-slate-500 leading-relaxed flex-1">{post.description}</p>
                    <div className="mt-5 flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-slate-700">
                      <span>{post.date}</span>
                      <span className="w-px h-3 bg-white/10" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
