import { problem } from '@/lib/content'

export default function ProblemSection() {
  return (
    <section className="sec sec-alt" id="problem">
      <div className="wrap">
        <p className="eyebrow rv" style={{ marginBottom: '16px' }}>
          {problem.eyebrow}
        </p>
        <h2 className="head-oneline rv">{problem.heading}</h2>
        <div className="problem-grid">
          <div className="rv problem-left">
            {problem.layers.map((layer) => (
              <div key={layer.label} className={`layer-block${layer.highlight ? ' hl' : ''}`}>
                <p className={`layer-label${layer.highlight ? ' clay' : ''}`}>{layer.label}</p>
                <p className="layer-body">{layer.body}</p>
              </div>
            ))}
            <p className="problem-note">
              This cost is usually hidden inside labour, overheads, delays, finance cost, and
              working-capital drag. You usually can&rsquo;t negotiate it away.{' '}
              <strong>But you can automate it out.</strong>
            </p>
          </div>
          <div className="rv number-card">
            <div className="num-stack">
              {problem.numbers.map((n) => (
                <div key={n.label} className="num-item">
                  <p className="num">
                    {n.value}
                    <span>{n.unit}</span>
                  </p>
                  <p className="num-label">{n.label}</p>
                </div>
              ))}
            </div>
            <div className="num-foot">
              <p className="num-note">{problem.numberNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
