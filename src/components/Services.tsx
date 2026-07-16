import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const projects = [
  {
    num: '01',
    name: 'Fortune Premier',
    type: '3BHK LUXURY APARTMENTS',
    desc: 'Elegantly designed 3BHK residences offering world-class amenities, landscaped gardens, and the finest finishes — crafted for families who demand the best.',
    img: '/assets/img-sunrise.jpeg',
    status: 'READY TO MOVE',
    area: '1,450 – 1,850 SQ FT',
  },
  {
    num: '02',
    name: 'Fortune Pride',
    type: 'PREMIUM GATED COMMUNITY',
    desc: 'A prestigious gated community with 24/7 security, clubhouse, swimming pool, and lush green spaces — a sanctuary of modern living in Bachupally.',
    img: '/assets/img-facade.jpeg',
    status: 'UNDER CONSTRUCTION',
    area: '1,200 – 1,600 SQ FT',
  },
  {
    num: '03',
    name: 'Fortune Praise',
    type: 'CONTEMPORARY RESIDENCES',
    desc: 'Contemporary living spaces meticulously designed with sustainable materials, smart home integration, and unparalleled attention to detail.',
    img: '/assets/img-teak1.jpeg',
    status: 'UPCOMING',
    area: '1,100 – 1,500 SQ FT',
  },
  {
    num: '04',
    name: 'Fortune Prime',
    type: 'SIGNATURE TOWERS',
    desc: "Bachupally's most iconic residential towers. Fortune Prime defines the skyline with floor-to-ceiling glass, private balconies, and sky-level amenities.",
    img: '/assets/img-teak2.jpeg',
    status: 'UPCOMING',
    area: '1,350 – 2,100 SQ FT',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="project-card"
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 60 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '3px',
        height: 'clamp(420px, 52vh, 600px)',
      }}
    >
      {/* Image */}
      <img
        src={project.img}
        alt={project.name}
        loading="lazy"
        className="project-card-img"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.9s var(--ease-luxury)',
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 100%)',
      }} />

      {/* Content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px' }}>
        <div style={{ fontSize: '9px', letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: '12px' }}>
          {project.num}
        </div>
        <div style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 700, color: 'white', letterSpacing: '-0.01em' }}>
          {project.name}
        </div>
        <div style={{ fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.55)', marginTop: '4px' }}>
          {project.type}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: '16px', marginBottom: '16px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="glass-card" style={{
            padding: '6px 12px',
            fontSize: '8px',
            letterSpacing: '0.2em',
            color: project.status === 'READY TO MOVE' ? 'var(--accent)' : 'rgba(255,255,255,0.6)',
          }}>
            {project.status}
          </span>
          <span style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)' }}>
            {project.area}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="services" style={{ backgroundColor: 'var(--bg-base)', padding: '120px 6vw' }}>
      {/* Header */}
      <motion.div
        ref={headerRef}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 40 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '64px' }}
      >
        <span style={{ fontSize: '8.5px', letterSpacing: '0.4em', color: 'var(--accent)' }}>
          OUR PROJECTS
        </span>
        <h2 style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          marginTop: '12px',
          marginBottom: 0,
        }}>
          SPACES THAT{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>INSPIRE</em>
        </h2>
        <div style={{ width: '48px', height: '2px', background: 'var(--accent)', marginTop: '20px' }} />
      </motion.div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '24px',
      }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>

      {/* View all CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
        <a
          onClick={() => document.getElementById('floorplans')?.scrollIntoView({ behavior: 'smooth' })}
          style={{
            border: '1px solid rgba(255,255,255,0.15)',
            padding: '14px 36px',
            fontSize: '9.5px',
            letterSpacing: '0.22em',
            color: 'var(--text-secondary)',
            borderRadius: '2px',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            display: 'inline-block',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = 'var(--accent)'
            el.style.color = 'var(--accent)'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.borderColor = 'rgba(255,255,255,0.15)'
            el.style.color = 'var(--text-secondary)'
          }}
        >
          VIEW ALL PROJECTS
        </a>
      </div>
    </section>
  )
}
