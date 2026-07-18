import Link from 'next/link'

export default function Hero() {
  return (
    <header className="hero dots pb-0 pt-[130px]">
      <div className="wrap max-w-[1200px] mx-auto px-8 text-center relative z-10">
        <div className="mono eyebrow text-gold mb-14">AI agents for margin performance</div>
        <h1 className="font-serif font-bold text-[clamp(3rem,7.2vw,5.4rem)] mb-11">
          The market sets your price.<br />Operations set your profit.
        </h1>
        <p className="max-w-[700px] mx-auto mb-13 text-[18.5px] leading-[1.9] text-ink-soft">
          In high-volume businesses, profit is made or lost in the small inefficiencies no one sees clearly enough to fix every day. marginlift deploys AI agents inside the systems your team already uses — your ERP, your spreadsheets, your inboxes — so margin improves without rolling out another tool.
        </p>
        <div className="flex gap-5 justify-center flex-wrap mb-24">
          <Link href="/audit" className="btn btn-solid">
            Run the free AI opportunity audit&nbsp;&nbsp;»
          </Link>
          <a href="#usecases" className="btn btn-ghost">
            See where you're leaking money
          </a>
        </div>

        <div className="hero-stats mt-24 border-t border-line pt-16 pb-22 flex justify-center items-center gap-14 flex-wrap">
          <div className="flex items-center gap-5 text-left">
            <div className="font-serif font-bold text-[clamp(2.6rem,4.5vw,3.4rem)] letter-spacing-[-.03em] text-terracotta leading-none">
              −10%
            </div>
            <div className="font-mono text-[11.5px] letter-spacing-[0.16em] uppercase text-ink-soft leading-[1.9] max-w-[190px]">
              Hidden coordination cost
            </div>
          </div>
          <div className="font-serif text-[34px] text-ink-soft">→</div>
          <div className="flex items-center gap-5 text-left">
            <div className="font-serif font-bold text-[clamp(2.6rem,4.5vw,3.4rem)] letter-spacing-[-.03em] text-terracotta leading-none">
              +25%
            </div>
            <div className="font-mono text-[11.5px] letter-spacing-[0.16em] uppercase text-ink-soft leading-[1.9] max-w-[190px]">
              Profit before tax, or more
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
