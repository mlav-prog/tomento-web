import ContactForm from "./ContactForm";
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

        <div className={styles.contactGrid}>
          <ContactForm locale={locale} />
          <aside className={styles.aside}>
            <article>
              <span>{copy.contact[3]}</span>
              <h3>{copy.contact[4]}</h3>
              <p>{copy.contact[5]}</p>
            </article>
            <article>
              <span>{copy.contact[6]}</span>
              <h3>{copy.contact[7]}</h3>
              <p>{copy.contact[8]}</p>
              <a className={styles.secondaryLink} href="https://www.instagram.com/tomentocapilar/" target="_blank" rel="noreferrer">{copy.contact[9]}</a>
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
