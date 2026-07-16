import { useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'

export default function LifestyleStrip() {
  const imgRef = useRef<HTMLImageElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const textInView = useInView(sectionRef, { once: true, margin: '-80px' })

  useEffect(() => {
    const onScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={sectionRef}
      style={{ height: '60vh', overflow: 'hidden', position: 'relative' }}
    >
      <img
        ref={imgRef}
        src="/assets/img-balcony.jpeg"
        alt="Family on balcony"
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '120%',
          objectFit: 'cover',
          objectPosition: 'center 30%',
          top: '-10%',
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.45)',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
      }}>
        <motion.div
          animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 40 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ fontSize: '8.5px', letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: '16px' }}>
            THE FORTUNE INFRA LIFE
          </div>
          <h3 style={{
            fontSize: 'clamp(32px, 4.5vw, 60px)',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-0.015em',
            margin: 0,
          }}>
            WHERE FAMILY{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>THRIVES</em>
          </h3>
          <p style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.12em',
            marginTop: '16px',
            marginBottom: 0,
          }}>
            SPACES BUILT FOR LAUGHTER, WARMTH, AND EVERY MILESTONE THAT MATTERS.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
