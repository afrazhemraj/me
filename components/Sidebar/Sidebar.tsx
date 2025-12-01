// components/Sidebar.tsx
import styles from "./Sidebar.module.css";

type Section = {
  id: string;
  label: string;
};

interface SidebarProps {
  sections: Section[];
  onNavClick: (id: string) => void;
  resumeUrl: string;
}

export default function Sidebar({
  sections,
  onNavClick,
  resumeUrl,
}: SidebarProps) {
  return (
    <aside className={styles.sidebar}>

      <nav className={styles.nav}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={styles.link}
            onClick={() => onNavClick(section.id)}
          >
            {section.label}
          </button>
        ))}

        <a
          className={styles.link}
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </aside>
  );
}
