// ─── Developer.jsx ──────────────────────────────────────────────
// CONCEPTS USED: JSX, mapping arrays
//
// This section introduces the solo developer behind the game.

import React from 'react';
import './Developer.css';

function Developer() {
  // Sample database for your other games (You can replace this with your own games)
  const otherGames = [
    { id: 1, name: 'Lava Runner 2D', genre: 'Mobile Arcade', year: '2025' },
    { id: 2, name: 'Pixel Dungeon', genre: 'Rogue-like', year: '2024' }
  ];

  return (
    <section id="developer" className="developer">
      <div className="developer__container">
        
        <h2 className="developer__title">Meet the <span className="accent">Developer</span></h2>
        <p className="developer__subtitle">The solo mind behind the rising lava.</p>

        <div className="developer__grid">
          
          {/* ─── Profile Card (Left Side) ─── */}
          <div className="developer__profile-card">
            <div className="developer__avatar-wrapper">
              <div className="developer__avatar-placeholder">AÇ</div>
            </div>
            <h3 className="developer__name">Alperen Çelik</h3>
            <span className="developer__role">Solo Indie Developer</span>
            
            <div className="developer__socials">
              <a 
                href="https://github.com/" 
                target="_blank" 
                rel="noreferrer" 
                className="developer__social-btn"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" 
                target="_blank" 
                rel="noreferrer" 
                className="developer__social-btn"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* ─── Bio & Tech Stack (Right Side) ─── */}
          <div className="developer__info">
            <h4 className="developer__info-title">About Me</h4>
            <p className="developer__bio">
              I'm the solo developer crafting every jump, platform, and pixel in JumpBound. 
              I have a huge passion for building projects completely from scratch and pushing my limits with every line of code.
            </p>
            <p className="developer__bio">
              Beyond game development, I'm actively expanding my horizons into the web world. 
              I built this entire wiki by diving deep into HTML, CSS, and JavaScript, ensuring 
              every component is hand-coded. Keeping my projects organized and pushing daily commits via Git is just part of the grind!
            </p>

            <h4 className="developer__info-title">Tech Stack</h4>
            <div className="developer__skills">
              <span className="developer__skill-tag">Game Design</span>
              <span className="developer__skill-tag">Mobile Game Design</span>
              <span className="developer__skill-tag">Unity</span>
              <span className="developer__skill-tag">Pixel Art</span>
              <span className="developer__skill-tag">Aseprite</span>
            </div>

            {/* ─── Other Games Section ─── */}
            <h4 className="developer__info-title developer__info-title--margin">Other Games</h4>
            <div className="developer__other-games-grid">
              {otherGames.map(game => (
                <div key={game.id} className="developer__game-card">
                  <div className="developer__game-card-icon">🎮</div>
                  <div className="developer__game-card-details">
                    <span className="developer__game-title">{game.name}</span>
                    <span className="developer__game-genre">{game.genre} • {game.year}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Developer;