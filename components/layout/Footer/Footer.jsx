import Image from "next/image";
import { assetPath } from "@/lib/assets";
import styles from "./Footer.module.css";

export default function Footer() {
  return <footer className={styles.footer}><div className={styles.inner}><Image src={assetPath("/images/brand/logo-white.png")} alt="Tomento Capilar" width={343} height={157} /><p>Microimplante y tratamientos capilares en CABA.</p><div><a href="https://www.instagram.com/tomentocapilar/" target="_blank" rel="noreferrer">Instagram</a><span>© Tomento Capilar</span></div></div></footer>;
}
