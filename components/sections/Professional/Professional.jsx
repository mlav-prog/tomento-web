import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading/SectionHeading";
import { assetPath } from "@/lib/assets";
import styles from "./Professional.module.css";

const professionals = [
  {
    name: "Lic. Judith De Vito",
    role: "Lic. en Instrumentación Quirúrgica · Diplomada en Microimplante Capilar · Tricoterapeuta",
    bio: "Acompañamiento personalizado durante la evaluación, el tratamiento y el seguimiento de cada paciente.",
    license: "Matrícula profesional 16.509",
    image: "/images/professionals/judith-de-vito.webp",
    imageAlt: "Licenciada Judith De Vito, profesional de Tomento Capilar",
  },
  {
    name: "Dr. Hernán López",
    role: "Médico · Especialista en implante capilar con técnica FUE",
    bio: "Enfoque médico orientado a la planificación personalizada y a la obtención de resultados naturales.",
    license: "Matrícula: MN 199837",
    image: "/images/professionals/hernan-lopez.webp",
    imageAlt: "Doctor Hernán López, médico especialista en implante capilar",
  },
];

export default function Professional() {
  return (
    <section className={styles.section} id="profesional">
      <div className={styles.wrapper}>
        <SectionHeading light eyebrow="Profesionales" title="Un equipo que acompaña cada etapa" />

        <div className={styles.list}>
          {professionals.map((professional, index) => (
            <article className={styles.profile} key={professional.name}>
              <div className={styles.portrait}>
                <Image
                  src={assetPath(professional.image)}
                  alt={professional.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 38vw"
                  priority={index === 0}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.number}>0{index + 1}</span>
                <h3>{professional.name}</h3>
                <p className={styles.role}>{professional.role}</p>
                <p className={styles.bio}>{professional.bio}</p>
                <p className={styles.license}>{professional.license}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
