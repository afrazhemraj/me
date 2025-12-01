import styles from "./SectionContainer.module.css";

export default function SectionsContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.sections}>{children}</div>;
}
