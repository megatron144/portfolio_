import { useTypewriter } from '../../hooks/useTypewriter';
import { useCounter } from '../../hooks/useCounter';
import styles from './Hero.module.css';

const PHRASES = [
  'Competitive Programmer',
  'Full-Stack Developer',
  'Algorithm Enthusiast',
  'LeetCode Guardian',
  'Problem Solver',
];

function StatItem({ target, label }) {
  const isNumeric = !isNaN(parseInt(target));
  const { count, ref } = useCounter(isNumeric ? parseInt(target) : 0);
  return (
    <div className={styles.statItem} ref={ref}>
      <div className={styles.statNumber}>{isNumeric ? count.toLocaleString() : target}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(PHRASES);

  const scroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.badge} aria-label="Open to opportunities">
            <span className={styles.badgeDot}></span>
            Available for Work
          </div>

          <h1 className={styles.name}>
            <span className="gradient-text">Aditya Raj</span>
          </h1>

          <p className={styles.title}>
            Software Developer &amp;{' '}
            <span className={styles.typed} aria-live="polite">{typed}</span>
            <span className={styles.cursor}>|</span>
          </p>

          <p className={styles.desc}>
            Passionate engineer who bridges algorithmic thinking with full-stack development.
            LeetCode <strong>Guardian</strong>, Codeforces <strong>Expert</strong>, and CodeChef{' '}
            <strong>4★</strong> — turning competitive problem-solving into elegant software.
          </p>

          <div className={styles.actions}>
            <button className="btn-primary" onClick={() => scroll('#projects')}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="btn-secondary" onClick={() => scroll('#competitive')}>
              ⚡ CP Section
            </button>
          </div>

          <div className={styles.stats} role="list" aria-label="Key stats">
            <StatItem target={2138} label="LeetCode Rating" />
            <StatItem target={1845} label="Codeforces Rating" />
            <StatItem target="Top 400" label="Weekly Contest" />
          </div>
        </div>
      </div>
    </section>
  );
}
