'use client'
import { useState, useEffect, useRef } from 'react'

const COLORS = ['#6366F1', '#22D3EE', '#22C55E']

const T = [
  { name: 'Valentina M.', role: 'Consultora freelance · Bogotá', before: 'Escribía propuestas en 20 min.', after: 'Ahora en 2 min. Gano más clientes.' },
  { name: 'Rodrigo T.',   role: 'Dueño de agencia · Quito',     before: 'Perdía clientes por tono áspero.', after: 'Modo Firme. Cobré $8k que debía.' },
  { name: 'Camila S.',    role: 'Ejecutiva de ventas · CDMX',   before: 'Clientes confundían mi tono.', after: 'Ahora 3 tonos. Cierre +40%.' },
]

export default function TestimonialsSection() {
  const [stars, setStars] = useState<{ [k: number]: number }>({})
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        T.forEach((_, ti) => {
          for (let si = 0; si < 5; si++) {
            setTimeout(() => {
              setStars(prev => ({ ...prev, [ti]: si + 1 }))
            }, ti * 280 + si * 70)
          }
        })
        obs.disconnect()
      }
    }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
      {T.map((t, ti) => (
        <div
          key={t.name}
          style={{
            background: 'rgba(8,10,8,0.85)',
            border: `1px solid ${COLORS[ti]}22`,
            borderRadius: 14, padding: '24px',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Decorative quote */}
          <div style={{
            position: 'absolute', top: 4, right: 14,
            fontSize: 90, lineHeight: 1,
            color: 'rgba(99,102,241,0.1)',
            fontFamily: 'Georgia, serif',
            userSelect: 'none', pointerEvents: 'none',
          }}>&ldquo;</div>

          {/* Stars */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
            {[0,1,2,3,4].map(i => (
              <span
                key={i}
                style={{
                  color: '#F59E0B', fontSize: 14,
                  display: 'inline-block',
                  opacity: (stars[ti] || 0) > i ? 1 : 0,
                  transform: (stars[ti] || 0) > i ? 'scale(1)' : 'scale(0)',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}
              >★</span>
            ))}
          </div>

          <div style={{ borderLeft: '3px solid #EF4444', paddingLeft: 12, marginBottom: 12 }}>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#EF4444', marginBottom: 4 }}>ANTES</div>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>"{t.before}"</p>
          </div>
          <div style={{ borderLeft: '3px solid #22C55E', paddingLeft: 12, marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#22C55E', marginBottom: 4 }}>DESPUÉS</div>
            <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, fontStyle: 'italic', margin: 0 }}>"{t.after}"</p>
          </div>

          {/* Avatar + name + badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
              border: `2px solid ${COLORS[ti]}`,
              background: `${COLORS[ti]}18`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 700, color: COLORS[ti],
            }}>{t.name.charAt(0)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 600, fontSize: 14, color: '#F8FAFC' }}>{t.name}</span>
                <span style={{
                  fontSize: 10, fontFamily: 'var(--font-dm-mono)',
                  color: '#22C55E',
                  background: 'rgba(34,197,94,0.1)',
                  border: '1px solid rgba(34,197,94,0.2)',
                  borderRadius: 4, padding: '1px 7px',
                }}>✓ Verificado</span>
              </div>
              <div style={{ fontSize: 12, color: '#475569' }}>{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
