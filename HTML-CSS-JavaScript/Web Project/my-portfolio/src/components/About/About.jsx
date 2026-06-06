// ─── About.jsx ────────────────────────────────────────────────
// CONCEPTS USED: JSX, static component, importing CSS
//
// The About section tells visitors who you are.
// It has a short bio on the left and some quick stat cards on the right.
//
// 🔧 WORKSHOP TASKS:
//   1. Rewrite the bio paragraphs to describe YOU
//   2. Update the stat numbers to reflect your own facts
//   3. Change the fun fact emoji & text

import './About.css'

// ── Quick Stats — update these numbers ────────────────────────
const STATS = [
  { value: '3+',  label: 'Years Coding'       },
  { value: '12+', label: 'Projects Built'     },
  { value: '5+',  label: 'Technologies'       },
  { value: '2',   label: 'Internships'        },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="section-wrapper">

        {/* Section heading */}
        <h2 className="section-title">
          About <span className="accent">Me</span>
        </h2>
        <p className="section-subtitle">A little bit about who I am</p>

        <div className="about__grid">

          {/* ── Left: Bio ─────────────────────────────────── */}
          <div className="about__bio">

            {/* 🔧 Replace these paragraphs with YOUR bio */}
            <p>
              Hey! I'm Alex, a third-year Computer Science student at XYZ
              University with a deep passion for frontend development. I love
              turning ideas into clean, functional web experiences that people
              actually enjoy using.
            </p>
            <p>
              I discovered React about a year ago and haven't looked back since.
              There's something incredibly satisfying about building interactive
              UIs from reusable components — it feels like digital LEGO.
            </p>
            <p>
              Outside of coding, I enjoy photography, hiking, and playing chess
              online. I'm always looking for interesting projects to collaborate
              on, so feel free to reach out!
            </p>

            {/* Fun fact */}
            <div className="about__fun-fact">
              <span className="about__fun-fact-icon">☕</span>
              <span>
                <strong>Fun fact:</strong> I've consumed approximately 847 cups
                of coffee while building projects.
              </span>
            </div>

            {/* CTA */}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn--outline">
              Download Resume ↗
            </a>
          </div>

          {/* ── Right: Stats grid ─────────────────────────── */}
          <div className="about__stats">
            {STATS.map((stat) => (
              // key is required by React when rendering lists
              <div key={stat.label} className="about__stat-card">
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}

            {/* Profile pic placeholder */}
            <div className="about__photo">
              {/*
                Replace this div with your real photo:
                <img src="/about-photo.jpg" alt="Alex Johnson" />
              */}
              <div className="about__photo-placeholder">AJ</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
