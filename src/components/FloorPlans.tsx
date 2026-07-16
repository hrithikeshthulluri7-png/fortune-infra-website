import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'

const plans = [
  {
    id: 'premier',
    name: 'Fortune Premier',
    type: '3BHK',
    img: '/assets/fp-premier.png',
    rooms: [
      { label: 'LIVING ROOM', area: "18' × 15'" },
      { label: 'MASTER BED',  area: "14' × 13'" },
      { label: 'BED 2',       area: "12' × 11'" },
      { label: 'BED 3',       area: "11' × 10'" },
      { label: 'KITCHEN',     area: "11' × 9'"  },
      { label: 'DINING',      area: "12' × 10'" },
      { label: 'MASTER BATH', area: "9' × 7'"   },
      { label: 'BALCONY',     area: "12' × 5'"  },
    ],
  },
  {
    id: 'pride',
    name: 'Fortune Pride',
    type: '3BHK PREMIUM',
    img: '/assets/fp-pride.png',
    rooms: [
      { label: 'LIVING ROOM', area: "20' × 16'" },
      { label: 'MASTER BED',  area: "15' × 14'" },
      { label: 'BED 2',       area: "13' × 12'" },
      { label: 'BED 3',       area: "12' × 11'" },
      { label: 'KITCHEN',     area: "12' × 10'" },
      { label: 'DINING',      area: "14' × 11'" },
      { label: 'STUDY',       area: "10' × 9'"  },
      { label: 'BALCONY',     area: "14' × 5'"  },
    ],
  },
  {
    id: 'praise',
    name: 'Fortune Praise',
    type: '2BHK & 3BHK',
    img: '/assets/fp-praise.png',
    rooms: [
      { label: 'LIVING ROOM', area: "16' × 14'" },
      { label: 'MASTER BED',  area: "13' × 12'" },
      { label: 'BED 2',       area: "11' × 10'" },
      { label: 'KITCHEN',     area: "10' × 9'"  },
      { label: 'DINING',      area: "11' × 9'"  },
      { label: 'BALCONY',     area: "10' × 5'"  },
    ],
  },
  {
    id: 'prime',
    name: 'Fortune Prime',
    type: '3BHK SIGNATURE',
    img: '/assets/fp-prime.png',
    rooms: [
      { label: 'LIVING ROOM', area: "22' × 18'" },
      { label: 'MASTER BED',  area: "16' × 15'" },
      { label: 'BED 2',       area: "14' × 13'" },
      { label: 'BED 3',       area: "13' × 12'" },
      { label: 'KITCHEN',     area: "13' × 11'" },
      { label: 'DINING',      area: "15' × 12'" },
      { label: 'HOME OFFICE', area: "12' × 10'" },
      { label: 'BALCONY',     area: "16' × 6'"  },
      { label: 'UTILITY',     area: "8' × 6'"   },
    ],
  },
]

function RoomItem({ room, delay }: { room: { label: string; area: string }; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="glass-card"
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ padding: '16px' }}
    >
      <div style={{ fontSize: '8px', letterSpacing: '0.3em', color: 'var(--text-muted)', marginBottom: '6px' }}>
        {room.label}
      </div>
      <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
        {room.area}
      </div>
    </motion.div>
  )
}

export default function FloorPlans() {
  const [activeTab, setActiveTab] = useState('premier')
  const activePlan = plans.find(p => p.id === activeTab)!
  const headerRef = useRef<HTMLDivElement>(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="floorplans" style={{ backgroundColor: 'var(--bg-surface)', padding: '120px 6vw' }}>
      {/* Header */}
      <motion.div
        ref={headerRef}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 40 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: '16px' }}
      >
        <span style={{ fontSize: '8.5px', letterSpacing: '0.4em', color: 'var(--accent)' }}>
          HOUSE PLANS
        </span>
        <h2 style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          marginTop: '12px',
          marginBottom: '8px',
        }}>
          INTELLIGENT{' '}
          <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>DESIGN</em>
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '0', fontFamily: 'var(--font-body)', textTransform: 'none', letterSpacing: '0.02em' }}>
          Every square foot is intentional.
        </p>
        <div style={{ width: '48px', height: '2px', background: 'var(--accent)', marginTop: '20px' }} />
      </motion.div>

      {/* Tab bar */}
      <div style={{
        display: 'flex',
        gap: 0,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        marginBottom: '48px',
        overflowX: 'auto',
      }}
        className="scrollbar-hide"
      >
        {plans.map(plan => (
          <button
            key={plan.id}
            onClick={() => setActiveTab(plan.id)}
            style={{
              fontSize: '9px',
              letterSpacing: '0.25em',
              padding: '16px 24px',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === plan.id ? '2px solid var(--accent)' : '2px solid transparent',
              color: activeTab === plan.id ? 'var(--text-primary)' : 'var(--text-muted)',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
              paddingBottom: '16px',
            }}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{
        display: 'flex',
        gap: '48px',
        flexWrap: 'wrap',
      }}>
        {/* Floor plan image */}
        <div style={{ flex: '1.4', minWidth: '280px' }}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={activePlan.img}
              alt={activePlan.name}
              loading="lazy"
              style={{ width: '100%', borderRadius: '3px', border: '1px solid rgba(255,255,255,0.07)' }}
            />
          </motion.div>
        </div>

        {/* Details */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '8px' }}>
            {activePlan.name}
          </div>
          <span className="glass-card" style={{
            display: 'inline-block',
            padding: '6px 14px',
            fontSize: '8.5px',
            color: 'var(--accent)',
            letterSpacing: '0.25em',
            marginBottom: '28px',
          }}>
            {activePlan.type}
          </span>

          {/* Rooms grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {activePlan.rooms.map((room, i) => (
              <RoomItem key={`${activeTab}-${room.label}`} room={room} delay={i * 0.06} />
            ))}
          </div>

          {/* Buttons */}
          <div style={{ marginTop: '28px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`/assets/fp-${activePlan.id}.pdf`}
              download={`Fortune-${activePlan.name}-Floor-Plan.pdf`}
              style={{
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '12px 24px',
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: 'var(--text-secondary)',
                background: 'transparent',
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                borderRadius: '2px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              DOWNLOAD FLOOR PLAN
            </a>
            <a
              href="tel:+919849166855"
              style={{
                background: 'var(--accent)',
                color: 'var(--bg-base)',
                padding: '12px 24px',
                fontSize: '9px',
                letterSpacing: '0.2em',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                borderRadius: '2px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              ENQUIRE ABOUT THIS PROJECT
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
