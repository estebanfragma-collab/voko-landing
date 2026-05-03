'use client'
import { useState, useEffect } from 'react'

const FEED = [
  'Valentina acaba de activar su prueba · hace 1 min',
  'Rodrigo envió su primer mensaje · hace 3 min',
  'Camila cerró una venta con Voko · hace 5 min',
  'Marcos activó el modo Firme · hace 7 min',
]

export default function HeroLiveFeed() {
  const [idx, setIdx] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIdx(prev => (prev + 1) % FEED.length)
        setVisible(true)
      }, 350)
    }, 3200)
    return () => clearInterval(t)
  }, [])

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '8px 12px',
      background: 'rgba(34,211,238,0.04)',
      border: '1px solid rgba(34,211,238,0.1)',
      borderRadius: 8,
      marginTop: 20,
      maxWidth: 440,
    }}>
      <span style={{ color: '#22D3EE', fontSize: 11, flexShrink: 0 }}>▸</span>
      <span style={{
        fontSize: 12, fontFamily: 'var(--font-dm-mono)', color: '#475569',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>{FEED[idx]}</span>
    </div>
  )
}
