import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./Process.module.css";

const steps = [
  ["01", "Evaluación", "Conocemos tu caso, objetivos y antecedentes."],
  ["02", "Plan personalizado", "Definimos la alternativa más adecuada para vos."],
  ["03", "Tratamiento", "Realizamos el procedimiento con precisión y cuidado."],
  ["04", "Seguimiento", "Realizamos un seguimiento personalizado de tu evolución durante todo el proceso, con controles en cada etapa, hasta que juntos logremos el resultado esperado."],
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionHeading light eyebrow="Cómo trabajamos" title="Un proceso claro y acompañado" description="Cada etapa está pensada para brindar información, tranquilidad y seguimiento." />
        <div className={styles.steps}>{steps.map(([number,title,text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>
  );
}
