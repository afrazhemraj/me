"use client";

import { useEffect, useState } from "react";
import styles from "./Sidebar.module.css";
import type { ElementType } from "react";
import { DocumentScanner} from '@mui/icons-material';

type Section = {
  id: string;
  label: string;
  icon: ElementType; // <- this allows passing icon components
};

interface SidebarProps {
  sections: Section[];
  onNavClick: (id: string) => void;
  resumeUrl: string;
}

export default function Sidebar({ sections, onNavClick, resumeUrl }: SidebarProps) {
  const [active, setActive] = useState<string>("about");

  // Auto-detect which section is currently in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.6 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sections]);

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;

          return (
            <button
              key={id}
              className={`${styles.link} ${isActive ? styles.active : ""}`}
              onClick={() => onNavClick(id)}
            >
              <Icon className={styles.icon} />
              <span className={styles.label}>{label}</span>
            </button>
          );
        })}

        {/* Resume button */}
        <a
          className={styles.link}
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
        >
          <DocumentScanner className={styles.icon} />
          <span className={styles.label}>RESUME</span>
        </a>
      </nav>
    </aside>
  );
}
