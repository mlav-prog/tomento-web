import { createWhatsAppUrl } from "@/lib/whatsapp";
import { site } from "@/content/site";
import ArrowIcon from "@/components/ui/ArrowIcon/ArrowIcon";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton({ children, variant = "solid", locale = "es" }) {
  const message = locale === "en" ? "Hello, I would like to request an assessment at Tomento Capilar." : locale === "pt" ? "Olá, gostaria de solicitar uma avaliação na Tomento Capilar." : site.whatsappMessage;
  return (
    <a
      className={`${styles.button} ${styles[variant]}`}
      href={createWhatsAppUrl(site.whatsapp, message)}
      target="_blank"
      rel="noreferrer"
      aria-label={`${children}. ${locale === "en" ? "Opens WhatsApp in a new tab" : locale === "pt" ? "Abre o WhatsApp em uma nova aba" : "Abre WhatsApp en una pestaña nueva"}`}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}
