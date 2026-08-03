# Web3Forms Contact Form Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the `mailto:`-based contact form submission in `components/Contact.tsx` with a direct `fetch()` POST to Web3Forms, so messages reach the site owner without requiring the visitor to have a configured email client.

**Architecture:** Pure client-side change — no backend, no new hosting. The existing form's `handleSubmit` becomes an async function that POSTs JSON to Web3Forms' public submit endpoint and switches the UI between three states: idle, submitting (button disabled, "Sending..."), and error (inline message, form values preserved, retry allowed). Success continues to use the form's existing `sent` state and confirmation panel.

**Tech Stack:** React 19 + TypeScript, browser `fetch` API (no new npm dependency), Web3Forms REST API.

## Global Constraints

- No test framework exists in this project (no vitest/jest in `package.json`) — verification is manual (`npm run build` + manual browser test), not automated tests. Do not introduce a test framework for this change.
- No new npm dependencies — use the native `fetch` API, not `@emailjs/browser` or any form SDK.
- The Web3Forms access key is **not treated as a secret**: `chadcoco1444/chenghung-portfolio` is a public repo and the key ends up in the shipped JS bundle regardless of where it's stored, so it is hardcoded directly in `constants.ts` (no `.env`, no GitHub Actions secret).
- Web3Forms access key: `d3d4c6f2-ce66-45b5-b17d-000528d71852`, whitelisted for origin `https://tradematrix.dev`. A submission from `http://localhost:3000` (the local dev server) may be rejected by Web3Forms as an origin mismatch — this is expected and is **not** a code bug. Real end-to-end delivery can only be confirmed after deploying to `https://tradematrix.dev`.

---

### Task 1: Wire up Web3Forms submission in Contact.tsx

**Files:**
- Modify: `constants.ts` (add access key export)
- Modify: `components/Contact.tsx` (full rewrite of submit logic + related JSX)

**Interfaces:**
- Produces: `WEB3FORMS_ACCESS_KEY` (string constant, exported from `constants.ts`) — consumed by `Contact.tsx`.

- [ ] **Step 1: Add the access key constant to `constants.ts`**

Add this as a new top-level export, right after the `PERSONAL_INFO` export closes (after line 14, before `export const PROJECTS`):

```ts
export const WEB3FORMS_ACCESS_KEY = 'd3d4c6f2-ce66-45b5-b17d-000528d71852';
```

- [ ] **Step 2: Replace `components/Contact.tsx` with the version below**

