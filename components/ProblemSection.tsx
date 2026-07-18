export default function ProblemSection() {
  return (
    <section id="problem" className="dark dots py-[clamp(50px,10vw,120px)]">
      <div className="wrap reveal relative z-10">
        <div className="mono eyebrow">01&nbsp;&mdash;&nbsp;The problem</div>
        <div className="sec-head mb-[clamp(40px,8vw,80px)]">
          <h2>Every cost line in your business has two layers.</h2>
        </div>

        <div className="grid grid-cols-[7fr_5fr] gap-[clamp(32px,6vw,88px)] lg:grid-cols-1 md:gap-[clamp(24px,5vw,56px)]">
          <div className="flex flex-col justify-between gap-[clamp(20px,4vw,32px)]">
            <div className="space-y-[clamp(20px,4vw,44px)]">
              <div className="border-l-2 border-line-dark pl-[clamp(16px,4vw,28px)] pt-[clamp(12px,2vw,16px)]">
                <span className="mono block mb-[clamp(8px,2vw,14px)] text-cream-dark text-[clamp(9px,2vw,12px)]">Layer 1 — Direct cost</span>
                <p className="text-[clamp(14px,3vw,17px)] leading-[1.8] text-[#D8D1C3]">
                  What your business actually consumes to produce or deliver: materials, labour, freight, energy, equipment time, inventory, and execution cost. You've already squeezed these hard.
                </p>
              </div>

              <div className="border-l-2 border-terracotta pl-[clamp(16px,4vw,28px)] pt-[clamp(12px,2vw,16px)]">
                <span className="mono block mb-[clamp(8px,2vw,14px)] text-gold text-[clamp(9px,2vw,12px)]">Layer 2 — Coordination cost</span>
                <p className="text-[clamp(14px,3vw,17px)] leading-[1.8] text-[#D8D1C3]">
                  The time and money spent matching records, chasing payments, scheduling work, approving routine decisions, reconciling systems, handling exceptions, and keeping people aligned across the tools you already use.
                </p>
              </div>
            </div>

            <p className="text-[clamp(14px,3vw,17px)] leading-[1.8] text-[#D8D1C3] mt-[clamp(12px,2vw,32px)]">
              This cost is usually hidden inside labour, overheads, delays, finance cost, and working-capital drag. You usually can't negotiate it away. <b>But you can automate it out.</b>
            </p>
          </div>

          <div className="border border-line-dark bg-cream-dim p-[clamp(20px,4vw,56px)] flex flex-col justify-between gap-[clamp(20px,4vw,44px)]">
            <div>
              <div className="font-serif font-bold letter-spacing-[-.03em] text-[clamp(2.2rem,5vw,4.2rem)] leading-none text-cream mb-[clamp(12px,3vw,18px)]">
                1.5–5<span className="text-gold text-[0.55em] font-semibold">%</span>
              </div>
              <div className="font-mono text-[clamp(9px,2vw,12px)] letter-spacing-[0.16em] uppercase text-cream-dark leading-[1.8]">
                Of revenue — hidden coordination cost in many businesses
              </div>
            </div>

            <hr className="border-none border-t border-line-dark my-[clamp(20px,4vw,44px)]" />

            <div>
              <div className="font-serif font-bold letter-spacing-[-.03em] text-[clamp(2.2rem,5vw,4.2rem)] leading-none text-cream mb-[clamp(12px,3vw,18px)]">
                2–6<span className="text-gold text-[0.55em] font-semibold">%</span>
              </div>
              <div className="font-mono text-[clamp(9px,2vw,12px)] letter-spacing-[0.16em] uppercase text-cream-dark leading-[1.8] mb-[clamp(12px,3vw,32px)]">
                Typical PBT margin in tight-margin operations
              </div>

              <div className="mt-[clamp(12px,3vw,44px)] pt-[clamp(16px,3vw,32px)] border-t border-line-dark font-mono text-[clamp(9px,2vw,12px)] letter-spacing-[0.16em] uppercase text-gold leading-[1.8]">
                Cut the first number ↓ and the second moves up ↑ — the hidden layer is often as large as your entire profit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
