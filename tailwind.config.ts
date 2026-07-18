import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: 'var(--cream)',
        'cream-deep': 'var(--cream-deep)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        terracotta: 'var(--terracotta)',
        'terracotta-deep': 'var(--terracotta-deep)',
        gold: 'var(--gold)',
        line: 'var(--line)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-archivo)', 'serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
