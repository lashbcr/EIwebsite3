@AGENTS.md

# Project: Enterprise Insight Marketing Website

AI-powered enterprise architecture (EA) tooling platform. Tone: modern AI SaaS — think OpenAI / Vercel / Notion. Clean, minimal, purposeful.

## Stack
- Next.js 16, App Router, TypeScript
- Tailwind CSS v4 (`@theme` tokens, not `tailwind.config.js`)
- Framer Motion for animations
- Montserrat font

## Design rules
- Mobile-first, responsive at all breakpoints
- Subtle animations only — no heavy or distracting effects
- Primary CTA: "Book a Demo"
- Target Lighthouse ≥ 90, WCAG 2.1 basic compliance
- Reusable primitives live in `src/components/ui/`; sections in `src/components/sections/`
