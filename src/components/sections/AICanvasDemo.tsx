'use client';

import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const CANVAS_BG = '#070d18';

// ─── Arrow markers ────────────────────────────────────────────────────────────

function ArrowMarkers() {
  return (
    <defs>
      <marker id="arr-int" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
        <polygon points="0 0, 6 2.5, 0 5" fill="#475569" />
      </marker>
      <marker id="arr-ext" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto">
        <polygon points="0 0, 6 2.5, 0 5" fill="#EC2C44" opacity="0.7" />
      </marker>
      {/* Dot grid pattern */}
      <pattern id="dotgrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#5de0e6" opacity="0.12" />
      </pattern>
    </defs>
  );
}

function Arrow({ x1, y1, x2, y2, ext }: { x1: number; y1: number; x2: number; y2: number; ext?: boolean }) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={ext ? 'rgba(236,44,68,0.55)' : 'rgba(71,85,105,0.9)'}
      strokeWidth={ext ? 1.5 : 1.2}
      strokeDasharray={ext ? '4 3' : undefined}
      markerEnd={`url(#${ext ? 'arr-ext' : 'arr-int'})`}
    />
  );
}

function CurveArrow({ d }: { d: string }) {
  return (
    <path d={d} stroke="rgba(236,44,68,0.55)" strokeWidth={1.5} strokeDasharray="4 3" fill="none" markerEnd="url(#arr-ext)" />
  );
}

// ─── Node ──────────────────────────────────────────────────────────────────────

function Node({ cx, cy, color, glow, abbr, label }: {
  cx: number; cy: number; color: string; glow: string; abbr: string; label: string;
}) {
  return (
    <g>
      {/* Glow halo */}
      <rect x={cx - 24} y={cy - 24} width={48} height={48} rx={4} fill={glow} />
      {/* Main box */}
      <rect x={cx - 20} y={cy - 20} width={40} height={40} rx={3} fill={color} />
      {/* Top-left corner accent */}
      <rect x={cx - 20} y={cy - 20} width={8} height={2} fill="rgba(255,255,255,0.3)" />
      <rect x={cx - 20} y={cy - 20} width={2} height={8} fill="rgba(255,255,255,0.3)" />
      {/* Abbr */}
      <text x={cx} y={cy + 5} textAnchor="middle" fontSize={10} fontWeight="800"
        fill="white" fontFamily="monospace" letterSpacing="0.5">
        {abbr}
      </text>
      {/* Label */}
      <text x={cx} y={cy + 36} textAnchor="middle" fontSize={8} fill="#64748b"
        fontFamily="monospace" letterSpacing="0.8" textLength="">
        {label.toUpperCase()}
      </text>
    </g>
  );
}

// ─── Group box ────────────────────────────────────────────────────────────────

function GroupBox({ x, y, w, h, stroke, fill, label, labelColor }: {
  x: number; y: number; w: number; h: number;
  stroke: string; fill: string; label: string; labelColor: string;
}) {
  const lw = label.length * 5.5 + 14;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={0} stroke={stroke} strokeWidth={1} fill={fill} />
      {/* Top-left label cutout */}
      <rect x={x + 12} y={y - 7} width={lw} height={14} fill={CANVAS_BG} />
      <text x={x + 14} y={y + 4} fontSize={7.5} fontWeight="700" fill={labelColor}
        fontFamily="monospace" letterSpacing="2">
        {label}
      </text>
      {/* Corner tick marks */}
      <line x1={x} y1={y + 16} x2={x} y2={y} stroke={stroke} strokeWidth={2} />
      <line x1={x} y1={y} x2={x + 16} y2={y} stroke={stroke} strokeWidth={2} />
      <line x1={x + w - 16} y1={y + h} x2={x + w} y2={y + h} stroke={stroke} strokeWidth={2} />
      <line x1={x + w} y1={y + h - 16} x2={x + w} y2={y + h} stroke={stroke} strokeWidth={2} />
    </g>
  );
}

// ─── Flowchart ────────────────────────────────────────────────────────────────

