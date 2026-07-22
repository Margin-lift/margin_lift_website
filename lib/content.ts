/**
 * Site content — single source of truth for copy shown across sections.
 * Keeps components presentational and easy to edit in one place.
 */

export const nav = {
  brand: 'marginlift',
  links: [
    { label: 'The Problem', href: '#problem' },
    { label: 'Approach', href: '#approach' },
    { label: 'Use Cases', href: '#use-cases' },
  ],
  cta: 'Run Audit',
}

export const hero = {
  eyebrow: 'AI agents for margin performance',
  subline:
    'In every operation there is a cost that never shows up on a line item — the quiet work of matching records, chasing payments and reconciling systems. Our agents find it, measure it, and automate it out.',
  cta: 'Get Started →',
  ctaNote: 'No integrations to start',
}

export const heroMock = {
  url: 'app.marginlift.ai/audit',
  title: 'margin audit',
  caption: 'Margin leaks · detected',
  agent: {
    name: 'Reconciliation agent',
    status: 'Scanning 6 systems · 14,208 records',
    progress: '68%',
  },
  leaks: [
    { label: 'Duplicate supplier payments', amount: '−₹4.2L', per: '/mo', delay: '.7s' },
    { label: 'Unclaimed freight rebates', amount: '−₹2.68L', per: '/mo', delay: '.88s' },
    { label: 'Off-contract procurement', amount: '−₹1.95L', per: '/mo', delay: '1.06s' },
    { label: 'Unreconciled GST credits', amount: '−₹1.54L', per: '/mo', delay: '1.24s' },
  ],
  total: { label: 'Recoverable', value: '+₹1.07 Cr', per: '/ YEAR' },
}

export const problem = {
  eyebrow: '01 — THE PROBLEM',
  heading: 'Every cost line in your business has two layers.',
  layers: [
    {
      label: 'Layer 1 — Direct cost',
      highlight: false,
      body: "What your business actually consumes to produce or deliver: materials, labour, freight, energy, equipment time, inventory, and execution cost. You've already squeezed these hard.",
    },
    {
      label: 'Layer 2 — Coordination cost',
      highlight: true,
      body: 'The time and money spent matching records, chasing payments, scheduling work, approving routine decisions, reconciling systems, handling exceptions, and keeping people aligned across the tools you already use.',
    },
  ],
  note: 'This cost is usually hidden inside labour, overheads, delays, finance cost, and working-capital drag. You usually can’t negotiate it away. **But you can automate it out.**',
  numbers: [
    { value: '1.5–5', unit: '%', label: 'Of revenue — hidden coordination cost in many businesses' },
    { value: '2–6', unit: '%', label: 'Typical PBT margin in tight-margin operations' },
  ],
  numberNote:
    'Cut the first number ↓ and the second moves up ↑ — the hidden layer is often as large as your entire profit.',
}

export const approach = {
  eyebrow: '02 — OUR APPROACH',
  heading: 'AI agents that work behind your existing tools.',
  headingSub: 'Not another dashboard.',
  cards: [
    {
      n: '01',
      title: 'Zero adoption required',
      body: 'Agents read the systems you already run. Nobody logs into a new tool, changes a workflow, or learns anything.',
    },
    {
      n: '02',
      title: 'Exceptions, not extra work',
      body: "You don't get more to review. You get the handful of leaks worth acting on — surfaced with the evidence attached.",
    },
    {
      n: '03',
      title: 'Measured in money',
      body: "Every finding is priced. Success isn't tickets closed or dashboards viewed — it's profit before tax recovered.",
    },
  ],
  integrationsLabel: 'WORKS WITH WHAT YOU ALREADY RUN',
  integrations: [
    'Tally',
    'SAP',
    'Zoho',
    'QuickBooks',
    'NetSuite',
    'Excel',
    'Gmail',
    'WhatsApp',
    'Custom ERP',
  ],
}

export const simulator = {
  eyebrow: '03 — THE MATH',
  heading: 'Drag the slider. Watch your profit move.',
  lead: 'Set your annual revenue and an estimate of hidden coordination cost. See what recovering even part of it does to profit before tax.',
  sliders: {
    revenue: { min: 50_000_000, max: 5_000_000_000, step: 50_000_000, value: 500_000_000 },
    leak: { min: 1.5, max: 5, step: 0.1, value: 3 },
    recovery: { min: 30, max: 90, step: 5, value: 65 },
  },
  resultLabel: 'Profit before tax recovered',
  resultNote: 'recovered / year',
}

export const useCases = {
  eyebrow: '04 — USE-CASE SELECTOR',
  heading: 'Where is your money going?',
  headingSub: 'Pick what matches your business.',
  cards: [
    {
      title: 'Payables & procurement',
      body: 'Duplicate payments, off-contract buying, missed early-pay discounts.',
      recovered: '+₹54L',
    },
    {
      title: 'Freight & logistics',
      body: 'Unclaimed rebates, billing errors, wrong-lane charges.',
      recovered: '+₹32L',
    },
    {
      title: 'Tax & compliance',
      body: 'Unreconciled input credits, mismatched filings, penalty exposure.',
      recovered: '+₹21L',
    },
    {
      title: 'Receivables',
      body: 'Slow collections, unapplied cash, silent leakage in disputes.',
      recovered: '+₹28L',
    },
    {
      title: 'Inventory & wastage',
      body: 'Shrinkage, stale stock, reconciliation gaps across locations.',
      recovered: '+₹19L',
    },
    {
      title: 'Energy & utilities',
      body: 'Tariff mismatches, demand penalties, untracked overages.',
      recovered: '+₹14L',
    },
  ],
}

export const closing = {
  cta: 'Start NOW →',
}

export const footer = {
  brand: 'marginlift',
  tag: 'VerticalAI for low margin high volume businesses',
}

export const contactModal = {
  eyebrow: 'Run the audit',
  heading: 'See it on your own numbers.',
  sub: "Tell us where to look. We'll run the audit and show you exactly where the margin is leaking — in one session, no integrations to start.",
  privacy:
    "marginlift is committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you. If you consent to us contacting you for this purpose, please tick below to say how you would like us to contact you:",
  consent: 'I agree to receive other communications from marginlift.',
  unsubscribe:
    'You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.',
  submitConsent:
    'By clicking submit below, you consent to allow marginlift to store and process the personal information submitted above to provide you the content requested.',
  successHeading: 'Thank you for your submission.',
  successSub: 'Our team will be in touch with you shortly!',
}
