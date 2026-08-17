import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#competitive', label: 'Competitive' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
        {/* Brand / Logo */}
        <a href="#hero" className={styles.brand} onClick={e => handleNavClick(e, '#hero')}>
          <div className={styles.logoBadge}>AR</div>
          <span className={styles.brandName}>
            Aditya<span className={styles.brandDot}>.</span>
          </span>
        </a>

        {/* Center Nav Links */}
        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={e => handleNavClick(e, l.href)}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Right Section: Social Icons + Resume CTA */}
        <div className={styles.rightSection}>
          <div className={styles.socials}>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aditya-raj26/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Megatron144"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/adityaaarajjj/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="LeetCode Profile"
              title="LeetCode"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.785l3.855-4.126 5.406-5.788c.54-.54.54-1.414 0-1.954A1.374 1.374 0 0 0 13.483 0zm-2.88 7.283a1.39 1.39 0 0 0-.982 2.373L12.44 12.5H1.385a1.385 1.385 0 0 0 0 2.77h11.055l-2.819 2.844a1.39 1.39 0 1 0 1.966 1.964l5.197-5.244a1.387 1.387 0 0 0 0-1.964L11.585 7.67a1.378 1.378 0 0 0-.982-.387z"/>
              </svg>
            </a>
          </div>

          {/* Resume Pill Button */}
          <a
            href="#contact"
            className={styles.resumeBtn}
            onClick={e => handleNavClick(e, '#contact')}
          >
            Resume
          </a>

          {/* Mobile Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={menuOpen ? styles.open1 : ''}></span>
            <span className={menuOpen ? styles.open2 : ''}></span>
            <span className={menuOpen ? styles.open3 : ''}></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
