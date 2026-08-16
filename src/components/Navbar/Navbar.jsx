import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#competitive', label: 'Competitive' },
  { href: '#projects', label: 'Projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
      <a href="#hero" className={styles.logo} onClick={e => handleNavClick(e, '#hero')}>AR</a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e => handleNavClick(e, l.href)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className={styles.cta} onClick={e => handleNavClick(e, '#contact')}>
            Contact Me
          </a>
        </li>
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? styles.open1 : ''}></span>
        <span className={menuOpen ? styles.open2 : ''}></span>
        <span className={menuOpen ? styles.open3 : ''}></span>
      </button>
    </nav>
  );
}
