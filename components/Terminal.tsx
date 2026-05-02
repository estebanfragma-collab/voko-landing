'use client'
import { useEffect, useRef, useState } from 'react'

interface TerminalProps {
  lines: string[]
  title?: string
  delay?: number
}

const lineColor = (line: string) => {
  if (line.startsWith('$')) return '#6366F1'
  if (line.includes('✓') || line.includes('RECOMENDACIÓN') || line.includes('cerrada') || line.includes('enviada') || line.includes('enviado')) return '#22C55E'
  if (line.includes('[ALTO]') || line.includes('PENDIENTE')) return '#EF4444'
  if (line.startsWith('→')) return '#94A3B8'
  if (!line) return 'transparent'
  return '#F8FAFC'
}

export default function Terminal({ lines, title = 'voko.sh', delay = 200 }: TerminalProps) {
  const [started, setStarted] = useState(false)
  const [visible, setVisible] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let i = 0
    const timer = setInterval(() => {
      i++
      setVisible(i)
      if (i >= lines.length) clearInterval(timer)
    }, delay)
    return () => clearInterval(timer)
  }, [started, lines, delay])

  return (
    <div ref={ref} className="terminal">
      <div className="terminal-bar">
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
        <span style={{ fontSize: 10, color: '#475569', marginLeft: 8 }}>{title}</span>
      </div>
      <div style={{ padding: '20px' }}>
        {lines.slice(0, visible).map((line, i) => (
          <div
            key={i}
            style={{
              fontSize: 12,
              lineHeight: '1.9',
              color: lineColor(line),
              minHeight: line ? undefined : '1.5em',
            }}
          >
            {line || '\u00A0'}
          </div>
        ))}
        <span className="cursor-blink" style={{ fontSize: 14, color: '#6366F1' }}>_</span>
      </div>
    </div>
  )
}
