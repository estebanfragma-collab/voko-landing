'use client'
import { useEffect } from 'react'

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix') as HTMLCanvasElement
    const ctx = canvas.getContext('2d')!

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    })

    const fontSize = 16
    const cols = Math.floor(canvas.width / fontSize)
    const drops = Array(cols).fill(1)

    function draw() {
      ctx.fillStyle = 'rgba(8, 10, 8, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#84CC16'
      ctx.font = `bold ${fontSize}px 'Courier New', monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = Math.random() > 0.5 ? '1' : '0'
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)
    return () => clearInterval(interval)
  }, [])

  return (
    <canvas
      id="matrix"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.18,
      }}
    />
  )
}

export default MatrixRain
