import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./Results.module.css";

export default function Results() {
  return (
    <section className={styles.section} id="resultados">
      <div className={styles.inner}>
        <SectionHeading eyebrow="Casos reales" title="Evoluciones que cuentan una historia." description="En una próxima etapa seleccionaremos los casos y fotografías que mejor representen el trabajo de Tomento." />
        <div className={styles.grid}>{[1,2,3].map((item) => <article className={styles.case} key={item}><div className={styles.comparison}><div><span>Antes</span></div><div><span>Después</span></div></div><footer><span>Caso 0{item}</span><span>Contenido a seleccionar</span></footer></article>)}</div>
      </div>
    </section>
  );
}
