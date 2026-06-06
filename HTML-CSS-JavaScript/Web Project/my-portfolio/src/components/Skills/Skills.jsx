// ─── Skills.jsx ───────────────────────────────────────────────
// CONCEPTS USED: props, .map(), reusable components, data arrays
//
// This section renders skill cards from an array of data.
// Notice how ONE SkillCard component handles ALL the different skills —
// we just pass different props each time. That's the power of props!
//
// 🔧 WORKSHOP TASKS:
//   1. Update the SKILLS array to reflect YOUR real skills
//   2. Change the skill levels to match your honest assessment
//   3. Add or remove skill categories as needed

import './Skills.css'

// ── All your skills live here — just edit this array ──────────
const SKILLS = [
  // Languages
  { name: 'JavaScript', icon: '🟨', level: 80, category: 'Language' },
  { name: 'TypeScript', icon: '🔷', level: 55, category: 'Language' },
  { name: 'Python',     icon: '🐍', level: 65, category: 'Language' },
  { name: 'HTML & CSS', icon: '🌐', level: 90, category: 'Language' },

  // Frameworks & Libraries
  { name: 'React',      icon: '⚛️',  level: 70, category: 'Framework' },
  { name: 'Node.js',    icon: '🟢', level: 55, category: 'Framework' },
  { name: 'Tailwind',   icon: '🎨', level: 65, category: 'Framework' },
  { name: 'Next.js',    icon: '▲',  level: 40, category: 'Framework' },

  // Tools
  { name: 'Git & GitHub', icon: '🐙', level: 75, category: 'Tool' },
  { name: 'VS Code',      icon: '💙', level: 90, category: 'Tool' },
  { name: 'Figma',        icon: '🎭', level: 50, category: 'Tool' },
  { name: 'Linux / CLI',  icon: '🐧', level: 60, category: 'Tool' },
]

// ── SkillCard: a reusable component that accepts props ────────
// Props: name (string), icon (emoji), level (0–100), category (string)
function SkillCard({ name, icon, level, category }) {
  return (
    <div className="skill-card">
      {/* Icon and category badge */}
      <div className="skill-card__header">
        <span className="skill-card__icon">{icon}</span>
        <span className="skill-card__category">{category}</span>
      </div>

      {/* Skill name */}
      <h3 className="skill-card__name">{name}</h3>

      {/* Progress bar — width is driven by the `level` prop */}
      <div className="skill-card__bar-track">
        <div
          className="skill-card__bar-fill"
          style={{ width: `${level}%` }}   /* inline style with JS expression */
        />
      </div>

      {/* Numeric level */}
      <span className="skill-card__level">{level}%</span>
    </div>
  )
}

// ── Skills: the section that renders all SkillCards ───────────
function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-wrapper">

        <h2 className="section-title">
          My <span className="accent">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies I work with — always learning more
        </p>

        {/* Render one SkillCard for EACH item in SKILLS array */}
        <div className="skills__grid">
          {SKILLS.map((skill) => (
            /*
              The `key` prop is REQUIRED by React when rendering lists.
              It helps React know which card is which when re-rendering.
              Use something unique — here the skill name is unique.
            */
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
              category={skill.category}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
