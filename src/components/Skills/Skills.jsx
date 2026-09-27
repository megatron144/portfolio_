import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Skills.module.css';

const CATEGORIES = [
  { icon: '🧠', name: 'Languages', tags: ['C++', 'Python', 'JavaScript (ES6+)', 'TypeScript', 'Java', 'SQL', 'HTML5', 'CSS3'] },
  { icon: '⚛️', name: 'Frontend', tags: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Modern CSS', 'HTML Canvas', 'Vite'] },
  { icon: '🔧', name: 'Backend & Databases', tags: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'MongoDB', 'PostgreSQL', 'Redis'] },
  { icon: '☁️', name: 'Tools & DevOps', tags: ['Git', 'GitHub', 'Linux', 'Docker', 'VS Code', 'Postman'] },
  { icon: '🎯', name: 'Core CS & Systems', tags: ['OOP', 'System Design', 'DBMS', 'OS', 'Computer Networks'] },
  { icon: '🏗️', name: 'Problem Solving & AI', tags: ['Data Structures', 'Algorithms', 'Machine Learning', 'Artificial Intelligence'] },
];

function SkillCard({ icon, name, tags, delay }) {
  const ref = useScrollReveal();
  return (
    <div className={`${styles.card} reveal reveal-delay-${delay}`} ref={ref}>
      <div className={styles.header}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.tags}>
        {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skills} aria-label="Skills and Technologies">
      <div className="container">
        <p className="section-tag">Skills</p>
        <h2 className="section-title">What I <span className="gradient-text">work with</span></h2>
        <p className="section-subtitle">A versatile toolkit spanning algorithms, full-stack development, and systems programming.</p>
        <div className={styles.grid} role="list">
          {CATEGORIES.map((cat, i) => (
            <SkillCard key={cat.name} {...cat} delay={(i % 4) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
