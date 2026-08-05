import React from 'react';

export const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

export const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const TradeMatrixIllustration: React.FC = () => (
  <svg viewBox="0 0 560 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="oss-g5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0.07" />
      </linearGradient>
    </defs>
    <rect width="560" height="220" fill="url(#oss-g5)" />

    {/* TAIEX index ticker */}
    <g transform="translate(28, 20)">
      <rect
        x="0"
        y="0"
        width="150"
        height="24"
        rx="6"
        fill="#0b1020"
        opacity="0.7"
        stroke="#10b981"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />
      <text x="10" y="16" fill="#94a3b8" fontSize="8" fontFamily="monospace" opacity="0.7">
        TAIEX
      </text>
      <text
        x="52"
        y="16"
        fill="#34d399"
        fontSize="9"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.85"
      >
        22,418
      </text>
      <path d="M 110 14 L 116 8 L 122 14 Z" fill="#34d399" opacity="0.7" />
      <text x="126" y="16" fill="#34d399" fontSize="8" fontFamily="monospace" opacity="0.7">
        +1.2%
      </text>
    </g>

    {/* Institutional flow panel — diverging net buy/sell bars */}
    <g transform="translate(28, 56)">
      <text
        x="0"
        y="8"
        fill="#7dd3fc"
        fontSize="8"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.7"
      >
        INSTITUTIONAL FLOW
      </text>
      {/* center axis */}
      <line x1="78" y1="16" x2="78" y2="104" stroke="#475569" strokeWidth="0.75" opacity="0.5" />
      {[
        { label: '外資', y: 22, w: 64, buy: true },
        { label: '投信', y: 44, w: 40, buy: true },
        { label: '自營', y: 66, w: 26, buy: false },
        { label: '八大', y: 88, w: 18, buy: true },
      ].map((r, i) => (
        <g key={`flow-${i}`}>
          <text x="0" y={r.y + 9} fill="#cbd5e1" fontSize="8" opacity="0.6">
            {r.label}
          </text>
          <rect
            x={r.buy ? 78 : 78 - r.w}
            y={r.y}
            width={r.w}
            height="11"
            rx="2"
            fill={r.buy ? '#10b981' : '#ef4444'}
            opacity={r.buy ? 0.4 : 0.38}
          />
        </g>
      ))}
    </g>

    {/* Sector heatmap treemap */}
    <g transform="translate(212, 56)">
      <text
        x="0"
        y="8"
        fill="#7dd3fc"
        fontSize="8"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.7"
      >
        SECTOR HEATMAP
      </text>
      {[
        { x: 0, y: 14, w: 52, h: 40, up: true, o: 0.34 },
        { x: 54, y: 14, w: 34, h: 24, up: true, o: 0.22 },
        { x: 54, y: 40, w: 34, h: 14, up: false, o: 0.26 },
        { x: 90, y: 14, w: 44, h: 28, up: false, o: 0.32 },
        { x: 90, y: 44, w: 44, h: 10, up: true, o: 0.18 },
        { x: 0, y: 56, w: 30, h: 30, up: false, o: 0.2 },
        { x: 32, y: 56, w: 40, h: 30, up: true, o: 0.4 },
        { x: 74, y: 56, w: 26, h: 16, up: true, o: 0.16 },
        { x: 74, y: 74, w: 26, h: 12, up: false, o: 0.22 },
        { x: 102, y: 56, w: 32, h: 30, up: false, o: 0.3 },
      ].map((t, i) => (
        <rect
          key={`tile-${i}`}
          x={t.x}
          y={t.y}
          width={t.w}
          height={t.h}
          rx="1.5"
          fill={t.up ? '#10b981' : '#ef4444'}
          opacity={t.o}
          stroke={t.up ? '#10b981' : '#ef4444'}
          strokeWidth="0.4"
          strokeOpacity="0.4"
        />
      ))}
    </g>

    {/* Market regime gauge */}
    <g transform="translate(440, 60)">
      <path
        d="M 8 56 A 44 44 0 0 1 24 22"
        fill="none"
        stroke="#ef4444"
        strokeWidth="5"
        opacity="0.3"
        strokeLinecap="round"
      />
      <path
        d="M 24 22 A 44 44 0 0 1 64 22"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="5"
        opacity="0.3"
        strokeLinecap="round"
      />
      <path
        d="M 64 22 A 44 44 0 0 1 80 56"
        fill="none"
        stroke="#10b981"
        strokeWidth="5"
        opacity="0.4"
        strokeLinecap="round"
      />
      {/* needle to risk-on */}
      <line
        x1="44"
        y1="56"
        x2="66"
        y2="28"
        stroke="#34d399"
        strokeWidth="1.5"
        opacity="0.85"
        strokeLinecap="round"
      />
      <circle cx="44" cy="56" r="3" fill="#34d399" opacity="0.85" />
      <text
        x="44"
        y="72"
        textAnchor="middle"
        fill="#34d399"
        fontSize="8"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.8"
      >
        RISK-ON
      </text>
      <text
        x="44"
        y="12"
        textAnchor="middle"
        fill="#7dd3fc"
        fontSize="7"
        fontFamily="monospace"
        opacity="0.55"
      >
        REGIME
      </text>
    </g>

    {/* Consensus ranking list */}
    <g transform="translate(212, 150)">
      <text
        x="0"
        y="8"
        fill="#e2a84b"
        fontSize="8"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.7"
      >
        CONSENSUS · 爆量榜
      </text>
      {[
        { y: 16, code: '2330', tag: '3-way' },
        { y: 32, code: '2454', tag: 'new' },
        { y: 48, code: '3231', tag: '2.4× vol' },
      ].map((r, i) => (
        <g key={`cons-${i}`}>
          <circle cx="6" cy={r.y + 5} r="2.5" fill="#10b981" opacity="0.6" />
          <text x="16" y={r.y + 8} fill="#cbd5e1" fontSize="8" fontFamily="monospace" opacity="0.7">
            {r.code}
          </text>
          <text x="56" y={r.y + 8} fill="#34d399" fontSize="7" fontFamily="monospace" opacity="0.5">
            {r.tag}
          </text>
          <path
            d={`M 110 ${r.y + 7} L 114 ${r.y + 2} L 118 ${r.y + 7} Z`}
            fill="#34d399"
            opacity="0.6"
          />
        </g>
      ))}
    </g>

    {/* ADL / breadth line across bottom */}
    <g transform="translate(380, 150)">
      <text x="0" y="8" fill="#7dd3fc" fontSize="7" fontFamily="monospace" opacity="0.5">
        BREADTH · ADL
      </text>
      <polyline
        points="0,52 18,46 36,48 54,38 72,40 90,28 108,30 126,20 144,24"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1.5"
        opacity="0.45"
      />
      <line x1="0" y1="58" x2="150" y2="58" stroke="#475569" strokeWidth="0.5" opacity="0.3" />
    </g>

    {/* Floating particles */}
    <g opacity="0.22">
      <circle cx="370" cy="30" r="1.4" fill="#10b981" />
      <circle cx="200" cy="40" r="1.1" fill="#22d3ee" />
      <circle cx="528" cy="150" r="1.3" fill="#7dd3fc" />
    </g>
  </svg>
);

