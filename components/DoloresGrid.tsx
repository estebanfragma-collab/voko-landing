'use client'
import { useState, useEffect, useRef } from 'react'

const DOLORES = [
  {
    code: 'ERR_TIME_001', num: '01', emoji: '⏳',
    title: '45 minutos redactando un email. Podrías haber cerrado 3 ventas en ese tiempo.',
    solution: 'Voko detecta tu emoción y ajusta el tono automáticamente.',
  },
  {
    code: 'ERR_TONE_002', num: '02', emoji: '😤',
    title: 'Suenas molesto, agresivo o demasiado formal. Pierdes clientes por cómo escribes.',
    solution: 'Voko calibra el tono según el canal y la relación.',
  },
  {
    code: 'ERR_MONEY_003', num: '03', emoji: '💸',
    title: 'Cada email mal redactado cuesta dinero. Cobros rechazados, negociaciones perdidas.',
    solution: 'Mensajes que suenan profesionales desde el primer intento.',
  },
  {
    code: 'ERR_STUCK_004', num: '04', emoji: '🧱',
    title: 'Escribir se convirtió en tu cuello de botella. No creces porque estás redactando.',
    solution: 'Dicta en 30 segundos. Sin redactar. Sin perder tiempo.',
  },
]

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    setCount(0)
    const steps = Math.ceil(duration / 16)
    let frame = 0
    const timer = setInterval(() => {
      frame++
      const progress = frame / steps
      setCount(Math.min(Math.floor(progress * target), target))
      if (frame >= steps) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function SolButton({ expanded, onClick }: { expanded: boolean; onClick: () => void }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: 11, fontFamily: 'var(--font-dm-mono)',
        color: hov ? '#FFFFFF' : '#EF4444',
        background: hov ? '#EF4444' : 'transparent',
        border: '1px solid rgba(239,68,68,0.35)',
        borderRadius: 6, padding: '4px 10px',
        cursor: 'pointer', whiteSpace: 'nowrap',
        transition: 'background 0.2s, color 0.2s',
        display: 'inline-flex', alignItems: 'center', gap: 4,
      }}
    >
      {expanded
        ? 'Ocultar ↑'
        : (
          <>
            Ver solución{' '}
            <span style={{
              display: 'inline-block',
              transform: hov ? 'translateX(4px)' : 'translateX(0)',
              transition: 'transform 0.2s',
            }}>→</span>
          </>
        )
      }
    </button>
  )
}

function ErrorCard({ d, dropped, expanded, setExpanded }: {
  d: typeof DOLORES[0]
  dropped: Set<string>
  expanded: string | null
  setExpanded: (v: string | null) => void
}) {
  const [shaking, setShaking] = useState(false)
  const numVal = useCountUp(parseInt(d.num), dropped.has(d.code))
  const displayNum = String(numVal).padStart(2, '0')

  const handleMouseEnter = () => {
    if (shaking) return
    setShaking(true)
    setTimeout(() => setShaking(false), 350)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(239,68,68,0.2)',
        borderLeft: '3px solid #EF4444',
        borderRadius: 14,
        overflow: 'hidden',
        opacity: dropped.has(d.code) ? 1 : 0,
        transform: dropped.has(d.code) ? 'translateY(0)' : 'translateY(-28px)',
        transition: shaking ? 'opacity 0.5s ease' : 'opacity 0.5s ease, transform 0.5s ease',
        animation: shaking ? 'card-shake 0.32s ease' : undefined,
      }}
    >
      {/* Pulsing red left glow */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
        background: '#EF4444',
        animation: 'red-glow-pulse 2s ease-in-out infinite',
        borderRadius: '0 0 0 14px',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Watermark counter */}
      <div style={{
        position: 'absolute', right: 14, top: 6,
        fontSize: 88, fontWeight: 900, lineHeight: 1,
        color: 'rgba(239,68,68,0.04)',
        fontFamily: 'var(--font-dm-mono)',
        userSelect: 'none', pointerEvents: 'none',
      }}>{displayNum}</div>

      {/* Terminal header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 16px',
        borderBottom: '1px solid rgba(239,68,68,0.1)',
        background: 'rgba(239,68,68,0.04)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {['#EF4444','#F59E0B','#22C55E'].map(c => (
            <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
          ))}
          <span style={{
            marginLeft: 8, fontSize: 10,
            fontFamily: 'var(--font-dm-mono)', color: '#EF4444',
            display: 'inline-flex', alignItems: 'center', gap: 5,
          }}>
            <span className="blink-dot" style={{
              display: 'inline-block', width: 6, height: 6,
              borderRadius: '50%', background: '#EF4444',
              boxShadow: '0 0 6px #EF4444',
            }} />
            ERROR ACTIVO
          </span>
        </div>
        <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>{d.code}</span>
      </div>

      {/* Body */}
      <div style={{ padding: '20px' }}>
        <div style={{ fontSize: 26, marginBottom: 12 }}>{d.emoji}</div>
        <div style={{ fontWeight: 700, fontSize: 15, color: '#F8FAFC', lineHeight: 1.45, marginBottom: 16 }}>{d.title}</div>

        {/* Solution panel */}
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
          <SolButton expanded={expanded === d.code} onClick={() => setExpanded(expanded === d.code ? null : d.code)} />
        </div>
      </div>
    </div>
  )
}

export default function DoloresGrid() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [dropped, setDropped] = useState<Set<string>>(new Set())
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        DOLORES.forEach((d, i) => {
          setTimeout(() => {
            setDropped(prev => { const s = new Set(Array.from(prev)); s.add(d.code); return s })
          }, i * 120)
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
        <ErrorCard
          key={d.code}
          d={d}
          dropped={dropped}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  )
}
