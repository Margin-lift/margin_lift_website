import { hero } from '@/lib/content'
import HeroMockup from './HeroMockup'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="dot-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.7, pointerEvents: 'none' }}
      />
      <div className="glow" />
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <p className="eyebrow rv" style={{ marginBottom: '24px' }}>
              {hero.eyebrow}
            </p>
            <h1 className="rv">
              The market sets your price.
              <br />
              <span className="dim">Operations set your profit.</span>
            </h1>
            <p className="subline rv">{hero.subline}</p>
            <div className="cta-row rv">
              <a href="#run-audit" className="btn" data-contact>
                {hero.cta}
              </a>
              <span className="note">{hero.ctaNote}</span>
            </div>
          </div>

          <HeroMockup />
        </div>
      </div>
    </section>
  )
}
