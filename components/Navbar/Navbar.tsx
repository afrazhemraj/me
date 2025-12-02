import styles from "./Navbar.module.css";
import { GitHub, LinkedIn, X,  LightModeOutlined, DarkModeOutlined} from '@mui/icons-material';

interface NavbarProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <header className={styles.navbar}>
      <button
        className={`${styles.themeToggle} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
        onClick={onToggleTheme}
        aria-label="Toggle theme"
      >
        <span className={styles.themeIcon}>
          <DarkModeOutlined fontSize="small" />
        </span>
        <span className={styles.themeIcon}>
          <LightModeOutlined fontSize="small" />
        </span>
        <span className={styles.thumb} />
      </button>

      <div className={styles.icons}>
        <a href="#" aria-label="GitHub">
          <GitHub />
        </a>
        <a href="#" aria-label="LinkedIn">
          <LinkedIn />
        </a>
        <a href="#" aria-label="X / Twitter">
          <X />
        </a>
      </div>

      <a href="mailto:you@example.com" className={styles.hireMe}>
        Hire Me
      </a>
    </header>
  );
}
