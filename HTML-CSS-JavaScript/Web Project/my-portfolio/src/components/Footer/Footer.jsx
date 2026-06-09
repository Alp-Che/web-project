// ─── Footer.jsx ───────────────────────────────────────────────
// CONCEPTS USED: Functional components, dynamic date rendering

import React from 'react';
import './Footer.css';

function Footer() {
  // Automatically gets the current year so you don't have to update it manually
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Top Section: Game branding */}
        <div className="footer__top">
          <h3 className="footer__logo">JumpBound Wiki</h3>
          <p className="footer__desc">
            Survive the rising magma. Keep jumping.
          </p>
        </div>

        {/* Decorative divider line */}
        <div className="footer__divider"></div>

        {/* Bottom Section: Copyright and Social Links */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Alperen Çelik. All rights reserved.
          </p>
          
          <div className="footer__links">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="footer__link"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noreferrer" 
              className="footer__link"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;