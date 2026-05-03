import MatrixRain from '@/components/MatrixRain'
import TickerBar from '@/components/TickerBar'
import Terminal from '@/components/Terminal'
import ScrollReveal from '@/components/ScrollReveal'
import PriceToggle from '@/components/PriceToggle'
import FaqAccordion from '@/components/FaqAccordion'
import HeroForm from '@/components/HeroForm'
import VSLDashboard from '@/components/VSLDashboard'
import AnimatedCard from '@/components/AnimatedCard'
import FloatingParticles from '@/components/FloatingParticles'
import SectionDivider from '@/components/SectionDivider'
import DoloresGrid from '@/components/DoloresGrid'
import StepsSection from '@/components/StepsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import IndustriasGrid from '@/components/IndustriasGrid'
import HeroCaptureCard from '@/components/HeroCaptureCard'
import HeroLiveFeed from '@/components/HeroLiveFeed'

// ─────────────────────────────────────────────
// TERMINAL LINES
// ─────────────────────────────────────────────
const terminal1Lines = [
  '> velocidad.voko --benchmark',
  '',
  '→ Velocidad teclado: 45 palabras/minuto',
  '→ Velocidad Voko: 220 palabras/minuto',
  '→ Ganancia de tiempo: [+388%]',
  '',
  '→ ACTIVAR: Voko ahora',
]

const terminal2Lines = [
  '$ estado.mercado --usuarios-activos-ahora',
  '',
  '→ Laura_Freelance: mensaje de cobro enviado · hace 3 min',
  '→ MarcosAgencia: negociación cerrada · hace 7 min',
  '→ Daniela_Consultora: propuesta enviada · hace 12 min',
  '',
  '→ TuEmpresa: [PENDIENTE — sin activar]',
  '',
  '→ ¿Seguimos esperando? [S/N]: _',
]

const terminalBaseLines = [
  '$ base_conocimiento --cargar',
  '',
  '→ Analizando estilo de escritura...',
  '→ Vocabulario detectado: 847 palabras',
  '→ Tono dominante: profesional-directo',
  '→ Modismos regionales: detectados ✓',
  '',
  '→ Personalización: ACTIVA ✓',
]

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const dolores = [
  { code: 'TIME_LOST', emoji: '⏳', title: '45 minutos redactando un email. Podrías haber cerrado 3 ventas en ese tiempo.', impact: 'CRÍTICO' },
  { code: 'TONE_FAIL', emoji: '😤', title: 'Suenas molesto, agresivo o demasiado formal. Pierdes clientes por cómo escribes, no por lo que dices.', impact: 'CRÍTICO' },
  { code: 'MONEY_GONE', emoji: '💸', title: 'Cada email mal redactado cuesta dinero. Cobros rechazados, negociaciones perdidas, clientes que se van.', impact: 'CRÍTICO' },
  { code: 'STUCK_HERE', emoji: '🧱', title: 'Escribir se convirtió en tu cuello de botella. No creces porque estás atrapado redactando.', impact: 'CRÍTICO' },
]

const industrias = [
  { icon: '🧑‍💼', name: 'Freelancers y consultores', tags: ['Cobro pendiente', 'Propuesta comercial', 'Seguimiento'] },
  { icon: '🏪', name: 'Dueños de negocio', tags: ['Reclamo a proveedor', 'Negociación de precio', 'Manejo de crisis'] },
  { icon: '📱', name: 'Vendedores y ejecutivos', tags: ['Follow-up', 'Objeción de precio', 'Lead frío'] },
  { icon: '⚖️', name: 'Abogados y contadores', tags: ['Requerimiento formal', 'Cobro de honorarios', 'Actualización de caso'] },
  { icon: '🎓', name: 'Docentes y coordinadores', tags: ['Comunicado a padres', 'Llamado de atención', 'Respuesta a queja'] },
  { icon: '🏥', name: 'Profesionales de salud', tags: ['Recordatorio de cita', 'Cobro de consulta', 'Resultado delicado'] },
]

