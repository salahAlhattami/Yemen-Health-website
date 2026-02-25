import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, delay = 0, y = 28, style = {} }) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity .7s ${delay}s ease, transform .7s ${delay}s ease`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
