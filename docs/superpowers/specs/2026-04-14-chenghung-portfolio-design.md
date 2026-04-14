# Cheng-hung Portfolio Website Design Spec

## Overview

A personal portfolio website for Cheng-hung Hsieh (謝政宏), a Senior Firmware Engineer at MediaTek. Built with React + TypeScript + Vite + Tailwind CSS, deployed to GitHub Pages. Includes an AI Chat feature powered by Google Gemini API.

**Live URL:** `https://chadcoco1444.github.io/chenghung-portfolio/`
**GitHub Repo:** `chadcoco1444/chenghung-portfolio`

## Technology Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (CDN via index.html)
- **AI Chat:** Google Gemini API (`@google/genai`)
- **Deployment:** GitHub Pages via `gh-pages` package
- **Design:** Dark theme + glassmorphism aesthetic (matching reference site WenyuChiou/Wenyu-Portfolio)

## Site Sections

### 1. Navbar (Fixed Top Navigation)

- Left: `<ChenHung />` logo in monospace + email link `chadcoco1444@gmail.com`
- Right: Navigation links — About, Projects, Publications, Experience, Skills, Chat
- Glassmorphism background with backdrop blur
- Responsive: links hidden on mobile (hamburger menu placeholder)

### 2. Hero Section

- Animated gradient background halos (decorative blur elements)
- Profile photo with rounded corners, glowing border ring, hover scale animation
- Status badge: "Senior Engineer • MediaTek Inc." with pulsing indicator
- Large heading: `CHENG-HUNG HSIEH`
- Tagline: "Senior Firmware Engineer specializing in NR/LTE Cellular Protocol Stack and Embedded Systems Development"
- Two CTA buttons: "Download CV" (links to Mediatek_CV.pdf) and "Inquire AI Agent" (scrolls to chat)

### 3. About Section

- Glassmorphism card with rounded corners
- Left: Profile photo (same as Hero section)
- Right: Professional Summary text from CV:
  > "Senior Firmware Engineer with over 7 years of experience in embedded software development, specializing in NR/LTE Cellular Protocol Stack and Automotive Electronic software. Proven expertise in 3GPP RRC/NAS protocols, A-GPS/LPP positioning, system-level memory optimization, and automation testing. Adept at coordinating cross-functional teams and leading critical feature developments from design to commercialization."
- Social links with colored dot indicators:
  - LinkedIn: `https://www.linkedin.com/in/cheng-hung-hsieh-b36487b6`
  - GitHub: `https://github.com/chadcoco1444`
  - Email: `chadcoco1444@gmail.com`

### 4. Projects Section

Title: "Engineering Portfolio"
Subtitle: "SELECTIVE PROJECTS SPANNING CELLULAR PROTOCOL STACK, EMBEDDED SYSTEMS, AND HIGH-PERFORMANCE COMPUTING"

Responsive grid (1 col mobile, 2 col tablet, 3 col desktop). Each project card has:
- Gradient/colored header area with tech badges
- Title, description (3-line clamp), action buttons

**Project data:**

