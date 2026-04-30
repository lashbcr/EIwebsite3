import { Metadata } from 'next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Container } from '@/components/ui/Container';
import { CTABanner } from '@/components/sections/CTABanner';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Beyond OrbusInfinity: What Modern AI-Native EA Looks Like — Enterprise Insight',
  description:
    'Enterprise architecture has a design-era problem. Most EA platforms were built around assumptions that made sense at the time. Here is what changes when you build for the present.',
  keywords: [
    'OrbusInfinity alternative',
    'AI-native enterprise architecture',
    'EA platform comparison',
    'TOGAF ArchiMate tool',
    'enterprise architecture software 2026',
    'KeystoneEA',
  ],
  openGraph: {
    title: 'Beyond OrbusInfinity: What Modern AI-Native EA Looks Like',
    description:
      'Enterprise architecture has a design-era problem. Most EA platforms were built around assumptions that made sense at the time. Here is what changes when you build for the present.',
    url: 'https://enterpriseinsight.io/blog/beyond-orbusinfinity',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond OrbusInfinity: What Modern AI-Native EA Looks Like',
    description:
      'Most EA platforms were built around assumptions that made sense at the time. Here is what changes when you build for the present.',
  },
  alternates: {
    canonical: 'https://enterpriseinsight.io/blog/beyond-orbusinfinity',
  },
};

