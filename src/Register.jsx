import Reveal from './Reveal'
import { C, F } from '../theme'
import { LOGO_WHITE, IMG_HERO1 } from '../assets/images'

const cards = [
  { icon: '🏪', title: 'راعٍ / عارض',    desc: 'احجز باقة الرعاية للمعرض' },
  { icon: '👤', title: 'زائر مهني',      desc: 'سجّل مجاناً واحضر المعرض' },
  { icon: '🏢', title: 'شريك مؤسسي',    desc: 'شراكة استراتيجية متكاملة' },
]

export default function Register() {
  return (
    <section id="register" style={{
      padding: '6rem 2rem',
      fontFamily: F, direction: 'rtl',
      position: 'relative', overflow: 'hidden',
      background: `linear-gradient(135deg, ${C.tealDeep}, ${C.tealMid})`,
    }}>
      {/* Bg image */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${IMG_HERO1})`,
        backgroundSize: 'cover', backgroundPosition: 'center', opacity: .1,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${C.tealDeep}f2, ${C.tealMid}e8)`,
      }} />
      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />
      {/* Orb */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: `radial-gradient(circle, ${C.tealLt}18, transparent 70%)`,
        top: -250, left: '-8%',
      }} />

      <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Reveal>
          {/* Logo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.2rem' }}>
            <img
              src={LOGO_WHITE} alt="Yemen Health"
              style={{ height: 78, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 4px 16px rgba(44,196,178,.5))' }}
            />
          </div>

          <h2 style={{
            fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', fontWeight: 900,
            color: '#fff', marginBottom: '1.1rem',
          }}>
            انضم إلى مجتمع<br />
            <span style={{ color: C.tealLt }}>يمن هيلث</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,.82)', fontSize: '1rem', lineHeight: 2,
            maxWidth: 600, margin: '0 auto 3.2rem',
          }}>
            سجّل الآن وكن جزءاً من أكبر منصة طبية في اليمن<br />
            معرض · دليل · توظيف · مناقصات
          </p>

          {/* Cards */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.3rem', maxWidth: 820, margin: '0 auto 3rem',
          }}>
            {cards.map((c, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,.1)',
                  border: '1px solid rgba(255,255,255,.22)',
                  borderRadius: 18, padding: '1.7rem 1.2rem',
                  cursor: 'pointer', transition: 'all .3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,.2)'
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,.2)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,.1)'
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                <span style={{ fontSize: '2.2rem', display: 'block', marginBottom: '.7rem' }}>{c.icon}</span>
                <div style={{ color: '#fff', fontWeight: 800, fontSize: '.95rem', marginBottom: '.4rem' }}>{c.title}</div>
                <div style={{ color: 'rgba(255,255,255,.65)', fontSize: '.8rem', lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '2.5rem',
            flexWrap: 'wrap', color: 'rgba(255,255,255,.68)', fontSize: '.85rem',
          }}>
            <span>📞 +967 777 771 233</span>
            <span>·</span>
            <span>✉️ info@yemen-health.com</span>
            <span>·</span>
            <span>🌐 www.yemen-health.com</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
