import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

const INFO_CARDS = [
  { icon: '🎓', label: 'Institution', value: 'IIIT Tiruchirappalli', sub: 'Aug 2023 - May 2027' },
  { icon: '📜', label: 'Degree', value: 'BTech in ECE', sub: 'CGPA: 7.12 / 10' },
  { icon: '💡', label: 'Specialty', value: 'DSA & Full Stack', sub: 'Algorithmic Systems' },
  { icon: '📍', label: 'Location', value: 'Tiruchirappalli, TN', sub: 'Tamil Nadu, India' },
];

const COURSEWORK = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Database Management (DBMS)',
  'Computer Networks',
  'Object-Oriented Programming',
  'Machine Learning',
  'Artificial Intelligence',
  'Digital Electronics',
];

export default function About() {
  const gridRef = useScrollReveal();

  return (
    <section id="about" className={styles.about} aria-label="About Aditya Raj">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className="section-tag">About Me</p>
            <h2 className="section-title">
              Building things that<br />
              <span className="gradient-text">matter</span>
            </h2>
            <p className={styles.text}>
              I'm a passionate software developer and BTech student at IIIT Tiruchirappalli with a strong foundation in algorithms and data
              structures, forged through years of competitive programming. I love crafting clean,
              efficient solutions — whether that's a complex algorithm or an AI-integrated full-stack web application.
            </p>
            <p className={styles.text} style={{ marginBottom: 0 }}>
              When I'm not competing on LeetCode or Codeforces, I'm engineering projects
              that solve real-world problems. I believe great code combines rigorous engineering with seamless user experiences.
            </p>

            <div className={styles.coursework}>
              <div className={styles.courseworkTitle}>Relevant Coursework</div>
              <div className={styles.courseworkList}>
                {COURSEWORK.map((item) => (
                  <span key={item} className={styles.courseworkPill}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.cards} reveal`} ref={gridRef} aria-label="Quick info cards">
            {INFO_CARDS.map((card) => (
              <div key={card.label} className={styles.card}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <div className={styles.cardLabel}>{card.label}</div>
                <div className={styles.cardValue}>{card.value}</div>
                {card.sub && <div className={styles.cardSub}>{card.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
