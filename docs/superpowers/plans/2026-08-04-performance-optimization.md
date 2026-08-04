# Performance Optimization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the missing-favicon 404, move Tailwind from a CDN `<script>` to a build-time PostCSS compile, and right-size the hero profile photo — with no visible change to the site's current look, animations, or layout.

**Architecture:** Three independent, non-overlapping changes against the same static Vite site: (1) two new static asset files (`favicon.svg`, `favicon.ico`) plus two `<link>` tags in `index.html`; (2) a `tailwind.config.js` + `postcss.config.js` pair that activates the `@tailwind` directives already sitting inert in `index.css`, replacing the CDN `<script>` in `index.html`; (3) a resized/WebP-converted profile photo wired into `Hero.tsx` via `<picture>`. No backend, no new runtime dependencies — `react`/`react-dom` are untouched.

**Tech Stack:** React 19 + TypeScript + Vite (unchanged). New devDependencies: `tailwindcss@^3`, `postcss`, `autoprefixer`. Two npm packages (`sharp`, `png-to-ico`) are installed with `--no-save` purely as one-off local tools to generate static image assets — they are not part of the build and must not end up in `package.json`.

## Global Constraints

- No test framework exists in this project (no vitest/jest in `package.json`) — verification is manual (`npm run build` + browser check), not automated tests. Do not introduce a test framework for this change.
- Tailwind v3, not v4 — the design spec chose v3 specifically to keep the JS-config shape (`tailwind.config.js` with `theme.extend`) close to the existing CDN inline config, minimizing migration risk.
- No new *runtime* npm dependencies. `tailwindcss`/`postcss`/`autoprefixer` are devDependencies only (needed at build time, not shipped to the browser). `sharp`/`png-to-ico` are transient, `--no-save` installs used only to generate static files in this plan — do not add them to `package.json`.
- Zero visual regressions: colors, fonts, spacing, animations, and layout must look identical after these changes. This is a pure infra/performance change, not a redesign.
- Source spec: `docs/superpowers/specs/2026-08-04-performance-optimization-design.md`.

---

### Task 1: Favicon

**Files:**
- Create: `public/favicon.svg`
- Create: `public/favicon.ico`
- Modify: `index.html` (add two `<link>` tags in `<head>`)

**Interfaces:**
- Produces: `public/favicon.svg`, `public/favicon.ico` — static assets, not consumed by any other task.

- [ ] **Step 1: Create the SVG favicon**

