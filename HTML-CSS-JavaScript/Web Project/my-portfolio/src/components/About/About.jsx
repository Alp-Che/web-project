// ─── About.jsx ────────────────────────────────────────────────
// CONCEPTS USED: JSX, text formatting
//
// The About section explains the core loop and lore of the game.
// It also includes a dynamic "Latest Update" box on the right side.

import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="section-wrapper">

        {/* ── Section Header ────────────────────────────────────── */}
        <h2 className="section-title">
          About <span className="accent">Cendro</span>
        </h2>
        {/* Catchy Subtitle */}
        <p className="section-subtitle">
          Outrun the lava, keep the loot! 
        </p>

        <div className="about__grid">

          {/* ── Left Column: Game Lore and Mechanics ────────────── */}
          <div className="about__bio">
            <p>
              You are a daring treasure hunter deep inside an ancient volcano. But there is a catch—the volcano just woke up! Now, you must escape the rising magma by frantically jumping across various platforms in an endless jump for survival.
            </p>
            <p>
              It's not just about running away. Along your fiery path, you will collect shiny Coins and valuable XP. Use your coins at the in-game shops to grab powerful items that make your escape easier. Meanwhile, stack up that XP to level up your character and upgrade your trusty equipment!
            </p>
            <p>
              This official wiki is your ultimate survival guide. Here, you will find everything you need to master the game: detailed breakdowns of all the crazy items, equipment stats, and the different types of platforms you will encounter on your way up.
            </p>
          </div>

          {/* ── Right Column: Latest Update Box ─────────────────── */}
          <div className="about__update-box">
            <div className="about__update-header">
              <h3>Latest Update <span className="update-version">v1.2.4</span></h3>
            </div>
            <p className="about__update-title">"The Scorching Depths Patch"</p>
            
            <ul className="about__update-list">
              <li><strong>[NEW]</strong> Added 'Ice Potion' to the shop! Freezes lava for 5 seconds.</li>
              <li><strong>[NEW]</strong> 'Obsidian Shield' equipment added for extra durability.</li>
              <li><strong>[FIX]</strong> Resolved a collision bug where players clipped through crumbling platforms.</li>
              <li><strong>[FIX]</strong> Fixed coin counter visual glitch on mobile devices.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About