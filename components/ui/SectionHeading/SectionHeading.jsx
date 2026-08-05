import styles from "./SectionHeading.module.css";

export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <header className={`${styles.heading} ${light ? styles.light : ""}`}>
      <div>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
