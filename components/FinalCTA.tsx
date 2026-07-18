export default function FinalCTA() {
  return (
    <section className="final dark dots py-[clamp(80px,15vw,150px)] pb-[clamp(80px,15vw,140px)]">
      <div className="wrap max-w-[980px] text-center reveal relative z-10">
        <h2 className="final h2 font-serif font-bold text-[clamp(1.6rem,5vw,3.7rem)] mx-auto mb-[clamp(16px,3vw,28px)] leading-[1.12]">
          You've already squeezed the obvious costs.{' '}
          <em className="font-normal text-terracotta">The next point of margin</em> is hiding in the coordination around them.
        </h2>
        <p className="final go text-cream-dark text-[clamp(15px,3.5vw,19px)] mb-[clamp(24px,5vw,52px)]">
          Unlock with marginlift<sup className="text-[0.55em]">™</sup> vertical AI agents.
        </p>
        <a href="mailto:hello@marginlift.ai?subject=Free%20AI%20Opportunity%20Audit" className="btn btn-solid">
          Run the free audit&nbsp;&nbsp;»
        </a>
      </div>

      <footer className="border-t border-line-dark mt-[clamp(60px,10vw,110px)] pt-[clamp(20px,4vw,44px)]">
        <div className="wrap">
          <div className="foot-inner flex justify-between items-center gap-[clamp(12px,3vw,24px)] flex-wrap text-left">
            <a href="#" className="font-serif font-bold text-[clamp(16px,4vw,22px)] letter-spacing-tight text-cream no-underline flex-shrink-0">
              marginlift<sup className="text-[clamp(6px,1.5vw,9px)] font-semibold">™</sup>
            </a>
            <span className="mono text-cream-dark letter-spacing-[0.16em] text-[clamp(8px,2vw,11px)]">
              VerticalAI for low margin high volume businesses
            </span>
          </div>
        </div>
      </footer>
    </section>
  )
}
