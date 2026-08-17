import { useState, useEffect } from 'react';

const FALLBACK_ATCODER_CONTESTS = [
  {
    platform: 'AtCoder',
    emoji: '🥇',
    rank: '#802',
    name: 'AtCoder Beginner Contest 423',
    tag: 'Performance: 1569',
    color: '#22c55e',
  },
  {
    platform: 'AtCoder',
    emoji: '⚡',
    rank: '#2195',
    name: 'AtCoder Beginner Contest 408',
    tag: 'Performance: 1152',
    color: '#22c55e',
  },
  {
    platform: 'AtCoder',
    emoji: '🥈',
    rank: '#2209',
    name: 'AtCoder Beginner Contest 415',
    tag: 'Performance: 1157',
    color: '#22c55e',
  },
  {
    platform: 'AtCoder',
    emoji: '🏅',
    rank: '#2223',
    name: 'AtCoder Beginner Contest 402',
    tag: 'Performance: 1129',
    color: '#22c55e',
  },
];

export function useAtCoder(handle = 'de_barr_') {
  const [contests, setContests] = useState(FALLBACK_ATCODER_CONTESTS);
  const [maxRating, setMaxRating] = useState(980);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchAtCoder = async () => {
      try {
        const res = await fetch(`https://atcoder.jp/users/${handle}/history/json`);
        if (!res.ok) throw new Error('AtCoder history fetch failed');
        const json = await res.json();
        if (Array.isArray(json) && json.length > 0) {
          // Sort by Place (rank) ascending
          const sorted = [...json].filter(c => c.IsRated).sort((a, b) => a.Place - b.Place);
          const top4 = sorted.slice(0, 4).map((c, i) => ({
            platform: 'AtCoder',
            emoji: i === 0 ? '🥇' : i === 1 ? '⚡' : i === 2 ? '🥈' : '🏅',
            rank: `#${c.Place}`,
            name: c.ContestNameEn || c.ContestName || 'AtCoder Beginner Contest',
            tag: `Performance: ${c.Performance}`,
            color: '#22c55e',
          }));

          const peak = Math.max(...json.map(c => c.NewRating || 0));
          if (isMounted) {
            setContests(top4);
            if (peak > 0) setMaxRating(peak);
          }
        }
      } catch (err) {
        console.warn('Using AtCoder fallback data:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAtCoder();
    return () => { isMounted = false; };
  }, [handle]);

  return { contests, maxRating, loading };
}
