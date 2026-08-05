import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";
import styles from "./Contact.module.css";

export default function Contact() {
  return <section className={styles.section} id="contacto"><div className={styles.inner}><div><p className={styles.eyebrow}>Primer paso</p><h2>Empezá con una evaluación personalizada.</h2><p className={styles.copy}>Contactanos por WhatsApp para conversar sobre tu caso y coordinar una consulta.</p><WhatsAppButton>Consultar por WhatsApp</WhatsAppButton></div><address><div><span>Dirección</span><strong>Junín 246, 2.º A, CABA</strong></div><div><span>Atención</span><strong>Con turno previo</strong></div><div><span>WhatsApp</span><strong>+54 9 11 2815-6799</strong></div></address></div></section>;
}
