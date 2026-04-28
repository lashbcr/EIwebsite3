import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Cookie Policy — Enterprise Insight',
  description: 'How Enterprise Insight uses cookies and how you can control them.',
};

const cookieTypes = [
  {
    name: 'Necessary cookies',
    description:
      'These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website or make use of online booking forms.',
  },
  {
    name: 'Google Analytics',
    description:
      'A web analytics service provided by Google. These cookies allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works and is structured.',
  },
  {
    name: 'Functionality cookies',
    description:
      'These are used to recognise you when you return to our website. This enables us to personalise our content for you and remember your preferences.',
  },
  {
    name: 'Third-party cookies',
    description:
      'Some third-party software (for example, Twitter and YouTube) utilises its own cookies over which we have little or no control. You can find out about their use of cookies by visiting the third party’s website.',
  },
];

const sections = [
  {
    title: 'What are cookies?',
    content: (
      <p>
        A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It
        enables the website to remember your actions and preferences (such as login, language, font size and other
        display preferences) over a period of time, so you don&apos;t have to keep re-entering them whenever you come
        back to the site or browse from one page to another.
      </p>
    ),
  },
  {
    title: 'How do we use cookies?',
    content: (
      <>
        <p className="mb-5">We use the following cookies:</p>
        <div className="space-y-4">
          {cookieTypes.map((ct) => (
            <div key={ct.name} className="rounded-xl border border-slate-100 dark:border-white/6 bg-slate-50 dark:bg-white/3 px-5 py-4">
              <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{ct.name}</p>
              <p>{ct.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-5">
          Enabling some of these cookies is not strictly necessary for the website to work but it will provide you with
          a better browsing experience. You can delete or block these cookies, but if you do that some features of this
          site may not work as intended.
        </p>
        <p className="mt-3">
          The cookie-related information is not used to identify you personally. These cookies are not used for any
          purpose other than those described here.
        </p>
      </>
    ),
  },
  {
    title: 'How to control cookies',
    content: (
      <>
        <p>
          You can control and/or delete cookies as you wish &mdash; for details, see{' '}
          <a
            href="https://www.aboutcookies.org"
            className="text-primary-500 hover:text-primary-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutcookies.org
          </a>
          . You can delete all cookies that are already on your computer and you can set most browsers to prevent them
          from being placed. If you do this, however, you may have to manually adjust some preferences every time you
          visit a site and some services and functionalities may not work.
        </p>
        <p className="mt-3">
          This site uses cookies &mdash; small text files that are placed on your machine to help the site provide a
          better user experience. In general, cookies are used to retain user preferences, store information for things
          like shopping baskets, and provide anonymised tracking data to third party applications like Google Analytics.
          As a rule, cookies will make your browsing experience better. However, you may prefer to disable cookies on
          this site and on others. The most effective way to do this is to disable cookies in your browser. We suggest
          consulting the Help section of your browser or taking a look at the{' '}
          <a
            href="https://www.aboutcookies.org"
            className="text-primary-500 hover:text-primary-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Cookies
          </a>{' '}
          website which offers guidance for all modern browsers.
        </p>
      </>
    ),
  },
];

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="mt-4 text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
              To make this site work properly, we sometimes place small data files called cookies on your device. Most
              big websites do this too.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Content */}
      <section className="pb-24 bg-white dark:bg-[#060b14]">
        <Container>
          <div className="max-w-2xl mx-auto">
            {sections.map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 0.04}>
                <div className="py-8 border-b border-slate-100 dark:border-white/6 last:border-0">
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    {section.title}
                  </h2>
                  <div className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer note */}
      <section className="py-10 bg-slate-50 dark:bg-[#080f1c] border-t border-slate-100 dark:border-white/6">
        <Container>
          <AnimatedSection className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            <p>
              Questions about how we use cookies? Reach out at{' '}
              <a href="mailto:hello@enterpriseinsight.io" className="text-primary-500 hover:text-primary-400 transition-colors">
                hello@enterpriseinsight.io
              </a>
              .
            </p>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
