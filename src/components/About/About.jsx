import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

const INFO_CARDS = [
  { icon: '🎓', label: 'Education', value: 'Computer Science' },
  { icon: '📍', label: 'Location', value: 'India' },
  { icon: '💡', label: 'Specialty', value: 'DSA & Full Stack' },
  { icon: '🚀', label: 'Focus', value: 'Problem Solving' },
];

export default function About() {
  const gridRef = useScrollReveal();

  return (
    <section id="about" className={styles.about} aria-label="About Aditya Raj">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className="section-tag">// about me</p>
            <h2 className="section-title">
              Building things that<br />
              <span className="gradient-text">matter</span>
            </h2>
            <p className={styles.text}>
              I'm a passionate software developer with a strong foundation in algorithms and data
              structures, forged through years of competitive programming. I love crafting clean,
              efficient solutions — whether that's a complex algorithm or a full-stack web application.
            </p>
            <p className={styles.text} style={{ marginBottom: 0 }}>
              When I'm not grinding LeetCode or competing on Codeforces, I'm building projects
              that solve real-world problems. I believe great code tells a story.
            </p>
          </div>

          <div className={`${styles.cards} reveal`} ref={gridRef} aria-label="Quick info cards">
            {INFO_CARDS.map((card, i) => (
              <div key={card.label} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <div className={styles.cardLabel}>{card.label}</div>
                <div className={styles.cardValue}>{card.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
