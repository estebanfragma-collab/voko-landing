import MatrixRain from '@/components/MatrixRain'
import TickerBar from '@/components/TickerBar'
import Terminal from '@/components/Terminal'
import ScrollReveal from '@/components/ScrollReveal'
import PriceToggle from '@/components/PriceToggle'
import FaqAccordion from '@/components/FaqAccordion'
import HeroForm from '@/components/HeroForm'

// ─────────────────────────────────────────────
// TERMINAL LINES
// ─────────────────────────────────────────────
const terminal1Lines = [
  '$ diagnóstico.voko --modo-rápido',
  '',
  '→ Analizando patrones de comunicación...',
  '→ Mensajes reescritos manualmente: 23/semana',
  '→ Tiempo perdido estimado: 1.8 horas/semana',
  '→ Relaciones afectadas por tono incorrecto: [ALTO]',
  '',
  '→ RECOMENDACIÓN: activar Voko ahora',
  '→ _',
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

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const dolores = [
  { code: 'ERR_001', tag: 'TONE_FAIL', emoji: '😤', title: 'Le escribí molesto y arruiné la negociación', status: 'sin resolver' },
  { code: 'ERR_002', tag: 'TIME_LOST', emoji: '⏳', title: 'Pasé 20 minutos redactando un email de 3 líneas', status: 'sin resolver' },
  { code: 'ERR_003', tag: 'TONE_MISMATCH', emoji: '💬', title: 'Mi WhatsApp de trabajo no suena profesional', status: 'sin resolver' },
  { code: 'ERR_004', tag: 'MONEY_GONE', emoji: '💸', title: 'No sé cómo reclamar sin quemar la relación', status: 'sin resolver' },
]

const industrias = [
  { icon: '🧑‍💼', name: 'Freelancers', tags: ['Cobro pendiente', 'Propuesta comercial', 'Seguimiento'], cmd: '$ voko --perfil=freelancer' },
  { icon: '🏪', name: 'Dueños de negocio', tags: ['Reclamo proveedor', 'Negociación precio', 'Manejo crisis'], cmd: '$ voko --perfil=negocio' },
  { icon: '📱', name: 'Vendedores', tags: ['Follow-up', 'Objeción precio', 'Lead frío'], cmd: '$ voko --perfil=ventas' },
  { icon: '⚖️', name: 'Abogados y contadores', tags: ['Requerimiento formal', 'Cobro honorarios'], cmd: '$ voko --perfil=juridico' },
  { icon: '🎓', name: 'Docentes', tags: ['Comunicado padres', 'Llamado atención', 'Respuesta queja'], cmd: '$ voko --perfil=educacion' },
  { icon: '🏥', name: 'Salud', tags: ['Recordatorio cita', 'Cobro consulta', 'Resultado delicado'], cmd: '$ voko --perfil=salud' },
]

const objeciones = [
  { id: '001', q: '¿Tengo que escribir bien para que funcione?', a: 'No. Dictas como hablas — desordenado, con errores, en tu dialecto. Voko entiende la intención, no la gramática.' },
  { id: '002', q: '¿Va a sonar genérico como IA?', a: 'No si usas el perfil de voz. Con 5 minutos de configuración, Voko aprende tu estilo, tu audiencia y tu tono preferido. El resultado suena como tú.' },
  { id: '003', q: '¿Funciona en español latino? ¿Va a escribirme "vosotros"?', a: 'Calibrado específicamente para LATAM. Nunca vas a recibir un "vosotros". Tú eres tú en tu variante del español.' },
  { id: '004', q: '¿Mis mensajes se guardan en algún servidor?', a: 'Tus mensajes son tuyos. El historial es opcional. Los mensajes no se usan para entrenar IA ni se comparten con nadie.' },
  { id: '005', q: '¿Vale $6.99 si puedo usar ChatGPT gratis?', a: 'Voko hace una cosa y la hace bien: convertir ideas imperfectas en mensajes perfectos, con perfil de voz, detector de emoción, modo negociación y calibración LATAM. ChatGPT no sabe quién eres ni cómo hablas.' },
]

const bonos = [
  { icon: '📋', title: 'Biblioteca de 50 situaciones', desc: 'Las 50 situaciones más comunes en negocios LATAM, ya configuradas y listas para usar.', value: '$29' },
  { icon: '🎤', title: 'Perfil de voz en 5 minutos', desc: 'Proceso guiado para que Voko aprenda tu estilo, tono y audiencia desde el día 1.', value: '$19' },
  { icon: '⚡', title: 'Modo Negociación desbloqueado', desc: '3 versiones de cada mensaje delicado: Suave, Firme y Última instancia.', value: '$15' },
]

const metrics = [
  { value: '+847', label: 'mensajes transformados', color: '#6366F1' },
  { value: '4.2 min', label: 'ahorrados por mensaje', color: '#22D3EE' },
  { value: '3 tonos', label: 'por situación delicada', color: '#A78BFA' },
  { value: 'es-LATAM', label: 'calibración nativa', color: '#22C55E' },
]

const testimonials = [
  {
    name: 'Valentina M.', role: 'Consultora freelance · Bogotá',
    before: 'Mandé un reclamo por el pago atrasado y el cliente se molestó tanto que terminó cancelando.',
    after: 'Usé el Modo Negociación — elegí la versión Firme. Me pagaron y seguimos trabajando.',
  },
  {
    name: 'Rodrigo T.', role: 'Dueño de agencia · Quito',
    before: 'Mis emails a clientes los redactaba un asistente que no entendía el contexto real.',
    after: 'Ahora dicto el contexto en 30 segundos y el email sale listo. Ahorro 40 minutos al día.',
  },
  {
    name: 'Camila S.', role: 'Ejecutiva de ventas · CDMX',
    before: 'Mi follow-up de ventas siempre sonaba o muy insistente o muy pasivo.',
    after: 'Voko detecta el contexto de la conversación anterior y genera el tono exacto. Mi tasa de cierre subió 18%.',
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
      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh' }}>

        {/* ── NAV ── */}
        <nav style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          backdropFilter: 'blur(20px)',
          background: 'rgba(10,10,11,0.85)',
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
          {/* glow */}
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
                <div style={{ marginBottom: 24, display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: 100, padding: '6px 14px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22D3EE', display: 'block', animation: 'pulse-glow 2s infinite' }} />
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-dm-mono)', color: '#22D3EE' }}>
                    847 personas lo vieron funcionar hoy. Tú aún estás escribiendo a mano.
                  </span>
                </div>

                <h1 style={{
                  fontFamily: 'var(--font-dm-serif)', fontWeight: 400,
                  fontSize: 'clamp(48px, 6vw, 80px)', letterSpacing: '-0.04em', lineHeight: 0.95,
                  color: '#F8FAFC', marginBottom: 24,
                }}>
                  Dicta.<br />
                  <span className="text-gradient">Voko lo convierte.</span>
                </h1>

                <p style={{ ...S.muted, maxWidth: 480, marginBottom: 16 }}>
                  Hablas con naturalidad — molesto, apurado, como sea. Voko entiende cómo te sientes y entrega el mensaje listo para WhatsApp, email o lo que necesites. En el tono exacto que la situación pide.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 24 }}>
                  <a href="#hero-form" style={btnPrimary} className="btn-pulse">
                    → Transformar mi primer mensaje gratis
                  </a>
                  <a href="#vsl" style={btnGhost}>
                    ▶ Ver cómo funciona · 60 seg
                  </a>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, fontSize: 13, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>
                  {['Sin tarjeta', 'Listo en 30 segundos', 'Cancela cuando quieras'].map(b => (
                    <span key={b} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ color: '#22C55E' }}>✓</span> {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — capture form */}
              <div id="hero-form" style={{ scrollMarginTop: 80 }}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  borderRadius: 20, padding: 32,
                  backdropFilter: 'blur(12px)',
                }}>
                  <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6366F1', marginBottom: 16 }}>
                    Empieza gratis
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 24, color: '#F8FAFC', marginBottom: 8 }}>
                    Tu primer mensaje, listo hoy.
                  </h3>
                  <p style={{ fontSize: 13, color: '#475569', marginBottom: 24 }}>
                    Sin setup. Sin tarjeta. En menos de 2 minutos.
                  </p>
                  <HeroForm />
                </div>
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

            {/* Metrics floating above */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginBottom: 24 }}>
              {[
                { dot: '#6366F1', text: '847 mensajes transformados hoy' },
                { dot: '#22D3EE', text: 'Tono promedio: Profesional' },
                { dot: '#A78BFA', text: 'Tiempo ahorrado: 4.2 min/msg' },
              ].map(m => (
                <div key={m.text} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 100, padding: '6px 14px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: m.dot, display: 'block' }} />
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-dm-mono)', color: '#94A3B8' }}>{m.text}</span>
                </div>
              ))}
            </div>

            {/* Video frame */}
            <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
              <div style={{
                background: 'rgba(10,10,11,0.9)',
                border: '1px solid rgba(99,102,241,0.25)',
                borderRadius: 16, overflow: 'hidden',
              }}>
                {/* topbar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid rgba(99,102,241,0.1)', background: 'rgba(99,102,241,0.04)' }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#22C55E' }} />
                  </div>
                  <span style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>voko.lat — demo en vivo</span>
                  <div style={{ width: 60 }} />
                </div>
                {/* video area */}
                <div style={{ aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, rgba(167,139,250,0.06) 100%)', flexDirection: 'column', gap: 16 }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #A78BFA)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 48px rgba(99,102,241,0.5)', cursor: 'pointer' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><polygon points="5,3 19,12 5,21" /></svg>
                  </div>
                  <span style={{ fontSize: 13, fontFamily: 'var(--font-dm-mono)', color: '#6366F1' }}>▶ Demo en vivo · 60 seg</span>
                </div>
              </div>

              {/* Activity feed */}
              <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '10px 16px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'block' }} />
                <span style={{ fontSize: 12, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>
                  Carlos R. acaba de enviar un reclamo formal · hace 2 min
                </span>
              </div>

              {/* CTA under frame */}
              <div style={{ textAlign: 'center', marginTop: 24 }}>
                <a href="#hero-form" style={btnPrimary} className="btn-pulse">
                  Probar ahora gratis →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOQUE 3: DOLOR ── */}
        <section id="dolor" style={S.section}>
          <div style={S.container}>
            <blockquote style={{ borderLeft: '3px solid #6366F1', paddingLeft: 24, maxWidth: 600, margin: '0 auto 48px', fontFamily: 'var(--font-dm-serif)', fontStyle: 'italic', fontSize: 22, color: '#94A3B8', lineHeight: 1.5 }}>
              "Sé exactamente lo que quiero decir. El problema es cómo decirlo sin que suene mal."
            </blockquote>

            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={S.h2}>
                El problema no es lo que dices.<br />
                <span style={{ color: '#EF4444' }}>Es cómo lo escribes.</span>
              </h2>
              <p style={{ ...S.muted, maxWidth: 520, margin: '0 auto' }}>
                Cada vez que mandas un mensaje con el tono equivocado, estás apostando una relación. Y a veces la pierdes.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12 }}>
              {dolores.map((d) => (
                <ScrollReveal key={d.code}>
                  <div style={{ background: 'rgba(10,10,11,0.85)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 14, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid rgba(239,68,68,0.1)', background: 'rgba(239,68,68,0.04)' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
                      </div>
                      <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#EF4444' }}>{d.code} · {d.tag}</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ fontSize: 26, marginBottom: 12 }}>{d.emoji}</div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: '#F8FAFC', marginBottom: 16, lineHeight: 1.4 }}>{d.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#EF4444' }} />
                        <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#EF4444' }}>{d.status}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOQUE 4: MAGNETIC BANNER 1 ── */}
        <section style={{ padding: '0', position: 'relative', borderTop: '1px solid rgba(99,102,241,0.12)', borderBottom: '1px solid rgba(99,102,241,0.12)', background: 'rgba(99,102,241,0.04)' }}>
          <div style={S.container}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', padding: '64px 0' }}>
              <div>
                <div style={S.eyebrow}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1', display: 'block' }} />
                  El costo silencioso
                </div>
                <h2 style={{ ...S.h2, maxWidth: 480 }}>
                  Cada mensaje mal enviado tiene un precio. A veces es un cliente. A veces una oportunidad. Siempre es tiempo.
                </h2>
                <a href="#hero-form" style={btnPrimary} className="btn-pulse">
                  Empezar gratis — sin tarjeta →
                </a>
              </div>
              <Terminal lines={terminal1Lines} title="diagnóstico.voko" delay={220} />
            </div>
          </div>
        </section>

        {/* ── BLOQUE 5: SOLUCIÓN ── */}
        <section id="como-funciona" style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ ...S.eyebrow, color: '#22D3EE' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22D3EE', display: 'block' }} />
                La solución
              </div>
              <h2 style={{ ...S.h2, maxWidth: 740, margin: '0 auto 16px' }}>
                No es un corrector de texto. No es ChatGPT con otro nombre.<br />
                <span style={{ color: '#818CF8' }}>Es la primera app que entiende cómo te sientes antes de escribir por ti.</span>
              </h2>
            </div>

            {/* Steps */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, marginBottom: 56 }}>
              {[
                { num: 'PASO_01', icon: '🎤', title: 'Dictas tu idea cruda', lines: ['input crudo → recibido ✓'] },
                { num: 'PASO_02', icon: '⚡', title: 'Voko detecta el contexto', lines: ['emoción: frustración', 'canal: WhatsApp', 'tono: firme profesional'] },
                { num: 'PASO_03', icon: '✅', title: 'Elige tu versión y envía', lines: ['[Suave] [Firme] [Última instancia]', '→ mensaje listo ✓'] },
              ].map((step) => (
                <ScrollReveal key={step.num}>
                  <div style={{ background: 'rgba(10,10,11,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
                      </div>
                      <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#475569' }}>{step.num}.sh</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ fontSize: 28, marginBottom: 12 }}>{step.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: '#F8FAFC', marginBottom: 14 }}>{step.title}</div>
                      {step.lines.map((l, i) => (
                        <div key={i} style={{ fontSize: 12, fontFamily: 'var(--font-dm-mono)', color: l.includes('✓') ? '#22C55E' : l.startsWith('[') ? '#6366F1' : '#94A3B8', lineHeight: 1.8 }}>{l}</div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Modo Negociación */}
            <ScrollReveal>
              <div style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 16, overflow: 'hidden', marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', borderBottom: '1px solid rgba(99,102,241,0.12)', background: 'rgba(99,102,241,0.05)' }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} />
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
                  </div>
                  <span style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#6366F1' }}>MODO NEGOCIACIÓN — 3 versiones automáticas</span>
                  <div />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
                  {[
                    { label: 'Suave', color: '#22C55E', desc: 'Mantén la relación', example: '"Entiendo la situación, me gustaría coordinar una solución que funcione para ambos..."' },
                    { label: 'Firme', color: '#F59E0B', desc: 'Deja claro el punto', example: '"Según lo acordado, el pago debió efectuarse el día 15. Necesito confirmación de la fecha exacta de transferencia."' },
                    { label: 'Última instancia', color: '#EF4444', desc: 'Sin vuelta atrás', example: '"Si no recibo el pago antes del viernes, procederé con las acciones legales correspondientes según el contrato firmado."' },
                  ].map((v, i) => (
                    <div key={v.label} style={{ padding: '24px 20px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                      <div style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 100, background: `${v.color}18`, border: `1px solid ${v.color}40`, color: v.color, fontSize: 11, fontFamily: 'var(--font-dm-mono)', marginBottom: 10 }}>{v.label}</div>
                      <div style={{ fontSize: 12, color: '#475569', marginBottom: 12 }}>{v.desc}</div>
                      <div style={{ fontSize: 12, color: '#94A3B8', fontStyle: 'italic', lineHeight: 1.6 }}>{v.example}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Tonos por canal */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
              {[
                { canal: 'WhatsApp', color: '#22C55E', msg: 'Oye, el pago de la factura 234 sigue pendiente. ¿Cuándo puedes hacer la transferencia? Gracias 👍' },
                { canal: 'Email', color: '#6366F1', msg: 'Estimado cliente, le recuerdo que la factura N° 234 por $850 se encuentra vencida desde el 15/04. Quedo a disposición para coordinar el pago.' },
                { canal: 'LinkedIn', color: '#818CF8', msg: 'Buenos días. Me permito seguir up sobre nuestra propuesta de colaboración enviada la semana pasada. ¿Tuvo oportunidad de revisarla?' },
              ].map(c => (
                <div key={c.canal} style={{ background: 'rgba(10,10,11,0.85)', border: `1px solid ${c.color}25`, borderRadius: 12, padding: '20px' }}>
                  <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: c.color, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{c.canal}</div>
                  <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.7, fontStyle: 'italic' }}>"{c.msg}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOQUE 6: PRUEBA SOCIAL ── */}
        <section style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={S.h2}>Equipos que ya no escriben a mano.</h2>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 56 }}>
              {metrics.map(m => (
                <ScrollReveal key={m.label}>
                  <div style={{ background: 'rgba(10,10,11,0.85)', border: `1px solid ${m.color}22`, borderRadius: 14, padding: '28px 24px', textAlign: 'center' }}>
                    <div style={{ fontWeight: 800, fontSize: 44, color: m.color, letterSpacing: '-2px', lineHeight: 1, marginBottom: 8 }}>{m.value}</div>
                    <div style={{ fontSize: 13, color: '#94A3B8' }}>{m.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Testimonials */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
              {testimonials.map((t) => (
                <ScrollReveal key={t.name}>
                  <div style={{ background: 'rgba(10,10,11,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: '24px', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                      {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#F59E0B', fontSize: 13 }}>★</span>)}
                    </div>
                    <div style={{ borderLeft: '3px solid #EF4444', paddingLeft: 12, marginBottom: 12 }}>
                      <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#EF4444', marginBottom: 4 }}>ANTES</div>
                      <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6, fontStyle: 'italic' }}>"{t.before}"</p>
                    </div>
                    <div style={{ borderLeft: '3px solid #22C55E', paddingLeft: 12, marginBottom: 20 }}>
                      <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#22C55E', marginBottom: 4 }}>DESPUÉS</div>
                      <p style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.6, fontStyle: 'italic' }}>"{t.after}"</p>
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: '#F8FAFC' }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: '#475569' }}>{t.role}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOQUE 7: INDUSTRIAS ── */}
        <section id="industrias" style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={S.h2}>
                Voko funciona para cualquiera que comunique por texto.<br />
                <span style={{ color: '#94A3B8', fontSize: '0.75em', fontWeight: 400 }}>Especialmente si lo hace todos los días.</span>
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 12 }}>
              {industrias.map((ind) => (
                <ScrollReveal key={ind.name}>
                  <div style={{ background: 'rgba(10,10,11,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
                      </div>
                      <span style={{ fontSize: 10, fontFamily: 'var(--font-dm-mono)', color: '#6366F1' }}>{ind.cmd}</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ fontSize: 28, marginBottom: 10 }}>{ind.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: 17, color: '#F8FAFC', marginBottom: 12 }}>{ind.name}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                        {ind.tags.map(tag => (
                          <span key={tag} style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', padding: '3px 10px', borderRadius: 4, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818CF8' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOQUE 8: MAGNETIC BANNER 2 ── */}
        <section style={{ padding: '0', borderTop: '1px solid rgba(99,102,241,0.12)', borderBottom: '1px solid rgba(99,102,241,0.12)', background: 'rgba(99,102,241,0.04)' }}>
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
              <div style={S.eyebrow}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1', display: 'block' }} />
                Objeciones resueltas
              </div>
              <h2 style={S.h2}>Las preguntas que probablemente tienes</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))', gap: 12 }}>
              {objeciones.map(obj => (
                <ScrollReveal key={obj.id}>
                  <div style={{ background: 'rgba(10,10,11,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
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
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOQUE 10: PRECIOS ── */}
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

        {/* ── BLOQUE 11: BONOS ── */}
        <section style={S.section}>
          <div style={S.container}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h2 style={S.h2}>
                Al activar tu plan Pro, esto viene incluido<br />
                <span style={{ color: '#6366F1' }}>sin costo adicional:</span>
              </h2>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 100, padding: '8px 20px' }}>
                <span style={{ fontSize: 13, color: '#475569', fontFamily: 'var(--font-dm-mono)', textDecoration: 'line-through' }}>Valor total: $63</span>
                <span style={{ fontSize: 13, color: '#6366F1', fontFamily: 'var(--font-dm-mono)', fontWeight: 700 }}>→ Incluido en Pro</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, marginBottom: 48 }}>
              {bonos.map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 80}>
                  <div style={{ background: 'rgba(10,10,11,0.85)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#EF4444' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B' }} />
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
                      </div>
                      <span style={{ fontSize: 9, fontFamily: 'var(--font-dm-mono)', color: '#22C55E', background: 'rgba(34,197,94,0.1)', padding: '2px 8px', borderRadius: 4, letterSpacing: '0.1em' }}>INCLUIDO EN PRO</span>
                    </div>
                    <div style={{ padding: '20px' }}>
                      <div style={{ fontSize: 28, marginBottom: 12 }}>{b.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: '#F8FAFC', marginBottom: 8 }}>{b.title}</div>
                      <div style={{ fontSize: 13, color: '#94A3B8', lineHeight: 1.7, marginBottom: 16 }}>{b.desc}</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                        <span style={{ fontSize: 12, color: '#475569', fontFamily: 'var(--font-dm-mono)', textDecoration: 'line-through' }}>Valor: {b.value}</span>
                        <span style={{ fontSize: 12, color: '#22C55E', fontFamily: 'var(--font-dm-mono)', fontWeight: 700 }}>✓ Incluido</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="#hero-form" style={{ ...btnPrimary, fontSize: 17, padding: '16px 40px' }} className="btn-pulse">
                Activar Pro y reclamar mis bonos →
              </a>
            </div>
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
          {/* Glows */}
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '80%', height: '60%', background: 'radial-gradient(ellipse at bottom, rgba(99,102,241,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '40%', background: 'radial-gradient(ellipse at top, rgba(34,211,238,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ ...S.container, position: 'relative' }}>
            <div style={{ ...S.eyebrow, justifyContent: 'center' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366F1', display: 'block' }} />
              El momento de cambiar
            </div>

            <h2 style={{ fontFamily: 'var(--font-dm-serif)', fontWeight: 400, fontSize: 'clamp(40px, 6vw, 72px)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24 }}>
              <span style={{ color: '#EF4444' }}>El que sigue escribiendo a mano.</span><br />
              <span style={{ color: '#22C55E' }}>O el que dicta y envía con confianza.</span>
            </h2>

            <p style={{ ...S.muted, maxWidth: 520, margin: '0 auto 12px' }}>
              Empieza gratis. Sin tarjeta. Si en los primeros 5 mensajes no sientes la diferencia, no necesitas el Pro.
            </p>
            <p style={{ fontFamily: 'var(--font-dm-serif)', fontStyle: 'italic', fontSize: 18, color: '#6366F1', marginBottom: 40 }}>
              Pero la vas a sentir.
            </p>

            <a href="#hero-form" style={{ ...btnPrimary, fontSize: 18, padding: '18px 48px', borderRadius: 12 }} className="btn-pulse">
              → Dictar mi primer mensaje ahora
            </a>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24, marginTop: 32 }}>
              {['Sin tarjeta', '30 segundos para empezar', 'Cancela cuando quieras', 'En español latino'].map(b => (
                <span key={b} style={{ fontSize: 13, color: '#475569', fontFamily: 'var(--font-dm-mono)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#22C55E' }}>✓</span> {b}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '64px 0 40px' }}>
          <div style={S.container}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 40, marginBottom: 48 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-dm-serif)', fontSize: 24, color: '#F8FAFC', marginBottom: 8 }}>Voko</div>
                <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.6 }}>Dicta. Convierte. Envía.</p>
              </div>
              <div>
                <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>Producto</div>
                {['Cómo funciona', 'Precios', 'Modo Negociación', 'Perfil de voz'].map(l => (
                  <div key={l} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ fontSize: 14, color: '#94A3B8', textDecoration: 'none' }}>{l}</a>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>Legal</div>
                {['Privacidad', 'Términos de uso', 'Cookies'].map(l => (
                  <div key={l} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ fontSize: 14, color: '#94A3B8', textDecoration: 'none' }}>{l}</a>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 11, fontFamily: 'var(--font-dm-mono)', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>Acceso</div>
                {['Iniciar sesión', 'Crear cuenta', 'Recuperar acceso'].map(l => (
                  <div key={l} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ fontSize: 14, color: '#94A3B8', textDecoration: 'none' }}>{l}</a>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
              <span style={{ fontSize: 13, color: '#475569', fontFamily: 'var(--font-dm-mono)' }}>Voko · © 2026 — Dicta. Convierte. Envía.</span>
              <span style={{ fontSize: 13, color: '#475569', fontFamily: 'var(--font-dm-mono)' }}>voko.lat</span>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}
