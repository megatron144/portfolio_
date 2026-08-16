import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Competitive.module.css';

const HIGHLIGHTS = [
  { emoji: '🥇', rank: '#155', desc: 'LeetCode Weekly\nContest 438' },
  { emoji: '🥈', rank: '#355', desc: 'LeetCode Weekly\nContest 445' },
  { emoji: '⭐', rank: 'Guardian', desc: 'LeetCode Elite\nTier (~Top 0.2%)' },
];

export default function ContestHighlights() {
  const ref = useScrollReveal();
  return (
    <div className={`${styles.highlights} reveal`} ref={ref} aria-label="Notable contest highlights">
      <div className={styles.highlightsTitle}>🏅 Notable Contest Highlights</div>
      <div className={styles.highlightsGrid} role="list">
        {HIGHLIGHTS.map((h, i) => (
          <div key={h.rank} className={`${styles.highlightItem} reveal reveal-delay-${i + 1}`} role="listitem">
            <div className={styles.highlightEmoji}>{h.emoji}</div>
            <div className={styles.highlightRank}>{h.rank}</div>
            <div className={styles.highlightDesc}>{h.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
