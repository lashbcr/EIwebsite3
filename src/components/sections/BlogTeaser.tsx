'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const posts = [
  {
    tag: 'Enterprise Architecture',
    tagColor: 'text-primary-500 bg-primary-500/10 dark:bg-primary-500/10',
    title: 'Why Most EA Programs Fail — And How AI Changes the Equation',
    excerpt:
      'Traditional EA tooling forces architects to choose between accuracy and speed. We explore why that trade-off is now obsolete.',
    readTime: '5 min read',
    date: 'Apr 2026',
    accent: 'group-hover:border-primary-500/40',
    dot: 'bg-primary-500',
    image: '/DSCF0030-scaled.jpg',
  },
  {
    tag: 'AI & Automation',
    tagColor: 'text-secondary-500 bg-secondary-500/10 dark:bg-secondary-500/10',
    title: 'From TOGAF to Real-Time: Automating Architecture Diagrams at Scale',
    excerpt:
      'A deep dive into how Enterprise Insight generates ArchiMate-compliant diagrams directly from your data — no manual drawing required.',
    readTime: '7 min read',
    date: 'Mar 2026',
    accent: 'group-hover:border-secondary-500/40',
    dot: 'bg-secondary-500',
    image: '/pexels-pixabay-163056-scaled.jpg',
  },
  {
    tag: 'Stakeholder Alignment',
    tagColor: 'text-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/10',
    title: 'The Stakeholder Problem: How to Make Architecture Legible to Everyone',
    excerpt:
      'Architects spend up to 40% of their time translating technical concepts. Here\'s how modern EA platforms eliminate that burden.',
    readTime: '4 min read',
    date: 'Feb 2026',
    accent: 'group-hover:border-cyan-500/40',
    dot: 'bg-cyan-500',
    image: '/pexels-enginakyurt-2283803.jpg',
  },
];

export function BlogTeaser() {
  return (
    <Section className="bg-white dark:bg-[#060c18]">
      <Container>
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/5 dark:bg-primary-500/10 px-4 py-1.5 text-xs font-medium text-primary-500 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              From the blog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Thinking about modern EA
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-lg">
              Practical insights on enterprise architecture, AI tooling, and the future of how organisations design change.
            </p>
          </div>
          <Button href="/blog" variant="outline" className="shrink-0">
            View all posts →
          </Button>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.1}>
              <a
                href="/blog"
                className={`group flex flex-col h-full rounded-2xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${post.accent}`}
              >
                <div className="relative h-44 w-full shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="flex flex-col flex-1 p-7">
                  <span className={`self-start text-xs font-medium px-2.5 py-1 rounded-full ${post.tagColor} mb-5`}>
                    {post.tag}
                  </span>

                  <h3 className="text-base font-semibold leading-snug text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors duration-200 mb-3">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs text-slate-400 dark:text-slate-600">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${post.dot}`} />
                    <span>{post.date}</span>
                    <span className="mx-1">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </Section>
  );
}
