// ─── Navbar.jsx ───────────────────────────────────────────────
// CONCEPTS USED: useState, event handling, conditional className
//
// The Navbar:
//   - Stays fixed at the top while you scroll
//   - Has a hamburger menu for mobile screens (useState toggles it)
//   - Highlights the active link based on which section is visible

import { useState, useEffect } from 'react'
import './Navbar.css'
import logoImg from '../../assets/Logo.png';

// ── Data: edit these links to match your sections ─────────────
const NAV_LINKS = [
  { label: 'Home',             href: '#home' },
  { label: 'About',            href: '#about' },
  { label: 'Game Information', href: '#game-information' },
  { label: 'Leaderboard',      href: '#leaderboard' },
  { label: 'Developer',        href: '#developer' },
  { label: 'Feedback',         href: '#feedback' },
]

function Navbar() {
  // useState: track whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false)

  // useState: add a shadow to the navbar after scrolling down
  const [scrolled, setScrolled] = useState(false)

  // useEffect: listen for scroll events and update `scrolled` state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)

    // Cleanup: remove the listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, []) // The [] means this effect runs only once (on mount)

  // Close the mobile menu whenever a link is clicked
  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        

       {/* ── Logo ─────────────────────────────── */}
        <a href="#home" className="navbar__logo">
          <img src={logoImg} alt="Cendro Wiki" className="navbar__logo-img" />
        </a>

        {/* ── Desktop Links ────────────────────────────────── */}
        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/*────── Seach ────────────────── */}
        <div className="navbar__search">
          <input 
            type="text" 
            placeholder="Search..." 
            className="navbar__search-input" 
          />
        </div>
       

        {/* ── Hamburger (mobile only) ───────────────────────── */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Mobile Dropdown Menu ─────────────────────────── */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
