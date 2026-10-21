import Image from "next/image";
import Link from "next/link";
import ConsultaOnlineForm from "@/components/consulta-online/ConsultaOnlineForm";
import { assetPath } from "@/lib/assets";
import styles from "./page.module.css";

export const metadata = {
  title: "Consulta capilar online | Tomento Capilar",
  description:
    "Completá tu consulta capilar online y prepará la información necesaria para una evaluación personalizada en Tomento Capilar.",
  alternates: { canonical: "/consulta-online/" },
};

export default function ConsultaOnlinePage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href={assetPath("/")} className={styles.brand} aria-label="Volver al inicio de Tomento Capilar">
          <Image
            src={assetPath("/images/brand/logo-white.png")}
            alt="Tomento Capilar"
            width={842}
            height={595}
            priority
          />
        </Link>
        <Link href={assetPath("/")} className={styles.backLink}>Volver al sitio</Link>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Evaluación personalizada</p>
        <h1>Tu consulta capilar, antes de encontrarnos.</h1>
        <p>
          Completá la información en pocos pasos. Esto nos ayuda a conocer tu caso y aprovechar mejor la primera evaluación.
        </p>
        <div className={styles.reassurance} aria-label="Información sobre la consulta">
          <span>3 pasos</span>
          <span>Sin carga de fotos</span>
          <span>Revisión profesional</span>
        </div>
      </section>

      <ConsultaOnlineForm />

      <footer className={styles.footer}>
        <span>Tomento Capilar</span>
        <span>Junín 246, 2.º A, CABA</span>
      </footer>
    </main>
  );
}
