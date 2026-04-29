'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

const FEATURED = {
  tag: 'AI & Automation',
  tagColor: 'text-[#5de0e6]',
  title: 'Beyond OrbusInfinity: What Modern AI-Native EA Looks Like',
  excerpt: 'Enterprise architecture has a design-era problem. Most platforms were built around assumptions that made sense at the time. Here\'s what changes when you build for the present.',
  readTime: '12 min read',
  date: 'Apr 2026',
  image: '/pexels-pixabay-163056-scaled.jpg',
  href: '/blog/beyond-orbusinfinity',
};

const POSTS = [
  {
    tag: 'Enterprise Architecture',
    tagColor: 'text-primary-500',
    title: 'Why Most EA Programs Fail — And How AI Changes the Equation',
    excerpt: 'Traditional EA tooling forces architects to choose between accuracy and speed. We explore why that trade-off is now obsolete.',
    readTime: '5 min read',
    date: 'Apr 2026',
    image: '/DSCF0030-scaled.jpg',
    href: '/blog',
  },
  {
    tag: 'Stakeholder Alignment',
    tagColor: 'text-slate-300',
    title: 'The Stakeholder Problem: How to Make Architecture Legible to Everyone',
    excerpt: "Architects spend up to 40% of their time translating technical concepts. Here's how modern EA platforms eliminate that burden.",
    readTime: '4 min read',
    date: 'Feb 2026',
    image: '/pexels-enginakyurt-2283803.jpg',
    href: '/blog',
  },
];

export function BlogTeaser() {
  return (
    <section className="bg-[#060b14] border-t border-white/8">
      <Container className="py-16 md:py-24">

        {/* Section label + header row */}
        <AnimatedSection className="mb-12">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase shrink-0">From the Blog</span>
            <div className="flex-1 h-px bg-white/8" />
            <Link
              href="/blog"
              className="text-[10px] font-mono tracking-[0.16em] text-slate-500 uppercase hover:text-white transition-colors shrink-0"
            >
              View all →
            </Link>
          </div>
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Thinking About<br />Modern EA.
          </h2>
        </AnimatedSection>

        {/* Featured post — full-width horizontal card */}
        <AnimatedSection className="mb-px">
          <Link
            href={FEATURED.href}
            className="group flex flex-col md:flex-row border border-white/10 hover:bg-white/2 transition-colors duration-200 overflow-hidden"
          >
            <div className="relative md:w-2/5 h-52 md:h-auto shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
              <Image
                src={FEATURED.image}
                alt={FEATURED.title}
                fill
                className="object-cover grayscale-[30%] transition-transform duration-500 group-hover:scale-103"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <span className={`absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest ${FEATURED.tagColor} bg-[#060b14]/80 px-2 py-1`}>
                {FEATURED.tag}
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="text-[9px] font-mono tracking-[0.22em] text-slate-600 uppercase block mb-3">Featured</span>
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter leading-[0.95] text-white group-hover:text-[#5de0e6] transition-colors duration-150 mb-4">
                {FEATURED.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">{FEATURED.excerpt}</p>
              <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-slate-700">
                <span>{FEATURED.date}</span>
                <span className="w-px h-3 bg-white/10" />
                <span>{FEATURED.readTime}</span>
                <span className="w-px h-3 bg-white/10" />
                <span className="text-[#5de0e6]">Read →</span>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* Secondary cards */}
        <div className="grid md:grid-cols-2 border-l border-r border-b border-white/10">
          {POSTS.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.08}>
              <Link
                href={post.href}
                className={`group flex flex-col h-full bg-transparent hover:bg-white/2 transition-colors duration-200 ${i < POSTS.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
              >
                <div className="relative h-44 w-full shrink-0 overflow-hidden border-b border-white/8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103 grayscale-[30%]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className={`absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-widest ${post.tagColor} bg-[#060b14]/80 px-2 py-1`}>
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <h3 className="text-sm font-bold leading-snug text-white group-hover:text-primary-400 transition-colors duration-150 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-6 flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-slate-700">
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
  );
}
