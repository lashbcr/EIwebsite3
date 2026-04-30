'use client';

import { useState, useRef, useCallback, KeyboardEvent } from 'react';
import styles from './AICanvas.module.css';

// ── Node definitions ─────────────────────────────────────────────────────────

interface NodeDef {
  id: string;
  label: string;
  layer: string;
  x: number;
  y: number;
  width: number;
  height: number;
  borderColor: string;
  bg: string;
  textColor: string;
  isRisk?: boolean;
  content: string;
}

const NODES: NodeDef[] = [
  {
    id: 'strategy',
    label: 'Strategy & Governance',
    layer: 'Business Layer',
    x: 40, y: 42, width: 158, height: 60,
    borderColor: '#534AB7', bg: '#1a1030', textColor: '#AFA9EC',
    content: 'Business layer: Strategy & Governance. Defines your operating model and capability map. 3 capabilities need TOGAF Phase E review.',
  },
  {
    id: 'coreservices',
    label: 'Core Services',
    layer: 'Application Layer',
    x: 40, y: 182, width: 158, height: 60,
    borderColor: '#0F6E56', bg: '#0f1e1a', textColor: '#5DCAA5',
    content: 'Application layer: Core Services. 12 applications mapped. 2 flagged for redundancy — could reduce licensing cost by ~£180k/yr.',
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    layer: 'Technology Layer',
    x: 300, y: 238, width: 158, height: 60,
    borderColor: '#854F0B', bg: '#1a1508', textColor: '#EF9F27',
    content: 'Technology layer: Infrastructure. Cloud migration 68% complete. Legacy on-prem systems still serving 4 critical business services.',
  },
  {
    id: 'customerdata',
    label: 'Customer Data',
    layer: 'Data Layer',
    x: 500, y: 42, width: 158, height: 60,
    borderColor: '#A32D2D', bg: '#1a0f0f', textColor: '#F09595',
    content: 'Data layer: Customer & Ops Data. GDPR compliance gap detected in 2 data flows. Remediation estimated at 3 sprints.',
  },
  {
    id: 'unmapped',
    label: '⚠ Unmapped dependency',
    layer: 'Risk Node',
    x: 488, y: 200, width: 172, height: 60,
    borderColor: '#854F0B', bg: '#1a1508', textColor: '#EF9F27',
    isRisk: true,
    content: 'RISK DETECTED: Integration dependency between Infrastructure and Customer Data is unmapped. This creates a compliance blind spot under GDPR Article 32.',
  },
];

// Arrow definitions — [x1, y1, x2, y2]
// Derived from node edges:
//   strategy      center  (119, 72), bottom (119,102), right (198,72)
//   coreservices  center  (119,212), top    (119,182), right (198,212)
//   infrastructure center (379,268), top    (379,238), left  (300,268)
//   customerdata  center  (579, 72), bottom (579,102), left  (500, 72)
//   unmapped      center  (574,230), top    (574,200)
const ARROWS = [
  // Strategy → Core Services (vertical)
  { x1: 119, y1: 102, x2: 119, y2: 182, dashed: false, markerId: 'arrow-purple', color: '#534AB7' },
  // Core Services → Infrastructure (diagonal)
  { x1: 198, y1: 212, x2: 300, y2: 258, dashed: false, markerId: 'arrow-teal',   color: '#0F6E56' },
  // Strategy → Customer Data (horizontal)
  { x1: 198, y1:  72, x2: 500, y2:  72, dashed: false, markerId: 'arrow-purple', color: '#534AB7' },
  // Customer Data → Unmapped (dashed red)
  { x1: 579, y1: 102, x2: 574, y2: 200, dashed: true,  markerId: 'arrow-red',    color: '#EC2C44' },
];

// ── Prompt → response map ────────────────────────────────────────────────────

