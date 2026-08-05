import { Project, Experience, SkillCategory, Publication, OpenSourceProject } from './types';

export const PERSONAL_INFO = {
  name: 'Cheng-hung Hsieh',
  title: 'Senior Firmware Engineer',
  company: 'Freelance',
  location: 'Taipei, Taiwan',
  email: 'chadcoco1444@gmail.com',
  phone: '(+886) 989-365-782',
  linkedin: 'https://www.linkedin.com/in/cheng-hung-hsieh-b36487b6',
  github: 'https://github.com/chadcoco1444',
  bio: 'Senior Firmware Engineer with over 7 years of experience in embedded software development, specializing in NR/LTE Cellular Protocol Stack and Automotive Electronic software. Proven expertise in 3GPP RRC/NAS protocols, A-GPS/LPP positioning, system-level memory optimization, and automation testing. Adept at coordinating cross-functional teams and leading critical feature developments from design to commercialization.',
  tagline:
    'Senior Firmware Engineer specializing in NR/LTE Cellular Protocol Stack and Embedded Systems Development',
};

export const WEB3FORMS_ACCESS_KEY = 'd3d4c6f2-ce66-45b5-b17d-000528d71852';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'NTN & 5G RedCap Cell Selection',
    description:
      'Led development of Terrestrial/Non-Terrestrial Networks (NTN) and 5G RedCap cell selection features based on 3GPP R17. Optimized Power Saving in Out-of-Service scenarios and enhanced Dual SIM capabilities to minimize interference on the active data SIM.',
    techStack: ['C/C++', '3GPP R17', 'RRC', 'NAS', 'NTN'],
  },
  {
    id: 2,
    title: 'A-GPS/LPP Positioning Protocols',
    description:
      'Developed LPP Control Plane (CP) and User Plane (UP) for positioning features. Maintained related A-GPS modules, supporting CP/UP procedures (MOLR, MTLR, SI, NI).',
    techStack: ['C/C++', 'LPP', 'A-GPS', 'SUPL', '3GPP'],
  },
  {
    id: 3,
    title: 'Modem Footprint Optimization',
    description:
      'Spearheaded system-level footprint reduction and performance tuning across RRC modules. Leveraged SPLUNK Big Data analytics to analyze real-world field trial logs. Redesigned data structures and AI tensor memory management, achieving significant heap memory savings.',
    techStack: ['C/C++', 'SPLUNK', 'Big Data', 'RRC'],
  },
  {
    id: 4,
    title: 'Unit Testing & Automation Framework',
    description:
      'Architected highly efficient unit-testing frameworks that accelerated regression cycles. Developed automated log-parsing tools to streamline triage of complex customer field issues and enhance code security (Coverity/UBSan resolution).',
    techStack: ['C/C++', 'Python', 'Coverity', 'UBSan'],
  },
  {
    id: 5,
    title: 'Wireless Charger 15W Firmware',
    description:
      'Developed firmware for 15W Wireless Charger on NXP platform utilizing C/C++. Integrated overheat protection and Foreign Object Detection (FOD) for wireless charger systems.',
    techStack: ['C', 'NXP MCU', 'I2C', 'SPI', 'LIN', 'ADC'],
  },
  {
    id: 6,
    title: 'GPU-Accelerated NIDS',
    description:
      'Proposed a novel hierarchical parallelism for accelerating network intrusion detection on multiple GPUs. Achieved 70 Gbps throughput (40x faster than Snort AC algorithm) and 99.2% memory reduction. Awarded Best Conference Paper at IEEE ICASI 2018.',
    techStack: ['C/C++', 'CUDA', 'Aho-Corasick', 'GPU', 'Snort'],
  },
  {
    id: 7,
    title: 'Head Unit Display (HUD)',
    description:
      'Developed firmware for automotive Head Unit Display on STM32 (ARM Cortex-M3/A7) platform. Implemented communication interfaces including I2C, SPI, CAN, PWM, and IPC. Debugged using Oscilloscope, Memory Analyzer, and JTAG/SWD interface.',
    techStack: ['C', 'STM32', 'ARM Cortex-M3/A7', 'CAN', 'SPI', 'IPC'],
  },
  {
    id: 8,
    title: 'IoT Energy Monitoring System',
    description:
      'Built an IoT-based energy monitoring system using Raspberry Pi, Arduino, and ESP8266. Integrated OpenEnergyMonitor for real-time temperature, humidity, and power consumption monitoring.',
    techStack: ['Raspberry Pi', 'Arduino', 'ESP8266', 'IoT', 'OpenEnergyMonitor'],
  },
];