const objeciones = [
  { id: '001', q: '¿Y si Voko no entiende mi acento o forma de hablar?', a: 'Voko aprende de TI. Cuanto más lo uses, mejor entiende tu voz, tu velocidad, tu contexto. Es como tener un asistente que te conoce.' },
  { id: '002', q: '¿Va a sonar como un robot? ¿Perderé mi personalidad?', a: 'No. Voko mantiene tu voz, tu tono, tu personalidad. Solo elimina los errores, la prisa y la rabia. Suenas como tú, pero mejor.' },
  { id: '003', q: '¿Funciona en español latino? ¿Entiende mis modismos?', a: '100% latino. Entiende argentinismos, mexicanismos, colombianismos. Voko sabe que no hablas como en Madrid.' },
  { id: '004', q: '¿Mis mensajes se guardan? ¿Venden mis datos?', a: 'Nunca. Tus mensajes se procesan en el momento y se borran. Cero datos vendidos. Tu privacidad es sagrada.' },
  { id: '005', q: '¿Por qué pagar si ChatGPT es gratis?', a: 'ChatGPT es genérico. Voko hace UNA cosa perfectamente: convertir tu voz en texto profesional. Es especialista, no generador.' },
]

const bonos = [
  { icon: '🛡️', title: 'Garantía 30 días', desc: 'Si en los primeros 30 días no ves resultados, devolvemos tu dinero. Sin preguntas.' },
  { icon: '⚡', title: 'Onboarding en 5 minutos', desc: 'Setup automático de tu perfil de voz. Listo para usar inmediatamente. Sin complicaciones.' },
  { icon: '📞', title: 'Acceso a Kelo.lat', desc: 'Resumidor de reuniones automático. Convierte tus llamadas en notas profesionales en segundos.' },
]

const metrics = [
  { value: '847', label: 'usuarios activos hoy', color: '#6366F1' },
  { value: '4.2 min', label: 'ahorrados por mensaje', color: '#22D3EE' },
  { value: '3 tonos', label: 'para cada situación', color: '#A78BFA' },
  { value: '15 días', label: 'gratis sin tarjeta', color: '#22C55E' },
]

const testimonials = [
  {
    name: 'Valentina M.', role: 'Consultora freelance · Bogotá',
    before: 'Escribía propuestas en 20 min.',
    after: 'Ahora en 2 min. Gano más clientes.',
  },
  {
    name: 'Rodrigo T.', role: 'Dueño de agencia · Quito',
    before: 'Perdía clientes por tono áspero.',
    after: 'Modo Firme. Cobré $8k que debía.',
  },
  {
    name: 'Camila S.', role: 'Ejecutiva de ventas · CDMX',
    before: 'Clientes confundían mi tono.',
    after: 'Ahora 3 tonos. Cierre +40%.',
  },
]

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
const S = {
  section: { padding: '80px 0 100px', position: 'relative' } as React.CSSProperties,
  container: { maxWidth: 1100, margin: '0 auto', padding: '0 24px' } as React.CSSProperties,
  eyebrow: {
    fontSize: 11, fontFamily: 'var(--font-dm-mono)', textTransform: 'uppercase' as const,
    letterSpacing: '0.2em', color: '#6366F1', marginBottom: 20,
    display: 'inline-flex', alignItems: 'center', gap: 8,
  } as React.CSSProperties,
  h2: {
    fontFamily: 'var(--font-dm-serif)', fontWeight: 400,
    fontSize: 'clamp(32px, 5vw, 54px)', letterSpacing: '-0.03em',
    lineHeight: 1.05, color: '#F8FAFC', marginBottom: 16,
  } as React.CSSProperties,
  muted: { color: '#94A3B8', fontSize: 17, lineHeight: 1.65, fontWeight: 300 } as React.CSSProperties,
}

const btnPrimary: React.CSSProperties = {
  background: 'linear-gradient(135deg, #6366F1, #A78BFA)',
  color: '#fff', border: 'none', borderRadius: 10,
  padding: '14px 28px', fontWeight: 700, fontSize: 15,
  cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
  textDecoration: 'none',
}

