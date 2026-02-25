import Reveal from './Reveal'
import { C, F } from '../theme'

const stats = [
  { icon: '👥', n: '+7,000', l: 'زائر في 2025' },
  { icon: '🏢', n: '18',     l: 'شركة مستلزمات' },
  { icon: '💊', n: '7',      l: 'مصانع أدوية' },
  { icon: '🤝', n: '+25',    l: 'صفقة تجارية' },
  { icon: '🎙️', n: '20',     l: 'حلقة بودكاست' },
  { icon: '6️⃣',  n: '6',      l: 'ورش عمل' },
]

export default function StatsStrip() {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${C.teal}, ${C.tealLt})`,
      padding: '2.2rem 1rem', direction: 'rtl', fontFamily: F,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,255,255,.04) 10px,rgba(255,255,255,.04) 20px)',
      }} />
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-around',
        flexWrap: 'wrap', gap: '1.2rem', position: 'relative',
      }}>
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * .07} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '.25rem' }}>{s.icon}</div>
            <div style={{ fontSize: '2.1rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.88)', marginTop: '.2rem' }}>{s.l}</div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
