// ─── Hero.jsx ─────────────────────────────────────────────────
// CONCEPTS USED: JSX, props (none here — data is inside this file)
//
// The Hero section is the first thing visitors see.
// It shows your name, role, a short tagline, and two CTA buttons.
//
// 🔧 WORKSHOP TASKS:
//   1. Replace the name, role, tagline, and location with YOUR info
//   2. Update the avatar initials at the bottom

import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner section-wrapper">

        {/* ── Left: Text Content ──────────────────────────── */}
        <div className="hero__text">

          {/* Greeting badge */}
          <span className="hero__badge">👋 Available for hire</span>

          {/* Main heading — put YOUR name here */}
          <h1 className="hero__heading">
            Hi, I'm <span className="accent">Alex Johnson</span>
          </h1>

          {/* Your role / title */}
          <h2 className="hero__role">
            Frontend Developer & React Enthusiast
          </h2>

          {/* A short tagline — one punchy sentence about you */}
          <p className="hero__tagline">
            I build clean, responsive web apps that users love.
            Currently studying Computer Science at XYZ University.
          </p>

          {/* Location */}
          <p className="hero__location">
            📍 Istanbul, Turkey
          </p>

          {/* CTA Buttons */}
          <div className="hero__buttons">
            <a href="#projects" className="btn btn--primary">
              See My Work
            </a>
            <a href="#contact" className="btn btn--outline">
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div className="hero__socials">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
            >
              GitHub
            </a>
            <span className="hero__social-divider">·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
            >
              LinkedIn
            </a>
            <span className="hero__social-divider">·</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
            >
              Resume ↗
            </a>
          </div>
        </div>

        {/* ── Right: Avatar / Photo ───────────────────────── */}
        <div className="hero__avatar-wrap">
          {/*
            Replace this div with an <img> tag when you have a photo:
            <img src="/your-photo.jpg" alt="Alex Johnson" className="hero__avatar-img" />
          */}
          <div className="hero__avatar">
            <span className="hero__avatar-initials">AJ</span>
          </div>

          {/* Floating badge cards around the avatar */}
          <div className="hero__badge-card hero__badge-card--top">
            ⚛️ React Developer
          </div>
          <div className="hero__badge-card hero__badge-card--bottom">
            🚀 Open to Work
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-hint">
        <span>Scroll down</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  )
}

export default Hero
