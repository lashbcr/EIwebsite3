'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const CANVAS_BG = '#0d1117';

// ─── SVG Flowchart ────────────────────────────────────────────────────────────

function ArrowMarkers() {
  return (
    <defs>
      <marker id="ea-arr" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
        <polygon points="0 0, 7 2.5, 0 5" fill="#475569" />
      </marker>
      <marker id="ea-arr-ext" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
        <polygon points="0 0, 8 3, 0 6" fill="#64748b" />
      </marker>
    </defs>
  );
}

function Arrow({
  x1, y1, x2, y2, ext,
}: {
  x1: number; y1: number; x2: number; y2: number; ext?: boolean;
}) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={ext ? '#64748b' : '#334155'}
      strokeWidth={1.5}
      markerEnd={`url(#${ext ? 'ea-arr-ext' : 'ea-arr'})`}
    />
  );
}

function CurveArrow({ d }: { d: string }) {
  return (
    <path
      d={d}
      stroke="#64748b"
      strokeWidth={1.5}
      fill="none"
      markerEnd="url(#ea-arr-ext)"
    />
  );
}

function FlowNode({
  cx, cy, color, label, label2, abbr,
}: {
  cx: number; cy: number; color: string; label: string; label2?: string; abbr: string;
}) {
  return (
    <g>
      <rect x={cx - 20} y={cy - 20} width={40} height={40} rx={8} fill={color} />
      <text
        x={cx} y={cy + 5}
        textAnchor="middle"
        fontSize={11}
        fontWeight="700"
        fill="white"
        fontFamily="system-ui, sans-serif"
      >
        {abbr}
      </text>
      <text x={cx} y={cy + 35} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui, sans-serif">
        {label}
      </text>
      {label2 && (
        <text x={cx} y={cy + 46} textAnchor="middle" fontSize={9} fill="#94a3b8" fontFamily="system-ui, sans-serif">
          {label2}
        </text>
      )}
    </g>
  );
}

function GroupBox({
  x, y, w, h, stroke, fill, label,
}: {
  x: number; y: number; w: number; h: number;
  stroke: string; fill: string; label: string;
}) {
  const labelW = label.length * 6 + 16;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} stroke={stroke} strokeWidth={1.5} fill={fill} />
      {/* Erase border line behind label text */}
      <rect x={x + 14} y={y - 8} width={labelW} height={16} fill={CANVAS_BG} />
      <text
        x={x + 16} y={y + 4}
        fontSize={9}
        fontWeight="600"
        fill="#64748b"
        fontFamily="system-ui, sans-serif"
        letterSpacing="1.5"
      >
        {label}
      </text>
    </g>
  );
}

function EAFlowchart() {
  return (
    <svg
      viewBox="0 0 560 390"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <ArrowMarkers />

      {/* Group boxes */}
      <GroupBox x={10} y={10} w={225} h={145} stroke="#3b82f6" fill="rgba(59,130,246,0.05)" label="BUSINESS LAYER" />
      <GroupBox x={10} y={222} w={280} h={160} stroke="#22c55e" fill="rgba(34,197,94,0.05)" label="APPLICATION LAYER" />
      <GroupBox x={310} y={70} w={240} h={310} stroke="#f97316" fill="rgba(249,115,22,0.04)" label="TECHNOLOGY LAYER" />

      {/* ── Internal arrows ── */}
      {/* Business: ST → GV */}
      <Arrow x1={95} y1={90} x2={163} y2={90} />
      {/* Application: AP → SV → IN */}
      <Arrow x1={80} y1={298} x2={133} y2={298} />
      <Arrow x1={175} y1={298} x2={228} y2={298} />
      {/* Technology: CL → DB */}
      <Arrow x1={390} y1={160} x2={448} y2={160} />
      {/* Technology: CL → IF */}
      <Arrow x1={370} y1={182} x2={370} y2={268} />
      {/* Technology: DB → PL */}
      <Arrow x1={470} y1={182} x2={470} y2={268} />
      {/* Technology: IF → PL */}
      <Arrow x1={390} y1={290} x2={448} y2={290} />

      {/* ── External arrows ── */}
      {/* Business → Application (vertical) */}
      <Arrow x1={120} y1={156} x2={120} y2={221} ext />
      {/* Business → Technology (curve) */}
      <CurveArrow d="M 235 78 C 270 78, 308 100, 309 122" />
      {/* Application → Technology (horizontal) */}
      <Arrow x1={291} y1={302} x2={309} y2={302} ext />

      {/* ── Business Layer nodes ── */}
      <FlowNode cx={75} cy={90} color="#3b82f6" abbr="ST" label="Strategy" />
      <FlowNode cx={185} cy={90} color="#f97316" abbr="GV" label="Governance" />

      {/* ── Application Layer nodes ── */}
      <FlowNode cx={60} cy={298} color="#ec4899" abbr="AP" label="APIs" />
      <FlowNode cx={155} cy={298} color="#22c55e" abbr="SV" label="Services" />
      <FlowNode cx={250} cy={298} color="#a855f7" abbr="IN" label="Integration" />

      {/* ── Technology Layer nodes ── */}
      <FlowNode cx={370} cy={160} color="#3b82f6" abbr="CL" label="Cloud" />
      <FlowNode cx={470} cy={160} color="#22c55e" abbr="DB" label="Data" />
      <FlowNode cx={370} cy={290} color="#ec4899" abbr="IF" label="Infrastructure" />
      <FlowNode cx={470} cy={290} color="#a855f7" abbr="PL" label="Platform" />
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
      <h3 className="text-base font-bold text-white tracking-tight">AI Prompts</h3>

      <div className="flex flex-col gap-2.5">
        {PREV_PROMPTS.map((p, i) => (
          <div
            key={i}
            className={`relative rounded-lg px-3 py-2.5 text-sm leading-snug ${
              'user' in p
                ? 'bg-purple-500/15 border border-purple-500/40 text-slate-200'
                : 'bg-white/5 text-slate-300'
            }`}
          >
            {'user' in p && (
              <span className="absolute -top-2.5 right-3 text-[10px] bg-purple-500 text-white px-2 py-0.5 rounded-full font-medium">
                {p.user}
              </span>
            )}
            {p.text}
          </div>
        ))}
      </div>

      <textarea
        className="flex-1 min-h-22.5 bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-400 placeholder:text-slate-500 resize-none focus:outline-none cursor-default"
        placeholder="Describe your architecture in plain language."
        readOnly
      />

      <div className="flex flex-wrap gap-2">
        {QUICK_ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="px-3 py-1.5 text-xs rounded-lg bg-white/8 text-slate-300 border border-white/10 cursor-default"
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
    <Section id="ai-canvas" className="bg-white dark:bg-[#060b14]">
      <Container>
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            See your architecture come to life
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Describe any change in plain language. Enterprise Insight maps it across your Business,
            Application, and Technology layers — instantly.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div
            className="rounded-2xl border border-white/10 overflow-hidden"
            style={{ background: CANVAS_BG }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px]">
              {/* Left: Flowchart */}
              <div className="p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/8">
                <div className="w-full aspect-560/390">
                  <EAFlowchart />
                </div>
              </div>

              {/* Right: AI Prompts panel */}
              <div
                className="rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl"
                style={{
                  background: '#0f1623',
                  boxShadow: 'inset 0 0 0 1px rgba(168,85,247,0.35), 0 0 40px rgba(168,85,247,0.1)',
                }}
              >
                <AIPromptsPanel />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  );
}
