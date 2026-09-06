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

const translatedQuestions = {
  en: [
    ["How do I know which treatment I need?", "The recommendation depends on the type of hair loss, scalp condition, medical history, and personal goals. The initial assessment helps determine whether medical treatment, a complementary procedure, or a hair transplant is most appropriate."],
    ["What is assessed before a hair transplant?", "We assess the cause and stability of hair loss, hair characteristics, and the availability of follicular units in the donor area. This information allows us to plan a realistic, personalized option."],
    ["How long does an FUE hair transplant take?", "Duration varies according to the treatment area and the planned number of follicular units. As a reference, a session may take between 4 and 6 hours, including breaks and continuous support from the team."],
    ["What is recovery like after a transplant?", "Recovery differs for each patient. Some people quickly resume their activities, while others prefer to rest for a few days. The team provides personalized instructions on hygiene, physical activity, heat exposure, and follow-up visits."],
    ["When will I start seeing results?", "Hair growth is progressive. The first changes are usually visible after a few months, and results continue to develop. A fuller assessment of a transplant is generally made around 9 to 12 months."],
    ["What is platelet-rich plasma for hair?", "It is a treatment that uses plasma obtained from the patient’s own blood. It is applied locally as part of a plan to strengthen the hair and may complement other treatments when professionally indicated."],
    ["What does hair mesotherapy involve?", "It consists of superficial, targeted applications to the scalp. The substances, number of sessions, and frequency are determined according to the diagnosis, goals, and response of each patient."],
    ["What is scalp micropigmentation?", "It is a nonsurgical procedure using specialized pigments to visually recreate follicles or give the appearance of greater density. The design, tone, and number of sessions are personalized for a natural-looking result."],
  ],
  pt: [
    ["Como saber qual tratamento eu preciso?", "A indicação depende do tipo de queda, do estado do couro cabeludo, dos antecedentes e dos objetivos de cada pessoa. A avaliação inicial ajuda a definir se o mais adequado é um tratamento médico, um procedimento complementar ou um microimplante."],
    ["O que é avaliado antes de um microimplante capilar?", "Analisamos a causa e a estabilidade da queda, as características do cabelo e a disponibilidade de unidades foliculares na área doadora. Com essas informações, planejamos uma alternativa realista e personalizada."],
    ["Quanto tempo dura um microimplante pela técnica FUE?", "A duração varia conforme a área tratada e a quantidade planejada de unidades foliculares. Como referência, uma sessão pode durar entre 4 e 6 horas, com pausas e acompanhamento permanente da equipe."],
    ["Como é a recuperação após o implante?", "A recuperação é diferente para cada paciente. Algumas pessoas retomam rapidamente suas atividades e outras preferem descansar por alguns dias. A equipe fornece orientações personalizadas sobre higiene, atividade física, exposição ao calor e controles posteriores."],
    ["Quando os resultados começam a aparecer?", "O crescimento capilar é progressivo. Normalmente, as primeiras mudanças aparecem depois de alguns meses e o resultado continua evoluindo. Em um implante, a avaliação mais completa costuma ocorrer entre 9 e 12 meses."],
    ["O que é o plasma rico em plaquetas capilar?", "É um tratamento que utiliza plasma obtido do próprio sangue do paciente. Ele é aplicado de forma localizada para fortalecer os cabelos e complementar outros tratamentos quando houver indicação profissional."],
    ["Em que consiste a mesoterapia capilar?", "Consiste em aplicações superficiais e localizadas no couro cabeludo. As substâncias, o número de sessões e a frequência são definidos conforme o diagnóstico, os objetivos e a resposta de cada paciente."],
    ["O que é microdermopigmentação capilar?", "É um procedimento não cirúrgico que aplica pigmentos específicos para recriar visualmente folículos ou dar aparência de maior densidade. O desenho, o tom e o número de sessões são personalizados."],
  ],
};

export default function FAQ({ locale, copy }) {
  const [openIndex, setOpenIndex] = useState(null);
  const localizedQuestions = locale === "es" ? questions : translatedQuestions[locale].map(([question, answer]) => ({ question, answer }));

  return (
    <section className={styles.section} id="preguntas">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={copy.faq[0]}
          title={copy.faq[1]}
          description={copy.faq[2]}
        />

        <div className={styles.list}>
          {localizedQuestions.map((item, index) => {
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

        <p className={styles.note}>{copy.faq[3]}</p>
      </div>
    </section>
  );
}
