import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCodeforces } from '../../hooks/useCodeforces';
import styles from './Competitive.module.css';

const CODECHEF_HIGHLIGHTS = [
  {
    platform: 'CodeChef',
    emoji: '⭐',
    rank: '1837',
    desc: '4 Star Rating',
    sub: 'CodeChef Peak Rating',
    badgeClass: 'badgeCodeChef',
    rankColor: '#a78bfa',
  },
];

export default function ContestHighlights() {
  const [filter, setFilter] = useState('all');
  const ref = useScrollReveal();
  const { bestContests, rating, maxRating, isLive } = useCodeforces('adityaraj18');

  // Build live Codeforces highlights
  const cfHighlights = [
    ...(bestContests || []).map((c) => ({
      platform: 'Codeforces',
      emoji: c.emoji || '⚡',
      rank: c.rank,
      desc: c.name,
      sub: c.tag ? `Codeforces ${c.tag}` : 'Codeforces Rated Contest',
      badgeClass: 'badgeCodeforces',
      rankColor: '#38bdf8',
    })),
    {
      platform: 'Codeforces',
      emoji: '🏆',
      rank: `${maxRating || 1845}`,
      desc: 'Expert Peak Rating',
      sub: 'Top Tier Rating Milestone',
      badgeClass: 'badgeCodeforces',
      rankColor: '#38bdf8',
    },
  ];

  const allHighlights = [...cfHighlights, ...CODECHEF_HIGHLIGHTS];

  const displayedHighlights =
    filter === 'codeforces'
      ? cfHighlights
      : filter === 'codechef'
      ? CODECHEF_HIGHLIGHTS
      : allHighlights;

  return (
    <div className={`${styles.highlights} reveal`} ref={ref} aria-label="Notable contest highlights">
      <div className={styles.highlightsHeader}>
        <div className={styles.highlightsTitle}>
          <span>🏅 Notable Contest Highlights</span>
        </div>

        <div className={styles.highlightTabs} role="tablist">
          <button
            className={`${styles.highlightTabBtn} ${filter === 'all' ? styles.highlightTabActive : ''}`}
            onClick={() => setFilter('all')}
            role="tab"
          >
            All ({allHighlights.length})
          </button>
          <button
            className={`${styles.highlightTabBtn} ${filter === 'codeforces' ? styles.highlightTabActive : ''}`}
            onClick={() => setFilter('codeforces')}
            role="tab"
          >
            Codeforces ({cfHighlights.length})
          </button>
          <button
            className={`${styles.highlightTabBtn} ${filter === 'codechef' ? styles.highlightTabActive : ''}`}
            onClick={() => setFilter('codechef')}
            role="tab"
          >
            CodeChef ({CODECHEF_HIGHLIGHTS.length})
          </button>
        </div>
      </div>

      <div className={styles.highlightsGrid} role="list">
        {displayedHighlights.map((h, i) => (
          <div key={`${h.platform}-${h.rank}-${i}`} className={styles.highlightItem} role="listitem">
            <span className={`${styles.highlightPlatformBadge} ${styles[h.badgeClass]}`}>
              {h.platform}
            </span>
            <div className={styles.highlightEmoji}>{h.emoji}</div>
            <div className={styles.highlightRank} style={h.rankColor ? { color: h.rankColor } : {}}>
              {h.rank}
            </div>
            <div className={styles.highlightDesc}>{h.desc}</div>
            <div className={styles.highlightSub}>{h.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

