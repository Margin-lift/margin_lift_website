# marginlift — Marketing Website

Marketing website for **marginlift™**, built with Next.js 15 (App Router), Tailwind CSS, and TypeScript. AI agents for margin performance — vertical agents that find, measure, and automate out the hidden coordination cost in low-margin, high-volume businesses.

The design is a faithful, componentised port of `references/marginlift-preview_23.html`.

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site hot-reloads as you edit.

### Production build

```bash
npm run build   # also type-checks
npm start
```

## Project Structure

```
app/
├── layout.tsx        # Root layout — loads fonts (Poppins/Inter/Roboto Mono), metadata
├── page.tsx          # Single stacked homepage — composes all sections
└── globals.css       # Design tokens + all section styling (ported from the reference)

components/
├── Navigation.tsx        # Sticky blurred header + "Run Audit" CTA
├── Hero.tsx              # Headline, subline, CTA
├── HeroMockup.tsx        # Animated "margin audit" browser mockup
├── ProblemSection.tsx    # 01 — The problem (two cost layers + numbers)
├── ApproachSection.tsx   # 02 — Our approach (3 cards + integrations)
├── SimulatorSection.tsx  # 03 — The math (interactive sliders · client)
├── UseCaseSection.tsx    # 04 — Use-case selector (6 cards)
├── ClosingSection.tsx    # Closing headline + CTA
├── Footer.tsx            # Brand + tagline
├── ContactModal.tsx      # Audit contact form modal (client)
└── RevealWrapper.tsx     # Scroll-reveal IntersectionObserver (client)

lib/
├── content.ts        # All copy/data — single source of truth
└── format.ts         # formatRupees() — Indian-locale currency (Cr / L / K)

references/
└── marginlift-preview_23.html   # Canonical design reference
```

## Design System

Tokens are CSS variables in `app/globals.css`. To rebrand, edit them there — not individual components.

- **Surfaces:** `--paper`, `--card`, `--stone-soft`, `--stone-deep`, `--hairline`
- **Text:** `--ink`, `--ink-2`, `--muted`, `--faint`
- **Accents:** `--indigo` (primary), `--sage` (positive/recovered), `--clay` (leak/negative)
- **Fonts:** Poppins (headings), Inter (body), Roboto Mono (labels) — via `next/font/google`
- **Backgrounds:** `.dot-grid`, `.dot-grid-tight`, `.field`, `.glow`

## Key Features

- **One component per section** — edit each independently; copy lives in `lib/content.ts`.
- **Interactive profit simulator** — three sliders (revenue, coordination cost %, recoverable %) drive a live "profit recovered" figure.
- **Contact modal** — every `data-contact` CTA opens a single shared modal (form → success), via document-level click delegation. No separate `/audit` route.
- **Scroll-reveal animations** — fade-up on the `.rv` class, with `prefers-reduced-motion` support.
- **Responsive** — breakpoints at 900 / 820 / 760 / 640 px; grids collapse to single column on tablet/mobile.
- **TypeScript** end to end; server components by default, client only where state is needed.

## Editing Content

Change headlines, cards, integrations, use cases, and modal copy in **`lib/content.ts`**. Components are presentational and read from there.

## Contact Form Integration

`ContactModal` is currently presentation-only (submit shows a success state). To wire a backend, handle `handleSubmit` in `components/ContactModal.tsx` (POST to your endpoint / form provider) before showing the success panel.

## Linting

```bash
npm run lint
```

First run prompts to configure ESLint (choose **Strict**). `npm run build` already runs full type-checking.

## Deployment

Built for **Vercel** — connect the repo and it auto-detects Next.js. Set any form-integration env vars in the Vercel dashboard.

## License

Internal project for marginlift™.
