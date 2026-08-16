import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCounter } from '../../hooks/useCounter';
import styles from './Competitive.module.css';

export default function PlatformCard({ platform, handle, rating, ratingLabel, rankBadge, rankEmoji, href, colorVar, variant, iconSrc, meta }) {
  const isNumeric = typeof rating === 'number';
  const { count, ref: ratingRef } = useCounter(isNumeric ? parseInt(rating) : 0, 1600);
  const cardRef = useScrollReveal();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${styles[variant]} reveal`}
      ref={cardRef}
      aria-label={`${platform} profile — ${rankBadge}`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.logoWrap}>
          <div className={styles.icon} style={{ '--platform-color': `var(${colorVar})` }}>
            <img src={iconSrc} alt={`${platform} logo`} className={styles.iconImg} />
          </div>
          <div>
            <div className={styles.platformName}>{platform}</div>
            <div className={styles.handle}>@{handle}</div>
          </div>
        </div>
        <svg className={styles.linkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
          <polyline points="15 3 21 3 21 9"/>
          <line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
      </div>

      <div className={styles.ratingBlock}>
        <div className={styles.ratingLabel}>{ratingLabel}</div>
        <div className={styles.ratingValue} ref={ratingRef} style={{ color: `var(${colorVar})` }}>
          {isNumeric ? count.toLocaleString() : rating}
        </div>
        <span className={styles.rankBadge} style={{ '--platform-color': `var(${colorVar})` }}>
          {rankEmoji} {rankBadge}
        </span>
      </div>

      {meta && meta.length > 0 && (
        <div className={styles.metaRow}>
          {meta.map(m => (
            <div key={m.label} className={styles.metaItem}>
              <div className={styles.metaLabel}>{m.label}</div>
              <div className={styles.metaValue} style={m.color ? { color: m.color } : {}}>{m.value}</div>
            </div>
          ))}
        </div>
      )}

    </a>
  );
}
