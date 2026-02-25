import Reveal from './Reveal'
import { C, F } from '../theme'

const jobs = [
  { title: 'طبيب عام',              org: 'مركز سام الطبي · صنعاء',     type: 'دوام كامل', date: 'منذ يومين' },
  { title: 'صيدلاني أول',           org: 'صيدلية الشفاء · عدن',         type: 'دوام كامل', date: 'منذ 3 أيام' },
  { title: 'مهندس أجهزة طبية',      org: 'مؤسسة الطيب الطبية · صنعاء', type: 'عقد سنوي',  date: 'منذ أسبوع' },
  { title: 'ممرضة مؤهلة',           org: 'مستشفى الثورة · صنعاء',       type: 'دوام كامل', date: 'منذ 4 أيام' },
  { title: 'أخصائي مختبر',          org: 'مركز الإمل التشخيصي · تعز',   type: 'دوام كامل', date: 'منذ 5 أيام' },
]

const tenders = [
  { title: 'توريد أجهزة مختبرية شاملة', org: 'وزارة الصحة العامة', budget: '200,000$', deadline: '15 أكتوبر', type: 'حكومي' },
  { title: 'مستلزمات طبية للمستشفيات',  org: 'منظمة WHO اليمن',     budget: '500,000$', deadline: '20 أكتوبر', type: 'دولي' },
  { title: 'أجهزة تصوير بالأشعة',       org: 'مجموعة مستشفيات الصحة', budget: '150,000$', deadline: '30 أكتوبر', type: 'خاص' },
  { title: 'أدوية وعلاجات أساسية',       org: 'صندوق الأمم المتحدة',   budget: '350,000$', deadline: '10 نوفمبر', type: 'دولي' },
]

export default function JobsTenders() {
  return (
    <section id="jobs" style={{ padding: '5.5rem 2rem', background: C.off, fontFamily: F, direction: 'rtl' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>

        <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 900, color: C.dark, marginBottom: '.7rem' }}>
            التوظيف والمناقصات
          </h2>
          <p style={{ color: C.g5, fontSize: '.95rem', lineHeight: 1.9 }}>
            فرص حقيقية محدّثة يومياً في القطاع الصحي اليمني
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>

          {/* Jobs */}
          <Reveal>
            <div style={{
              background: '#fff', borderRadius: 22, padding: '2.2rem',
              border: '1px solid #e8f0f0',
              boxShadow: '0 4px 24px rgba(26,158,143,.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.6rem' }}>
                <h3 style={{ fontWeight: 900, fontSize: '1.05rem', color: C.dark }}>
                  💼 وظائف القطاع الصحي
                </h3>
                <span style={{
                  background: '#dcfce7', color: '#16a34a',
                  padding: '.28rem .75rem', borderRadius: 50,
                  fontSize: '.72rem', fontWeight: 700,
                }}>
                  محدّث يومياً
                </span>
              </div>

              {jobs.map((j, i) => (
                <div key={i} style={{
                  borderBottom: i < jobs.length - 1 ? '1px solid #f0f5f5' : 'none',
                  paddingBottom: '.95rem', marginBottom: '.95rem',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  cursor: 'pointer', transition: 'background .2s', borderRadius: 8, padding: '.5rem',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f8fffe'}
                  onMouseLeave={e => e.currentTarget.style.background = ''}
                >
                  <div>
                    <div style={{ fontWeight: 800, color: C.dark, fontSize: '.88rem', marginBottom: '.22rem' }}>{j.title}</div>
                    <div style={{ color: C.g5, fontSize: '.78rem' }}>{j.org}</div>
                  </div>
                  <div style={{ textAlign: 'left', flexShrink: 0, marginRight: '.5rem' }}>
                    <span style={{
                      background: '#f0fdf4', color: '#16a34a',
                      padding: '.2rem .65rem', borderRadius: 50,
                      fontSize: '.68rem', fontWeight: 700,
                      display: 'block', marginBottom: '.3rem',
                    }}>
                      {j.type}
                    </span>
                    <span style={{ color: C.g5, fontSize: '.7rem' }}>{j.date}</span>
                  </div>
                </div>
              ))}

              <button style={{
                width: '100%', padding: '.72rem',
                background: '#f0fdf4', color: '#16a34a',
                border: '2px solid #bbf7d0', borderRadius: 12,
                fontFamily: F, fontWeight: 800, fontSize: '.85rem', cursor: 'pointer',
                transition: 'all .2s',
              }}
                onMouseEnter={e => e.target.style.background = '#dcfce7'}
                onMouseLeave={e => e.target.style.background = '#f0fdf4'}
              >
                عرض جميع الوظائف (500+) ←
              </button>
            </div>
          </Reveal>

          {/* Tenders */}
          <Reveal delay={.1} id="tenders">
            <div style={{
              background: '#fff', borderRadius: 22, padding: '2.2rem',
              border: '1px solid #e8f0f0',
              boxShadow: '0 4px 24px rgba(26,158,143,.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.6rem' }}>
                <h3 style={{ fontWeight: 900, fontSize: '1.05rem', color: C.dark }}>
                  📋 المناقصات والعطاءات
                </h3>
                <span style={{
                  background: '#fef3c7', color: '#d97706',
                  padding: '.28rem .75rem', borderRadius: 50,
                  fontSize: '.72rem', fontWeight: 700,
                }}>
                  مفتوحة الآن
                </span>
              </div>

              {tenders.map((t, i) => (
                <div key={i} style={{
                  borderBottom: i < tenders.length - 1 ? '1px solid #f0f5f5' : 'none',
                  paddingBottom: '.95rem', marginBottom: '.95rem',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  cursor: 'pointer', transition: 'background .2s', borderRadius: 8, padding: '.5rem',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#fffdf5'}
                  onMouseLeave={e => e.currentTarget.style.background = ''}
                >
                  <div>
                    <div style={{ fontWeight: 800, color: C.dark, fontSize: '.88rem', marginBottom: '.22rem' }}>{t.title}</div>
                    <div style={{ color: C.g5, fontSize: '.78rem' }}>{t.org}</div>
                  </div>
                  <div style={{ textAlign: 'left', flexShrink: 0, marginRight: '.5rem' }}>
                    <div style={{ fontWeight: 900, color: C.gold, fontSize: '.9rem' }}>{t.budget}</div>
                    <div style={{ color: C.g5, fontSize: '.7rem', margin: '.15rem 0' }}>حتى {t.deadline}</div>
                    <span style={{
                      background: '#fef9ed', color: C.gold,
                      padding: '.15rem .55rem', borderRadius: 50,
                      fontSize: '.65rem', fontWeight: 700,
                    }}>
                      {t.type}
                    </span>
                  </div>
                </div>
              ))}

              <button style={{
                width: '100%', padding: '.72rem',
                background: '#fefce8', color: C.gold,
                border: `2px solid ${C.gold}55`, borderRadius: 12,
                fontFamily: F, fontWeight: 800, fontSize: '.85rem', cursor: 'pointer',
                transition: 'all .2s',
              }}
                onMouseEnter={e => e.target.style.background = '#fef9c3'}
                onMouseLeave={e => e.target.style.background = '#fefce8'}
              >
                عرض جميع المناقصات (50+) ←
              </button>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
