"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { getCopy } from "@/content/locales";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { TREATMENT_SELECTION_EVENT } from "@/lib/treatmentSelection";
import styles from "./Contact.module.css";

const formCopy = {
  es: { title: "Dejanos tus datos", name: "Nombre y apellido", namePlaceholder: "Ej.: Juan Pérez", phone: "Teléfono", email: "Email", treatment: "Tratamiento de interés", choose: "Seleccioná una opción", advice: "Quiero asesoramiento", message: "Mensaje", messagePlaceholder: "Contanos qué te gustaría consultar.", selected: "Seleccionaste", change: "Podés cambiarlo desde el menú si lo necesitás.", submit: "Enviar consulta", privacy: "Tus datos se utilizan únicamente para preparar esta consulta en WhatsApp y no se almacenan en este sitio.", intro: "Hola, quisiera solicitar una evaluación en Tomento Capilar.", missingEmail: "No informado", noMessage: "Sin mensaje adicional" },
  en: { title: "Leave us your details", name: "Full name", namePlaceholder: "E.g. John Smith", phone: "Phone", email: "Email", treatment: "Treatment of interest", choose: "Select an option", advice: "I need guidance", message: "Message", messagePlaceholder: "Tell us what you would like to ask.", selected: "You selected", change: "You can change it from the menu if needed.", submit: "Send inquiry", privacy: "Your information is used only to prepare this WhatsApp inquiry and is not stored on this website.", intro: "Hello, I would like to request an assessment at Tomento Capilar.", missingEmail: "Not provided", noMessage: "No additional message" },
  pt: { title: "Deixe seus dados", name: "Nome e sobrenome", namePlaceholder: "Ex.: João Silva", phone: "Telefone", email: "E-mail", treatment: "Tratamento de interesse", choose: "Selecione uma opção", advice: "Quero orientação", message: "Mensagem", messagePlaceholder: "Conte o que você gostaria de consultar.", selected: "Você selecionou", change: "Se precisar, você pode alterar a opção no menu.", submit: "Enviar consulta", privacy: "Seus dados são usados somente para preparar esta consulta no WhatsApp e não ficam armazenados neste site.", intro: "Olá, gostaria de solicitar uma avaliação na Tomento Capilar.", missingEmail: "Não informado", noMessage: "Sem mensagem adicional" },
};

export default function ContactForm({ locale }) {
  const text = formCopy[locale];
  const treatmentOptions = getCopy(locale).treatmentItems.map((item) => item[1]);
  const [selectedTreatment, setSelectedTreatment] = useState("");
  const [selectionConfirmed, setSelectionConfirmed] = useState(false);

  useEffect(() => {
    function handleTreatmentSelection(event) {
      setSelectedTreatment(event.detail.treatment);
      setSelectionConfirmed(true);
    }

    window.addEventListener(TREATMENT_SELECTION_EVENT, handleTreatmentSelection);
    return () => window.removeEventListener(TREATMENT_SELECTION_EVENT, handleTreatmentSelection);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      text.intro,
      `${text.name}: ${form.get("name")}`,
      `${text.phone}: ${form.get("phone")}`,
      `${text.email}: ${form.get("email") || text.missingEmail}`,
      `${text.treatment}: ${form.get("treatment")}`,
      `${text.message}: ${form.get("message") || text.noMessage}`,
    ].join("\n");

    window.location.assign(createWhatsAppUrl(site.whatsapp, message));
  }

  return (
    <form className={styles.form} id="formulario-contacto" onSubmit={handleSubmit}>
      <h3>{text.title}</h3>
      <div className={styles.fields}>
        <label>{text.name}<input name="name" placeholder={text.namePlaceholder} required /></label>
        <label>{text.phone}<input name="phone" type="tel" placeholder="11 1234 5678" required /></label>
        <label>{text.email}<input name="email" type="email" placeholder="you@email.com" /></label>
        <label>{text.treatment}<select name="treatment" value={selectedTreatment} onChange={(event) => { setSelectedTreatment(event.target.value); setSelectionConfirmed(false); }} required><option value="" disabled>{text.choose}</option>{treatmentOptions.map((option) => <option key={option}>{option}</option>)}<option>{text.advice}</option></select></label>
        <label className={styles.fullField}>{text.message}<textarea name="message" placeholder={text.messagePlaceholder} rows="5" /></label>
      </div>
      {selectionConfirmed && (
        <p className={styles.selectionNotice} role="status">
          {text.selected} <strong>{selectedTreatment}</strong>. {text.change}
        </p>
      )}
      <button type="submit">{text.submit}</button>
      <p className={styles.privacyNote}>{text.privacy}</p>
    </form>
  );
}
