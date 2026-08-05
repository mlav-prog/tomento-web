import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Microimplante capilar · Técnica FUE</p>
          <h1>Un tratamiento pensado para recuperar tu cabello.</h1>
          <p className={styles.intro}>
            Evaluación personalizada, técnica precisa y acompañamiento profesional
            durante todo el proceso.
          </p>

          <div className={styles.actions}>
            <WhatsAppButton>Solicitar evaluación</WhatsAppButton>
            <a className={styles.resultsLink} href="#resultados">
              Conocé los resultados <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className={styles.credentials}>
            <span>Eliana Judith De Vito</span>
            <span>Tricoterapeuta · Matrícula 16.509</span>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.mediaPlaceholder} aria-label="Espacio reservado para contenido visual">
            <span className={styles.placeholderMark} aria-hidden="true" />
            <p>Espacio visual</p>
            <small>Imagen o video a definir</small>
          </div>
        </div>
      </div>
    </section>
  );
}
