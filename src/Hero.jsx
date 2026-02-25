import { useState, useEffect } from 'react'
import { C, F } from '../theme'
import { useCountdown } from './useCountdown'
import { LOGO_WHITE, IMG_HERO1, IMG_HERO2, IMG_HERO3 } from '../assets/images'

const heroImages = [IMG_HERO1, IMG_HERO2, IMG_HERO3]

export default function Hero() {
  const cd = useCountdown('2026-10-05T09:00:00')
  const [imgIdx, setImgIdx] = useState(0)
  const [prevIdx, setPrevIdx] = useState(null)

  useEffect(() => {
    const id = setInterval(() => {
      setPrevIdx(i => i)
      setImgIdx(i => (i + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      direction: 'rtl', fontFamily: F,
      background: C.tealDeep,
    }}>

      {/* Background image slider */}
      {heroImages.map((src, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: i === imgIdx ? .18 : 0,
          transition: 'opacity 2s ease',
        }} />
      ))}

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(135deg, ${C.tealDeep}f5 0%, ${C.tealMid}e8 60%, ${C.dark}f0 100%)`,
      }} />

      {/* Animated grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(44,196,178,.07) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(44,196,178,.07) 1px, transparent 1px)`,
        backgroundSize: '55px 55px',
        animation: 'gridMove 20s linear infinite',
      }} />

      {/* Glowing orbs */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: `radial-gradient(circle, ${C.teal}2e, transparent 70%)`,
        top: -250, right: -200, animation: 'float1 10s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', width: 500, height: 500, borderRadius: '50%',
        background: `radial-gradient(circle, ${C.gold}1a, transparent 70%)`,
        bottom: -150, left: -100, animation: 'float2 13s ease-in-out infinite',
      }} />

      {/* Diagonal texture */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(44,196,178,.015) 40px,rgba(44,196,178,.015) 80px)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2, textAlign: 'center',
        padding: '8rem 2rem 5rem', maxWidth: 950, width: '100%',
      }}>

        {/* Real logo - big and prominent */}
        <div style={{
          display: 'flex', justifyContent: 'center', marginBottom: '1.8rem',
          animation: 'logoFloat 4s ease-in-out infinite',
        }}>
          <img
            src={LOGO_WHITE}
            alt="Yemen Health"
            style={{
              height: 100, width: 'auto', objectFit: 'contain',
              filter: 'drop-shadow(0 4px 24px rgba(44,196,178,.55))',
            }}
          />
        </div>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '.5rem',
          background: 'rgba(44,196,178,.15)', border: `1px solid ${C.tealLt}55`,
          color: C.tealLt, padding: '.4rem 1.2rem', borderRadius: 50,
          fontSize: '.8rem', fontWeight: 700, marginBottom: '1.8rem',
        }}>
          <span style={{ width: 8, height: 8, background: C.tealLt, borderRadius: '50%', animation: 'pulse 2s infinite' }} />
          النسخة الثالثة · أكتوبر 2026
        </div>

        {/* Main heading */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900,
          color: '#fff', lineHeight: 1.18, marginBottom: '1.2rem',
          textShadow: '0 4px 30px rgba(0,0,0,.4)',
        }}>
          <span style={{ color: C.tealLt }}>يمن هيلث</span><br />
          المنصة <span style={{ color: C.goldLt }}>الطبية</span> الشاملة
        </h1>
        <p style={{
          color: C.g3, fontSize: '1.05rem', lineHeight: 2,
          maxWidth: 620, margin: '0 auto 2.8rem',
        }}>
          معرض · دليل طبي · توظيف · مناقصات<br />
          كل ما يحتاجه القطاع الصحي اليمني في مكان واحد
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.2rem' }}>
          <button
            onClick={() => go('portals')}
            style={{
              background: `linear-gradient(135deg,${C.teal},${C.tealLt})`,
              color: '#fff', border: 'none', padding: '.95rem 2.3rem', borderRadius: 50,
              fontFamily: F, fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
              boxShadow: `0 8px 28px ${C.teal}55`, transition: 'transform .2s',
            }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.target.style.transform = ''}
          >
            🏥 اكتشف المنصة
          </button>
          <button
            onClick={() => go('register')}
            style={{
              background: 'rgba(255,255,255,.1)', color: '#fff',
              border: '2px solid rgba(255,255,255,.3)',
              padding: '.95rem 2.3rem', borderRadius: 50,
              fontFamily: F, fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
              backdropFilter: 'blur(8px)', transition: 'all .2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.18)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.1)'}
          >
            📋 سجّل مجاناً
          </button>
        </div>

        {/* Countdown */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '1.5rem',
          flexWrap: 'wrap', justifyContent: 'center',
          background: 'rgba(255,255,255,.06)',
          border: `1px solid ${C.tealLt}33`,
          borderRadius: 20, padding: '1.4rem 2.2rem',
          backdropFilter: 'blur(14px)',
        }}>
          <span style={{ color: C.tealLt, fontWeight: 700, fontSize: '.85rem' }}>⏱️ العدّ التنازلي</span>
          <div style={{ display: 'flex', gap: '.9rem' }}>
            {[['d','يوم'],['h','ساعة'],['m','دقيقة'],['s','ثانية']].map(([k, u]) => (
              <div key={k} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.2rem', fontWeight: 900, color: '#fff',
                  background: 'rgba(26,158,143,.25)', borderRadius: 10,
                  padding: '.3rem .9rem', minWidth: 62,
                  border: `1px solid ${C.tealLt}22`,
                }}>
                  {cd[k]}
                </div>
                <div style={{ fontSize: '.65rem', color: C.g5, marginTop: 3 }}>{u}</div>
              </div>
            ))}
          </div>
          <span style={{ color: C.g3, fontSize: '.82rem' }}>حتى النسخة الثالثة</span>
        </div>
      </div>

      {/* Image indicator dots */}
      <div style={{
        position: 'absolute', bottom: 70, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '.5rem',
      }}>
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setImgIdx(i)}
            style={{
              width: i === imgIdx ? 24 : 8, height: 8, borderRadius: 4,
              background: i === imgIdx ? C.tealLt : 'rgba(255,255,255,.3)',
              border: 'none', cursor: 'pointer', transition: 'all .4s',
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%',
        color: C.tealLt, fontSize: '.75rem', opacity: .7,
        animation: 'bounce 2s infinite',
      }}>
        ↓ استكشف
      </div>
    </section>
  )
}