This changes the import to pull in `WEB3FORMS_ACCESS_KEY`, adds `submitting`/`error` state, rewrites `handleSubmit` to call Web3Forms instead of `mailto:`, updates the success panel copy (it previously said "Email client opened! Please send the email from your mail app to complete." — that's no longer true since the message is now actually sent, not just handed to a mail client), adds an error banner, and disables the submit button with a "Sending..." label while in flight. Each text field's `onChange` now also clears any existing error, so a visitor editing the form after a failed attempt doesn't see a stale error message.

```tsx
import React, { useState } from 'react';
import { PERSONAL_INFO, WEB3FORMS_ACCESS_KEY } from '../constants';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          subject: subject || `Message from ${name}`,
          message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSent(true);
      } else {
        setError("Couldn't send — check your connection and try again.");
      }
    } catch {
      setError("Couldn't send — check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-black font-display mb-4 tracking-tighter">Get In Touch</h2>
          <p className="text-gray-500 font-mono text-sm">Have a project in mind? Let&apos;s talk.</p>
        </div>

        <div className="glass rounded-2xl overflow-hidden border border-white/5 reveal">
          {/* Header */}
          <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-xs text-gray-500 font-mono">contact-form</span>
            </div>
            <span className="text-[10px] font-mono text-amber-400/60 uppercase tracking-widest">
              Open to Opportunities
            </span>
          </div>

          {/* Contact Info */}
          <div className="px-6 pt-6 pb-4 border-b border-white/5">
            <div className="flex flex-wrap gap-6 text-sm">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                {PERSONAL_INFO.email}
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          {sent ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
              <p className="text-gray-400 text-sm mb-6">Thanks for reaching out — I'll get back to you soon.</p>
              <button
                onClick={() => { setSent(false); setName(''); setEmail(''); setSubject(''); setMessage(''); }}
                className="px-6 py-2 border border-white/10 hover:border-amber-400/50 text-gray-300 hover:text-white rounded-lg text-sm transition-all duration-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-2 uppercase tracking-wider">Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { if (error) setError(null); setName(e.target.value); }}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none focus:border-amber-400/40 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-mono mb-2 uppercase tracking-wider">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { if (error) setError(null); setEmail(e.target.value); }}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none focus:border-amber-400/40 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-mono mb-2 uppercase tracking-wider">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => { if (error) setError(null); setSubject(e.target.value); }}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none focus:border-amber-400/40 transition-colors"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 font-mono mb-2 uppercase tracking-wider">Message *</label>
                <textarea
                  value={message}
                  onChange={(e) => { if (error) setError(null); setMessage(e.target.value); }}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none focus:border-amber-400/40 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              {error && (
                <p className="text-sm text-red-400 font-mono" role="alert">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-amber disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

- [ ] **Step 3: Build to verify TypeScript compiles cleanly**

Run: `npm run build`
Expected: Succeeds with no TypeScript errors, same as the pre-existing build output (dist/ generated with index.html, assets/*.js, assets/*.css).

- [ ] **Step 4: Manual smoke test on the local dev server**

Run: `npm run dev`, open `http://localhost:3000` in a browser, scroll to the "Get In Touch" section, open DevTools Network tab, fill in Name + Message (required fields) and click "Send Message".

Expected:
- Button text changes to "Sending..." and becomes disabled while the request is in flight.
- A POST request to `https://api.web3forms.com/submit` appears in the Network tab.
- Because `localhost:3000` isn't the whitelisted origin (`https://tradematrix.dev`), Web3Forms will likely reject this with `success: false` — the error banner ("Couldn't send — check your connection and try again.") should appear below the Message field, the button should re-enable, and the typed Name/Message values should still be in the fields (not cleared).
- Edit any field afterward and confirm the error banner disappears immediately.

This step confirms the request wiring and error-path UI work correctly; it does not confirm real email delivery (that requires Task 2, against the production domain).

- [ ] **Step 5: Commit**

```bash
git add constants.ts components/Contact.tsx
git commit -m "feat: send contact form via Web3Forms instead of mailto"
```

---

### Task 2: Deploy and verify real email delivery on production

**Files:** None (deployment + manual verification only — no code changes in this task).

**Interfaces:**
- Consumes: the committed changes from Task 1.

- [ ] **Step 1: Push to main**

```bash
git push origin main
```

This triggers the existing `.github/workflows/deploy.yml` GitHub Actions workflow, which builds and deploys to GitHub Pages under the `tradematrix.dev` custom domain already configured.

- [ ] **Step 2: Wait for the deploy workflow to finish**

Run: `gh run watch --repo chadcoco1444/chenghung-portfolio --exit-status` (or check the Actions tab in the browser)
Expected: Both `build` and `deploy` jobs complete successfully (same workflow that was already verified working for the custom-domain migration).

- [ ] **Step 3: Submit the live form and confirm delivery**

Open `https://tradematrix.dev` in a browser, scroll to "Get In Touch", fill in all four fields with real test values, and click "Send Message".

Expected:
- Button shows "Sending..." then the form switches to the "Message sent!" confirmation panel (no error banner).
- Within a few minutes, an email arrives at `chadcoco1444@gmail.com` (the address Web3Forms was registered with) containing the submitted Name/Email/Subject/Message.

- [ ] **Step 4: Confirm the error path doesn't appear under normal use**

No action needed beyond Step 3 succeeding — if Step 3's request had failed, the error banner would have appeared instead of the confirmation panel. If that happens, check the Web3Forms dashboard (form settings → confirm the whitelisted domain is exactly `https://tradematrix.dev`) before re-testing.

## Self-Review Notes

- **Spec coverage:** Every section of the design spec (`docs/superpowers/specs/2026-08-03-web3forms-contact-design.md`) maps to a step above — data flow (Task 1 Step 2), loading/error states (Task 1 Step 2), constants change (Task 1 Step 1), manual verification (Task 1 Step 4, Task 2 Steps 1-4).
- **Deviation from spec called out:** The spec said the success panel is "unchanged," but its copy ("Email client opened! Please send the email from your mail app to complete.") is factually wrong once submission goes directly through Web3Forms — Task 1 Step 2 updates it to "Message sent!" / "Thanks for reaching out — I'll get back to you soon." This is a correction, not scope creep — leaving stale, incorrect copy in a shipped page would be a bug.
- **Type consistency:** `WEB3FORMS_ACCESS_KEY` is defined once in `constants.ts` (Task 1 Step 1) and imported with that exact name in `Contact.tsx` (Task 1 Step 2) — no naming drift.
