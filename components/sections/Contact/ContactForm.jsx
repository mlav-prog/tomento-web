"use client";

import { site } from "@/content/site";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Contact.module.css";

export default function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hola, quisiera solicitar una evaluación en Tomento Capilar.",
      `Nombre: ${form.get("name")}`,
      `Teléfono: ${form.get("phone")}`,
      `Email: ${form.get("email") || "No informado"}`,
      `Tratamiento: ${form.get("treatment")}`,
      `Consulta: ${form.get("message") || "Sin mensaje adicional"}`,
    ].join("\n");

    window.location.assign(createWhatsAppUrl(site.whatsapp, message));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3>Dejanos tus datos</h3>
      <div className={styles.fields}>
        <label>Nombre y apellido<input name="name" placeholder="Ej.: Juan Pérez" required /></label>
        <label>Teléfono<input name="phone" type="tel" placeholder="Ej.: 11 1234 5678" required /></label>
        <label>Email<input name="email" type="email" placeholder="tu@email.com" /></label>
        <label>Tratamiento de interés<select name="treatment" defaultValue="" required><option value="" disabled>Seleccioná una opción</option><option>Microimplante capilar FUE</option><option>Plasma rico en plaquetas</option><option>Mesoterapia capilar</option><option>Microdermopigmentación capilar</option><option>Quiero asesoramiento</option></select></label>
        <label className={styles.fullField}>Mensaje<textarea name="message" placeholder="Contanos qué te gustaría consultar." rows="5" /></label>
      </div>
      <button type="submit">Enviar consulta</button>
    </form>
  );
}
