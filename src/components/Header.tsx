import { useEffect, useRef, useState } from 'react'
import { smoothScrollToElement, smoothScrollTop } from '../utils/smoothScroll'

interface Props {
  menuOpen: boolean
  onAboutOpen: () => void
  onContactOpen: () => void
}

const NAV_LINKS = [
  { label: 'OUR PROJECTS', action: 'projects' },
  { label: 'FLOOR PLANS',  action: 'floorplans' },
  { label: 'ABOUT US',     action: 'about' },
  { label: 'CONTACT',      action: 'contact' },
]

export default function Header({ menuOpen, onAboutOpen, onContactOpen }: Props) {
  const pillRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const [enquireHovered, setEnquireHovered] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (action: string) => {
    if (action === 'about') onAboutOpen()
    else if (action === 'contact') onContactOpen()
    else if (action === 'projects') smoothScrollToElement('services')
    else if (action === 'floorplans') smoothScrollToElement('floorplans')
  }

  return (
    <div ref={pillRef} className={`navbar-pill${scrolled ? ' scrolled' : ''}`}>
      {/* Logo — home button */}
      <div
        onClick={() => smoothScrollTop()}
        className="navbar-logo"
        style={{
          borderRight: '1px solid rgba(255,255,255,0.07)',
          padding: '0 20px 0 14px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="3" rx="1" fill="#c9a96e" />
          <rect x="3" y="3" width="3" height="18" rx="1" fill="#c9a96e" />
          <rect x="3" y="10.5" width="11" height="2.5" rx="1" fill="#c9a96e" />
        </svg>
        <span style={{ fontSize: '13px', letterSpacing: '0.22em', color: 'var(--text-primary)', fontWeight: 600 }}>
          FORTUNE INFRA
        </span>
      </div>

      {/* Nav links — hidden on mobile (inline display omitted so the
          Tailwind `hidden` class can win; sm:flex restores it on desktop) */}
      <div style={{ alignItems: 'center' }} className="hidden sm:flex">
        {NAV_LINKS.map(link => (
          <a
            key={link.action}
            onClick={() => handleNav(link.action)}
            onMouseEnter={() => setHoveredLink(link.action)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              padding: '0 16px',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              fontSize: '9.5px',
              letterSpacing: '0.2em',
              color: hoveredLink === link.action ? 'var(--text-primary)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'color 0.2s ease',
              userSelect: 'none',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Enquire Now button — hidden on mobile (MENU covers contact) */}
      <div style={{ padding: '0 6px' }} className="hidden sm:block">
        <button
          onClick={onContactOpen}
          onMouseEnter={() => setEnquireHovered(true)}
          onMouseLeave={() => setEnquireHovered(false)}
          style={{
            background: enquireHovered ? 'var(--accent-light)' : 'var(--accent)',
            borderRadius: '100px',
            padding: '9px 22px',
            fontSize: '9.5px',
            color: 'var(--bg-base)',
            fontWeight: 600,
            letterSpacing: '0.15em',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            textTransform: 'uppercase',
            transform: menuOpen ? 'translateX(calc(-1 * var(--panel-width)))' : 'none',
            transition: 'background 0.3s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          ENQUIRE NOW
        </button>
      </div>
    </div>
  )
}
