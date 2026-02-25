import { C, F } from '../theme'
import { LOGO_COLOR } from '../assets/images'

const cols = [
  { h: 'البوابة',    links: ['المعرض الطبي', 'الدليل الطبي', 'التوظيف', 'المناقصات'] },
  { h: 'المعرض',    links: ['باقات الرعاية', 'البرنامج التفصيلي', 'التسجيل', 'النسخ السابقة'] },
  { h: 'تواصل معنا', links: ['📞 +967 777 771 233', '📞 +967 77 909 6 909', '✉️ info@yemen-health.com', '🌐 www.yemen-health.com'] },
]

export default function Footer() {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{
      background: C.dark,
      borderTop: `3px solid ${C.teal}`,
      padding: '3.5rem 2.5rem 1.8rem',
      fontFamily: F, direction: 'rtl',
    }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3.5rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <img
              src={LOGO_COLOR} alt="Yemen Health"
              style={{ height: 56, width: 'auto', objectFit: 'contain', marginBottom: '1rem', filter: 'brightness(1.1)' }}
            />
            <p style={{ color: C.g5, fontSize: '.82rem', lineHeight: 1.95, maxWidth: 280 }}>
              بوابة اليمن الشاملة للقطاع الصحي<br />
              معرض · دليل · توظيف · مناقصات
            </p>
            <div style={{ display: 'flex', gap: '.8rem', marginTop: '1.3rem' }}>
              {['🐦', '📘', '💼', '📸'].map((icon, i) => (
                <div key={i} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255,255,255,.08)',
                  border: `1px solid rgba(255,255,255,.12)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', fontSize: '1rem', transition: 'background .2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = `${C.teal}33`}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {cols.map((col, i) => (
            <div key={i}>
              <h4 style={{ color: '#fff', fontWeight: 800, fontSize: '.9rem', marginBottom: '1.2rem' }}>{col.h}</h4>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map((l, j) => (
                  <li
                    key={j}
                    style={{ color: C.g5, fontSize: '.82rem', marginBottom: '.6rem', cursor: 'pointer', transition: 'color .2s' }}
                    onMouseEnter={e => e.target.style.color = C.tealLt}
                    onMouseLeave={e => e.target.style.color = C.g5}
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,.08)',
          paddingTop: '1.6rem',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <span style={{ color: C.g5, fontSize: '.77rem' }}>
            © 2026 معرض يمن هيلث الطبي — جميع الحقوق محفوظة
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['hero','portals','exhibition','register'].map(id => (
              <button key={id} onClick={() => go(id)} style={{
                background: 'none', border: 'none', color: C.g5,
                fontFamily: F, fontSize: '.77rem', cursor: 'pointer', transition: 'color .2s',
              }}
                onMouseEnter={e => e.target.style.color = C.tealLt}
                onMouseLeave={e => e.target.style.color = C.g5}
              >
                ↑ أعلى
              </button>
            ))}
            <span style={{ color: C.g5, fontSize: '.77rem' }}>النسخة الثالثة | أكتوبر 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
