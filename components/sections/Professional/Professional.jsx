import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./Professional.module.css";

export default function Professional() {
  return (
    <section className={styles.section} id="profesional">
      <div className={styles.inner}>
        <div className={styles.placeholder}><span>Espacio para retrato profesional</span></div>
        <div className={styles.content}><SectionHeading light eyebrow="Profesional" title="Eliana Judith De Vito" /><p className={styles.role}>Lic. en Instrumentación Quirúrgica · Diplomada en Microimplante Capilar · Tricoterapeuta</p><p className={styles.bio}>Una presentación breve contará su formación, experiencia y manera de acompañar a cada paciente. El texto definitivo se completa en una próxima etapa.</p><p className={styles.license}>Matrícula profesional 16.509</p></div>
      </div>
    </section>
  );
}
