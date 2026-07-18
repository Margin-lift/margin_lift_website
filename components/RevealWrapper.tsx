'use client'

import { useEffect } from 'react'

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
      { threshold: 0.1 }
    )

    const reveals = document.querySelectorAll('.reveal')
    reveals.forEach((el) => io.observe(el))

    return () => {
      reveals.forEach((el) => io.unobserve(el))
    }
  }, [])

  return <>{children}</>
}
