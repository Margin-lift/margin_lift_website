export default function AuditSection() {
  return (
    <section id="audit" className="dark dots py-[120px]">
      <div className="wrap max-w-[1200px] mx-auto px-8 reveal relative z-10">
        <div className="mono eyebrow">03&nbsp;&mdash;&nbsp;The audit</div>
        <div className="sec-head mb-20">
          <h2>Not sure where the money is hiding? Start with the audit.</h2>
        </div>

        <p className="text-[19px] text-cream-dark -mt-13 mb-5">
          Free AI Opportunity Audit for your business.
        </p>
        <p className="text-[18px] text-[#D8D1C3] max-w-[640px] mb-16">
          Before pitching you anything, our audit agent analyses your business the way a sector analyst would:
        </p>

        <div className="grid grid-cols-3 gap-0 border border-line-dark lg:grid-cols-1">
          <div className="border-r border-b border-line-dark p-12 lg:border-r-0 lg:border-b">
            <span className="mono text-gold block mb-5">A.</span>
            <p className="text-[16px] leading-[1.85] text-[#D8D1C3]">
              Reconstructs your cost stack from public filings, ratings reports and the data you choose to share
            </p>
          </div>

          <div className="border-r border-b border-line-dark p-12 lg:border-r-0 lg:border-b">
            <span className="mono text-gold block mb-5">B.</span>
            <p className="text-[16px] leading-[1.85] text-[#D8D1C3]">
              Identifies which cost lines carry the largest hidden coordination layer in your specific operation
            </p>
          </div>

          <div className="border-b border-line-dark p-12 lg:border-b">
            <span className="mono text-gold block mb-5">C.</span>
            <p className="text-[16px] leading-[1.85] text-[#D8D1C3]">
              Ranks use-cases by money impact, speed to proof, and how little your team's workflow has to change
            </p>
          </div>

          <div className="border-r border-line-dark p-12 bg-[rgba(244,240,231,0.04)] lg:border-r-0">
            <span className="mono text-gold block mb-5">D.</span>
            <p className="text-[16px] leading-[1.85] text-[#D8D1C3]">
              Hands you a prioritised list, whether or not you work with us
            </p>
          </div>

          <div className="border-r border-line-dark bg-[rgba(244,240,231,0.04)] lg:border-r-0"></div>
          <div className="bg-[rgba(244,240,231,0.04)]"></div>
        </div>

        <div className="flex items-center gap-9 flex-wrap mt-16">
          <a href="mailto:hello@marginlift.ai?subject=Free%20AI%20Opportunity%20Audit" className="btn btn-solid">
            Run the AI opportunity audit&nbsp;&nbsp;»
          </a>
          <span className="font-mono text-[12px] letter-spacing-[0.18em] uppercase text-cream-dark">
            One short session · No integrations needed to start
          </span>
        </div>
      </div>
    </section>
  )
}