Create `public/favicon.svg` with this exact content. It's a `<>` code-bracket mark (no text/font dependency, so it renders identically everywhere SVG favicons are supported) in the site's existing amber→cyan gradient on the `midnight` background color:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#e2a84b"/>
      <stop offset="1" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="7" fill="#0a0f1e"/>
  <polyline points="13,8 6,16 13,24" fill="none" stroke="url(#g)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="19,8 26,16 19,24" fill="none" stroke="url(#g)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

- [ ] **Step 2: Generate favicon.ico from the SVG**

Install two transient tools (not saved to `package.json`) and run a one-off script:

```bash
npm install --no-save sharp png-to-ico
```

```bash
cat > generate-favicon-ico.mjs <<'EOF'
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync, readFileSync } from 'fs';

const svg = readFileSync('public/favicon.svg');
const png16 = await sharp(svg).resize(16, 16).png().toBuffer();
const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
const ico = await pngToIco([png16, png32]);
writeFileSync('public/favicon.ico', ico);
console.log('wrote public/favicon.ico');
EOF
node generate-favicon-ico.mjs
rm generate-favicon-ico.mjs
```

Expected: prints `wrote public/favicon.ico`, and `public/favicon.ico` exists (check with `ls -la public/favicon.ico`). The temporary `generate-favicon-ico.mjs` script is deleted immediately after — it's a one-off tool, not part of the codebase.

- [ ] **Step 3: Wire the favicon into index.html**

In `index.html`, the `<head>` currently starts like this:

```html
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cheng-hung Hsieh | Senior Firmware Engineer</title>
```

Insert two `<link>` tags between the viewport meta and the `<title>`:

```html
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <title>Cheng-hung Hsieh | Senior Firmware Engineer</title>
```

- [ ] **Step 4: Verify in the browser**

Run: `npm run build && npm run preview`, open the printed local URL, open DevTools → Network tab, reload.

Expected: requests for `favicon.svg` and `favicon.ico` both return `200` (not `404`), and the `<>` icon appears in the browser tab.

- [ ] **Step 5: Commit**

```bash
git add public/favicon.svg public/favicon.ico index.html
git commit -m "fix: add favicon to resolve production 404"
```

---

### Task 2: Migrate Tailwind from CDN to build-time compile

**Files:**
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Modify: `package.json` (add devDependencies)
- Modify: `index.html` (remove CDN `<script>` block)

**Interfaces:**
- Consumes: nothing from Task 1 (non-overlapping region of `index.html`).
- Produces: nothing consumed by other tasks — `index.css`'s existing (currently inert) `@tailwind base/components/utilities` directives start being processed by this task's `postcss.config.js`, with no code change to `index.css` itself.

- [ ] **Step 1: Install Tailwind v3 and its PostCSS dependencies**

```bash
npm install -D tailwindcss@^3 postcss autoprefixer
```

Expected: `package.json`'s `devDependencies` now includes `tailwindcss`, `postcss`, and `autoprefixer`; `package-lock.json` is updated.

- [ ] **Step 2: Create tailwind.config.js**

Create `tailwind.config.js` at the repo root with the theme settings copied from the CDN inline config being removed in Step 4 (same colors, same font families):

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0f1e',
        surface: '#111827',
        amber: {
          400: '#e2a84b',
          500: '#d4973f',
          600: '#b8802e',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 3: Create postcss.config.js**

Create `postcss.config.js` at the repo root:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 4: Remove the Tailwind CDN script from index.html**

In `index.html`, find this block (it sits between the Twitter Card meta tags and the Google Fonts `preconnect` links):

```html
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              midnight: '#0a0f1e',
              surface: '#111827',
              amber: { 400: '#e2a84b', 500: '#d4973f', 600: '#b8802e' },
              cyan: { 400: '#22d3ee', 500: '#06b6d4' },
            },
            fontFamily: {
              display: ['Syne', 'sans-serif'],
              body: ['Outfit', 'sans-serif'],
              mono: ['JetBrains Mono', 'monospace'],
            },
          }
        }
      }
    </script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
```

Delete the two `<script>` tags entirely, leaving the `<link rel="preconnect" ...>` line and everything after it untouched:

```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
```

- [ ] **Step 5: Build and verify Tailwind output**

Run: `npm run build`

Expected: build succeeds with no errors. Then check the generated CSS actually contains the custom theme classes (confirms `tailwind.config.js`'s `content` paths found the utility classes in use):

```bash
grep -l "midnight" dist/assets/*.css
```

Expected: prints the path to the generated CSS file (e.g. `dist/assets/index-XXXXXXXX.css`), confirming the `bg-midnight` (and similar) classes were compiled in.

- [ ] **Step 6: Manual visual smoke test**

Run: `npm run dev`, open the local URL in a browser.

Walk through and confirm nothing looks broken or unstyled compared to before:
- Homepage: Hero section (gradient text, glass navbar, amber glow button), Projects cards, Skills grid, Experience timeline, Publications, Contact form.
- Resize to mobile width, open the hamburger menu (tests `Navbar.tsx`'s dynamic `className={\`...\${isOpen ? ... : ''}\`}` branches actually got compiled).
- Contact form: check the "Send Message" button styling and an empty-field validation state.

Expected: visually identical to the site before this task (colors, fonts, spacing, animations all present) — no `console` warning about `cdn.tailwindcss.com` is present anymore, and no unstyled/black-and-white "raw HTML" flashes.

- [ ] **Step 7: Commit**

```bash
git add tailwind.config.js postcss.config.js package.json package-lock.json index.html
git commit -m "perf: migrate Tailwind from CDN script to build-time compile"
```

---

### Task 3: Optimize the hero profile photo

**Files:**
- Modify: `public/assets/profile.jpg` (replaced with a resized version)
- Create: `public/assets/profile.webp`
- Modify: `components/Hero.tsx`

**Interfaces:**
- Consumes: nothing from Tasks 1–2.
- Produces: `public/assets/profile.webp` at 400×558, referenced only from `Hero.tsx` in this task.

- [ ] **Step 1: Generate the resized JPEG and WebP versions**

The photo is only ever displayed at up to 176×176 CSS px (`Hero.tsx`'s `md:w-44 md:h-44`, cropped with `object-cover`). 400×558 preserves the original 842:1174 aspect ratio and comfortably covers 2x retina at that display size.

```bash
npm install --no-save sharp
```

```bash
cat > generate-profile-images.mjs <<'EOF'
import sharp from 'sharp';
import { renameSync } from 'fs';

const WIDTH = 400;
const HEIGHT = 558;

await sharp('public/assets/profile.jpg')
  .resize(WIDTH, HEIGHT)
  .webp({ quality: 82 })
  .toFile('public/assets/profile.webp');

await sharp('public/assets/profile.jpg')
  .resize(WIDTH, HEIGHT)
  .jpeg({ quality: 85 })
  .toFile('public/assets/profile-resized.jpg');

renameSync('public/assets/profile-resized.jpg', 'public/assets/profile.jpg');
console.log('wrote public/assets/profile.webp and resized public/assets/profile.jpg');
EOF
node generate-profile-images.mjs
rm generate-profile-images.mjs
```

Expected: prints the success message. Verify both files exist and are smaller than the original 116KB:

```bash
ls -la public/assets/profile.jpg public/assets/profile.webp
```

Expected: both files well under 116KB (typically single-digit-to-low-double-digit KB at this resolution/quality).

- [ ] **Step 2: Wire `<picture>` into Hero.tsx**

`components/Hero.tsx` currently has this profile photo block (lines 16–31):

```tsx
            <img
              src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
              alt={PERSONAL_INFO.name}
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'relative w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-amber-400 to-cyan-400 flex items-center justify-center text-5xl font-bold text-midnight shadow-2xl';
                  fallback.textContent = PERSONAL_INFO.name.charAt(0);
                  parent.appendChild(fallback);
                }
              }}
            />
```

Replace it with this. The `<img>` is now nested one level deeper inside `<picture>`, so the `onError` handler's fallback logic is updated to walk up to the *grandparent* (the outer `relative group` div) instead of the immediate parent, so the fallback avatar still lands in exactly the same place in the DOM as before:

```tsx
            <picture>
              <source srcSet={`${import.meta.env.BASE_URL}assets/profile.webp`} type="image/webp" />
              <img
                src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
                alt={PERSONAL_INFO.name}
                width={400}
                height={558}
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  const picture = target.parentElement;
                  const group = picture?.parentElement;
                  if (picture) picture.style.display = 'none';
                  if (group) {
                    const fallback = document.createElement('div');
                    fallback.className = 'relative w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-amber-400 to-cyan-400 flex items-center justify-center text-5xl font-bold text-midnight shadow-2xl';
                    fallback.textContent = PERSONAL_INFO.name.charAt(0);
                    group.appendChild(fallback);
                  }
                }}
              />
            </picture>
```

- [ ] **Step 3: Build and verify**

Run: `npm run build && npm run preview`, open the local URL, open DevTools → Network tab, reload.

Expected:
- The hero photo loads (same crop/position as before, no layout shift).
- In the Network tab, the loaded image request is for `profile.webp` in browsers that support WebP (all evergreen browsers do) — right-click the image → Inspect to confirm the `<picture>`/`<source>` markup is present.
- No console errors.

- [ ] **Step 4: Test the error fallback path still works**

The `onError` handler was restructured in Step 2 to account for the new `<picture>` wrapper (walks up to the grandparent instead of the parent). Verify it still works: in the browser, open DevTools → Elements, select the `<img>` node inside `<picture>`, then in the Console run:

```js
$0.dispatchEvent(new Event('error'))
```

Expected: the photo box is replaced by a gradient circle showing the first letter of the name (e.g. "C"), in the same position and size the photo occupied — confirming the fallback still lands inside the outer `relative group` div correctly.

- [ ] **Step 5: Commit**

```bash
git add public/assets/profile.jpg public/assets/profile.webp components/Hero.tsx
git commit -m "perf: resize hero photo and add WebP variant"
```

---

## Self-Review Notes

- **Spec coverage:** All three spec sections map directly to tasks — Favicon (spec §1 → Task 1), Tailwind CDN→build (spec §2 → Task 2, including the purge-safety finding baked into the `content` paths in Step 2), Hero image (spec §3 → Task 3, including the `width`/`height` CLS fix and "no lazy-loading" requirement, satisfied by omission).
- **Placeholder scan:** No TBD/TODO markers; every step has literal file contents or literal commands, not descriptions of what to do.
- **Type consistency:** `profile.webp` is the exact filename produced by Task 3 Step 1's script and the exact filename referenced in Task 3 Step 2's `<source srcSet>` — no drift. `favicon.svg`/`favicon.ico` filenames match between Task 1 Step 1/2 (creation) and Step 3 (`index.html` reference).
- **DOM-structure correction from spec:** The design spec said the existing `onError` fallback is "preserved unchanged." During planning this was checked against the actual `<picture>` wrapper change and found to need a one-line adjustment (walk up to grandparent, hide `picture` instead of `img`) to keep the fallback landing in the same DOM position — this is a necessary correction to make the spec's intent ("preserve the fallback behavior") actually hold, not a scope change.
