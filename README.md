# Cheng-hung Hsieh | Portfolio

Personal portfolio website built with React + TypeScript + Vite.

**Live:** https://chadcoco1444.github.io/chenghung-portfolio/

## Features

- Dark theme with glassmorphism design
- Responsive layout (mobile / tablet / desktop)
- Sections: Hero, About, Projects, Publications, Experience Timeline, Skills, Contact
- Contact form with email forwarding
- Deployed to GitHub Pages

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- GitHub Pages (`gh-pages`)

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

Opens at http://localhost:3000/chenghung-portfolio/

### Build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to the `gh-pages` branch.

## Project Structure

```
├── index.html            # HTML entry point
├── index.tsx             # React mount
├── App.tsx               # Main app (Navbar + sections + Footer)
├── constants.ts          # All portfolio data
├── types.ts              # TypeScript interfaces
├── components/
│   ├── Navbar.tsx        # Fixed top navigation
│   ├── Hero.tsx          # Landing section
│   ├── Projects.tsx      # Project cards grid
│   ├── Publications.tsx  # Publications with PDF download
│   ├── Experience.tsx    # Timeline layout
│   ├── Skills.tsx        # Skills category grid
│   └── Contact.tsx       # Contact form (mailto)
└── public/assets/        # Static files (photos, PDFs)
```

## License

MIT
