import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";
import ArrowIcon from "@/components/ui/ArrowIcon/ArrowIcon";
import { assetPath } from "@/lib/assets";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Microimplante capilar · Técnica FUE</p>
          <h1>Sembramos el comienzo de una nueva etapa</h1>
          <p className={styles.intro}>
            Cada gran cambio comienza con un primer paso, y nos alegra acompañarte en este
            proceso. Gracias por permitirnos ser parte de este camino. Desde este momento
            estaremos a tu lado en cada etapa, con un tratamiento personalizado, atención
            profesional y el compromiso de brindarte el cuidado que este momento merece.
          </p>

          <div className={styles.actions}>
            <WhatsAppButton>Solicitar evaluación</WhatsAppButton>
            <a className={styles.resultsLink} href="#resultados">
              Conocé los resultados <ArrowIcon direction="down" />
            </a>
          </div>

          <div className={styles.credentials}>
            <div className={styles.credential}>
              <span>Eliana Judith De Vito</span>
              <span>Lic. en Instrumentación Quirúrgica · Tricoterapeuta · Matrícula 16.509</span>
            </div>
            <div className={styles.credential}>
              <span>Dr. Hernán Ramón Eduardo López</span>
              <span>Médico especialista en implante capilar · Matrícula: MN 199837</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.heroPortrait}>
            <Image
              className={styles.francoImage}
              src={assetPath("/images/content/franco-hero-option-3.webp")}
              alt="Franco mostrando el resultado de su tratamiento capilar"
              width={1400}
              height={2489}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
