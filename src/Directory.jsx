import Reveal from './Reveal'
import { C, F } from '../theme'
import { IMG_BOOTH } from '../assets/images'

const categories = [
  { icon: '💊', name: 'مصانع الأدوية',         count: '7+',   color: '#16a34a' },
  { icon: '🔬', name: 'الأجهزة والمستلزمات',  count: '18+',  color: C.teal },
  { icon: '🏥', name: 'المستشفيات والمراكز',  count: '7+',   color: '#2563eb' },
  { icon: '💻', name: 'برمجيات طبية',          count: '3+',   color: '#7c3aed' },
  { icon: '🧪', name: 'المختبرات',             count: '10+',  color: C.gold },
  { icon: '🏛️', name: 'الجهات الحكومية',       count: '5+',   color: '#dc2626' },
]

const mockEntries = [
  'شركة ناتكو الرازي — أدوية',
  'مؤسسة سام الطبية — أجهزة',
  'يمن سوفت — برمجيات طبية',
  'مستشفى الثورة — خدمات',
  'مختبر الأمل — تحاليل',
]

export default function Directory() {
  return (
    <section id="directory" style={{ padding: '5.5rem 2rem', background: '#fff', fontFamily: F, direction: 'rtl' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4.5rem', alignItems: 'center' }}>

          <Reveal>
            <span style={{
              display: 'inline-block', background: '#eff6ff', color: '#2563eb',
              padding: '.38rem 1.1rem', borderRadius: 50,
              fontSize: '.8rem', fontWeight: 700, marginBottom: '1.1rem',
            }}>
              📚 الدليل الطبي
            </span>
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 900,
              color: C.dark, lineHeight: 1.3, marginBottom: '1rem',
            }}>
              دليل شامل لكل<br />
              <span style={{ color: '#2563eb' }}>شركات القطاع الصحي</span>
            </h2>
            <p style={{ color: C.g5, lineHeight: 1.95, marginBottom: '2.2rem', fontSize: '.93rem' }}>
              قاعدة بيانات متكاملة وقابلة للبحث تضم جميع شركات الأجهزة الطبية، مصانع الأدوية، المستشفيات، ووكالات المستلزمات الطبية في اليمن.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '.9rem' }}>
              {categories.map((c, i) => (
                <Reveal key={i} delay={i * .06}>
                  <div
                    style={{
                      background: `${c.color}0e`, border: `1px solid ${c.color}30`,
                      borderRadius: 14, padding: '1.1rem .9rem', textAlign: 'center',
                      cursor: 'pointer', transition: 'transform .2s, box-shadow .2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px)'
                      e.currentTarget.style.boxShadow = `0 8px 24px ${c.color}22`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = ''
                      e.currentTarget.style.boxShadow = ''
                    }}
                  >
                    <div style={{ fontSize: '1.6rem', marginBottom: '.35rem' }}>{c.icon}</div>
                    <div style={{ fontWeight: 800, fontSize: '.77rem', color: C.dark, marginBottom: '.2rem' }}>{c.name}</div>
                    <div style={{ fontWeight: 900, color: c.color, fontSize: '.88rem' }}>{c.count}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={.2}>
            <div style={{ position: 'relative' }}>
              <img
                src={IMG_BOOTH} alt="الدليل الطبي"
                style={{ width: '100%', borderRadius: 22, boxShadow: '0 20px 60px rgba(0,0,0,.12)' }}
              />

              {/* Floating search card */}
              <div style={{
                position: 'absolute', top: -22, left: -22,
                background: '#fff', borderRadius: 18,
                padding: '1.3rem 1.6rem',
                boxShadow: '0 12px 40px rgba(37,99,235,.15)',
                border: '1px solid #e8f0ff', minWidth: 230,
              }}>
                <div style={{ color: '#2563eb', fontWeight: 800, fontSize: '.86rem', marginBottom: '.7rem' }}>
                  🔍 ابحث في الدليل
                </div>
                {mockEntries.slice(0,3).map((e, i) => (
                  <div key={i} style={{
                    padding: '.4rem .6rem', borderRadius: 8,
                    background: i === 0 ? '#eff6ff' : 'transparent',
                    color: i === 0 ? '#2563eb' : C.g5,
                    fontSize: '.78rem', marginBottom: '.2rem',
                    fontWeight: i === 0 ? 700 : 400,
                    cursor: 'pointer',
                  }}>
                    {e}
                  </div>
                ))}
              </div>

              {/* Floating stat */}
              <div style={{
                position: 'absolute', bottom: -18, right: -18,
                background: '#2563eb', borderRadius: 14,
                padding: '.9rem 1.3rem', color: '#fff', textAlign: 'center',
              }}>
                <div style={{ fontWeight: 900, fontSize: '1.6rem', lineHeight: 1 }}>200+</div>
                <div style={{ fontSize: '.72rem', opacity: .88, marginTop: '.2rem' }}>مدخل في الدليل</div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
