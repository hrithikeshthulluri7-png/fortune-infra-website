import { motion } from 'motion/react'
import { availability } from '../data/availability'

const CELL = 44

function Legend() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{
          width: '10px', height: '10px', borderRadius: '2px',
          background: 'var(--accent)', display: 'inline-block',
        }} />
        <span style={{ fontSize: '8.5px', letterSpacing: '0.25em', color: 'var(--text-secondary)' }}>AVAILABLE</span>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <span style={{
          width: '10px', height: '10px', borderRadius: '2px',
          background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
          display: 'inline-block',
        }} />
        <span style={{ fontSize: '8.5px', letterSpacing: '0.25em', color: 'var(--text-muted)' }}>BOOKED</span>
      </div>
    </div>
  )
}

export default function AvailabilityGrid({ planId, planName }: { planId: string; planName: string }) {
  const floors = availability[planId]
  if (!floors) return null

  const allUnits = floors.flatMap(f => f.units)
  const open = allUnits.filter(u => u.status === 'available').length
  const booked = allUnits.length - open

  let cellIndex = 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="glass-card" style={{ padding: '28px', marginTop: '24px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          flexWrap: 'wrap', gap: '12px', marginBottom: '24px',
        }}>
          <div>
            <div style={{ fontSize: '8.5px', letterSpacing: '0.4em', color: 'var(--accent)', marginBottom: '8px' }}>
              LIVE AVAILABILITY
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
              {planName} — {open} OF {allUnits.length} UNITS AVAILABLE
            </div>
          </div>
          <Legend />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {floors.map(floor => (
            <div key={floor.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                fontSize: '8px', letterSpacing: '0.25em', color: 'var(--text-muted)',
                width: '40px', flexShrink: 0, textAlign: 'right',
              }}>
                {floor.label}
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {floor.units.map(unit => {
                  const isOpen = unit.status === 'available'
                  const delay = cellIndex++ * 0.03
                  return (
                    <motion.div
                      key={unit.flat}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
                      title={`Flat ${unit.flat} · ${unit.sqft} sft · ${isOpen ? 'Available' : 'Booked'}`}
                      style={{
                        width: `${CELL}px`,
                        height: `${CELL}px`,
                        borderRadius: '3px',
                        background: isOpen ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                        border: isOpen ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2px',
                        cursor: 'default',
                      }}
                    >
                      <span style={{
                        fontSize: '9px', fontWeight: 700, letterSpacing: '0.05em',
                        color: isOpen ? 'var(--bg-base)' : 'var(--text-muted)',
                      }}>
                        {unit.flat}
                      </span>
                      <span style={{
                        fontSize: '6.5px', letterSpacing: '0.1em',
                        color: isOpen ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.25)',
                      }}>
                        {unit.sqft} SFT
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)',
          fontSize: '8px', letterSpacing: '0.2em', color: 'var(--text-muted)',
        }}>
          {booked} BOOKED · UPDATED WEEKLY · CALL +91 98491 66855 TO RESERVE
        </div>
      </div>
    </motion.div>
  )
}
