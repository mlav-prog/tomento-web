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
import { getCopy } from "@/content/locales";
import styles from "@/app/page.module.css";

export default function SitePage({ locale = "es" }) {
  const text = getCopy(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: site.name,
    url: `${site.url.replace(/\/$/, "")}${text.path}`,
    telephone: "+54 9 11 2815 6799",
    sameAs: [site.instagram],
    address: { "@type": "PostalAddress", streetAddress: "Junín 246, 2.º A", addressLocality: "Ciudad Autónoma de Buenos Aires", addressCountry: "AR" },
  };

  return (
    <main className={styles.page} lang={text.locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ScrollReveal />
      <Header locale={locale} copy={text} />
      <Hero locale={locale} copy={text} />
      <Treatments copy={text} />
      <Process copy={text} />
      <Results locale={locale} copy={text} />
      <Professional locale={locale} copy={text} />
      <FAQ locale={locale} copy={text} />
      <Contact locale={locale} copy={text} />
      <Footer locale={locale} copy={text} />
      <FloatingWhatsApp locale={locale} label={text.consult} />
    </main>
  );
}
