"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import ArrowIcon from "@/components/ui/ArrowIcon/ArrowIcon";
import { assetPath } from "@/lib/assets";
import styles from "./Results.module.css";

const cases = [
  {
    view: "Evolución capilar femenina",
    format: "wide",
    description: "Comparación del mismo caso durante su proceso de tratamiento y seguimiento profesional.",
    before: "/images/results/caso-femenino-antes.jpeg",
    after: "/images/results/caso-femenino-despues.jpeg",
  },
  {
    view: "Evolución de Darío — 9 meses",
    description: "Comparación frontal antes del microimplante y a los nueve meses del procedimiento.",
    before: "/images/results/caso-dario-antes.webp",
    after: "/images/results/caso-dario-9-meses.webp",
  },
  {
    view: "Evolución capilar masculina",
    format: "wide",
    description: "Registro comparativo del mismo paciente durante su evolución capilar.",
    before: "/images/results/caso-masculino-antes.jpeg",
    after: "/images/results/caso-masculino-despues.jpeg",
  },
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

export default function Results({ locale, copy }) {
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
          eyebrow={copy.results[0]}
          title={copy.results[1]}
          description={copy.results[2]}
        />

        <div className={styles.carousel}>
          <div className={styles.carouselTop}>
            <span>
              {copy.results[3]} {activeIndex + 1} {locale === "en" ? "of" : locale === "pt" ? "de" : "de"} {cases.length}
            </span>
            <div className={styles.actions}>
              <button type="button" onClick={showPrevious} aria-label={locale === "en" ? "View previous comparison" : locale === "pt" ? "Ver comparação anterior" : "Ver comparación anterior"}>
                <ArrowIcon direction="left" />
              </button>
              <button type="button" onClick={showNext} aria-label={locale === "en" ? "View next comparison" : locale === "pt" ? "Ver próxima comparação" : "Ver comparación siguiente"}>
                <ArrowIcon direction="right" />
              </button>
            </div>
          </div>

          <article className={styles.case} key={activeCase.view}>
            <div className={styles.caseInfo}>
              <span>{copy.results[4]}</span>
              <h3>{locale === "en" ? ["Female hair progress", "Darío’s progress — 9 months", "Male hair progress", "Front view", "Top view", "Crown view"][activeIndex] : locale === "pt" ? ["Evolução capilar feminina", "Evolução de Darío — 9 meses", "Evolução capilar masculina", "Vista frontal", "Vista superior", "Vista da coroa"][activeIndex] : activeCase.view}</h3>
              <p>{locale === "en" ? "Photographic comparison of the same patient during their progress and professional follow-up." : locale === "pt" ? "Comparação fotográfica do mesmo paciente durante sua evolução e acompanhamento profissional." : activeCase.description ?? "Comparación fotográfica del mismo paciente durante su proceso de evolución y seguimiento profesional."}</p>
              <a href="#contacto">{copy.results[5]} <ArrowIcon /></a>
            </div>

            <div className={`${styles.comparison} ${activeCase.format === "wide" ? styles.wideComparison : ""}`}>
              <figure>
                <Image
                  src={assetPath(activeCase.before)}
                  alt={`${activeCase.view} ${copy.results[6].toLowerCase()}`}
                  fill
                  sizes="(max-width: 780px) 50vw, 28vw"
                />
                <figcaption>{copy.results[6]}</figcaption>
              </figure>
              <figure>
                <Image
                  src={assetPath(activeCase.after)}
                  alt={`${activeCase.view} ${copy.results[7].toLowerCase()}`}
                  fill
                  sizes="(max-width: 780px) 50vw, 28vw"
                />
                <figcaption>{copy.results[7]}</figcaption>
              </figure>
            </div>
          </article>

          <div className={styles.dots} aria-label={copy.results[8]}>
            {cases.map((item, index) => (
              <button
                type="button"
                key={item.view}
                className={index === activeIndex ? styles.activeDot : undefined}
                onClick={() => setActiveIndex(index)}
                aria-label={`${locale === "en" ? "View" : locale === "pt" ? "Ver" : "Ver"} ${item.view}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        <p className={styles.disclaimer}>
          {copy.results[9]}
        </p>
      </div>
    </section>
  );
}
