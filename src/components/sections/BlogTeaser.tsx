'use client';

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
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
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
            <div className="relative md:w-2/5 h-52 md:h-auto shrink-0 overflow-hidden border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #060b14 0%, #0d1829 100%)' }}>
              <svg viewBox="0 0 280 160" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} xmlns="http://www.w3.org/2000/svg">
                {/* Grid dots */}
                <pattern id="ftDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.8" fill="#1e2a40" />
                </pattern>
                <rect width="280" height="160" fill="url(#ftDots)" />
                {/* Architecture nodes */}
                <rect x="20" y="30" width="72" height="32" rx="3" fill="#0f1e1a" stroke="#0F6E56" strokeWidth="1"/>
                <text x="56" y="50" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#5DCAA5">APPLICATION</text>
                <rect x="104" y="64" width="72" height="32" rx="3" fill="#1a1030" stroke="#534AB7" strokeWidth="1"/>
                <text x="140" y="84" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#AFA9EC">BUSINESS</text>
                <rect x="188" y="30" width="72" height="32" rx="3" fill="#1a1508" stroke="#854F0B" strokeWidth="1"/>
                <text x="224" y="50" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#EF9F27">TECHNOLOGY</text>
                <rect x="104" y="100" width="72" height="32" rx="3" fill="#1a0f0f" stroke="#A32D2D" strokeWidth="1"/>
                <text x="140" y="120" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#F09595">DATA LAYER</text>
                {/* Arrows */}
                <line x1="92" y1="46" x2="104" y2="72" stroke="#EC2C44" strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
                <line x1="176" y1="46" x2="176" y2="72" stroke="#EC2C44" strokeWidth="1" strokeDasharray="3 2" opacity="0.6"/>
                <line x1="140" y1="96" x2="140" y2="100" stroke="#EC2C44" strokeWidth="1" opacity="0.6"/>
                {/* Red glow */}
                <radialGradient id="ftGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#EC2C44" stopOpacity="0.1"/>
                  <stop offset="100%" stopColor="#EC2C44" stopOpacity="0"/>
                </radialGradient>
                <rect width="280" height="160" fill="url(#ftGlow)"/>
              </svg>
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
                <div className="relative h-44 w-full shrink-0 overflow-hidden border-b border-white/8 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #060b14 0%, #0e1520 100%)' }}>
                  {i === 0 ? (
                    <svg viewBox="0 0 240 140" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} xmlns="http://www.w3.org/2000/svg">
                      <pattern id="p0Dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="0.7" fill="#1a2235"/>
                      </pattern>
                      <rect width="240" height="140" fill="url(#p0Dots)"/>
                      {[0,1,2,3,4,5,6].map((j) => (
                        <rect key={j} x={20 + j*30} y={100 - j*10} width="18" height={10 + j*10} rx="2" fill="#EC2C44" opacity={0.15 + j*0.08}/>
                      ))}
                      <line x1="20" y1="100" x2="220" y2="100" stroke="#1e2a40" strokeWidth="1"/>
                      <text x="120" y="30" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#EC2C44" opacity="0.7">EA PROGRAM FAILURE RATE</text>
                      <text x="120" y="44" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#5a6a80">BEFORE AI-NATIVE PLATFORMS</text>
                      <radialGradient id="p0Glow" cx="50%" cy="80%" r="50%">
                        <stop offset="0%" stopColor="#EC2C44" stopOpacity="0.12"/>
                        <stop offset="100%" stopColor="#EC2C44" stopOpacity="0"/>
                      </radialGradient>
                      <rect width="240" height="140" fill="url(#p0Glow)"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 240 140" width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} xmlns="http://www.w3.org/2000/svg">
                      <pattern id="p1Dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="0.7" fill="#1a2235"/>
                      </pattern>
                      <rect width="240" height="140" fill="url(#p1Dots)"/>
                      {/* Stakeholder network */}
                      <circle cx="120" cy="70" r="14" fill="#0d1422" stroke="#EC2C44" strokeWidth="1.2"/>
                      <text x="120" y="74" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#EC2C44">EA TEAM</text>
                      {[
                        [50, 35, '#534AB7', '#AFA9EC', 'CTO'],
                        [190, 35, '#0F6E56', '#5DCAA5', 'OPS'],
                        [40, 100, '#854F0B', '#EF9F27', 'FINANCE'],
                        [200, 100, '#A32D2D', '#F09595', 'RISK'],
                        [120, 18, '#1e2a40', '#8890a8', 'BOARD'],
                      ].map(([cx, cy, stroke, text, label]) => (
                        <g key={label as string}>
                          <line x1="120" y1="70" x2={cx as number} y2={cy as number} stroke="#1e2a40" strokeWidth="1" strokeDasharray="3 2"/>
                          <circle cx={cx as number} cy={cy as number} r="10" fill="#0d1422" stroke={stroke as string} strokeWidth="1"/>
                          <text x={cx as number} y={(cy as number)+3} textAnchor="middle" fontFamily="monospace" fontSize="5" fill={text as string}>{label}</text>
                        </g>
                      ))}
                    </svg>
                  )}
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
