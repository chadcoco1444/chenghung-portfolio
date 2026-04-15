import React from 'react';
import { OPEN_SOURCE_PROJECTS } from '../constants';

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ExternalLinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
  </svg>
);

const TradingSystemIllustration: React.FC = () => (
  <svg viewBox="0 0 560 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="oss-g1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#e2a84b" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    <rect width="560" height="220" fill="url(#oss-g1)" />
    {/* Candlestick chart */}
    {[
      { x: 60, o: 140, c: 100, h: 85, l: 155, up: true },
      { x: 85, o: 110, c: 130, h: 95, l: 145, up: false },
      { x: 110, o: 125, c: 95, h: 80, l: 140, up: true },
      { x: 135, o: 100, c: 80, h: 65, l: 115, up: true },
      { x: 160, o: 85, c: 105, h: 70, l: 120, up: false },
      { x: 185, o: 100, c: 75, h: 60, l: 115, up: true },
      { x: 210, o: 80, c: 60, h: 45, l: 95, up: true },
      { x: 235, o: 65, c: 85, h: 50, l: 100, up: false },
      { x: 260, o: 80, c: 55, h: 40, l: 95, up: true },
      { x: 285, o: 60, c: 75, h: 45, l: 90, up: false },
      { x: 310, o: 70, c: 50, h: 35, l: 85, up: true },
      { x: 335, o: 55, c: 70, h: 40, l: 85, up: false },
    ].map((c, i) => (
      <React.Fragment key={`candle-${i}`}>
        <line x1={c.x} y1={c.h} x2={c.x} y2={c.l} stroke={c.up ? '#10b981' : '#ef4444'} strokeWidth="1" opacity="0.5" />
        <rect x={c.x - 8} y={Math.min(c.o, c.c)} width="16" height={Math.abs(c.o - c.c) || 2} rx="1" fill={c.up ? '#10b981' : '#ef4444'} opacity={c.up ? 0.35 : 0.3} />
      </React.Fragment>
    ))}
    {/* EMA lines */}
    <polyline points="60,130 85,118 110,108 135,92 160,95 185,88 210,72 235,76 260,68 285,70 310,58 335,62" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.4" />
    <polyline points="60,138 85,128 110,118 135,105 160,108 185,100 210,88 235,90 260,82 285,85 310,75 335,78" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
    {/* Strategy signals */}
    <g opacity="0.5">
      <polygon points="135,150 130,160 140,160" fill="#10b981" />
      <polygon points="210,90 205,100 215,100" fill="#10b981" />
      <polygon points="310,80 305,90 315,90" fill="#10b981" />
    </g>
    {/* Dashboard panel */}
    <rect x="380" y="25" width="155" height="170" rx="8" fill="#0f172a" opacity="0.6" stroke="#10b981" strokeWidth="1" strokeOpacity="0.2" />
    <text x="400" y="50" fill="#10b981" fontSize="9" fontFamily="monospace" opacity="0.6">SCANNER</text>
    <rect x="395" y="60" width="60" height="18" rx="3" fill="#10b981" opacity="0.1" />
    <text x="405" y="73" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.5">TREND</text>
    <rect x="395" y="84" width="60" height="18" rx="3" fill="#3b82f6" opacity="0.1" />
    <text x="405" y="97" fill="#3b82f6" fontSize="8" fontFamily="monospace" opacity="0.5">ICT</text>
    <rect x="395" y="108" width="60" height="18" rx="3" fill="#e2a84b" opacity="0.1" />
    <text x="405" y="121" fill="#e2a84b" fontSize="8" fontFamily="monospace" opacity="0.5">FUND</text>
    {/* Stats */}
    <text x="470" y="73" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.4">1800+</text>
    <text x="470" y="97" fill="#3b82f6" fontSize="8" fontFamily="monospace" opacity="0.4">7 SIG</text>
    <text x="470" y="121" fill="#e2a84b" fontSize="8" fontFamily="monospace" opacity="0.4">5 SIG</text>
    {/* Telegram icon */}
    <g transform="translate(425, 155)" opacity="0.3">
      <path d="M0 8L3 14L5 9L14 2L0 8Z" fill="#22d3ee" />
      <path d="M3 14L4 10L5 9L3 14Z" fill="#0ea5e9" />
    </g>
    <text x="445" y="163" fill="#22d3ee" fontSize="8" fontFamily="monospace" opacity="0.3">BOT</text>
    {/* Volume bars */}
    {[60, 85, 110, 135, 160, 185, 210, 235, 260, 285, 310, 335].map((x, i) => (
      <rect key={`vol-${i}`} x={x - 6} y={195 - (10 + Math.random() * 15)} width="12" height={10 + Math.random() * 15} rx="1" fill="#e2a84b" opacity={0.08 + Math.random() * 0.08} />
    ))}
    <text x="60" y="210" fill="#e2a84b" fontSize="8" fontFamily="monospace" opacity="0.15">VOL</text>
  </svg>
);

