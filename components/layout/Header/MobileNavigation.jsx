"use client";

import { useState } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";
import { assetPath } from "@/lib/assets";
import styles from "./Header.module.css";

export default function MobileNavigation({ items, locale, copy }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.mobileNavigation}>
      <button
        className={styles.menuButton}
        type="button"
        aria-label={isOpen ? copy.menu[0] : copy.menu[1]}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={isOpen ? styles.menuIconOpen : styles.menuIcon} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>

      <div
        className={`${styles.mobilePanel} ${isOpen ? styles.mobilePanelOpen : ""}`}
        id="mobile-menu"
        aria-hidden={!isOpen}
      >
        <nav aria-label="Navegación móvil">
          {items.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.mobileLanguages} aria-label="Language">
          <a href={assetPath("/")} aria-current={locale === "es" ? "page" : undefined}>ES</a>
          <a href={assetPath("/en/")} aria-current={locale === "en" ? "page" : undefined}>EN</a>
          <a href={assetPath("/pt/")} aria-current={locale === "pt" ? "page" : undefined}>PT</a>
        </div>
        <WhatsAppButton variant="outline" locale={locale}>{copy.consult}</WhatsAppButton>
      </div>
    </div>
  );
}
