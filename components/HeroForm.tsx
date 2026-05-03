'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function HeroForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !password.trim()) return
    setLoading(true)
    setError('')

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: undefined },
    })

    if (signUpError) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })

    if (signInError) {
      setError(signInError.message)
      setLoading(false)
      return
    }

    window.location.href = 'https://voko.lat/onboarding'
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

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <input
        type="email"
        placeholder="Tu email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={inputStyle}
      />
      <input
        type="password"
        placeholder="Elige una contraseña"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        minLength={6}
        style={inputStyle}
      />
      {error && (
        <p style={{ fontSize: 12, color: '#EF4444', margin: 0 }}>{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="btn-pulse"
        style={{
          background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
          color: '#fff',
          border: 'none',
          borderRadius: 10,
          padding: '13px',
          fontWeight: 700,
          fontSize: 15,
          cursor: loading ? 'not-allowed' : 'pointer',
          width: '100%',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? 'Creando cuenta...' : 'Activar gratis →'}
      </button>
      <p style={{ fontSize: 11, color: '#475569', textAlign: 'center', margin: 0 }}>
        5 transformaciones gratis. Sin compromiso.
      </p>
    </form>
  )
}
