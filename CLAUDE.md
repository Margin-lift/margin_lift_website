# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing website for **marginlift™** — an AI company selling vertical agents that reduce hidden "coordination cost" for low-margin, high-volume businesses. Built with Next.js 15 + App Router, Tailwind CSS, and TypeScript.

## Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm start                # Run production build
npm run lint             # Run ESLint
```

## Architecture

**One React component per section** — all live in `/components`:
- `Navigation.tsx` — sticky header with nav links and CTA
- `Hero.tsx` — headline, sub-copy, stat strip
- `ProblemSection.tsx` — "01 The problem" (dark)
- `ApproachSection.tsx` — "02 Our approach" (light)
- `AuditSection.tsx` — "03 The audit" (dark)
- `UseCaseSection.tsx` — "04 Use-case selector" (light); **client component** for checkbox interactivity
- `FinalCTA.tsx` — "You've already squeezed..." + footer (dark)
- `RevealWrapper.tsx` — **client component** managing scroll-reveal IntersectionObserver for all sections

**Routes:**
- `/` — homepage (all sections stacked)
- `/audit` — audit form page (placeholder; needs Typeform/Tally/custom embed)

**Styling:**
- Tailwind + CSS variables (defined in `globals.css`): `--cream`, `--ink`, `--terracotta`, `--gold`, etc.
- Fonts loaded via `next/font/google` in `layout.tsx`: Archivo (headings), Inter (body), IBM Plex Mono (labels/mono).
- Dot grid background + horizontal fade mask via CSS in `globals.css` (`.dots` class).
- Responsive breakpoints: 1020px (2-col → 1-col), 680px (hide nav links, adjust sections).
- `@media (prefers-reduced-motion)` respected for `.reveal` animation.

**Design tokens** (see `/app/globals.css` for values):
- Colors: cream/cream-deep (light bg), ink (dark), terracotta/terracotta-deep (accent), gold (labels), line/line-dark (borders).
- On dark sections: text switches to cream, borders to cream at 16% opacity, panels to cream at 5% opacity.

**Interactive elements:**
- `.uc-item` checkbox items in UseCaseSection — toggle `.on` class on click (styled with checked state).
- Custom text input in "Something else" card — value captured in `customText` state.
- Both are currently presentation-only (no backend wired).
- Primary CTAs are `mailto:` links to `hello@marginlift.ai` or navigation to `/audit`.

## Conventions

- **Client components** only where needed (UseCaseSection for state + clicks, RevealWrapper for IntersectionObserver).
- **Server components** by default for all section/layout components.
- Responsive grid utilities used inline (`grid-cols-3 lg:grid-cols-1 md:grid-cols-1`); adjust breakpoints in `tailwind.config.ts` if needed.
- Color/spacing tokens via Tailwind extended theme — edit `tailwind.config.ts` to add/change them.
- Typography scale handled with `clamp()` for fluid scaling.
- All animations respect `prefers-reduced-motion`.
