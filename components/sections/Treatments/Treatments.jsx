"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./Treatments.module.css";

const treatments = [
  {
    number: "01",
    title: "Microimplante Capilar",
    tag: "Técnica FUE",
    featured: true,
    text: "Redistribución de unidades foliculares mediante una técnica mínimamente invasiva y personalizada.",
    image: "/images/clinic/diseno-capilar.jpg",
    imageAlt: "Diseño personalizado previo a un tratamiento capilar",
    description: "La técnica FUE permite extraer unidades foliculares de una zona donante e implantarlas de forma individual en las áreas que requieren mayor cobertura.",
    details: ["Diseño adaptado a cada paciente", "Procedimiento planificado por el equipo profesional", "Controles y seguimiento durante la evolución"],
  },
  {
    number: "02",
    title: "Plasma Rico en Plaquetas",
    tag: "PRP capilar",
    text: "Tratamiento complementario orientado al fortalecimiento y cuidado del cabello.",
    image: "/images/clinic/equipo-profesional.jpg",
    imageAlt: "Profesional de Tomento durante una atención capilar",
    description: "El PRP capilar utiliza una concentración de plaquetas obtenida de la propia sangre del paciente como parte de un plan orientado al cuidado del cuero cabelludo.",
    details: ["Aplicación localizada", "Puede complementar otros tratamientos", "La indicación depende de una evaluación previa"],
  },
  {
    number: "03",
    title: "Mesoterapia Capilar",
    tag: "Tratamiento personalizado",
    text: "Aplicación localizada según las necesidades identificadas durante la evaluación.",
    image: "/images/clinic/evaluacion-capilar.jpg",
    imageAlt: "Evaluación del cuero cabelludo de un paciente",
    description: "Consiste en aplicaciones localizadas seleccionadas según las características del cuero cabelludo y los objetivos definidos durante la consulta.",
    details: ["Plan individualizado", "Sesiones definidas según cada caso", "Seguimiento de la respuesta al tratamiento"],
  },
  {
    number: "04",
    title: "Microdermopigmentación Capilar",
    tag: "Efecto visual de densidad",
    text: "Técnica orientada a recrear visualmente una mayor densidad capilar de manera personalizada.",
    image: "/images/clinic/registro-fotografico.jpg",
    imageAlt: "Registro fotográfico previo a un tratamiento personalizado",
    description: "Mediante la aplicación precisa de pigmentos se busca recrear visualmente folículos y aportar una apariencia de mayor densidad en áreas seleccionadas.",
    details: ["Diseño previo personalizado", "Pigmentación adaptada al tono del paciente", "Indicaciones de cuidado y controles posteriores"],
  },
];

export default function Treatments() {
  const [activeTreatment, setActiveTreatment] = useState(null);

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
        <SectionHeading eyebrow="Tratamientos" title="Soluciones para cada necesidad capilar." description="La evaluación inicial permite definir un plan acorde a cada caso y acompañar su evolución." />
        <div className={styles.grid}>
          {treatments.map((item) => (
            <article className={`${styles.card} ${item.featured ? styles.featured : ""}`} key={item.number}>
              <div className={styles.top}><span>{item.number}</span><span>{item.tag}</span></div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <button type="button" className={styles.moreButton} onClick={() => setActiveTreatment(item)}>
                Conocer más <span aria-hidden="true">↗</span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeTreatment && (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={() => setActiveTreatment(null)}>
          <article
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="treatment-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className={styles.closeButton} type="button" onClick={() => setActiveTreatment(null)} aria-label="Cerrar información del tratamiento">×</button>
            <div className={styles.modalImage}>
              <Image src={activeTreatment.image} alt={activeTreatment.imageAlt} fill sizes="(max-width: 760px) 100vw, 44vw" />
            </div>
            <div className={styles.modalContent}>
              <span className={styles.modalTag}>{activeTreatment.tag}</span>
              <h3 id="treatment-modal-title">{activeTreatment.title}</h3>
              <p>{activeTreatment.description}</p>
              <ul>
                {activeTreatment.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <a href="#contacto" onClick={() => setActiveTreatment(null)}>Solicitar una evaluación <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
