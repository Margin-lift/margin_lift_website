export default function ApproachSection() {
  return (
    <section id="approach" className="dots py-[clamp(50px,10vw,120px)]">
      <div className="wrap reveal relative z-10">
        <div className="mono eyebrow">02&nbsp;&mdash;&nbsp;Our approach</div>
        <div className="sec-head mb-[clamp(40px,8vw,80px)]">
          <h2>
            AI agents that work behind your existing tools.{' '}
            <span className="ghost">Not another dashboard.</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-[clamp(16px,3vw,24px)] lg:grid-cols-1">
          <div className="bg-cream-deep p-[clamp(24px,4vw,40px)]">
            <span className="mono block text-gold mb-[clamp(12px,2vw,20px)] text-[clamp(9px,2vw,12px)]">Principle 01</span>
            <h3 className="mb-[clamp(12px,2vw,16px)]">Zero adoption required</h3>
            <p className="text-ink-soft text-[clamp(13px,3vw,15px)] leading-[1.8]">
              Our agents read data that already exists: your ERP or Tally ledgers, bank statements, invoices, WhatsApp and email. Your team keeps working in the tools they already trust.
            </p>
          </div>

          <div className="bg-cream-deep p-[clamp(24px,4vw,40px)]">
            <span className="mono block text-gold mb-[clamp(12px,2vw,20px)] text-[clamp(9px,2vw,12px)]">Principle 02</span>
            <h3 className="mb-[clamp(12px,2vw,16px)]">Exceptions, not extra work</h3>
            <p className="text-ink-soft text-[clamp(13px,3vw,15px)] leading-[1.8]">
              The agent silently matches, reconciles and schedules in the background. Your staff see fewer, cleaner exceptions in the same channels they already check. Nobody logs into anything new.
            </p>
          </div>

          <div className="bg-cream-deep p-[clamp(24px,4vw,40px)]">
            <span className="mono block text-gold mb-[clamp(12px,2vw,20px)] text-[clamp(9px,2vw,12px)]">Principle 03</span>
            <h3 className="mb-[clamp(12px,2vw,16px)]">Measured in money</h3>
            <p className="text-ink-soft text-[clamp(13px,3vw,15px)] leading-[1.8]">
              Every deployment is tied to a specific cost line and a baseline from your own numbers. If we can't show the saving within one billing or production cycle, we tell you.
            </p>
          </div>
        </div>

        <div className="systems mt-[clamp(40px,8vw,72px)] pt-[clamp(20px,4vw,40px)] border-t border-line font-mono text-[clamp(9px,2vw,12.5px)] font-medium letter-spacing-[0.18em] uppercase text-ink text-center leading-[2.4] md:leading-[2] sm:leading-[1.8]">
          <span className="inline-block">Tally</span><b className="text-terracotta font-normal px-[clamp(8px,2vw,12px)]">·</b>
          <span className="inline-block">SAP</span><b className="text-terracotta font-normal px-[clamp(8px,2vw,12px)]">·</b>
          <span className="inline-block">Zoho</span><b className="text-terracotta font-normal px-[clamp(8px,2vw,12px)]">·</b>
          <span className="inline-block">QuickBooks</span><b className="text-terracotta font-normal px-[clamp(8px,2vw,12px)]">·</b>
          <span className="inline-block">NetSuite</span><b className="text-terracotta font-normal px-[clamp(8px,2vw,12px)]">·</b>
          <span className="inline-block">Excel &amp; Sheets</span><b className="text-terracotta font-normal px-[clamp(8px,2vw,12px)]">·</b>
          <span className="inline-block">Gmail &amp; Outlook</span><b className="text-terracotta font-normal px-[clamp(8px,2vw,12px)]">·</b>
          <span className="inline-block">WhatsApp</span><b className="text-terracotta font-normal px-[clamp(8px,2vw,12px)]">·</b>
          <span className="inline-block">Your custom ERP</span>
        </div>
      </div>
    </section>
  )
}
