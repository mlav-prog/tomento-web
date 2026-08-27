"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import styles from "./FAQ.module.css";

const questions = [
  {
    question: "¿Cómo sé qué tratamiento necesito?",
    answer: "La indicación depende del tipo de caída, el estado del cuero cabelludo, los antecedentes y los objetivos de cada persona. La evaluación inicial permite conocer el caso y definir si conviene un tratamiento médico, un procedimiento complementario o un microimplante.",
  },
  {
    question: "¿Qué se evalúa antes de un microimplante capilar?",
    answer: "Se analiza la causa y la estabilidad de la caída, las características del cabello y la disponibilidad de unidades foliculares en la zona donante. Con esa información se planifica una alternativa realista y personalizada.",
  },
  {
    question: "¿Cuánto dura un microimplante con técnica FUE?",
    answer: "La duración puede variar según el área a tratar y la cantidad de unidades foliculares planificadas. Como referencia, una sesión puede extenderse entre 4 y 6 horas, con pausas y acompañamiento permanente del equipo.",
  },
  {
    question: "¿Cómo es la recuperación después del implante?",
    answer: "La recuperación es diferente en cada paciente. Algunas personas retoman rápidamente sus actividades y otras prefieren descansar algunos días. El equipo brinda indicaciones personalizadas sobre higiene, actividad física, exposición al calor y controles posteriores.",
  },
  {
    question: "¿Cuándo se comienzan a ver los resultados?",
    answer: "El crecimiento capilar es progresivo. Habitualmente los primeros cambios se observan después de algunos meses y el resultado continúa evolucionando. En un implante, la valoración más completa suele realizarse alrededor de los 9 a 12 meses.",
  },
  {
    question: "¿Qué es el plasma rico en plaquetas capilar?",
    answer: "Es un tratamiento que utiliza plasma obtenido de la propia sangre del paciente. Se aplica de forma localizada como parte de un plan orientado a fortalecer el cabello y acompañar otros tratamientos cuando la evaluación profesional lo indica.",
  },
  {
    question: "¿En qué consiste la mesoterapia capilar?",
    answer: "Consiste en aplicaciones superficiales y localizadas en el cuero cabelludo. Las sustancias, la cantidad de sesiones y la frecuencia se definen según el diagnóstico, los objetivos y la respuesta de cada paciente.",
  },
  {
    question: "¿Qué es la microdermopigmentación capilar?",
    answer: "Es un procedimiento no quirúrgico que aplica pigmentos específicos para recrear visualmente folículos o aportar una apariencia de mayor densidad. El diseño, el tono y la cantidad de sesiones se personalizan para lograr un resultado natural.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className={styles.section} id="preguntas">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Información útil"
          title="Preguntas frecuentes"
          description="Respuestas generales para conocer los tratamientos y el proceso de atención en Tomento."
        />

        <div className={styles.list}>
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article className={`${styles.item}${isOpen ? ` ${styles.open}` : ""}`} key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.question}>{item.question}</span>
                  <span className={styles.symbol} aria-hidden="true">+</span>
                </button>
                <div className={styles.answerWrapper} id={`faq-answer-${index}`}>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.note}>La información es orientativa y no reemplaza una evaluación profesional.</p>
      </div>
    </section>
  );
}
