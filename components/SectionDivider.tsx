'use client'
import { useEffect, useRef } from 'react'

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        el.classList.add('drawn')
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ padding: '0 24px', overflow: 'hidden', maxWidth: 1100, margin: '0 auto' }}>
      <div ref={ref} className="section-divider" />
    </div>
  )
}
