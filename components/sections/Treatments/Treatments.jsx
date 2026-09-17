"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import ArrowIcon from "@/components/ui/ArrowIcon/ArrowIcon";
import { assetPath } from "@/lib/assets";
import { selectTreatmentForContact } from "@/lib/treatmentSelection";
import styles from "./Treatments.module.css";

const treatmentMedia = [
  {
    number: "01",
    title: "Microimplante Capilar",
    formValue: "Microimplante capilar FUE",
    tag: "Técnica FUE",
    featured: true,
    text: "Redistribución de unidades foliculares mediante una técnica mínimamente invasiva y personalizada.",
    image: "/images/clinic/microimplante-tomento.webp",
    imageAlt: "Judith De Vito durante la preparación de un microimplante capilar en Tomento",
    description: "La técnica FUE permite extraer unidades foliculares de una zona donante e implantarlas de forma individual en las áreas que requieren mayor cobertura.",
    details: ["Diseño adaptado a cada paciente", "Procedimiento planificado por el equipo profesional", "Controles y seguimiento durante la evolución"],
  },
  {
    number: "02",
    title: "Plasma Rico en Plaquetas",
    formValue: "Plasma rico en plaquetas",
    tag: "PRP capilar",
    text: "Tratamiento complementario orientado al fortalecimiento y cuidado del cabello.",
    image: "/images/clinic/prp-plasma.webp",
    imageAlt: "Muestra de plasma rico en plaquetas preparada en Tomento Capilar",
    description: "El PRP capilar utiliza una concentración de plaquetas obtenida de la propia sangre del paciente como parte de un plan orientado al cuidado del cuero cabelludo.",
    details: ["Aplicación localizada", "Puede complementar otros tratamientos", "La indicación depende de una evaluación previa"],
  },
  {
    number: "03",
    title: "Mesoterapia Capilar",
    formValue: "Mesoterapia capilar",
    tag: "Tratamiento personalizado",
    text: "Aplicación localizada según las necesidades identificadas durante la evaluación.",
    image: "/images/clinic/mesoterapia-capilar-jeringa-tomento.webp",
    imageAlt: "Aplicación de mesoterapia capilar con jeringa y solución transparente en Tomento",
    description: "Consiste en aplicaciones localizadas seleccionadas según las características del cuero cabelludo y los objetivos definidos durante la consulta.",
    details: ["Plan individualizado", "Sesiones definidas según cada caso", "Seguimiento de la respuesta al tratamiento"],
  },
  {
    number: "04",
    title: "Microdermopigmentación Capilar",
    formValue: "Microdermopigmentación capilar",
    tag: "Efecto visual de densidad",
    text: "Técnica orientada a recrear visualmente una mayor densidad capilar de manera personalizada.",
    image: "/images/clinic/diseno-capilar.webp",
    imageAlt: "Judith De Vito realizando el diseño previo de la línea capilar",
    description: "Mediante la aplicación precisa de pigmentos se busca recrear visualmente folículos y aportar una apariencia de mayor densidad en áreas seleccionadas.",
    details: ["Diseño previo personalizado", "Pigmentación adaptada al tono del paciente", "Indicaciones de cuidado y controles posteriores"],
  },
];

const treatmentImageAlts = {
  es: [
    "Judith De Vito durante la preparación de un microimplante capilar en Tomento",
    "Muestra de plasma rico en plaquetas preparada en Tomento Capilar",
    "Aplicación de mesoterapia capilar con jeringa y solución transparente en Tomento",
    "Judith De Vito realizando el diseño previo de la línea capilar",
  ],
  en: [
    "Judith De Vito preparing an FUE hair transplant procedure at Tomento Capilar",
    "Platelet-rich plasma sample prepared at Tomento Capilar",
    "Hair mesotherapy application with a syringe and clear solution at Tomento Capilar",
    "Judith De Vito designing a personalized hairline before treatment",
  ],
  pt: [
    "Judith De Vito durante a preparação de um microimplante capilar FUE na Tomento",
    "Amostra de plasma rico em plaquetas preparada na Tomento Capilar",
    "Aplicação de mesoterapia capilar com seringa e solução transparente na Tomento Capilar",
    "Judith De Vito realizando o desenho personalizado da linha capilar",
  ],
};

export default function Treatments({ locale, copy }) {
  const [activeTreatment, setActiveTreatment] = useState(null);
  const treatments = copy.treatmentItems.map(([title, formValue, tag, text, description, details], index) => ({
    ...treatmentMedia[index], title, formValue, tag, text, description, details,
    imageAlt: treatmentImageAlts[locale][index],
  }));

  function handleEvaluationRequest(event) {
    event.preventDefault();
    selectTreatmentForContact(activeTreatment.formValue);
    setActiveTreatment(null);
    window.requestAnimationFrame(() => {
      document.getElementById("formulario-contacto")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  useEffect(() => {
    if (!activeTreatment) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && setActiveTreatment(null);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [activeTreatment]);

  return (
    <section className={styles.section} id="tratamientos">
      <div className={styles.inner}>
        <SectionHeading eyebrow={copy.treatments[0]} title={copy.treatments[1]} description={copy.treatments[2]} />
        <div className={styles.grid}>
          {treatments.map((item) => (
            <article className={`${styles.card} ${item.featured ? styles.featured : ""}`} key={item.number}>
              <div className={styles.top}><span>{item.number}</span><span>{item.tag}</span></div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <button type="button" className={styles.moreButton} onClick={() => setActiveTreatment(item)}>
                {copy.treatments[3]} <ArrowIcon />
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeTreatment && (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={() => setActiveTreatment(null)}>
          <article
            className={`${styles.modal} ${!activeTreatment.image ? styles.modalWithoutImage : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="treatment-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className={styles.closeButton} type="button" onClick={() => setActiveTreatment(null)} aria-label={copy.treatments[5]}>×</button>
            {activeTreatment.image && (
              <div className={`${styles.modalImage} ${activeTreatment.number === "03" ? styles.modalImageContain : ""}`}>
                <Image src={assetPath(activeTreatment.image)} alt={activeTreatment.imageAlt} fill sizes="(max-width: 900px) 100vw, 44vw" />
              </div>
            )}
            <div className={styles.modalContent}>
              <span className={styles.modalTag}>{activeTreatment.tag}</span>
              <h3
                id="treatment-modal-title"
                className={activeTreatment.title.length > 24 ? styles.longModalTitle : undefined}
              >
                {activeTreatment.title}
              </h3>
              <p>{activeTreatment.description}</p>
              <ul>
                {activeTreatment.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <a href="#contacto" onClick={handleEvaluationRequest}>{copy.treatments[4]} <ArrowIcon /></a>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
