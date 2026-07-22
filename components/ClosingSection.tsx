import { closing } from '@/lib/content'

export default function ClosingSection() {
  return (
    <section className="sec sec-alt" id="run-audit">
      <div
        className="dot-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.6, pointerEvents: 'none' }}
      />
      <div className="wrap" style={{ position: 'relative', textAlign: 'center' }}>
        <div className="rv">
          <h2 className="rv close-headline">
            You&rsquo;ve already squeezed the obvious costs.
            <br className="brk" />{' '}
            <span className="close-accent">The next point of margin</span> is hiding in the
            <br className="brk" /> coordination around them.
          </h2>
          <p className="lead" style={{ maxWidth: '34rem', margin: '20px auto 0' }}>
            Unlock with{' '}
            <span style={{ fontFamily: 'var(--font-head)', fontWeight: 600, color: 'var(--ink)' }}>
              marginlift<sup style={{ fontSize: '.5em', verticalAlign: 'super' }}>™</sup>
            </span>{' '}
            vertical AI agents.
          </p>
          <div className="cta-row" style={{ marginTop: '32px', justifyContent: 'center' }}>
            <a href="#" className="btn" data-contact>
              {closing.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
