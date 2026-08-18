import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.content}>
          {/* Top Line: Built With + Tech Stack */}
          <div className={styles.builtWith}>
            <span className={styles.builtText}>built with</span>
            <div className={styles.techIcons}>
              {/* React */}
              <span title="React">
                <svg width="22" height="22" viewBox="-11.5 -10.23174 23 20.46348" fill="none" aria-label="React">
                  <circle cx="0" cy="0" r="2.05" fill="#ffffff"/>
                  <g stroke="#ffffff" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                    <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                  </g>
                </svg>
              </span>

              {/* Vite / Modern CSS */}
              <span title="Vite & CSS3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Vite & CSS3">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>

              {/* Node.js */}
              <span title="Node.js">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Node.js">
                  <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2z" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6.5l5.2 3v6l-5.2 3-5.2-3v-6l5.2-3z" fill="rgba(255, 255, 255, 0.15)" stroke="#ffffff" strokeWidth="1.2"/>
                </svg>
              </span>

              {/* JavaScript */}
              <span title="JavaScript (ES6+)">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-label="JavaScript">
                  <rect width="24" height="24" rx="4" fill="#ffffff"/>
                  <path d="M7 17.5c0 .8.6 1.5 1.5 1.5 1 0 1.5-.6 1.5-1.5v-7h-1.5v7c0 .2-.1.3-.3.3-.2 0-.3-.1-.3-.3v-4.5H7v4.5zm5.5-3.5c0-.8.6-1.5 1.5-1.5h1.5c.8 0 1.5.7 1.5 1.5v.5h-1.5v-.5c0-.2-.1-.3-.3-.3h-1.2c-.2 0-.3.1-.3.3v.8c0 .2.1.3.3.3h1.2c.8 0 1.5.7 1.5 1.5v1.2c0 .8-.7 1.5-1.5 1.5H14c-.8 0-1.5-.7-1.5-1.5v-.5h1.5v.5c0 .2.1.3.3.3h1.2c.2 0 .3-.1.3-.3v-.8c0-.2-.1-.3-.3-.3h-1.2c-.8 0-1.5-.7-1.5-1.5V14z" fill="#000000"/>
                </svg>
              </span>
            </div>
          </div>

          {/* Middle Line: Crafted with Red Heart by Aditya Raj */}
          <p className={styles.creditText}>
            Crafted with <span className={styles.redHeart}>❤️</span> by <strong className={styles.author}>Aditya Raj</strong> &nbsp;©&nbsp; {new Date().getFullYear()}
          </p>

          {/* Bottom Line: View Source Code Link */}
          <a
            href="https://github.com/Megatron144/portfolio_"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.sourceLink}
          >
            View source code <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
