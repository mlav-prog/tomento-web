import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./Treatments.module.css";

const treatments = [
  { number: "01", title: "Microimplante Capilar", tag: "Técnica FUE", featured: true, text: "Redistribución de unidades foliculares mediante una técnica mínimamente invasiva y personalizada." },
  { number: "02", title: "Plasma Rico en Plaquetas", tag: "PRP capilar", text: "Tratamiento complementario orientado al fortalecimiento y cuidado del cabello." },
  { number: "03", title: "Mesoterapia Capilar", tag: "Tratamiento personalizado", text: "Aplicación localizada según las necesidades identificadas durante la evaluación." },
  { number: "04", title: <>Microdermo<wbr />pigmentación Capilar</>, tag: "Tratamiento personalizado", compact: true, text: "Técnica orientada a recrear visualmente una mayor densidad capilar de manera personalizada." },
];

export default function Treatments() {
  return (
    <section className={styles.section} id="tratamientos">
      <div className={styles.inner}>
        <SectionHeading eyebrow="Tratamientos" title="Soluciones para cada necesidad capilar." description="La evaluación inicial permite definir un plan acorde a cada caso y acompañar su evolución." />
        <div className={styles.grid}>
          {treatments.map((item) => (
            <article className={`${styles.card} ${item.featured ? styles.featured : ""} ${item.compact ? styles.compact : ""}`} key={item.number}>
              <div className={styles.top}><span>{item.number}</span><span>{item.tag}</span></div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <a href="#contacto">Conocer más <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
