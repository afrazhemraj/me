// components/Project.tsx
import styles from "./Projects.module.css";

interface ProjectsProps {
  resumeUrl: string;
}

export default function Projects({ resumeUrl }: ProjectsProps) {
  return (
    <section id="projects" className={styles.section}>
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
      {/* <iframe 
        src="https://drive.google.com/file/d/1yZ9Velz2BnTl3cQb881kkplZKkS4JMvQ/preview"
        width="100%"
        height="600"
        allow="autoplay"
      ></iframe> */}

    </section>
  );
}
