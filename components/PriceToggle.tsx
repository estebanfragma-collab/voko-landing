'use client'
import { useState } from 'react'

export default function PriceToggle() {
  const [annual, setAnnual] = useState(false)
  const proPrice = annual ? '3.99' : '5.99'
  const proPeriod = annual ? '/mes · $47.92/año' : '/mes'

  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const cardBase: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 16,
    padding: '32px 28px',
    position: 'relative',
  }

  const cardPro: React.CSSProperties = {
    ...cardBase,
    border: '2px solid rgba(99,102,241,0.8)',
    background: 'rgba(99,102,241,0.08)',
    overflow: 'hidden',
  }

  return (
    <div>
      {/* Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
        <span style={{ fontSize: 14, color: annual ? '#475569' : '#F8FAFC', fontWeight: annual ? 400 : 600 }}>Paga mensual</span>
        <button
          onClick={() => setAnnual(!annual)}
          style={{
            width: 48, height: 26, borderRadius: 13,
            background: annual ? '#6366F1' : 'rgba(255,255,255,0.1)',
            border: 'none', cursor: 'pointer', position: 'relative',
            transition: 'background 0.2s',
          }}
        >
          <span style={{
            position: 'absolute', top: 3,
            left: annual ? 25 : 3,
            width: 20, height: 20,
            borderRadius: '50%',
            background: '#fff',
            transition: 'left 0.2s',
          }} />
        </button>
        <span style={{ fontSize: 14, color: annual ? '#F8FAFC' : '#475569', fontWeight: annual ? 600 : 400 }}>
          Paga anual{' '}
          <span style={{ fontSize: 11, background: 'rgba(34,197,94,0.15)', color: '#22C55E', padding: '2px 7px', borderRadius: 100, fontFamily: 'var(--font-dm-mono)' }}>
            Ahorra 2 meses
          </span>
        </span>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, maxWidth: 700, margin: '0 auto' }}>
        {/* Free */}
        <div style={cardBase}>
          <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#475569', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Prueba 15 días</div>
          <div style={{ fontSize: 12, color: '#475569', marginBottom: 16 }}>Acceso completo. Sin tarjeta.</div>
          <div style={{ fontSize: 48, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-2px', lineHeight: 1, marginBottom: 4 }}>$0</div>
          <div style={{ fontSize: 13, color: '#475569', marginBottom: 24 }}>por 15 días</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Ilimitado durante 15 días', '3 tonos por mensaje', 'Sin tarjeta de crédito'].map(f => (
              <li key={f} style={{ fontSize: 14, color: '#94A3B8', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#22C55E' }}>✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={scrollToForm}
            style={{
              width: '100%', padding: '12px', borderRadius: 10, position: 'relative', overflow: 'hidden',
              background: 'transparent', border: '1px solid rgba(255,255,255,0.12)',
              color: '#F8FAFC', fontWeight: 600, fontSize: 14, cursor: 'pointer',
            }}
          >
            Activar ahora →
          </button>
        </div>

        {/* Pro */}
        <div style={cardPro}>
          {/* Aurora background */}
          <div style={{
            position: 'absolute',
            width: '220%', height: '220%',
            top: '-60%', left: '-60%',
            background: 'radial-gradient(ellipse 55% 40% at 45% 40%, rgba(99,102,241,0.22), rgba(167,139,250,0.14) 35%, rgba(34,211,238,0.07) 60%, transparent 80%)',
            animation: 'aurora-drift 7s ease-in-out infinite',
            pointerEvents: 'none',
            zIndex: 0,
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            position: 'absolute', top: -12, right: 20,
            background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
            color: '#fff', fontSize: 11, fontWeight: 700,
            padding: '4px 12px', borderRadius: 100,
          }}>
            La que funciona
          </span>
          <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#818CF8', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Pro</div>
          <div style={{ fontSize: 12, color: '#475569', marginBottom: 16 }}>Después de los 15 días gratis</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
            <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-2px', lineHeight: 1, background: 'linear-gradient(135deg, #6366F1, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ${proPrice}
            </span>
          </div>
          <div style={{ fontSize: 13, color: '#475569', marginBottom: 24 }}>{proPeriod}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Ilimitado. Sin límites.',
              'Modo Negociación (cobros, reclamos)',
              'Tu perfil de voz personalizado',
              'Historial de todos tus mensajes',
            ].map(f => (
              <li key={f} style={{ fontSize: 14, color: '#F8FAFC', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#6366F1' }}>✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={scrollToForm}
            className="btn-pulse btn-sweep"
            style={{
              width: '100%', padding: '13px', borderRadius: 10,
              background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
              border: 'none', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer',
            }}
          >
            Continuar con Pro →
          </button>
          </div>{/* end z-index wrapper */}
        </div>
      </div>

      {/* Guarantees */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginTop: 32 }}>
        {['Sin contrato', 'Cancela en 1 clic', 'Datos privados', 'Soporte en español'].map(g => (
          <span key={g} style={{ fontSize: 13, color: '#475569', fontFamily: 'var(--font-dm-mono)' }}>{g}</span>
        ))}
      </div>
    </div>
  )
}
