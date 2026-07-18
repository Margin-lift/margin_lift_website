# marginlift — Marketing Website

Premium marketing website for marginlift™, built with Next.js 15, Tailwind CSS, and TypeScript.

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

The site will hot-reload as you edit files.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── layout.tsx           # Root layout with fonts and global styles
├── page.tsx             # Home page (all sections)
├── globals.css          # Design tokens, base styles, utilities
└── audit/
    └── page.tsx         # Audit form page (placeholder for Typeform/Tally)

components/
├── Navigation.tsx       # Sticky header with nav links and CTA
├── Hero.tsx             # Hero section with stat strip
├── ProblemSection.tsx   # "01 — The problem" (dark band)
├── ApproachSection.tsx  # "02 — Our approach" (light band)
├── AuditSection.tsx     # "03 — The audit" (dark band)
├── UseCaseSection.tsx   # "04 — Use-case selector" (interactive, client component)
├── FinalCTA.tsx         # Final CTA + footer (dark band)
└── RevealWrapper.tsx    # Scroll-reveal animation wrapper (client component)
```

## Design System

All colors, spacing, and typography are defined via CSS variables in `globals.css`:

- **Colors:** `--cream`, `--ink`, `--terracotta`, `--gold`, `--line` (and dark variants)
- **Fonts:** Archivo (headings), Inter (body), IBM Plex Mono (labels) — loaded via `next/font/google`
- **Utilities:** `.wrap` (centered container), `.mono` (monospace label style), `.eyebrow` (section labels), `.btn` (buttons with modifiers)

To change brand colors, edit the CSS variables in `globals.css`, not individual components.

## Key Features

- **One component per section** — easy to maintain and update independently
- **Responsive design** — mobile-first with breakpoints at 1020px and 680px
- **Scroll-reveal animations** — fade-up effect on scroll with `prefers-reduced-motion` support
- **Interactive use-case selector** — clickable checkboxes with state management
- **Semantic HTML** — clean, accessible markup
- **TypeScript** — full type safety across components
- **Tailwind CSS** — utility-first styling with custom theme

## CTAs and Navigation

**Primary CTAs:**
- "Run the free AI opportunity audit" → `/audit` route
- Email CTAs → `mailto:hello@marginlift.ai?subject=Free%20AI%20Opportunity%20Audit`

**Navigation links:**
- `#problem` → Problem section
- `#approach` → Approach section
- `#usecases` → Use-case selector
- `#audit` → Audit section

## Placeholder: Audit Form

The audit page (`/app/audit/page.tsx`) includes a placeholder. To integrate a real form:

1. **Option A: Typeform embed** — Replace the placeholder `<div>` with:
   ```tsx
   <iframe 
     src="https://your-form.typeform.com/to/..." 
     style={{width: '100%', height: '600px', border: 'none'}}
   />
   ```

2. **Option B: Tally embed** — Similar iframe from Tally's embed code

3. **Option C: Custom form** — Build a React component and import it

Make sure the form can pass query parameters (`?category=receivables&custom=...`) from the use-case selector if needed.

## Development Tips

- **Edit a section:** Modify the corresponding component in `/components`
- **Change colors/spacing:** Update CSS variables in `globals.css`
- **Add a new page:** Create a folder under `/app` with a `page.tsx` file
- **Test responsive:** Use browser DevTools to test at 1020px and 680px breakpoints
- **Check animations:** Test with `prefers-reduced-motion: reduce` in browser settings

## Linting

```bash
npm run lint
```

Runs ESLint on all TypeScript/TSX files.

## Deployment

The site is built for **Vercel**. Push to main and deploy automatically:

```bash
git push origin main
```

Or deploy manually to Vercel:
- Connect your GitHub repo to Vercel
- Vercel will auto-detect Next.js and build correctly

Environment variables (if needed for form integrations) can be set in Vercel's dashboard.

## Browser Support

- Chrome, Firefox, Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)
- Respects `prefers-reduced-motion` and `prefers-color-scheme`

## License

Internal project for marginlift™.