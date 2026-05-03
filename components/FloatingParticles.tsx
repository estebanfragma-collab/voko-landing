'use client'

const P = [
  { w: 6,  h: 6,  top: '22%', left: '6%',  color: 'rgba(99,102,241,0.45)',  anim: 'fp1', dur: '9s',  del: '0s'  },
  { w: 4,  h: 4,  top: '38%', left: '93%', color: 'rgba(34,211,238,0.35)',  anim: 'fp2', dur: '11s', del: '2.5s'},
  { w: 5,  h: 5,  top: '68%', left: '4%',  color: 'rgba(167,139,250,0.3)',  anim: 'fp3', dur: '13s', del: '1s'  },
  { w: 3,  h: 3,  top: '55%', left: '89%', color: 'rgba(34,197,94,0.3)',    anim: 'fp4', dur: '8s',  del: '3s'  },
]

export default function FloatingParticles() {
  return (
    <>
      {P.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: p.w, height: p.h,
            borderRadius: '50%',
            background: p.color,
            top: p.top, left: p.left,
            animation: `${p.anim} ${p.dur} ease-in-out ${p.del} infinite`,
            pointerEvents: 'none',
            zIndex: 0,
            boxShadow: `0 0 ${p.w * 4}px ${p.color}`,
          }}
        />
      ))}
    </>
  )
}
