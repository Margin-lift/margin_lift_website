'use client'

import { useEffect } from 'react'

/** Adds `.in` to every `.rv` element as it scrolls into view (scroll-reveal). */
export default function RevealWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '-60px' }
    )

    const reveals = document.querySelectorAll('.rv')
    reveals.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])

  return <>{children}</>
}
