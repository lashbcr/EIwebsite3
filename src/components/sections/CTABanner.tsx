import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { BookDemoButton } from '@/components/ui/BookDemoButton';

export function CTABanner() {
  return (
    <section id="demo" className="py-24 md:py-32 bg-slate-50 dark:bg-[#080f1c] relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 rounded-full bg-primary-600/15 dark:bg-primary-600/20 blur-3xl" />
        <div className="absolute top-1/4 left-1/3 w-75 h-75 rounded-full bg-secondary-600/10 dark:bg-secondary-600/10 blur-3xl" />
      </div>

      <Container>
        <AnimatedSection className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/5 dark:bg-primary-500/10 px-4 py-1.5 text-xs font-medium text-primary-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            Get started today
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Ready to transform your
            <br className="hidden sm:block" />
            {' '}architecture practice?
          </h2>
          <p className="mt-5 text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Join leading EA teams using Enterprise Insight to move faster, communicate better, and deliver real business value.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <BookDemoButton size="lg">Book a Free Demo</BookDemoButton>
            <Button href="#features" size="lg" variant="outline">
              Explore the platform →
            </Button>
          </div>
          <p className="mt-6 text-xs text-slate-400 dark:text-slate-600">
            No commitment · Personalised walkthrough · Live Q&amp;A included
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
