# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for **marginlift™** — an AI company selling vertical agents that find, measure, and automate out the hidden "coordination cost" in low-margin, high-volume businesses. Built with Next.js 15 + App Router, Tailwind CSS, and TypeScript.

The canonical design is `references/marginlift-preview_23.html` — a single-file HTML/CSS preview. The Next.js app is a faithful, component-modularised port of it. **When changing design or copy, diff against that reference file** to avoid drift.

## Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production (also type-checks)
npm start                # Run production build
npm run lint             # ESLint (needs interactive first-time setup)
```

## Architecture

**One React component per section** — all live in `/components`:
- `Navigation.tsx` — sticky blurred header: brand, nav links, "Run Audit" CTA
- `Hero.tsx` — headline, subline, CTA; embeds `HeroMockup`
- `HeroMockup.tsx` — animated "margin audit" browser mockup (agent progress bar, leak rows, recoverable total)
- `ProblemSection.tsx` — "01 — The problem": two cost layers + numbers card (`.sec-alt`)
- `ApproachSection.tsx` — "02 — Our approach": 3 cards + integrations row
- `SimulatorSection.tsx` — "03 — The math": **client component**; 3 range sliders → live profit calc
- `UseCaseSection.tsx` — "04 — Use-case selector": 6 static use-case cards
- `ClosingSection.tsx` — closing headline + "Start NOW" CTA (`#run-audit`)
- `Footer.tsx` — brand + tagline
- `ContactModal.tsx` — **client component**; the audit contact form + success state
- `RevealWrapper.tsx` — **client component**; scroll-reveal IntersectionObserver for all `.rv` elements

**Data & helpers** in `/lib`:
- `content.ts` — all section copy/data (single source of truth; components stay presentational)
- `format.ts` — `formatRupees()` Indian-locale currency formatter (Cr / L / K), used by the simulator

**Routes:**
- `/` — the entire site is a single stacked page (no sub-routes). The audit CTA opens `ContactModal`, not a separate page.

## The contact modal

There is **no `/audit` route**. Every CTA is a plain element with a `data-contact` attribute (e.g. `<a href="#run-audit" className="btn" data-contact>`). `ContactModal` is a single client component mounted once in `page.tsx` that uses **document-level click delegation**: any click bubbling from a `[data-contact]` element opens it. This keeps CTAs as server-rendered links and the modal logic in one place. Esc and backdrop click close it; submit swaps the form for a success panel. The form is presentation-only (no backend wired).

## Styling

- **All section styling is hand-written CSS in `app/globals.css`**, ported verbatim from the reference preview (tokens, layout classes, keyframes). Components apply these classes; only small one-off overrides use inline `style`. Tailwind utilities are available but rarely needed.
- Design tokens are CSS variables in `globals.css`:
  - Surfaces: `--paper`, `--card`, `--stone-soft`, `--stone-deep`, `--hairline`
  - Text: `--ink`, `--ink-2`, `--muted`, `--faint`
  - Accents: `--indigo`/`--indigo-light`/`--indigo-tint` (primary), `--sage` (positive), `--clay` (leak/negative)
- Fonts via `next/font/google` in `layout.tsx`, exposed as CSS vars: `--font-poppins` (headings), `--font-inter` (body), `--font-roboto-mono` (labels/mono).
- Backgrounds: `.dot-grid` (masked dot field), `.dot-grid-tight`, `.field` (gradient panel), `.glow`.
- Responsive breakpoints (in `globals.css`): 900px (2-col grids → 1-col), 820px (use-case grid), 760px (hide nav links), 640px (modal alignment).
- `@media (prefers-reduced-motion: reduce)` disables all animations and reveals content.

## Conventions

- **Client components** only where needed: `SimulatorSection` (slider state), `ContactModal` (modal state + delegation), `RevealWrapper` (IntersectionObserver). Everything else is a server component.
- **Edit copy/data in `lib/content.ts`**, not inside JSX.
- Change brand colors/spacing via the CSS variables in `globals.css`, not per-component.
- Scroll-reveal: add the `rv` class to any element; `RevealWrapper` adds `.in` when it scrolls into view. (Note: the use-case recovered amount uses `.rv-amt`, a distinct class, so it is not reveal-animated.)
- Keep the app in sync with `references/marginlift-preview_23.html`.
