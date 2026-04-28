'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const points = [
  'No more fighting with your EA software. EI is easy to learn and use, with automations to get rid of manual redrawing and filling out fields.',
  "Don't be ignored. Use EI to quickly and easily share customizable architecture views tailored to your audience.",
  'No secrets, no hidden costs. Get access to EI as an individual, or as a team, in less than a week from your request.',
];

export function VideoPromo() {
  return (
    <Section id="why-ei" className="bg-slate-50 dark:bg-[#080f1c]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/8 shadow-xl shadow-slate-900/5 dark:shadow-black/20">
              <video
                src="https://enterpriseinsight.io/wp-content/uploads/2023/09/complete-export_1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto block"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-snug text-slate-900 dark:text-white">
              No to laborious enterprise architecture software.{' '}
              <span className="text-primary-500">
                Yes to productivity and executive buy-in for your ideas.
              </span>
            </h2>

            <ul className="space-y-5">
              {points.map((point) => (
                <li key={point} className="flex gap-4">
                  <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-primary-500/15 text-primary-500 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </Container>
    </Section>
  );
}
