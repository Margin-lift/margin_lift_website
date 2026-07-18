export default function ProblemSection() {
  return (
    <section id="problem" className="dark dots py-[120px]">
      <div className="wrap max-w-[1200px] mx-auto px-8 reveal relative z-10">
        <div className="mono eyebrow">01&nbsp;&mdash;&nbsp;The problem</div>
        <div className="sec-head mb-20">
          <h2>Every cost line in your business has two layers.</h2>
        </div>

        <div className="grid grid-cols-[7fr_5fr] gap-22 lg:grid-cols-1 md:gap-14">
          <div className="flex flex-col justify-between">
            <div>
              <div className="border-l-2 border-line-dark pl-7 mb-11">
                <span className="mono block mb-3.5 text-cream-dark">Layer 1 — Direct cost</span>
                <p className="text-[17px] leading-[1.85] text-[#D8D1C3]">
                  What your business actually consumes to produce or deliver: materials, labour, freight, energy, equipment time, inventory, and execution cost. You've already squeezed these hard.
                </p>
              </div>

              <div className="border-l-2 border-terracotta pl-7 mb-11">
                <span className="mono block mb-3.5 text-gold">Layer 2 — Coordination cost</span>
                <p className="text-[17px] leading-[1.85] text-[#D8D1C3]">
                  The time and money spent matching records, chasing payments, scheduling work, approving routine decisions, reconciling systems, handling exceptions, and keeping people aligned across the tools you already use.
                </p>
              </div>
            </div>

            <p className="text-[17px] leading-[1.85] text-[#D8D1C3] mt-2">
              This cost is usually hidden inside labour, overheads, delays, finance cost, and working-capital drag. You usually can't negotiate it away. <b>But you can automate it out.</b>
            </p>
          </div>

          <div className="border border-line-dark bg-cream-dim p-14 flex flex-col justify-between">
            <div>
              <div className="font-serif font-bold letter-spacing-[-.03em] text-[clamp(3rem,5vw,4.2rem)] leading-none text-cream mb-4.5">
                1.5–5<span className="text-gold text-[0.55em] font-semibold">%</span>
              </div>
              <div className="font-mono text-[12px] letter-spacing-[0.16em] uppercase text-cream-dark leading-8">
                Of revenue — hidden coordination cost in many businesses
              </div>
            </div>

            <hr className="border-none border-t border-line-dark my-11" />

            <div>
              <div className="font-serif font-bold letter-spacing-[-.03em] text-[clamp(3rem,5vw,4.2rem)] leading-none text-cream mb-4.5">
                2–6<span className="text-gold text-[0.55em] font-semibold">%</span>
              </div>
              <div className="font-mono text-[12px] letter-spacing-[0.16em] uppercase text-cream-dark leading-8 mb-11">
                Typical PBT margin in tight-margin operations
              </div>

              <div className="mt-11 pt-8 border-t border-line-dark font-mono text-[12px] letter-spacing-[0.16em] uppercase text-gold leading-8">
                Cut the first number ↓ and the second moves up ↑ — the hidden layer is often as large as your entire profit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
