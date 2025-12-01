// components/About.tsx
import styles from "./About.module.css";

interface AboutProps {
  resumeUrl: string;
}

export default function About({ resumeUrl }: AboutProps) {
  return (
    <section id="about" className={styles.section}>
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
    </section>
  );
}
