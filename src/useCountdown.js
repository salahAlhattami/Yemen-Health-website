import { useEffect, useState } from 'react'

export function useCountdown(targetDate) {
  const [time, setTime] = useState({ d: '--', h: '--', m: '--', s: '--' })

  useEffect(() => {
    const pad = n => String(Math.floor(n)).padStart(2, '0')
    const tick = () => {
      const diff = new Date(targetDate) - new Date()
      if (diff <= 0) return setTime({ d: '00', h: '00', m: '00', s: '00' })
      setTime({
        d: pad(diff / 86400000),
        h: pad((diff % 86400000) / 3600000),
        m: pad((diff % 3600000) / 60000),
        s: pad((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return time
}
