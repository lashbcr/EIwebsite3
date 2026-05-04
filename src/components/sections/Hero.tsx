'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookDemoDialog } from '@/components/ui/BookDemoDialog';
import { Container } from '@/components/ui/Container';

// ── Sample prompts that auto-type in the AI input ─────────────────────────────

const SAMPLE_PROMPTS = [
  'Map our cloud estate to ArchiMate 3.1…',
  'Find redundant applications in our portfolio…',
  'Generate a change manifest for Q3 migrations…',
  'Show me GDPR compliance gaps across data flows…',
  'Audit our TOGAF Phase E artefacts…',
];

const SUGGESTED_CHIPS = [
  'Map cloud to ArchiMate',
  'Find redundancies',
  'GDPR compliance gaps',
  'Generate change manifest',
  'TOGAF audit',
];

// ── Hook: type-then-erase animation cycling through SAMPLE_PROMPTS ─────────────

function useTypingPlaceholder(prompts: string[]) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'holding' | 'erasing'>('typing');

  useEffect(() => {
    const target = prompts[idx];

    if (phase === 'typing') {
      if (text.length < target.length) {
        const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 32);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('holding'), 1700);
      return () => clearTimeout(t);
    }

    if (phase === 'holding') {
      const t = setTimeout(() => setPhase('erasing'), 600);
      return () => clearTimeout(t);
    }

    // erasing
    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 16);
      return () => clearTimeout(t);
    }
    setIdx((i) => (i + 1) % prompts.length);
    setPhase('typing');
  }, [text, phase, idx, prompts]);

  return text;
}

// ── Sparkle icon (AI accent) ───────────────────────────────────────────────────

function Sparkle({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M12 2 L13.5 9.5 L21 11 L13.5 12.5 L12 20 L10.5 12.5 L3 11 L10.5 9.5 Z" fill="currentColor" />
      <path d="M19 4 L19.7 6.3 L22 7 L19.7 7.7 L19 10 L18.3 7.7 L16 7 L18.3 6.3 Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

// ── AI prompt input — the centerpiece ──────────────────────────────────────────

function AIPromptInput({ onSubmit, mode }: { onSubmit: () => void; mode: 'architect' | 'agent' }) {
  const placeholder = useTypingPlaceholder(SAMPLE_PROMPTS);
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="relative w-full max-w-2xl mx-auto"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Glow halo behind input */}
      <div
        className="absolute -inset-4 rounded-3xl pointer-events-none transition-opacity duration-300"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(236,44,68,0.18), transparent 70%)',
          opacity: focused ? 1 : 0.55,
          filter: 'blur(20px)',
        }}
      />

      {/* Input shell */}
      <div
        className="relative rounded-2xl border bg-[#0a1120]/85 backdrop-blur-md transition-colors duration-200"
        style={{
          borderColor: focused ? 'rgba(236,44,68,0.55)' : 'rgba(255,255,255,0.10)',
          boxShadow: focused
            ? '0 0 0 1px rgba(236,44,68,0.35), 0 12px 40px rgba(236,44,68,0.18)'
            : '0 8px 28px rgba(0,0,0,0.35)',
        }}
      >
        {/* Top row: sparkle + input field */}
        <div className="flex items-start gap-3 px-5 pt-4 pb-2">
          <span className="mt-1 text-primary-500 shrink-0">
            <Sparkle size={18} />
          </span>
          <div className="relative flex-1 min-h-[60px]">
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              onKeyDown={(e) => { if (e.key === 'Enter') onSubmit(); }}
              className="w-full bg-transparent text-white text-base md:text-lg leading-relaxed outline-none placeholder:text-slate-500"
              aria-label="Ask Enterprise Insight a question"
            />
            {/* Typed placeholder shown when input is empty and unfocused */}
            {!value && (
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none text-base md:text-lg leading-relaxed text-slate-500 flex items-start"
              >
                <span>{placeholder}</span>
                <motion.span
                  className="inline-block w-[2px] h-5 bg-primary-500 ml-0.5 mt-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.1, repeat: Infinity }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom row: mode pill + actions */}
        <div className="flex items-center justify-between gap-2 px-3 pb-3 pt-1 border-t border-white/5">
          <div className="flex items-center gap-2">
            {/* Plus / attach (visual) */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onSubmit(); }}
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
              aria-label="Add context"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>

            {/* Mode chip — shows what this prompt will do */}
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-400 px-2.5 py-1 rounded-full bg-white/4 border border-white/8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              {mode === 'architect' ? 'Architect mode' : 'Agent mode'}
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Mic (visual) */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onSubmit(); }}
              className="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
              aria-label="Voice input"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="2" width="6" height="12" rx="3" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" />
              </svg>
            </button>

            {/* Submit */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onSubmit(); }}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary-600 text-white transition-colors shrink-0"
              aria-label="Submit prompt"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────────────────────

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [mode, setMode] = useState<'architect' | 'agent'>('architect');

  return (
    <section className="relative bg-[#060b14] overflow-hidden min-h-screen flex flex-col">

      {/* ── Backgrounds: grid + ambient washes ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        {/* Big red wash, top center */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[140px]"
          style={{ background: 'rgba(236,44,68,0.10)' }} />
        {/* Subtle teal counterpoint, bottom */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-[120px]"
          style={{ background: 'rgba(93,224,230,0.04)' }} />
      </div>

      <Container className="relative z-10 flex-1 flex flex-col">

        <div className="flex-1 flex flex-col items-center justify-center text-center pt-28 md:pt-32 pb-16 md:pb-20">

          {/* ── Mode pills ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8"
          >
            <button
              onClick={() => setMode('architect')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                mode === 'architect'
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Architect
            </button>
            <button
              onClick={() => setMode('agent')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all flex items-center gap-2 ${
                mode === 'agent'
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Agent
              <span className="text-[9px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded bg-primary-500 text-white">
                New
              </span>
            </button>
          </motion.div>

          {/* ── Headline ── */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
            className="font-black uppercase tracking-tighter leading-[0.92] text-white mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.5rem)' }}
          >
            Make Your Architects<br />
            <span className="text-primary-500">Unstoppable.</span>
          </motion.h1>

          {/* ── Subtitle ── */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto mb-12"
          >
            Move fast without losing context. Keep your architecture in sync with a
            tool built for today&apos;s enterprise architects.
          </motion.p>

          {/* ── AI Prompt Input — the centrepiece ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
            className="w-full"
          >
            <AIPromptInput onSubmit={() => setDemoOpen(true)} mode={mode} />
          </motion.div>

          {/* ── Suggested chips ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 w-full max-w-2xl"
          >
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-3">
              Not sure where to start? Try one of these:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTED_CHIPS.map((chip, i) => (
                <motion.button
                  key={chip}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.05 }}
                  onClick={() => setDemoOpen(true)}
                  className="text-xs text-slate-300 px-4 py-2 rounded-full border border-white/12 bg-white/[0.02] hover:border-primary-500/50 hover:bg-primary-500/5 hover:text-white transition-all whitespace-nowrap"
                >
                  {chip}
                </motion.button>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>

      <BookDemoDialog open={demoOpen} onOpenChange={setDemoOpen} />
    </section>
  );
}
