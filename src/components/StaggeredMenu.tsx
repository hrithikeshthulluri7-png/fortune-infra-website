import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { smoothScrollToElement, smoothScrollTop } from '../utils/smoothScroll'

const NAV_ITEMS = [
  { label: 'Home',         action: 'home' },
  { label: 'Our Projects', action: 'projects' },
  { label: 'Floor Plans',  action: 'floorplans' },
  { label: 'About Us',     action: 'about' },
  { label: 'Contact',      action: 'contact' },
]

interface Props {
  isOpen: boolean
  onToggle: () => void
  onAboutOpen: () => void
  onContactOpen: () => void
}

export default function StaggeredMenu({ isOpen, onToggle, onAboutOpen, onContactOpen }: Props) {
  const pre1Ref = useRef<HTMLDivElement>(null)
  const pre2Ref = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLLIElement[]>([])

  useEffect(() => {
    const pre1 = pre1Ref.current!
    const pre2 = pre2Ref.current!
    const panel = panelRef.current!
    const items = itemsRef.current

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const tl = gsap.timeline()
      tl.to(pre1, { x: '0%', duration: 0.55, ease: 'power4.inOut' })
        .to(pre2, { x: '0%', duration: 0.55, ease: 'power4.inOut' }, '-=0.45')
        .to(panel, { x: '0%', duration: 0.6,  ease: 'power4.inOut' }, '-=0.4')
        .to(pre2, { x: '100%', duration: 0.35, ease: 'power3.in' }, '-=0.05')
        .to(pre1, { x: '100%', duration: 0.35, ease: 'power3.in' }, '-=0.28')
        .fromTo(items,
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, stagger: 0.07, duration: 0.65, ease: 'power4.out' },
          '-=0.2'
        )
    } else {
      document.body.style.overflow = ''
      const tl = gsap.timeline()
      tl.to(items, { y: '110%', opacity: 0, stagger: 0.04, duration: 0.35, ease: 'power2.in' })
        .to(panel, { x: '100%', duration: 0.55, ease: 'power4.inOut' }, '-=0.1')
    }
  }, [isOpen])

  const handleNav = (action: string) => {
    onToggle()
    if (action === 'about') { setTimeout(onAboutOpen, 400) }
    else if (action === 'contact') { setTimeout(onContactOpen, 400) }
    else if (action === 'projects') { setTimeout(() => smoothScrollToElement('services'), 400) }
    else if (action === 'floorplans') { setTimeout(() => smoothScrollToElement('floorplans'), 400) }
    else { setTimeout(() => smoothScrollTop(), 400) }
  }

  return (
    <>
      <button
        className={`menu-toggle ${isOpen ? 'is-open' : ''}`}
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        <span className="menu-toggle-icon">{isOpen ? '×' : '+'}</span>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.22em' }}>{isOpen ? 'CLOSE' : 'MENU'}</span>
      </button>

      <div ref={pre1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={pre2Ref} className="menu-prelayer menu-prelayer-2" />

      <div ref={panelRef} className="menu-panel">
        <nav>
          <ul className="menu-nav">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.action} ref={el => { if (el) itemsRef.current[i] = el }}>
                <a onClick={() => handleNav(item.action)}>
                  <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.3em', alignSelf: 'center' }}>
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-socials">
          <span className="menu-socials-title">GET IN TOUCH</span>
          <div className="menu-socials-links">
            <a href="tel:+919849166855">+91 98491 66855</a>
            <a href="mailto:fortuneindia7@gmail.com">EMAIL US</a>
          </div>
        </div>
      </div>
    </>
  )
}
