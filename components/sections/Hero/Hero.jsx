import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";
import ArrowIcon from "@/components/ui/ArrowIcon/ArrowIcon";
import { assetPath } from "@/lib/assets";
import styles from "./Hero.module.css";

export default function Hero({ locale, copy }) {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{copy.hero[0]}</p>
          <h1>{copy.hero[1]}</h1>
          <div className={styles.intro}>
            {copy.hero[2].split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.actions}>
            <WhatsAppButton locale={locale}>{copy.hero[3]}</WhatsAppButton>
            <a className={styles.resultsLink} href="#resultados">
              {copy.hero[4]} <ArrowIcon direction="down" />
            </a>
          </div>

          <div className={styles.credentials}>
            <div className={styles.credential}>
              <span>Eliana Judith De Vito</span>
              <span>Lic. en Instrumentación Quirúrgica · Tricoterapeuta · Matrícula 16.509</span>
            </div>
            <div className={styles.credential}>
              <span>Dr. Hernán Ramón Eduardo López</span>
              <span>Médico especialista en implante capilar · Matrícula MN 199.837</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.heroPortrait}>
            <Image
              className={styles.teamImage}
              src={assetPath("/images/professionals/judith-hernan-equipo.webp")}
              alt={locale === "en" ? "Judith De Vito and Dr. Hernán López, Tomento Capilar team" : locale === "pt" ? "Judith De Vito e Dr. Hernán López, equipe Tomento Capilar" : "Judith De Vito y el Dr. Hernán López, equipo de Tomento Capilar"}
              fill
              sizes="(max-width: 700px) 100vw, 42vw"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
