'use client'
import { useState, useEffect, useRef } from 'react'

const DOLORES = [
  {
    code: 'ERR_TIME_001', num: '01', emoji: '⏳',
    title: '45 minutos redactando un email. Podrías haber cerrado 3 ventas en ese tiempo.',
    solution: 'Voko transcribe tu voz en texto profesional en 30 segundos. Sin escribir. Sin editar.',
  },
  {
    code: 'ERR_TONE_002', num: '02', emoji: '😤',
    title: 'Suenas molesto, agresivo o demasiado formal. Pierdes clientes por cómo escribes.',
    solution: '3 tonos disponibles al instante: Firme, Profesional, Amigable. Elige el que necesitas.',
  },
  {
    code: 'ERR_MONEY_003', num: '03', emoji: '💸',
    title: 'Cada email mal redactado cuesta dinero. Cobros rechazados, negociaciones perdidas.',
    solution: 'Voko convierte el cobro incómodo en un mensaje claro y firme que obtiene respuesta.',
  },
  {
    code: 'ERR_STUCK_004', num: '04', emoji: '🧱',
    title: 'Escribir se convirtió en tu cuello de botella. No creces porque estás redactando.',
    solution: 'Dicta. Voko formatea. Envía. De 20 minutos a 30 segundos por mensaje.',
  },
]

export default function DoloresGrid() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [dropped, setDropped] = useState<Set<string>>(new Set())
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        DOLORES.forEach((d, i) => {
          setTimeout(() => setDropped(prev => { const s = new Set(Array.from(prev)); s.add(d.code); return s }), i * 120)
        })
        obs.disconnect()
      }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}
    >
      {DOLORES.map(d => (
        <div
          key={d.code}
          style={{
            position: 'relative',
            background: 'rgba(2,8,24,0.9)',
            border: '1px solid rgba(239,68,68,0.15)',
            borderLeft: '3px solid #EF4444',
            borderRadius: 14,
            overflow: 'hidden',
            opacity: dropped.has(d.code) ? 1 : 0,
            transform: dropped.has(d.code) ? 'translateY(0)' : 'translateY(-28px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          {/* Watermark */}
          <div style={{
            position: 'absolute', right: 14, top: 6,
            fontSize: 88, fontWeight: 900, lineHeight: 1,
            color: 'rgba(239,68,68,0.055)',
            fontFamily: 'var(--font-dm-mono)',
            userSelect: 'none', pointerEvents: 'none',
          }}>{d.num}</div>

          {/* Terminal header */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 16px',
            borderBottom: '1px solid rgba(239,68,68,0.1)',
            background: 'rgba(239,68,68,0.04)',
          }}>
            <div style={{ display: 'flex', gap: 6 }}>
              {['#EF4444','#F59E0B','#22C55E'].map(c => (
                <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
              ))}
            </div>
            <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#EF4444' }}>{d.code}</span>
          </div>

          {/* Body */}
          <div style={{ padding: '20px' }}>
            <div style={{ fontSize: 26, marginBottom: 12 }}>{d.emoji}</div>
            <div style={{ fontWeight: 700, fontSize: 15, color: '#F8FAFC', lineHeight: 1.45, marginBottom: 16 }}>{d.title}</div>

            {/* Expand solution */}
            <div style={{
              maxHeight: expanded === d.code ? 120 : 0,
              overflow: 'hidden',
              transition: 'max-height 0.4s ease',
              marginBottom: expanded === d.code ? 12 : 0,
            }}>
              <div style={{
                padding: '12px 14px',
                background: 'rgba(34,197,94,0.06)',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: 8,
                fontSize: 13, color: '#22C55E', lineHeight: 1.65,
              }}>
                ✓ {d.solution}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#EF4444' }} />
                <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#EF4444' }}>Impacto: CRÍTICO</span>
              </div>
              <button
                onClick={() => setExpanded(expanded === d.code ? null : d.code)}
                style={{
                  fontSize: 11, fontFamily: 'var(--font-dm-mono)',
                  color: '#EF4444', background: 'transparent',
                  border: '1px solid rgba(239,68,68,0.35)',
                  borderRadius: 6, padding: '4px 10px',
                  cursor: 'pointer', whiteSpace: 'nowrap',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = 'rgba(239,68,68,0.12)' }}
                onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = 'transparent' }}
              >
                {expanded === d.code ? 'Ocultar ↑' : 'Ver solución →'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
