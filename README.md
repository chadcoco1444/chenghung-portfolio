# Cheng-hung Hsieh | Portfolio

Personal portfolio website built with React + TypeScript + Vite.

**Live:** https://tradematrix.dev/

## Features

- Dark theme with glassmorphism design
- Responsive layout (mobile / tablet / desktop)
- Sections: Hero, About, Projects, Open Source, Publications, Experience Timeline, Skills, Contact
- Contact form via Web3Forms
- Deployed to GitHub Pages on a custom domain

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS (build-time compile via PostCSS)
- GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at http://localhost:3000/

### Build

```bash
npm run build
```

### Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and deploys it to GitHub Pages automatically — there's no manual
deploy step.

## Project Structure

```
├── index.html            # HTML entry point
├── index.tsx             # React mount
├── App.tsx               # Main app (Navbar + sections + Footer)
├── index.css             # Tailwind directives + custom styles/animations
├── constants.ts          # All portfolio data
├── types.ts              # TypeScript interfaces
├── tailwind.config.js    # Tailwind theme (colors, fonts)
├── postcss.config.js     # PostCSS pipeline (Tailwind + Autoprefixer)
├── hooks/
│   └── useReveal.ts      # Scroll-reveal animation hook
├── components/
│   ├── Navbar.tsx        # Fixed top navigation
│   ├── Hero.tsx          # Landing section
│   ├── Projects.tsx      # Project cards grid
│   ├── OpenSource.tsx    # GitHub open-source project showcase
│   ├── Publications.tsx  # Publications with PDF download
│   ├── Experience.tsx    # Timeline layout
│   ├── Skills.tsx        # Skills category grid
│   └── Contact.tsx       # Contact form (Web3Forms)
└── public/
    ├── favicon.svg / favicon.ico
    ├── robots.txt / sitemap.xml
    └── assets/            # Static files (photos, PDFs, OG image)
```

## License

MIT
