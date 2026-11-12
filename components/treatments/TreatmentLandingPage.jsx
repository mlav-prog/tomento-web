import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";
import { assetPath } from "@/lib/assets";
import { site } from "@/content/site";
import { treatments } from "@/content/treatments";
import styles from "./TreatmentLandingPage.module.css";

export default function TreatmentLandingPage({ treatment, slug }) {
  const url = `${site.url.replace(/\/$/, "")}/tratamientos/${slug}/`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: treatment.title,
      description: treatment.description,
      url,
      about: { "@type": "MedicalTherapy", name: treatment.name },
      reviewedBy: { "@type": "Physician", name: "Dr. Hernán Ramón Eduardo López" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Tomento Capilar", item: site.url },
        { "@type": "ListItem", position: 2, name: treatment.shortName, item: url },
      ],
    },
  ];

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className={styles.header}>
        <Link href={assetPath("/")} className={styles.brand} aria-label="Ir al inicio de Tomento Capilar">
          <Image src={assetPath("/images/brand/logo-white.png")} alt="Tomento Capilar" width={842} height={595} priority />
        </Link>
        <nav aria-label="Navegación del tratamiento">
          <details className={styles.treatmentMenu}>
            <summary>Tratamientos <span aria-hidden="true">⌄</span></summary>
            <div className={styles.treatmentMenuPanel}>
              {Object.entries(treatments).map(([itemSlug, item]) => (
                <Link
                  key={itemSlug}
                  href={assetPath(`/tratamientos/${itemSlug}/`)}
                  aria-current={itemSlug === slug ? "page" : undefined}
                >
                  <span className={styles.treatmentMenuImage}>
                    <Image src={assetPath(item.image)} alt="" fill sizes="48px" />
                  </span>
                  <span>{item.shortName}</span>
                </Link>
              ))}
            </div>
          </details>
          <Link href={assetPath("/consulta-online/")} className={styles.headerCta}>Consulta online</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{treatment.eyebrow}</p>
          <h1>{treatment.title}</h1>
          <p>{treatment.intro}</p>
          <div className={styles.actions}>
            <Link href={assetPath("/consulta-online/")} className={styles.primary}>Solicitar una evaluación</Link>
            <WhatsAppButton locale="es" placement={`treatment_${slug}`}>Consultar por WhatsApp</WhatsAppButton>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src={assetPath(treatment.image)} alt={treatment.imageAlt} fill sizes="(max-width: 800px) 100vw, 48vw" priority />
        </div>
      </section>

      <section className={styles.highlights} aria-label="Características principales">
        {treatment.highlights.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
      </section>

      <section className={styles.content}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Información del tratamiento</p>
          <h2>Una indicación basada en tu evaluación</h2>
          <p>Cada caso requiere una valoración profesional. La información de esta página es orientativa y no reemplaza una consulta.</p>
        </div>
        <div className={styles.sectionGrid}>
          {treatment.sections.map((section) => <article key={section.title}><h3>{section.title}</h3><p>{section.text}</p></article>)}
        </div>
      </section>

      <section className={styles.team}>
        <div>
          <p className={styles.eyebrow}>Equipo profesional</p>
          <h2>Planificación y seguimiento en Tomento Capilar</h2>
        </div>
        <div className={styles.teamCards}>
          <article><strong>Lic. Judith De Vito</strong><span>Instrumentadora quirúrgica · Diplomada en Microimplante Capilar · Tricoterapeuta · Matrícula 16.509</span></article>
          <article><strong>Dr. Hernán López</strong><span>Médico especialista en implante capilar · Matrícula MN 199.837</span></article>
        </div>
      </section>

      <section className={styles.faq}>
        <div><p className={styles.eyebrow}>Preguntas frecuentes</p><h2>Antes de tu evaluación</h2></div>
        <div className={styles.faqList}>{treatment.faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.eyebrow}>Junín 246, 2.º A, CABA</p>
        <h2>Contanos tu caso antes de la consulta</h2>
        <p>Completá una evaluación online con información y fotografías guiadas para que el equipo pueda conocer tu caso.</p>
        <Link href={assetPath("/consulta-online/")} className={styles.primary}>Iniciar consulta online</Link>
      </section>

      <footer className={styles.footer}><Link href={assetPath("/")}>Tomento Capilar</Link><span>Junín 246, 2.º A, CABA</span></footer>
    </main>
  );
}

