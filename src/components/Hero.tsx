import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { smoothScrollToElement } from '../utils/smoothScroll'

interface Props {
  menuOpen: boolean
}

const slides = [
  {
    video: '/assets/hero-dusk.mp4',
    headline1: 'BUILT',
    headline2: 'FOR LIFE.',
    sub: 'FORTUNE PREMIER · BACHUPALLY',
  },
  {
    video: '/assets/hero-interior.mp4',
    headline1: 'CRAFTED',
    headline2: 'FOR YOU.',
    sub: 'FORTUNE PRIDE · BACHUPALLY',
  },
  {
    video: '/assets/hero-aerial.mp4',
    headline1: 'RAISED TO',
    headline2: 'LAST.',
    sub: 'FORTUNE PRAISE & PRIME · BACHUPALLY',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const textVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function Hero({ menuOpen: _menuOpen }: Props) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(s => (s + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {/* Fixed video background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        {slides.map((slide, i) => (
          <div
            key={slide.video}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: activeSlide === i ? 1 : 0,
              transition: 'opacity 1.2s ease',
            }}
          >
            <video
              src={slide.video}
              autoPlay
              loop
              muted
              playsInline
              preload={i === 0 ? 'metadata' : 'none'}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
          </div>
        ))}

        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.65) 100%)',
        }} />

        {/* Left vignette */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, transparent 60%)',
        }} />
      </div>

      {/* Hero text block */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 20, pointerEvents: 'none' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              position: 'absolute',
              bottom: '14vh',
              left: 'clamp(24px, 6vw, 96px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              maxWidth: 'clamp(360px, 52vw, 700px)',
            }}
          >
            {/* Eyebrow */}
            <motion.div
              variants={textVariants}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}
            >
              <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
              <span style={{ fontSize: '8.5px', letterSpacing: '0.38em', color: 'var(--accent)' }}>
                {slides[activeSlide].sub}
              </span>
            </motion.div>

            {/* Headline line 1 */}
            <div style={{ overflow: 'hidden' }}>
              <motion.div
                variants={textVariants}
                style={{
                  fontSize: 'clamp(56px, 10.5vw, 148px)',
                  fontWeight: 700,
                  lineHeight: 0.88,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  textShadow: '0 4px 40px rgba(0,0,0,0.5)',
                  fontStyle: 'normal',
                }}
              >
                {slides[activeSlide].headline1}
              </motion.div>
            </div>

            {/* Headline line 2 */}
            <div style={{ overflow: 'hidden' }}>
              <motion.div
                variants={textVariants}
                style={{
                  fontSize: 'clamp(56px, 10.5vw, 148px)',
                  fontWeight: 700,
                  lineHeight: 0.88,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  textShadow: '0 4px 40px rgba(0,0,0,0.5)',
                  fontStyle: 'italic',
                }}
              >
                {slides[activeSlide].headline2}
              </motion.div>
            </div>

            {/* Subtext */}
            <motion.div
              variants={textVariants}
              style={{
                marginTop: '24px',
                fontSize: 'clamp(11px, 1.1vw, 14px)',
                color: 'rgba(245,243,239,0.72)',
                letterSpacing: '0.08em',
                lineHeight: 1.7,
                fontFamily: 'var(--font-body)',
                textTransform: 'uppercase',
                maxWidth: '520px',
              }}
            >
              BACHUPALLY'S MOST TRUSTED DEVELOPER. HOMES DESIGNED FOR EVERY GENERATION,
              BUILT WITH PRECISION AND DELIVERED WITH PRIDE.
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={textVariants}
              style={{ marginTop: '32px', display: 'flex', gap: '12px', pointerEvents: 'auto' }}
            >
              <button
                onClick={() => smoothScrollToElement('services')}
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg-base)',
                  padding: '13px 28px',
                  fontSize: '9.5px',
                  letterSpacing: '0.2em',
                  fontWeight: 600,
                  borderRadius: '2px',
                  cursor: 'pointer',
                  border: 'none',
                  fontFamily: 'inherit',
                  textTransform: 'uppercase',
                }}
              >
                EXPLORE PROJECTS
              </button>
              <a
                href="tel:+919849166855"
                style={{
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  padding: '13px 28px',
                  fontSize: '9.5px',
                  letterSpacing: '0.2em',
                  fontWeight: 500,
                  borderRadius: '2px',
                  cursor: 'pointer',
                  border: '1px solid rgba(245,243,239,0.3)',
                  fontFamily: 'inherit',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                ENQUIRE NOW
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'fixed',
        bottom: '6vh',
        right: '4vw',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: '8px',
        alignItems: 'center',
        pointerEvents: 'auto',
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            style={{
              width: activeSlide === i ? '28px' : '12px',
              height: '3px',
              background: activeSlide === i ? 'var(--accent)' : 'rgba(255,255,255,0.3)',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.5s ease',
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'fixed',
        bottom: '6vh',
        left: 'clamp(24px, 6vw, 96px)',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center',
      }}>
        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.2)', position: 'relative', overflow: 'hidden' }}>
          <div
            className="scroll-dot"
            style={{ width: '3px', height: '3px', background: 'var(--accent)', borderRadius: '9999px' }}
          />
        </div>
        <span style={{
          fontSize: '8px',
          letterSpacing: '0.35em',
          color: 'rgba(255,255,255,0.4)',
          writingMode: 'vertical-rl',
        }}>
          SCROLL
        </span>
      </div>
    </>
  )
}
