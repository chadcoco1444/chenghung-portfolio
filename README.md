# Cheng-hung Hsieh | Portfolio

Personal portfolio website built with React + TypeScript + Vite.

**Live:** https://chadcoco1444.github.io/chenghung-portfolio/

## Features

- Dark theme with glassmorphism design
- Responsive layout (mobile / tablet / desktop)
- Sections: Hero, About, Projects, Publications, Experience Timeline, Skills, AI Chat
- AI Career Assistant powered by Google Gemini API
- Deployed to GitHub Pages

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Google Gemini API (`@google/genai`)
- GitHub Pages (`gh-pages`)

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Set up Gemini API Key (optional, for AI Chat)

1. Get a free API key from [Google AI Studio](https://aistudio.google.com/apikey)
2. Create a `.env` file in the project root:

```
VITE_GEMINI_API_KEY=your_api_key_here
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

> **Note:** To include the Gemini API key in the deployed build, set `VITE_GEMINI_API_KEY` in your environment before running `npm run deploy`.

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
│   └── AIChat.tsx        # Gemini-powered chat
├── services/
│   └── geminiService.ts  # Gemini API wrapper
└── public/assets/        # Static files (photos, PDFs)
```

## License

MIT