export const ClaudeTaskTrackerIllustration: React.FC = () => (
  <svg viewBox="0 0 560 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="oss-g6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.07" />
      </linearGradient>
    </defs>
    <rect width="560" height="220" fill="url(#oss-g6)" />

    {/* VSCode-style window shell */}
    <rect
      x="22"
      y="20"
      width="516"
      height="180"
      rx="8"
      fill="#0b1020"
      opacity="0.72"
      stroke="#6366f1"
      strokeWidth="0.6"
      strokeOpacity="0.25"
    />

    {/* Activity bar */}
    <rect x="22" y="20" width="26" height="180" rx="8" fill="#11162b" opacity="0.7" />
    <rect x="22" y="58" width="3" height="20" rx="1.5" fill="#818cf8" opacity="0.9" />
    {/* tracker icon (active) */}
    <path d="M 35 64 l 4 -6 l 4 6 l -4 2 z" fill="#818cf8" opacity="0.9" />
    <circle cx="35" cy="96" r="3.5" fill="#475569" opacity="0.5" />
    <rect x="31.5" y="120" width="7" height="7" rx="1" fill="#475569" opacity="0.5" />
    <circle cx="35" cy="150" r="3.5" fill="#475569" opacity="0.5" />

    {/* Tree panel header */}
    <text
      x="58"
      y="40"
      fill="#a5b4fc"
      fontSize="8"
      fontWeight="700"
      fontFamily="monospace"
      opacity="0.75"
    >
      TASKS &amp; SUBAGENTS
    </text>
    <line x1="56" y1="46" x2="316" y2="46" stroke="#6366f1" strokeWidth="0.5" opacity="0.2" />

    {/* Tree rows */}
    <g fontFamily="monospace" fontSize="8">
      {/* repo */}
      <text x="58" y="62" fill="#cbd5e1" opacity="0.8">
        ▾ portfolio
      </text>
      <text x="118" y="62" fill="#64748b" opacity="0.5">
        (this window)
      </text>
      {/* worktree */}
      <text x="68" y="78" fill="#94a3b8" opacity="0.7">
        ▾ .worktrees/feat-oss
      </text>
      {/* feature: active */}
      <circle cx="84" cy="90" r="3" fill="#60a5fa" opacity="0.9" />
      <text x="92" y="93" fill="#cbd5e1" opacity="0.8">
        add-opensource
      </text>
      <text x="186" y="93" fill="#60a5fa" opacity="0.7">
        ▰▰▰▱
      </text>
      <text x="220" y="93" fill="#64748b" opacity="0.6">
        3/4
      </text>
      {/* feature: done */}
      <path
        d="M 81 104 l 2.5 2.5 l 5 -5.5"
        fill="none"
        stroke="#34d399"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <text x="92" y="109" fill="#cbd5e1" opacity="0.7">
        rename-cards
      </text>
      <text x="186" y="109" fill="#34d399" opacity="0.7">
        ▰▰▰▰
      </text>
      <text x="220" y="109" fill="#64748b" opacity="0.6">
        4/4
      </text>
      {/* feature: idle */}
      <circle cx="84" cy="120" r="3" fill="none" stroke="#94a3b8" strokeWidth="1" opacity="0.5" />
      <text x="92" y="123" fill="#94a3b8" opacity="0.6">
        seo-meta
      </text>
      <text x="186" y="123" fill="#94a3b8" opacity="0.4">
        ▱▱▱▱
      </text>
      <text x="220" y="123" fill="#64748b" opacity="0.5">
        0/3
      </text>
    </g>

    {/* Subagent convergence graph */}
    <g transform="translate(360, 56)">
      <text
        x="0"
        y="6"
        fill="#a5b4fc"
        fontSize="7"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.65"
      >
        SUBAGENT CONVERGENCE
      </text>
      {/* source subagent nodes */}
      {[18, 40, 62, 84].map((y, i) => (
        <g key={`sa-${i}`}>
          <circle
            cx="14"
            cy={y}
            r="5"
            fill="#6366f1"
            opacity={0.3 + i * 0.04}
            stroke="#818cf8"
            strokeWidth="0.6"
            strokeOpacity="0.5"
          />
          <line x1="20" y1={y} x2="120" y2="51" stroke="#818cf8" strokeWidth="0.7" opacity="0.28" />
        </g>
      ))}
      {/* converged node */}
      <circle
        cx="128"
        cy="51"
        r="9"
        fill="#22d3ee"
        opacity="0.25"
        stroke="#22d3ee"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      <path
        d="M 123 51 l 3 3 l 6 -7"
        fill="none"
        stroke="#67e8f9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <text
        x="128"
        y="76"
        textAnchor="middle"
        fill="#67e8f9"
        fontSize="7"
        fontFamily="monospace"
        opacity="0.6"
      >
        converged
      </text>
    </g>

    {/* Status bar */}
    <rect x="22" y="182" width="516" height="18" rx="0" fill="#11162b" opacity="0.85" />
    <rect x="22" y="194" width="516" height="6" fill="transparent" />
    <path d="M 36 188 l 4 -6 l 4 6 l -4 2 z" fill="#60a5fa" opacity="0.9" />
    <text x="48" y="194" fill="#93c5fd" fontSize="8" fontFamily="monospace" opacity="0.8">
      portfolio · active
    </text>
    <text x="170" y="194" fill="#64748b" fontSize="8" fontFamily="monospace" opacity="0.6">
      3/4 todos · 1 subagent
    </text>
    <text x="470" y="194" fill="#34d399" fontSize="8" fontFamily="monospace" opacity="0.6">
      events.jsonl
    </text>
  </svg>
);

