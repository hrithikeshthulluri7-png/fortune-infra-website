import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function ContactPage({ isOpen, onClose }: Props) {
  const [hoveredMethod, setHoveredMethod] = useState<null | 'call' | 'email'>(null)
  // Flip `shown` one frame after open so the animate value changes and the
  // slide-in actually fires (mount-time initial→animate does not animate here).
  const [shown, setShown] = useState(false)
  useEffect(() => {
    if (!isOpen) { setShown(false); return }
    const id = setTimeout(() => setShown(true), 40)
    return () => clearTimeout(id)
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="page-overlay"
          initial={{ y: '100%' }}
          animate={{ y: shown ? '0%' : '100%' }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
        >
          {/* Top bar */}
          <div style={{
            padding: '28px 6vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            flexShrink: 0,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="3" rx="1" fill="#c9a96e" />
                <rect x="3" y="3" width="3" height="18" rx="1" fill="#c9a96e" />
                <rect x="3" y="10.5" width="11" height="2.5" rx="1" fill="#c9a96e" />
              </svg>
              <span style={{ fontSize: '13px', letterSpacing: '0.22em', color: 'var(--text-primary)', fontWeight: 600 }}>
                FORTUNE INFRA
              </span>
            </div>
            <button
              className="glass-card"
              onClick={onClose}
              style={{
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
          </div>

          {/* Main area */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 6vw' }}>
            {/* Header */}
            <div style={{ marginBottom: '64px' }}>
              <div style={{ fontSize: '8.5px', letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: '16px' }}>
                GET IN TOUCH
              </div>
              <h1 style={{
                fontSize: 'clamp(32px, 5vw, 72px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                margin: 0,
              }}>
                WE'D LOVE TO{' '}
                <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>HEAR FROM YOU</em>
              </h1>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.2em', marginTop: '12px' }}>
                CHOOSE HOW YOU'D LIKE TO REACH US.
              </div>
            </div>

            {/* Method cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}>
              {/* Call card */}
              <motion.div
                onHoverStart={() => setHoveredMethod('call')}
                onHoverEnd={() => setHoveredMethod(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  padding: 'clamp(40px, 5vw, 72px)',
                  background: hoveredMethod === 'call'
                    ? 'linear-gradient(135deg, var(--accent) 0%, #8b6e3a 100%)'
                    : 'var(--bg-elevated)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'background 0.6s cubic-bezier(0.19,1,0.22,1)',
                }}
              >
                {/* Animated ring */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  transform: hoveredMethod === 'call' ? 'scale(1)' : 'scale(0.5)',
                  opacity: hoveredMethod === 'call' ? 0.4 : 0,
                  transition: 'all 0.6s cubic-bezier(0.19,1,0.22,1)',
                  pointerEvents: 'none',
                }} />

                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '24px', display: 'block' }}>
                  <path
                    d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.3 1L6.6 10.8z"
                    fill={hoveredMethod === 'call' ? 'var(--bg-base)' : 'var(--accent)'}
                  />
                </svg>

                <div style={{
                  fontSize: '10px',
                  letterSpacing: '0.4em',
                  color: hoveredMethod === 'call' ? 'var(--bg-base)' : 'var(--accent)',
                  marginBottom: '12px',
                }}>
                  CALL US
                </div>
                <div style={{
                  fontSize: 'clamp(22px, 2.5vw, 36px)',
                  fontWeight: 700,
                  color: hoveredMethod === 'call' ? 'var(--bg-base)' : 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                }}>
                  +91 98491 66855
                </div>
                <div style={{
                  fontSize: '9.5px',
                  letterSpacing: '0.2em',
                  color: hoveredMethod === 'call' ? 'rgba(12,12,14,0.65)' : 'var(--text-muted)',
                  marginTop: '8px',
                }}>
                  MONDAY – SATURDAY · 9AM TO 7PM
                </div>
                <a
                  href="tel:+919849166855"
                  style={{
                    display: 'inline-block',
                    marginTop: '32px',
                    padding: '12px 28px',
                    borderRadius: '2px',
                    background: hoveredMethod === 'call' ? 'var(--bg-base)' : 'var(--accent)',
                    color: hoveredMethod === 'call' ? 'var(--accent)' : 'var(--bg-base)',
                    fontSize: '9.5px',
                    letterSpacing: '0.2em',
                    fontWeight: 600,
                    transition: 'all 0.4s ease',
                    textDecoration: 'none',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                  }}
                >
                  CALL NOW →
                </a>
              </motion.div>

              {/* Email card */}
              <motion.div
                onHoverStart={() => setHoveredMethod('email')}
                onHoverEnd={() => setHoveredMethod(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  padding: 'clamp(40px, 5vw, 72px)',
                  background: hoveredMethod === 'email'
                    ? 'linear-gradient(135deg, var(--accent) 0%, #8b6e3a 100%)'
                    : 'var(--bg-elevated)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'background 0.6s cubic-bezier(0.19,1,0.22,1)',
                }}
              >
                {/* Animated ring */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  transform: hoveredMethod === 'email' ? 'scale(1)' : 'scale(0.5)',
                  opacity: hoveredMethod === 'email' ? 0.4 : 0,
                  transition: 'all 0.6s cubic-bezier(0.19,1,0.22,1)',
                  pointerEvents: 'none',
                }} />

                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" style={{ marginBottom: '24px', display: 'block' }}>
                  <rect
                    x="2" y="4" width="20" height="16" rx="2"
                    stroke={hoveredMethod === 'email' ? 'var(--bg-base)' : 'var(--accent)'}
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M2 7l10 7 10-7"
                    stroke={hoveredMethod === 'email' ? 'var(--bg-base)' : 'var(--accent)'}
                    strokeWidth="1.5"
                  />
                </svg>

                <div style={{
                  fontSize: '10px',
                  letterSpacing: '0.4em',
                  color: hoveredMethod === 'email' ? 'var(--bg-base)' : 'var(--accent)',
                  marginBottom: '12px',
                }}>
                  EMAIL US
                </div>
                <div style={{
                  fontSize: 'clamp(18px, 2vw, 30px)',
                  fontWeight: 700,
                  color: hoveredMethod === 'email' ? 'var(--bg-base)' : 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  wordBreak: 'break-all',
                }}>
                  fortuneindia7@gmail.com
                </div>
                <div style={{
                  fontSize: '9.5px',
                  letterSpacing: '0.2em',
                  color: hoveredMethod === 'email' ? 'rgba(12,12,14,0.65)' : 'var(--text-muted)',
                  marginTop: '8px',
                }}>
                  WE RESPOND WITHIN 24 HOURS
                </div>
                <a
                  href="mailto:fortuneindia7@gmail.com"
                  style={{
                    display: 'inline-block',
                    marginTop: '32px',
                    padding: '12px 28px',
                    borderRadius: '2px',
                    background: hoveredMethod === 'email' ? 'var(--bg-base)' : 'var(--accent)',
                    color: hoveredMethod === 'email' ? 'var(--accent)' : 'var(--bg-base)',
                    fontSize: '9.5px',
                    letterSpacing: '0.2em',
                    fontWeight: 600,
                    transition: 'all 0.4s ease',
                    textDecoration: 'none',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                  }}
                >
                  EMAIL NOW →
                </a>
              </motion.div>
            </div>
          </div>

          {/* Footer strip */}
          <div style={{
            padding: '24px 6vw',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: '8.5px', color: 'var(--text-faint)' }}>
              SY NO. 143, BACHUPALLY, HYDERABAD — 500090
            </span>
            <span style={{ fontSize: '8.5px', color: 'var(--text-faint)' }}>
              © 2024 FORTUNE INFRA
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
