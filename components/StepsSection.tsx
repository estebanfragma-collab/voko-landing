'use client'
import { useState, useRef, useEffect } from 'react'

const STEPS = [
  {
    num: 'PASO_01', icon: '🎤', label: '01', title: 'Dicta como hablas',
    desc: 'Sin filtro. Sin pensar en gramática. Voko entiende tu voz, tu contexto, tu urgencia.',
    lines: ['$ input.voko --listen', '→ detectando voz...', '→ input crudo recibido ✓'],
  },
  {
    num: 'PASO_02', icon: '⚡', label: '02', title: 'Voko convierte en profesional',
    desc: 'Transcribe, edita y formatea al instante. Elimina relleno, corrige tono, añade estructura.',
    lines: ['$ transform.voko --run', '→ transcribiendo...', '→ editando tono...', '→ texto listo ✓'],
  },
  {
    num: 'PASO_03', icon: '✅', label: '03', title: 'Envía y cierra',
    desc: 'Texto listo. Profesional. Con tu voz. Copia, pega y sigue vendiendo. Sin más esperas.',
    lines: ['$ output.voko --export', '→ copiado al portapapeles ✓', '→ listo para enviar'],
  },
]

const CANAL = [
  { canal: 'WhatsApp', color: '#22C55E', msg: 'Ey, necesito que me confirmes si recibiste la factura. Cuando tengas un momento.' },
  { canal: 'Email',    color: '#6366F1', msg: 'Estimado, quisiera confirmar la recepción de la factura. Agradezco su pronta respuesta.' },
  { canal: 'LinkedIn', color: '#818CF8', msg: 'Hola, espero que estés bien. Me gustaría confirmar los detalles de la factura enviada.' },
]

export default function StepsSection() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [typed, setTyped] = useState<{ [k: number]: number }>({})
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])

  const handleEnter = (idx: number) => {
    setHovered(idx)
    timers.current.forEach(clearTimeout)
    timers.current = []
    setTyped(prev => ({ ...prev, [idx]: 0 }))
    STEPS[idx].lines.forEach((_, i) => {
      const t = setTimeout(() => {
        setTyped(prev => ({ ...prev, [idx]: i + 1 }))
      }, i * 380)
      timers.current.push(t)
    })
  }

  const progress = hovered !== null ? ((hovered + 1) / 3) * 100 : 33

  return (
    <div>
      {/* Progress bar */}
      <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 4, height: 4, marginBottom: 32, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #6366F1, #A78BFA)',
          borderRadius: 4,
          transition: 'width 0.45s ease',
          boxShadow: '0 0 10px rgba(99,102,241,0.6)',
        }} />
      </div>

      {/* Steps grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, marginBottom: 56 }}>
        {STEPS.map((step, idx) => (
          <div
            key={step.num}
            onMouseEnter={() => handleEnter(idx)}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'relative',
              background: 'rgba(8,10,8,0.85)',
              border: `1px solid ${hovered === idx ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.07)'}`,
              borderRadius: 14, overflow: 'hidden',
              transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
              transform: hovered === idx ? 'translateY(-4px)' : 'none',
              boxShadow: hovered === idx ? '0 8px 32px rgba(99,102,241,0.2)' : 'none',
              cursor: 'default',
            }}
          >
            {/* Number watermark */}
            <div style={{
              position: 'absolute', right: 12, top: 6,
              fontSize: 76, fontWeight: 900, lineHeight: 1,
              color: 'rgba(99,102,241,0.07)',
              fontFamily: 'var(--font-dm-mono)',
              userSelect: 'none', pointerEvents: 'none',
            }}>{step.label}</div>

            {/* Terminal bar */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '10px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ display: 'flex', gap: 6 }}>
                {['#EF4444','#F59E0B','#22C55E'].map(c => (
                  <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                ))}
              </div>
              <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>{step.num}.sh</span>
            </div>

            {/* Content */}
            <div style={{ padding: '20px' }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{step.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#F8FAFC', marginBottom: 8 }}>{step.title}</div>
              <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, marginBottom: 14 }}>{step.desc}</div>
              <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 12 }}>
                {(hovered === idx ? step.lines.slice(0, typed[idx] || 0) : step.lines).map((l, i) => (
                  <div key={i} style={{ color: l.includes('✓') ? '#22C55E' : '#94A3B8', lineHeight: 1.8 }}>{l}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Canal cards */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h3 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 28, color: '#F8FAFC', marginBottom: 12 }}>Se adapta a cada contexto</h3>
        <p style={{ color: '#94A3B8', fontSize: 17, lineHeight: 1.65, fontWeight: 300, maxWidth: 560, margin: '0 auto' }}>
          Voko detecta dónde estás escribiendo y ajusta el tono automáticamente. WhatsApp, Email, LinkedIn. Siempre suena como tú, nunca como un robot.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
        {CANAL.map(c => (
          <div key={c.canal} className="card-glow-outer">
            <div className="card-glow-inner" style={{ background: 'rgba(8,10,8,0.85)', padding: '20px' }}>
              <span className="cb cb-tl">[</span><span className="cb cb-tr">]</span>
              <span className="cb cb-bl">[</span><span className="cb cb-br">]</span>
              <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: c.color, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{c.canal}</div>
              <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>"{c.msg}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