const PortfolioIllustration: React.FC = () => (
  <svg viewBox="0 0 560 220" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="oss-g2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e2a84b" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.08" />
      </linearGradient>
    </defs>
    <rect width="560" height="220" fill="url(#oss-g2)" />
    {/* Browser chrome */}
    <rect x="80" y="25" width="400" height="170" rx="10" fill="#0f172a" opacity="0.6" stroke="#e2a84b" strokeWidth="1" strokeOpacity="0.15" />
    <circle cx="102" cy="42" r="4" fill="#ef4444" opacity="0.4" />
    <circle cx="116" cy="42" r="4" fill="#f59e0b" opacity="0.4" />
    <circle cx="130" cy="42" r="4" fill="#10b981" opacity="0.4" />
    <rect x="160" y="36" width="200" height="12" rx="6" fill="white" opacity="0.04" />
    {/* Nav bar */}
    <rect x="80" y="52" width="400" height="1" fill="#e2a84b" opacity="0.08" />
    <text x="100" y="65" fill="#e2a84b" fontSize="7" fontFamily="monospace" opacity="0.3">&lt;chenghung /&gt;</text>
    {/* Content skeleton */}
    <rect x="120" y="80" width="160" height="12" rx="2" fill="white" opacity="0.06" />
    <rect x="120" y="100" width="240" height="6" rx="2" fill="white" opacity="0.03" />
    <rect x="120" y="112" width="200" height="6" rx="2" fill="white" opacity="0.03" />
    {/* Cards */}
    <rect x="120" y="130" width="100" height="50" rx="6" fill="#e2a84b" opacity="0.06" stroke="#e2a84b" strokeWidth="0.5" strokeOpacity="0.1" />
    <rect x="230" y="130" width="100" height="50" rx="6" fill="#22d3ee" opacity="0.06" stroke="#22d3ee" strokeWidth="0.5" strokeOpacity="0.1" />
    <rect x="340" y="130" width="100" height="50" rx="6" fill="#10b981" opacity="0.06" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.1" />
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
    <text x="420" y="95" fill="#e2a84b" fontSize="22" fontWeight="800" opacity="0.06" fontFamily="monospace">&lt;/&gt;</text>
  </svg>
);

const OpenSource: React.FC = () => {
  return (
    <section id="opensource" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <div className="section-label reveal">Open Source</div>
          <h2 className="text-4xl md:text-6xl font-black font-display mb-4 tracking-tighter reveal">
            GitHub Projects
          </h2>
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest reveal">
            Side projects built with passion — from stock analysis to web design
          </p>
        </div>

        <div className="flex flex-col gap-8 stagger-children">
          {OPEN_SOURCE_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden group card-hover reveal"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Illustration */}
                <div className="relative lg:w-[45%] h-56 lg:h-auto overflow-hidden flex-shrink-0">
                  {project.id === 1 ? <TradingSystemIllustration /> : <PortfolioIllustration />}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/80 hidden lg:block"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent lg:hidden"></div>
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold font-display group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <GitHubIcon className="w-5 h-5" />
                    </a>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="w-1 h-1 rounded-full bg-amber-400/60 mt-2 flex-shrink-0"></span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack + link */}
                  <div className="flex flex-wrap items-center gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-white/5 rounded-md text-[10px] font-mono text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-1.5 text-xs font-mono text-amber-400/70 hover:text-amber-400 transition-colors group/link"
                    >
                      View Source
                      <ExternalLinkIcon className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
