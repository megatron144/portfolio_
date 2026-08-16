import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    emoji: '📋',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(37,99,235,0.2))',
    title: 'AI Task Manager',
    desc: 'A full-stack task management app with MongoDB, Express, and React. Features user auth, real-time updates, and a clean REST API.',
    tech: ['Node.js', 'MongoDB', 'React', 'Express'],
    live: '#',
    code: '#',
  },
  {
    emoji: '🔢',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(52,211,153,0.2))',
    title: 'Algorithm Visualizer',
    desc: 'Interactive visualizations for sorting, graph traversal, and dynamic programming algorithms built with vanilla JS and HTML Canvas.',
    tech: ['JavaScript', 'HTML Canvas', 'CSS3'],
    live: '#',
    code: '#',
  },
  {
    emoji: '📊',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(248,152,32,0.2))',
    title: 'CP Rating Tracker',
    desc: 'A dashboard aggregating competitive programming ratings from LeetCode, Codeforces, and CodeChef with charts and insights.',
    tech: ['React', 'Chart.js', 'APIs', 'CSS'],
    live: '#',
    code: '#',
  },
];

function ProjectCard({ emoji, gradient, title, desc, tech, live, code, delay }) {
  const ref = useScrollReveal();
  return (
    <article className={`${styles.card} reveal reveal-delay-${delay}`} ref={ref}>
      <div className={styles.cardHeader} style={{ background: gradient }}>{emoji}</div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.tech}>
          {tech.map(t => <span key={t} className={styles.pill}>{t}</span>)}
        </div>
        <div className={styles.links}>
          <a href={live} className={`${styles.link} ${styles.primary}`}>Live Demo</a>
          <a href={code} className={`${styles.link} ${styles.secondary}`}>GitHub</a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-label="Projects">
      <div className="container">
        <p className="section-tag">// projects</p>
        <h2 className="section-title">What I've <span className="gradient-text">Built</span></h2>
        <p className="section-subtitle">A selection of projects showcasing my ability to build end-to-end solutions.</p>
        <div className={styles.grid} role="list">
          {PROJECTS.map((p, i) => <ProjectCard key={p.title} {...p} delay={(i % 3) + 1} />)}
        </div>
      </div>
    </section>
  );
}
