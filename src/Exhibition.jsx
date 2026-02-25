import Reveal from './Reveal'
import { C, F } from '../theme'
import { IMG_HERO2, IMG_OPENING } from '../assets/images'

const packages = [
  { name: 'العارضون',       price: '2,000',  icon: '🏪', color: C.g5 },
  { name: 'الراعي الفضي',  price: '4,000',  icon: '🥈', color: '#94a3b8' },
  { name: 'الراعي الذهبي', price: '6,000',  icon: '🥇', color: C.gold, featured: true },
  { name: 'البلاتيني',     price: '10,000', icon: '💎', color: '#7c3aed' },
  { name: 'الاستراتيجي',  price: '15,000', icon: '🏆', color: C.teal },
]

export default function Exhibition() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="exhibition" style={{
      padding: '5.5rem 2rem',
      background: C.tealDeep,
      fontFamily: F, direction: 'rtl',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${IMG_OPENING})`,
        backgroundSize: 'cover', backgroundPosition: 'center', opacity: .08,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(to bottom, ${C.tealDeep}f5, ${C.tealDeep})`,
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(44,196,178,.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(44,196,178,.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
      }} />
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: `radial-gradient(circle, ${C.teal}1e, transparent 70%)`,
        top: -250, left: -200,
      }} />

      <div style={{ maxWidth: 1320, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Top row: info + stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '4rem', alignItems: 'center', marginBottom: '4.5rem',
        }}>
          <Reveal>
            <span style={{
              display: 'inline-block',
              background: 'rgba(44,196,178,.2)', color: C.tealLt,
              padding: '.38rem 1.1rem', borderRadius: 50,
              fontSize: '.8rem', fontWeight: 700, marginBottom: '1.1rem',
            }}>
              🏥 معرض يمن هيلث 2026
            </span>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 900,
              color: '#fff', lineHeight: 1.25, marginBottom: '1.1rem',
            }}>
              النسخة <span style={{ color: C.tealLt }}>الثالثة</span><br />
              أكبر وأقوى
            </h2>
            <p style={{ color: C.g3, lineHeight: 1.95, marginBottom: '2rem', fontSize: '.96rem' }}>
              بعد نجاح استثنائي في 2024 و2025، يعود معرض يمن هيلث بنسخة ثالثة أكثر شمولاً وتأثيراً. ثلاثة أيام من المعرض والمؤتمرات والندوات التخصصية ولقاءات B2B.
            </p>
            <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
              {['6–8 أكتوبر 2026', 'صالة أوركيد · صنعاء', 'النسخة الثالثة'].map(tag => (
                <span key={tag} style={{
                  background: 'rgba(255,255,255,.08)',
                  border: `1px solid ${C.tealLt}44`,
                  color: C.tealLt, padding: '.4rem .95rem',
                  borderRadius: 50, fontSize: '.8rem', fontWeight: 700,
                }}>
                  ✓ {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={.15}>
            <div style={{ position: 'relative' }}>
              <img
                src={IMG_HERO2} alt="Yemen Health Exhibition"
                style={{ width: '100%', height: 340, objectFit: 'cover', borderRadius: 20 }}
              />
              <div style={{ position: 'absolute', inset: 0, borderRadius: 20, background: 'rgba(8,61,54,.3)' }} />
              {/* Stats overlay */}
              <div style={{
                position: 'absolute', bottom: 20, right: 18, left: 18,
                background: 'rgba(8,61,54,.9)', backdropFilter: 'blur(12px)',
                borderRadius: 14, padding: '1rem 1.4rem',
                border: `1px solid ${C.teal}44`,
                display: 'flex', justifyContent: 'space-around',
              }}>
                {[['7,000+','زائر'],[' 18','شركة'],['+25','صفقة']].map(([n,l]) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <div style={{ color: C.tealLt, fontWeight: 900, fontSize: '1.4rem' }}>{n}</div>
                    <div style={{ color: C.g3, fontSize: '.73rem' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Packages */}
        <Reveal style={{ textAlign: 'center', marginBottom: '1.4rem' }}>
          <h3 style={{ color: '#fff', fontWeight: 800, fontSize: '1.15rem' }}>
            باقات الرعاية الاستثمارية
          </h3>
        </Reveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1.1rem', marginBottom: '2.5rem',
        }}>
          {packages.map((p, i) => (
            <Reveal key={i} delay={i * .07}>
              <div style={{
                background: p.featured ? C.gold : 'rgba(255,255,255,.05)',
                border: `2px solid ${p.featured ? C.goldLt : 'rgba(255,255,255,.13)'}`,
                borderRadius: 18, padding: '1.4rem 1rem', textAlign: 'center',
                transform: p.featured ? 'scale(1.07)' : 'none',
                transition: 'transform .25s',
              }}
                onMouseEnter={e => !p.featured && (e.currentTarget.style.background = 'rgba(255,255,255,.1)')}
                onMouseLeave={e => !p.featured && (e.currentTarget.style.background = 'rgba(255,255,255,.05)')}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '.55rem' }}>{p.icon}</span>
                <div style={{ color: p.featured ? C.dark : '#fff', fontWeight: 800, fontSize: '.82rem', marginBottom: '.45rem' }}>{p.name}</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: p.featured ? C.dark : p.color }}>
                  ${p.price}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ textAlign: 'center' }}>
          <button
            onClick={() => go('register')}
            style={{
              background: `linear-gradient(135deg, ${C.gold}, ${C.goldLt})`,
              color: C.dark, border: 'none',
              padding: '.95rem 2.8rem', borderRadius: 50,
              fontFamily: F, fontWeight: 800, fontSize: '1.02rem', cursor: 'pointer',
              boxShadow: `0 8px 28px ${C.gold}44`, transition: 'transform .2s',
            }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform = ''}
          >
            احجز باقتك الآن ←
          </button>
        </Reveal>

      </div>
    </section>
  )
}
