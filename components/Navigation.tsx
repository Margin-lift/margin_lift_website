import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/88 backdrop-blur-[10px] border-b border-line">
      <div className="wrap max-w-[1200px] mx-auto px-8">
        <div className="flex items-center justify-between h-[76px] gap-6">
          <Link href="#" className="font-serif font-bold text-[22px] letter-spacing-tight text-ink no-underline">
            marginlift<sup className="text-[9px] font-semibold letter-spacing-0 position-relative top-[-0.9em]">™</sup>
          </Link>
          <div className="flex gap-9 items-center">
            <a href="#problem" className="mono text-[12px] letter-spacing-[0.18em] uppercase text-ink-soft no-underline transition-colors hover:text-ink">
              The problem
            </a>
            <a href="#approach" className="mono text-[12px] letter-spacing-[0.18em] uppercase text-ink-soft no-underline transition-colors hover:text-ink">
              Approach
            </a>
            <a href="#usecases" className="mono text-[12px] letter-spacing-[0.18em] uppercase text-ink-soft no-underline transition-colors hover:text-ink">
              Use cases
            </a>
            <a href="#audit" className="mono text-[12px] letter-spacing-[0.18em] uppercase text-ink-soft no-underline transition-colors hover:text-ink">
              Audit
            </a>
            <a href="/audit" className="btn btn-solid small">
              Run Audit&nbsp;&nbsp;»
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
