'use client'

const messages = [
  '847 mensajes transformados hoy',
  '4.2 min ahorrados por mensaje',
  'Modo Negociación: 3 versiones por situación',
  'Español LATAM nativo — no traducido',
  'Sin tarjeta · Listo en 30 seg · Cancela cuando quieras',
  'WhatsApp · Email · LinkedIn — elige tu canal',
]

const items = [...messages, ...messages]

export default function TickerBar() {
  return (
    <div style={{
      overflow: 'hidden',
      background: 'rgba(99,102,241,0.06)',
      borderTop: '1px solid rgba(99,102,241,0.15)',
      borderBottom: '1px solid rgba(99,102,241,0.15)',
      padding: '9px 0',
    }}>
      <div className="ticker-track">
        {items.map((msg, i) => (
          <span
            key={i}
            style={{
              fontSize: 12,
              fontFamily: 'var(--font-dm-mono)',
              color: '#818CF8',
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ color: '#22D3EE' }}>●</span>
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
