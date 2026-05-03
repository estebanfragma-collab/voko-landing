'use client'
import { useState } from 'react'

export default function PriceToggle() {
  const [annual, setAnnual] = useState(false)
  const proPrice = annual ? '4.66' : '6.99'
  const proPeriod = annual ? '/mes · $55.90/año' : '/mes'

  const scrollToForm = () => {
    document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const cardBase: React.CSSProperties = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: '32px 28px',
    position: 'relative',
  }

  const cardPro: React.CSSProperties = {
    ...cardBase,
    border: '2px solid #6366F1',
    background: 'rgba(99,102,241,0.06)',
  }

  return (
    <div>
      {/* Toggle */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
        <span style={{ fontSize: 14, color: annual ? '#475569' : '#F8FAFC', fontWeight: annual ? 400 : 600 }}>Mensual</span>
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
          Anual{' '}
          <span style={{ fontSize: 11, background: 'rgba(34,197,94,0.15)', color: '#22C55E', padding: '2px 7px', borderRadius: 100, fontFamily: 'var(--font-dm-mono)' }}>
            2 meses gratis
          </span>
        </span>
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, maxWidth: 700, margin: '0 auto' }}>
        {/* Free */}
        <div style={cardBase}>
          <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#475569', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Free</div>
          <div style={{ fontSize: 48, fontWeight: 800, color: '#F8FAFC', letterSpacing: '-2px', lineHeight: 1, marginBottom: 4 }}>$0</div>
          <div style={{ fontSize: 13, color: '#475569', marginBottom: 24 }}>/mes</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['5 transformaciones/mes', 'WhatsApp y email', '3 tonos básicos', 'Sin tarjeta'].map(f => (
              <li key={f} style={{ fontSize: 14, color: '#94A3B8', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#22C55E' }}>✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={scrollToForm}
            style={{
              width: '100%', padding: '12px', borderRadius: 10,
              background: 'transparent', border: '1px solid rgba(255,255,255,0.12)',
              color: '#F8FAFC', fontWeight: 600, fontSize: 14, cursor: 'pointer',
            }}
          >
            Empezar gratis →
          </button>
        </div>

        {/* Pro */}
        <div style={cardPro}>
          <span style={{
            position: 'absolute', top: -12, right: 20,
            background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
            color: '#fff', fontSize: 11, fontWeight: 700,
            padding: '4px 12px', borderRadius: 100,
          }}>
            ★ Más popular
          </span>
          <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#818CF8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.15em' }}>Pro</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, marginBottom: 4 }}>
            <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-2px', lineHeight: 1, background: 'linear-gradient(135deg, #6366F1, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              ${proPrice}
            </span>
          </div>
          <div style={{ fontSize: 13, color: '#475569', marginBottom: 24 }}>{proPeriod}</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              'Transformaciones ilimitadas',
              'Modo Negociación (3 versiones)',
              'Perfil de voz personalizado',
              'Historial completo',
              'Todos los canales',
              'Score de tono animado',
            ].map(f => (
              <li key={f} style={{ fontSize: 14, color: '#F8FAFC', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: '#6366F1' }}>✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={scrollToForm}
            className="btn-pulse"
            style={{
              width: '100%', padding: '13px', borderRadius: 10,
              background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
              border: 'none', color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer',
            }}
          >
            Activar Pro ahora →
          </button>
        </div>
      </div>

      {/* Guarantees */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginTop: 32 }}>
        {['🔒 Sin contrato', 'Cancela en 1 clic', 'Datos privados', 'Soporte en español'].map(g => (
          <span key={g} style={{ fontSize: 13, color: '#475569', fontFamily: 'var(--font-dm-mono)' }}>{g}</span>
        ))}
      </div>
    </div>
  )
}
