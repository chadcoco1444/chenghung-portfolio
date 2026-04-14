# Cheng-hung Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a personal portfolio website for Cheng-hung Hsieh at `https://chadcoco1444.github.io/chenghung-portfolio/`

**Architecture:** Single-page React app with 8 sections (Navbar, Hero, About, Projects, Publications, Experience, Skills, AI Chat). All personal data lives in `constants.ts`. Components are stateless except AIChat which manages chat state and calls Gemini API. Tailwind CSS via CDN for styling with custom glassmorphism classes.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS (CDN), Google Gemini API (`@google/genai`), gh-pages

**Spec:** `docs/superpowers/specs/2026-04-14-chenghung-portfolio-design.md`

---

## File Map

| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies, scripts (dev/build/deploy) |
| `vite.config.ts` | Vite config with base path, Gemini API key exposure |
| `tsconfig.json` | TypeScript compiler options |
| `index.html` | HTML shell with CDN imports (React, Tailwind, fonts) |
| `index.css` | Custom styles: glassmorphism, gradients, animations, scrollbar |
| `index.tsx` | React entry point — mounts `<App />` |
| `types.ts` | TypeScript interfaces: Project, Experience, SkillCategory, Publication, ChatMessage |
| `constants.ts` | All personal data arrays: PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILLS, PUBLICATIONS |
| `App.tsx` | Root component: assembles Navbar + all sections + Footer |
| `components/Navbar.tsx` | Fixed top nav with logo, email, section links |
| `components/Hero.tsx` | Landing section with photo, heading, CTA buttons |
| `components/Projects.tsx` | Project cards in responsive grid |
| `components/Publications.tsx` | Publication cards with PDF download |
| `components/Experience.tsx` | Vertical timeline with alternating cards |
| `components/Skills.tsx` | Skills grid with category cards |
| `components/AIChat.tsx` | Chat UI with message bubbles, input form |
| `services/geminiService.ts` | Gemini API wrapper with system prompt |
| `public/assets/profile.jpg` | Profile photo |
| `public/assets/Mediatek_CV.pdf` | Latest CV for download |
| `public/assets/papers/ICASI2018.pdf` | IEEE paper PDF |
| `.gitignore` | Ignore node_modules, dist, .env |
| `.env` | GEMINI_API_KEY (not committed) |

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `index.html`
- Create: `.gitignore`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "chenghung-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@google/genai": "^1.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "typescript": "~5.7.0",
    "vite": "^6.0.0",
    "gh-pages": "^6.3.0"
  }
}
```

- [ ] **Step 2: Create `vite.config.ts`**

```typescript
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.');
  return {
    base: '/chenghung-portfolio/',
    plugins: [react()],
    define: {
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
  };
});
```

- [ ] **Step 3: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["."]
}
```

- [ ] **Step 4: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cheng-hung Hsieh | Senior Firmware Engineer</title>
    <meta name="description" content="Portfolio of Cheng-hung Hsieh - Senior Firmware Engineer specializing in NR/LTE Protocol Stack and Embedded Systems" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/index.css" />
  </head>
  <body class="bg-[#0f172a] text-gray-100 font-['Inter'] antialiased">
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Create `.gitignore`**

```
node_modules
dist
.env
.env.local
*.local
.DS_Store
```

- [ ] **Step 6: Run `npm install`**

