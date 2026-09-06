import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";
import MobileNavigation from "./MobileNavigation";
import { assetPath } from "@/lib/assets";
import styles from "./Header.module.css";

const anchors = ["#tratamientos", "#resultados", "#profesional", "#preguntas"];

export default function Header({ locale, copy }) {
  const navigation = copy.nav.map((label, index) => ({ label, href: anchors[index] }));
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.brand} href="#inicio" aria-label="Tomento Capilar, inicio">
          <Image
            src={assetPath("/images/brand/logo-white.png")}
            alt="Tomento Capilar"
            width={842}
            height={595}
            priority
          />
        </a>

        <nav className={styles.navigation} aria-label={locale === "en" ? "Main navigation" : locale === "pt" ? "Navegação principal" : "Navegación principal"}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.action}>
          <div className={styles.languages} aria-label="Language">
            <a href={assetPath("/")} aria-current={locale === "es" ? "page" : undefined}>ES</a>
            <a href={assetPath("/en/")} aria-current={locale === "en" ? "page" : undefined}>EN</a>
            <a href={assetPath("/pt/")} aria-current={locale === "pt" ? "page" : undefined}>PT</a>
          </div>
          <WhatsAppButton variant="outline" locale={locale}>{copy.consult}</WhatsAppButton>
        </div>

        <MobileNavigation items={navigation} locale={locale} copy={copy} />
      </div>
    </header>
  );
}
