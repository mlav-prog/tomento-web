"use client";

import { useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import ArrowIcon from "@/components/ui/ArrowIcon/ArrowIcon";
import { site } from "@/content/site";
import styles from "./Reviews.module.css";

const reviews = [
  {
    name: "Gastón Pavón",
    text: "Muy cómodo.",
  },
  {
    name: "Guillermo Cotarelo",
    text: "Resultados reales.",
  },
  {
    name: "Viviana Rodríguez",
    text: "Excelente experiencia.",
  },
  {
    name: "Agustín Rezzano",
    text: "Súper profesionales.",
  },
  {
    name: "Pablo Daniel Furfaro",
    text: "Excelente trato.",
  },
  {
    name: "Darío Ezequiel Firpo",
    text: "Muy buena atención.",
  },
  {
    name: "Juan Pablo Bonora",
    text: "Contento con el resultado.",
  },
  {
    name: "Luciano Lombardi",
    text: "Siempre están pendientes.",
  },
  {
    name: "Cristian Nemer",
    text: "Feliz con los resultados.",
  },
];

export default function Reviews({ copy }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const nextSize = window.innerWidth <= 620 ? 1 : window.innerWidth <= 900 ? 2 : 3;
      setItemsPerPage(nextSize);
      setActiveIndex(0);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const pageCount = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % pageCount);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [pageCount]);

  const showPrevious = () => setActiveIndex((current) => (current === 0 ? pageCount - 1 : current - 1));
  const showNext = () => setActiveIndex((current) => (current + 1) % pageCount);
  const activeReviews = reviews.slice(activeIndex * itemsPerPage, (activeIndex + 1) * itemsPerPage);

  return (
    <section className={styles.section} id="resenas">
      <div className={styles.inner}>
        <SectionHeading
          eyebrow={copy.reviews[0]}
          title={copy.reviews[1]}
          description={copy.reviews[2]}
          light
        />

        <div className={styles.summary}>
          <div className={styles.googleMark} aria-hidden="true">G</div>
          <strong>{copy.reviews[3]}</strong>
          <span className={styles.stars} aria-label="5 de 5 estrellas">★★★★★</span>
          <span>{copy.reviews[4]}</span>
        </div>

        <div className={styles.carousel} aria-live="polite">
          <div className={styles.reviewGrid} key={`${activeIndex}-${itemsPerPage}`}>
            {activeReviews.map((review) => (
              <article className={styles.card} key={review.name}>
                <span className={styles.cardStars} aria-hidden="true">★★★★★</span>
                <blockquote>“{review.text}”</blockquote>
                <footer>
                  <strong>{review.name}</strong>
                  <span>Google Maps</span>
                </footer>
              </article>
            ))}
          </div>

          <div className={styles.controls}>
            <div className={styles.dots} aria-label={copy.reviews[6]}>
              {Array.from({ length: pageCount }, (_, index) => (
                <button
                  type="button"
                  key={index}
                  className={index === activeIndex ? styles.activeDot : undefined}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${copy.reviews[7]} ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
            <div className={styles.arrows}>
              <button type="button" onClick={showPrevious} aria-label={copy.reviews[8]}><ArrowIcon direction="left" /></button>
              <button type="button" onClick={showNext} aria-label={copy.reviews[9]}><ArrowIcon direction="right" /></button>
            </div>
          </div>
        </div>

        <a className={styles.link} href={site.googleMaps} target="_blank" rel="noreferrer">
          {copy.reviews[5]} <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