Run: `npm install`
Expected: `node_modules` created, `package-lock.json` generated, no errors.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json vite.config.ts tsconfig.json index.html .gitignore
git commit -m "chore: scaffold project with Vite, React 19, TypeScript, Tailwind"
```

---

## Task 2: Types, Constants, and CSS

**Files:**
- Create: `types.ts`
- Create: `constants.ts`
- Create: `index.css`

- [ ] **Step 1: Create `types.ts`**

```typescript
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  github?: string;
  liveUrl?: string;
  pdf?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  image?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Publication {
  title: string;
  authors: string;
  conference: string;
  year: number;
  award?: string;
  pdf: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
```

- [ ] **Step 2: Create `constants.ts`**

```typescript
import { Project, Experience, SkillCategory, Publication } from './types';

export const PERSONAL_INFO = {
  name: 'Cheng-hung Hsieh',
  title: 'Senior Firmware Engineer',
  company: 'MediaTek Inc.',
  location: 'Taipei, Taiwan',
  email: 'chadcoco1444@gmail.com',
  phone: '(+886) 989-365-782',
  linkedin: 'https://www.linkedin.com/in/cheng-hung-hsieh-b36487b6',
  github: 'https://github.com/chadcoco1444',
  bio: 'Senior Firmware Engineer with over 7 years of experience in embedded software development, specializing in NR/LTE Cellular Protocol Stack and Automotive Electronic software. Proven expertise in 3GPP RRC/NAS protocols, A-GPS/LPP positioning, system-level memory optimization, and automation testing. Adept at coordinating cross-functional teams and leading critical feature developments from design to commercialization.',
  tagline: 'Senior Firmware Engineer specializing in NR/LTE Cellular Protocol Stack and Embedded Systems Development',
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'NTN & 5G RedCap Cell Selection',
    description: 'Led development of Terrestrial/Non-Terrestrial Networks (NTN) and 5G RedCap cell selection features based on 3GPP R17. Optimized Power Saving in Out-of-Service scenarios and enhanced Dual SIM capabilities to minimize interference on the active data SIM.',
    techStack: ['C/C++', '3GPP R17', 'RRC', 'NAS', 'NTN'],
  },
  {
    id: 2,
    title: 'A-GPS/LPP Positioning Protocols',
    description: 'Developed LPP Control Plane (CP) and User Plane (UP) for positioning features. Maintained related A-GPS modules, supporting CP/UP procedures (MOLR, MTLR, SI, NI).',
    techStack: ['C/C++', 'LPP', 'A-GPS', 'SUPL', '3GPP'],
  },
  {
    id: 3,
    title: 'Modem Footprint Optimization',
    description: 'Spearheaded system-level footprint reduction and performance tuning across RRC modules. Leveraged SPLUNK Big Data analytics to analyze real-world field trial logs. Redesigned data structures and AI tensor memory management, achieving significant heap memory savings.',
    techStack: ['C/C++', 'SPLUNK', 'Big Data', 'RRC'],
  },
  {
    id: 4,
    title: 'Unit Testing & Automation Framework',
    description: 'Architected highly efficient unit-testing frameworks that accelerated regression cycles. Developed automated log-parsing tools to streamline triage of complex customer field issues and enhance code security (Coverity/UBSan resolution).',
    techStack: ['C/C++', 'Python', 'Coverity', 'UBSan'],
  },
  {
    id: 5,
    title: 'Wireless Charger 15W Firmware',
    description: 'Developed firmware for 15W Wireless Charger on NXP platform utilizing C/C++. Integrated overheat protection and Foreign Object Detection (FOD) for wireless charger systems.',
    techStack: ['C', 'NXP MCU', 'I2C', 'SPI', 'LIN', 'ADC'],
  },
  {
    id: 6,
    title: 'GPU-Accelerated NIDS',
    description: 'Proposed a novel hierarchical parallelism for accelerating network intrusion detection on multiple GPUs. Achieved 70 Gbps throughput (40x faster than Snort AC algorithm) and 99.2% memory reduction. Awarded Best Conference Paper at IEEE ICASI 2018.',
    techStack: ['C/C++', 'CUDA', 'Aho-Corasick', 'GPU', 'Snort'],
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
    period: '2021 – Present',
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
    skills: ['C/C++', 'NXP', 'STM32', 'ARM Cortex-M3/A7', 'I2C', 'SPI', 'CAN', 'LIN', 'ISO 26262', 'ASPICE'],
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
    skills: ['NR/LTE Protocol Stack', 'RRC', 'NAS', '3GPP 38.331', '3GPP 38.304', '3GPP 37.355', 'Cell Selection', 'A-GPS', 'LPP/LPPe', 'SUPL'],
  },
  {
    category: 'Programming & Tools',
    skills: ['C/C++', 'Python', 'CUDA', 'POSIX Thread', 'Git', 'SVN', 'Oscilloscope', 'JTAG/SWD', 'Parallel Computing'],
  },
  {
    category: 'Embedded Systems',
    skills: ['RTOS', 'NXP MCUs/MPUs', 'STM32', 'ARM Cortex-M3', 'ARM Cortex-A7', 'I2C', 'SPI', 'CAN', 'LIN', 'ADC', 'PWM', 'IPC'],
  },
  {
    category: 'Domain Knowledge',
    skills: ['3GPP Protocol Stack', 'Terrestrial Networks', 'Non-Terrestrial Networks (NTN)', '5G RedCap', 'Cell Selection'],
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
```

- [ ] **Step 3: Create `index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --midnight: #0f172a;
  --cobalt: #3b82f6;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--midnight);
  min-height: 100vh;
}

.fira-code {
  font-family: 'Fira Code', monospace;
}

.glass {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.gradient-text {
  background: linear-gradient(135deg, #fff 0%, #93c5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.data-grid {
  background-image:
    linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  background-position: center center;
}

.data-grid::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
  pointer-events: none;
}

.timeline-line {
  background: linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.3), transparent);
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes pulse-glow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--midnight);
}
::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.2);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--cobalt);
}
```

- [ ] **Step 4: Commit**

```bash
git add types.ts constants.ts index.css
git commit -m "feat: add TypeScript types, portfolio data constants, and custom CSS"
```

---

## Task 3: Entry Point, App Shell, and Navbar

**Files:**
- Create: `index.tsx`
- Create: `App.tsx` (initial shell with Navbar + Footer only)
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create `index.tsx`**

```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- [ ] **Step 2: Create `components/Navbar.tsx`**

