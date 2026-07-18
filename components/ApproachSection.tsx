export default function ApproachSection() {
  return (
    <section id="approach" className="dots py-[120px]">
      <div className="wrap max-w-[1200px] mx-auto px-8 reveal relative z-10">
        <div className="mono eyebrow">02&nbsp;&mdash;&nbsp;Our approach</div>
        <div className="sec-head mb-20">
          <h2>
            AI agents that work behind your existing tools.{' '}
            <span className="ghost">Not another dashboard.</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
          <div className="bg-cream-deep p-10">
            <span className="mono block text-gold mb-5">Principle 01</span>
            <h3 className="mb-4">Zero adoption required</h3>
            <p className="text-ink-soft text-[15px] leading-[1.8]">
              Our agents read data that already exists: your ERP or Tally ledgers, bank statements, invoices, WhatsApp and email. Your team keeps working in the tools they already trust.
            </p>
          </div>

          <div className="bg-cream-deep p-10">
            <span className="mono block text-gold mb-5">Principle 02</span>
            <h3 className="mb-4">Exceptions, not extra work</h3>
            <p className="text-ink-soft text-[15px] leading-[1.8]">
              The agent silently matches, reconciles and schedules in the background. Your staff see fewer, cleaner exceptions in the same channels they already check. Nobody logs into anything new.
            </p>
          </div>

          <div className="bg-cream-deep p-10">
            <span className="mono block text-gold mb-5">Principle 03</span>
            <h3 className="mb-4">Measured in money</h3>
            <p className="text-ink-soft text-[15px] leading-[1.8]">
              Every deployment is tied to a specific cost line and a baseline from your own numbers. If we can't show the saving within one billing or production cycle, we tell you.
            </p>
          </div>
        </div>

        <div className="systems mt-18 pt-10 border-t border-line font-mono text-[12.5px] font-medium letter-spacing-[0.2em] uppercase text-ink text-center leading-[2.6]">
          Tally<b className="text-terracotta font-normal px-3">·</b>
          SAP<b className="text-terracotta font-normal px-3">·</b>
          Zoho<b className="text-terracotta font-normal px-3">·</b>
          QuickBooks<b className="text-terracotta font-normal px-3">·</b>
          NetSuite<b className="text-terracotta font-normal px-3">·</b>
          Excel & Sheets<b className="text-terracotta font-normal px-3">·</b>
          Gmail & Outlook<b className="text-terracotta font-normal px-3">·</b>
          WhatsApp<b className="text-terracotta font-normal px-3">·</b>
          Your custom ERP
        </div>
      </div>
    </section>
  )
}
