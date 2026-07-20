import Link from 'next/link'

export default function Hero() {
  return (
    <header className="hero dots pb-0 pt-[clamp(60px,10vw,130px)]">
      <div className="wrap text-center relative z-10">
        <div className="mono eyebrow text-gold">AI agents for margin performance</div>
        <h1 className="font-serif font-bold text-[clamp(1.8rem,7vw,5.4rem)] mb-[clamp(24px,4vw,44px)]">
          The market sets your price.<br />Operations set your profit.
        </h1>
        <p className="max-w-[700px] mx-auto mb-[clamp(20px,4vw,32px)] text-[clamp(14px,3.5vw,18.5px)] leading-[1.8] text-ink-soft">
          We're the end-to-end partner that helps companies turn frontier models into measurable business results.
        </p>
        <div className="cta-row flex gap-[clamp(10px,3vw,20px)] justify-center flex-wrap mb-[clamp(40px,6vw,60px)]">
          <Link href="/audit" className="btn btn-solid">
            Get Started&nbsp;&nbsp;→
          </Link>
        </div>

        <div className="hero-stats mt-[clamp(40px,8vw,96px)] border-t border-line pt-[clamp(32px,6vw,64px)] pb-[clamp(44px,8vw,88px)] flex justify-center items-center gap-[clamp(12px,3vw,56px)] flex-wrap">
          <div className="flex items-center gap-[clamp(12px,3vw,20px)] text-left">
            <div className="font-serif font-bold text-[clamp(2rem,4.5vw,3.4rem)] letter-spacing-[-.03em] text-terracotta leading-none">
              −10%
            </div>
            <div className="font-mono text-[clamp(9px,2vw,11.5px)] letter-spacing-[0.16em] uppercase text-ink-soft leading-[1.7] max-w-[140px] sm:max-w-[190px]">
              Hidden coordination cost
            </div>
          </div>
          <div className="hero-arrow font-serif text-[clamp(24px,5vw,34px)] text-ink-soft hidden sm:block">→</div>
          <div className="flex items-center gap-[clamp(12px,3vw,20px)] text-left">
            <div className="font-serif font-bold text-[clamp(2rem,4.5vw,3.4rem)] letter-spacing-[-.03em] text-terracotta leading-none">
              +25%
            </div>
            <div className="font-mono text-[clamp(9px,2vw,11.5px)] letter-spacing-[0.16em] uppercase text-ink-soft leading-[1.7] max-w-[140px] sm:max-w-[190px]">
              Profit before tax, or more
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
