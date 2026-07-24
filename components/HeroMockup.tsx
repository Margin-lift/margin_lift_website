import { heroMock } from '@/lib/content'

/** Animated "margin audit" browser mockup shown in the hero. Presentational. */
export default function HeroMockup() {
  return (
    <div className="mock-wrap rv">
      <div className="mock-field field" />
      <div
        className="dot-grid-tight"
        style={{ position: 'absolute', inset: '-24px', borderRadius: '24px', opacity: 0.5 }}
      />
      <div className="mock">
        <div className="mock-bar">
          <div className="dots">
            <span style={{ background: 'rgba(176,101,78,.7)' }} />
            <span style={{ background: '#D6B96A' }} />
            <span style={{ background: 'rgba(91,140,110,.7)' }} />
          </div>
          <div className="url">
            <span
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--faint)' }}
            />
            {heroMock.url}
          </div>
          <span className="live">
            <span className="ping" />
            Live
          </span>
        </div>
        <div className="mock-body">
          <div className="mock-head">
            <h3>{heroMock.title}</h3>
            <span className="note" style={{ fontSize: '.6rem' }}>
              {heroMock.caption}
            </span>
          </div>
          <div className="agent">
            <div className="agent-top">
              <div className="agent-id">
                <span className="agent-ic">
                  <span />
                </span>
                <div>
                  <div className="agent-name">{heroMock.agent.name}</div>
                  <div className="agent-status">{heroMock.agent.status}</div>
                </div>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '.62rem',
                  fontWeight: 600,
                  color: 'var(--saffron)',
                }}
              >
                {heroMock.agent.progress}
              </span>
            </div>
            <div className="bar">
              <div />
            </div>
          </div>
          {heroMock.leaks.map((leak) => (
            <div key={leak.label} className="leak" style={{ animationDelay: leak.delay }}>
              <span className="l">
                <span className="d" />
                {leak.label}
              </span>
              <span className="amt">
                {leak.amount}
                <em>{leak.per}</em>
              </span>
            </div>
          ))}
          <div className="total">
            <span className="lbl">{heroMock.total.label}</span>
            <span className="val">
              {heroMock.total.value} <em>{heroMock.total.per}</em>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