const btnGhost: React.CSSProperties = {
  background: 'transparent',
  color: '#22D3EE',
  border: '1px solid rgba(34,211,238,0.3)',
  borderRadius: 10,
  padding: '14px 28px', fontWeight: 600, fontSize: 15,
  cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
  textDecoration: 'none',
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <MatrixRain />
      <div className="scanlines" />
      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh' }}>

        {/* ── NAV ── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          backdropFilter: 'blur(20px)',
          background: 'rgba(8,10,8,0.85)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}>
          <div style={{ ...S.container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
            <span style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: '#F8FAFC' }}>Voko</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
              {['Cómo funciona', 'Precios', 'FAQ'].map(link => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`}
                  style={{ fontSize: 14, color: '#94A3B8', textDecoration: 'none' }}
                >
                  {link}
                </a>
              ))}
              <a href="#hero-form" style={{
                fontSize: 14, fontWeight: 600, color: '#818CF8',
                textDecoration: 'none', border: '1px solid rgba(99,102,241,0.35)',
                padding: '6px 16px', borderRadius: 8,
              }}>
                Entrar →
              </a>
            </div>
          </div>
        </nav>

        {/* ── BLOQUE 1: HERO ── */}
        <header style={{ paddingTop: 64, minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
          <FloatingParticles />
          <div style={{
            position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
            width: '80%', height: '60%',
            background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ ...S.container, width: '100%', padding: '80px 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
              {/* Left */}
              <div>
                {/* Live badge */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 20, padding: '5px 12px', background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.18)', borderRadius: 100 }}>
                  <span className="hero-badge-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#22D3EE', boxShadow: '0 0 6px #22D3EE', display: 'inline-block' }} />
                  <span style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#22D3EE', letterSpacing: '0.1em' }}>PRUEBA EN VIVO</span>
                </div>

                <h1 style={{
                  fontFamily: 'var(--font-dm-serif)', fontWeight: 400,
                  fontSize: 'clamp(48px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95,
                  color: '#F8FAFC', marginBottom: 24,
                }}>
                  No escribas. Solo habla.
                </h1>

                <p style={{ ...S.muted, maxWidth: 480, marginBottom: 16 }}>
                  Habla con naturalidad. Voko transcribe, edita y formatea al instante. Lo que dices se convierte en texto profesional, sin relleno ni errores.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
                  <a href="#hero-form" style={btnPrimary} className="btn-pulse">
                    Prueba 15 días gratis — sin tarjeta
                  </a>
                  <a href="#vsl" style={btnGhost}>
                    Ver en acción
                  </a>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, fontSize: 13, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>
                  {['15 días gratis. Sin tarjeta.', 'Acceso inmediato', 'Cancela en 1 clic'].map(b => (
                    <span key={b} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#22C55E' }}>✓</span> {b}
                    </span>
                  ))}
                </div>

                <HeroLiveFeed />
              </div>

              {/* Right — capture card */}
              <div id="hero-form" style={{ scrollMarginTop: 80 }}>
                <HeroCaptureCard />
              </div>
            </div>
          </div>
        </header>

        {/* ── TICKER BAR ── */}
        <TickerBar />

        {/* ── BLOQUE 2: VSL ── */}
        <section id="vsl" style={S.section}>
          <div style={S.container}>
            <p style={{ fontFamily: 'var(--font-dm-serif)', fontStyle: 'italic', fontSize: 20, color: '#94A3B8', textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}>
              "En 60 segundos vas a entender por qué nunca más vas a escribir un mensaje importante a mano."
            </p>
            <VSLDashboard />
            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <a href="#hero-form" style={btnPrimary} className="btn-pulse">Probar ahora gratis →</a>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── BLOQUE 3: DOLOR ── */}
        <section id="dolor" style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={S.h2}>
                El problema no es lo que dices.<br />
                <span style={{ color: '#EF4444' }}>Es cómo lo escribes.</span>
              </h2>
              <p style={{ ...S.muted, maxWidth: 580, margin: '0 auto' }}>
                Tienes ideas brillantes. Pero cuando te sientas a escribir, pierdes horas. El tono sale mal. Los clientes no entienden. Y lo peor: pierdes dinero por cada minuto que gastas redactando en lugar de cerrar ventas, negociar o liderar.
              </p>
            </div>
            <DoloresGrid />
          </div>
        </section>

        {/* ── BLOQUE 4: BANNER 1 ── */}
        <section style={{ padding: '0', position: 'relative', borderTop: '1px solid rgba(99,102,241,0.12)', borderBottom: '1px solid rgba(99,102,241,0.12)', background: 'rgba(99,102,241,0.04)' }}>
          <div style={S.container}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', padding: '64px 0' }}>
              <div>
                <div style={S.eyebrow}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1', display: 'block' }} />
                  El costo real
                </div>
                <h2 style={{ ...S.h2, maxWidth: 480 }}>
                  Cuatro veces más rápido que escribir. Cuatro veces más claro. Cero fricción.
                </h2>
                <a href="#hero-form" style={btnPrimary} className="btn-pulse">
                  Prueba 15 días — sin tarjeta
                </a>
              </div>
              <Terminal lines={terminal1Lines} title="velocidad.voko" delay={220} />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* ── BLOQUE 5: SOLUCIÓN ── */}
        <section id="como-funciona" style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 style={{ ...S.h2, maxWidth: 680, margin: '0 auto 16px' }}>
                La solución es simple:<br />
                <span style={{ color: '#818CF8' }}>Deja de escribir. Solo habla.</span>
              </h2>
              <p style={{ ...S.muted, maxWidth: 520, margin: '0 auto' }}>
                Voko convierte tu voz en texto profesional al instante. Sin esperar. Sin editar. Sin perder dinero.
              </p>
            </div>
            <StepsSection />
          </div>
        </section>

        <SectionDivider />

        {/* ── BLOQUE 6: PRUEBA SOCIAL ── */}
        <section style={S.section}>
          <div style={S.container}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 56 }}>
              {metrics.map(m => (
                <ScrollReveal key={m.label}>
                  <AnimatedCard innerStyle={{ padding: '28px 24px', textAlign: 'center' }}>
                    <div style={{ fontWeight: 800, fontSize: 44, color: m.color, letterSpacing: '-2px', lineHeight: 1, marginBottom: 8 }}>{m.value}</div>
                    <div style={{ fontSize: 13, color: '#94A3B8' }}>{m.label}</div>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
            <TestimonialsSection />
          </div>
        </section>

        <SectionDivider />

        {/* ── BLOQUE 7: INDUSTRIAS ── */}
        <section id="industrias" style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={S.h2}>Funciona en cualquier dispositivo</h2>
              <p style={{ ...S.muted, maxWidth: 480, margin: '0 auto' }}>
                Teléfono, tablet, computadora. Tu diccionario personal, estilo y configuración sincronizados en todas partes.
              </p>
            </div>
            <IndustriasGrid />
          </div>
        </section>

        {/* ── BLOQUE 8: BASE DE CONOCIMIENTO ── */}
        <section style={{ padding: '0', borderTop: '1px solid rgba(99,102,241,0.12)', borderBottom: '1px solid rgba(99,102,241,0.12)', background: 'rgba(99,102,241,0.04)' }}>
          <div style={S.container}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', padding: '64px 0' }}>
              <div>
                <div style={S.eyebrow}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1', display: 'block' }} />
                  Personalización
                </div>
                <h2 style={{ ...S.h2, maxWidth: 440 }}>
                  Voko aprende cómo hablas tú
                </h2>
                <p style={{ ...S.muted, marginBottom: 32 }}>
                  Sube ejemplos de emails que has enviado, chats con clientes, mensajes importantes. Voko aprende tu estilo, tu vocabulario y tu tono. Resultado: textos que suenan exactamente como tú — solo sin errores.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { icon: '📄', title: 'Sube tus mensajes', desc: 'Emails, chats, documentos. Cualquier texto tuyo sirve.' },
                    { icon: '🧠', title: 'Voko aprende tu estilo', desc: 'Analiza vocabulario, tono y estructura. Completamente automático.' },
                    { icon: '✨', title: 'Resultado personalizado', desc: 'Cada texto generado suena a ti. No a un robot genérico.' },
                  ].map(f => (
                    <div key={f.icon} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 22, lineHeight: 1 }}>{f.icon}</span>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 15, color: '#F8FAFC', marginBottom: 2 }}>{f.title}</div>
                        <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.5 }}>{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Terminal lines={terminalBaseLines} title="base_conocimiento" delay={260} />
            </div>
          </div>
        </section>

        {/* ── BLOQUE 8B: BANNER 2 ── */}
        <section style={{ padding: '0', borderBottom: '1px solid rgba(99,102,241,0.12)' }}>
          <div style={S.container}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', padding: '64px 0' }}>
              <div>
                <div style={S.eyebrow}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1', display: 'block' }} />
                  Mientras lo piensas
                </div>
                <h2 style={{ ...S.h2, maxWidth: 440 }}>
                  Tu competidor ya envió el mensaje. ¿Y tú?
                </h2>
                <a href="#hero-form" style={btnPrimary} className="btn-pulse">
                  Activar Voko gratis ahora →
                </a>
              </div>
              <Terminal lines={terminal2Lines} title="estado.mercado" delay={250} />
            </div>
          </div>
        </section>

        {/* ── BLOQUE 9: OBJECIONES ── */}
        <section style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={S.h2}>Sabemos lo que te preocupa</h2>
              <p style={{ ...S.muted, maxWidth: 480, margin: '0 auto' }}>
                Aquí están las respuestas reales. Sin marketing. Sin mentiras.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: 12 }}>
              {objeciones.map(obj => (
                <ScrollReveal key={obj.id}>
                  <AnimatedCard>
                    <div style={{ overflow: 'hidden', borderRadius: 13 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                        <div style={{ display: 'flex', gap: 6 }}>
                          {['#EF4444','#F59E0B','#22C55E'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
                        </div>
                        <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>objecion_{obj.id}.md</span>
                      </div>
                      <div style={{ padding: '20px 24px' }}>
                        <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#EF4444', marginBottom: 10 }}>// OBJECIÓN_{obj.id}</div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: '#F8FAFC', marginBottom: 14, lineHeight: 1.4 }}>"{obj.q}"</div>
                        <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#22C55E', marginBottom: 10 }}>// RESPUESTA VOKO</div>
                        <div style={{ fontSize: 14, color: '#94A3B8', lineHeight: 1.7, borderLeft: '2px solid rgba(99,102,241,0.3)', paddingLeft: 14 }}>{obj.a}</div>
                      </div>
                    </div>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOQUE 10: BONOS ── */}
        <section style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={S.h2}>Al activar tu plan Pro, esto viene incluido:</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, marginBottom: 48 }}>
              {bonos.map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 80}>
                  <AnimatedCard>
                    <div style={{ overflow: 'hidden', borderRadius: 13 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                        <div style={{ display: 'flex', gap: 6 }}>
                          {['#EF4444','#F59E0B','#22C55E'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />)}
                        </div>
                        <span style={{ fontSize: 9, fontFamily: 'var(--font-dm-mono)', color: '#22C55E', background: 'rgba(34,197,94,0.1)', padding: '2px 8px', borderRadius: 4, letterSpacing: '0.1em' }}>INCLUIDO EN PRO</span>
                      </div>
                      <div style={{ padding: '20px' }}>
                        <div style={{ fontSize: 28, marginBottom: 12 }}>{b.icon}</div>
                        <div style={{ fontWeight: 700, fontSize: 16, color: '#F8FAFC', marginBottom: 8 }}>{b.title}</div>
                        <div style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.7 }}>{b.desc}</div>
                      </div>
                    </div>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>

            {/* Kelo section */}
            <ScrollReveal>
              <div style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 16, padding: '40px', marginBottom: 48 }}>
                <h3 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 28, color: '#F8FAFC', marginBottom: 16 }}>¿Qué es Kelo.lat?</h3>
                <p style={{ ...S.muted, marginBottom: 24, maxWidth: 640 }}>
                  Kelo es un resumidor de reuniones impulsado por IA. Mientras hablas en una llamada, Kelo escucha, entiende y genera automáticamente notas profesionales con los puntos clave, acuerdos y tareas pendientes.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
                  {[
                    'Captura automática de decisiones y acuerdos',
                    'Notas formateadas listas para compartir',
                    'Funciona con Voko para máxima eficiencia',
                  ].map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ color: '#22C55E', fontSize: 16 }}>✓</span>
                      <span style={{ fontSize: 14, color: '#94A3B8' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 100, padding: '8px 20px' }}>
                  <span style={{ fontSize: 13, color: '#475569', fontFamily: 'var(--font-dm-mono)', textDecoration: 'line-through' }}>Valor normal: $29/mes</span>
                  <span style={{ fontSize: 13, color: '#22C55E', fontFamily: 'var(--font-dm-mono)', fontWeight: 700 }}>Incluido gratis en Pro</span>
                </div>
              </div>
            </ScrollReveal>

            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 22, color: '#F8FAFC', marginBottom: 24 }}>
                Todo esto por <span style={{ color: '#6366F1' }}>$5.99/mes</span>
              </p>
              <a href="#hero-form" style={{ ...btnPrimary, fontSize: 17, padding: '16px 40px' }} className="btn-pulse">
                Activar Pro después del trial
              </a>
            </div>
          </div>
        </section>

        {/* ── BLOQUE 11: PRECIOS ── */}
        <section id="precios" style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div style={S.eyebrow}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1', display: 'block' }} />
                Precios
              </div>
              <h2 style={S.h2}>Empieza gratis. Crece cuando lo necesites.</h2>
            </div>
            <PriceToggle />
          </div>
        </section>

        {/* ── BLOQUE 12: FAQ ── */}
        <section id="faq" style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <h2 style={S.h2}>Preguntas frecuentes</h2>
            </div>
            <FaqAccordion />
          </div>
        </section>

        {/* ── BLOQUE 13: CTA FINAL ── */}
        <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '60%', background: 'radial-gradient(ellipse at bottom, rgba(99,102,241,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '40%', background: 'radial-gradient(ellipse at top, rgba(34,211,238,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ ...S.container, position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontWeight: 400, fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24, color: '#F8FAFC' }}>
              Dos caminos.
            </h2>

            <p style={{ ...S.muted, maxWidth: 560, margin: '0 auto 16px' }}>
              El que sigue escribiendo a mano. Molesto. Redactando. Perdiendo clientes. O el que dicta en 30 segundos, Voko lo convierte, y envía con confianza.
            </p>

            <p style={{ ...S.muted, maxWidth: 480, margin: '0 auto 40px' }}>
              Prueba 15 días gratis. Sin tarjeta. Si no ves la diferencia en los primeros 3 mensajes, cancela. Pero la vas a ver.
            </p>

            <a href="#hero-form" style={{ ...btnPrimary, fontSize: 18, padding: '18px 48px', borderRadius: 12 }} className="btn-pulse">
              Activar 15 días gratis ahora
            </a>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginTop: 32 }}>
              {['15 días gratis', 'Sin tarjeta de crédito', 'Cancela en 1 clic', '100% en español latino'].map(b => (
                <span key={b} style={{ fontSize: 13, color: '#475569', fontFamily: 'var(--font-dm-mono)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#22C55E' }}>✓</span> {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 0' }}>
          <div style={{ ...S.container, textAlign: 'center' }}>
            <span style={{ fontSize: 13, color: '#475569', fontFamily: 'var(--font-dm-mono)' }}>
              © 2026 Voko. Todos los derechos reservados.
            </span>
          </div>
        </footer>

      </div>
    </>
  )
}
