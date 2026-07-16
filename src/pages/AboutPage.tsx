import { motion, AnimatePresence } from 'motion/react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const stats = [
  { value: '500+', label: 'HOMES DELIVERED' },
  { value: '15+',  label: 'YEARS OF TRUST' },
  { value: '2',    label: 'GROUP COMPANIES' },
]

export default function AboutPage({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="page-overlay"
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close button */}
          <button
            className="glass-card"
            onClick={onClose}
            style={{
              position: 'fixed',
              top: '24px',
              right: '24px',
              zIndex: 210,
              padding: '10px 20px',
              fontSize: '8.5px',
              letterSpacing: '0.3em',
              cursor: 'pointer',
              background: 'var(--glass-soft)',
              border: '1px solid var(--glass-border-soft)',
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              borderRadius: '100px',
            }}
          >
            ← CLOSE
          </button>

          <div style={{ height: '100vh', overflowY: 'auto' }}>
            {/* Hero section */}
            <div style={{ height: '60vh', position: 'relative', overflow: 'hidden' }}>
              <img
                src="/assets/img-tower.jpeg"
                alt="Fortune Infra Tower"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
              }} />
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 24px',
              }}>
                <div style={{ fontSize: '8.5px', letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: '16px' }}>
                  ABOUT THE FORTUNE GROUP
                </div>
                <h1 style={{
                  fontSize: 'clamp(36px, 5.5vw, 80px)',
                  fontWeight: 700,
                  color: 'white',
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}>
                  DRIVEN BY{' '}
                  <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>EXCELLENCE</em>
                </h1>
                <div style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.6)', marginTop: '16px' }}>
                  EST. 2010 · BACHUPALLY, HYDERABAD
                </div>
              </div>
            </div>

            {/* Content section */}
            <div style={{ backgroundColor: 'var(--bg-base)', padding: '80px 8vw' }}>
              <div style={{
                display: 'flex',
                gap: '80px',
                flexWrap: 'wrap',
              }}>
                {/* Left column */}
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <h2 style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    marginBottom: '20px',
                    marginTop: 0,
                  }}>
                    OUR STORY
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    lineHeight: 1.85,
                    color: 'var(--text-secondary)',
                    textTransform: 'none',
                    letterSpacing: '0.01em',
                    margin: 0,
                  }}>
                    The Fortune Group was born in 2010 under the visionary leadership of Thulluri Malyadri, with the founding of Fortune Accessories — a company that quickly established itself as a leading manufacturer of two-wheeler automobile accessories in India.
                    <br /><br />
                    Built on a foundation of precision engineering, quality craftsmanship, and an unwavering commitment to customer satisfaction, Fortune Accessories grew to become a trusted name across Hyderabad and beyond. Every product leaving our factory carries the same philosophy: built to last, built to perform.
                    <br /><br />
                    Fortune Infra is the group's sister venture — born from the same values of quality and integrity, now applied to the world of residential real estate. With four landmark projects in Bachupally, Fortune Infra is transforming how families experience home in Hyderabad's fastest-growing suburb.
                  </p>

                  {/* Fortune Accessories — main company */}
                  <div className="glass-card" style={{ padding: '24px', marginTop: '40px' }}>
                    <div style={{ fontSize: '8px', color: 'var(--accent)', letterSpacing: '0.35em', marginBottom: '8px' }}>
                      THE FORTUNE GROUP — FLAGSHIP COMPANY
                    </div>
                    <div style={{ fontSize: '22px', fontWeight: 700, marginTop: '8px', marginBottom: '12px' }}>
                      FORTUNE ACCESSORIES
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      textTransform: 'none',
                      lineHeight: 1.7,
                      margin: 0,
                      letterSpacing: '0.01em',
                    }}>
                      Founded in 2010, Fortune Accessories is a leading two-wheeler automobile accessories manufacturing company headquartered in Bachupally, Hyderabad. Renowned for durability, innovation, and competitive pricing, our products serve dealerships and customers across Telangana and Andhra Pradesh.
                    </p>
                    <a
                      href="mailto:fortuneindia7@gmail.com"
                      style={{
                        fontSize: '9.5px',
                        color: 'var(--accent)',
                        letterSpacing: '0.2em',
                        marginTop: '16px',
                        cursor: 'pointer',
                        display: 'inline-block',
                        textDecoration: 'none',
                      }}
                    >
                      CONTACT FORTUNE ACCESSORIES →
                    </a>
                  </div>

                  {/* Fortune Infra — sister company */}
                  <div className="glass-card" style={{ padding: '24px', marginTop: '16px' }}>
                    <div style={{ fontSize: '8px', color: 'var(--accent)', letterSpacing: '0.35em', marginBottom: '8px' }}>
                      SISTER VENTURE
                    </div>
                    <div style={{ fontSize: '22px', fontWeight: 700, marginTop: '8px', marginBottom: '12px' }}>
                      FORTUNE INFRA
                    </div>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      textTransform: 'none',
                      lineHeight: 1.7,
                      margin: 0,
                      letterSpacing: '0.01em',
                    }}>
                      Fortune Infra extends the group's legacy into luxury residential development. With the same commitment to quality that defines Fortune Accessories, Fortune Infra has delivered 500+ homes across four landmark projects in Bachupally — crafted for families who refuse to compromise.
                    </p>
                  </div>

                  {/* Mission / Vision */}
                  <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                    <div className="glass-card" style={{ padding: '24px' }}>
                      <div style={{ fontSize: '8px', color: 'var(--accent)', letterSpacing: '0.35em', marginBottom: '12px' }}>
                        MISSION
                      </div>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        textTransform: 'none',
                        lineHeight: 1.65,
                        margin: 0,
                        letterSpacing: '0.01em',
                      }}>
                        To deliver superior quality — whether an automobile accessory or a family home — that enriches lives and exceeds expectations, every single time.
                      </p>
                    </div>
                    <div className="glass-card" style={{ padding: '24px' }}>
                      <div style={{ fontSize: '8px', color: 'var(--accent)', letterSpacing: '0.35em', marginBottom: '12px' }}>
                        VISION
                      </div>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        textTransform: 'none',
                        lineHeight: 1.65,
                        margin: 0,
                        letterSpacing: '0.01em',
                      }}>
                        To build a Fortune Group that Hyderabad is proud of — trusted across industries, known for integrity, and built to last for generations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right column — sticky */}
                <div style={{ flex: 1, minWidth: '280px', position: 'sticky', top: '80px', alignSelf: 'flex-start' }}>
                  <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                    <img
                      src="/assets/owner-portrait.png"
                      alt="Thulluri Malyadri"
                      loading="lazy"
                      style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                    />
                    <div style={{ padding: '24px' }}>
                      <div style={{ fontSize: '18px', fontWeight: 700 }}>
                        THULLURI MALYADRI
                      </div>
                      <div style={{ fontSize: '8.5px', color: 'var(--accent)', letterSpacing: '0.25em', marginTop: '4px' }}>
                        FOUNDER & CHAIRMAN — FORTUNE GROUP
                      </div>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        textTransform: 'none',
                        lineHeight: 1.75,
                        letterSpacing: '0.01em',
                        marginTop: '16px',
                        marginBottom: '12px',
                      }}>
                        Thulluri Malyadri is the driving force behind the Fortune Group. A first-generation entrepreneur from Bachupally, he founded Fortune Accessories in 2010 with a clear conviction: that quality and value are not a compromise, they are a standard.
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        textTransform: 'none',
                        lineHeight: 1.75,
                        letterSpacing: '0.01em',
                        margin: '0 0 12px',
                      }}>
                        Under his leadership, Fortune Accessories grew from a small operation into a leading two-wheeler automobile accessories manufacturer serving dealers and customers across Telangana and Andhra Pradesh. His hands-on approach to manufacturing — obsessing over materials, tolerances, and finish — became the group's defining culture.
                      </p>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        fontStyle: 'italic',
                        textTransform: 'none',
                        lineHeight: 1.7,
                        letterSpacing: '0.01em',
                        marginBottom: 0,
                        borderLeft: '2px solid var(--accent)',
                        paddingLeft: '14px',
                      }}>
                        "Whether I am building a handlebar grip or a family home, my standard is the same — it must be built right, built to last, and built with pride."
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                    {stats.map(s => (
                      <div key={s.label} className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
                        <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--accent)' }}>
                          {s.value}
                        </div>
                        <div style={{ fontSize: '8px', color: 'var(--text-muted)', letterSpacing: '0.25em', marginTop: '6px' }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer inside overlay */}
            <div style={{
              backgroundColor: 'var(--bg-surface)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '32px 8vw',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}>
              <span style={{ fontSize: '9px', color: 'var(--text-faint)' }}>
                © 2024 FORTUNE INFRA. ALL RIGHTS RESERVED.
              </span>
              <span style={{ fontSize: '9px', color: 'var(--text-faint)' }}>
                A FORTUNE GROUP COMPANY
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
