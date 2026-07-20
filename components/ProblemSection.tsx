export default function ProblemSection() {
  return (
    <section id="problem" className="dark dots py-[clamp(50px,10vw,120px)]">
      <div className="wrap reveal relative z-10">
        <div className="mono eyebrow">01&nbsp;&mdash;&nbsp;The problem</div>
        <div className="sec-head mb-[clamp(40px,8vw,80px)]">
          <h2>Every cost line in your business has two layers.</h2>
        </div>

        <div className="flex gap-[clamp(24px,5vw,80px)] items-stretch">
          {/* Left Column - Text */}
          <div className="flex-1 min-w-0 flex flex-col justify-start gap-[clamp(16px,3vw,24px)]">
            <div className="space-y-[clamp(16px,3vw,28px)]">
              <div className="border-l-2 border-line-dark pl-[clamp(16px,4vw,28px)]">
                <span className="mono block mb-[clamp(6px,1.5vw,10px)] text-cream-dark text-[clamp(9px,2vw,11px)]">Layer 1 — Direct cost</span>
                <p className="text-[clamp(13px,2.8vw,15px)] leading-[1.6] text-[#D8D1C3]">
                  What your business actually consumes to produce or deliver: materials, labour, freight, energy, equipment time, inventory, and execution cost. You've already squeezed these hard.
                </p>
              </div>

              <div className="border-l-2 border-terracotta pl-[clamp(16px,4vw,28px)]">
                <span className="mono block mb-[clamp(6px,1.5vw,10px)] text-terracotta text-[clamp(9px,2vw,11px)]">Layer 2 — Coordination cost</span>
                <p className="text-[clamp(13px,2.8vw,15px)] leading-[1.6] text-[#D8D1C3]">
                  The time and money spent matching records, chasing payments, scheduling work, approving routine decisions, reconciling systems, handling exceptions, and keeping people aligned across the tools you already use.
                </p>
              </div>
            </div>

            <p className="text-[clamp(13px,2.8vw,15px)] leading-[1.6] text-[#D8D1C3] mt-auto">
              This cost is usually hidden inside labour, overheads, delays, finance cost, and working-capital drag. You usually can't negotiate it away. <b>But you can automate it out.</b>
            </p>
          </div>

          {/* Right Column - Stat Card */}
          <div className="flex-none w-[300px] sm:w-[260px] border border-line-dark bg-cream-dim p-[clamp(24px,3vw,32px)] flex flex-col justify-between">
            <div>
              <div className="font-serif font-bold letter-spacing-[-.03em] text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-cream mb-[clamp(10px,2vw,14px)]">
                1.5–5<span className="text-terracotta text-[0.55em] font-semibold">%</span>
              </div>
              <div className="font-mono text-[clamp(8px,1.8vw,10px)] letter-spacing-[0.14em] uppercase text-cream-dark leading-[1.6]">
                Of revenue — hidden coordination cost in many businesses
              </div>
            </div>

            <hr className="border-none border-t border-line-dark my-[clamp(16px,3vw,24px)]" />

            <div>
              <div className="font-serif font-bold letter-spacing-[-.03em] text-[clamp(2.2rem,4vw,3.2rem)] leading-none text-cream mb-[clamp(10px,2vw,14px)]">
                2–6<span className="text-terracotta text-[0.55em] font-semibold">%</span>
              </div>
              <div className="font-mono text-[clamp(8px,1.8vw,10px)] letter-spacing-[0.14em] uppercase text-cream-dark leading-[1.6] mb-[clamp(12px,2vw,16px)]">
                Typical PBT margin in tight-margin operations
              </div>

              <div className="pt-[clamp(12px,2vw,16px)] border-t border-line-dark font-mono text-[clamp(8px,1.8vw,10px)] letter-spacing-[0.12em] uppercase text-terracotta leading-[1.5]">
                Cut the first number ↓ and the second moves up ↑ — the hidden layer is often as large as your entire profit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
