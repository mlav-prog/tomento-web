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
    license: "Matrícula MN 199.837",
    image: "/images/professionals/hernan-lopez.webp",
    imageAlt: "Doctor Hernán López, médico especialista en implante capilar",
  },
];

export default function Professional({ locale, copy }) {
  return (
    <section className={styles.section} id="profesional">
      <div className={styles.wrapper}>
        <SectionHeading light eyebrow={copy.professionals[0]} title={copy.professionals[1]} />

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
                <p className={styles.role}>{locale === "en" ? ["Surgical Instrumentation Specialist · Diploma in Hair Transplantation · Trichotherapist", "Physician · Specialist in FUE hair transplantation"][index] : locale === "pt" ? ["Instrumentadora cirúrgica · Especialista em Microimplante Capilar · Tricoterapeuta", "Médico · Especialista em implante capilar pela técnica FUE"][index] : professional.role}</p>
                <p className={styles.bio}>{locale === "en" ? ["Personalized support during the assessment, treatment, and follow-up of each patient.", "A medical approach focused on personalized planning and natural-looking results."][index] : locale === "pt" ? ["Acompanhamento personalizado durante a avaliação, o tratamento e o seguimento de cada paciente.", "Abordagem médica voltada ao planejamento personalizado e à obtenção de resultados naturais."][index] : professional.bio}</p>
                <p className={styles.license}>{locale === "en" ? professional.license.replace("Matrícula profesional", "Professional license").replace("Matrícula", "License") : locale === "pt" ? professional.license.replace("Matrícula profesional", "Registro profissional").replace("Matrícula", "Registro") : professional.license}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