const PROMPT_RESPONSES: { keywords: string[]; response: string }[] = [
  {
    keywords: ['sunsetting', 'on-prem', 'sunset', 'on prem'],
    response:
      'Sunsetting on-prem would impact 4 critical services: Payroll Processing, HRMS Integration, Batch Reporting, and the Legacy CRM adapter. Cloud-native equivalents exist for 3 of these. Payroll Processing has no cloud path yet — requires a Phase F migration plan before decommission.',
  },
  {
    keywords: ['migration plan', 'generate migration', 'migrate'],
    response:
      'Phase E — Opportunities & Solutions: (1) Prioritise Customer Data migration to cloud-native platform to close GDPR gap. (2) Retire redundant CRM adapter — estimated £90k saving. (3) Sequence Payroll lift-and-shift for Q3. Estimated total migration runway: 14 weeks.',
  },
  {
    keywords: ['gdpr data flows', 'gdpr flow', 'data flows', 'show gdpr'],
    response:
      '3 data flows touch personal data: (1) Customer Data → Core Services API [GDPR Art.32 gap — UNENCRYPTED]. (2) CRM → Analytics pipeline [flagged, remediation in progress]. (3) Batch Reporting output [safe — anonymised]. Immediate action needed on flow #1.',
  },
  {
    keywords: ['compliance gap', 'compliance', 'article 32', 'gdpr article'],
    response:
      'GDPR Article 32 requires appropriate technical measures for data in transit. The Customer Data → Core Services connection is currently unencrypted. Recommended fix: mutual TLS — estimated 1 sprint.',
  },
  {
    keywords: ['redundant application', 'redundant app', 'redundant', 'overlapping'],
    response:
      'Two CRM-adjacent applications are both active: Legacy CRM Adapter (2019) and Cloud CRM Connector (2023). Both serve the same integration pattern. Retiring the legacy adapter saves ~£90k/yr. Impact: 3 downstream services need migration — estimated 2 sprints.',
  },
  {
    keywords: ['legacy system', 'legacy infra', 'on-prem', 'still on'],
    response:
      '4 services remain on legacy on-prem: Payroll Processing (no cloud path yet), HRMS Integration (migration-ready), Batch Reporting Engine (replaceable by cloud ETL), Legacy CRM Adapter (redundant — retirement recommended). Priority: CRM Adapter → Batch → HRMS → Payroll.',
  },
];

const FALLBACK_RESPONSE =
  'Analysing your architecture... I found relevant connections. Would you like me to generate a change manifest or flag this as a risk item?';

function findResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const { keywords, response } of PROMPT_RESPONSES) {
    if (keywords.some((kw) => lower.includes(kw))) return response;
  }
  return FALLBACK_RESPONSE;
}

// ── Chips ────────────────────────────────────────────────────────────────────

const CHIPS = [
  'Impact of sunsetting on-prem',
  'Generate migration plan',
  'Show GDPR data flows',
];

// ── Risk sidebar ─────────────────────────────────────────────────────────────

