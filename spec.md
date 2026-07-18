# marginlift™ — Homepage Spec (v2.3)

**Positioning:** AI agents that work behind your existing tools to improve margin — no new software, no new logins, no rip-and-replace.
**Audience:** Owners, MDs, founders, entrepreneurs across sectors (brand kept broad, not sector-specific).
**Tone:** Grounded, professional, simple. Avoid "leak / leaking / recovery" in body copy (the one exception is the secondary hero button, specified verbatim). Money language over software language.
**Visual direction:** Premium "technical editorial" — warm cream paper with a subtle dot grid, espresso ink (#2E2418), terracotta and gold as the only accents, monospace micro-labels, big tight grotesque headlines, alternating light/dark bands, squared corners throughout (no border-radius).

---

## Design tokens

| Token | Value | Use |
|---|---|---|
| `--cream` | `#FAF6ED` | Page background |
| `--cream-deep` | `#F3ECDC` | Alternate section / card fill |
| `--ink` | `#2E2418` | Headlines, body, buttons (a shade lighter than black), dark section background |
| `--ink-soft` | `#6B5D4C` | Sub-copy, captions on light |
| `--terracotta` | `#C96F4A` | Big numerals, key accents, checked states |
| `--terracotta-deep` | `#B05C3A` | Button hover |
| `--gold` | `#B8933F` | Eyebrow labels, mono micro-labels, fine rules |
| `--line` | `#E4D9C4` | Hairline borders (on dark: cream at 16% opacity) |
On dark bands, secondary text is cream at ~62% opacity and panels are cream at ~5% opacity — everything derives from this palette.

**Type:** Headlines — *Archivo* 700, letter-spacing −0.025em, leading ~1.04. Body — *Inter*. Micro-labels, eyebrows, buttons — *IBM Plex Mono*, 12–13px, letter-spaced caps (`0.18–0.22em`).
**Signature elements:** dot-grid background (`radial-gradient` 1px dots, 44px cell) masked with a horizontal gradient so dots are visible at the left and right edges and fade out toward the center (`mask-image: linear-gradient(to right, black, transparent 38%, transparent 62%, black)`); numbered mono eyebrows (`01 — THE PROBLEM`); squared mono buttons. No marker highlight — hero sub-copy is plain muted text.

---

## 1. Navigation (sticky, translucent cream)

Logo: lowercase bold **marginlift** with superscript ™. Links (mono caps): The problem · Approach · Use cases · Audit. CTA button (solid `--ink` espresso — dark but not black — mono): `RUN AUDIT »`; hover shifts to `--terracotta-deep`.

## 2. Hero (light, dot grid, centered)

- Eyebrow (gold mono): `AI AGENTS FOR MARGIN PERFORMANCE` (no sub-eyebrow)
- **H1:** *The market sets your price. Operations set your profit.*
- Sub-copy (plain muted text, centered, max-width ~700px):
  > In high-volume businesses, profit is made or lost in the small inefficiencies no one sees clearly enough to fix every day. marginlift deploys AI agents inside the systems your team already uses — your ERP, your spreadsheets, your inboxes — so margin improves without rolling out another tool.
- Buttons (mono caps): primary solid `RUN THE FREE AI OPPORTUNITY AUDIT »`; secondary outlined `SEE WHERE YOU'RE LEAKING MONEY` (links to §6).
- Below, above a hairline: directional stat strip — **−10%** `HIDDEN COORDINATION COST` → **+25%** `PROFIT BEFORE TAX, OR MORE`. *(Placeholder figures pending market survey.)*

## 3. `01 — THE PROBLEM` (dark band)

**H2:** *Every cost line in your business has two layers.*

Left column, two left-ruled layers + closing line:
- `LAYER 1 — DIRECT COST` — What your business actually consumes to produce or deliver: materials, labour, freight, energy, equipment time, inventory, and execution cost. You've already squeezed these hard.
- `LAYER 2 — COORDINATION COST` (gold label, terracotta rule) — The time and money spent matching records, chasing payments, scheduling work, approving routine decisions, reconciling systems, handling exceptions, and keeping people aligned across the tools you already use.
- Closing: This cost is usually hidden inside labour, overheads, delays, finance cost, and working-capital drag. You usually can't negotiate it away. **But you can automate it out.**

Right column, bordered stat card on `--dark-2`, stretched to match the left column height (flex column, space-between) so the two columns top- and bottom-align:
- **1.5–5%** `OF REVENUE — HIDDEN COORDINATION COST IN MANY BUSINESSES` (numerals cream, % sign gold)
- **2–6%** `TYPICAL PBT MARGIN IN TIGHT-MARGIN OPERATIONS` (numerals cream, % sign gold)
- Footer line (gold mono): `CUT THE FIRST NUMBER ↓ AND THE SECOND MOVES UP ↑ — THE HIDDEN LAYER IS OFTEN AS LARGE AS YOUR ENTIRE PROFIT.`

## 4. `02 — OUR APPROACH` (light)

**H2:** *AI agents that work behind your existing tools.* <span style="color:grey">Not another dashboard.</span>

Three filled cards (`PRINCIPLE 01–03`):
- **Zero adoption required** — Agents read data that already exists: ERP or Tally ledgers, bank statements, invoices, WhatsApp and email. Your team keeps working in the tools they already trust. (Cards kept compact — ~40px padding — so they read premium, not elongated.)
- **Exceptions, not extra work** — The agent silently matches, reconciles and schedules in the background. Staff see fewer, cleaner exceptions in the same channels they already check. Nobody logs into anything new.
- **Measured in money** — Every deployment is tied to a specific cost line and a baseline from your own numbers. If we can't show the saving within one billing or production cycle, we tell you.

Below, mono systems strip in full ink (dark, clearly visible): Tally · SAP · Zoho · QuickBooks · NetSuite · Excel & Sheets · Gmail & Outlook · WhatsApp · Your custom ERP. *(This strip replaces the former standalone "stack" section — no duplication.)*

## 5. `03 — THE AUDIT` (dark band)

**H2:** *Not sure where the money is hiding? Start with the audit.*
Sub: Free AI Opportunity Audit for your business. Intro: Before pitching you anything, our audit agent analyses your business the way a sector analyst would:
A–D bordered grid: (A) reconstructs your cost stack from public filings, ratings reports and the data you choose to share; (B) identifies which cost lines carry the largest hidden coordination layer in your specific operation; (C) ranks use-cases by money impact, speed to proof, and how little your team's workflow has to change; (D) hands you a prioritised list, whether or not you work with us.
CTA: light solid `RUN THE AI OPPORTUNITY AUDIT »` + mono note `ONE SHORT SESSION · NO INTEGRATIONS NEEDED TO START`.

## 6. `04 — USE-CASE SELECTOR` (light)

**H2:** *Where is your money going?* <span style="color:grey">Pick what matches your business.</span>
Four bordered columns with clickable checkbox items. All four columns stretch to equal height (`align-items: stretch`) so top and bottom edges align as one clean rectangle — no stepped layout. Column 4 stacks two cards ("Money left on the table" + "Something else") with the same 24px gap as the grid; the "Something else" card flexes to fill the remaining height.
- **Money stuck outside the business** (`CASH, NOT COST`) — receivables & collections; inventory & working capital; invoicing, tax & compliance workload.
- **Money going out the gate** (`WHAT YOU BUY`) — procurement & vendor price variance; input mix optimisation; freight & dispatch planning.
- **Money lost inside operations** (`WHAT YOU CONVERT`) — energy & utilities; yield & material reconciliation; quality, rejections & rework; maintenance & downtime; capacity utilisation & planning.
- **Money left on the table** (`WHAT YOU SELL`) — product mix & realisation; customer communication load.
- **Something else** card with one-line free-text input ("we'll tell you honestly whether an AI agent can attack it").

## 7. Final CTA (dark) + footer

**H2:** *You've already squeezed the obvious costs. <span style="color:terracotta">The next point of margin</span> is hiding in the coordination around them.* Sub: *Unlock with marginlift™ vertical AI agents.* (™ superscript, matching the logo). Button: `RUN THE FREE AUDIT »`.
Footer (single row): marginlift™ left; mono right `VERTICALAI FOR LOW MARGIN HIGH VOLUME BUSINESSES`.

---

## Implementation notes (Next.js / Vercel)

- App Router; one component per section; all server components except header, use-case selector, and reveal-on-scroll wrapper.
- Tailwind with the tokens above as CSS variables; dot grid as a utility class (pseudo-element + horizontal gradient mask so dots fade toward the center).
- Fonts via `next/font/google`: Archivo, Inter, IBM Plex Mono.
- Primary CTA → `/audit` route (short form or Typeform/Tally embed); use-case selections + "something else" text can be passed as query params into the audit form.
- Motion: one fade-up per section, 150–250ms, `prefers-reduced-motion` respected. No other animation.
- Placeholder figures (−10% → +25%, 1.5–5%, 2–6%) to be validated by market survey before launch; keep the "typical / many businesses" hedging language.
- SEO title: *marginlift — The market sets your price. Operations set your profit.*
