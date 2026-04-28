import { Container } from '@/components/ui/Container';
import { NewsletterForm } from './NewsletterForm';

const footerLinks = {
  Products: [
    { label: 'Enterprise Insight', href: '#products' },
    { label: 'Enterprise Publisher', href: '#products' },
    { label: 'KeystoneEA™', href: '#features' },
  ],
  Solutions: [
    { label: 'Enterprise Architecture', href: '#use-cases' },
    { label: 'Application Portfolio', href: '#use-cases' },
    { label: 'Business Process', href: '#use-cases' },
    { label: 'Business Capability', href: '#use-cases' },
  ],
  Resources: [
    { label: 'Documentation', href: '/resources' },
    { label: 'Blog', href: '/blog' },
    { label: 'White Papers', href: '/resources' },
    { label: 'Events & Webinars', href: '/events' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#demo' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#040810] dark:bg-[#040810] border-t border-white/6 text-slate-500">
      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img src="/logo-white.svg" alt="Enterprise Insight" className="h-6 w-auto" />
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              The EA platform built for speed, clarity, and organisation-wide communication.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-slate-300 mb-4 uppercase tracking-wider">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-slate-600 hover:text-slate-300 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-slate-700">© 2026 Enterprise Insight. All rights reserved.</p>
          <NewsletterForm />
        </div>
      </Container>
    </footer>
  );
}
