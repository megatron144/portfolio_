import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useGitHub } from '../../hooks/useGitHub';
import styles from './Projects.module.css';

const LANG_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  'C++': '#f34b7d',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
};

const PROJECTS = [
  {
    emoji: '📋',
    gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03))',
    title: 'AI Task Manager',
    desc: 'A full-stack task management app with MongoDB, Express, and React. Features user auth, real-time updates, and a clean REST API.',
    tech: ['Node.js', 'MongoDB', 'React', 'Express'],
    live: '#',
    code: 'https://github.com/Megatron144/AI-Task-Manager',
  },
  {
    emoji: '/algoviz-logo.svg',
    gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.04))',
    title: 'Algorithm Visualizer',
    desc: 'Interactive visualizations for sorting, graph traversal, and dynamic programming algorithms built with vanilla JS and HTML Canvas.',
    tech: ['JavaScript', 'HTML Canvas', 'CSS3'],
    live: '#',
    code: 'https://github.com/Megatron144/AlgoViz-Interactive-DSA-Visualizer',
  },
  {
    emoji: '📊',
    gradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))',
    title: 'CP Rating Tracker',
    desc: 'A dashboard aggregating competitive programming ratings from LeetCode, Codeforces, and CodeChef with charts and insights.',
    tech: ['React', 'Chart.js', 'APIs', 'CSS'],
    live: '#',
    code: 'https://github.com/Megatron144',
  },
];

function ProjectCard({ emoji, gradient, title, desc, tech, live, code, delay }) {
  const ref = useScrollReveal();
  const isImage = typeof emoji === 'string' && (emoji.startsWith('/') || emoji.endsWith('.svg') || emoji.endsWith('.png'));

  return (
    <article className={`${styles.card} reveal reveal-delay-${delay}`} ref={ref}>
      <div className={styles.cardHeader} style={{ background: gradient }}>
        {isImage ? (
          <img src={emoji} alt={title} className={styles.cardHeaderImg} />
        ) : (
          emoji
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.tech}>
          {tech.map(t => <span key={t} className={styles.pill}>{t}</span>)}
        </div>
        <div className={styles.links}>
          {live && live !== '#' && (
            <a href={live} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.primary}`}>Live Demo</a>
          )}
          <a href={code} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.secondary}`}>GitHub</a>
        </div>
      </div>
    </article>
  );
}

function RepoCard({ repo, delay }) {
  const ref = useScrollReveal();
  const langColor = LANG_COLORS[repo.language] || 'var(--accent-cyan)';

  return (
    <article className={`${styles.card} reveal reveal-delay-${delay}`} ref={ref}>
      <div className={styles.body}>
        <div className={styles.repoTop}>
          <span className={styles.repoIcon}>📁</span>
          <span className={styles.pill}>{repo.language || 'Code'}</span>
        </div>
        <h3 className={styles.title}>{repo.name}</h3>
        <p className={styles.desc}>
          {repo.description || 'Public repository by Aditya Raj on GitHub.'}
        </p>

        <div className={styles.repoMeta}>
          {repo.language && (
            <span className={styles.langPill}>
              <span className={styles.langDot} style={{ background: langColor }} />
              {repo.language}
            </span>
          )}
          <span>⭐ {repo.stargazers_count}</span>
          <span>⑂ {repo.forks_count}</span>
        </div>

        <div className={styles.links}>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.primary}`}>
              Live Demo
            </a>
          )}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.secondary}`}>
            View Repo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('featured');
  const { profile, repos, isLive } = useGitHub('Megatron144');

  return (
    <section id="projects" className={styles.section} aria-label="Projects">
      <div className="container">
        <p className="section-tag">Projects &amp; Code</p>
        <h2 className="section-title">What I've <span className="gradient-text">Built</span></h2>
        <p className="section-subtitle">A selection of projects and open-source code showcasing end-to-end engineering.</p>

        {/* Live GitHub Profile Banner */}
        <div className={styles.githubBanner}>
          <div className={styles.githubUser}>
            <img
              src={profile.avatar_url}
              alt={`${profile.name || profile.login} avatar`}
              className={styles.githubAvatar}
            />
            <div className={styles.githubInfo}>
              <div className={styles.githubNameRow}>
                <span className={styles.githubName}>{profile.name || 'Aditya Raj'}</span>
                <span className={styles.githubHandle}>@{profile.login}</span>
              </div>
              <p className={styles.githubBio}>{profile.bio || 'BTech student ECE at IIIT Tiruchirappalli.'}</p>
            </div>
          </div>

          <div className={styles.githubStats}>
            <div className={styles.githubStatItem}>
              <span className={styles.githubStatVal}>{profile.public_repos}</span>
              <span className={styles.githubStatLabel}>Repositories</span>
            </div>
            <div className={styles.githubStatItem}>
              <span className={styles.githubStatVal}>{profile.followers}</span>
              <span className={styles.githubStatLabel}>Followers</span>
            </div>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
            >
              Follow on GitHub ↗
            </a>
          </div>
        </div>

        {/* Tab Controls */}
        <div className={styles.tabs} role="tablist">
          <button
            className={`${styles.tabBtn} ${activeTab === 'featured' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('featured')}
            role="tab"
            aria-selected={activeTab === 'featured'}
          >
            ⭐ Featured Projects ({PROJECTS.length})
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'github' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('github')}
            role="tab"
            aria-selected={activeTab === 'github'}
          >
            ⚡ Live GitHub Repos ({repos.length})
          </button>
        </div>

        {/* Grid Display */}
        {activeTab === 'featured' ? (
          <div className={styles.grid} role="list">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={(i % 3) + 1} />
            ))}
          </div>
        ) : (
          <div className={styles.grid} role="list">
            {repos.map((repo, i) => (
              <RepoCard key={repo.id} repo={repo} delay={(i % 3) + 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

