'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { BookDemoDialog } from '@/components/ui/BookDemoDialog';

export default function LoginPage() {
  const [domain, setDomain] = useState('');
  const [demoOpen, setDemoOpen] = useState(false);

  const previewUrl = domain
    ? `https://${domain}.enterpriseinsight.io`
    : null;

  function handleContinue() {
    // if (domain) {
    //   window.location.href = `https://${domain}.enterpriseinsight.io`;
    // }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-[#060b14]">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-10">
          <Image src="/logo-mark.svg" alt="" width={32} height={32} priority />
          <span className="font-semibold text-slate-900 dark:text-white text-base tracking-tight">
            Enterprise Insight
          </span>
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-[#0c1422] shadow-xl shadow-black/5 dark:shadow-black/30 p-8">
          <h1 className="text-xl font-semibold text-slate-900 dark:text-white mb-1.5">
            Sign in
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-7 leading-relaxed">
            To go to your company&apos;s login page, enter the custom domain name.
          </p>

          <div className="flex flex-col gap-1.5 mb-2">
            <label
              htmlFor="domain"
              className="text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Your Custom Domain
            </label>
            <div className="relative">
              <input
                id="domain"
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value.trim().toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                onKeyDown={(e) => e.key === 'Enter' && handleContinue()}
                placeholder="domain"
                autoComplete="off"
                autoFocus
                className="w-full h-10 rounded-xl border border-slate-200 dark:border-white/12 bg-slate-50 dark:bg-white/5 px-3.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-primary-500 dark:focus:border-primary-500 focus:ring-3 focus:ring-primary-500/15 transition-all"
              />
            </div>

            {/* Live URL preview */}
            <div className="h-5 mt-0.5">
              {domain ? (
                <p className="text-xs text-slate-400 dark:text-slate-500 font-mono truncate">
                  {previewUrl}
                </p>
              ) : (
                <p className="text-xs text-slate-300 dark:text-slate-600 font-mono truncate">
                  https://domain.enterpriseinsight.io
                </p>
              )}
            </div>
          </div>

          <Button
            variant="primary"
            className="w-full mt-5 h-10 shadow-[0_4px_20px_rgba(236,44,68,0.35)]"
            onClick={handleContinue}
            disabled={!domain}
          >
            Continue
          </Button>
        </div>

        <p className="text-center text-xs text-slate-400 dark:text-slate-600 mt-6">
          Don&apos;t have an account?{' '}
          <button
            onClick={() => setDemoOpen(true)}
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white underline underline-offset-2 transition-colors"
          >
            Book a Demo
          </button>
        </p>
      </div>
      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
