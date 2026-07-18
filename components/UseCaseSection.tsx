'use client'

import { useState } from 'react'

const categories = [
  {
    title: 'Money stuck outside the business',
    mono: 'Cash, not cost',
    desc: "You've earned it, you just can't use it yet.",
    items: [
      { id: 'receivables', label: 'Receivables and collections' },
      { id: 'inventory', label: 'Inventory and working capital' },
      { id: 'invoicing', label: 'Invoicing, tax and compliance workload' },
    ],
  },
  {
    title: 'Money going out the gate',
    mono: 'What you buy',
    desc: 'Every rupee overpaid to a vendor or transporter comes straight off your bottom line.',
    items: [
      { id: 'procurement', label: 'Procurement and vendor price variance' },
      { id: 'input-mix', label: 'Input mix optimisation' },
      { id: 'freight', label: 'Freight and dispatch planning' },
    ],
  },
  {
    title: 'Money lost inside operations',
    mono: 'What you convert',
    desc: 'The gap between what goes in and what comes out.',
    items: [
      { id: 'energy', label: 'Energy and utilities cost' },
      { id: 'yield', label: 'Yield and material reconciliation' },
      { id: 'quality', label: 'Quality, rejections and rework' },
      { id: 'maintenance', label: 'Maintenance and downtime' },
      { id: 'capacity', label: 'Capacity utilisation and planning' },
    ],
  },
]

export default function UseCaseSection() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set())
  const [customText, setCustomText] = useState('')

  const toggleItem = (id: string) => {
    const newSet = new Set(selectedItems)
    if (newSet.has(id)) {
      newSet.delete(id)
    } else {
      newSet.add(id)
    }
    setSelectedItems(newSet)
  }

  return (
    <section id="usecases" className="dots py-[clamp(50px,10vw,120px)]">
      <div className="wrap reveal relative z-10">
        <div className="mono eyebrow">04&nbsp;&mdash;&nbsp;Use-case selector</div>
        <div className="sec-head mb-[clamp(40px,8vw,80px)]">
          <h2>
            Where is your money going?{' '}
            <span className="ghost">Pick what matches your business.</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-[clamp(12px,3vw,24px)] lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="border border-line p-[clamp(20px,4vw,40px)]"
            >
              <h3 className="mb-[clamp(8px,2vw,10px)]">{cat.title}</h3>
              <span className="mono block text-gold mb-[clamp(12px,2vw,16px)] text-[clamp(9px,2vw,12px)]">
                {cat.mono}
              </span>
              <p className="text-ink-soft text-[clamp(13px,3vw,15px)] leading-[1.7] mb-[clamp(16px,3vw,28px)]">
                {cat.desc}
              </p>
              <div className="space-y-[clamp(8px,2vw,14px)]">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`flex gap-[clamp(10px,2vw,14px)] items-start bg-[#FCFAF4] border px-[clamp(14px,3vw,18px)] py-[clamp(10px,2vw,14px)] mb-0 cursor-pointer text-[clamp(13px,3vw,15px)] font-medium leading-[1.45] transition-colors min-h-[44px] sm:min-h-[48px] ${
                      selectedItems.has(item.id)
                        ? 'border-terracotta'
                        : 'border-line hover:border-terracotta'
                    }`}
                  >
                    <div
                      className={`flex-none w-[clamp(18px,4vw,19px)] h-[clamp(18px,4vw,19px)] border-[1.5px] flex items-center justify-center text-[clamp(11px,2vw,13px)] mt-0.5 transition-colors flex-shrink-0 ${
                        selectedItems.has(item.id)
                          ? 'bg-terracotta border-terracotta text-cream'
                          : 'border-ink-soft'
                      }`}
                    >
                      {selectedItems.has(item.id) ? '✓' : ''}
                    </div>
                    <span className="flex-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Column 4 - stacked */}
          <div className="col-span-1 lg:col-span-2 md:col-span-1 sm:col-span-1 flex flex-col gap-[clamp(12px,3vw,24px)]">
            {/* Money left on table */}
            <div className="border border-line p-[clamp(20px,4vw,40px)]">
              <h3 className="mb-[clamp(8px,2vw,14px)]">Money left on the table</h3>
              <span className="mono block text-gold mb-[clamp(12px,2vw,16px)] text-[clamp(9px,2vw,12px)]">
                What you sell
              </span>
              <p className="text-ink-soft text-[clamp(13px,3vw,15px)] leading-[1.7] mb-[clamp(16px,3vw,28px)]">
                Same volume, better realisation.
              </p>
              <div className="space-y-[clamp(8px,2vw,14px)]">
                {[
                  { id: 'product-mix', label: 'Product mix and realisation' },
                  { id: 'customer-comms', label: 'Customer communication load' },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`flex gap-[clamp(10px,2vw,14px)] items-start bg-[#FCFAF4] border px-[clamp(14px,3vw,18px)] py-[clamp(10px,2vw,14px)] mb-0 cursor-pointer text-[clamp(13px,3vw,15px)] font-medium leading-[1.45] transition-colors min-h-[44px] sm:min-h-[48px] ${
                      selectedItems.has(item.id)
                        ? 'border-terracotta'
                        : 'border-line hover:border-terracotta'
                    }`}
                  >
                    <div
                      className={`flex-none w-[clamp(18px,4vw,19px)] h-[clamp(18px,4vw,19px)] border-[1.5px] flex items-center justify-center text-[clamp(11px,2vw,13px)] mt-0.5 transition-colors flex-shrink-0 ${
                        selectedItems.has(item.id)
                          ? 'bg-terracotta border-terracotta text-cream'
                          : 'border-ink-soft'
                      }`}
                    >
                      {selectedItems.has(item.id) ? '✓' : ''}
                    </div>
                    <span className="flex-1">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Something else */}
            <div className="border border-line p-[clamp(20px,4vw,40px)] flex flex-col flex-grow">
              <h3 className="mb-[clamp(8px,2vw,14px)]">Something else</h3>
              <p className="text-ink-soft text-[clamp(13px,3vw,15px)] leading-[1.7] mb-[clamp(16px,3vw,28px)]">
                A cost we haven't listed is hurting you. Describe it in one line and we'll tell you honestly whether an AI agent can attack it.
              </p>
              <input
                type="text"
                placeholder="e.g. rework approvals eat two days a week"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full border border-line bg-[#FCFAF4] px-[clamp(14px,3vw,18px)] py-[clamp(10px,2vw,14px)] font-inter text-[clamp(13px,3vw,15px)] text-ink outline-none focus:border-terracotta min-h-[44px] sm:min-h-[48px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
