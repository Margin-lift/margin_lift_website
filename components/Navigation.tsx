import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/88 backdrop-blur-[10px] border-b border-line">
      <div className="wrap">
        <div className="nav-inner flex items-center justify-between h-[clamp(56px,10vw,76px)] gap-[clamp(8px,3vw,24px)]">
          <Link href="#" className="font-serif font-bold text-[clamp(16px,4vw,22px)] letter-spacing-tight text-ink no-underline flex-shrink-0">
            marginlift<sup className="text-[clamp(6px,1.5vw,9px)] font-semibold letter-spacing-0 position-relative top-[-0.9em]">™</sup>
          </Link>
          <div className="nav-links flex gap-[clamp(6px,2vw,36px)] items-center ml-auto">
            <a href="#problem" className="mono text-[clamp(9px,2vw,12px)] letter-spacing-[0.18em] uppercase text-ink-soft no-underline transition-colors hover:text-ink hidden sm:inline">
              The problem
            </a>
            <a href="#approach" className="mono text-[clamp(9px,2vw,12px)] letter-spacing-[0.18em] uppercase text-ink-soft no-underline transition-colors hover:text-ink hidden sm:inline">
              Approach
            </a>
            <a href="#usecases" className="mono text-[clamp(9px,2vw,12px)] letter-spacing-[0.18em] uppercase text-ink-soft no-underline transition-colors hover:text-ink hidden sm:inline">
              Use cases
            </a>
            <a href="#audit" className="mono text-[clamp(9px,2vw,12px)] letter-spacing-[0.18em] uppercase text-ink-soft no-underline transition-colors hover:text-ink hidden sm:inline">
              Audit
            </a>
            <a href="/audit" className="btn btn-solid small">
              <span className="hidden sm:inline">Run Audit&nbsp;&nbsp;»</span>
              <span className="sm:hidden">Audit&nbsp;»</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
