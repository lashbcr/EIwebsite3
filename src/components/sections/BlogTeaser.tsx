'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

const posts = [
  {
    tag: 'Enterprise Architecture',
    tagColor: 'text-primary-500',
    title: 'Why Most EA Programs Fail — And How AI Changes the Equation',
    excerpt: 'Traditional EA tooling forces architects to choose between accuracy and speed. We explore why that trade-off is now obsolete.',
    readTime: '5 min read',
    date: 'Apr 2026',
    image: '/DSCF0030-scaled.jpg',
  },
  {
    tag: 'AI & Automation',
    tagColor: 'text-[#5de0e6]',
    title: 'From TOGAF to Real-Time: Automating Architecture Diagrams at Scale',
    excerpt: 'A deep dive into how Enterprise Insight generates ArchiMate-compliant diagrams directly from your data — no manual drawing required.',
    readTime: '7 min read',
    date: 'Mar 2026',
    image: '/pexels-pixabay-163056-scaled.jpg',
  },
  {
    tag: 'Stakeholder Alignment',
    tagColor: 'text-slate-300',
    title: 'The Stakeholder Problem: How to Make Architecture Legible to Everyone',
    excerpt: "Architects spend up to 40% of their time translating technical concepts. Here's how modern EA platforms eliminate that burden.",
    readTime: '4 min read',
    date: 'Feb 2026',
    image: '/pexels-enginakyurt-2283803.jpg',
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
            <a
              href="/blog"
              className="text-[10px] font-mono tracking-[0.16em] text-slate-500 uppercase hover:text-white transition-colors shrink-0"
            >
              View all →
            </a>
          </div>
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Thinking About<br />Modern EA.
          </h2>
        </AnimatedSection>

        {/* Cards — hard borders, no radius, no shadow */}
        <div className="grid md:grid-cols-3 border border-white/10">
          {posts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.08}>
              <a
                href="/blog"
                className={`group flex flex-col h-full bg-transparent hover:bg-white/2 transition-colors duration-200 ${i < posts.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''}`}
              >
                {/* Image — no radius */}
                <div className="relative h-48 w-full shrink-0 overflow-hidden border-b border-white/8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-103 grayscale-[30%]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Tag overlay */}
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
              </a>
            </AnimatedSection>
          ))}
        </div>

      </Container>
    </section>
  );
}