export const PortfolioIllustration: React.FC = () => (
  <svg viewBox="0 0 560 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="oss-g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2a84b" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    <rect width="560" height="220" fill="url(#oss-g2)" />
    {/* Browser chrome */}
    <rect
      x="80"
      y="25"
      width="400"
      height="170"
      rx="10"
      fill="#0f172a"
      opacity="0.6"
      stroke="#e2a84b"
      strokeWidth="1"
      strokeOpacity="0.15"
    />
    <circle cx="102" cy="42" r="4" fill="#ef4444" opacity="0.4" />
    <circle cx="116" cy="42" r="4" fill="#f59e0b" opacity="0.4" />
    <circle cx="130" cy="42" r="4" fill="#10b981" opacity="0.4" />
    <rect x="160" y="36" width="200" height="12" rx="6" fill="white" opacity="0.04" />
    {/* Nav bar */}
    <rect x="80" y="52" width="400" height="1" fill="#e2a84b" opacity="0.08" />
    <text x="100" y="65" fill="#e2a84b" fontSize="7" fontFamily="monospace" opacity="0.3">
      &lt;chenghung /&gt;
    </text>
    {/* Content skeleton */}
    <rect x="120" y="80" width="160" height="12" rx="2" fill="white" opacity="0.06" />
    <rect x="120" y="100" width="240" height="6" rx="2" fill="white" opacity="0.03" />
    <rect x="120" y="112" width="200" height="6" rx="2" fill="white" opacity="0.03" />
    {/* Cards */}
    <rect
      x="120"
      y="130"
      width="100"
      height="50"
      rx="6"
      fill="#e2a84b"
      opacity="0.06"
      stroke="#e2a84b"
      strokeWidth="0.5"
      strokeOpacity="0.1"
    />
    <rect
      x="230"
      y="130"
      width="100"
      height="50"
      rx="6"
      fill="#22d3ee"
      opacity="0.06"
      stroke="#22d3ee"
      strokeWidth="0.5"
      strokeOpacity="0.1"
    />
    <rect
      x="340"
      y="130"
      width="100"
      height="50"
      rx="6"
      fill="#10b981"
      opacity="0.06"
      stroke="#10b981"
      strokeWidth="0.5"
      strokeOpacity="0.1"
    />
    {/* Card labels */}
    <rect x="130" y="140" width="40" height="4" rx="1" fill="#e2a84b" opacity="0.15" />
    <rect x="130" y="150" width="70" height="3" rx="1" fill="white" opacity="0.04" />
    <rect x="130" y="158" width="55" height="3" rx="1" fill="white" opacity="0.03" />
    <rect x="240" y="140" width="45" height="4" rx="1" fill="#22d3ee" opacity="0.15" />
    <rect x="240" y="150" width="65" height="3" rx="1" fill="white" opacity="0.04" />
    <rect x="240" y="158" width="50" height="3" rx="1" fill="white" opacity="0.03" />
    <rect x="350" y="140" width="35" height="4" rx="1" fill="#10b981" opacity="0.15" />
    <rect x="350" y="150" width="60" height="3" rx="1" fill="white" opacity="0.04" />
    <rect x="350" y="158" width="70" height="3" rx="1" fill="white" opacity="0.03" />
    {/* Code tag floating */}
    <text
      x="420"
      y="95"
      fill="#e2a84b"
      fontSize="22"
      fontWeight="800"
      opacity="0.06"
      fontFamily="monospace"
    >
      &lt;/&gt;
    </text>
  </svg>
);

export const SkillPlatformIllustration: React.FC = () => (
  <svg viewBox="0 0 560 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="oss-g3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="oss-g3-accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <rect width="560" height="220" fill="url(#oss-g3)" />

    {/* Chat conversation bubble (AI tutor) - left */}
    <g transform="translate(30, 30)">
      {/* AI avatar */}
      <circle
        cx="14"
        cy="12"
        r="10"
        fill="#8b5cf6"
        opacity="0.25"
        stroke="#8b5cf6"
        strokeWidth="1"
        strokeOpacity="0.5"
      />
      <text
        x="14"
        y="16"
        textAnchor="middle"
        fill="#8b5cf6"
        fontSize="10"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.9"
      >
        AI
      </text>
      {/* Socratic question bubble */}
      <rect
        x="32"
        y="2"
        width="190"
        height="38"
        rx="10"
        fill="#8b5cf6"
        opacity="0.12"
        stroke="#8b5cf6"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />
      <text x="42" y="17" fill="#c4b5fd" fontSize="8" fontFamily="monospace" opacity="0.7">
        Before we optimize,
      </text>
      <text x="42" y="29" fill="#c4b5fd" fontSize="8" fontFamily="monospace" opacity="0.7">
        what's the bottleneck?
      </text>
    </g>

    {/* User reply bubble - right */}
    <g transform="translate(220, 75)">
      <rect
        x="0"
        y="0"
        width="180"
        height="30"
        rx="10"
        fill="#22d3ee"
        opacity="0.1"
        stroke="#22d3ee"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />
      <text x="10" y="14" fill="#67e8f9" fontSize="8" fontFamily="monospace" opacity="0.7">
        Maybe nested loops?
      </text>
      <text x="10" y="25" fill="#67e8f9" fontSize="8" fontFamily="monospace" opacity="0.5">
        O(n²) lookup...
      </text>
      {/* User avatar */}
      <circle
        cx="195"
        cy="15"
        r="9"
        fill="#22d3ee"
        opacity="0.2"
        stroke="#22d3ee"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <path d="M 190 15 a 5 5 0 0 1 10 0" fill="#22d3ee" opacity="0.5" />
      <circle cx="195" cy="12" r="3" fill="#22d3ee" opacity="0.5" />
    </g>

    {/* Code editor (Monaco-style) embedded */}
    <g transform="translate(30, 125)">
      <rect
        x="0"
        y="0"
        width="360"
        height="80"
        rx="6"
        fill="#0b1020"
        opacity="0.85"
        stroke="#8b5cf6"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />
      {/* Window dots */}
      <circle cx="12" cy="12" r="2.5" fill="#ef4444" opacity="0.4" />
      <circle cx="22" cy="12" r="2.5" fill="#f59e0b" opacity="0.4" />
      <circle cx="32" cy="12" r="2.5" fill="#10b981" opacity="0.4" />
      {/* Language tab */}
      <text x="300" y="15" fill="#22d3ee" fontSize="8" fontFamily="monospace" opacity="0.4">
        PYTHON
      </text>
      {/* Line numbers */}
      <text x="8" y="34" fill="#64748b" fontSize="7" fontFamily="monospace" opacity="0.5">
        1
      </text>
      <text x="8" y="46" fill="#64748b" fontSize="7" fontFamily="monospace" opacity="0.5">
        2
      </text>
      <text x="8" y="58" fill="#64748b" fontSize="7" fontFamily="monospace" opacity="0.5">
        3
      </text>
      <text x="8" y="70" fill="#64748b" fontSize="7" fontFamily="monospace" opacity="0.5">
        4
      </text>
      {/* Syntax highlighted code */}
      <text x="22" y="34" fill="#ec4899" fontSize="8" fontFamily="monospace" opacity="0.75">
        def
      </text>
      <text x="40" y="34" fill="#60a5fa" fontSize="8" fontFamily="monospace" opacity="0.75">
        twoSum
      </text>
      <text x="72" y="34" fill="#cbd5e1" fontSize="8" fontFamily="monospace" opacity="0.6">
        (nums, target):
      </text>
      <text x="30" y="46" fill="#ec4899" fontSize="8" fontFamily="monospace" opacity="0.75">
        seen
      </text>
      <text x="55" y="46" fill="#cbd5e1" fontSize="8" fontFamily="monospace" opacity="0.6">
        =
      </text>
      <text x="63" y="46" fill="#fbbf24" fontSize="8" fontFamily="monospace" opacity="0.75">
        {'{}'}
      </text>
      <text x="30" y="58" fill="#ec4899" fontSize="8" fontFamily="monospace" opacity="0.75">
        for
      </text>
      <text x="48" y="58" fill="#cbd5e1" fontSize="8" fontFamily="monospace" opacity="0.6">
        i, n
      </text>
      <text x="72" y="58" fill="#ec4899" fontSize="8" fontFamily="monospace" opacity="0.75">
        in
      </text>
      <text x="86" y="58" fill="#60a5fa" fontSize="8" fontFamily="monospace" opacity="0.75">
        enumerate
      </text>
      <text x="132" y="58" fill="#cbd5e1" fontSize="8" fontFamily="monospace" opacity="0.6">
        (nums):
      </text>
      <text x="38" y="70" fill="#ec4899" fontSize="8" fontFamily="monospace" opacity="0.75">
        if
      </text>
      <text x="50" y="70" fill="#cbd5e1" fontSize="8" fontFamily="monospace" opacity="0.6">
        target - n{' '}
      </text>
      <text x="104" y="70" fill="#ec4899" fontSize="8" fontFamily="monospace" opacity="0.75">
        in
      </text>
      <text x="116" y="70" fill="#cbd5e1" fontSize="8" fontFamily="monospace" opacity="0.6">
        seen:
      </text>
      {/* Cursor blink */}
      <rect x="145" y="64" width="1" height="8" fill="#22d3ee" opacity="0.8" />
    </g>

    {/* Run result badge */}
    <g transform="translate(400, 130)">
      <rect
        x="0"
        y="0"
        width="135"
        height="32"
        rx="6"
        fill="#10b981"
        opacity="0.1"
        stroke="#10b981"
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />
      <circle cx="14" cy="16" r="6" fill="#10b981" opacity="0.2" />
      <path
        d="M 10 16 L 13 19 L 18 13"
        fill="none"
        stroke="#10b981"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <text x="26" y="13" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.7">
        ACCEPTED
      </text>
      <text x="26" y="24" fill="#10b981" fontSize="7" fontFamily="monospace" opacity="0.45">
        O(n) · 44ms
      </text>
    </g>

    {/* Knowledge graph nodes (right side) */}
    <g transform="translate(410, 175)">
      <circle
        cx="0"
        cy="0"
        r="8"
        fill="#ec4899"
        opacity="0.25"
        stroke="#ec4899"
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />
      <circle
        cx="30"
        cy="-5"
        r="6"
        fill="#8b5cf6"
        opacity="0.2"
        stroke="#8b5cf6"
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
      <circle
        cx="55"
        cy="8"
        r="6"
        fill="#22d3ee"
        opacity="0.2"
        stroke="#22d3ee"
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
      <circle
        cx="85"
        cy="-2"
        r="5"
        fill="#10b981"
        opacity="0.2"
        stroke="#10b981"
        strokeWidth="0.8"
        strokeOpacity="0.4"
      />
      <circle
        cx="115"
        cy="6"
        r="5"
        fill="#f59e0b"
        opacity="0.15"
        stroke="#f59e0b"
        strokeWidth="0.8"
        strokeOpacity="0.3"
      />
      <line x1="8" y1="-1" x2="24" y2="-4" stroke="#ec4899" strokeWidth="0.8" opacity="0.3" />
      <line x1="36" y1="-3" x2="50" y2="5" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.3" />
      <line x1="61" y1="6" x2="80" y2="-1" stroke="#22d3ee" strokeWidth="0.8" opacity="0.3" />
      <line x1="90" y1="-1" x2="110" y2="4" stroke="#10b981" strokeWidth="0.8" opacity="0.3" />
    </g>

    {/* SKILL framework label */}
    <g opacity="0.55">
      <rect
        x="405"
        y="30"
        width="130"
        height="62"
        rx="6"
        fill="#0b1020"
        opacity="0.5"
        stroke="#8b5cf6"
        strokeWidth="0.5"
        strokeOpacity="0.25"
      />
      <text
        x="415"
        y="45"
        fill="#a78bfa"
        fontSize="8"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.8"
      >
        SKILL
      </text>
      <text x="415" y="56" fill="#c4b5fd" fontSize="6.5" fontFamily="monospace" opacity="0.55">
        S · Socratic
      </text>
      <text x="415" y="65" fill="#c4b5fd" fontSize="6.5" fontFamily="monospace" opacity="0.55">
        K · Knowledge
      </text>
      <text x="415" y="74" fill="#c4b5fd" fontSize="6.5" fontFamily="monospace" opacity="0.55">
        I · Iterative
      </text>
      <text x="415" y="83" fill="#c4b5fd" fontSize="6.5" fontFamily="monospace" opacity="0.55">
        L · Logic / Evolve
      </text>
    </g>

    {/* Background sparkle */}
    <g opacity="0.2">
      <circle cx="250" cy="18" r="1.5" fill="#ec4899" />
      <circle cx="460" cy="108" r="1.2" fill="#8b5cf6" />
      <circle cx="20" cy="205" r="1.2" fill="#22d3ee" />
    </g>
  </svg>
);

export const LumeSpecIllustration: React.FC = () => (
  <svg viewBox="0 0 560 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="oss-g4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.22" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.08" />
      </linearGradient>
      <linearGradient id="oss-g4-screen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1e293b" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
      </linearGradient>
      <radialGradient id="oss-g4-spot" cx="50%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="560" height="220" fill="url(#oss-g4)" />
    <rect width="560" height="220" fill="url(#oss-g4-spot)" />

    {/* URL input bar (top left) */}
    <g transform="translate(30, 22)">
      <rect
        x="0"
        y="0"
        width="180"
        height="22"
        rx="11"
        fill="#0b1020"
        opacity="0.75"
        stroke="#f43f5e"
        strokeWidth="0.5"
        strokeOpacity="0.35"
      />
      <circle cx="12" cy="11" r="3" fill="#f43f5e" opacity="0.55" />
      <text x="22" y="14" fill="#fb7185" fontSize="8" fontFamily="monospace" opacity="0.75">
        https://your-saas.com
      </text>
      <rect x="152" y="4" width="22" height="14" rx="3" fill="#f43f5e" opacity="0.4" />
      <path
        d="M 159 11 L 165 11 M 162 8 L 165 11 L 162 14"
        stroke="#fff"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </g>

    {/* Pipeline arrows */}
    <g opacity="0.5">
      <path d="M 215 33 L 240 33" stroke="#f43f5e" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M 238 30 L 243 33 L 238 36" stroke="#f43f5e" strokeWidth="1" fill="none" />
    </g>

    {/* Three pipeline modules: Crawler → Storyboard → Renderer */}
    <g transform="translate(245, 18)">
      {/* Crawler */}
      <rect
        x="0"
        y="0"
        width="90"
        height="30"
        rx="6"
        fill="#8b5cf6"
        opacity="0.12"
        stroke="#8b5cf6"
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
      {/* spider/web icon */}
      <circle cx="12" cy="15" r="5" fill="none" stroke="#c4b5fd" strokeWidth="0.8" opacity="0.75" />
      <path
        d="M 12 10 L 12 20 M 7 15 L 17 15 M 8.5 11.5 L 15.5 18.5 M 15.5 11.5 L 8.5 18.5"
        stroke="#c4b5fd"
        strokeWidth="0.5"
        opacity="0.6"
      />
      <text
        x="22"
        y="13"
        fill="#c4b5fd"
        fontSize="7"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.85"
      >
        CRAWLER
      </text>
      <text x="22" y="23" fill="#c4b5fd" fontSize="6" fontFamily="monospace" opacity="0.55">
        DOM · screenshots
      </text>
      {/* arrow */}
      <path d="M 93 15 L 100 15" stroke="#8b5cf6" strokeWidth="1" opacity="0.5" />
      <path
        d="M 98 13 L 101 15 L 98 17"
        stroke="#8b5cf6"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />

      {/* Storyboard */}
      <rect
        x="103"
        y="0"
        width="90"
        height="30"
        rx="6"
        fill="#22d3ee"
        opacity="0.12"
        stroke="#22d3ee"
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
      {/* storyboard frames icon */}
      <rect
        x="110"
        y="11"
        width="5"
        height="8"
        rx="0.5"
        fill="none"
        stroke="#67e8f9"
        strokeWidth="0.7"
        opacity="0.7"
      />
      <rect
        x="116.5"
        y="11"
        width="5"
        height="8"
        rx="0.5"
        fill="#67e8f9"
        opacity="0.25"
        stroke="#67e8f9"
        strokeWidth="0.7"
        strokeOpacity="0.7"
      />
      <rect
        x="123"
        y="11"
        width="5"
        height="8"
        rx="0.5"
        fill="none"
        stroke="#67e8f9"
        strokeWidth="0.7"
        opacity="0.7"
      />
      <text
        x="132"
        y="13"
        fill="#67e8f9"
        fontSize="7"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.85"
      >
        STORYBOARD
      </text>
      <text x="132" y="23" fill="#67e8f9" fontSize="6" fontFamily="monospace" opacity="0.55">
        LLM · scenes
      </text>
      {/* arrow */}
      <path d="M 196 15 L 203 15" stroke="#22d3ee" strokeWidth="1" opacity="0.5" />
      <path
        d="M 201 13 L 204 15 L 201 17"
        stroke="#22d3ee"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />

      {/* Renderer */}
      <rect
        x="206"
        y="0"
        width="90"
        height="30"
        rx="6"
        fill="#f43f5e"
        opacity="0.12"
        stroke="#f43f5e"
        strokeWidth="0.6"
        strokeOpacity="0.4"
      />
      {/* film strip icon */}
      <rect
        x="213"
        y="9"
        width="14"
        height="12"
        rx="1"
        fill="none"
        stroke="#fb7185"
        strokeWidth="0.8"
        opacity="0.75"
      />
      <rect x="213" y="9" width="14" height="2" fill="#fb7185" opacity="0.5" />
      <rect x="213" y="19" width="14" height="2" fill="#fb7185" opacity="0.5" />
      <text
        x="232"
        y="13"
        fill="#fb7185"
        fontSize="7"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.85"
      >
        RENDERER
      </text>
      <text x="232" y="23" fill="#fb7185" fontSize="6" fontFamily="monospace" opacity="0.55">
        Remotion · MP4
      </text>
    </g>

    {/* MacBook frame with the final video */}
    <g transform="translate(115, 72)">
      {/* MacBook body */}
      <rect
        x="0"
        y="0"
        width="330"
        height="110"
        rx="8"
        fill="#1e293b"
        stroke="#475569"
        strokeWidth="1"
        opacity="0.85"
      />
      {/* bezel */}
      <rect x="6" y="6" width="318" height="92" rx="3" fill="url(#oss-g4-screen)" />
      {/* camera notch */}
      <circle cx="165" cy="10" r="1.2" fill="#0b1020" />
      {/* hinge bar */}
      <rect x="-18" y="108" width="366" height="6" rx="3" fill="#334155" opacity="0.9" />
      <rect x="-18" y="108" width="366" height="2" rx="1" fill="#0f172a" opacity="0.6" />
      {/* base curve */}
      <rect x="145" y="114" width="40" height="3" rx="1.5" fill="#1e293b" opacity="0.8" />

      {/* Screen content: mock webpage preview */}
      {/* top browser bar */}
      <rect x="14" y="14" width="302" height="10" rx="2" fill="#0b1020" opacity="0.7" />
      <circle cx="20" cy="19" r="1.6" fill="#ef4444" opacity="0.45" />
      <circle cx="26" cy="19" r="1.6" fill="#f59e0b" opacity="0.45" />
      <circle cx="32" cy="19" r="1.6" fill="#10b981" opacity="0.45" />
      <rect x="45" y="16" width="260" height="6" rx="3" fill="#ffffff" opacity="0.05" />

      {/* landing hero mock */}
      <rect x="22" y="32" width="150" height="10" rx="2" fill="#f43f5e" opacity="0.4" />
      <rect x="22" y="46" width="220" height="5" rx="1.5" fill="#ffffff" opacity="0.1" />
      <rect x="22" y="55" width="180" height="5" rx="1.5" fill="#ffffff" opacity="0.08" />
      <rect x="22" y="68" width="70" height="18" rx="4" fill="#f43f5e" opacity="0.55" />
      <text
        x="57"
        y="80"
        textAnchor="middle"
        fill="#fff"
        fontSize="7"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.9"
      >
        START →
      </text>

      {/* floating cursor / zoom target */}
      <circle
        cx="70"
        cy="77"
        r="14"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
        opacity="0.6"
        strokeDasharray="2 3"
      />
      <circle
        cx="70"
        cy="77"
        r="22"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="0.6"
        opacity="0.35"
      />
      <path
        d="M 68 72 L 68 83 L 71 80 L 74 86 L 76 85 L 73 79 L 77 78 Z"
        fill="#fff"
        opacity="0.85"
      />

      {/* mock image placeholder right side */}
      <rect
        x="250"
        y="32"
        width="56"
        height="40"
        rx="3"
        fill="#8b5cf6"
        opacity="0.18"
        stroke="#8b5cf6"
        strokeWidth="0.4"
        strokeOpacity="0.35"
      />
      <circle cx="263" cy="45" r="3" fill="#8b5cf6" opacity="0.5" />
      <path
        d="M 255 65 L 265 56 L 274 62 L 285 52 L 300 68 L 255 68 Z"
        fill="#8b5cf6"
        opacity="0.3"
      />

      {/* caption bar (auto captions) */}
      <rect x="65" y="88" width="200" height="8" rx="2" fill="#0b1020" opacity="0.8" />
      <text
        x="165"
        y="94"
        textAnchor="middle"
        fill="#fff"
        fontSize="5.5"
        fontFamily="monospace"
        opacity="0.8"
      >
        “Click to start your free trial”
      </text>
    </g>

    {/* Transport controls below MacBook */}
    <g transform="translate(190, 195)">
      {/* play */}
      <circle
        cx="0"
        cy="0"
        r="7"
        fill="#f43f5e"
        opacity="0.28"
        stroke="#f43f5e"
        strokeWidth="0.8"
        strokeOpacity="0.6"
      />
      <path d="M -2 -3 L -2 3 L 3 0 Z" fill="#fb7185" opacity="0.95" />
      {/* timeline */}
      <rect x="14" y="-2" width="170" height="4" rx="2" fill="#ffffff" opacity="0.08" />
      <rect x="14" y="-2" width="65" height="4" rx="2" fill="#f43f5e" opacity="0.55" />
      <circle cx="79" cy="0" r="3" fill="#fb7185" opacity="0.95" />
      {/* time */}
      <text x="188" y="3" fill="#fb7185" fontSize="7" fontFamily="monospace" opacity="0.65">
        0:18 / 0:60
      </text>
    </g>

    {/* SLA / export badges (right side) */}
    <g transform="translate(465, 22)">
      <rect
        x="0"
        y="0"
        width="70"
        height="26"
        rx="6"
        fill="#10b981"
        opacity="0.12"
        stroke="#10b981"
        strokeWidth="0.5"
        strokeOpacity="0.35"
      />
      <text
        x="35"
        y="12"
        textAnchor="middle"
        fill="#6ee7b7"
        fontSize="7"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.85"
      >
        ~3 MIN
      </text>
      <text
        x="35"
        y="21"
        textAnchor="middle"
        fill="#6ee7b7"
        fontSize="6"
        fontFamily="monospace"
        opacity="0.55"
      >
        HD RENDER
      </text>
    </g>
    <g transform="translate(465, 54)">
      <rect
        x="0"
        y="0"
        width="70"
        height="22"
        rx="6"
        fill="#8b5cf6"
        opacity="0.12"
        stroke="#8b5cf6"
        strokeWidth="0.5"
        strokeOpacity="0.35"
      />
      <text
        x="35"
        y="14"
        textAnchor="middle"
        fill="#c4b5fd"
        fontSize="7"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.85"
      >
        .MP4
      </text>
    </g>
    <g transform="translate(465, 82)">
      <rect
        x="0"
        y="0"
        width="70"
        height="22"
        rx="6"
        fill="#22d3ee"
        opacity="0.12"
        stroke="#22d3ee"
        strokeWidth="0.5"
        strokeOpacity="0.35"
      />
      <text
        x="35"
        y="14"
        textAnchor="middle"
        fill="#67e8f9"
        fontSize="7"
        fontWeight="700"
        fontFamily="monospace"
        opacity="0.85"
      >
        EMBED
      </text>
    </g>

    {/* Subtle floating particles */}
    <g opacity="0.25">
      <circle cx="30" cy="130" r="1.5" fill="#f43f5e" />
      <circle cx="60" cy="180" r="1.1" fill="#8b5cf6" />
      <circle cx="500" cy="200" r="1.3" fill="#22d3ee" />
      <circle cx="520" cy="155" r="1.1" fill="#fb7185" />
    </g>
  </svg>
);
