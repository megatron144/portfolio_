import { useState, useEffect } from 'react';

const FALLBACK_USER = {
  login: 'Megatron144',
  name: 'Aditya Raj',
  avatar_url: 'https://avatars.githubusercontent.com/u/152900366?v=4',
  html_url: 'https://github.com/Megatron144',
  bio: 'BTech student ECE at IIIT Tiruchirappalli.',
  public_repos: 2,
  followers: 0,
  following: 0,
};

const FALLBACK_REPOS = [
  {
    id: 1,
    name: 'portfolio_',
    description: 'Personal portfolio website built with React, Vite, and modern CSS.',
    html_url: 'https://github.com/Megatron144/portfolio_',
    homepage: 'https://portfolio-tawny-eta-x5rrin3yid.vercel.app',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
  },
  {
    id: 2,
    name: 'AI-Task-Manager',
    description: 'Full-stack task management application with AI capabilities.',
    html_url: 'https://github.com/Megatron144/AI-Task-Manager',
    homepage: null,
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
  },
];

export function useGitHub(username = 'Megatron144') {
  const [profile, setProfile] = useState(FALLBACK_USER);
  const [repos, setRepos] = useState(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchGitHubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ]);

        if (userRes.ok) {
          const userData = await userRes.json();
          if (isMounted) {
            setProfile(userData);
            setIsLive(true);
          }
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (isMounted && Array.isArray(reposData) && reposData.length > 0) {
            setRepos(reposData);
          }
        }
      } catch (err) {
        console.warn('GitHub API fetch failed, using fallback:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchGitHubData();
    return () => { isMounted = false; };
  }, [username]);

  return { profile, repos, loading, isLive };
}
