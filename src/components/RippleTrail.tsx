import { useEffect, useRef } from 'react'

const POOL = 80
const SIZE = 22

export default function RippleTrail() {
  const dotsRef = useRef<HTMLDivElement[]>([])
  const coords = useRef<{ x: number; y: number }[]>(
    Array.from({ length: POOL }, () => ({ x: -200, y: -200 }))
  )
  const idx = useRef(0)
  const frame = useRef(0)

  useEffect(() => {
    const dots = Array.from({ length: POOL }, (_, i) => {
      const el = document.createElement('div')
      el.style.cssText = `
        position:fixed;pointer-events:none;border-radius:50%;z-index:9999;
        width:${SIZE}px;height:${SIZE}px;
        background:radial-gradient(circle,rgba(201,169,110,0.55) 0%,rgba(201,169,110,0) 70%);
        transform:translate(-50%,-50%) scale(0);
        transition:transform 0.15s cubic-bezier(0.19,1,0.22,1),opacity 0.4s ease;
        will-change:transform,opacity;
      `
      document.body.appendChild(el)
      dotsRef.current[i] = el
      return el
    })

    const onMove = (e: MouseEvent) => {
      const i = idx.current % POOL
      coords.current[i] = { x: e.clientX, y: e.clientY }
      idx.current++
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    const tick = () => {
      const cur = idx.current
      for (let i = 0; i < POOL; i++) {
        const age = cur - i
        if (age < 0 || age > POOL) continue
        const c = coords.current[i % POOL]
        const d = dotsRef.current[i]
        const scale = Math.max(0, 1 - age / POOL)
        d.style.left = c.x + 'px'
        d.style.top  = c.y + 'px'
        d.style.transform = `translate(-50%,-50%) scale(${scale})`
        d.style.opacity = String(scale * 0.8)
      }
      frame.current = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame.current)
      dots.forEach(d => d.remove())
    }
  }, [])

  return (
    <>
      <svg id="ripple-filter" aria-hidden>
        <defs>
          <filter id="liquid">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </>
  )
}
