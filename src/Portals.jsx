import Reveal from './Reveal'
import { C, F } from '../theme'
import { IMG_HERO1, IMG_BOOTH, IMG_SPEAKER, IMG_CEREMONY } from '../assets/images'

const portals = [
  {
    id: 'exhibition', icon: '🏥', title: 'معرض يمن هيلث', sub: 'أكتوبر 2026 · صنعاء',
    desc: 'أكبر تجمع طبي في اليمن — 3 أيام من المعرض والمؤتمرات وورش العمل والصفقات التجارية وفرص الاستثمار الصحي.',
    color: C.teal, photo: IMG_HERO1, tag: 'النسخة الثالثة',
    stats: [{ n: '+7K', l: 'زائر' }, { n: '18+', l: 'شركة' }, { n: '3', l: 'أيام' }],
    cta: 'استكشف المعرض',
  },
  {
    id: 'directory', icon: '📚', title: 'الدليل الطبي', sub: 'دليل شامل للقطاع',
    desc: 'قاعدة بيانات متكاملة وقابلة للبحث لشركات الأجهزة الطبية والأدوية والمستشفيات والعيادات في اليمن.',
    color: '#2563eb', photo: IMG_BOOTH, tag: '+200 مدخل',
    stats: [{ n: '200+', l: 'شركة' }, { n: '50+', l: 'منتج' }, { n: '6', l: 'تخصصات' }],
    cta: 'تصفّح الدليل',
  },
  {
    id: 'jobs', icon: '💼', title: 'بوابة التوظيف', sub: 'وظائف القطاع الصحي',
    desc: 'آلاف فرص العمل في المستشفيات والمراكز الصحية وشركات الأجهزة الطبية والصيدليات والمختبرات.',
    color: '#16a34a', photo: IMG_SPEAKER, tag: 'وظائف حديثة',
    stats: [{ n: '500+', l: 'وظيفة' }, { n: '100+', l: 'جهة' }, { n: '15+', l: 'تخصص' }],
    cta: 'ابحث عن وظيفة',
  },
  {
    id: 'tenders', icon: '📋', title: 'المناقصات', sub: 'فرص التوريد والعطاءات',
    desc: 'مناقصات توريد الأجهزة والمستلزمات الطبية والأدوية للمستشفيات الحكومية والخاصة والمنظمات الدولية.',
    color: C.gold, photo: IMG_CEREMONY, tag: 'تحديث يومي',
    stats: [{ n: '50+', l: 'مناقصة' }, { n: '30+', l: 'جهة' }, { n: 'يومي', l: 'تحديث' }],
    cta: 'عرض المناقصات',
  },
]

export default function Portals() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="portals" style={{ padding: '5.5rem 2rem', background: C.off, fontFamily: F, direction: 'rtl' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>

        <Reveal style={{ textAlign: 'center', marginBottom: '3.8rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '.5rem',
            background: C.tealPale, color: C.teal,
            padding: '.38rem 1.1rem', borderRadius: 50,
            fontSize: '.8rem', fontWeight: 700, marginBottom: '1rem',
          }}>
            ✨ منصة واحدة — كل ما تحتاجه
          </div>
          <h2 style={{
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 900,
            color: C.dark, marginBottom: '.8rem',
          }}>
            بوابة <span style={{ color: C.teal }}>يمن هيلث</span> الشاملة
          </h2>
          <p style={{ color: C.g5, fontSize: '.96rem', lineHeight: 1.9, maxWidth: 580, margin: '0 auto' }}>
            أربعة محاور متكاملة تغطي جميع احتياجات القطاع الصحي اليمني تحت سقف رقمي واحد
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {portals.map((p, i) => (
            <Reveal key={p.id} delay={i * .1}>
              <div
                onClick={() => go(p.id)}
                style={{
                  background: '#fff', borderRadius: 24, overflow: 'hidden',
                  border: '1px solid #e8f0f0',
                  boxShadow: '0 4px 30px rgba(26,158,143,.06)',
                  cursor: 'pointer', transition: 'transform .3s, box-shadow .3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-7px)'
                  e.currentTarget.style.boxShadow = `0 22px 60px ${p.color}22`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = '0 4px 30px rgba(26,158,143,.06)'
                }}
              >
                {/* Photo header */}
                <div style={{ position: 'relative', height: 215, overflow: 'hidden' }}>
                  <img
                    src={p.photo} alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform .5s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.target.style.transform = ''}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${p.color}e0, transparent 50%)` }} />
                  <div style={{
                    position: 'absolute', top: 14, right: 14,
                    background: 'rgba(255,255,255,.18)', backdropFilter: 'blur(8px)',
                    color: '#fff', padding: '.3rem .85rem', borderRadius: 50,
                    fontSize: '.73rem', fontWeight: 700, border: '1px solid rgba(255,255,255,.3)',
                  }}>
                    {p.tag}
                  </div>
                  <div style={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', alignItems: 'center', gap: '.55rem' }}>
                    <span style={{ fontSize: '2rem' }}>{p.icon}</span>
                    <div>
                      <div style={{ color: '#fff', fontWeight: 900, fontSize: '1.15rem' }}>{p.title}</div>
                      <div style={{ color: 'rgba(255,255,255,.8)', fontSize: '.77rem' }}>{p.sub}</div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div style={{ padding: '1.6rem' }}>
                  <p style={{ color: C.g7, fontSize: '.88rem', lineHeight: 1.9, marginBottom: '1.3rem' }}>{p.desc}</p>

                  <div style={{ display: 'flex', gap: '.8rem', marginBottom: '1.4rem' }}>
                    {p.stats.map((s, j) => (
                      <div key={j} style={{
                        flex: 1, background: `${p.color}12`,
                        borderRadius: 10, padding: '.55rem .8rem', textAlign: 'center',
                      }}>
                        <div style={{ fontSize: '1.15rem', fontWeight: 900, color: p.color }}>{s.n}</div>
                        <div style={{ fontSize: '.68rem', color: C.g5 }}>{s.l}</div>
                      </div>
                    ))}
                  </div>

                  <button style={{
                    width: '100%', padding: '.78rem',
                    background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
                    color: '#fff', border: 'none', borderRadius: 12,
                    fontFamily: F, fontWeight: 800, fontSize: '.92rem', cursor: 'pointer',
                    transition: 'opacity .2s, transform .2s',
                  }}
                    onMouseEnter={e => { e.target.style.opacity = '.88'; e.target.style.transform = 'scale(1.02)' }}
                    onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = '' }}
                  >
                    {p.cta} ←
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
