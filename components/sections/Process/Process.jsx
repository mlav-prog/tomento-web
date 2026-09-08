import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./Process.module.css";

export default function Process({ copy }) {
  const steps = copy.processSteps.map(([title, text], index) => [String(index + 1).padStart(2, "0"), title, text]);
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headingWrap}>
          <SectionHeading light eyebrow={copy.process[0]} title={copy.process[1]} description={copy.process[2]} />
        </div>
        <div className={styles.steps}>{steps.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  );
}
