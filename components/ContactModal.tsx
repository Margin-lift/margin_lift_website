'use client'

import { useCallback, useEffect, useState } from 'react'
import { contactModal as c } from '@/lib/content'

export default function ContactModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const close = useCallback(() => {
    setOpen(false)
    document.body.style.overflow = ''
  }, [])

  const show = useCallback(() => {
    setSubmitted(false)
    setOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  // Event delegation: any element marked [data-contact] opens the modal.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest('[data-contact]')) {
        e.preventDefault()
        show()
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [show, close])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.currentTarget.checkValidity()) {
      e.currentTarget.reportValidity()
      return
    }
    setSubmitted(true)
  }

  return (
    <div
      className={`modal-overlay${open ? ' is-open' : ''}`}
      aria-hidden={!open}
      role="presentation"
    >
      <div className="modal-backdrop" onClick={close} />
      <div className="modal-panel" role="dialog" aria-modal="true" aria-label="Contact">
        <div className="modal-dots" />
        <button className="modal-close" onClick={close} aria-label="Close" type="button">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="modal-scroll">
          {!submitted ? (
            <div>
              <p className="eyebrow" style={{ marginBottom: '12px' }}>
                {c.eyebrow}
              </p>
              <h3 className="modal-h">{c.heading}</h3>
              <p className="modal-sub">{c.sub}</p>
              <form className="modal-fields" noValidate onSubmit={handleSubmit}>
                <div className="fld">
                  <label htmlFor="f-name">
                    Your Name<span className="req">*</span>
                  </label>
                  <input id="f-name" type="text" placeholder="Your Name" required />
                </div>
                <div className="fld">
                  <label htmlFor="f-company">
                    Company<span className="req">*</span>
                  </label>
                  <input id="f-company" type="text" placeholder="Company" required />
                </div>
                <div className="fld">
                  <label htmlFor="f-email">
                    Email<span className="req">*</span>
                  </label>
                  <input id="f-email" type="email" placeholder="Email" required />
                </div>
                <div className="fld">
                  <label htmlFor="f-linkedin">LinkedIn</label>
                  <input id="f-linkedin" type="text" placeholder="LinkedIn" />
                </div>
                <div className="fld">
                  <label htmlFor="f-msg">Message</label>
                  <textarea id="f-msg" rows={3} placeholder="I want to…" />
                </div>
                <p className="modal-privacy">{c.privacy}</p>
                <label className="modal-check">
                  <input type="checkbox" />
                  <span>{c.consent}</span>
                </label>
                <p className="modal-fine">{c.unsubscribe}</p>
                <p className="modal-fine">{c.submitConsent}</p>
                <button type="submit" className="btn" style={{ alignSelf: 'center' }}>
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div className="modal-success">
              <span className="success-ic">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M8 15.5l4.5 4.5L22 9.5"
                    stroke="#C2600D"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h3 className="modal-h" style={{ fontSize: '1.5rem' }}>
                {c.successHeading}
              </h3>
              <p className="modal-sub" style={{ maxWidth: '20rem', marginLeft: 'auto', marginRight: 'auto' }}>
                {c.successSub}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
