// ─── Projects.jsx ─────────────────────────────────────────────
// CONCEPTS USED: props, .map(), useState (filter tabs), conditional rendering
//
// Features:
//   - Filter buttons that show projects by category (useState)
//   - Project cards with tag chips, links, and hover effects
//   - "Featured" badge on highlighted projects
//
// 🔧 WORKSHOP TASKS:
//   1. Replace the PROJECTS array with YOUR actual projects
//   2. Add real GitHub links and live demo URLs
//   3. Update tags to match the technologies YOU used
//   4. Swap featured: true to your best project

import { useState } from 'react'
'./GameInformation.css'

// ── Projects data — replace with your own ─────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description:
      'The very website you\'re looking at! Built with React and Vite. Features smooth scroll, responsive design, and a dark theme.',
    tags: ['React', 'Vite', 'CSS'],
    category: 'Frontend',
    github: 'https://github.com',
    demo: '#',
    featured: true,
    emoji: '🚀',
  },
  {
    id: 2,
    title: 'Weather Dashboard',
    description:
      'A real-time weather app that fetches data from the OpenWeather API. Shows current conditions and a 5-day forecast.',
    tags: ['React', 'API', 'CSS Grid'],
    category: 'Frontend',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
    emoji: '⛅',
  },
  {
    id: 3,
    title: 'Task Manager App',
    description:
      'A full-stack to-do app with user authentication, drag-and-drop tasks, and persistent storage with localStorage.',
    tags: ['React', 'Node.js', 'CSS'],
    category: 'Full Stack',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: true,
    emoji: '✅',
  },
  {
    id: 4,
    title: 'E-commerce Product Page',
    description:
      'A pixel-perfect product page clone inspired by a popular e-commerce site. Includes image gallery and cart counter.',
    tags: ['React', 'Context API', 'Styled Components'],
    category: 'Frontend',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
    emoji: '🛒',
  },
  {
    id: 5,
    title: 'Blog REST API',
    description:
      'A RESTful API built with Node.js and Express. Supports CRUD operations for posts and comments with JWT auth.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    category: 'Backend',
    github: 'https://github.com',
    demo: null,   // No live demo for backend projects
    featured: false,
    emoji: '🔌',
  },
  {
    id: 6,
    title: 'Pomodoro Timer',
    description:
      'A productivity timer built with React and the Web Audio API. Features custom session lengths and notification sounds.',
    tags: ['React', 'useState', 'useEffect'],
    category: 'Frontend',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
    emoji: '⏱️',
  },
]

// All unique categories extracted from projects data
const ALL_CATEGORIES = ['All', ...new Set(PROJECTS.map((p) => p.category))]

// ── ProjectCard: renders a single project ─────────────────────
function ProjectCard({ title, description, tags, github, demo, featured, emoji }) {
  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>

      {/* Featured badge */}
      {featured && (
        <span className="project-card__featured-badge">⭐ Featured</span>
      )}

      {/* Emoji / icon */}
      <div className="project-card__emoji">{emoji}</div>

      {/* Title */}
      <h3 className="project-card__title">{title}</h3>

      {/* Description */}
      <p className="project-card__description">{description}</p>

      {/* Tag chips */}
      <div className="project-card__tags">
        {tags.map((tag) => (
          <span key={tag} className="project-card__tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="project-card__links">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="project-card__link"
        >
          GitHub →
        </a>
        {/* Only show demo link if a URL exists */}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link--demo"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  )
}

// ── Projects: main section component ──────────────────────────
function Projects() {
  // useState: track which filter tab is active
  // When activeCategory changes, the displayed projects change too
  const [activeCategory, setActiveCategory] = useState('All')

  // Filter the projects array based on the active category
  // If "All" is selected, show every project
  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="projects">
      <div className="section-wrapper">

        <h2 className="section-title">
          My <span className="accent">Projects</span>
        </h2>
        <p className="section-subtitle">
          Things I've built — from learning exercises to real-world apps
        </p>

        {/* ── Filter tabs ──────────────────────────────────── */}
        <div className="projects__filters">
          {ALL_CATEGORIES.map((category) => (
            <button
              key={category}
              className={`projects__filter-btn ${
                activeCategory === category ? 'projects__filter-btn--active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ── Project grid ─────────────────────────────────── */}
        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              category={project.category}
              github={project.github}
              demo={project.demo}
              featured={project.featured}
              emoji={project.emoji}
            />
          ))}
        </div>

        {/* Empty state — shown when filter returns no results */}
        {filteredProjects.length === 0 && (
          <p className="projects__empty">No projects in this category yet!</p>
        )}

      </div>
    </section>
  )
}

export default Projects
