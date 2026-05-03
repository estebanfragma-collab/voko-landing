'use client'
import { useState } from 'react'

const COLORS = ['#6366F1','#22D3EE','#22C55E','#F59E0B','#A78BFA','#EF4444']

const IND = [
  { icon: '🧑‍💼', name: 'Freelancers y consultores', tags: ['Cobros', 'Propuestas'],           cmd: '$ voko --modo=cobro "necesito el pago de la factura 23"' },
  { icon: '🏪',  name: 'Dueños de negocio',          tags: ['Proveedores', 'Clientes difíciles'], cmd: '$ voko --modo=formal "quiero renegociar el contrato"' },
  { icon: '📱',  name: 'Vendedores y ejecutivos',     tags: ['Follow-up', 'Objeciones'],          cmd: '$ voko --modo=persuasivo "seguimiento a propuesta enviada"' },
  { icon: '⚖️',  name: 'Abogados y contadores',       tags: ['Honorarios', 'Requerimientos'],     cmd: '$ voko --modo=legal "cobro de honorarios pendientes"' },
  { icon: '🎓',  name: 'Docentes y coordinadores',    tags: ['Padres', 'Directivos'],             cmd: '$ voko --modo=institucional "comunicado a padres de familia"' },
  { icon: '🏥',  name: 'Profesionales de salud',      tags: ['Citas', 'Cobros'],                  cmd: '$ voko --modo=empático "recordatorio de cita médica"' },
]

export default function IndustriasGrid() {
  const [hov, setHov] = useState<number | null>(null)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
      {IND.map((ind, i) => (
        <div
          key={ind.name}
          onMouseEnter={() => setHov(i)}
          onMouseLeave={() => setHov(null)}
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid ${hov === i ? COLORS[i] + '50' : 'rgba(255,255,255,0.2)'}`,
            borderRadius: 14, padding: '20px',
            transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
            transform: hov === i ? 'translateY(-3px)' : 'none',
            boxShadow: hov === i ? `0 8px 32px ${COLORS[i]}20` : 'none',
            cursor: 'default',
          }}
        >
          {/* Emoji directo */}
          <div style={{ fontSize: 20, marginBottom: 10 }}>{ind.icon}</div>

          <div style={{ fontWeight: 600, fontSize: 15, color: '#F8FAFC', marginBottom: 10 }}>{ind.name}</div>

          {/* Tags — max 2, sin borde */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {ind.tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontSize: 11, fontFamily: 'var(--font-dm-mono)',
                  padding: '3px 10px', borderRadius: 4,
                  background: 'rgba(99,102,241,0.15)',
                  color: '#94A3B8',
                }}
              >{tag}</span>
            ))}
          </div>

          {/* Terminal command on hover */}
          <div style={{ overflow: 'hidden', maxHeight: hov === i ? 56 : 0, transition: 'max-height 0.3s ease' }}>
            <div style={{
              marginTop: 14,
              background: 'rgba(0,0,0,0.45)',
              border: `1px solid ${COLORS[i]}20`,
              borderRadius: 8, padding: '10px 14px',
              fontSize: 11, fontFamily: 'var(--font-dm-mono)',
              color: COLORS[i],
              whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
            }}>{ind.cmd}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
