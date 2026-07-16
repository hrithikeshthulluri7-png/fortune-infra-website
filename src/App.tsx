import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RippleTrail from './components/RippleTrail'
import StaggeredMenu from './components/StaggeredMenu'
import Services from './components/Services'
import FloorPlans from './components/FloorPlans'
import LifestyleStrip from './components/LifestyleStrip'
import InteriorGallery from './components/InteriorGallery'
import Testimonials from './components/Testimonials'
import ConciergeStrip from './components/ConciergeStrip'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onAboutOpen={() => setAboutOpen(true)}
        onContactOpen={() => setContactOpen(true)}
      />

      <Hero menuOpen={menuOpen} />

      <RippleTrail />

      <StaggeredMenu
        isOpen={menuOpen}
        onToggle={() => setMenuOpen(o => !o)}
        onAboutOpen={() => setAboutOpen(true)}
        onContactOpen={() => setContactOpen(true)}
      />

      <div style={{ position: 'relative', zIndex: 25 }}>
        <div style={{ height: '100vh' }} />
        <div style={{ backgroundColor: 'var(--bg-base)' }}>
          <Services />
          <FloorPlans />
          <LifestyleStrip />
          <InteriorGallery />
          <Testimonials />
          <ConciergeStrip />
          <Footer onAboutOpen={() => setAboutOpen(true)} onContactOpen={() => setContactOpen(true)} />
        </div>
      </div>

      <CookieConsent />

      <AboutPage isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ContactPage isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}
