import { createWhatsAppUrl } from "@/lib/whatsapp";
import { site } from "@/content/site";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton({ children, variant = "solid" }) {
  return (
    <a
      className={`${styles.button} ${styles[variant]}`}
      href={createWhatsAppUrl(site.whatsapp, site.whatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label={`${children}. Abre WhatsApp en una pestaña nueva`}
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