| ID | Title | Description | Tech Stack |
|----|-------|-------------|------------|
| 1 | NTN & 5G RedCap Cell Selection | Led development of Terrestrial/Non-Terrestrial Networks (NTN) and 5G RedCap cell selection features based on 3GPP R17. Optimized Power Saving in Out-of-Service scenarios and enhanced Dual SIM capabilities. | C/C++, 3GPP R17, RRC, NAS, NTN |
| 2 | A-GPS/LPP Positioning Protocols | Developed LPP Control Plane (CP) and User Plane (UP) for positioning features. Maintained A-GPS modules supporting CP/UP procedures (MOLR, MTLR, SI, NI). | C/C++, LPP, A-GPS, SUPL, 3GPP |
| 3 | Modem Footprint Optimization | Spearheaded system-level footprint reduction across RRC modules. Leveraged SPLUNK Big Data analytics for field trial analysis. Redesigned data structures and AI tensor memory management for significant heap savings. | C/C++, SPLUNK, Big Data, RRC |
| 4 | Unit Testing & Automation Framework | Architected highly efficient unit-testing frameworks accelerating regression cycles. Developed automated log-parsing tools for customer field issue triage and code security (Coverity/UBSan). | C/C++, Python, Coverity, UBSan |
| 5 | Wireless Charger 15W Firmware | Developed firmware for 15W Wireless Charger on NXP platform. Integrated overheat protection and Foreign Object Detection (FOD). | C, NXP MCU, I2C, SPI, LIN, ADC |
| 6 | GPU-Accelerated NIDS (IEEE ICASI 2018) | Proposed hierarchical parallelism for accelerating network intrusion detection on multiple GPUs. Achieved 70 Gbps throughput (40x faster than Snort AC) and 99.2% memory reduction. Best Conference Paper Award. | C/C++, CUDA, Aho-Corasick, GPU, Snort |

### 5. Publications Section

Title: "Publications"
Glassmorphism cards with document icon, download button.

**Publication data:**

| Title | Authors | Conference | Year | Award | PDF |
|-------|---------|------------|------|-------|-----|
| A Novel Hierarchical Parallelism for Accelerating NIDS Using GPUs | Cheng-Hung Lin, Cheng-Hung Hsieh | IEEE ICASI 2018 | 2018 | Best Conference Paper Award | assets/papers/ICASI2018.pdf |

### 6. Experience Section (Timeline)

Title: "Professional Journey"
Subtitle: "CHRONOLOGICAL CAREER & ACADEMIC EVOLUTION"

Vertical timeline with alternating left/right cards (zigzag on desktop, linear on mobile). Each card has:
- Period badge, role title, company name
- Bullet-point descriptions
- Skill tags

**Experience data:**

**Entry 1: MediaTek Inc. (2021 – Present)**
- Role: Senior Firmware Engineer (Protocol Stack)
- Location: Taipei, Taiwan
- Descriptions:
  - Led development of Terrestrial/Non-Terrestrial Networks (NTN) and 5G RedCap cell selection features based on 3GPP R17
  - Developed LPP Control Plane and User Plane for positioning features, maintained A-GPS modules
  - Spearheaded system-level footprint reduction, leveraged SPLUNK Big Data analytics, redesigned data structures and AI tensor memory management
  - Served as Feature Project Manager, orchestrating cross-layer (L1/NAS/RRC) development. Architected unit-testing frameworks and automated log-parsing tools
- Skills: C/C++, 3GPP, RRC, NAS, LPP, A-GPS, NTN, 5G RedCap, SPLUNK

**Entry 2: LITEON Technology Corp. (2018 – 2021)**
- Role: Automotive Electronic Software Engineer
- Location: Taipei, Taiwan
- Descriptions:
  - Developed firmware for 15W Wireless Chargers and Head Unit Displays (HUD) on NXP and STM32 platforms
  - Integrated overheat protection and Foreign Object Detection (FOD) for wireless charger systems
  - Developed communication interfaces including I2C, SPI, CAN, and LIN
  - Complied with ISO 26262 functional safety and ASPICE procedures
- Skills: C/C++, NXP, STM32, ARM Cortex-M3/A7, I2C, SPI, CAN, LIN, ISO 26262, ASPICE

**Entry 3: National Taiwan Normal University (2016 – 2018)**
- Role: M.S. in Electrical Engineering
- Location: Taipei, Taiwan
- Descriptions:
  - Research focus on GPU-accelerated network intrusion detection systems
  - Thesis: "A Novel Hierarchical Parallelism for Accelerating NIDS Using GPUs"
  - Awarded Best Conference Paper at IEEE ICASI 2018
- Skills: C/C++, CUDA, GPU Programming, Aho-Corasick, Parallel Computing

