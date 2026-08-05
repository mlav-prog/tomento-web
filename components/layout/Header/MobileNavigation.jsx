"use client";

import { useState } from "react";
import WhatsAppButton from "@/components/ui/WhatsAppButton/WhatsAppButton";
import styles from "./Header.module.css";

export default function MobileNavigation({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.mobileNavigation}>
      <button
        className={styles.menuButton}
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
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
        <WhatsAppButton variant="outline">Consultar</WhatsAppButton>
      </div>
    </div>
  );
}
