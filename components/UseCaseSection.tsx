import { useCases } from '@/lib/content'

export default function UseCaseSection() {
  return (
    <section className="sec" id="use-cases">
      <div
        className="dot-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }}
      />
      <div className="wrap" style={{ position: 'relative' }}>
        <p className="eyebrow rv" style={{ marginBottom: '16px' }}>
          {useCases.eyebrow}
        </p>
        <h2 className="head-oneline rv" style={{ fontSize: 'clamp(1.2rem,2.2vw,1.75rem)' }}>
          {useCases.heading}{' '}
          <span style={{ color: 'var(--muted)' }}>{useCases.headingSub}</span>
        </h2>
        <div className="uc">
          {useCases.cards.map((card) => (
            <div key={card.title} className="uco rv">
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
              <div className="foot">
                <span className="rk">Typically recovered</span>
                <span className="rv-amt">
                  {card.recovered}
                  <em>/YR</em>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
