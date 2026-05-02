'use client'
import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = '01アイウエオカキクケコサシスセソタチツテトVOKO◆▲●'
    const fontSize = 13
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(10,10,11,0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      drops.forEach((y, i) => {
        const bright = Math.random() > 0.95
        ctx.fillStyle = bright ? '#6366F1' : 'rgba(99,102,241,0.3)'
        ctx.font = `${fontSize}px monospace`
        const char = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(char, i * fontSize, y * fontSize)
        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      })
    }

    const interval = setInterval(draw, 40)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        opacity: 0.04,
        zIndex: 0,
      }}
    />
  )
}
