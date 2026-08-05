import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";
import styles from "./Header.module.css";

const navigation = [
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Profesional", href: "#profesional" },
  { label: "Preguntas", href: "#preguntas" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#inicio" aria-label="Tomento Capilar, inicio">
          <Image
            src="/images/brand/logo-white.png"
            alt="Tomento Capilar"
            width={343}
            height={157}
            priority
          />
        </a>

        <nav className={styles.navigation} aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.action}>
          <WhatsAppButton variant="outline">Consultar</WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
