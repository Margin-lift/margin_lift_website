import { Fragment } from 'react'
import { approach } from '@/lib/content'

export default function ApproachSection() {
  return (
    <section className="sec" id="approach">
      <div
        className="dot-grid"
        style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }}
      />
      <div className="wrap" style={{ position: 'relative' }}>
        <p className="eyebrow rv" style={{ marginBottom: '16px' }}>
          {approach.eyebrow}
        </p>
        <h2 className="head-oneline rv">
          {approach.heading}
          <span className="head-sub">{approach.headingSub}</span>
        </h2>
        <div className="cards3">
          {approach.cards.map((card) => (
            <div key={card.n} className="ac rv">
              <div className="n">{card.n}</div>
              <div className="tick" />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
        <div className="integ rv">
          <p className="eyebrow lbl">{approach.integrationsLabel}</p>
          <div className="row">
            {approach.integrations.map((name, i) => (
              <Fragment key={name}>
                {i > 0 && <span className="sep">·</span>}
                <span className="t">{name}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
