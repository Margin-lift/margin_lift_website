import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        card: 'var(--card)',
        'stone-soft': 'var(--stone-soft)',
        'stone-deep': 'var(--stone-deep)',
        hairline: 'var(--hairline)',
        ink: 'var(--ink)',
        'ink-2': 'var(--ink-2)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        indigo: 'var(--indigo)',
        'indigo-light': 'var(--indigo-light)',
        'indigo-tint': 'var(--indigo-tint)',
        sage: 'var(--sage)',
        clay: 'var(--clay)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        head: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