function EAFlowchart() {
  return (
    <svg viewBox="0 0 560 390" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <ArrowMarkers />

      {/* Dot-grid canvas background */}
      <rect x={0} y={0} width={560} height={390} fill="url(#dotgrid)" />

      {/* Subtle red centre glow */}
      <radialGradient id="rg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#EC2C44" stopOpacity="0.07" />
        <stop offset="100%" stopColor="#EC2C44" stopOpacity="0" />
      </radialGradient>
      <rect x={0} y={0} width={560} height={390} fill="url(#rg)" />

      {/* ── Group boxes ── */}
      <GroupBox x={10} y={12} w={225} h={140}
        stroke="rgba(236,44,68,0.55)" fill="rgba(236,44,68,0.04)"
        label="BUSINESS LAYER" labelColor="#EC2C44" />
      <GroupBox x={10} y={220} w={280} h={158}
        stroke="rgba(93,224,230,0.5)" fill="rgba(93,224,230,0.04)"
        label="APPLICATION LAYER" labelColor="#5de0e6" />
      <GroupBox x={310} y={68} w={240} h={312}
        stroke="rgba(148,163,184,0.35)" fill="rgba(148,163,184,0.03)"
        label="TECHNOLOGY LAYER" labelColor="#64748b" />

      {/* ── Internal arrows ── */}
      <Arrow x1={96}  y1={90}  x2={164} y2={90}  />
      <Arrow x1={82}  y1={298} x2={134} y2={298} />
      <Arrow x1={176} y1={298} x2={228} y2={298} />
      <Arrow x1={392} y1={160} x2={448} y2={160} />
      <Arrow x1={370} y1={182} x2={370} y2={268} />
      <Arrow x1={470} y1={182} x2={470} y2={268} />
      <Arrow x1={392} y1={290} x2={448} y2={290} />

      {/* ── Cross-layer arrows ── */}
      <Arrow x1={120} y1={154} x2={120} y2={219} ext />
      <CurveArrow d="M 236 80 C 270 80, 309 102, 310 124" />
      <Arrow x1={292} y1={302} x2={309} y2={302} ext />

      {/* ── Business Layer ── */}
      <Node cx={76}  cy={90}  color="#EC2C44" glow="rgba(236,44,68,0.15)"  abbr="ST" label="Strategy"   />
      <Node cx={186} cy={90}  color="#9f1239" glow="rgba(159,18,57,0.15)"  abbr="GV" label="Governance" />

      {/* ── Application Layer ── */}
      <Node cx={62}  cy={298} color="#5de0e6" glow="rgba(93,224,230,0.15)" abbr="AP" label="APIs"        />
      <Node cx={156} cy={298} color="#0891b2" glow="rgba(8,145,178,0.15)"  abbr="SV" label="Services"    />
      <Node cx={252} cy={298} color="#EC2C44" glow="rgba(236,44,68,0.15)"  abbr="IN" label="Integration" />

      {/* ── Technology Layer ── */}
      <Node cx={370} cy={160} color="#5de0e6" glow="rgba(93,224,230,0.15)" abbr="CL" label="Cloud"          />
      <Node cx={470} cy={160} color="#0e7490" glow="rgba(14,116,144,0.15)" abbr="DB" label="Data"           />
      <Node cx={370} cy={290} color="#EC2C44" glow="rgba(236,44,68,0.15)"  abbr="IF" label="Infrastructure" />
      <Node cx={470} cy={290} color="#334155" glow="rgba(51,65,85,0.2)"    abbr="PL" label="Platform"       />
    </svg>
  );
}

// ─── AI Prompts Panel ─────────────────────────────────────────────────────────

const PREV_PROMPTS = [
  { text: 'Map our current technology landscape to ArchiMate standards.' },
  { text: 'Identify capability gaps in the Application layer.' },
  { text: 'Add a data governance framework.', user: 'Sarah K.' },
] as const;

const QUICK_ACTIONS = ['Add compliance layer', 'Optimize integrations', 'Map dependencies'] as const;

function AIPromptsPanel() {
  return (
    <div className="flex flex-col h-full p-5 gap-4">
      {/* Header */}
      <div className="flex items-center gap-2.5 pb-4 border-b border-white/8">
        <span className="w-1.5 h-1.5 bg-[#EC2C44] animate-pulse shrink-0" />
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white uppercase">AI Prompts</span>
      </div>

      {/* Prompt history */}
      <div className="flex flex-col gap-2">
        {PREV_PROMPTS.map((p, i) => (
          <div
            key={i}
            className="relative px-3 py-2.5 text-xs leading-relaxed"
            style={
              'user' in p
                ? {
                    background: 'rgba(236,44,68,0.1)',
                    border: '1px solid rgba(236,44,68,0.35)',
                    color: '#fca5a5',
                  }
                : {
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#cbd5e1',
                  }
            }
          >
            {'user' in p && (
              <span className="absolute -top-2.5 right-2 text-[9px] bg-[#EC2C44] text-white px-2 py-0.5 font-mono font-bold tracking-widest uppercase">
                {p.user}
              </span>
            )}
            {p.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <textarea
        className="flex-1 min-h-[90px] px-3 py-2.5 text-xs text-slate-400 placeholder:text-slate-600 resize-none focus:outline-none cursor-default font-mono"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          color: '#94a3b8',
        }}
        placeholder="Describe your architecture in plain language."
        readOnly
      />

      {/* Quick actions */}
      <div className="flex flex-wrap gap-2">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest cursor-default transition-colors duration-150"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#94a3b8',
            }}
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function AICanvasDemo() {
  return (
    <section id="ai-canvas" className="bg-[#060b14] border-t border-white/8">
      <Container className="py-16 md:py-24">

        <AnimatedSection>
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[10px] font-mono tracking-[0.22em] text-slate-600 uppercase shrink-0">Live Demo</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>
          <h2
            className="font-black uppercase tracking-tighter leading-[0.9] text-white mb-10"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
          >
            See Your Architecture<br />Come to Life.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div
            className="border border-white/10 overflow-hidden"
            style={{ background: CANVAS_BG }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px]">
              {/* Left: Flowchart */}
              <div className="p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/8">
                <div className="w-full" style={{ aspectRatio: '560/390' }}>
                  <EAFlowchart />
                </div>
              </div>

              {/* Right: AI Prompts */}
              <div style={{ background: '#060c18', borderLeft: '1px solid rgba(236,44,68,0.15)' }}>
                <AIPromptsPanel />
              </div>
            </div>
          </div>
        </AnimatedSection>

      </Container>
    </section>
  );
}
