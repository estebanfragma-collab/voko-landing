'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const getSupabase = () => createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const genPw = () => Math.random().toString(36).slice(-10) + 'Vk1!'

export default function HeroForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [btnHover, setBtnHover] = useState(false)
  const [focused, setFocused] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setError('')

    const supabase = getSupabase()
    const password = genPw()

    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: undefined },
    })

    if (signUpError && !signUpError.message.toLowerCase().includes('already registered')) {
      setError(signUpError.message)
      setLoading(false)
      return
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })

    if (signInError) {
      setError('Este email ya tiene cuenta. Ve a app.voko.lat para iniciar sesión.')
      setLoading(false)
      return
    }

    const { data: sessionData } = await supabase.auth.getSession()
    const accessToken = sessionData.session?.access_token
    const refreshToken = sessionData.session?.refresh_token
    window.location.href = `https://app.voko.lat/onboarding?access_token=${accessToken}&refresh_token=${refreshToken}`
  }

  const btnLabel = loading
    ? '$ iniciando acceso...'
    : btnHover
      ? '$ iniciando acceso... →'
      : '$ activar acceso gratis →'

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Email field with terminal prefix */}
      <div style={{ position: 'relative' }}>
        <span style={{
          position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'var(--font-dm-mono)', fontSize: 14,
          color: focused ? '#22D3EE' : '#6366F1',
          pointerEvents: 'none', transition: 'color 0.2s',
          zIndex: 1,
        }}>{'>'}</span>
        <input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required
          style={{
            width: '100%',
            background: '#0D0D0F',
            border: `1px solid ${focused ? 'rgba(99,102,241,0.8)' : 'rgba(99,102,241,0.3)'}`,
            borderRadius: 8,
            padding: '12px 14px 12px 30px',
            color: '#F8FAFC',
            fontSize: 14,
            outline: 'none',
            fontFamily: 'var(--font-dm-mono)',
            boxShadow: focused ? '0 0 0 3px rgba(99,102,241,0.15), 0 0 12px rgba(99,102,241,0.1)' : 'none',
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
        />
      </div>

      {error && (
        <p style={{ fontSize: 11, color: '#EF4444', margin: 0, fontFamily: 'var(--font-dm-mono)' }}>
          ✗ {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        className="btn-pulse"
        style={{
          background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
          color: '#fff', border: 'none', borderRadius: 8,
          padding: '13px', fontWeight: 700, fontSize: 14,
          cursor: loading ? 'not-allowed' : 'pointer',
          width: '100%', opacity: loading ? 0.7 : 1,
          fontFamily: 'var(--font-dm-mono)',
          letterSpacing: '0.02em',
          transform: btnHover && !loading ? 'translateY(-1px)' : 'none',
          transition: 'transform 0.15s, box-shadow 0.2s',
        }}
      >
        {btnLabel}
      </button>
    </form>
  )
}
