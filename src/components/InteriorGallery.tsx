import { memo, useRef } from 'react'
import { motion, useInView } from 'motion/react'

const images = [
  { src: '/assets/img-bedroom.jpeg', caption: 'MASTER BEDROOM' },
  { src: '/assets/img-kitchen.jpeg', caption: 'MODULAR KITCHEN' },
  { src: '/assets/img-dining.jpeg',  caption: 'DINING AREA' },
]

function GalleryCard({ item, index }: { item: typeof images[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      style={{
        height: 'clamp(260px, 35vh, 420px)',
        overflow: 'hidden',
        borderRadius: '3px',
        position: 'relative',
        cursor: 'pointer',
      }}
      whileHover="hover"
    >
      <motion.img
        src={item.src}
        alt={item.caption}
        loading="lazy"
        variants={{ hover: { scale: 1.04 } }}
        transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        className="glass-mid"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px',
        }}
      >
        <span style={{ fontSize: '9px', letterSpacing: '0.3em', color: 'var(--text-primary)' }}>
          {item.caption}
        </span>
      </div>
    </motion.div>
  )
}

const InteriorGallery = memo(function InteriorGallery() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section style={{ backgroundColor: 'var(--bg-base)', padding: '100px 6vw' }}>
      <motion.div
        ref={headerRef}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 40 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '48px' }}
      >
        <span style={{ fontSize: '8.5px', letterSpacing: '0.4em', color: 'var(--accent)' }}>
          INTERIORS
        </span>
        <h2 style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          marginTop: '12px',
          marginBottom: 0,
        }}>
          CRAFTED FOR{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>COMFORT</em>
        </h2>
        <div style={{ width: '48px', height: '2px', background: 'var(--accent)', marginTop: '20px' }} />
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '16px',
      }}>
        {images.map((item, i) => (
          <GalleryCard key={item.src} item={item} index={i} />
        ))}
      </div>
    </section>
  )
})

export default InteriorGallery
