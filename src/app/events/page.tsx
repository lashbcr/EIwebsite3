import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CTABanner } from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Events — Enterprise Insight',
  description: 'Join Enterprise Insight at conferences, webinars, and community meetups for enterprise architects.',
};

const upcomingEvents = [
  {
    type: 'Webinar',
    title: 'Scaling EA in a Multi-Cloud World',
    date: 'May 15, 2026',
    time: '11:00 AM BST',
    description: 'Learn how leading organisations manage architecture complexity across hybrid and multi-cloud environments.',
    cta: 'Register Free',
  },
  {
    type: 'Conference',
    title: 'EI Summit 2026',
    date: 'June 10-11, 2026',
    time: 'London, UK',
    description: 'Our annual gathering of enterprise architects, technology leaders, and innovation teams. Two days of keynotes, workshops, and networking.',
    cta: 'Get Tickets',
  },
  {
    type: 'Workshop',
    title: 'Business Capability Mapping Masterclass',
    date: 'June 24, 2026',
    time: '2:00 PM BST',
    description: 'A hands-on workshop covering practical techniques for building and maintaining business capability models.',
    cta: 'Register Free',
  },
];

export default function EventsPage() {
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
              Events
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Learn, connect, and grow together
            </h1>
            <p className="mt-6 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              From webinars to our annual summit, Enterprise Insight brings the EA community together throughout the year.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Upcoming events */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-[#080f1c]">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-2">Upcoming</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">What's on</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {upcomingEvents.map((event, i) => (
              <AnimatedSection key={event.title} delay={i * 0.08}>
                <div className="rounded-xl border border-slate-200 dark:border-white/8 bg-white dark:bg-white/3 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary-500 bg-primary-500/10 rounded-full px-2.5 py-0.5">{event.type}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{event.title}</h3>
                    <p className="text-sm text-slate-400 mb-3">{event.date} · {event.time}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{event.description}</p>
                  </div>
                  <div className="shrink-0">
                    <Button size="md" variant="outline">{event.cta}</Button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Past events placeholder */}
      <section className="py-20 md:py-28 bg-white dark:bg-[#060b14]">
        <Container>
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-4">On demand</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Missed an event?</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8">All our webinars and conference sessions are recorded and available to watch on demand.</p>
            <p className="text-slate-400 dark:text-slate-600 text-sm">[Past event recordings to be added]</p>
          </AnimatedSection>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
