const LogoSVG = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="3" rx="1" fill="#c9a96e" />
    <rect x="3" y="3" width="3" height="18" rx="1" fill="#c9a96e" />
    <rect x="3" y="10.5" width="11" height="2.5" rx="1" fill="#c9a96e" />
  </svg>
)

interface Props {
  onAboutOpen?: () => void
  onContactOpen?: () => void
}

export default function Footer({ onAboutOpen, onContactOpen }: Props) {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-surface)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '80px 6vw 40px',
    }}>
      {/* Top row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '48px',
        marginBottom: '64px',
      }}>
        {/* Brand column */}
        <div style={{ flex: 1.5, minWidth: '220px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <LogoSVG size={20} />
            <span style={{ fontSize: '15px', letterSpacing: '0.22em', color: 'var(--text-primary)', fontWeight: 600 }}>
              FORTUNE INFRA
            </span>
          </div>
          <div style={{ fontSize: '10px', letterSpacing: '0.22em', color: 'var(--text-muted)' }}>
            CRAFTED FOR LIFE. BUILT FOR LEGACY.
          </div>
          <div style={{
            fontSize: '9.5px',
            color: 'var(--text-faint)',
            letterSpacing: '0.15em',
            marginTop: '8px',
            fontFamily: 'var(--font-body)',
            textTransform: 'none',
            lineHeight: 1.5,
          }}>
            SY NO. 143, BACHUPALLY, HYDERABAD — 500090, TELANGANA
          </div>
        </div>

        {/* Projects column */}
        <div style={{ minWidth: '160px' }}>
          <div style={{ fontSize: '8.5px', color: 'var(--accent)', letterSpacing: '0.35em', marginBottom: '16px' }}>
            PROJECTS
          </div>
          {['Fortune Premier', 'Fortune Pride', 'Fortune Praise', 'Fortune Prime'].map(p => (
            <a
              key={p}
              onClick={() => document.getElementById('floorplans')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                display: 'block',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: 'var(--text-muted)',
                marginBottom: '10px',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {p}
            </a>
          ))}
        </div>

        {/* Company column */}
        <div style={{ minWidth: '160px' }}>
          <div style={{ fontSize: '8.5px', color: 'var(--accent)', letterSpacing: '0.35em', marginBottom: '16px' }}>
            COMPANY
          </div>
          {[
            { label: 'About Us',             action: () => onAboutOpen?.() },
            { label: 'Fortune Accessories',  action: () => window.open('mailto:fortuneindia7@gmail.com') },
            { label: 'Contact',              action: () => onContactOpen?.() },
            { label: 'Privacy Policy',       action: () => {} },
          ].map(item => (
            <a
              key={item.label}
              onClick={item.action}
              style={{
                display: 'block',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: 'var(--text-muted)',
                marginBottom: '10px',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact column */}
        <div style={{ minWidth: '200px' }}>
          <div style={{ fontSize: '8.5px', color: 'var(--accent)', letterSpacing: '0.35em', marginBottom: '16px' }}>
            CONTACT
          </div>
          <a
            href="tel:+919849166855"
            style={{ fontSize: '11px', color: 'var(--text-primary)', fontWeight: 600, display: 'block', marginBottom: '8px', textDecoration: 'none' }}
          >
            +91 98491 66855
          </a>
          <a
            href="mailto:fortuneindia7@gmail.com"
            style={{ fontSize: '10px', color: 'var(--accent)', display: 'block', marginBottom: '16px', textDecoration: 'none' }}
          >
            fortuneindia7@gmail.com
          </a>
          <div style={{ fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
            MON – SAT, 9AM – 7PM
          </div>
          <div style={{ fontSize: '8.5px', color: 'var(--text-faint)', marginTop: '8px', letterSpacing: '0.1em' }}>
            RERA REG. NO. COMING SOON
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        paddingTop: '28px',
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
        <span style={{ fontSize: '9px', color: 'var(--text-faint)' }}>
          CRAFTED BY FORTUNE INFRA DESIGN STUDIO
        </span>
      </div>
    </footer>
  )
}
