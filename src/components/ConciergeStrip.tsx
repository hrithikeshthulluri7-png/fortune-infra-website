import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export default function ConciergeStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section style={{
      background: 'linear-gradient(135deg, #1a1208 0%, #0c0c0e 100%)',
      borderTop: '1px solid rgba(201,169,110,0.15)',
      padding: '80px 6vw',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 80% 50%, rgba(201,169,110,0.07) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        ref={ref}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* Left */}
        <div>
          <div style={{ fontSize: '8.5px', letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: '12px' }}>
            READY TO FIND YOUR HOME?
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 52px)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            margin: 0,
          }}>
            LET'S BEGIN YOUR{' '}
            <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>JOURNEY</em>
          </h2>
          <p style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-body)',
            marginTop: '12px',
            textTransform: 'none',
            letterSpacing: '0.02em',
            marginBottom: 0,
          }}>
            Our team is ready to guide you — from site visit to possession.
          </p>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href="tel:+919849166855"
            style={{
              background: 'var(--accent)',
              color: 'var(--bg-base)',
              padding: '15px 32px',
              fontSize: '9.5px',
              letterSpacing: '0.2em',
              fontWeight: 600,
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            SCHEDULE A SITE VISIT
          </a>
          <a
            href="tel:+919849166855"
            style={{
              border: '1px solid rgba(201,169,110,0.35)',
              color: 'var(--accent)',
              padding: '15px 32px',
              fontSize: '9.5px',
              letterSpacing: '0.2em',
              borderRadius: '2px',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              display: 'inline-block',
              textDecoration: 'none',
            }}
          >
            CALL US NOW
          </a>
        </div>
      </motion.div>
    </section>
  )
}
