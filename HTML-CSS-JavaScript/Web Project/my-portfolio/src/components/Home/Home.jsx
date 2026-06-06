// ─── Home.jsx ─────────────────────────────────────────────────
// CONCEPTS USED: JSX, props (none here — data is inside this file)
//
// The Home section is the first thing visitors see.
// It shows your name, role, a short tagline, and two CTA buttons.
//
// 🔧 WORKSHOP TASKS:
//   1. Replace the name, role, tagline, and location with YOUR info
//   2. Update the avatar initials at the bottom

import './Home.css'


function Home() {
  return (
    <section id="home" className="home">
      <div className="home__inner section-wrapper">

        {/* ── Left: Text Content ──────────────────────────── */}
        <div className="home__text">

          {/* Greeting badge */}
          <span className="home__badge">👋 Available for hire</span>

          {/* Main heading — put YOUR name here */}
          <h1 className="home__heading">
            Hi, I'm <span className="accent">Alex Johnson</span>
          </h1>

          {/* Your role / title */}
          <h2 className="home__role">
            Frontend Developer & React Enthusiast
          </h2>

          {/* A short tagline — one punchy sentence about you */}
          <p className="home__tagline">
            I build clean, responsive web apps that users love.
            Currently studying Computer Science at XYZ University.
          </p>

          {/* Location */}
          <p className="home__location">
            📍 Istanbul, Turkey
          </p>

          {/* CTA Buttons */}
          <div className="home__buttons">
            <a href="#projects" className="btn btn--primary">
              See My Work
            </a>
            <a href="#contact" className="btn btn--outline">
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="home__socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              GitHub
            </a>
            <span className="home__social-divider">·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              LinkedIn
            </a>
            <span className="home__social-divider">·</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="home__social-link"
            >
              Resume ↗
            </a>
          </div>
        </div>

        {/* ── Right: Avatar / Photo ───────────────────────── */}
        <div className="home__avatar-wrap">
          {/*
            Replace this div with an <img> tag when you have a photo:
            <img src="/your-photo.jpg" alt="Alex Johnson" className="home__avatar-img" />
          */}
          <div className="home__avatar">
            <span className="home__avatar-initials">AJ</span>
          </div>

          {/* Floating badge cards around the avatar */}
          <div className="home__badge-card home__badge-card--top">
            ⚛️ React Developer
          </div>
          <div className="home__badge-card home__badge-card--bottom">
            🚀 Open to Work
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="home__scroll-hint">
        <span>Scroll down</span>
        <div className="home__scroll-arrow" />
      </div>
    </section>
  )
}

export default Home