```tsx
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Chat', href: '#ai-chat' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-4">
            <span className="text-xl font-bold gradient-text fira-code">&lt;ChenHung /&gt;</span>
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-white/10">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-blue-400 transition-colors fira-code tracking-wide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

- [ ] **Step 3: Create `App.tsx` (shell)**

```tsx
import React from 'react';
import Navbar from './components/Navbar';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/50">
      <Navbar />

      <main>
        {/* Sections will be added in subsequent tasks */}
        <div className="pt-32 text-center text-gray-500">
          <p>Portfolio sections loading...</p>
        </div>
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">&copy; 2026 {PERSONAL_INFO.name} | {PERSONAL_INFO.company}</p>
          <p className="fira-code text-[10px] opacity-30 uppercase tracking-widest">NR/LTE Protocol Stack / Embedded Systems / Firmware Engineering</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
```

- [ ] **Step 4: Start dev server and verify**

Run: `npm run dev`
Expected: Opens on `http://localhost:3000`, shows dark page with Navbar at top (logo + nav links), placeholder text, and footer at bottom. No console errors.

- [ ] **Step 5: Commit**

```bash
git add index.tsx App.tsx components/Navbar.tsx
git commit -m "feat: add React entry point, App shell with Navbar and Footer"
```

---

## Task 4: Hero Section

**Files:**
- Create: `components/Hero.tsx`
- Modify: `App.tsx` — import and add `<Hero />` after `<Navbar />`

- [ ] **Step 1: Copy profile photo to public/assets**

Copy the user's profile photo to `public/assets/profile.jpg`. The source file is at `c:\Users\88698\Downloads\` or provided by user. Create the directory structure:

```bash
mkdir -p public/assets/papers
```

Then copy the profile image, the CV PDF, and the paper PDF into `public/assets/`.

- [ ] **Step 2: Create `components/Hero.tsx`**

```tsx
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden data-grid">
      {/* Background halos */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <img
              src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
              alt={PERSONAL_INFO.name}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'relative w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-5xl font-bold text-white shadow-2xl';
                  fallback.textContent = PERSONAL_INFO.name.charAt(0);
                  parent.appendChild(fallback);
                }
              }}
            />
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Senior Engineer &bull; {PERSONAL_INFO.company}
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
          <span className="gradient-text">{PERSONAL_INFO.name.toUpperCase()}</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`${import.meta.env.BASE_URL}assets/Mediatek_CV.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
          >
            Download CV
          </a>
          <a
            href="#ai-chat"
            className="px-8 py-3 border border-white/10 hover:border-blue-500/50 text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300"
          >
            Inquire AI Agent
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

