'use client';

import Image from 'next/image';
import Link from 'next/link';
import { JSX, useRef, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { BookDemoDialog } from '@/components/ui/BookDemoDialog';

type NavLink = { label: string; href: string; description: string; icon: JSX.Element };
type NavColumn = { heading: string; links: NavLink[] };
type NavItem =
  | { label: string; href: string; columns?: never }
  | { label: string; href?: never; columns: NavColumn[] };

const Icons = {
  grid: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  building: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V7l9-4 9 4v14" /><path d="M9 21v-6h6v6" /><path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
    </svg>
  ),
  briefcase: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><line x1="12" y1="12" x2="12" y2="12.01" />
    </svg>
  ),
  fileText: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
  calendar: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  book: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
};

const navItems: NavItem[] = [
  { label: 'AI Features', href: '/ai' },
  {
    label: 'Case Studies',
    columns: [
      {
        heading: 'CASE STUDIES',
        links: [
          {
            label: 'All Case Studies',
            href: '/case-studies',
            description: 'Browse every customer story',
            icon: Icons.grid,
          },
          {
            label: 'Construction — Hercules PLS',
            href: '/case-studies/construction',
            description: '40% app rationalisation in 6 months',
            icon: Icons.building,
          },
          {
            label: 'Consulting — BDAT',
            href: '/case-studies/consulting',
            description: '3× faster EA delivery for clients',
            icon: Icons.briefcase,
          },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    columns: [
      {
        heading: 'CONTENT',
        links: [
          {
            label: 'Blog',
            href: '/blog',
            description: 'Latest articles and insights',
            icon: Icons.fileText,
          },
          {
            label: 'Events & Webinars',
            href: '/events',
            description: 'Live sessions and recordings',
            icon: Icons.calendar,
          },
          {
            label: 'Guides & Whitepapers',
            href: '/resources',
            description: 'In-depth EA frameworks and guides',
            icon: Icons.book,
          },
        ],
      },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function NavIcon({ children }: { children: JSX.Element }) {
  return (
    <div className="w-9 h-9 shrink-0 rounded-lg bg-slate-200/70 dark:bg-white/12 border border-slate-300/50 dark:border-white/12 flex items-center justify-center text-slate-700 dark:text-slate-200">
      {children}
    </div>
  );
}

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [demoOpen, setDemoOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(label);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActive(null), 120);
  }

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div className="relative w-full max-w-4xl">

        {/* ── Pill bar ── */}
        <header className="rounded-full border border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-[#060b14]/70 backdrop-blur-xl backdrop-saturate-150 shadow-lg shadow-black/5 dark:shadow-black/20">
          <nav className="flex h-13 items-center justify-between gap-4 px-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image src="/logo-mark.svg" alt="" width={28} height={28} priority />
              <span className="font-semibold text-slate-900 dark:text-white text-sm tracking-tight">
                Enterprise Insight
              </span>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-0.5">
              {navItems.map((item) =>
                item.columns ? (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-1.5 text-sm rounded-full transition-all ${
                        active === item.label
                          ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-white/8'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/6'
                      }`}
                    >
                      {item.label}
                      <Chevron open={active === item.label} />
                    </button>

                    {active === item.label && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                        onMouseEnter={() => openDropdown(item.label)}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-linear-to-br from-white via-white to-slate-50/80 dark:from-[#0e1628] dark:via-[#0c1422] dark:to-[#080e1a] shadow-2xl shadow-black/12 dark:shadow-black/50 p-3 flex gap-6 min-w-max">
                          {item.columns.map((col) => (
                            <div key={col.heading} className="min-w-55">
                              <p className="text-[10px] font-semibold tracking-widest text-slate-400 dark:text-slate-500 mb-3 px-3 pt-1">
                                {col.heading}
                              </p>
                              <ul className="flex flex-col gap-1">
                                {col.links.map((link) => (
                                  <li key={link.label}>
                                    <Link
                                      href={link.href}
                                      className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-100/80 dark:hover:bg-white/5 transition-all"
                                      onClick={() => setActive(null)}
                                    >
                                      <NavIcon>{link.icon}</NavIcon>
                                      <div>
                                        <p className="text-sm font-medium text-slate-800 dark:text-slate-100 group-hover:text-slate-900 dark:group-hover:text-white whitespace-nowrap leading-snug">
                                          {link.label}
                                        </p>
                                        <p className="text-xs text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 whitespace-nowrap leading-snug mt-0.5">
                                          {link.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-white/6 transition-all block"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="outline" href="/login" className="hidden md:inline-flex">
                Login
              </Button>
              <Button variant="primary" className="hidden md:inline-flex shadow-[0_4px_20px_rgba(236,44,68,0.45)]" onClick={() => setDemoOpen(true)}>
                Book a Demo
              </Button>
              {/* Mobile toggle */}
              <button
                className="md:hidden w-8 h-8 flex items-center justify-center rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/6 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </header>

        {/* ── Mobile dropdown ── */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-[#060b14]/80 backdrop-blur-xl backdrop-saturate-150 shadow-xl shadow-black/10 dark:shadow-black/30 overflow-hidden">
            <div className="px-3 py-3 flex flex-col gap-0.5">
              {navItems.map((item) =>
                item.columns ? (
                  <div key={item.label}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/6 transition-all"
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <Chevron open={mobileExpanded === item.label} />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="mt-1 mb-1 pl-2 flex flex-col gap-0.5">
                        {item.columns.map((col) => (
                          <div key={col.heading}>
                            <p className="text-[10px] font-semibold tracking-widest text-slate-400 dark:text-slate-500 px-3 mb-1 mt-2">
                              {col.heading}
                            </p>
                            {col.links.map((link) => (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/6 transition-all"
                                onClick={() => setMobileOpen(false)}
                              >
                                <div className="w-8 h-8 shrink-0 rounded-lg bg-slate-100 dark:bg-white/8 border border-slate-200/60 dark:border-white/8 flex items-center justify-center text-slate-400 dark:text-slate-500">
                                  {link.icon}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{link.label}</p>
                                  <p className="text-xs text-slate-400 dark:text-slate-500">{link.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-white/6 transition-all block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
            <div className="px-3 pb-3 flex flex-col gap-2">
              <Button variant="outline" size="sm" href="/login" className="w-full" onClick={() => setMobileOpen(false)}>
                Login
              </Button>
              <Button size="sm" className="w-full" onClick={() => { setMobileOpen(false); setDemoOpen(true); }}>
                Book a Demo
              </Button>
            </div>
          </div>
        )}

      </div>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
