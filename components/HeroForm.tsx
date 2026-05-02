'use client'
import { useState } from 'react'

export default function HeroForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: '11px 14px',
    color: '#F8FAFC',
    fontSize: 14,
    outline: 'none',
  }

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
        <div style={{ fontWeight: 700, fontSize: 18, color: '#22C55E', marginBottom: 8 }}>¡Listo!</div>
        <div style={{ fontSize: 13, color: '#94A3B8' }}>Revisa tu email para activar tu cuenta.</div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        style={inputStyle}
      />
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={inputStyle}
      />
      <button
        type="submit"
        className="btn-pulse"
        style={{
          background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
          color: '#fff',
          border: 'none',
          borderRadius: 10,
          padding: '13px',
          fontWeight: 700,
          fontSize: 15,
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Activar gratis →
      </button>
      <p style={{ fontSize: 11, color: '#475569', textAlign: 'center', margin: 0 }}>
        5 transformaciones gratis. Sin compromiso.
      </p>
    </form>
  )
}
