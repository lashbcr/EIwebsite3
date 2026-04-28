# Enterprise Insight — Marketing Website Build Brief

## Objective

Create a modern, high-performance marketing website for **Enterprise Insight** that clearly communicates its core strength: **AI-powered enterprise architecture tooling**. The site should feel innovative, intelligent, and trustworthy — visually and functionally aligned with cutting-edge AI products.

---

## 1. Technical Requirements

- **Framework:** Next.js 16 (App Router)
- **Rendering:** Hybrid — SSG + SSR where appropriate
- **Styling:** Tailwind CSS (or equivalent modern utility-first approach)
- **Performance:**
  - Lighthouse score target: **90+**
  - Optimized images, fonts, and lazy loading
- **SEO:**
  - Metadata optimization (OpenGraph, structured data)
  - Clean semantic HTML
- **Accessibility:** WCAG 2.1 compliance (basic level)

---

## 2. Design Requirements

### Mobile-First Approach
- Design must start from mobile and scale up
- Smooth responsiveness across all breakpoints
- Touch-friendly interactions

### Desktop Optimization
- Expand layout intelligently (not just stretched mobile)
- Use whitespace, grid systems, and visual hierarchy
- Support richer interactions (hover states, subtle animations)

---

## 3. Visual Direction

The design should feel like a modern AI SaaS platform, similar in tone to companies like **OpenAI**, **Vercel**, and **Notion**.

### Style Guidelines
- Clean, minimal, but not empty
- Subtle gradients, glassmorphism, or soft shadows
- Neutral base (white / gray / dark mode) + accent color
- Typography: modern sans-serif (e.g., Inter, Montserrat)
- Micro-interactions (hover, scroll animations, transitions)

---

## 4. Core Messaging Focus

The website must clearly emphasize the following three pillars.

### 4.1 AI-Powered Capabilities
- Position the product as an AI-driven enterprise architecture tool
- Highlight automation, insight generation, and intelligence
- Suggested phrases:
  - "AI-powered insights"
  - "Automated architecture generation"
  - "Data-driven decision making"

### 4.2 Business Value
- Faster decision-making
- Reduced manual effort
- Better communication between stakeholders
- Scalable architecture management

### 4.3 Differentiation
- Simplicity vs. traditional complex tools
- Real-time, data-driven outputs
- Modern UX vs. legacy enterprise software

---

## 5. Page Structure (Recommended)

### 5.1 Hero Section
- Strong headline focused on AI
- Short supporting text
- CTA (e.g., "Request Demo", "Get Started")
- Visual: abstract AI / graph / data visualization

### 5.2 Features Section
- AI automation
- Data-driven insights
- Visualization tools
- Integration capabilities

### 5.3 How It Works
- Simple 3–4 step explanation
- Emphasize automation + intelligence

### 5.4 Use Cases
- Enterprise architects
- IT leaders
- Digital transformation teams

### 5.5 Benefits / Outcomes
- Efficiency
- Clarity
- Speed
- Accuracy

### 5.6 Social Proof (if available)
- Logos / testimonials / case studies

### 5.7 CTA Section
- Clear conversion goal

---

## 6. Interaction & UX

- Smooth scrolling experience
- Subtle animations (Framer Motion recommended)
- Avoid heavy or distracting effects
- Keep interactions purposeful and fast

---

## 7. Deliverables

- Fully functional Next.js 16 project
- Reusable components (modular structure)
- Clean, maintainable code
- Responsive layouts
- Basic SEO setup

---

## 8. Open Questions — Clarify Before Building

1. Do you want **light mode, dark mode, or both**?
2. Do you already have a **brand color palette / logo**, or should the agent define one?
3. Should the tone be more **corporate enterprise** or **startup / innovative AI**?
4. What is the **primary CTA** (demo booking, signup, contact)?
5. Should animations be **subtle** or **more visually impressive**?
6. Will there be **real product screenshots**, or should we use **abstract visuals**?
7. Any **competitors** you want to differentiate from explicitly?

---

## Agent Execution Checklist

Use this checklist as a build-order reference:

- [ ] Resolve all open questions in Section 8
- [ ] Scaffold Next.js 16 project with App Router
- [ ] Configure Tailwind CSS and design tokens (colors, typography, spacing)
- [ ] Set up global layout, metadata, and SEO primitives
- [ ] Build reusable UI primitives (Button, Section, Container, etc.)
- [ ] Implement each page section from Section 5 in order
- [ ] Layer in Framer Motion micro-interactions
- [ ] Optimize images and fonts; verify lazy loading
- [ ] Run Lighthouse; iterate until score ≥ 90
- [ ] Verify WCAG 2.1 basic compliance
- [ ] Final responsive QA across mobile / tablet / desktop breakpoints