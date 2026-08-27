import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Contact from "@/components/sections/Contact/Contact";
import FAQ from "@/components/sections/FAQ/FAQ";
import Hero from "@/components/sections/Hero/Hero";
import Process from "@/components/sections/Process/Process";
import Professional from "@/components/sections/Professional/Professional";
import Results from "@/components/sections/Results/Results";
import Treatments from "@/components/sections/Treatments/Treatments";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp/FloatingWhatsApp";
import ScrollReveal from "@/components/ui/ScrollReveal/ScrollReveal";
import { site } from "@/content/site";
import styles from "./page.module.css";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    url: site.url,
    telephone: "+54 9 11 2815 6799",
    sameAs: [site.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Junín 246, 2.º A",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      addressCountry: "AR",
    },
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ScrollReveal />
      <Header />
      <Hero />
      <Treatments />
      <Process />
      <Results />
      <Professional />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
