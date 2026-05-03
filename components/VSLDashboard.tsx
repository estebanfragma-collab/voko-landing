'use client'
import { useEffect, useState, useRef, useCallback } from 'react'

// ── Animated sparkline ──────────────────────────────────────
const AnimatedSparkline = ({ color, values }: { color: string; values: number[] }) => {
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number>()
  const startRef = useRef<number>()
  const DURATION = 2200

  const restart = () => {
    setProgress(0)
    startRef.current = undefined
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now
      const p = Math.min((now - startRef.current) / DURATION, 1)
      setProgress(p)
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
      else setTimeout(restart, 600)
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    restart()
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const w = 64, h = 24
  const max = Math.max(...values), min = Math.min(...values)
  const range = max - min || 1
  const pts = values.map((v, i) => ({
    x: (i / (values.length - 1)) * w,
    y: h - ((v - min) / range) * (h - 4) - 2,
  }))

  // Build partial polyline based on progress
  const totalLen = pts.reduce((acc, pt, i) => {
    if (i === 0) return 0
    const prev = pts[i - 1]
    return acc + Math.hypot(pt.x - prev.x, pt.y - prev.y)
  }, 0)

  const targetLen = totalLen * progress
  let drawn = 0
  const visiblePts: typeof pts = []
  for (let i = 0; i < pts.length; i++) {
    if (i === 0) { visiblePts.push(pts[0]); continue }
    const seg = Math.hypot(pts[i].x - pts[i-1].x, pts[i].y - pts[i-1].y)
    if (drawn + seg >= targetLen) {
      const t = (targetLen - drawn) / seg
      visiblePts.push({ x: pts[i-1].x + (pts[i].x - pts[i-1].x) * t, y: pts[i-1].y + (pts[i].y - pts[i-1].y) * t })
      break
    }
    drawn += seg
    visiblePts.push(pts[i])
  }

  const pointStr = visiblePts.map(p => `${p.x},${p.y}`).join(' ')

  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      {visiblePts.length >= 2 && (
        <polyline
          points={pointStr}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          opacity={0.85}
        />
      )}
    </svg>
  )
}

// ── Grid lines ──────────────────────────────────────────────
const GridLines = () => (
  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
    <defs>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#84CC16" strokeWidth="0.5" opacity="0.05" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
)

