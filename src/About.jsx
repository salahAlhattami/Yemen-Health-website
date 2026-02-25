import Reveal from './Reveal'
import { C, F } from '../theme'
import { IMG_OPENING, IMG_SPEAKER, IMG_CEREMONY } from '../assets/images'

const editions = [
  {
    year: '2024', label: 'الانطلاقة الأولى',
    n: '+1,500', u: 'زائر', color: C.teal,
    photo: IMG_OPENING, icon: '🚀',
    desc: 'أول معرض طبي متكامل في اليمن. نسخة تأسيسية ناجحة بحضور المسؤولين ونخبة الشركات الطبية والصيدلانية والمستلزمات.',
    highlights: ['50+ شركة', '3 رعاة ألماسيين', 'ورش متخصصة'],
  },
  {
    year: '2025', label: 'عام التوسع والتميّز',
    n: '+7,000', u: 'زائر', color: C.gold,
    photo: IMG_SPEAKER, icon: '📈',
    desc: 'القفزة الكبرى — حضور وزير الصحة والمسؤولين الكبار. 7 مصانع أدوية، 18 شركة مستلزمات، وأكثر من 25 صفقة تجارية مُبرمة.',
    highlights: ['7,000+ زائر', '25+ صفقة', '20 بودكاست'],
  },
  {
    year: '2026', label: 'المرحلة الثالثة',
    n: 'قادم', u: '✨', color: C.tealLt,
    photo: IMG_CEREMONY, icon: '🌟',
    desc: 'النسخة الثالثة والأكثر طموحاً — منصة رقمية شاملة تضم المعرض والدليل الطبي وبوابة التوظيف والمناقصات.',
    highlights: ['منصة رقمية', 'أكبر حضور', 'توسع إقليمي'],
  },
]

export default function About() {
  return (
    <section id="about" style={{
      padding: '5.5rem 2rem',
      background: C.dark,
      fontFamily: F, direction: 'rtl',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: `radial-gradient(circle, ${C.teal}18, transparent 70%)`,
        top: -200, right: -200,
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: `radial-gradient(circle, ${C.gold}10, transparent 70%)`,
        bottom: -150, left: -100,
      }} />

      <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <Reveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            background: 'rgba(44,196,178,.15)', color: C.tealLt,
            padding: '.38rem 1.1rem', borderRadius: 50,
            fontSize: '.8rem', fontWeight: 700, marginBottom: '1rem',
          }}>
            🏆 رحلتنا
          </div>
          <h2 style={{
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 900,
            color: '#fff', marginBottom: '.8rem',
          }}>
            رحلة <span style={{ color: C.tealLt }}>نجاح</span> مستمرة
          </h2>
          <p style={{ color: C.g3, fontSize: '.95rem', lineHeight: 1.9, maxWidth: 580, margin: '0 auto' }}>
            من الانطلاقة الأولى إلى البوابة الوطنية الشاملة للقطاع الصحي
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.8rem' }}>
          {editions.map((ed, i) => (
            <Reveal key={i} delay={i * .12}>
              <div
                style={{
                  background: 'rgba(255,255,255,.04)',
                  border: `1px solid ${ed.color}33`,
                  borderRadius: 22, overflow: 'hidden',
                  transition: 'transform .3s, box-shadow .3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = `0 20px 50px ${ed.color}22`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                }}
              >
                {/* Photo */}
                <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                  <img
                    src={ed.photo} alt={ed.year}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: .65, transition: 'transform .5s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.target.style.transform = ''}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(to top, ${C.dark}ee, transparent 50%)`,
                  }} />
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    background: ed.color, color: ed.year === '2025' ? C.dark : '#fff',
                    padding: '.32rem .95rem', borderRadius: 50,
                    fontSize: '.8rem', fontWeight: 900,
                  }}>
                    {ed.year}
                  </div>
                  <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
                    <div style={{ color: '#fff', fontWeight: 900, fontSize: '1.05rem' }}>{ed.label}</div>
                    <div style={{ color: ed.color, fontWeight: 900, fontSize: '1.9rem', lineHeight: 1.1 }}>
                      {ed.n} <span style={{ fontSize: '.9rem', fontWeight: 400, color: C.g3 }}>{ed.u}</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ color: C.g3, fontSize: '.84rem', lineHeight: 1.85, marginBottom: '1.2rem' }}>{ed.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                    {ed.highlights.map(h => (
                      <span key={h} style={{
                        background: `${ed.color}18`,
                        border: `1px solid ${ed.color}33`,
                        color: ed.color, padding: '.25rem .75rem',
                        borderRadius: 50, fontSize: '.73rem', fontWeight: 700,
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