**Entry 4: National Taiwan Normal University (2012 – 2016)**
- Role: B.S. in Electrical Engineering
- Location: Taipei, Taiwan
- Descriptions:
  - Coursework: Data Structures, Operating Systems, Computer Architecture, Advanced Computer Networks, Parallel Computing, Computer Vision, Signal Processing
- Skills: C/C++, Python, Electrical Engineering

### 7. Skills Section

Title: "Technical Arsenal"
Subtitle: "CORE COMPETENCIES ACROSS FIRMWARE AND PROTOCOL DEVELOPMENT"

Three-column grid of glassmorphism cards. Each card has numbered badge, category heading with blue accent bar, and skill tags.

**Skills data:**

| # | Category | Skills |
|---|----------|--------|
| 01 | Protocols & Standards | NR/LTE Protocol Stack, RRC, NAS, 3GPP 38.331, 3GPP 38.304, 3GPP 37.355, Cell Selection, A-GPS, LPP/LPPe, SUPL |
| 02 | Programming & Tools | C/C++, Python, CUDA, POSIX Thread, Git, SVN, Oscilloscope, JTAG/SWD, Parallel Computing |
| 03 | Embedded Systems | RTOS, NXP MCUs/MPUs, STM32, ARM Cortex-M3, ARM Cortex-A7, I2C, SPI, CAN, LIN, ADC, PWM, IPC |
| 04 | Domain Knowledge | 3GPP Protocol Stack, Terrestrial Networks, Non-Terrestrial Networks (NTN), 5G RedCap, Cell Selection |
| 05 | Automotive Standards | ISO 26262 Functional Safety, ASPICE |
| 06 | Data & Analytics | SPLUNK, Big Data Analytics, Coverity, UBSan |

### 8. AI Chat Section

Title: "AI Career Assistant"
Subtitle: "Ask me anything about Cheng-hung's experience and skills"

- Glassmorphism chat container
- Message bubbles for user and assistant
- Text input with send button
- Powered by Google Gemini API
- System prompt pre-loaded with full CV information so the AI can answer questions about Cheng-hung's career, skills, projects, and education
- Supports both English and Chinese queries
- Requires `GEMINI_API_KEY` environment variable

### 9. Footer

```
© 2026 Cheng-hung Hsieh | MediaTek Inc.
NR/LTE PROTOCOL STACK / EMBEDDED SYSTEMS / FIRMWARE ENGINEERING
```

## File Structure

```
chenghung-portfolio/
├── index.html              # HTML shell with CDN imports (React, Tailwind, fonts)
├── index.tsx               # React entry point
├── index.css               # Custom styles (glassmorphism, gradients, animations)
├── App.tsx                 # Main app component with all sections
├── constants.ts            # All personal data (PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILLS, PUBLICATIONS)
├── types.ts                # TypeScript interfaces (Project, Experience, SkillCategory, Publication, ChatMessage)
├── vite.config.ts          # Vite config with base path '/chenghung-portfolio/'
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript config
├── .gitignore              # Standard gitignore
├── components/
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── Hero.tsx            # Hero section with photo and CTAs
│   ├── Projects.tsx        # Project cards grid
│   ├── Publications.tsx    # Publications with download links
│   ├── Experience.tsx      # Timeline layout
│   ├── Skills.tsx          # Skills grid
│   └── AIChat.tsx          # Gemini-powered chat interface
└── public/
    └── assets/
        ├── profile.jpg     # Profile photo
        ├── Mediatek_CV.pdf # Latest CV for download
        └── papers/
            └── ICASI2018.pdf  # IEEE ICASI 2018 paper
```

## Deployment

- `npm run dev` — local development on port 3000
- `npm run build` — production build
- `npm run deploy` — deploy to GitHub Pages via `gh-pages` package
- Base path: `/chenghung-portfolio/`

## Environment Variables

- `GEMINI_API_KEY` — required for AI Chat feature. Set in `.env` file (excluded from git).
