import { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

const LINKS = [
  { href: 'mailto:adityarajj6811@gmail.com',                  emoji: '✉️', bg: 'rgba(124,58,237,0.15)', label: 'Email — adityarajj6811@gmail.com' },
  { href: 'https://leetcode.com/u/adityaaarajjj/',           emoji: '🟧', bg: 'rgba(248,152,32,0.15)',  label: 'LeetCode — @adityaaarajjj'  },
  { href: 'https://codeforces.com/profile/adityaraj18',       emoji: '🔵', bg: 'rgba(31,141,214,0.15)',  label: 'Codeforces — @adityaraj18'   },
  { href: 'https://www.codechef.com/users/adityaaa_rajjj',    emoji: '🟣', bg: 'rgba(102,110,237,0.15)', label: 'CodeChef — @adityaaa_rajjj'  },
  { href: 'https://github.com/Megatron144',                   emoji: '💻', bg: 'rgba(255,255,255,0.08)', label: 'GitHub — @Megatron144'        },
];

export default function Contact() {
  const formRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const response = await fetch('https://formsubmit.co/ajax/adityarajj6811@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Message from ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      console.error('Form error:', err);
      setError('Something went wrong. Please email directly at adityarajj6811@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className="container">
        <p className="section-tag">// contact</p>
        <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>

        <div className={styles.grid}>
          <div>
            <p className={styles.intro}>
              Whether it's a project, an opportunity, or just a chat about algorithms —
              I'm always open. Drop me a message!
            </p>
            <div className={styles.links} aria-label="Social links">
              {LINKS.map(l => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  <div className={styles.linkIcon} style={{ background: l.bg }}>{l.emoji}</div>
                  <span className={styles.linkText}>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form className={`${styles.form} reveal`} ref={formRef} onSubmit={handleSubmit} noValidate>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="contact-name">Your Name</label>
              <input id="contact-name" className={styles.input} type="text" name="name" placeholder="John Doe" required autoComplete="name" />
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="contact-email">Email Address</label>
              <input id="contact-email" className={styles.input} type="email" name="email" placeholder="john@example.com" required autoComplete="email" />
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="contact-message">Message</label>
              <textarea id="contact-message" className={styles.textarea} name="message" placeholder="Hey Aditya, I'd love to discuss..." required />
            </div>
            <button
              type="submit"
              className={`btn-primary ${styles.submitBtn} ${submitted ? styles.success : ''}`}
              disabled={loading || submitted}
            >
              {submitted ? '✅ Message Sent!' : loading ? 'Sending…' : (
                <>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </>
              )}
            </button>
            {error && <p className={styles.errorText}>{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
