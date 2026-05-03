'use client'
import { useEffect, useState } from 'react'

const Sparkline = ({ color, values }: { color: string; values: number[] }) => {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const w = 64
  const h = 24
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w
    const y = h - ((v - min) / range) * (h - 4) - 2
    return `${x},${y}`
  }).join(' ')

  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity={0.8}
      />
    </svg>
  )
}

const GridLines = () => (
  <svg
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#84CC16" strokeWidth="0.5" opacity="0.05" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
)

const MetricCard = ({
  label, value, sub, subColor, sparkColor, sparkValues,
}: {
  label: string; value: string; sub: string; subColor: string
  sparkColor: string; sparkValues: number[]
}) => (
  <div style={{
    background: 'rgba(5,5,7,0.85)',
    border: '1px solid rgba(132,204,22,0.12)',
    borderRadius: 12,
    padding: '14px 16px',
    backdropFilter: 'blur(12px)',
    minWidth: 150,
  }}>
    <div style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>{label}</div>
    <div style={{ fontSize: 22, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-1px', marginBottom: 2 }}>{value}</div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 11, color: subColor, fontFamily: 'var(--font-dm-mono)' }}>{sub}</span>
      <Sparkline color={sparkColor} values={sparkValues} />
    </div>
  </div>
)

const ActivityCard = ({ initial, color, name, action, time }: {
  initial: string; color: string; name: string; action: string; time: string
}) => (
  <div style={{
    background: 'rgba(5,5,7,0.8)',
    border: '1px solid rgba(132,204,22,0.08)',
    borderRadius: 10,
    padding: '12px 14px',
    display: 'flex', alignItems: 'center', gap: 12,
    flex: 1,
    minWidth: 0,
  }}>
    <div style={{
      width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
      background: `${color}22`, border: `1px solid ${color}55`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 12, fontWeight: 700, color,
    }}>{initial}</div>
    <div style={{ minWidth: 0, flex: 1 }}>
      <div style={{ fontSize: 12, color: '#F8FAFC', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</div>
      <div style={{ fontSize: 11, color: '#475569', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{action}</div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }} />
      <span style={{ fontSize: 10, color: '#475569', fontFamily: 'var(--font-dm-mono)' }}>{time}</span>
    </div>
  </div>
)

export default function VSLDashboard() {
  const [clock, setClock] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setClock(now.toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const spark1 = [30, 38, 35, 44, 40, 52, 47, 58, 55, 63, 60, 72]
  const spark2 = [50, 54, 51, 58, 56, 62, 59, 65, 63, 68, 66, 71]
  const spark3 = [20, 28, 25, 34, 30, 40, 37, 45, 42, 50, 48, 58]
  const spark4 = [60, 62, 58, 65, 63, 68, 64, 70, 67, 73, 70, 76]

  return (
    <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', background: '#050507', border: '1px solid rgba(132,204,22,0.15)', boxShadow: '0 0 60px rgba(132,204,22,0.05), 0 0 120px rgba(99,102,241,0.08)' }}>
      <GridLines />

      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid rgba(132,204,22,0.08)', background: 'rgba(132,204,22,0.03)', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E' }} />
          </div>
          <span style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>voko.lat — panel de control</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }} />
          <span style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#22C55E' }}>SISTEMA EN LÍNEA</span>
        </div>
      </div>

      {/* Main grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 160px', gap: 12, padding: 12, position: 'relative', zIndex: 1 }}>

        {/* Left metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MetricCard label="MENSAJES HOY" value="847" sub="↑ +23% vs ayer" subColor="#22C55E" sparkColor="#84CC16" sparkValues={spark1} />
          <MetricCard label="TONO PROMEDIO" value="Profesional" sub="↑ +12% este mes" subColor="#22C55E" sparkColor="#6366F1" sparkValues={spark2} />
        </div>

        {/* Center — video */}
        <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(99,102,241,0.2)', background: '#050507', position: 'relative' }}>
          {/* Video header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid rgba(99,102,241,0.1)', background: 'rgba(99,102,241,0.04)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444', boxShadow: '0 0 6px #EF4444' }} />
              <span style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#EF4444', fontWeight: 700, letterSpacing: '0.1em' }}>● LIVE · VOKO</span>
            </div>
            <span style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>{clock}</span>
          </div>

          {/* Video area */}
          <div style={{ aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(5,5,7,1) 0%, rgba(10,8,20,1) 100%)', position: 'relative', flexDirection: 'column', gap: 12 }}>
            {/* Grid overlay */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(132,204,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            {/* Play button */}
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 32px rgba(239,68,68,0.5)', cursor: 'pointer', position: 'relative', zIndex: 1, transition: 'transform 0.15s', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><polygon points="6,3 20,12 6,21" /></svg>
            </div>
            <span style={{ fontSize: 12, fontFamily: 'var(--font-dm-mono)', color: '#475569', position: 'relative', zIndex: 1 }}>▶ Demo · 60 seg · sin registro</span>
          </div>
        </div>

        {/* Right metrics */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <MetricCard label="TIEMPO AHORRADO" value="4.2min" sub="vs 20min manual" subColor="#22C55E" sparkColor="#22D3EE" sparkValues={spark3} />
          <MetricCard label="TRANSFORMACIONES" value="3 tonos" sub="por mensaje" subColor="#94A3B8" sparkColor="#A78BFA" sparkValues={spark4} />
        </div>
      </div>

      {/* Activity feed */}
      <div style={{ display: 'flex', gap: 10, padding: '0 12px 12px', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
        <ActivityCard initial="V" color="#22C55E" name="Valentina" action="cobro enviado · tono Firme" time="hace 2 min" />
        <ActivityCard initial="R" color="#6366F1" name="Rodrigo" action="propuesta en WhatsApp" time="hace 5 min" />
        <ActivityCard initial="C" color="#22D3EE" name="Camila" action="reclamo formal enviado" time="hace 8 min" />
      </div>

      {/* Floating DEMO badge */}
      <div style={{
        position: 'absolute', top: 60, right: -12, zIndex: 10,
        background: 'rgba(5,5,7,0.95)',
        border: '1px solid rgba(99,102,241,0.5)',
        borderRadius: 12,
        padding: '10px 14px',
        textAlign: 'center',
        boxShadow: '0 0 20px rgba(99,102,241,0.3)',
        animation: 'pulse-glow 2.5s ease-in-out infinite',
        minWidth: 80,
      }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: '#F8FAFC', letterSpacing: '0.05em' }}>DEMO</div>
        <div style={{ fontSize: 11, color: '#6366F1', fontFamily: 'var(--font-dm-mono)' }}>gratis</div>
        <div style={{ fontSize: 9, color: '#475569', fontFamily: 'var(--font-dm-mono)', marginTop: 2 }}>30 seg · sin costo</div>
      </div>
    </div>
  )
}
