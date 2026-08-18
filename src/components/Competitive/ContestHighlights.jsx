import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useCodeforces } from '../../hooks/useCodeforces';
import { useAtCoder } from '../../hooks/useAtCoder';
import styles from './Competitive.module.css';

const CODECHEF_HIGHLIGHTS = [
  {
    platform: 'CodeChef',
    emoji: '🥇',
    rank: '#74',
    desc: 'Starters 207 (Rated)',
    sub: 'Rating: 1818 (+38)',
    badgeClass: 'badgeCodeChef',
    rankColor: '#93c5fd',
  },
  {
    platform: 'CodeChef',
    emoji: '⚡',
    rank: '#157',
    desc: 'Starters 183 (Rated)',
    sub: 'Rating: 1759 (+54)',
    badgeClass: 'badgeCodeChef',
    rankColor: '#93c5fd',
  },
  {
    platform: 'CodeChef',
    emoji: '🥈',
    rank: '#207',
    desc: 'Starters 185 (Rated)',
    sub: 'Rating: 1785 (+35)',
    badgeClass: 'badgeCodeChef',
    rankColor: '#93c5fd',
  },
  {
    platform: 'CodeChef',
    emoji: '🏅',
    rank: '#232',
    desc: 'Starters 198 (Rated)',
    sub: 'Rating: 1823 (+31)',
    badgeClass: 'badgeCodeChef',
    rankColor: '#93c5fd',
  },
  {
    platform: 'CodeChef',
    emoji: '🏆',
    rank: '1837',
    desc: '4 Star Peak Rating',
    sub: 'Division 1/2 Milestone',
    badgeClass: 'badgeCodeChef',
    rankColor: '#93c5fd',
  },
];

const LEETCODE_HIGHLIGHTS = [
  {
    platform: 'LeetCode',
    emoji: '🥇',
    rank: '#155',
    desc: 'Weekly Contest 438',
    sub: 'Global Rank out of 30,000+',
    badgeClass: 'badgeLeetCode',
    rankColor: '#f89820',
  },
  {
    platform: 'LeetCode',
    emoji: '🥈',
    rank: '#355',
    desc: 'Weekly Contest 445',
    sub: 'Global Rank out of 30,000+',
    badgeClass: 'badgeLeetCode',
    rankColor: '#f89820',
  },
  {
    platform: 'LeetCode',
    emoji: '⭐',
    rank: '2192',
    desc: 'Guardian Peak Rating',
    sub: 'Max Rating Achieved',
    badgeClass: 'badgeLeetCode',
    rankColor: '#f89820',
  },
  {
    platform: 'LeetCode',
    emoji: '🏆',
    rank: 'Guardian',
    desc: 'Elite Tier (~Top 0.2%)',
    sub: 'Highest LeetCode Badge',
    badgeClass: 'badgeLeetCode',
    rankColor: '#f89820',
  },
];

export default function ContestHighlights() {
  const [activeTab, setActiveTab] = useState('codeforces');
  const ref = useScrollReveal();
  const { bestContests, maxRating: cfMaxRating } = useCodeforces('adityaraj18');
  const { contests: atcoderContests, maxRating: atcoderMaxRating } = useAtCoder('de_barr_');

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
      rank: `${cfMaxRating || 1845}`,
      desc: 'Expert Peak Rating',
      sub: 'Top Tier Rating Milestone',
      badgeClass: 'badgeCodeforces',
      rankColor: '#38bdf8',
    },
  ];

  // Build live AtCoder highlights
  const atcoderHighlights = [
    ...(atcoderContests || []).map((c) => ({
      platform: 'AtCoder',
      emoji: c.emoji || '⚡',
      rank: c.rank,
      desc: c.name,
      sub: c.tag || 'AtCoder Beginner Contest',
      badgeClass: 'badgeAtCoder',
      rankColor: '#22c55e',
    })),
    {
      platform: 'AtCoder',
      emoji: '🏆',
      rank: `${atcoderMaxRating || 980}`,
      desc: '6 Kyu Peak Rating',
      sub: 'Green Tier Rating Milestone',
      badgeClass: 'badgeAtCoder',
      rankColor: '#22c55e',
    },
  ];

  const highlightsMap = {
    codeforces: cfHighlights,
    codechef: CODECHEF_HIGHLIGHTS,
    leetcode: LEETCODE_HIGHLIGHTS,
    atcoder: atcoderHighlights,
  };

  const displayedHighlights = highlightsMap[activeTab] || cfHighlights;

  return (
    <div className={`${styles.highlights} reveal`} ref={ref} aria-label="Notable contest highlights">
      <div className={styles.highlightsHeader}>
        <div className={styles.highlightsTitle}>
          <span>🏅 Notable Contest Highlights</span>
        </div>

        <div className={styles.highlightTabs} role="tablist">
          <button
            className={`${styles.highlightTabBtn} ${activeTab === 'codeforces' ? styles.highlightTabActive : ''}`}
            onClick={() => setActiveTab('codeforces')}
            role="tab"
          >
            Codeforces ({cfHighlights.length})
          </button>
          <button
            className={`${styles.highlightTabBtn} ${activeTab === 'codechef' ? styles.highlightTabActive : ''}`}
            onClick={() => setActiveTab('codechef')}
            role="tab"
          >
            CodeChef ({CODECHEF_HIGHLIGHTS.length})
          </button>
          <button
            className={`${styles.highlightTabBtn} ${activeTab === 'leetcode' ? styles.highlightTabActive : ''}`}
            onClick={() => setActiveTab('leetcode')}
            role="tab"
          >
            LeetCode ({LEETCODE_HIGHLIGHTS.length})
          </button>
          <button
            className={`${styles.highlightTabBtn} ${activeTab === 'atcoder' ? styles.highlightTabActive : ''}`}
            onClick={() => setActiveTab('atcoder')}
            role="tab"
          >
            AtCoder ({atcoderHighlights.length})
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
            <div className={styles.highlightRank}>
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


