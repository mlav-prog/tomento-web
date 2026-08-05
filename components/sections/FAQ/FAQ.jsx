import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./FAQ.module.css";

const questions = ["¿Cómo sé qué tratamiento necesito?","¿En qué consiste la técnica FUE?","¿Cómo es el proceso de recuperación?","¿Cuándo se empiezan a ver los resultados?","¿Cómo solicito una evaluación?"];

export default function FAQ() {
  return <section className={styles.section} id="preguntas"><div className={styles.inner}><SectionHeading eyebrow="Información útil" title="Preguntas frecuentes." description="El contenido final se tomará del material de Tomento y será revisado antes de publicarse." /><div className={styles.list}>{questions.map((question,index)=><div className={styles.item} key={question}><span>0{index+1}</span><p>{question}</p><span aria-hidden="true">＋</span></div>)}</div></div></section>;
}
