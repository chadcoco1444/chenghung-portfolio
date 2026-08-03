# Contact Form: Replace mailto with Web3Forms

## Problem

The "Get In Touch" contact form (`components/Contact.tsx`) currently builds a `mailto:` link and calls `window.open()` on submit. This requires the visitor to have a configured default email client — on many browsers/devices (webmail-only users, mobile without a Mail app signed in) this silently fails or opens a blank/unexpected screen, and the "sent" confirmation shows regardless of whether the visitor actually finishes sending the email from their own client.

## Goal

Submit the form directly from the browser to a free email-forwarding API (Web3Forms), so the message reaches `chadcoco1444@gmail.com` without requiring the visitor to have any email client configured. No backend — the site stays a static build on GitHub Pages.

## Approach

Client-side `fetch()` POST to Web3Forms' public submit endpoint. Web3Forms was chosen over EmailJS/Formspree for this project because: no OAuth linking of a personal email account, higher free tier (250 submissions/month vs Formspree's 50), and no extra npm dependency (EmailJS requires its SDK; Web3Forms accepts a plain JSON POST).

The access key is not a secret — the repo is public and the built JS bundle is served to anyone's browser regardless, so the key is visible via devtools no matter where it's stored. It is stored directly in `constants.ts` rather than behind a build-time env var, since a GitHub Actions secret would add complexity with no actual confidentiality benefit here. Web3Forms' abuse protection is domain whitelisting (configured as `https://tradematrix.dev`) plus a built-in honeypot field, not key secrecy.

## Data Flow

1. Visitor fills Name / Email / Subject / Message (fields unchanged).
2. On submit: `fetch('https://api.web3forms.com/submit', { method: 'POST', headers: {'Content-Type': 'application/json', Accept: 'application/json'}, body: JSON.stringify({ access_key, name, email, subject, message }) })`.
3. While the request is in flight, the submit button shows "Sending..." and is disabled (new `submitting` state) — prevents duplicate submits from double-clicks.
4. Response handling:
   - `response.ok` and `result.success` → set `sent = true`, render the existing "Message sent!" confirmation panel.
   - Otherwise (non-2xx, `success: false`, or a thrown network error) → set `error` state with a short message ("Couldn't send — check your connection and try again."), keep all typed field values intact so the visitor doesn't retype, re-enable the button for retry.

## Component Changes

`components/Contact.tsx`:
- `handleSubmit` becomes `async`, replaces the `mailto:`/`window.open` body with the fetch call above.
- Add `submitting: boolean` and `error: string | null` state.
- Submit button: text switches to "Sending..." and `disabled` while `submitting`.
- New small error banner rendered above the submit button when `error` is set (dismissed on next submit attempt or field edit).
- The existing `sent` success panel and "Send another message" reset button are unchanged.

`constants.ts`:
- Add `WEB3FORMS_ACCESS_KEY: 'd3d4c6f2-ce66-45b5-b17d-000528d71852'` to `PERSONAL_INFO` (or a sibling export — implementation detail, not load-bearing).

## Error Handling

- Network failure (`fetch` rejects) and API-level failure (`success: false` in JSON body) are both caught and routed to the same `error` state/message — the visitor doesn't need to know which happened, just that they should retry.
- Required-field validation (`name`, `message` non-empty) stays as-is via the existing `required` attributes and the early-return guard in `handleSubmit`.

## Testing / Verification

No test framework is set up in this project (no vitest/jest in `package.json`), consistent with the rest of the codebase. Verification is manual:
1. `npm run build` succeeds.
2. Local `npm run dev`, submit the form with real values, confirm the email arrives at `chadcoco1444@gmail.com` via Web3Forms.
3. Confirm the loading state (button disabled + "Sending...") is visible during submission.
4. Simulate a failure (e.g. temporarily point `fetch` at a bad URL, or disconnect network) to confirm the error banner shows and typed values are preserved.
5. Deploy (push to `main`), re-test against the live `https://tradematrix.dev` domain since Web3Forms' domain whitelist is tied to that origin.

## Out of Scope

- No spam/CAPTCHA hardening beyond Web3Forms' built-in honeypot (sufficient for a low-traffic personal portfolio).
- No email templating/branding — Web3Forms' default forwarded-email format is used as-is.
- No retry-with-backoff or offline queueing — a single retry-by-resubmit is enough for this use case.
