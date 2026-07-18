export default function AuditSection() {
  return (
    <section id="audit" className="dark dots py-[clamp(50px,10vw,120px)]">
      <div className="wrap reveal relative z-10">
        <div className="mono eyebrow">03&nbsp;&mdash;&nbsp;The audit</div>
        <div className="sec-head mb-[clamp(40px,8vw,80px)]">
          <h2>Not sure where the money is hiding? Start with the audit.</h2>
        </div>

        <p className="text-[clamp(16px,3.5vw,19px)] text-cream-dark -mt-[clamp(32px,6vw,52px)] mb-[clamp(12px,2vw,20px)]">
          Free AI Opportunity Audit for your business.
        </p>
        <p className="text-[clamp(15px,3vw,18px)] text-[#D8D1C3] max-w-[640px] mb-[clamp(32px,6vw,64px)]">
          Before pitching you anything, our audit agent analyses your business the way a sector analyst would:
        </p>

        <div className="grid grid-cols-3 gap-0 border border-line-dark lg:grid-cols-1">
          <div className="border-r border-b border-line-dark p-[clamp(20px,4vw,48px)] lg:border-r-0 lg:border-b">
            <span className="mono text-gold block mb-[clamp(12px,2vw,20px)] text-[clamp(9px,2vw,12px)]">A.</span>
            <p className="text-[clamp(14px,3vw,16px)] leading-[1.8] text-[#D8D1C3]">
              Reconstructs your cost stack from public filings, ratings reports and the data you choose to share
            </p>
          </div>

          <div className="border-r border-b border-line-dark p-[clamp(20px,4vw,48px)] lg:border-r-0 lg:border-b">
            <span className="mono text-gold block mb-[clamp(12px,2vw,20px)] text-[clamp(9px,2vw,12px)]">B.</span>
            <p className="text-[clamp(14px,3vw,16px)] leading-[1.8] text-[#D8D1C3]">
              Identifies which cost lines carry the largest hidden coordination layer in your specific operation
            </p>
          </div>

          <div className="border-b border-line-dark p-[clamp(20px,4vw,48px)] lg:border-b">
            <span className="mono text-gold block mb-[clamp(12px,2vw,20px)] text-[clamp(9px,2vw,12px)]">C.</span>
            <p className="text-[clamp(14px,3vw,16px)] leading-[1.8] text-[#D8D1C3]">
              Ranks use-cases by money impact, speed to proof, and how little your team's workflow has to change
            </p>
          </div>

          <div className="border-r border-line-dark p-[clamp(20px,4vw,48px)] bg-[rgba(244,240,231,0.04)] lg:border-r-0">
            <span className="mono text-gold block mb-[clamp(12px,2vw,20px)] text-[clamp(9px,2vw,12px)]">D.</span>
            <p className="text-[clamp(14px,3vw,16px)] leading-[1.8] text-[#D8D1C3]">
              Hands you a prioritised list, whether or not you work with us
            </p>
          </div>

          <div className="border-r border-line-dark bg-[rgba(244,240,231,0.04)] lg:border-r-0"></div>
          <div className="bg-[rgba(244,240,231,0.04)]"></div>
        </div>

        <div className="flex items-center gap-[clamp(12px,3vw,36px)] flex-wrap mt-[clamp(32px,6vw,64px)]">
          <a href="mailto:hello@marginlift.ai?subject=Free%20AI%20Opportunity%20Audit" className="btn btn-solid">
            Run the AI opportunity audit&nbsp;&nbsp;»
          </a>
          <span className="font-mono text-[clamp(9px,2vw,12px)] letter-spacing-[0.16em] uppercase text-cream-dark leading-[1.6]">
            One short session · No integrations needed to start
          </span>
        </div>
      </div>
    </section>
  )
}
