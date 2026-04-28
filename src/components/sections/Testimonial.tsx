import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export function Testimonial() {
  return (
    <Section className="bg-white dark:bg-[#060b14]">
      <Container>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/3 p-10 md:p-14 text-center relative overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 rounded-full bg-primary-500/5 blur-3xl" />
              </div>

              <div className="text-4xl text-primary-400/40 dark:text-primary-500/30 font-serif leading-none mb-6 select-none">&ldquo;</div>

              <blockquote className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 leading-relaxed">
                Enterprise Insight dramatically reduced the time our architects spent on manual diagramming — giving us more time to focus on strategy and real transformation outcomes.
              </blockquote>

              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-500/15 border border-primary-500/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-500">H</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Enterprise Architecture Lead</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">Hercules PLC</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
