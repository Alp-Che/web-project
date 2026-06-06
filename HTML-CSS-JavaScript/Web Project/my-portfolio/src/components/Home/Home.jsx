// ─── Home.jsx ─────────────────────────────────────────────────
// CONCEPTS USED: JSX, importing image assets, flexbox layouts
//
// The Home section is the first thing visitors see.
// It features the main game logo in the center, flanked by
// platform store links (Steam, App Store, PlayStation, etc.) on the sides.
//
// 🔧 WORKSHOP TASKS:
//   1. Import platform logos from the assets folder.
//   2. Structure the layout: Left Links <- Main Logo -> Right Links.
//   3. Add hover effects to the game links.

import './Home.css'

// Main Game Logo
import gameLogo from '../../assets/game_logo.png'

// Platform Logos
import steamLogo from '../../assets/Steam_Logo.png'
import playStoreLogo from '../../assets/PlayStore_Logo.png'
import appStoreLogo from '../../assets/AppStore_Logo.png'
import ps4Logo from '../../assets/PS4_Logo.png'
import xboxLogo from '../../assets/XBOX_Logo.png'
import nintendoLogo from '../../assets/Nintendo_Logo.png'

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home__layout section-wrapper">
        
        {/* ── Left Links ────────────────────────────── */}
        <div className="home__links">
          {/* Update the href attribute with your actual Steam store URL */}
          <a href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer" className="home__link-item">
            <img src={steamLogo} alt="Steam" className="home__platform-img" />
          </a>
          {/* Update the href attribute with your actual Play Store URL */}
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="home__link-item">
            <img src={playStoreLogo} alt="Play Store" className="home__platform-img" />
          </a>
          {/* Update the href attribute with your actual App Store URL */}
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="home__link-item">
            <img src={appStoreLogo} alt="App Store" className="home__platform-img" />
          </a>
        </div>

        {/* ── Center Main Logo ──────────────────────── */}
        <div className="home__center">
          <img src={gameLogo} alt="Cendro Game" className="home__main-logo" />
        </div>

        {/* ── Right Links ───────────────────────────── */}
        <div className="home__links">
          {/* Update the href attribute with your actual PlayStation store URL */}
          <a href="https://store.playstation.com/" target="_blank" rel="noopener noreferrer" className="home__link-item">
            <img src={ps4Logo} alt="PlayStation 4" className="home__platform-img" />
          </a>
          {/* Update the href attribute with your actual Xbox store URL */}
          <a href="https://www.xbox.com/games" target="_blank" rel="noopener noreferrer" className="home__link-item">
            <img src={xboxLogo} alt="Xbox One" className="home__platform-img" />
          </a>
          {/* Update the href attribute with your actual Nintendo store URL */}
          <a href="https://www.nintendo.com/store/" target="_blank" rel="noopener noreferrer" className="home__link-item">
            <img src={nintendoLogo} alt="Nintendo Switch" className="home__platform-img" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Home