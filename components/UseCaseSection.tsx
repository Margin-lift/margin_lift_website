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
    <section id="usecases" className="dots py-[120px]">
      <div className="wrap max-w-[1200px] mx-auto px-8 reveal relative z-10">
        <div className="mono eyebrow">04&nbsp;&mdash;&nbsp;Use-case selector</div>
        <div className="sec-head mb-20">
          <h2>
            Where is your money going?{' '}
            <span className="ghost">Pick what matches your business.</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-6 lg:grid-cols-2 md:grid-cols-1">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="border border-line p-10"
            >
              <h3 className="mb-2.5">{cat.title}</h3>
              <span className="mono block text-gold mb-4">
                {cat.mono}
              </span>
              <p className="text-ink-soft text-[15px] leading-[1.7] mb-7">
                {cat.desc}
              </p>
              <div>
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`flex gap-3.5 items-start bg-[#FCFAF4] border px-4.5 py-4 mb-3.5 cursor-pointer text-[15px] font-medium leading-[1.45] transition-colors ${
                      selectedItems.has(item.id)
                        ? 'border-terracotta'
                        : 'border-line hover:border-terracotta'
                    }`}
                  >
                    <div
                      className={`flex-none w-[19px] h-[19px] border-[1.5px] flex items-center justify-center text-[13px] mt-0.5 transition-colors ${
                        selectedItems.has(item.id)
                          ? 'bg-terracotta border-terracotta text-cream'
                          : 'border-ink-soft'
                      }`}
                    >
                      {selectedItems.has(item.id) ? '✓' : ''}
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Column 4 - stacked */}
          <div className="col-span-1 lg:col-span-2 md:col-span-1 flex flex-col gap-6">
            {/* Money left on table */}
            <div className="border border-line p-10">
              <h3 className="mb-3.5">Money left on the table</h3>
              <span className="mono block text-gold mb-4">
                What you sell
              </span>
              <p className="text-ink-soft text-[15px] leading-[1.7] mb-7">
                Same volume, better realisation.
              </p>
              <div>
                {[
                  { id: 'product-mix', label: 'Product mix and realisation' },
                  { id: 'customer-comms', label: 'Customer communication load' },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className={`flex gap-3.5 items-start bg-[#FCFAF4] border px-4.5 py-4 mb-3.5 cursor-pointer text-[15px] font-medium leading-[1.45] transition-colors ${
                      selectedItems.has(item.id)
                        ? 'border-terracotta'
                        : 'border-line hover:border-terracotta'
                    }`}
                  >
                    <div
                      className={`flex-none w-[19px] h-[19px] border-[1.5px] flex items-center justify-center text-[13px] mt-0.5 transition-colors ${
                        selectedItems.has(item.id)
                          ? 'bg-terracotta border-terracotta text-cream'
                          : 'border-ink-soft'
                      }`}
                    >
                      {selectedItems.has(item.id) ? '✓' : ''}
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Something else */}
            <div className="border border-line p-10 flex flex-col flex-grow">
              <h3 className="mb-3.5">Something else</h3>
              <p className="text-ink-soft text-[15px] leading-[1.7] mb-7">
                A cost we haven't listed is hurting you. Describe it in one line and we'll tell you honestly whether an AI agent can attack it.
              </p>
              <input
                type="text"
                placeholder="e.g. rework approvals eat two days a week"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="w-full border border-line bg-[#FCFAF4] px-4.5 py-4 font-inter text-[15px] text-ink outline-none focus:border-terracotta"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
