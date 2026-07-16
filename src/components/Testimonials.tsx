import { memo, useRef } from 'react'
import { motion, useInView } from 'motion/react'

const testimonials = [
  {
    name: 'PRIYA SHARMA',
    location: 'FORTUNE PREMIER RESIDENT',
    text: '"Moving into Fortune Premier was the best decision our family made. The quality of construction is unmatched and the community is simply beautiful."',
  },
  {
    name: 'RAVI KRISHNA',
    location: 'FORTUNE PRIDE RESIDENT',
    text: '"From blueprint to possession, Fortune Infra was transparent and professional at every step. We are beyond happy with our home."',
  },
  {
    name: 'ANITA REDDY',
    location: 'FORTUNE PREMIER RESIDENT',
    text: '"The amenities, the design, the location — Fortune Infra delivers on every promise. Truly a home for life."',
  },
  {
    name: 'SURESH BABU',
    location: 'FORTUNE PRIDE RESIDENT',
    text: '"I have visited many projects across Hyderabad. None match the attention to detail and craftsmanship that Fortune Infra brings."',
  },
]

const Testimonials = memo(function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section style={{ backgroundColor: 'var(--bg-surface)', padding: '100px 6vw' }}>
      <motion.div
        ref={headerRef}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 40 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '48px' }}
      >
        <span style={{ fontSize: '8.5px', letterSpacing: '0.4em', color: 'var(--accent)' }}>
          TESTIMONIALS
        </span>
        <h2 style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          marginTop: '12px',
          marginBottom: 0,
        }}>
          WHAT OUR{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>HOMEOWNERS</em>{' '}SAY
        </h2>
        <div style={{ width: '48px', height: '2px', background: 'var(--accent)', marginTop: '20px' }} />
      </motion.div>

      <div
        className="scrollbar-hide"
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '24px',
          paddingBottom: '8px',
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="glass-card"
            style={{
              scrollSnapAlign: 'start',
              flexShrink: 0,
              width: 'clamp(300px, 38vw, 440px)',
              padding: '40px',
            }}
          >
            <div style={{
              fontSize: '64px',
              color: 'var(--accent)',
              opacity: 0.4,
              lineHeight: 0.8,
              marginBottom: '16px',
              fontFamily: 'Georgia, serif',
            }}>
              "
            </div>
            <p style={{
              fontSize: 'clamp(13px, 1.1vw, 16px)',
              lineHeight: 1.75,
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-body)',
              textTransform: 'none',
              letterSpacing: '0.02em',
              margin: 0,
            }}>
              {t.text}
            </p>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--text-primary)', marginTop: '28px', fontWeight: 600 }}>
              {t.name}
            </div>
            <div style={{ fontSize: '8.5px', letterSpacing: '0.22em', color: 'var(--accent)', marginTop: '4px' }}>
              {t.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
})

export default Testimonials
