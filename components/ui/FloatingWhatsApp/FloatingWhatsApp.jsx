import { site } from "@/content/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./FloatingWhatsApp.module.css";

export default function FloatingWhatsApp({ locale, label }) {
  const message = locale === "en" ? "Hello, I would like to request an assessment at Tomento Capilar." : locale === "pt" ? "Olá, gostaria de solicitar uma avaliação na Tomento Capilar." : site.whatsappMessage;
  return (
    <a
      className={styles.button}
      href={createWhatsAppUrl(site.whatsapp, message)}
      target="_blank"
      rel="noreferrer"
      aria-label={`${label} Tomento Capilar WhatsApp`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z" />
        <path d="M8.7 8.3c.6 2.7 2.6 4.7 5.2 5.4" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
