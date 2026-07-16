import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(false)

  if (accepted) return null

  return (
    <AnimatePresence>
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          zIndex: 50,
          maxWidth: '360px',
          padding: '24px',
        }}
      >
        <div style={{ fontSize: '8.5px', color: 'var(--accent)', letterSpacing: '0.35em', marginBottom: '8px' }}>
          COOKIE POLICY
        </div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: 'var(--text-secondary)',
          textTransform: 'none',
          lineHeight: 1.5,
          margin: 0,
          letterSpacing: '0.01em',
        }}>
          We use cookies to enhance your experience on our website.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <button
            onClick={() => setAccepted(true)}
            style={{
              background: 'var(--accent)',
              color: 'var(--bg-base)',
              padding: '9px 18px',
              fontSize: '8.5px',
              fontWeight: 600,
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            ACCEPT ALL
          </button>
          <button
            onClick={() => setAccepted(true)}
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'var(--text-muted)',
              padding: '9px 16px',
              fontSize: '8.5px',
              borderRadius: '2px',
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            DECLINE
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
