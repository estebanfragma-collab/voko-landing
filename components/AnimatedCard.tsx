'use client'
import { ReactNode, CSSProperties } from 'react'

export default function AnimatedCard({
  children,
  bg = 'rgba(255,255,255,0.03)',
  style,
  innerStyle,
}: {
  children: ReactNode
  bg?: string
  style?: CSSProperties
  innerStyle?: CSSProperties
}) {
  return (
    <div className="card-glow-outer" style={style}>
      <div className="card-glow-inner" style={{ background: bg, ...innerStyle }}>
        <span className="cb cb-tl">[</span>
        <span className="cb cb-tr">]</span>
        <span className="cb cb-bl">[</span>
        <span className="cb cb-br">]</span>
        {children}
      </div>
    </div>
  )
}
