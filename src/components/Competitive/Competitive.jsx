import PlatformCard from './PlatformCard';
import ContestHighlights from './ContestHighlights';
import styles from './Competitive.module.css';
import atcoderLogo from '../../assets/atcoder.png';
import { useCodeforces } from '../../hooks/useCodeforces';

export default function Competitive() {
  const cf = useCodeforces('adityaraj18');

  const platforms = [
    {
      platform: 'LeetCode',
      handle: 'adityaaarajjj',
      rating: 2192,
      ratingLabel: 'Max Rating',
      rankBadge: 'Guardian',
      rankEmoji: '🏆',
      colorVar: '--lc-orange',
      variant: 'leetcode',
      href: 'https://leetcode.com/u/adityaaarajjj/',
      iconSrc: 'https://cdn.simpleicons.org/leetcode/ffffff',
      meta: [{ label: 'Global Rank', value: 'Top 0.2%' }],
    },
    {
      platform: 'Codeforces',
      handle: cf.handle,
      rating: cf.maxRating || cf.rating,
      ratingLabel: 'Max Rating',
      rankBadge: cf.maxRank || cf.rank,
      rankEmoji: '⚡',
      colorVar: '--cf-blue',
      variant: 'codeforces',
      href: `https://codeforces.com/profile/${cf.handle}`,
      iconSrc: 'https://cdn.simpleicons.org/codeforces/ffffff',
      isLive: cf.isLive,
      meta: [
        { label: 'Current Rating', value: cf.rating },
        { label: 'Friends', value: cf.friendOfCount },
      ],
    },
    {
      platform: 'CodeChef',
      handle: 'adityaaa_rajjj',
      rating: 1837,
      ratingLabel: 'Current Rating',
      rankBadge: '4 Star',
      rankEmoji: '⭐',
      colorVar: '--cc-brown',
      variant: 'codechef',
      href: 'https://www.codechef.com/users/adityaaa_rajjj',
      iconSrc: 'https://cdn.simpleicons.org/codechef/ffffff',
      meta: [{ label: 'Division', value: 'Div 1/2' }],
    },
    {
      platform: 'AtCoder',
      handle: 'de_barr_',
      rating: 980,
      ratingLabel: 'Current Rating',
      rankBadge: '6 Kyu',
      rankEmoji: '🟢',
      colorVar: '--at-green',
      variant: 'atcoder',
      href: 'https://atcoder.jp/users/de_barr_',
      iconSrc: '/atcoder.svg',
      meta: [{ label: 'Max Rating', value: '980' }],
    },
  ];

  return (
    <section id="competitive" className={styles.section} aria-label="Competitive Coding Achievements">
      <div className="container">
        <div className={styles.intro}>
          <p className="section-tag">Competitive Coding</p>
          <h2 className="section-title">
            Where Algorithms <span className="gradient-text">Meet Excellence</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: 640, margin: '0 auto 60px' }}>
            Competing on the world's top platforms, consistently pushing ratings and solving complex problems
            under pressure. Here's my competitive programming journey.
          </p>
        </div>

        <div className={styles.platformsGrid} role="list">
          {platforms.map((p, i) => (
            <PlatformCard key={p.platform} {...p} delay={i + 1} />
          ))}
        </div>

        <ContestHighlights />
      </div>
    </section>
  );
}

