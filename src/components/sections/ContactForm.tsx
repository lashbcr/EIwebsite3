'use client';

import { useState } from 'react';

type Field = 'name' | 'email' | 'message';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const INITIAL: FormState = { name: '', email: '', message: '' };

const inputCls =
  'w-full rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition';

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name as Field]: e.target.value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/10 border border-primary-500/20">
          <svg className="w-7 h-7 text-primary-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Message received!</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
          Thanks for reaching out. We&apos;ll get back to you within one business day.
        </p>
        <button
          onClick={() => { setForm(INITIAL); setSubmitted(false); }}
          className="mt-2 text-xs text-primary-500 hover:text-primary-400 transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <input
        id="name"
        name="name"
        type="text"
        required
        placeholder="Full Name"
        value={form.name}
        onChange={handle}
        className={inputCls}
      />
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="Email Address"
        value={form.email}
        onChange={handle}
        className={inputCls}
      />
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        placeholder="Your Message"
        value={form.message}
        onChange={handle}
        className={`${inputCls} resize-none`}
      />
      <button
        type="submit"
        className="w-full rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 text-sm transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
