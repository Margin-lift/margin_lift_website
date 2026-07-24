'use client'

import { useMemo, useState } from 'react'
import { simulator } from '@/lib/content'
import { formatRupees } from '@/lib/format'

const { sliders } = simulator

/** Paints the filled portion of a range track (saffron up to value, stone after). */
function trackBackground(value: number, min: number, max: number) {
  const p = ((value - min) / (max - min)) * 100
  return `linear-gradient(to right,#C2600D 0%,#C2600D ${p}%,#E3DED2 ${p}%,#E3DED2 100%)`
}

export default function SimulatorSection() {
  const [rev, setRev] = useState(sliders.revenue.value)
  const [leak, setLeak] = useState(sliders.leak.value)
  const [rec, setRec] = useState(sliders.recovery.value)

  const { recovered, leakAmt, onTable } = useMemo(() => {
    const leakAmount = rev * (leak / 100)
    const recoveredAmount = leakAmount * (rec / 100)
    return {
      recovered: recoveredAmount,
      leakAmt: leakAmount,
      onTable: Math.round((recoveredAmount / leakAmount) * 100 || 0),
    }
  }, [rev, leak, rec])

  return (
    <section className="sec sec-alt">
      <div className="wrap">
        <p className="eyebrow rv" style={{ marginBottom: '16px' }}>
          {simulator.eyebrow}
        </p>
        <h2 className="head-oneline rv">{simulator.heading}</h2>
        <div className="sim-grid" style={{ marginTop: '48px' }}>
          <div>
            <p className="lead rv">{simulator.lead}</p>
            <div className="slider-block rv">
              <div>
                <div className="sl-top">
                  <label htmlFor="rev">Annual revenue</label>
                  <span className="v">{formatRupees(rev)}</span>
                </div>
                <input
                  id="rev"
                  type="range"
                  min={sliders.revenue.min}
                  max={sliders.revenue.max}
                  step={sliders.revenue.step}
                  value={rev}
                  onChange={(e) => setRev(+e.target.value)}
                  style={{
                    background: trackBackground(rev, sliders.revenue.min, sliders.revenue.max),
                  }}
                />
              </div>
              <div>
                <div className="sl-top">
                  <label htmlFor="leak">Hidden coordination cost</label>
                  <span className="v">{leak}%</span>
                </div>
                <input
                  id="leak"
                  type="range"
                  min={sliders.leak.min}
                  max={sliders.leak.max}
                  step={sliders.leak.step}
                  value={leak}
                  onChange={(e) => setLeak(+e.target.value)}
                  style={{ background: trackBackground(leak, sliders.leak.min, sliders.leak.max) }}
                />
              </div>
              <div>
                <div className="sl-top">
                  <label htmlFor="rec">Recoverable by agents</label>
                  <span className="v">{rec}%</span>
                </div>
                <input
                  id="rec"
                  type="range"
                  min={sliders.recovery.min}
                  max={sliders.recovery.max}
                  step={sliders.recovery.step}
                  value={rec}
                  onChange={(e) => setRec(+e.target.value)}
                  style={{
                    background: trackBackground(rec, sliders.recovery.min, sliders.recovery.max),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="result rv">
            <div className="result-field field" />
            <div
              className="dot-grid-tight"
              style={{ position: 'absolute', inset: 0, borderRadius: '24px', opacity: 0.4 }}
            />
            <div className="result-in">
              <p className="eyebrow" style={{ marginBottom: '24px' }}>
                {simulator.resultLabel}
              </p>
              <p className="money">{formatRupees(recovered, true)}</p>
              <p className="note" style={{ marginTop: '8px', color: 'rgba(91,140,110,.8)' }}>
                {simulator.resultNote}
              </p>
              <div className="subgrid">
                <div>
                  <div className="k">Leaking now</div>
                  <div className="vv" style={{ color: 'var(--clay)' }}>
                    {formatRupees(leakAmt)}
                  </div>
                </div>
                <div>
                  <div className="k">On the table</div>
                  <div className="vv" style={{ color: 'var(--ink)' }}>
                    {onTable}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
