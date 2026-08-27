"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import ArrowIcon from "@/components/ui/ArrowIcon/ArrowIcon";
import { assetPath } from "@/lib/assets";
import styles from "./Results.module.css";

const cases = [
  {
    view: "Vista frontal",
    before: "/images/results/caso-santi-frontal-antes.jpeg",
    after: "/images/results/caso-santi-frontal-evolucion.jpeg",
  },
  {
    view: "Vista superior",
    before: "/images/results/caso-santi-superior-antes.jpeg",
    after: "/images/results/caso-santi-superior-evolucion.jpeg",
  },
  {
    view: "Vista de coronilla",
    before: "/images/results/caso-santi-coronilla-antes.jpeg",
    after: "/images/results/caso-santi-coronilla-evolucion.jpeg",
  },
];

export default function Results() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = cases[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? cases.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === cases.length - 1 ? 0 : current + 1));
  };

  return (
    <section className={styles.section} id="resultados">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow="Casos reales"
          title="Evoluciones que cuentan una historia"
          description="Cada proceso es único. Te mostramos registros reales del seguimiento realizado por el equipo de Tomento."
        />

        <div className={styles.carousel}>
          <div className={styles.carouselTop}>
            <span>
              Comparación {activeIndex + 1} de {cases.length}
            </span>
            <div className={styles.actions}>
              <button type="button" onClick={showPrevious} aria-label="Ver comparación anterior">
                <ArrowIcon direction="left" />
              </button>
              <button type="button" onClick={showNext} aria-label="Ver comparación siguiente">
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>

          <article className={styles.case} key={activeCase.view}>
            <div className={styles.caseInfo}>
              <span>Seguimiento capilar</span>
              <h3>{activeCase.view}</h3>
              <p>
                Comparación fotográfica del mismo paciente durante su proceso de
                evolución y seguimiento profesional.
              </p>
              <a href="#contacto">Consultar mi caso <ArrowIcon /></a>
            </div>

            <div className={styles.comparison}>
              <figure>
                <Image
                  src={assetPath(activeCase.before)}
                  alt={`${activeCase.view} antes del tratamiento capilar`}
                  fill
                  sizes="(max-width: 780px) 50vw, 28vw"
                />
                <figcaption>Antes</figcaption>
              </figure>
              <figure>
                <Image
                  src={assetPath(activeCase.after)}
                  alt={`${activeCase.view} durante la evolución capilar`}
                  fill
                  sizes="(max-width: 780px) 50vw, 28vw"
                />
                <figcaption>Después</figcaption>
              </figure>
            </div>
          </article>

          <div className={styles.dots} aria-label="Comparaciones disponibles">
            {cases.map((item, index) => (
              <button
                type="button"
                key={item.view}
                className={index === activeIndex ? styles.activeDot : undefined}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver ${item.view}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        <p className={styles.disclaimer}>
          Las imágenes corresponden a seguimientos reales. Los tiempos de evolución y
          los resultados pueden variar según cada paciente.
        </p>
      </div>
    </section>
  );
}
