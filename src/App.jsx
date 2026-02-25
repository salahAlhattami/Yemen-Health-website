import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import Portals from './components/Portals'
import Exhibition from './components/Exhibition'
import Directory from './components/Directory'
import JobsTenders from './components/JobsTenders'
import About from './components/About'
import Register from './components/Register'
import Footer from './components/Footer'

const SECTIONS = ['hero','portals','exhibition','directory','jobs','tenders','about','register']

export default function App() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const handler = () => {
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el) {
          const r = el.getBoundingClientRect()
          if (r.top <= 80 && r.bottom >= 80) { setActive(id); break }
        }
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div style={{ direction: 'rtl', fontFamily: "'Cairo', sans-serif" }}>
      <Navbar active={active} />
      <Hero />
      <StatsStrip />
      <Portals />
      <Exhibition />
      <Directory />
      <JobsTenders />
      <About />
      <Register />
      <Footer />
    </div>
  )
}
