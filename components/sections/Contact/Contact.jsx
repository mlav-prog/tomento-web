import ContactForm from "./ContactForm";
import { site } from "@/content/site";
import { assetPath } from "@/lib/assets";
import styles from "./Contact.module.css";

export default function Contact({ locale, copy }) {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>{copy.contact[0]}</p>
          <h2>{copy.contact[1]}</h2>
          <p>{copy.contact[2]}</p>
        </header>

        <div className={styles.onlineAssessment}>
          <div>
            <span>{locale === "en" ? "A more complete first step" : locale === "pt" ? "Um primeiro passo mais completo" : "Un primer paso más completo"}</span>
            <h3>{locale === "en" ? "Would you like a more complete assessment?" : locale === "pt" ? "Quer uma avaliação mais completa?" : "¿Querés una evaluación más completa?"}</h3>
            <p>{locale === "en" ? "Complete the online consultation and briefly tell us about your case before your appointment." : locale === "pt" ? "Preencha a consulta online e conte brevemente o seu caso antes da avaliação." : "Completá la consulta online y contanos brevemente tu caso antes de la evaluación."}</p>
          </div>
          <a className={styles.onlineAssessmentLink} href={assetPath("/consulta-online/")}>
            {locale === "en" ? "Start online assessment" : locale === "pt" ? "Iniciar avaliação online" : "Iniciar consulta online"}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.contactGrid}>
          <ContactForm locale={locale} />
          <aside className={styles.aside}>
            <article>
              <span>{copy.contact[3]}</span>
              <h3>{copy.contact[4]}</h3>
              <p>{copy.contact[5]}</p>
              <a className={styles.primaryLink} href={site.whatsapp} target="_blank" rel="noreferrer">
                {locale === "en" ? "Quick inquiry on WhatsApp" : locale === "pt" ? "Consulta rápida pelo WhatsApp" : "Consulta rápida por WhatsApp"}
              </a>
            </article>
            <article>
              <span>{copy.contact[6]}</span>
              <h3>{copy.contact[7]}</h3>
              <p>{copy.contact[8]}</p>
              <div className={styles.socialLinks}>
                <a className={styles.secondaryLink} href={site.instagram} target="_blank" rel="noreferrer">{copy.contact[9]}</a>
                <a className={styles.secondaryLink} href={site.tiktok} target="_blank" rel="noreferrer">{locale === "en" ? "View TikTok" : locale === "pt" ? "Ver TikTok" : "Ver TikTok"}</a>
              </div>
            </article>
          </aside>
        </div>

        <div className={styles.location}>
          <div className={styles.locationHeader}>
            <div><span>{copy.contact[10]}</span><strong>Junín 246, 2.º A, CABA</strong></div>
            <a href="https://www.google.com/maps/search/?api=1&query=Jun%C3%ADn+246+CABA" target="_blank" rel="noreferrer">{copy.contact[11]}</a>
          </div>
          <iframe title={`${copy.contact[10]} Tomento Capilar`} src="https://www.google.com/maps?q=Jun%C3%ADn+246,+CABA&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}
