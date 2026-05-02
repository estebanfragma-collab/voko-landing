'use client'
import { useState, useMemo } from 'react'

const faqs = [
  { cat: 'Producto', q: '¿Cómo funciona Voko?', a: 'Dictas o escribes tu idea cruda — como piensas, no como quisieras sonar. Voko entiende el contexto, detecta tu emoción y genera el mensaje listo para enviar en el tono exacto que la situación necesita.' },
  { cat: 'Producto', q: '¿Solo funciona con voz o también con texto?', a: 'Ambos. Puedes grabar con el micrófono de tu dispositivo o escribir directamente. Incluso puedes pegar una conversación entera y Voko extrae el contexto para generar la respuesta perfecta.' },
  { cat: 'Producto', q: '¿Qué es el Modo Negociación?', a: 'Es una función Pro que genera 3 versiones del mismo mensaje: Suave (para mantener la relación), Firme (para dejar claro el punto) y Última instancia (cuando no hay vuelta atrás). Ideal para cobros, reclamos y propuestas delicadas.' },
  { cat: 'Producto', q: '¿Reemplaza a un redactor profesional?', a: 'Para comunicación del día a día — WhatsApp, emails, follow-ups, reclamos — sí. Para campañas de marketing elaboradas o textos largos con estrategia específica, no. Voko es tu herramienta de comunicación cotidiana.' },
  { cat: 'Producto', q: '¿Funciona en todos los dialectos del español?', a: 'Sí. Está calibrado para español latinoamericano en general, con atención especial a expresiones de Ecuador, Colombia, México, Perú y Argentina. No vas a recibir un "vosotros" nunca.' },
  { cat: 'Pago', q: '¿Puedo cancelar cuando quiera?', a: 'Sí, en cualquier momento desde tu perfil. Sin penalidades, sin llamadas, sin formularios complicados. Cancelas en 1 clic y tu cuenta queda en plan Free automáticamente.' },
  { cat: 'Pago', q: '¿Hay periodo de prueba?', a: 'El plan Free incluye 5 transformaciones al mes de forma permanente, sin tarjeta. Es tu prueba perpetua. Si quieres Pro, los primeros 5 mensajes Pro están incluidos gratis en el primer mes.' },
  { cat: 'Pago', q: '¿Qué métodos de pago aceptan?', a: 'Todas las tarjetas de crédito y débito principales (Visa, Mastercard, Amex) a través de Stripe. El procesamiento es seguro y nunca guardamos datos de tarjeta.' },
  { cat: 'Pago', q: '¿Puedo cambiar de plan en cualquier momento?', a: 'Sí. Puedes subir a Pro o bajar a Free cuando quieras. Si subes a mitad de mes, pagas proporcional. Si bajas, el cambio aplica al siguiente período.' },
  { cat: 'Privacidad', q: '¿Mis mensajes se guardan en algún servidor?', a: 'Solo si tú quieres. El historial es opcional y puedes desactivarlo. Los mensajes procesados no se usan para entrenar modelos de IA ni se comparten con terceros.' },
  { cat: 'Privacidad', q: '¿Usan mis datos para entrenar la IA?', a: 'No. Tus mensajes son tuyos. No los usamos para entrenar ningún modelo. Voko usa modelos de lenguaje de terceros bajo acuerdos de privacidad estrictos.' },
  { cat: 'Privacidad', q: '¿Los datos van cifrados?', a: 'Sí. Toda comunicación va por HTTPS/TLS. Los datos en base de datos están cifrados en reposo. Cumplimos con estándares de seguridad de nivel empresarial.' },
  { cat: 'Implementación', q: '¿Cuánto tarda configurar Voko?', a: 'Menos de 2 minutos. Creas cuenta, completas el perfil de voz en 5 preguntas, y tu primer mensaje está listo. Sin onboarding largo, sin tutoriales obligatorios.' },
  { cat: 'Implementación', q: '¿Necesito instalar algo?', a: 'No. Voko es 100% web. Funciona en cualquier navegador moderno, en desktop y móvil. No hay app que descargar aunque puedes agregarlo a tu pantalla de inicio como PWA.' },
  { cat: 'Implementación', q: '¿Hay soporte en español?', a: 'Sí. Soporte por email en español latino, con respuesta en menos de 24 horas en días hábiles. Los usuarios Pro tienen respuesta prioritaria.' },
  { cat: 'Implementación', q: '¿Hay API disponible?', a: 'Está en el roadmap para el Plan Internacional. Si eres desarrollador o empresa con necesidades de integración, escríbenos a hola@voko.lat para coordinar acceso anticipado.' },
]

const CATS = ['Todo', 'Producto', 'Pago', 'Privacidad', 'Implementación']

export default function FaqAccordion() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('Todo')
  const [open, setOpen] = useState<number | null>(null)

  const filtered = useMemo(() => {
    return faqs.filter(f => {
      const matchCat = cat === 'Todo' || f.cat === cat
      const matchSearch = !search || f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchSearch
    })
  }, [search, cat])

  return (
    <div>
      {/* Search */}
      <div style={{ position: 'relative', maxWidth: 480, margin: '0 auto 32px' }}>
        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: '#475569', fontSize: 16 }}>🔍</span>
        <input
          type="text"
          placeholder="Buscar pregunta..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 10,
            padding: '12px 14px 12px 42px',
            color: '#F8FAFC',
            fontSize: 14,
            outline: 'none',
          }}
        />
      </div>

      {/* Category filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 32 }}>
        {CATS.map(c => (
          <button
            key={c}
            onClick={() => setCat(c)}
            style={{
              padding: '6px 16px', borderRadius: 100, fontSize: 12,
              fontFamily: 'var(--font-dm-mono)',
              background: cat === c ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${cat === c ? 'rgba(99,102,241,0.5)' : 'rgba(255,255,255,0.08)'}`,
              color: cat === c ? '#818CF8' : '#475569',
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 720, margin: '0 auto' }}>
        {filtered.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${isOpen ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: 12,
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: 16,
                  padding: '16px 20px', background: 'transparent',
                  border: 'none', cursor: 'pointer', textAlign: 'left',
                }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: '#F8FAFC' }}>{faq.q}</span>
                <span style={{
                  fontSize: 18, color: '#6366F1', flexShrink: 0,
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}>
                  ▾
                </span>
              </button>
              {isOpen && (
                <div style={{ padding: '0 20px 16px', fontSize: 14, color: '#94A3B8', lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#475569', fontSize: 14 }}>
            No hay resultados para esa búsqueda.
          </div>
        )}
      </div>

      {/* Inline CTA */}
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <span style={{ fontSize: 14, color: '#94A3B8' }}>¿Ya tienes todo claro? → </span>
        <a
          href="#hero-form"
          style={{ fontSize: 14, color: '#818CF8', fontWeight: 700, textDecoration: 'none' }}
        >
          Empezar gratis ahora
        </a>
      </div>
    </div>
  )
}
