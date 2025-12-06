// components/About.tsx
import styles from "./About.module.css";

interface AboutProps {
  resumeUrl: string;
}

export default function About({ resumeUrl }: AboutProps) {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
      <div className={styles.card}>
        <div className={styles.avatar} />
        <h1 className={styles.name}>Afraz Hemraj</h1>
        <p className={styles.text}>
          Hi! I&apos;Lorem ipsum dolor sit amet,
          consectetur adipiscing elit Lorem ipsum dolor sit amet,
          consectetur adipiscing elit Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Welcome to my online portfolio!
        </p>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          View Resume →
        </a>
      </div>
        <div className={styles.featuredCard}>
          <h2 className={styles.featuredTitle}>Featured Projects</h2>
          <p className={styles.featuredSubtitle}>
            A few things I&apos;ve been working on recently.
          </p>

          <div className={styles.projectsGrid}>
            <a href="/projects/trading-app" className={styles.project}>
              <div className={styles.projectThumb} />
              <h3 className={styles.projectTitle}>RoboWatch</h3>
              <p className={styles.projectText}>
                An autonomous mobile robot for hazard detection and mapping.
              </p>
            </a>

            <a href="/projects/trading-app" className={styles.project}>
              <div className={styles.projectThumb} />
              <h3 className={styles.projectTitle}>Raikiri</h3>
              <p className={styles.projectText}>
                A custom macropad capable of holding 48+ macros, volume control and a OLED display.
              </p>
            </a>

            <a href="/projects/trading-app" className={styles.project}>
              <div className={styles.projectThumb} />
              <h3 className={styles.projectTitle}>Project 3</h3>
              <p className={styles.projectText}>
                A custom macropad capable of holding 48+ macros, volume control and a OLED display.
              </p>
            </a>
          </div>
          </div>
        </div>
      {/* <iframe 
        src="https://drive.google.com/file/d/1yZ9Velz2BnTl3cQb881kkplZKkS4JMvQ/preview"
        width="100%"
        height="600"
        allow="autoplay"
      ></iframe> */}

    </section>
  );
}
