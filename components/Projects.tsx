import React from 'react';
import { PROJECTS } from '../constants';

const ProjectIllustration: React.FC<{ id: number }> = ({ id }) => {
  switch (id) {
    case 1: // NTN & 5G RedCap Cell Selection
      return (
        <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#g1a)" />
          {/* Earth curve */}
          <ellipse cx="200" cy="320" rx="260" ry="160" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
          <ellipse cx="200" cy="320" rx="260" ry="160" fill="#1e3a5f" opacity="0.15" />
          {/* Cell tower */}
          <line x1="120" y1="180" x2="120" y2="100" stroke="#60a5fa" strokeWidth="2" />
          <line x1="110" y1="120" x2="130" y2="120" stroke="#60a5fa" strokeWidth="2" />
          <line x1="105" y1="140" x2="135" y2="140" stroke="#60a5fa" strokeWidth="2" />
          {/* Signal waves from tower */}
          <path d="M 135 105 Q 155 95 145 80" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.6" />
          <path d="M 140 105 Q 165 90 155 70" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
          <path d="M 145 105 Q 175 85 165 60" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.2" />
          {/* Satellite */}
          <g transform="translate(280, 40)">
            <rect x="-8" y="-4" width="16" height="8" rx="2" fill="#60a5fa" opacity="0.8" />
            <rect x="-30" y="-2" width="20" height="4" rx="1" fill="#3b82f6" opacity="0.6" />
            <rect x="10" y="-2" width="20" height="4" rx="1" fill="#3b82f6" opacity="0.6" />
          </g>
          {/* Satellite beam */}
          <line x1="280" y1="48" x2="200" y2="155" stroke="#60a5fa" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
          <line x1="280" y1="48" x2="240" y2="155" stroke="#60a5fa" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
          {/* 5G label */}
          <text x="200" y="75" textAnchor="middle" fill="#60a5fa" fontSize="28" fontWeight="900" opacity="0.15" fontFamily="monospace">5G NTN</text>
          {/* Signal dots */}
          <circle cx="180" cy="155" r="3" fill="#3b82f6" opacity="0.5" />
          <circle cx="220" cy="160" r="2" fill="#60a5fa" opacity="0.4" />
          <circle cx="260" cy="150" r="2.5" fill="#3b82f6" opacity="0.3" />
        </svg>
      );
    case 2: // A-GPS/LPP Positioning
      return (
        <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g2a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#g2a)" />
          {/* Grid lines (map) */}
          {[60, 120, 180, 240, 300, 360].map(x => (
            <line key={`vl${x}`} x1={x} y1="0" x2={x} y2="200" stroke="#10b981" strokeWidth="0.5" opacity="0.1" />
          ))}
          {[40, 80, 120, 160].map(y => (
            <line key={`hl${y}`} x1="0" y1={y} x2="400" y2={y} stroke="#10b981" strokeWidth="0.5" opacity="0.1" />
          ))}
          {/* Location pin */}
          <g transform="translate(200, 90)">
            <path d="M 0 -35 C -20 -35 -28 -18 -28 -8 C -28 12 0 35 0 35 C 0 35 28 12 28 -8 C 28 -18 20 -35 0 -35 Z" fill="#3b82f6" opacity="0.3" stroke="#60a5fa" strokeWidth="1.5" />
            <circle cx="0" cy="-10" r="10" fill="none" stroke="#60a5fa" strokeWidth="2" />
            <circle cx="0" cy="-10" r="4" fill="#60a5fa" opacity="0.8" />
          </g>
          {/* Satellite signals */}
          <circle cx="200" cy="80" r="50" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.2" strokeDasharray="3 6" />
          <circle cx="200" cy="80" r="80" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.15" strokeDasharray="3 6" />
          <circle cx="200" cy="80" r="110" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.1" strokeDasharray="3 6" />
          {/* Satellites */}
          <circle cx="100" cy="30" r="4" fill="#10b981" opacity="0.6" />
          <circle cx="310" cy="25" r="4" fill="#10b981" opacity="0.6" />
          <circle cx="330" cy="140" r="4" fill="#10b981" opacity="0.6" />
          {/* Connection lines */}
          <line x1="100" y1="30" x2="200" y2="80" stroke="#10b981" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 4" />
          <line x1="310" y1="25" x2="200" y2="80" stroke="#10b981" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 4" />
          <line x1="330" y1="140" x2="200" y2="80" stroke="#10b981" strokeWidth="0.8" opacity="0.2" strokeDasharray="4 4" />
          {/* Coordinates */}
          <text x="30" y="185" fill="#10b981" fontSize="10" opacity="0.3" fontFamily="monospace">25.0330°N 121.5654°E</text>
        </svg>
      );
    case 3: // Modem Footprint Optimization
      return (
        <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g3a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#g3a)" />
          {/* Memory blocks - before (large) */}
          {[0, 1, 2, 3, 4].map(i => (
            <rect key={`mb${i}`} x={60 + i * 30} y={50} width={24} height={80 - i * 10} rx="3" fill="#f59e0b" opacity={0.15 + i * 0.05} stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />
          ))}
          {/* Arrow */}
          <path d="M 220 90 L 260 90 L 255 82 M 260 90 L 255 98" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.5" />
          {/* Memory blocks - after (small, optimized) */}
          {[0, 1, 2, 3, 4].map(i => (
            <rect key={`ma${i}`} x={280 + i * 18} y={75} width={14} height={30 - i * 3} rx="2" fill="#3b82f6" opacity={0.2 + i * 0.06} stroke="#3b82f6" strokeWidth="0.5" strokeOpacity="0.3" />
          ))}
          {/* Percentage label */}
          <text x="310" y="55" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="700" opacity="0.4" fontFamily="monospace">-99.2%</text>
          {/* Chip outline */}
          <rect x="130" y="140" width="140" height="40" rx="6" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.2" />
          {[0, 1, 2, 3, 4, 5].map(i => (
            <React.Fragment key={`pin${i}`}>
              <line x1={150 + i * 20} y1="140" x2={150 + i * 20} y2="132" stroke="#f59e0b" strokeWidth="1.5" opacity="0.2" />
              <line x1={150 + i * 20} y1="180" x2={150 + i * 20} y2="188" stroke="#f59e0b" strokeWidth="1.5" opacity="0.2" />
            </React.Fragment>
          ))}
          <text x="200" y="165" textAnchor="middle" fill="#f59e0b" fontSize="11" opacity="0.3" fontFamily="monospace">RRC MODULE</text>
        </svg>
      );
    case 4: // Unit Testing & Automation
      return (
        <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g4a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#g4a)" />
          {/* Terminal window */}
          <rect x="60" y="25" width="280" height="150" rx="10" fill="#0f172a" opacity="0.6" stroke="#8b5cf6" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="82" cy="42" r="4" fill="#ef4444" opacity="0.5" />
          <circle cx="96" cy="42" r="4" fill="#f59e0b" opacity="0.5" />
          <circle cx="110" cy="42" r="4" fill="#10b981" opacity="0.5" />
          {/* Test output lines */}
          <text x="80" y="72" fill="#10b981" fontSize="11" opacity="0.7" fontFamily="monospace">PASS  test_rrc_handler</text>
          <text x="80" y="90" fill="#10b981" fontSize="11" opacity="0.7" fontFamily="monospace">PASS  test_nas_decode</text>
          <text x="80" y="108" fill="#10b981" fontSize="11" opacity="0.7" fontFamily="monospace">PASS  test_cell_select</text>
          <text x="80" y="126" fill="#10b981" fontSize="11" opacity="0.7" fontFamily="monospace">PASS  test_lpp_cp_up</text>
          <text x="80" y="152" fill="#8b5cf6" fontSize="11" opacity="0.6" fontFamily="monospace">Tests: 4 passed, 4 total</text>
          {/* Checkmark */}
          <g transform="translate(355, 100)">
            <circle cx="0" cy="0" r="18" fill="#10b981" opacity="0.15" />
            <path d="M -8 0 L -3 5 L 8 -6" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          </g>
        </svg>
      );
    case 5: // Wireless Charger 15W
      return (
        <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g5a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#eab308" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#g5a)" />
          {/* Charging pad */}
          <ellipse cx="200" cy="150" rx="80" ry="20" fill="#f97316" opacity="0.1" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3" />
          <ellipse cx="200" cy="145" rx="80" ry="20" fill="#0f172a" opacity="0.4" stroke="#f97316" strokeWidth="1" strokeOpacity="0.2" />
          {/* Phone on pad */}
          <rect x="175" y="80" width="50" height="70" rx="8" fill="#1e293b" stroke="#f97316" strokeWidth="1" strokeOpacity="0.4" />
          <rect x="182" y="88" width="36" height="48" rx="2" fill="#f97316" opacity="0.05" />
          {/* Wireless charging waves */}
          <path d="M 170 120 Q 160 100 170 80" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.4" />
          <path d="M 160 125 Q 145 100 160 75" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.25" />
          <path d="M 230 120 Q 240 100 230 80" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.4" />
          <path d="M 240 125 Q 255 100 240 75" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.25" />
          {/* Lightning bolt */}
          <path d="M 197 95 L 205 95 L 200 108 L 208 108 L 195 128 L 200 112 L 193 112 Z" fill="#eab308" opacity="0.5" />
          {/* 15W label */}
          <text x="320" y="50" textAnchor="middle" fill="#f97316" fontSize="24" fontWeight="900" opacity="0.15" fontFamily="monospace">15W</text>
          {/* Temperature icon */}
          <g transform="translate(80, 60)">
            <rect x="-3" y="0" width="6" height="30" rx="3" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
            <circle cx="0" cy="35" r="8" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.3" />
            <rect x="-1.5" y="10" width="3" height="20" rx="1.5" fill="#ef4444" opacity="0.3" />
            <circle cx="0" cy="35" r="5" fill="#ef4444" opacity="0.2" />
          </g>
          <text x="80" y="110" textAnchor="middle" fill="#ef4444" fontSize="8" opacity="0.3" fontFamily="monospace">FOD</text>
        </svg>
      );
    case 6: // GPU-Accelerated NIDS
      return (
        <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g6a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#g6a)" />
          {/* GPU chip */}
          <rect x="130" y="40" width="140" height="120" rx="8" fill="#1e293b" opacity="0.6" stroke="#ec4899" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* GPU cores grid */}
          {Array.from({ length: 6 }, (_, r) =>
            Array.from({ length: 8 }, (_, c) => (
              <rect
                key={`core${r}${c}`}
                x={142 + c * 15}
                y={52 + r * 16}
                width="10"
                height="10"
                rx="1"
                fill="#ec4899"
                opacity={0.1 + Math.random() * 0.3}
              />
            ))
          )}
          {/* Pins */}
          {[0, 1, 2, 3, 4, 5, 6].map(i => (
            <React.Fragment key={`gpin${i}`}>
              <line x1={145 + i * 17} y1="40" x2={145 + i * 17} y2="30" stroke="#ec4899" strokeWidth="1.5" opacity="0.3" />
              <line x1={145 + i * 17} y1="160" x2={145 + i * 17} y2="170" stroke="#ec4899" strokeWidth="1.5" opacity="0.3" />
            </React.Fragment>
          ))}
          {[0, 1, 2, 3, 4, 5].map(i => (
            <React.Fragment key={`gpinv${i}`}>
              <line x1="130" y1={55 + i * 17} x2="120" y2={55 + i * 17} stroke="#ec4899" strokeWidth="1.5" opacity="0.3" />
              <line x1="270" y1={55 + i * 17} x2="280" y2={55 + i * 17} stroke="#ec4899" strokeWidth="1.5" opacity="0.3" />
            </React.Fragment>
          ))}
          {/* Speed label */}
          <text x="340" y="60" textAnchor="middle" fill="#ec4899" fontSize="20" fontWeight="900" opacity="0.2" fontFamily="monospace">70</text>
          <text x="340" y="78" textAnchor="middle" fill="#ec4899" fontSize="12" fontWeight="700" opacity="0.2" fontFamily="monospace">Gbps</text>
          {/* x40 faster label */}
          <text x="340" y="140" textAnchor="middle" fill="#8b5cf6" fontSize="14" fontWeight="700" opacity="0.2" fontFamily="monospace">40x</text>
          {/* Data flow arrows */}
          <g opacity="0.3">
            <path d="M 30 100 L 120 100" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d="M 280 80 L 310 80" stroke="#10b981" strokeWidth="1.5" />
            <path d="M 280 120 L 310 120" stroke="#ef4444" strokeWidth="1.5" />
            <text x="50" y="90" fill="#ec4899" fontSize="8" fontFamily="monospace">PACKETS</text>
            <text x="290" y="72" fill="#10b981" fontSize="7" fontFamily="monospace">SAFE</text>
            <text x="290" y="135" fill="#ef4444" fontSize="7" fontFamily="monospace">ALERT</text>
          </g>
        </svg>
      );
    case 7: // Head Unit Display
      return (
        <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g7a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#g7a)" />
          {/* Dashboard frame */}
          <rect x="70" y="30" width="260" height="130" rx="12" fill="#0f172a" opacity="0.5" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" />
          {/* Screen */}
          <rect x="85" y="45" width="230" height="100" rx="6" fill="#06b6d4" opacity="0.05" stroke="#06b6d4" strokeWidth="0.5" strokeOpacity="0.2" />
          {/* HUD elements - speed */}
          <text x="150" y="95" textAnchor="middle" fill="#06b6d4" fontSize="36" fontWeight="900" opacity="0.3" fontFamily="monospace">120</text>
          <text x="150" y="112" textAnchor="middle" fill="#06b6d4" fontSize="10" opacity="0.25" fontFamily="monospace">km/h</text>
          {/* RPM gauge */}
          <path d="M 260 110 A 35 35 0 0 1 225 75" fill="none" stroke="#06b6d4" strokeWidth="3" opacity="0.2" strokeLinecap="round" />
          <path d="M 260 110 A 35 35 0 0 1 245 78" fill="none" stroke="#06b6d4" strokeWidth="3" opacity="0.4" strokeLinecap="round" />
          {/* Navigation arrow */}
          <path d="M 260 90 L 270 80 L 265 92 Z" fill="#06b6d4" opacity="0.3" />
          {/* Temperature bar */}
          <rect x="100" y="125" width="80" height="6" rx="3" fill="#06b6d4" opacity="0.1" />
          <rect x="100" y="125" width="50" height="6" rx="3" fill="#06b6d4" opacity="0.25" />
          {/* CAN bus lines */}
          <g opacity="0.2">
            <path d="M 200 160 Q 200 175 170 180 L 100 180" stroke="#06b6d4" strokeWidth="1" />
            <path d="M 200 160 Q 200 175 230 180 L 300 180" stroke="#06b6d4" strokeWidth="1" />
            <text x="90" y="192" fill="#06b6d4" fontSize="8" fontFamily="monospace">CAN</text>
            <text x="290" y="192" fill="#06b6d4" fontSize="8" fontFamily="monospace">SPI</text>
          </g>
        </svg>
      );
    case 8: // IoT Energy Monitoring
      return (
        <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g8a" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#g8a)" />
          {/* Central hub (Raspberry Pi) */}
          <rect x="165" y="65" width="70" height="50" rx="6" fill="#1e293b" opacity="0.6" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
          <text x="200" y="88" textAnchor="middle" fill="#10b981" fontSize="8" opacity="0.5" fontFamily="monospace">RPi</text>
          <text x="200" y="102" textAnchor="middle" fill="#10b981" fontSize="7" opacity="0.3" fontFamily="monospace">HUB</text>
          {/* Sensor nodes */}
          {/* Temperature sensor */}
          <g transform="translate(70, 50)">
            <circle cx="0" cy="0" r="20" fill="#ef4444" opacity="0.1" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3" />
            <text x="0" y="-3" textAnchor="middle" fill="#ef4444" fontSize="14" opacity="0.5">T</text>
            <text x="0" y="10" textAnchor="middle" fill="#ef4444" fontSize="7" opacity="0.4" fontFamily="monospace">26°C</text>
          </g>
          <line x1="90" y1="55" x2="165" y2="80" stroke="#ef4444" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
          {/* Humidity sensor */}
          <g transform="translate(70, 140)">
            <circle cx="0" cy="0" r="20" fill="#3b82f6" opacity="0.1" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
            <text x="0" y="-3" textAnchor="middle" fill="#3b82f6" fontSize="14" opacity="0.5">H</text>
            <text x="0" y="10" textAnchor="middle" fill="#3b82f6" fontSize="7" opacity="0.4" fontFamily="monospace">65%</text>
          </g>
          <line x1="90" y1="140" x2="165" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
          {/* Power sensor */}
          <g transform="translate(330, 50)">
            <circle cx="0" cy="0" r="20" fill="#eab308" opacity="0.1" stroke="#eab308" strokeWidth="1" strokeOpacity="0.3" />
            <path d="M -4 -8 L 2 -8 L -1 -1 L 5 -1 L -3 10 L 0 2 L -5 2 Z" fill="#eab308" opacity="0.5" />
            <text x="0" y="10" textAnchor="middle" fill="#eab308" fontSize="7" opacity="0.4" fontFamily="monospace">3.2kW</text>
          </g>
          <line x1="310" y1="55" x2="235" y2="80" stroke="#eab308" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
          {/* WiFi node (ESP8266) */}
          <g transform="translate(330, 140)">
            <circle cx="0" cy="0" r="20" fill="#06b6d4" opacity="0.1" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.3" />
            <path d="M -8 3 Q 0 -10 8 3" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4" />
            <path d="M -5 0 Q 0 -6 5 0" fill="none" stroke="#06b6d4" strokeWidth="1.5" opacity="0.5" />
            <circle cx="0" cy="3" r="2" fill="#06b6d4" opacity="0.5" />
          </g>
          <line x1="310" y1="140" x2="235" y2="100" stroke="#06b6d4" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
          {/* Chart at bottom */}
          <polyline points="100,180 140,175 180,178 220,168 260,172 300,165" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.3" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 400 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gdef" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#gdef)" />
        </svg>
      );
  }
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Engineering Portfolio</h2>
          <p className="text-gray-500 fira-code text-sm uppercase tracking-widest">Selective projects spanning cellular protocol stack, embedded systems, and high-performance computing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500"
            >
              {/* Illustration Header */}
              <div className="relative h-48 overflow-hidden">
                <ProjectIllustration id={project.id} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="relative z-10 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/20 backdrop-blur-sm rounded-md text-[10px] fira-code text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/5 rounded-md text-[10px] fira-code text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
