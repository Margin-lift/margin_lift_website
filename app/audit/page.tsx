import Link from 'next/link'

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-cream">
      <nav className="sticky top-0 z-50 bg-cream/88 backdrop-blur-[10px] border-b border-line">
        <div className="wrap max-w-[1200px] mx-auto px-8">
          <div className="flex items-center justify-between h-[76px]">
            <Link href="/" className="font-serif font-bold text-[22px] text-ink no-underline">
              marginlift<sup className="text-[9px] font-semibold">™</sup>
            </Link>
          </div>
        </div>
      </nav>

      <main className="wrap max-w-[1200px] mx-auto px-8 py-24">
        <div className="max-w-2xl">
          <h1 className="font-serif font-bold text-[clamp(2.2rem,4.6vw,3.6rem)] mb-6">
            Free AI Opportunity Audit
          </h1>
          <p className="text-[18.5px] leading-[1.9] text-ink-soft mb-8">
            Tell us about your business and we'll identify where coordination cost is hiding in your operations.
          </p>

          {/* Placeholder for Typeform or Tally embed */}
          <div className="border border-line p-12 bg-cream-deep text-center text-ink-soft">
            <p className="text-[16px]">
              Audit form will be embedded here (Typeform, Tally, or custom form)
            </p>
          </div>

          <p className="text-[14px] text-ink-soft mt-8">
            This form collects information about your business structure, cost lines, and operations. No credit card required.
          </p>
        </div>
      </main>
    </div>
  )
}