const RISKS = [
  {
    severity: 'HIGH',
    label: 'GDPR data flow gap — Article 32',
    prompt: 'What is the compliance gap in the Customer Data node?',
  },
  {
    severity: 'MED',
    label: 'Application redundancy — 2 overlapping services',
    prompt: 'Tell me about the redundant applications in Core Services',
  },
  {
    severity: 'MED',
    label: 'Legacy infra serving 4 critical services',
    prompt: 'What legacy systems are still on-prem?',
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export function AICanvas() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [response, setResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [responseVisible, setResponseVisible] = useState(false);
  // key trick: changing this key re-mounts the response div → re-plays the CSS animation
  const [responseKey, setResponseKey] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Click a node — instant response, no typing delay
  const selectNode = useCallback((nodeId: string) => {
    const node = NODES.find((n) => n.id === nodeId);
    if (!node) return;
    setSelectedNode(nodeId);
    setIsTyping(false);
    setResponse(node.content);
    setResponseVisible(true);
    setResponseKey((k) => k + 1);
  }, []);

  // Run a prompt — 900 ms typing animation then reveal answer
  const runPrompt = useCallback(
    (overrideText?: string) => {
      const text = (overrideText ?? inputValue).trim();
      if (!text) return;
      setSelectedNode(null);
      setResponseVisible(true);
      setIsTyping(true);
      setResponse('');
      setResponseKey((k) => k + 1);
      setTimeout(() => {
        setIsTyping(false);
        setResponse(findResponse(text));
        setResponseKey((k) => k + 1);
      }, 900);
    },
    [inputValue],
  );

  // Chip click — fill input, mark active, focus input (does NOT auto-run)
  const handleChip = useCallback(
    (text: string) => {
      setInputValue(text);
      setActiveChip(text);
      setSelectedNode(null);
      inputRef.current?.focus();
    },
    [],
  );

  // Risk item click — fill input AND immediately run the prompt
  const handleRisk = useCallback(
    (prompt: string) => {
      setInputValue(prompt);
      setActiveChip(null);
      setSelectedNode(null);
      setTimeout(() => runPrompt(prompt), 0);
    },
    [runPrompt],
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') runPrompt();
  };

  return (
    <section className={styles.section} id="ai-canvas">
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.eyebrow}>AI-Native Canvas</div>
        <h2 className={styles.heading}>
          Your architecture. <span>Alive.</span>
        </h2>
        <p className={styles.sub}>
          Click any node. Ask any question. Watch Enterprise Insight think.
        </p>

        {/* Shell */}
        <div className={styles.shell}>

          {/* Top bar */}
          <div className={styles.topbar}>
            <div className={styles.dot} style={{ background: '#ff5f57' }} />
            <div className={styles.dot} style={{ background: '#febc2e' }} />
            <div className={styles.dot} style={{ background: '#28c840' }} />
            <span className={styles.topbarTitle}>
              Enterprise Insight — Architecture Canvas
            </span>
            <span className={styles.topbarTag}>
              Hercules PLC · TOGAF ADM Phase D
            </span>
          </div>

          {/* Body: canvas + sidebar */}
          <div className={styles.body}>

            {/* Dot-grid canvas */}
            <div className={styles.main}>
              <div className={styles.canvasInner}>

                {/* SVG arrow layer */}
                <svg
                  className={styles.arrowsSvg}
                  viewBox="0 0 700 320"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <marker id="arrow-purple" markerWidth="8" markerHeight="8"
                      refX="7" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="#534AB7" />
                    </marker>
                    <marker id="arrow-teal" markerWidth="8" markerHeight="8"
                      refX="7" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="#0F6E56" />
                    </marker>
                    <marker id="arrow-red" markerWidth="8" markerHeight="8"
                      refX="7" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="#EC2C44" />
                    </marker>
                  </defs>
                  {ARROWS.map((a, i) => (
                    <line
                      key={i}
                      x1={a.x1} y1={a.y1}
                      x2={a.x2} y2={a.y2}
                      stroke={a.color}
                      strokeWidth="1.5"
                      strokeDasharray={a.dashed ? '5 3' : undefined}
                      markerEnd={`url(#${a.markerId})`}
                    />
                  ))}
                </svg>

                {/* Nodes */}
                {NODES.map((node) => {
                  const isSelected = selectedNode === node.id;
                  return (
                    <div
                      key={node.id}
                      className={[
                        styles.node,
                        node.isRisk && !isSelected ? styles.nodeRisk : '',
                      ].join(' ')}
                      role="button"
                      tabIndex={0}
                      aria-pressed={isSelected}
                      aria-label={`${node.label} — ${node.layer}. Click to see AI insight.`}
                      style={{
                        left: node.x,
                        top: node.y,
                        width: node.width,
                        height: node.height,
                        background: node.bg,
                        border: `1px solid ${node.borderColor}`,
                        color: node.textColor,
                        boxShadow: isSelected
                          ? `0 0 0 2px ${node.borderColor}, 0 0 22px ${node.borderColor}55`
                          : undefined,
                      }}
                      onClick={() => selectNode(node.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          selectNode(node.id);
                        }
                      }}
                    >
                      <div className={styles.nodeLayer}>{node.layer}</div>
                      <div className={styles.nodeLabel}>{node.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Risk sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.sidebarTitle}>Live Risks</div>
              {RISKS.map((risk) => (
                <div
                  key={risk.label}
                  className={styles.riskItem}
                  role="button"
                  tabIndex={0}
                  aria-label={`${risk.severity} risk: ${risk.label}. Click to analyse.`}
                  onClick={() => handleRisk(risk.prompt)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleRisk(risk.prompt);
                    }
                  }}
                >
                  <span
                    className={[
                      styles.riskBadge,
                      risk.severity === 'HIGH'
                        ? styles.riskBadgeHigh
                        : styles.riskBadgeMed,
                    ].join(' ')}
                  >
                    {risk.severity}
                  </span>
                  <div className={styles.riskLabel}>{risk.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Prompt chips */}
          <div className={styles.chips}>
            {CHIPS.map((chip) => (
              <button
                key={chip}
                type="button"
                className={[
                  styles.chip,
                  activeChip === chip ? styles.chipActive : '',
                ].join(' ')}
                onClick={() => handleChip(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* AI response area — aria-live for screen readers */}
          {responseVisible && (
            <div
              key={responseKey}
              className={styles.response}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className={styles.responseLabel}>Enterprise Insight AI</div>
              {isTyping ? (
                <div className={styles.typingDots} aria-label="AI is thinking…">
                  <div className={styles.typingDot} />
                  <div className={styles.typingDot} />
                  <div className={styles.typingDot} />
                </div>
              ) : (
                <div className={styles.responseText}>{response}</div>
              )}
            </div>
          )}

          {/* Prompt input bar */}
          <div className={styles.promptbar}>
            <label className={styles.promptLabel} htmlFor="aiCanvasInput">
              Ask the AI a question about your architecture
            </label>
            <input
              ref={inputRef}
              id="aiCanvasInput"
              className={styles.promptInput}
              type="text"
              placeholder="Ask your architecture anything…"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setActiveChip(null);
              }}
              onKeyDown={handleKeyDown}
              autoComplete="off"
            />
            <button
              type="button"
              className={styles.promptBtn}
              onClick={() => runPrompt()}
            >
              Ask AI
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
