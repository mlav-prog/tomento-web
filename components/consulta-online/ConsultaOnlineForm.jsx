"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { assetPath } from "@/lib/assets";
import styles from "./ConsultaOnlineForm.module.css";

const initialData = {
  fullName: "", birthDate: "", phone: "", email: "", city: "", referral: "",
  priorSurgery: "", surgeryDetails: "", medication: [], stable: "", expectation: "",
  zones: [], comments: "", consent: false,
};

const consultationEndpoint = process.env.NEXT_PUBLIC_CONSULTATION_API_URL ?? "https://consultas.tomentocapilar.com.ar/api/consulta";

const zoneOptions = [
  ["Línea frontal", "/images/content/zone-linea-frontal.webp", "Vista frontal con la línea de nacimiento destacada"],
  ["Entradas", "/images/content/zone-entradas.webp", "Vista frontal con ambas entradas destacadas"],
  ["Zona media", "/images/content/zone-media.webp", "Vista superior con la zona media destacada"],
  ["Coronilla", "/images/content/zone-coronilla.webp", "Vista posterior superior con la coronilla destacada"],
  ["Zona donante", "/images/content/zone-donante.webp", "Vista posterior con la zona donante destacada"],
];

export default function ConsultaOnlineForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(initialData);
  const [validationError, setValidationError] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState("idle");

  const progress = useMemo(() => `${Math.round((step / 3) * 100)}%`, [step]);

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    setData((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setValidationError("");
  }

  function toggleList(name, value) {
    setData((current) => {
      const exists = current[name].includes(value);
      return { ...current, [name]: exists ? current[name].filter((item) => item !== value) : [...current[name], value] };
    });
  }

  function goNext(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      const invalidField = form.querySelector(":invalid");
      const fieldName = invalidField?.closest("label")?.childNodes?.[0]?.textContent?.replace("*", "").trim();
      setValidationError(fieldName ? `Revisá el campo “${fieldName}” para continuar.` : "Completá las preguntas obligatorias para continuar.");
      invalidField?.closest("label, div")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setValidationError("");
    setStep((current) => Math.min(3, current + 1));
    window.scrollTo({ top: 300, behavior: "smooth" });
  }

  async function handleDraftSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setValidationError("Necesitamos tu autorización para preparar el correo.");
      return;
    }

    setSubmissionStatus("sending");
    setValidationError("");

    try {
      const response = await fetch(consultationEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: "" }),
      });

      if (!response.ok) throw new Error("No se pudo enviar la consulta");
      setSubmissionStatus("success");
    } catch {
      setSubmissionStatus("error");
    }
  }

  return (
    <section className={styles.shell} aria-labelledby="form-title">
      <div className={styles.progressHeader}>
        <div>
          <span>Paso {step} de 3</span>
          <strong id="form-title">{step === 1 ? "Datos de contacto" : step === 2 ? "Información capilar" : "Revisá tu consulta"}</strong>
        </div>
        <span className={styles.progressValue}>{progress}</span>
      </div>
      <div className={styles.track} aria-hidden="true"><span style={{ width: progress }} /></div>

      <form className={styles.form} onSubmit={step < 3 ? goNext : handleDraftSubmit} noValidate>
        {step === 1 && (
          <fieldset>
            <legend>Empecemos por conocerte</legend>
            <p className={styles.intro}>Usaremos estos datos solamente para comunicarnos por esta consulta.</p>
            <div className={styles.grid}>
              <label>Nombre y apellido*<input name="fullName" value={data.fullName} onChange={updateField} autoComplete="name" required /></label>
              <label>Fecha de nacimiento*<input name="birthDate" type="date" value={data.birthDate} onChange={updateField} required /></label>
              <label>Teléfono*<input name="phone" type="tel" value={data.phone} onChange={updateField} autoComplete="tel" placeholder="11 1234 5678" required /></label>
              <label>Email*<input name="email" type="email" value={data.email} onChange={updateField} autoComplete="email" placeholder="nombre@email.com" required /></label>
              <label>Ciudad*<input name="city" value={data.city} onChange={updateField} autoComplete="address-level2" required /></label>
              <label>¿Cómo conociste Tomento?<select name="referral" value={data.referral} onChange={updateField}><option value="">Seleccioná una opción</option><option>Google</option><option>Instagram</option><option>TikTok</option><option>Recomendación</option><option>Otro medio</option></select></label>
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend>Contanos sobre tu caso</legend>
            <p className={styles.intro}>No reemplaza una consulta médica. Sirve para orientar la primera evaluación.</p>
            <div className={styles.stack}>
              <Question title="¿Tuviste cirugías capilares previas?*">
                <Choice name="priorSurgery" value="Sí" checked={data.priorSurgery === "Sí"} onChange={updateField} />
                <Choice name="priorSurgery" value="No" checked={data.priorSurgery === "No"} onChange={updateField} />
              </Question>
              {data.priorSurgery === "Sí" && <label>¿Cuándo y qué técnica se utilizó?<textarea name="surgeryDetails" value={data.surgeryDetails} onChange={updateField} rows="3" /></label>}
              <Question title="¿Utilizás actualmente algún tratamiento capilar?">
                {["Finasteride", "Minoxidil", "Mesoterapia", "PRP", "Ninguno"].map((item) => <Check key={item} label={item} checked={data.medication.includes(item)} onChange={() => toggleList("medication", item)} />)}
              </Question>
              <Question title="¿Considerás que la caída está estable?*">
                <Choice name="stable" value="Sí" checked={data.stable === "Sí"} onChange={updateField} />
                <Choice name="stable" value="No" checked={data.stable === "No"} onChange={updateField} />
                <Choice name="stable" value="No estoy seguro/a" checked={data.stable === "No estoy seguro/a"} onChange={updateField} />
              </Question>
              <label>¿Qué resultado esperás conseguir?*<select name="expectation" value={data.expectation} onChange={updateField} required><option value="">Seleccioná una opción</option><option>Recuperar la línea frontal</option><option>Mejorar entradas</option><option>Aumentar densidad</option><option>Tratar coronilla</option><option>Necesito orientación</option></select></label>
              <div className={styles.zoneQuestion}>
                <span>¿Qué zonas te preocupan más?</span>
                <p>Podés seleccionar una o varias.</p>
                <div className={styles.zoneChoices}>
                  {zoneOptions.map(([label, image, alt]) => (
                    <VisualCheck
                      key={label}
                      label={label}
                      image={image}
                      alt={alt}
                      checked={data.zones.includes(label)}
                      onChange={() => toggleList("zones", label)}
                    />
                  ))}
                </div>
              </div>
              <label>Comentarios adicionales<textarea name="comments" value={data.comments} onChange={updateField} rows="4" placeholder="Podés contarnos desde cuándo notás la caída o cualquier dato que consideres importante." /></label>
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset>
            <legend>Revisá antes de enviar</legend>
            <p className={styles.intro}>Confirmá que la información sea correcta. No vamos a pedirte fotografías en esta primera consulta.</p>
            <div className={styles.summaryGrid}>
              <Summary label="Paciente" value={data.fullName} />
              <Summary label="Contacto" value={`${data.phone} · ${data.email}`} />
              <Summary label="Ciudad" value={data.city} />
              <Summary label="Cirugías previas" value={data.priorSurgery || "No informado"} />
              <Summary label="Caída estable" value={data.stable || "No informado"} />
              <Summary label="Objetivo principal" value={data.expectation || "No informado"} />
              <Summary label="Zonas indicadas" value={data.zones.length ? data.zones.join(", ") : "No informadas"} />
              <Summary label="Tratamientos actuales" value={data.medication.length ? data.medication.join(", ") : "No informados"} />
            </div>
            <label className={styles.consent}>
              <input type="checkbox" name="consent" checked={data.consent} onChange={updateField} required />
              <span>Autorizo el uso de estos datos únicamente para evaluar esta consulta y contactarme.*</span>
            </label>
            {submissionStatus === "success" ? (
              <div className={styles.successNotice} role="status">
                <strong>Consulta enviada correctamente</strong>
                <p>Recibimos la información. El equipo de Tomento se pondrá en contacto.</p>
              </div>
            ) : (
              <div className={styles.pendingNotice}>
                <strong>Envío directo y seguro</strong>
                <p>La consulta se enviará al correo de Tomento sin abrir otra aplicación.</p>
              </div>
            )}
            {submissionStatus === "error" && <p className={styles.validationError} role="alert">No pudimos enviar la consulta. Revisá tu conexión e intentá nuevamente.</p>}
          </fieldset>
        )}

        {validationError && <p className={styles.validationError} role="alert">{validationError}</p>}

        <div className={styles.actions}>
          {step > 1 && <button type="button" className={styles.secondary} onClick={() => setStep((current) => current - 1)}>Volver</button>}
          {step < 3 ? <button type="submit" className={styles.primary}>Continuar</button> : submissionStatus !== "success" && <button type="submit" className={styles.primary} disabled={submissionStatus === "sending"}>{submissionStatus === "sending" ? "Enviando…" : "Enviar consulta"}</button>}
        </div>
      </form>
    </section>
  );
}

function Question({ title, children }) {
  return <div className={styles.question}><span>{title}</span><div className={styles.choices}>{children}</div></div>;
}

function Choice({ name, value, checked, onChange }) {
  return <label className={styles.choice}><input type="radio" name={name} value={value} checked={checked} onChange={onChange} required /><span>{value}</span></label>;
}

function Check({ label, checked, onChange }) {
  return <label className={styles.choice}><input type="checkbox" checked={checked} onChange={onChange} /><span>{label}</span></label>;
}

function VisualCheck({ label, image, alt, checked, onChange }) {
  return (
    <label className={`${styles.visualChoice} ${checked ? styles.visualChoiceSelected : ""}`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.visualImage}>
        <Image src={assetPath(image)} alt={alt} width={480} height={480} />
      </span>
      <strong>{label}</strong>
      <span className={styles.selectionMark} aria-hidden="true">{checked ? "✓" : "+"}</span>
    </label>
  );
}

function Summary({ label, value }) {
  return <div className={styles.summaryItem}><span>{label}</span><strong>{value || "No informado"}</strong></div>;
}
