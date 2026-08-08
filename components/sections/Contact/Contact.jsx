import ContactForm from "./ContactForm";
import { site } from "@/content/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contacto">
      <div className={styles.inner}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Contacto</p>
          <h2>Solicitá tu evaluación.</h2>
          <p>Completá el formulario y enviá tu consulta directamente por WhatsApp.</p>
        </header>

        <div className={styles.contactGrid}>
          <ContactForm />
          <aside className={styles.aside}>
            <article>
              <span>Turnos</span>
              <h3>Agendá tu evaluación</h3>
              <p>Coordiná el día y horario para realizar tu consulta.</p>
              <a
                className={styles.primaryLink}
                href={createWhatsAppUrl(
                  site.whatsapp,
                  "Hola, quisiera coordinar una evaluación en Tomento Capilar. ¿Qué disponibilidad tienen?",
                )}
                target="_blank"
                rel="noreferrer"
              >
                Reservar por WhatsApp
              </a>
            </article>
            <article>
              <span>Redes</span>
              <h3>Seguinos en Instagram</h3>
              <p>Resultados, novedades y contenido de Tomento Capilar.</p>
              <a className={styles.secondaryLink} href="https://www.instagram.com/tomentocapilar/" target="_blank" rel="noreferrer">Ver Instagram</a>
            </article>
          </aside>
        </div>

        <div className={styles.location}>
          <div className={styles.locationHeader}>
            <div><span>Ubicación</span><strong>Junín 246, 2.º A, CABA</strong></div>
            <a href="https://www.google.com/maps/search/?api=1&query=Jun%C3%ADn+246+CABA" target="_blank" rel="noreferrer">Abrir mapa</a>
          </div>
          <iframe title="Ubicación de Tomento Capilar" src="https://www.google.com/maps?q=Jun%C3%ADn+246,+CABA&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  );
}
