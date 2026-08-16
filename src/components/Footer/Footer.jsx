import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <p className={styles.text}>
          Crafted with <span className={styles.heart}>♥</span> by <strong>Aditya Raj</strong> &nbsp;·&nbsp;
          LeetCode Guardian &nbsp;·&nbsp; Codeforces Expert &nbsp;·&nbsp; CodeChef 4★ &nbsp;·&nbsp;
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
