import { useState, useEffect } from 'react';

const FALLBACK_CODEFORCES = {
  handle: 'adityaraj18',
  rating: 1932,
  maxRating: 1932,
  rank: 'Candidate Master',
  maxRank: 'Candidate Master',
  avatar: 'https://userpic.codeforces.org/3717577/avatar/7dc12fb73de6b6f3.jpg',
  friendOfCount: 31,
  contribution: 1,
  organization: 'Cat sac club',
  bestContests: [
    {
      platform: 'Codeforces',
      emoji: '🥇',
      rank: '#133',
      name: 'Codeforces Round 1047 (Div. 3)',
      tag: 'Div 3 Best',
      color: '#1f8dd6',
    },
    {
      platform: 'Codeforces',
      emoji: '⚡',
      rank: '#316',
      name: 'Codeforces Round 1108 (Div. 2)',
      tag: 'Div 2 Best',
      color: '#1f8dd6',
    },
    {
      platform: 'Codeforces',
      emoji: '🥈',
      rank: '#403',
      name: 'Codeforces Round 1064 (Div. 2)',
      tag: 'Div 2 Top 400',
      color: '#1f8dd6',
    },
  ],
};

function formatRank(rankStr, fallback = 'Candidate Master') {
  if (!rankStr) return fallback;
  return rankStr
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

export function useCodeforces(handle = 'adityaraj18') {
  const [data, setData] = useState(FALLBACK_CODEFORCES);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchCodeforces = async () => {
      try {
        const [infoRes, ratingRes] = await Promise.all([
          fetch(`https://codeforces.com/api/user.info?handles=${handle}`),
          fetch(`https://codeforces.com/api/user.rating?handle=${handle}`),
        ]);

        let userObj = {};
        let bestContests = FALLBACK_CODEFORCES.bestContests;

        if (infoRes.ok) {
          const json = await infoRes.json();
          if (json.status === 'OK' && json.result && json.result.length > 0) {
            const user = json.result[0];
            userObj = {
              handle: user.handle,
              rating: user.rating || 1932,
              maxRating: user.maxRating || 1932,
              rank: formatRank(user.rank, 'Candidate Master'),
              maxRank: formatRank(user.maxRank, 'Candidate Master'),
              avatar: user.avatar || FALLBACK_CODEFORCES.avatar,
              friendOfCount: user.friendOfCount ?? 0,
              contribution: user.contribution ?? 0,
              organization: user.organization || '',
            };
          }
        }

        if (ratingRes.ok) {
          const rJson = await ratingRes.json();
          if (rJson.status === 'OK' && Array.isArray(rJson.result) && rJson.result.length > 0) {
            // Sort contests by rank ascending
            const sortedByRank = [...rJson.result].sort((a, b) => a.rank - b.rank);
            const topContests = sortedByRank.slice(0, 4).map((c, i) => ({
              platform: 'Codeforces',
              emoji: i === 0 ? '🥇' : i === 1 ? '⚡' : i === 2 ? '🥈' : '🏅',
              rank: `#${c.rank}`,
              name: c.contestName,
              tag: c.contestName.includes('Div. 2') ? 'Div 2' : c.contestName.includes('Div. 3') ? 'Div 3' : 'Rated',
              color: '#1f8dd6',
              ratingChange: c.newRating - c.oldRating,
              newRating: c.newRating,
            }));

            if (topContests.length > 0) {
              bestContests = topContests;
            }
          }
        }

        if (isMounted) {
          setData(prev => ({
            ...prev,
            ...userObj,
            bestContests,
          }));
          setIsLive(true);
        }
      } catch (err) {
        console.warn('Codeforces API fetch error, using fallback:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCodeforces();
    return () => { isMounted = false; };
  }, [handle]);

  return { ...data, loading, isLive };
}
