'use client'
import HeroForm from '@/components/HeroForm'

export default function HeroCaptureCard() {
  return (
    <div className="card-glow-outer card-glow-cyan" style={{ borderRadius: 18 }}>
      <div className="card-glow-inner" style={{ background: 'rgba(2,8,24,0.6)', borderRadius: 17 }}>
        {/* Corner brackets — cyan */}
        <span className="cb cb-tl" style={{ color: 'rgba(34,211,238,0.4)', fontSize: 11 }}>[</span>
        <span className="cb cb-tr" style={{ color: 'rgba(34,211,238,0.4)', fontSize: 11 }}>]</span>
        <span className="cb cb-bl" style={{ color: 'rgba(34,211,238,0.4)', fontSize: 11 }}>[</span>
        <span className="cb cb-br" style={{ color: 'rgba(34,211,238,0.4)', fontSize: 11 }}>]</span>

        {/* Animated scan line at top */}
        <div style={{ position: 'relative', height: 1, overflow: 'hidden' }}>
          <div className="hero-scan-top" />
        </div>

        {/* Terminal header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 16px',
          borderBottom: '1px solid rgba(34,211,238,0.08)',
          background: 'rgba(34,211,238,0.03)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', gap: 5 }}>
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#EF4444' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#22C55E' }} />
            </div>
            <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>
              voko.lat — acceso.init
            </span>
          </div>
        </div>

        {/* Status bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          background: 'rgba(0,0,0,0.2)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span className="blink-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px #22C55E', display: 'inline-block' }} />
            <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#22C55E', letterSpacing: '0.1em' }}>SISTEMA ACTIVO</span>
          </div>
          <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>
            847 activaciones hoy
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: '24px 24px 20px' }}>
          {/* Title block */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#22D3EE', marginBottom: 8, letterSpacing: '0.05em' }}>
              // iniciar_prueba.voko
            </div>
            <div style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 32, fontWeight: 400, color: '#F8FAFC', lineHeight: 1.05, marginBottom: 6 }}>
              15 días gratis.
            </div>
            <div style={{ fontSize: 13, color: '#475569', fontFamily: 'var(--font-dm-mono)' }}>
              Sin tarjeta. Sin compromiso.
            </div>
          </div>

          {/* Form */}
          <HeroForm />

          {/* Scanline overlay */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 17,
            background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.018) 3px, rgba(0,0,0,0.018) 4px)',
            pointerEvents: 'none', zIndex: 0,
          }} />

          {/* Footer */}
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#334155', letterSpacing: '0.03em' }}>
              ✓ Sin tarjeta &nbsp;·&nbsp; ✓ Cancela cuando quieras &nbsp;·&nbsp; ✓ Listo en 30 seg
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
