// ─── Footer.jsx ───────────────────────────────────────────────
// CONCEPTS USED: JSX, dynamic year with new Date()
//
// Simple footer with your name, nav links, and current year.
// The year is generated automatically with JavaScript — it'll
// always be correct without you having to update it manually.

import './Footer.css'

const FOOTER_LINKS = [
  { label: 'Home',     href: '#hero'     },
  { label: 'About',    href: '#about'    },
  { label: 'Skills',   href: '#skills'   },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact'  },
]

function Footer() {
  // Dynamic year — no manual update needed ever again!
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Logo */}
        <a href="#hero" className="footer__logo">
          Cendro<span className="accent">.</span>
        </a>

        {/* Nav links */}
        <ul className="footer__links">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="footer__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright — year is dynamic */}
        <p className="footer__copy">
          © {year} Cendro. Built with <span className="accent">React</span> ⚛️
        </p>

        {/* Back to top */}
        <a href="#hero" className="footer__top-btn" aria-label="Back to top">
          ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