// ── Metric card ─────────────────────────────────────────────
const MetricCard = ({ label, value, sub, subColor, sparkColor, sparkValues }: {
  label: string; value: string; sub: string; subColor: string; sparkColor: string; sparkValues: number[]
}) => (
  <div style={{
    background: 'rgba(2,6,20,0.85)',
    border: '1px solid rgba(132,204,22,0.12)',
    borderRadius: 12, padding: '14px 16px',
    backdropFilter: 'blur(12px)', minWidth: 150,
  }}>
    <div style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>{label}</div>
    <div style={{ fontSize: 22, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-1px', marginBottom: 2 }}>{value}</div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: 11, color: subColor, fontFamily: 'var(--font-dm-mono)' }}>{sub}</span>
      <AnimatedSparkline color={sparkColor} values={sparkValues} />
    </div>
  </div>
)

// ── Activity feed item ──────────────────────────────────────
const ACTIVITIES = [
  { initial: 'V', color: '#22C55E',  name: 'Valentina', action: 'cobro enviado · tono Firme',    baseMin: 2  },
  { initial: 'R', color: '#6366F1',  name: 'Rodrigo',   action: 'propuesta en WhatsApp',          baseMin: 5  },
  { initial: 'C', color: '#22D3EE',  name: 'Camila',    action: 'reclamo formal enviado',         baseMin: 8  },
  { initial: 'M', color: '#A78BFA',  name: 'Marco',     action: 'negociación cerrada',            baseMin: 11 },
  { initial: 'L', color: '#F59E0B',  name: 'Laura',     action: 'email de seguimiento · tono Pro',baseMin: 14 },
]

// ── Main dashboard ──────────────────────────────────────────
export default function VSLDashboard() {
  const [clock, setClock]         = useState('')
  const [messages, setMessages]   = useState(847)
  const [timeVal, setTimeVal]     = useState('4.2m')
  const [liveUsers, setLiveUsers] = useState(18)
  const [liveBlink, setLiveBlink] = useState(true)
  const [feedIdx, setFeedIdx]     = useState(0)
  const [feedVisible, setFeedVisible] = useState(true)
  const [elapsed, setElapsed]     = useState(0)
  const [playing, setPlaying]     = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = useCallback(() => {
    setPlaying(true)
    videoRef.current?.play()
  }, [])

  // Clock
  useEffect(() => {
    const tick = () => setClock(new Date().toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  // Elapsed seconds (drives time offsets in feed)
  useEffect(() => {
    const id = setInterval(() => setElapsed(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  // Messages counter: +1 every 4–7s
  useEffect(() => {
    const schedule = () => {
      const delay = 4000 + Math.random() * 3000
      return setTimeout(() => {
        setMessages(v => v + 1)
        const t = schedule()
        return t
      }, delay)
    }
    const t = schedule()
    return () => clearTimeout(t)
  }, [])

  // Time saved: toggles between 4.1 / 4.2 / 4.3 every 5s
  useEffect(() => {
    const vals = ['4.1m', '4.2m', '4.3m', '4.2m']
    let i = 0
    const id = setInterval(() => { i = (i + 1) % vals.length; setTimeVal(vals[i]) }, 5000)
    return () => clearInterval(id)
  }, [])

  // Live users: random 12–24 every 4s
  useEffect(() => {
    const id = setInterval(() => setLiveUsers(12 + Math.floor(Math.random() * 13)), 4000)
    return () => clearInterval(id)
  }, [])

  // LIVE badge blink
  useEffect(() => {
    const id = setInterval(() => setLiveBlink(v => !v), 1500)
    return () => clearInterval(id)
  }, [])

  // Activity feed rotation every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setFeedVisible(false)
      setTimeout(() => {
        setFeedIdx(i => (i + 1) % ACTIVITIES.length)
        setFeedVisible(true)
      }, 350)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  const spark1 = [30, 38, 35, 44, 40, 52, 47, 58, 55, 63, 60, 72]
  const spark2 = [50, 54, 51, 58, 56, 62, 59, 65, 63, 68, 66, 71]
  const spark3 = [20, 28, 25, 34, 30, 40, 37, 45, 42, 50, 48, 58]
  const spark4 = [60, 62, 58, 65, 63, 68, 64, 70, 67, 73, 70, 76]

  const act = ACTIVITIES[feedIdx]
  const actMin = act.baseMin + Math.floor(elapsed / 60)

  return (
    <div style={{ position: 'relative' }}>
      {/* ── Floating DEMO badge — right of container ── */}
      <div style={{
        position: 'absolute',
        top: '50%', right: -72,
        transform: 'translateY(-50%)',
        zIndex: 10,
        width: 64,
      }}>
        <div className="demo-badge-outer">
          <div className="demo-badge-inner">
            <div style={{ fontSize: 11, fontWeight: 800, color: '#F8FAFC', letterSpacing: '0.05em', textAlign: 'center' }}>DEMO</div>
            <div style={{ fontSize: 10, color: '#84CC16', fontFamily: 'var(--font-dm-mono)', textAlign: 'center', marginTop: 1 }}>gratis</div>
            <div style={{ fontSize: 8, color: '#475569', fontFamily: 'var(--font-dm-mono)', textAlign: 'center', marginTop: 2, lineHeight: 1.3 }}>30 seg{'\n'}sin costo</div>
          </div>
        </div>
      </div>

      {/* ── Main card ── */}
      <div style={{ borderRadius: 16, overflow: 'hidden', background: '#020818', border: '1px solid rgba(132,204,22,0.15)', boxShadow: '0 0 60px rgba(132,204,22,0.05), 0 0 120px rgba(99,102,241,0.08)' }}>
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
            <MetricCard label="MENSAJES HOY" value={String(messages)} sub="↑ +23% vs ayer" subColor="#22C55E" sparkColor="#84CC16" sparkValues={spark1} />
            <MetricCard label="TONO PROMEDIO" value="Pro" sub="↑ +12% este mes" subColor="#22C55E" sparkColor="#6366F1" sparkValues={spark2} />
          </div>

          {/* Center — video */}
          <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(99,102,241,0.2)', background: '#020818', position: 'relative' }}>
            {/* Video header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 12px', borderBottom: '1px solid rgba(99,102,241,0.1)', background: 'rgba(99,102,241,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444', boxShadow: liveBlink ? '0 0 6px #EF4444' : 'none', opacity: liveBlink ? 1 : 0.35, transition: 'opacity 0.3s, box-shadow 0.3s' }} />
                <span style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#EF4444', fontWeight: 700, letterSpacing: '0.1em', opacity: liveBlink ? 1 : 0.45, transition: 'opacity 0.3s' }}>● LIVE · VOKO</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>{liveUsers} viendo</span>
                <span style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>{clock}</span>
              </div>
            </div>

            {/* Video area */}
            <div style={{ aspectRatio: '16/9', position: 'relative', background: '#020818', overflow: 'hidden' }}>
              {/* Actual video */}
              <video
                ref={videoRef}
                controls={playing}
                playsInline
                preload="metadata"
                onEnded={() => setPlaying(false)}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              >
                <source src="/videos/Avatar_Video_1080p.mp4" type="video/mp4" />
              </video>

              {/* Play button overlay — shown until user clicks */}
              {!playing && (
                <div
                  onClick={handlePlay}
                  style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
                    background: 'linear-gradient(135deg, rgba(2,6,20,0.85) 0%, rgba(10,8,20,0.85) 100%)',
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(132,204,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(132,204,22,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%', background: '#EF4444',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 0 32px rgba(239,68,68,0.5)',
                    position: 'relative', zIndex: 1, flexShrink: 0,
                    transition: 'transform 0.15s, box-shadow 0.15s',
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><polygon points="6,3 20,12 6,21" /></svg>
                  </div>
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-dm-mono)', color: '#475569', position: 'relative', zIndex: 1 }}>▶ Demo · 60 seg · sin registro</span>
                </div>
              )}
            </div>
          </div>

          {/* Right metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <MetricCard label="TIEMPO AHORRADO" value={timeVal} sub="vs 20min manual" subColor="#22C55E" sparkColor="#22D3EE" sparkValues={spark3} />
            <MetricCard label="TRANSFORMACIONES" value="3 tonos" sub="por mensaje" subColor="#94A3B8" sparkColor="#A78BFA" sparkValues={spark4} />
          </div>
        </div>

        {/* Activity feed */}
        <div style={{ padding: '0 12px 12px', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            background: 'rgba(2,6,20,0.8)',
            border: '1px solid rgba(132,204,22,0.08)',
            borderRadius: 10, padding: '10px 14px',
            opacity: feedVisible ? 1 : 0,
            transition: 'opacity 0.3s ease',
            minHeight: 52,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
              background: `${act.color}22`, border: `1px solid ${act.color}55`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 12, fontWeight: 700, color: act.color,
            }}>{act.initial}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, color: '#F8FAFC', fontWeight: 600 }}>{act.name}</div>
              <div style={{ fontSize: 11, color: '#475569', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{act.action}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E' }} />
              <span style={{ fontSize: 10, color: '#475569', fontFamily: 'var(--font-dm-mono)' }}>hace {actMin} min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