- [ ] **Step 3: Update `App.tsx` — add Hero**

Replace the placeholder `<div>` in `<main>` with:

```tsx
import Hero from './components/Hero';
```

And in the JSX, replace the placeholder div with:

```tsx
<main>
  <Hero />
</main>
```

Keep the footer below `</main>`.

- [ ] **Step 4: Verify in browser**

Expected: Full-screen hero with gradient background, profile photo (or fallback initial), status badge, large heading "CHENG-HUNG HSIEH", tagline, and two buttons. Navbar visible on top.

- [ ] **Step 5: Commit**

```bash
git add components/Hero.tsx App.tsx public/assets/
git commit -m "feat: add Hero section with profile photo and CTA buttons"
```

---

## Task 5: About Section

**Files:**
- Modify: `App.tsx` — add About section inline (it's in App.tsx like the reference)

- [ ] **Step 1: Add About section to `App.tsx`**

In `App.tsx`, after `<Hero />`, add the About section. Update the imports and JSX:

```tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/50">
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="py-32 px-4 max-w-5xl mx-auto">
          <div className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
                alt={PERSONAL_INFO.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] object-cover flex-shrink-0 shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Professional Profile</h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> LinkedIn
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> GitHub
                  </a>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">&copy; 2026 {PERSONAL_INFO.name} | {PERSONAL_INFO.company}</p>
          <p className="fira-code text-[10px] opacity-30 uppercase tracking-widest">NR/LTE Protocol Stack / Embedded Systems / Firmware Engineering</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
```

- [ ] **Step 2: Verify in browser**

Expected: After Hero, a glassmorphism card shows profile photo on left, "Professional Profile" heading, bio text, and LinkedIn/GitHub/Email links with colored dots.

- [ ] **Step 3: Commit**

```bash
git add App.tsx
git commit -m "feat: add About section with professional profile and social links"
```

---

## Task 6: Projects Section

**Files:**
- Create: `components/Projects.tsx`
- Modify: `App.tsx` — import and add `<Projects />` after About section

- [ ] **Step 1: Create `components/Projects.tsx`**

```tsx
import React from 'react';
import { PROJECTS } from '../constants';

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
              {/* Gradient Header */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-end p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="relative z-10 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-500/20 rounded-md text-[10px] fira-code text-blue-300">
                      {tech}
                    </span>
                  ))}
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
```

- [ ] **Step 2: Update `App.tsx` — add Projects import and component**

Add import:
```tsx
import Projects from './components/Projects';
```

Add `<Projects />` after the About `</section>` closing tag, before `</main>`.

- [ ] **Step 3: Verify in browser**

Expected: 3-column grid of project cards with gradient headers, tech badges, titles, descriptions, and full tech stack tags. Cards lift on hover.

- [ ] **Step 4: Commit**

```bash
git add components/Projects.tsx App.tsx
git commit -m "feat: add Projects section with responsive card grid"
```

---

## Task 7: Publications Section

**Files:**
- Create: `components/Publications.tsx`
- Modify: `App.tsx` — import and add `<Publications />`

- [ ] **Step 1: Create `components/Publications.tsx`**

```tsx
import React from 'react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Publications</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full md:mx-0 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {PUBLICATIONS.map((pub, index) => (
            <div key={index} className="glass p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 group relative">
              {/* Document Icon */}
              <div className="absolute top-6 right-6 text-gray-600 group-hover:text-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>

              <h3 className="text-xl font-bold mb-2 pr-12 group-hover:text-blue-400 transition-colors">
                {pub.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1">{pub.authors}</p>
              <p className="text-gray-500 text-sm mb-4">{pub.conference}, {pub.year}</p>

              {pub.award && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-xs font-medium mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {pub.award}
                </div>
              )}

              <div className="block">
                <a
                  href={`${import.meta.env.BASE_URL}${pub.pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/30 text-blue-400 rounded-lg text-sm hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
```

- [ ] **Step 2: Update `App.tsx` — add Publications**

Add import:
```tsx
import Publications from './components/Publications';
```

Add `<Publications />` after `<Projects />`.

- [ ] **Step 3: Verify in browser**

Expected: Publication card with title, authors, conference, year, gold "Best Conference Paper Award" badge, and "Download PDF" button.

- [ ] **Step 4: Commit**

```bash
git add components/Publications.tsx App.tsx
git commit -m "feat: add Publications section with award badge and PDF download"
```

---

## Task 8: Experience Timeline

**Files:**
- Create: `components/Experience.tsx`
- Modify: `App.tsx` — import and add `<Experience />`

- [ ] **Step 1: Create `components/Experience.tsx`**

```tsx
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Professional Journey</h2>
          <p className="text-gray-500 fira-code text-sm uppercase tracking-widest">Chronological career &amp; academic evolution</p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line hidden md:block"></div>

          <div className="space-y-24">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-20 hidden md:block"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass overflow-hidden rounded-3xl hover:border-blue-500/30 transition-all duration-500 group">
                    <div className="p-8">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div>
                          <span className="text-blue-400 fira-code text-[10px] font-bold tracking-widest block mb-1">{exp.period}</span>
                          <h3 className="text-2xl font-bold group-hover:text-white transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-gray-400 font-medium">{exp.company}</p>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-500 text-sm leading-relaxed flex items-start gap-3">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-blue-500/5 rounded-full text-[10px] fira-code text-blue-300/70 border border-blue-500/10">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
```

- [ ] **Step 2: Update `App.tsx` — add Experience**

Add import:
```tsx
import Experience from './components/Experience';
```

Add `<Experience />` after `<Publications />`.

- [ ] **Step 3: Verify in browser**

Expected: Vertical timeline with alternating left/right cards. Each card shows period, role, company, bullet points, and skill tags. Timeline line visible on desktop.

- [ ] **Step 4: Commit**

```bash
git add components/Experience.tsx App.tsx
git commit -m "feat: add Experience timeline with alternating card layout"
```

---

## Task 9: Skills Section

**Files:**
- Create: `components/Skills.tsx`
- Modify: `App.tsx` — import and add `<Skills />`

- [ ] **Step 1: Create `components/Skills.tsx`**

```tsx
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Technical Arsenal</h2>
          <p className="text-gray-500 fira-code text-sm uppercase tracking-widest">Core competencies across firmware and protocol development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((cat, index) => (
            <div key={cat.category} className="glass p-8 rounded-2xl hover:border-blue-500/30 transition-all duration-500 group relative">
              {/* Number Badge */}
              <div className="absolute top-6 right-6 text-4xl font-black text-white/[0.03] fira-code">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-blue-500 rounded-full"></div>
                <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">{cat.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-400 hover:bg-blue-500/10 hover:text-blue-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
```

- [ ] **Step 2: Update `App.tsx` — add Skills**

Add import:
```tsx
import Skills from './components/Skills';
```

Add `<Skills />` after `<Experience />`.

- [ ] **Step 3: Verify in browser**

Expected: 3-column grid (2 rows) of skill category cards. Each has numbered badge, blue accent bar, category name, and skill tags that highlight on hover.

- [ ] **Step 4: Commit**

```bash
git add components/Skills.tsx App.tsx
git commit -m "feat: add Skills section with categorized skill grid"
```

---

## Task 10: AI Chat (Gemini Service + Component)

**Files:**
- Create: `services/geminiService.ts`
- Create: `components/AIChat.tsx`
- Create: `.env` (local only, not committed)
- Modify: `App.tsx` — import and add `<AIChat />`

- [ ] **Step 1: Create `services/geminiService.ts`**

```typescript
import { GoogleGenAI } from '@google/genai';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILLS, PUBLICATIONS } from '../constants';

export class GeminiService {
  async chatWithAI(userMessage: string, history: { role: 'user' | 'assistant'; content: string }[]) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error('API Key missing');
      return 'ERROR: API Key configuration missing. Please set VITE_GEMINI_API_KEY in your .env file.';
    }

    const ai = new GoogleGenAI({ apiKey });

    try {
      const systemInstruction = `
You are the AI Career Assistant of ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title} at ${PERSONAL_INFO.company}.

CONTEXT:
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Company: ${PERSONAL_INFO.company}
- Location: ${PERSONAL_INFO.location}
- Bio: ${PERSONAL_INFO.bio}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Projects: ${JSON.stringify(PROJECTS)}
- Skills: ${JSON.stringify(SKILLS)}
- Publications: ${JSON.stringify(PUBLICATIONS)}

TONE:
- Professional, knowledgeable, and concise.
- Speak in third person about Cheng-hung, or first person if asked directly.
- Support both English and Chinese (Traditional) queries.

INSTRUCTIONS:
- Answer questions about Cheng-hung's career, skills, projects, education, and publications.
- If asked about technical details, explain them in context of his firmware/protocol stack experience.
- For collaboration inquiries, direct them to ${PERSONAL_INFO.email} or ${PERSONAL_INFO.linkedin}.
- If you don't know something not covered in the context, say so politely.
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [
          ...history.map((h) => ({
            role: h.role === 'user' ? 'user' as const : 'model' as const,
            parts: [{ text: h.content }],
          })),
          { role: 'user' as const, parts: [{ text: userMessage }] },
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      return response.text || "I'm having trouble processing that. Could you rephrase your question?";
    } catch (error) {
      console.error('Gemini Error:', error);
      return 'The AI assistant is currently unavailable. Please try again shortly.';
    }
  }
}

export const geminiService = new GeminiService();
```

- [ ] **Step 2: Create `components/AIChat.tsx`**

```tsx
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { geminiService } from '../services/geminiService';
import { PERSONAL_INFO } from '../constants';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: `Hello! I'm ${PERSONAL_INFO.name}'s AI Career Assistant. Ask me anything about his experience in NR/LTE Protocol Stack development, embedded systems, or his work at MediaTek. How can I help you?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const suggestedQueries = [
    "What is Cheng-hung's expertise in 5G?",
    'Tell me about the NTN cell selection project',
    'What was the IEEE ICASI 2018 paper about?',
    '介紹一下他的工作經歷',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await geminiService.chatWithAI(userMessage, messages);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Connection timeout. Please try again.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestedQuery = (query: string) => {
    setInput(query);
  };

  return (
    <section id="ai-chat" className="py-32 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">AI Career Assistant</h2>
          <p className="text-gray-500 fira-code text-sm">Ask me anything about Cheng-hung&apos;s experience and skills</p>
        </div>

        <div className="glass rounded-2xl overflow-hidden border border-white/5">
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-xs text-gray-500 fira-code">career-assistant</span>
            </div>
            <span className="text-[10px] fira-code text-green-400/60 uppercase tracking-widest">
              Status: Online
            </span>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-md'
                      : 'bg-slate-800/50 text-gray-300 rounded-bl-md border border-white/5'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 text-gray-400 px-4 py-3 rounded-2xl rounded-bl-md text-sm border border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="fira-code text-xs">Processing...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Queries */}
          {messages.length <= 1 && (
            <div className="px-6 pb-4 flex flex-wrap gap-2">
              {suggestedQueries.map((query) => (
                <button
                  key={query}
                  onClick={() => handleSuggestedQuery(query)}
                  className="px-3 py-1.5 text-xs text-gray-400 bg-white/5 rounded-lg hover:bg-blue-500/10 hover:text-blue-300 transition-colors fira-code"
                >
                  {query}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/5">
            <div className="flex gap-3">
              <span className="text-blue-500 fira-code font-bold pt-2.5">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about experience, skills, projects..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-gray-200 placeholder-gray-600 outline-none fira-code text-sm py-2"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg text-sm font-medium transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
```

- [ ] **Step 3: Create `.env` file (do NOT commit)**

```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

The user must replace `your_gemini_api_key_here` with their actual Gemini API key from Google AI Studio.

- [ ] **Step 4: Update `App.tsx` — add AIChat**

Add import:
```tsx
import AIChat from './components/AIChat';
```

Add `<AIChat />` after `<Skills />`, before `</main>`.

- [ ] **Step 5: Verify in browser**

Expected: Terminal-style chat interface with header (traffic light dots + "career-assistant"), welcome message, suggested query buttons, and input field with "$" prompt. Sending a message works if API key is set; shows error gracefully if not.

- [ ] **Step 6: Commit**

```bash
git add services/geminiService.ts components/AIChat.tsx App.tsx
git commit -m "feat: add AI Chat section with Gemini API integration"
```

---

## Task 11: Final App.tsx Assembly and Static Assets

**Files:**
- Modify: `App.tsx` — ensure all imports and sections are in correct order
- Copy: static assets to `public/assets/`

- [ ] **Step 1: Verify final `App.tsx`**

The final `App.tsx` should have this exact structure:

```tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Skills from './components/Skills';
import AIChat from './components/AIChat';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/50">
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="py-32 px-4 max-w-5xl mx-auto">
          <div className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <img
                src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
                alt={PERSONAL_INFO.name}
                className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] object-cover flex-shrink-0 shadow-2xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Professional Profile</h2>
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> LinkedIn
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> GitHub
                  </a>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Publications />
        <Experience />
        <Skills />
        <AIChat />
      </main>

      <footer className="py-20 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">&copy; 2026 {PERSONAL_INFO.name} | {PERSONAL_INFO.company}</p>
          <p className="fira-code text-[10px] opacity-30 uppercase tracking-widest">NR/LTE Protocol Stack / Embedded Systems / Firmware Engineering</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
```

- [ ] **Step 2: Ensure static assets are in place**

Verify these files exist:
- `public/assets/profile.jpg` — user's profile photo
- `public/assets/Mediatek_CV.pdf` — latest CV
- `public/assets/papers/ICASI2018.pdf` — IEEE paper

If any are missing, copy them from the user's provided files.

- [ ] **Step 3: Full visual verification**

Run `npm run dev` and check every section in the browser:
1. Navbar: fixed, logo, email, nav links
2. Hero: photo, status badge, heading, tagline, buttons
3. About: photo, bio, social links
4. Projects: 6 cards in grid
5. Publications: 1 card with award badge + PDF download
6. Experience: 4 timeline entries
7. Skills: 6 category cards
8. AI Chat: chat interface with suggested queries
9. Footer: copyright text

- [ ] **Step 4: Build check**

Run: `npm run build`
Expected: `dist/` folder created with no TypeScript or build errors.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: finalize portfolio with all sections and static assets"
```

---

## Task 12: GitHub Pages Deployment

**Files:** None (deployment commands only)

- [ ] **Step 1: Create GitHub repository**

```bash
gh repo create chadcoco1444/chenghung-portfolio --public --source=. --remote=origin
```

Or if `gh` is not available, create the repo manually on GitHub and add remote:

```bash
git remote add origin https://github.com/chadcoco1444/chenghung-portfolio.git
```

- [ ] **Step 2: Push to main**

```bash
git branch -M main
git push -u origin main
```

- [ ] **Step 3: Deploy to GitHub Pages**

```bash
npm run deploy
```

This runs `npm run build` then `gh-pages -d dist`, which pushes the `dist/` folder to the `gh-pages` branch.

- [ ] **Step 4: Enable GitHub Pages**

Go to the repository Settings > Pages and ensure:
- Source: "Deploy from a branch"
- Branch: `gh-pages` / `/ (root)`

- [ ] **Step 5: Verify live site**

Visit `https://chadcoco1444.github.io/chenghung-portfolio/` and verify all sections render correctly. The AI Chat will only work if `VITE_GEMINI_API_KEY` was set at build time.

- [ ] **Step 6: Commit any final fixes**

If any issues are found during live verification, fix and redeploy.
