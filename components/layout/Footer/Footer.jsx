import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon/ArrowIcon";
import { site } from "@/content/site";
import { assetPath } from "@/lib/assets";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Footer.module.css";

const anchors = ["#inicio", "#tratamientos", "#resultados", "#profesional", "#preguntas", "#contacto"];

function FooterIcon({ type }) {
  const paths = {
    location: <><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"/><circle cx="12" cy="10" r="2"/></>,
    whatsapp: <><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"/><path d="M9 8.5c.5 2.3 2.2 4 4.5 4.8"/></>,
    instagram: <><rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.5"/><path d="M17.5 6.5h.01"/></>,
  };
  return <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}

export default function Footer({ locale, copy }) {
  const navigationLabels = locale === "en" ? ["Home", "Treatments", "Results", "Professionals", "Frequently asked questions", "Contact"] : locale === "pt" ? ["Início", "Tratamentos", "Resultados", "Profissionais", "Perguntas frequentes", "Contato"] : ["Inicio", "Tratamientos", "Resultados", "Profesionales", "Preguntas frecuentes", "Contacto"];
  const navigation = navigationLabels.map((label, index) => ({ label, href: anchors[index] }));
  const whatsappMessage = locale === "en" ? "Hello, I would like to request an assessment at Tomento Capilar." : locale === "pt" ? "Olá, gostaria de solicitar uma avaliação na Tomento Capilar." : site.whatsappMessage;
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandColumn}>
            <a href="#inicio" aria-label="Tomento Capilar, volver al inicio">
              <Image
                src={assetPath("/images/brand/logo-white.png")}
                alt="Tomento Capilar"
                width={842}
                height={595}
              />
            </a>
            <p>{copy.footer[0]}</p>
          </div>

          <nav className={styles.column} aria-label="Navegación del pie de página">
            <p className={styles.label}>{copy.footer[1]}</p>
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className={styles.column}>
            <p className={styles.label}>{copy.footer[2]}</p>
            <div className={styles.professional}>
              <span className={styles.professionalIcon} aria-hidden="true">+</span>
              <div>
                <strong>Lic. Judith De Vito</strong>
                <small>{locale === "en" ? "Surgical instrumentation specialist · Trichotherapist" : locale === "pt" ? "Instrumentadora cirúrgica · Tricoterapeuta" : "Instrumentadora quirúrgica · Tricoterapeuta"}</small>
              </div>
            </div>
            <div className={styles.professional}>
              <span className={styles.professionalIcon} aria-hidden="true">+</span>
              <div>
                <strong>Dr. Hernán López</strong>
                <small>{locale === "en" ? "Physician specializing in hair transplantation" : locale === "pt" ? "Médico especialista em implante capilar" : "Médico especialista en implante capilar"}</small>
              </div>
            </div>
          </div>

          <address className={styles.column}>
            <p className={styles.label}>{copy.footer[3]}</p>
            <a
              className={styles.iconLink}
              href="https://www.google.com/maps/search/?api=1&query=Jun%C3%ADn+246+CABA"
              target="_blank"
              rel="noreferrer"
            >
              <FooterIcon type="location" />
              {site.address}
            </a>
            <a className={styles.iconLink} href={createWhatsAppUrl(site.whatsapp, whatsappMessage)} target="_blank" rel="noreferrer">
              <FooterIcon type="whatsapp" />
              +54 9 11 2815-6799
            </a>
            <a className={styles.iconLink} href="https://www.instagram.com/tomentocapilar/" target="_blank" rel="noreferrer">
              <FooterIcon type="instagram" />
              @tomentocapilar
            </a>
          </address>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} Tomento Capilar</span>
          <p>{copy.footer[4]}</p>
          <a href="#inicio">{copy.footer[5]} <ArrowIcon direction="up" /></a>
        </div>
      </div>
    </footer>
  );
}
