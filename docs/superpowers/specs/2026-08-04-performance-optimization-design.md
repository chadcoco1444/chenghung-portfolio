# Performance Optimization: Favicon, Tailwind Build Migration, Image Optimization

## Context

A broader repo audit identified three independent optimization tracks: **performance**, **SEO/metadata**, and **code quality**. Performance was prioritized first since it includes a known production bug (missing favicon) and a clear anti-pattern (Tailwind loaded via CDN in production). SEO and code quality are tracked separately as follow-up sub-projects, not covered by this spec.

## Problem

1. **Missing favicon**: no favicon asset exists in `public/`, and `index.html` has no `<link rel="icon">` tag. Browsers fall back to requesting `/favicon.ico`, which 404s in production.
2. **Tailwind via CDN in production**: `index.html` loads `https://cdn.tailwindcss.com` and configures the theme (colors, fonts) via an inline `<script>` block. This compiles Tailwind's JIT engine in the visitor's browser on every page load, prints a "cdn.tailwindcss.com should not be used in production" console warning, and can't be minified/tree-shaken the way a build-time compile can. Separately, `index.css` already contains `@tailwind base/components/utilities` directives from a prior, incomplete migration attempt — but with no `tailwindcss` package or config installed, PostCSS never processes them, so they're inert.
3. **Oversized hero image**: `public/assets/profile.jpg` is 842×1174 (116KB) but is only ever displayed at up to 176×176 CSS px (`Hero.tsx`), roughly 5x more resolution than needed even at 2x retina. It's also plain JPEG with no WebP variant, and the `<img>` tag has no explicit `width`/`height`, contributing to layout shift.

## Goal

Fix the favicon 404, move Tailwind to a build-time compile step (removing the CDN script), and right-size the hero image — all with no visible regression to the site's current look, animations, or layout.

## Approach

### 1. Favicon

Design a single simple SVG icon reusing the existing `< />` bracket motif from the Navbar's text logo, styled with the existing brand gradient (amber `#e2a84b` → cyan `#22d3ee`) on a dark background, at a 32×32 viewBox so it stays legible at 16px.

Export two files from the same design:
- `public/favicon.svg` — primary, referenced via `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`.
- `public/favicon.ico` — legacy fallback, referenced via `<link rel="icon" href="/favicon.ico">`, so browsers/clients that don't support SVG favicons (or that speculatively request `/favicon.ico` regardless of `<link>` tags) get a 200 instead of a 404.

Both links added to `index.html` `<head>`.

### 2. Tailwind CDN → build-time compile (v3)

Chosen over Tailwind v4 to minimize migration risk: v3 keeps the same JS-config shape (`tailwind.config.js` with `theme.extend`) as the current CDN inline config, so the port is close to a direct copy. v4's CSS-first `@theme` config would require a larger rewrite of `index.css` for no functional benefit on a project this size.

- Add devDependencies: `tailwindcss@^3`, `postcss`, `autoprefixer`.
- Add `tailwind.config.js`: `content: ['./index.html', './App.tsx', './components/**/*.tsx']`; `theme.extend.colors` = `{ midnight: '#0a0f1e', surface: '#111827', amber: { 400: '#e2a84b', 500: '#d4973f', 600: '#b8802e' }, cyan: { 400: '#22d3ee', 500: '#06b6d4' } }`; `theme.extend.fontFamily` = `{ display: ['Syne', 'sans-serif'], body: ['Outfit', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] }` — copied verbatim from the current CDN inline config.
- Add `postcss.config.js` wiring `tailwindcss` + `autoprefixer`.
- Remove the `<script src="https://cdn.tailwindcss.com">` tag and the inline `tailwind.config = {...}` script block from `index.html`.
- No change needed to how `index.css` is linked — Vite already runs any CSS referenced via `<link rel="stylesheet">` in `index.html` through its PostCSS pipeline, so the existing (currently inert) `@tailwind` directives start working as soon as `postcss.config.js` exists.

**Purge safety check (done during design, not implementation)**: searched all `.tsx` files for dynamically-constructed Tailwind class names (e.g. `` `bg-${color}-400` ``), which Tailwind's content scanner can't detect since it matches complete class-name substrings in source text. All dynamic `className={\`...\`}` usages found (`Navbar.tsx`, `Experience.tsx`) interpolate complete, static class strings via ternaries (e.g. `isOpen ? 'rotate-45 translate-y-[7px]' : ''`), not partial class names — safe under content-based purging.

### 3. Hero image optimization

- Resize `profile.jpg` down to ~400×558 (preserves aspect ratio, covers 2x retina at the 176×176 max display size).
- Generate a `.webp` version at the same dimensions; keep the resized `.jpg` as the fallback.
- Update `components/Hero.tsx` to wrap the `<img>` in a `<picture>` element with a `<source type="image/webp" srcSet=".../profile.webp">` and the existing `<img>` (now pointing at the resized `profile.jpg`) as fallback.
- Add explicit `width={400} height={558}` (or the final chosen dimensions) to the `<img>` to reduce layout shift.
- No lazy-loading: this image is above the fold and a likely LCP element, so it should keep loading eagerly (no `loading="lazy"` attribute added).
- The existing `onError` fallback (renders a initial-letter avatar if the image fails to load) is preserved unchanged on the `<img>`.

## Error Handling

- Favicon: if either file fails to load, browsers silently fall back to no icon — no user-facing error path needed.
- Tailwind build: a config or content-path mistake surfaces at build time (`npm run build` fails or produces visibly unstyled output) — not a runtime concern.
- Image: the existing `<img onError>` fallback (initials avatar) continues to cover the case where `profile.jpg` fails to load; the `<picture>` wrapper doesn't change this behavior since `onError` stays on the `<img>` fallback element.

## Testing / Verification

- `npm run build` succeeds (TypeScript + Tailwind + Vite).
- Manually diff `dist/index.html`'s generated CSS against the current CDN output to confirm no visual regressions — walk through the homepage, mobile nav menu, and Contact form locally (`npm run dev`) since these use the dynamic-class patterns checked above.
- DevTools Network tab: confirm `/favicon.svg` and `/favicon.ico` return 200, not 404.
- DevTools Network tab: confirm `profile.webp` loads in browsers that support it, `profile.jpg` fallback loads otherwise (or via `<picture>` devtools inspection).
- Optional: run Lighthouse before/after as a non-blocking performance comparison (not a pass/fail gate).

## Out of Scope

- SEO/metadata cleanup (stale README URL, `robots.txt`, `sitemap.xml`) — separate sub-project.
- Code quality (ESLint/Prettier setup, splitting `OpenSource.tsx` and `Projects.tsx`) — separate sub-project.
- Tailwind v4 migration — deferred; v3 chosen for this pass.