export const OPEN_SOURCE_PROJECTS: OpenSourceProject[] = [
  {
    id: 4,
    title: 'LumeSpec',
    description:
      "Turn any product URL into a polished, code-driven demo video in ~60 seconds — authored from the page's own copy and screenshots. Playwright crawls the live page, Claude Sonnet writes a Storyboard JSON (gated by a 7-layer defense that rejects anything the model invents), and Remotion compiles it into a 1280×720 MP4. Bilingual EN / 中 intent presets, a dark glassmorphic UI with live SSE progress, and a 4-stage isolated-worker pipeline.",
    techStack: [
      'Next.js 14',
      'Fastify',
      'TypeScript',
      'BullMQ',
      'Redis',
      'Playwright',
      'Remotion 4',
      'Claude Sonnet',
      'NextAuth v5',
      'PostgreSQL',
      'S3 / MinIO',
    ],
    github: 'https://github.com/chadcoco1444/LumeSpec',
    liveUrl: 'https://chadcoco1444.github.io/LumeSpec/',
    highlights: [
      '4-stage isolated BullMQ pipeline: Crawl → Think → Render → Deliver',
      '7-layer Claude output defense — extractive whitelist rejects any invented copy',
      '7 Remotion scene types compiled from React (Bento · StatsCounter · DeviceMockup · CodeToUI…)',
      'Bilingual EN / 中 intent → matching storyboard, no translation layer',
      'Google + GitHub OAuth + History Vault; fork any past job without re-crawling',
      '817 tests across 121 files · one-command local dev via `pnpm lume start`',
    ],
  },
  {
    id: 5,
    title: 'TradeMatrix',
    description:
      "A Taiwan-stock institutional-flow analytics platform that surfaces what brokerages won't: foreign / investment-trust / dealer positioning, consensus-volume rankings, and chip concentration — often 1–3 trading days before the K-line reacts. Unifies 360° per-stock deep-dives, a market-regime sentiment dashboard, a multi-criteria screener with point-in-time backtesting, and US-stock support via SEC EDGAR. Local-first, millisecond UI, zero ads.",
    techStack: [
      'Next.js',
      'React',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Lightweight Charts',
      'visx',
      'FinMind',
      'SEC EDGAR',
      'Groq LLM',
      'APScheduler',
    ],
    github: 'https://github.com/chadcoco1444/TradeMatrix',
    liveUrl: 'https://tradematrix.dev/',
    highlights: [
      'Institutional-flow radar: 3-layer consensus-volume / first-appearance / volume-surge ranking',
      '360° per-stock deep-dive — 6 tabs unifying data scattered across 5+ official sources',
      'Market regime + sentiment dashboard (foreign futures OI · retail long/short contra-indicator · breadth/ADL)',
      'Multi-criteria screener + backtesting engine with honest survivorship disclosure',
      'US-stock fundamentals via SEC EDGAR XBRL; Taiwan data via FinMind, auto-updated daily',
      'LLM-polished daily morning briefing · PWA · Basic/Pro tier gating with trial quotas',
    ],
  },
  {
    id: 3,
    title: 'SKILL Platform (AI Pair Programmer)',
    description:
      'An AI-powered algorithm tutor and online judge platform that guides users through Blind 75 interview problems using Socratic dialogue. Built on the SKILL framework (Socratic → Knowledge → Iterative → Logic → Evolution), featuring a conversational UI with inline code editor, real-time execution in Docker sandboxes, and adaptive learning via a knowledge graph.',
    techStack: [
      'Next.js 15',
      'React 19',
      'tRPC v11',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Gemini API',
      'Docker',
      'BullMQ',
    ],
    github: 'https://github.com/chadcoco1444/ai-pair-programmer',
    highlights: [
      'SKILL tutoring framework — AI never hands out answers',
      'Blind 75 problem bank (71 problems across 10 categories)',
      'Multi-language code execution in Docker sandbox (Python, C, C++, JS)',
      'Adaptive learning path powered by a knowledge graph',
      'Type-safe end-to-end via tRPC + monorepo architecture',
    ],
  },
  {
    id: 6,
    title: 'Claude Task Tracker',
    description:
      'A VSCode extension that visualizes Claude Code task progress, subagent convergence, and session lifecycle — across one or many windows, grouped by repo and git worktree. Claude Code hooks append events to a JSONL stream; the extension watches the file, reduces events into state, and renders a live tree (repo ▸ worktree ▸ feature ▸ task / subagent), a dashboard webview, and a status-bar summary.',
    techStack: [
      'TypeScript',
      'VSCode Extension API',
      'esbuild',
      'Vitest',
      'Claude Code Hooks',
      'JSONL',
    ],
    github: 'https://github.com/chadcoco1444/claude-task-tracker',
    highlights: [
      'Live tree: repo ▸ worktree ▸ feature ▸ task / subagent with done/total progress bars',
      'Reduces a Claude Code hook event stream (`events.jsonl`) into session state in real time',
      'Status lifecycle: active / done / idle / ended with auto-hide for completed work',
      'Falls back to the newest `plans/*.md` as a planned skeleton before any todos exist',
      'Dashboard webview + status-bar item that never headlines another workspace',
      'One-command hook install into `~/.claude/settings.json`; ships as an installable VSIX',
    ],
  },
  {
    id: 2,
    title: 'Portfolio',
    description:
      'Personal portfolio website built with React + TypeScript and Tailwind CSS, featuring a Precision Instrument design language. Dark glassmorphism interface, custom SVG illustrations, and scroll-reveal animations.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/chadcoco1444/chenghung-portfolio',
    highlights: [
      'Precision Instrument design system',
      'Glassmorphism + noise texture visual style',
      'Custom SVG technical illustrations',
      'Scroll-reveal staggered animations',
    ],
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'A Novel Hierarchical Parallelism for Accelerating NIDS Using GPUs',
    authors: 'Cheng-Hung Lin, Cheng-Hung Hsieh',
    conference: 'IEEE International Conference on Applied System Innovation (ICASI)',
    year: 2018,
    award: 'Best Conference Paper Award',
    pdf: 'assets/papers/ICASI2018.pdf',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'MediaTek Inc.',
    role: 'Senior Firmware Engineer (Protocol Stack)',
    period: '2021 – 2025',
    description: [
      'Led development of Terrestrial/Non-Terrestrial Networks (NTN) and 5G RedCap cell selection features based on 3GPP R17',
      'Developed LPP Control Plane and User Plane for positioning features, maintained A-GPS modules',
      'Spearheaded system-level footprint reduction, leveraged SPLUNK Big Data analytics, redesigned data structures and AI tensor memory management',
      'Served as Feature Project Manager, orchestrating cross-layer (L1/NAS/RRC) development. Architected unit-testing frameworks and automated log-parsing tools',
    ],
    skills: ['C/C++', '3GPP', 'RRC', 'NAS', 'LPP', 'A-GPS', 'NTN', '5G RedCap', 'SPLUNK'],
  },
  {
    id: 2,
    company: 'LITEON Technology Corp.',
    role: 'Automotive Electronic Software Engineer',
    period: '2018 – 2021',
    description: [
      'Developed firmware for 15W Wireless Chargers and Head Unit Displays (HUD) on NXP and STM32 platforms',
      'Integrated overheat protection and Foreign Object Detection (FOD) for wireless charger systems',
      'Developed communication interfaces including I2C, SPI, CAN, and LIN',
      'Complied with ISO 26262 functional safety and ASPICE procedures',
    ],
    skills: [
      'C/C++',
      'NXP',
      'STM32',
      'ARM Cortex-M3/A7',
      'I2C',
      'SPI',
      'CAN',
      'LIN',
      'ISO 26262',
      'ASPICE',
    ],
  },
  {
    id: 3,
    company: 'National Taiwan Normal University',
    role: 'M.S. in Electrical Engineering',
    period: '2016 – 2018',
    description: [
      'Research focus on GPU-accelerated network intrusion detection systems',
      'Thesis: "A Novel Hierarchical Parallelism for Accelerating NIDS Using GPUs"',
      'Awarded Best Conference Paper at IEEE ICASI 2018',
    ],
    skills: ['C/C++', 'CUDA', 'GPU Programming', 'Aho-Corasick', 'Parallel Computing'],
  },
  {
    id: 4,
    company: 'National Taiwan Normal University',
    role: 'B.S. in Electrical Engineering',
    period: '2012 – 2016',
    description: [
      'Coursework: Data Structures, Operating Systems, Computer Architecture, Advanced Computer Networks, Parallel Computing, Computer Vision, Signal Processing',
    ],
    skills: ['C/C++', 'Python', 'Electrical Engineering'],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Protocols & Standards',
    skills: [
      'NR/LTE Protocol Stack',
      'RRC',
      'NAS',
      '3GPP 38.331',
      '3GPP 38.304',
      '3GPP 37.355',
      'Cell Selection',
      'A-GPS',
      'LPP/LPPe',
      'SUPL',
    ],
  },
  {
    category: 'Programming & Tools',
    skills: [
      'C/C++',
      'Python',
      'CUDA',
      'POSIX Thread',
      'Git',
      'SVN',
      'Oscilloscope',
      'JTAG/SWD',
      'Parallel Computing',
    ],
  },
  {
    category: 'Embedded Systems',
    skills: [
      'RTOS',
      'NXP MCUs/MPUs',
      'STM32',
      'ARM Cortex-M3',
      'ARM Cortex-A7',
      'I2C',
      'SPI',
      'CAN',
      'LIN',
      'ADC',
      'PWM',
      'IPC',
    ],
  },
  {
    category: 'Domain Knowledge',
    skills: [
      '3GPP Protocol Stack',
      'Terrestrial Networks',
      'Non-Terrestrial Networks (NTN)',
      '5G RedCap',
      'Cell Selection',
    ],
  },
  {
    category: 'Automotive Standards',
    skills: ['ISO 26262 Functional Safety', 'ASPICE'],
  },
  {
    category: 'Data & Analytics',
    skills: ['SPLUNK', 'Big Data Analytics', 'Coverity', 'UBSan'],
  },
];
