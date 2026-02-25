import { useState, useEffect } from 'react'
import { C, F } from '../theme'
import { LOGO_COLOR } from '../assets/images'

const links = [
  ['portals',    'المنصة'],
  ['exhibition', 'المعرض'],
  ['directory',  'الدليل الطبي'],
  ['jobs',       'التوظيف'],
  ['tenders',    'المناقصات'],
  ['about',      'نسخ سابقة'],
]

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 55)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, right: 0, left: 0, zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,.98)' : 'rgba(255,255,255,.96)',
        backdropFilter: 'blur(20px)',
        borderBottom: `3px solid ${C.teal}`,
        boxShadow: scrolled ? `0 4px 30px ${C.teal}22` : 'none',
        padding: '0 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 72, fontFamily: F, direction: 'rtl',
        transition: 'all .3s',
      }}>
        {/* LOGO */}
        <div onClick={() => go('hero')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <img
            src={LOGO_COLOR}
            alt="Yemen Health"
            style={{ height: 48, width: 'auto', objectFit: 'contain', display: 'block' }}
          />
        </div>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '1.6rem', alignItems: 'center' }}>
          {links.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: F, fontWeight: 700, fontSize: '.84rem',
                color: active === id ? C.teal : C.g7,
                borderBottom: `2px solid ${active === id ? C.teal : 'transparent'}`,
                paddingBottom: 2, transition: 'all .2s',
              }}
              onMouseEnter={e => { e.target.style.color = C.teal; e.target.style.borderBottomColor = C.teal }}
              onMouseLeave={e => { e.target.style.color = active === id ? C.teal : C.g7; e.target.style.borderBottomColor = active === id ? C.teal : 'transparent' }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => go('register')}
          style={{
            background: `linear-gradient(135deg,${C.teal},${C.tealLt})`,
            color: '#fff', border: 'none',
            padding: '.6rem 1.6rem', borderRadius: 50,
            fontFamily: F, fontWeight: 800, fontSize: '.88rem',
            cursor: 'pointer',
            boxShadow: `0 4px 16px ${C.teal}44`,
            transition: 'transform .2s, box-shadow .2s',
          }}
          onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = `0 6px 24px ${C.teal}55` }}
          onMouseLeave={e => { e.target.style.transform = ''; e.target.style.boxShadow = `0 4px 16px ${C.teal}44` }}
        >
          سجّل الآن ←
        </button>
      </nav>
    </>
  )
}
