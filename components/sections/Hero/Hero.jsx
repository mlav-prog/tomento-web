import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Microimplante capilar · Técnica FUE</p>
          <h1>Sembramos el comienzo de una nueva etapa.</h1>
          <p className={styles.intro}>
            Cada gran cambio comienza con un primer paso, y nos alegra acompañarte en este
            proceso. Gracias por permitirnos ser parte de este camino. Desde este momento
            estaremos a tu lado en cada etapa, con un tratamiento personalizado, atención
            profesional y el compromiso de brindarte el cuidado que este momento merece.
          </p>

          <div className={styles.actions}>
            <WhatsAppButton>Solicitar evaluación</WhatsAppButton>
            <a className={styles.resultsLink} href="#resultados">
              Conocé los resultados <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className={styles.credentials}>
            <span>Dr. Hernán Ramón Eduardo López</span>
            <span>Médico especialista en implante capilar · Matrícula: MN 199837</span>
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
