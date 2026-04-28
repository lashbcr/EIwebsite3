import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Enterprise Insight',
  description: "Get in touch with the Enterprise Insight team. We'd love to hear from you.",
};

const faqs = [
  { q: 'How soon will I get a reply?', a: 'We respond to all enquiries within one business day.' },
  { q: 'Do you offer a free trial?', a: 'Yes — just mention "free trial" in your message and we\'ll set it up for you.' },
  { q: 'Can I book a product demo?', a: 'Absolutely — use the form or email us to schedule a live walkthrough.' },
  { q: 'Where is Enterprise Insight based?', a: 'We\'re headquartered in London, UK — but we\'re a distributed team and support clients globally.' },
  { q: 'Can you support my timezone?', a: 'Yes — if you can\'t find a time that works, just reach out.' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white dark:bg-[#060b14] relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-100 rounded-full bg-primary-600/10 blur-3xl" />
        </div>
        <Container>
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              Got questions? We&apos;re here to help with anything Enterprise Insight.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Two-column: info + form */}
      <section className="pb-20 bg-white dark:bg-[#060b14]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Let&apos;s Talk About Your Enterprise Architecture Needs
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Whether you&apos;re evaluating enterprise architecture tools, need help with application portfolio management, or want to request a product demo — the Enterprise Insight team is ready to help.
              </p>

              <p className="text-sm font-semibold text-primary-500 mb-3">You can reach out for:</p>
              <ul className="space-y-2 mb-8">
                {['Platform support', 'Free trial setup', 'Product demos', 'Partnering opportunities', 'Media or speaking enquiries'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm text-primary-500">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  London, UK
                </div>
                <div className="flex items-center gap-2 text-sm text-primary-500">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  hello@enterpriseinsight.io
                </div>
              </div>
            </AnimatedSection>

            {/* Right: form */}
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-slate-200 dark:border-white/8 bg-slate-50 dark:bg-white/4 p-8">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 dark:bg-[#080f1c]">
        <Container>
          <AnimatedSection className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.06}>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1">{faq.q}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{faq.a}</p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Footer links */}
      <section className="py-10 bg-white dark:bg-[#060b14] border-t border-slate-100 dark:border-white/6">
        <Container>
          <AnimatedSection className="text-sm text-slate-500 dark:text-slate-400 space-y-2 max-w-3xl mx-auto">
            <p>Want to learn more about what we offer? Visit our <a href="/platform" className="text-primary-500 hover:text-primary-400 transition-colors">platform overview</a> to see how Enterprise Insight simplifies enterprise architecture.</p>
            <p>Looking to get started right away? Try our <a href="/pricing" className="text-primary-500 hover:text-primary-400 transition-colors">free trial</a> or book a <a href="/" className="text-primary-500 hover:text-primary-400 transition-colors">product demo</a>.</p>
            <p>Need quick help? Browse common questions in our <a href="/docs" className="text-primary-500 hover:text-primary-400 transition-colors">Help Centre</a>.</p>
            <p>Curious about how teams use Enterprise Insight in the real world? Check out our <a href="/blog" className="text-primary-500 hover:text-primary-400 transition-colors">blog</a>.</p>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
