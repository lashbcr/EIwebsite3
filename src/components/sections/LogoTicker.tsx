'use client';

const logos = [
  {
    id: 'openai',
    svg: (
      <svg width="100" height="28" viewBox="0 0 100 28" fill="currentColor" aria-label="OpenAI">
        <path d="M14 2.5a5.5 5.5 0 0 0-4.77 2.76A5.5 5.5 0 0 0 2.5 10a5.5 5.5 0 0 0 .73 8.24A5.5 5.5 0 0 0 8 22.5a5.5 5.5 0 0 0 5.27-3.76A5.5 5.5 0 0 0 14 19a5.5 5.5 0 0 0 5.27 3.74A5.5 5.5 0 0 0 24.77 18a5.5 5.5 0 0 0 .73-8.24 5.5 5.5 0 0 0-6.73-4.74A5.5 5.5 0 0 0 14 2.5Zm0 2a3.5 3.5 0 0 1 3.16 2l.43.89.96-.2a3.5 3.5 0 0 1 4.2 3.01l.08.98.9.35a3.5 3.5 0 0 1-.46 6.64l-.97.21.2.97a3.5 3.5 0 0 1-3.99 4.09l-.96-.2-.44.89a3.5 3.5 0 0 1-6.22 0l-.44-.89-.96.2a3.5 3.5 0 0 1-3.99-4.09l.2-.97-.97-.21a3.5 3.5 0 0 1-.46-6.64l.9-.35.08-.98a3.5 3.5 0 0 1 4.2-3.01l.96.2.43-.89A3.5 3.5 0 0 1 14 4.5Z" />
        <text x="30" y="20" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" letterSpacing="-0.3">OpenAI</text>
      </svg>
    ),
  },
  {
    id: 'microsoft',
    svg: (
      <svg width="112" height="28" viewBox="0 0 112 28" fill="currentColor" aria-label="Microsoft">
        <rect x="0" y="1" width="12" height="12" opacity="0.85" />
        <rect x="14" y="1" width="12" height="12" opacity="0.55" />
        <rect x="0" y="15" width="12" height="12" opacity="0.55" />
        <rect x="14" y="15" width="12" height="12" opacity="0.35" />
        <text x="32" y="20" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="500" letterSpacing="-0.2">Microsoft</text>
      </svg>
    ),
  },
  {
    id: 'google',
    svg: (
      <svg width="90" height="28" viewBox="0 0 90 28" fill="currentColor" aria-label="Google">
        <path d="M14 5.5A8.5 8.5 0 1 0 22.5 14H14v-2.5h11a11 11 0 1 1-3.22-7.78L19.69 5.8A8.45 8.45 0 0 0 14 5.5Z" />
        <text x="30" y="20" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="500" letterSpacing="-0.2">Google</text>
      </svg>
    ),
  },
  {
    id: 'aws',
    svg: (
      <svg width="72" height="28" viewBox="0 0 72 28" fill="currentColor" aria-label="AWS">
        <text x="0" y="20" fontFamily="system-ui, sans-serif" fontSize="18" fontWeight="700" letterSpacing="1">AWS</text>
        <path d="M2 23 Q12 26 22 23" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <polygon points="22,21 24,23 22,25" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'nvidia',
    svg: (
      <svg width="90" height="28" viewBox="0 0 90 28" fill="currentColor" aria-label="NVIDIA">
        <path d="M2 5h5v8.5L11.5 5H17L11 14l6.5 9H12L7 14.5V23H2V5Z" />
        <text x="22" y="20" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700" letterSpacing="1">VIDIA</text>
      </svg>
    ),
  },
  {
    id: 'anthropic',
    svg: (
      <svg width="105" height="28" viewBox="0 0 105 28" fill="currentColor" aria-label="Anthropic">
        <text x="0" y="20" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600" letterSpacing="-0.3">Anthropic</text>
      </svg>
    ),
  },
  {
    id: 'ibm',
    svg: (
      <svg width="60" height="28" viewBox="0 0 60 28" fill="currentColor" aria-label="IBM">
        <text x="0" y="22" fontFamily="system-ui, sans-serif" fontSize="22" fontWeight="900" letterSpacing="2">IBM</text>
      </svg>
    ),
  },
  {
    id: 'salesforce',
    svg: (
      <svg width="120" height="28" viewBox="0 0 120 28" fill="currentColor" aria-label="Salesforce">
        <path d="M12 8a6 6 0 0 1 5.66 4A5 5 0 0 1 22 21H7a4 4 0 0 1-.5-7.97A6 6 0 0 1 12 8Z" />
        <text x="28" y="20" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" letterSpacing="-0.2">Salesforce</text>
      </svg>
    ),
  },
  {
    id: 'databricks',
    svg: (
      <svg width="120" height="28" viewBox="0 0 120 28" fill="currentColor" aria-label="Databricks">
        <polygon points="12,3 22,8.5 22,14 12,19.5 2,14 2,8.5" opacity="0.9" />
        <polygon points="12,8.5 19,12.5 12,16.5 5,12.5" opacity="0.5" />
        <text x="28" y="20" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" letterSpacing="-0.2">Databricks</text>
      </svg>
    ),
  },
  {
    id: 'servicenow',
    svg: (
      <svg width="120" height="28" viewBox="0 0 120 28" fill="currentColor" aria-label="ServiceNow">
        <circle cx="11" cy="14" r="9" opacity="0.15" />
        <circle cx="11" cy="14" r="5.5" />
        <text x="26" y="20" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600" letterSpacing="-0.2">ServiceNow</text>
      </svg>
    ),
  },
];

export function LogoTicker() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-10 border-y border-border">
      <p className="text-center text-xs font-medium text-muted-foreground uppercase tracking-[0.18em] mb-8">
        Integrates with the AI platforms your team already uses
      </p>

      <div
        className="overflow-hidden relative"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div className="flex w-max logo-marquee hover:paused">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              className="flex items-center justify-center px-10 text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300 shrink-0"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