const SECTIONS = [
  {
    num: '01',
    title: "AI Isn't a Feature. It's the Foundation.",
    accent: '#5de0e6',
    body: [
      "There's a meaningful distinction between a product that has AI and a product that is built around AI. One adds a button that auto-generates a description. The other changes how fast you can actually do your job.",
      "The question worth asking in any evaluation is simple: where does AI sit in the product architecture? Is it woven into the EA lifecycle, or applied at specific discrete moments?",
      "Imagine an architect handed a blank canvas and a stakeholder meeting in two hours. In a traditional workflow, that's a sprint to produce something rough. In an AI-native workflow, the model is half-built before they've opened a browser tab.",
      "Enterprise Insight is built around AI at its core. AI-assisted content generation, AI-driven diagram rendering, and MCP (Model Context Protocol) support aren't post-launch additions — they're part of the design from day one, intended to accelerate many stages of the EA lifecycle, not just the novelty moments.",
    ],
  },
  {
    num: '02',
    title: 'The Diagram Workflow: Visio Dependency vs. Diagram Freedom',
    accent: '#EC2C44',
    body: [
      "This is one of the most concrete differences between the two platforms. OrbusInfinity's diagramming is deeply integrated with Microsoft Visio. For organisations already embedded in the Microsoft ecosystem, this is a genuine strength — but some reviewers on Gartner Peer Insights report performance concerns when modeling at large scale, and note that web-based diagramming options outside of Visio are limited.",
      "The practical question this raises: if your organisation is moving away from a dependency on desktop Microsoft tooling — as many are — does a diagram workflow that runs through Visio move you forward, or anchor you in place?",
      "Consider an architect updating a capability map mid-meeting in response to a leadership discussion. If that update requires opening a desktop application, syncing a file, and re-exporting — the moment has already passed.",
      "Enterprise Insight spans the full spectrum. Diagrams can be AI-generated and auto-rendered directly from your architecture content, giving you an instant visual starting point without touching a canvas. From there, a built-in draw.io-based editor allows refinement. Existing draw.io diagrams can be imported directly, so previous work travels with you.",
    ],
  },
  {
    num: '03',
    title: 'Deliverables Without the Overhead',
    accent: '#5de0e6',
    body: [
      "Producing outputs — diagrams, reports, models — should be a lightweight activity. If it isn't, teams stop producing them consistently, and the whole practice loses momentum.",
      "Across Gartner Peer Insights, G2, and PeerSpot, OrbusInfinity maintains strong overall ratings and a broad enterprise user base. Some G2 reviewers do note that modeling workflows can feel clunky when working across mixed object types, and that a SharePoint dependency introduces organisational overhead.",
      "Think about what happens when an EA team needs to produce three deliverables for three different audiences in the same week. Every format transition, every external viewer dependency, every \"can you send me a PDF of that?\" adds up.",
      "Enterprise Insight is designed to minimise this friction — reducing reliance on external viewer dependencies and cutting the format overhead between architecture content and polished output. The path from content to deliverable is short, direct, and fast.",
    ],
  },
  {
    num: '04',
    title: 'Reporting: A Tale of Two Compromises',
    accent: '#EC2C44',
    body: [
      "OrbusInfinity gives you two reporting options, each with tradeoffs. The built-in reporting tool covers the basics but is limited in scope — fine for simple queries, but not for the complex, cross-object analysis EA teams regularly need to produce for leadership.",
      "The alternative is to push data into Power BI, which unlocks more capability but introduces its own overhead: an additional license, a separate integration layer, and — as PeerSpot reviewers note — a scheduled refresh cycle rather than real-time data reflection.",
      "\"Limited natively, or complex externally\" is a real tradeoff — and it's worth naming it directly before committing to a platform.",
      "Enterprise Insight includes a native reporting engine designed to avoid that choice. Reports are generated directly from architecture content, using the same metamodel and data structures you're already working in, with real-time reflection of changes. Complex cross-object queries and executive-ready outputs are available without leaving the platform.",
    ],
  },
  {
    num: '05',
    title: 'API and MCP: Designed In vs. Bolted On',
    accent: '#5de0e6',
    body: [
      "Integration depth is increasingly a deciding factor in EA tool selection — especially for organisations building toward AI-augmented operations. Gartner Peer Insights reviewers note that OrbusInfinity's API can be difficult to work with for developers expecting well-abstracted, fully documented interfaces.",
      "Think about what becomes possible when your architecture data is a first-class API citizen: automated impact analysis triggered by a downstream system change, AI agents that query the model before making infrastructure recommendations, governance checks that run without human initiation.",
      "Enterprise Insight was built API-first. External systems, internal tools, and AI agents can interact with architecture content programmatically as an intended, well-supported use case. MCP support extends this further, enabling AI models to interact with architecture data in structured, purposeful ways. For organisations building toward AI-augmented operations, this is available now — not on the roadmap.",
    ],
  },
  {
    num: '06',
    title: 'Metamodel Flexibility — Including KeystoneEA',
    accent: '#EC2C44',
    body: [
      "Metamodel flexibility rarely features prominently in vendor demos — but it surfaces quickly once you're in production. The question worth asking any EA tool isn't just can the metamodel be changed — it's how hard is it to actually do it, and what happens to your data and diagrams when you do?",
      "Enterprise Insight takes a different approach — not just to the metamodel itself, but to the tooling around it. The metamodeler is fast, intuitive, and designed to make schema changes feel lightweight rather than high-risk. Changes propagate cleanly, so teams can iterate on their structure as their practice matures.",
      "That's where KeystoneEA comes in. Rather than handing teams a blank canvas and wishing them luck, KeystoneEA is a proven metamodel and methodology — a playbook that provides a pre-defined path from where you are to the outputs you need. It reduces the ambiguity that stalls many EA initiatives, and it's particularly powerful when combined with AI acceleration.",
    ],
  },
  {
    num: '07',
    title: 'State Modeling: Handling Change Without Breaking the Present',
    accent: '#5de0e6',
    body: [
      "State modeling is easy to overlook during evaluation and painful to discover missing afterward. It's worth asking any EA vendor directly: how do you model a future state — or multiple competing future states — without contaminating your baseline?",
      "Imagine a transformation programme with four parallel workstreams, each proposing changes to the same set of capabilities. Without proper state modeling, someone is maintaining four copies of a spreadsheet and calling it an architecture practice.",
      "Enterprise Insight's built-in state modeling is designed to address this. Any number of changes — scenarios, roadmap stages, proposed initiatives — can be modeled independently of baseline content. Diagrams, reports, and analysis drawn from the baseline stay accurate. Scenario content stays contained until promoted. No accidental overwrites, no parallel document management.",
    ],
  },
];

function PullQuote({ text }: { text: string }) {
  return (
    <div className="my-10 border-l-2 border-[#EC2C44] pl-6 py-1">
      <p className="text-lg md:text-xl text-white font-medium leading-relaxed italic">{text}</p>
    </div>
  );
}

function SectionBlock({ section, i }: { section: typeof SECTIONS[number]; i: number }) {
  return (
    <AnimatedSection delay={i * 0.04} className="mb-16">
      <div className="flex items-start gap-5 mb-5">
        <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase shrink-0 mt-1">{section.num}</span>
        <h2
          className="font-black uppercase tracking-tighter leading-[0.95] text-white"
          style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
        >
          <span style={{ borderBottom: `2px solid ${section.accent}` }}>{section.title}</span>
        </h2>
      </div>
      <div className="pl-9 space-y-4">
        {section.body.map((para, pi) => (
          <p key={pi} className="text-base text-slate-400 leading-relaxed">{para}</p>
        ))}
      </div>
    </AnimatedSection>
  );
}

export default function BeyondOrbusInfinityPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#060b14] border-b border-white/8 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #5de0e6 0, #5de0e6 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
          }}
        />
        <Container>
          <AnimatedSection className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-white transition-colors mb-10 uppercase tracking-widest">
              ← Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-mono tracking-[0.22em] text-[#5de0e6] uppercase shrink-0">AI & Automation</span>
              <div className="flex-1 h-px bg-white/8" />
            </div>

            <h1
              className="font-black uppercase tracking-tighter leading-[0.88] text-white mb-8"
              style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)' }}
            >
              Beyond OrbusInfinity:<br />
              <span style={{ color: '#5de0e6' }}>What Modern</span><br />
              AI-Native EA<br />Looks Like.
            </h1>

            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              Enterprise architecture has a tooling problem — but it&apos;s not a missing-features problem. It&apos;s a design-era problem. Most EA platforms were built around assumptions that made sense at the time.
            </p>

            <div className="flex items-center gap-6 text-xs font-mono text-slate-600 uppercase tracking-widest border-t border-white/8 pt-6">
              <span>Apr 2026</span>
              <span className="w-px h-3 bg-white/10" />
              <span>12 min read</span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-slate-700 italic normal-case tracking-normal">Reflects publicly available information as of April 2026</span>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Article body */}
      <section className="py-16 md:py-24 bg-[#060b14]">
        <Container>
          <div className="max-w-2xl">

            {/* Intro */}
            <AnimatedSection className="mb-16">
              <p className="text-base text-slate-400 leading-relaxed mb-5">
                OrbusInfinity is a capable, established platform with strong customer ratings and a genuine foothold in the enterprise market. This isn&apos;t an argument against it.
              </p>
              <p className="text-base text-slate-400 leading-relaxed mb-5">
                It&apos;s an argument that the questions worth asking in 2026 are different from the ones that drove EA tool selection five years ago.
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                Enterprise Insight was designed as an AI-native platform around a single premise: enterprise architecture should move at the speed of decision-making — not documentation. Here&apos;s where that difference shows up in practice.
              </p>
            </AnimatedSection>

            <PullQuote text="&ldquo;Does this tool get better as AI gets better — and does it fit the way modern architecture teams actually work?&rdquo;" />

            {/* Numbered sections */}
            {SECTIONS.map((s, i) => (
              <SectionBlock key={s.num} section={s} i={i} />
            ))}

            {/* The bigger picture */}
            <AnimatedSection className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase shrink-0">The Bigger Picture</span>
                <div className="flex-1 h-px bg-white/8" />
              </div>
              <p className="text-base text-slate-400 leading-relaxed mb-5">
                OrbusInfinity is a well-regarded platform with a clear enterprise customer base. This isn&apos;t an argument that it&apos;s a bad tool.
              </p>
              <p className="text-base text-slate-400 leading-relaxed mb-5">
                It&apos;s an argument that the criteria for choosing EA tools are changing. Does the diagram workflow require a desktop dependency your organisation is trying to move away from? Does real-time reporting matter enough to justify an external BI layer? Is AI integrated deeply enough to change how fast your team actually works — or is it a feature layer on the surface?
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                Enterprise Insight is what an EA platform looks like when you stop extending the past and start designing for the present. AI at the core, flexible metamodelling, proper state modeling, built-in real-time reporting, a diagram workflow that spans AI to freehand, and an API-first architecture that plays well with everything else in your stack.
              </p>
            </AnimatedSection>

            {/* Closing statement */}
            <AnimatedSection>
              <div className="border border-white/10 p-8 bg-[#EC2C44]/5">
                <p className="text-sm font-mono uppercase tracking-widest text-[#EC2C44] mb-4">The Real Distinction</p>
                <p className="text-lg text-white font-medium leading-relaxed">
                  The real distinction isn&apos;t between tools. It&apos;s between two approaches to enterprise architecture: platforms built to help you document what exists, and platforms designed to help you shape what comes next.
                </p>
              </div>
            </AnimatedSection>

            {/* Sources */}
            <AnimatedSection delay={0.1} className="mt-16 pt-8 border-t border-white/8">
              <p className="text-[10px] font-mono tracking-[0.2em] text-slate-600 uppercase mb-4">Sources — Last reviewed April 2026</p>
              <ul className="space-y-2">
                {[
                  { label: 'Gartner Peer Insights — OrbusInfinity reviews', href: 'https://www.gartner.com/reviews/market/enterprise-architecture-tools/vendor/orbus/product/orbusinfinity' },
                  { label: 'G2 — Orbus Software reviews', href: 'https://www.g2.com/products/orbus-software/reviews' },
                  { label: 'PeerSpot — OrbusInfinity pros and cons', href: 'https://www.peerspot.com/products/orbusinfinity-pros-and-cons' },
                ].map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-slate-600 hover:text-slate-400 transition-colors">
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
