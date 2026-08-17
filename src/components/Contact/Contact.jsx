import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const cardRef = useScrollReveal();

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className="container">
        <div className={`${styles.contactCard} reveal`} ref={cardRef}>
          {/* Left Column: Heading, Subtext, Say Hello CTA & Socials */}
          <div className={styles.leftCol}>
            <h2 className={styles.heading}>
              Let's Build Something <span className={styles.highlight}>Great Together</span>
            </h2>

            <p className={styles.subtext}>
              I'm open to software engineering internships, challenging projects, and collaborations. I enjoy solving problems, building things from scratch, and turning ideas into working products.
            </p>

            <p className={styles.subtext} style={{ marginTop: '-8px' }}>
              If you have an opportunity or an interesting idea, let's talk.
            </p>

            <a
              href="mailto:adityarajj6811@gmail.com"
              className={styles.sayHelloBtn}
            >
              Say Hello <span className={styles.btnArrow}>→</span>
            </a>

            {/* Social Buttons Row */}
            <div className={styles.socialRow} aria-label="Social profiles">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/aditya-raj26/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Megatron144"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="GitHub"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/adityaaarajjj/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LeetCode"
                title="LeetCode"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.785l3.855-4.126 5.406-5.788c.54-.54.54-1.414 0-1.954A1.374 1.374 0 0 0 13.483 0zm-2.88 7.283a1.39 1.39 0 0 0-.982 2.373L12.44 12.5H1.385a1.385 1.385 0 0 0 0 2.77h11.055l-2.819 2.844a1.39 1.39 0 1 0 1.966 1.964l5.197-5.244a1.387 1.387 0 0 0 0-1.964L11.585 7.67a1.378 1.378 0 0 0-.982-.387z"/>
                </svg>
              </a>

              {/* Codeforces */}
              <a
                href="https://codeforces.com/profile/adityaraj18"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="Codeforces"
                title="Codeforces"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 7.5a1.5 1.5 0 0 1 1.5 1.5v10.5a1.5 1.5 0 0 1-3 0V9a1.5 1.5 0 0 1 1.5-1.5zm7.5-4.5a1.5 1.5 0 0 1 1.5 1.5v15a1.5 1.5 0 0 1-3 0V4.5A1.5 1.5 0 0 1 12 3zm7.5 7.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-3 0V12a1.5 1.5 0 0 1 1.5-1.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Email Card, Location Card & Privacy Note */}
          <div className={styles.rightCol}>
            {/* Email Card */}
            <a
              href="mailto:adityarajj6811@gmail.com"
              className={styles.infoCard}
            >
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>EMAIL</div>
                <div className={styles.infoValue}>adityarajj6811@gmail.com</div>
              </div>
            </a>

            {/* Location Card */}
            <div className={styles.infoCard}>
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>LOCATION</div>
                <div className={styles.infoValue}>IIIT Tiruchirappalli, Tamil Nadu, India</div>
              </div>
            </div>

            <p className={styles.privacyNote}>
              For privacy, my phone number is available on request via email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
