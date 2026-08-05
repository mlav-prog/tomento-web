import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Contact from "@/components/sections/Contact/Contact";
import FAQ from "@/components/sections/FAQ/FAQ";
import Hero from "@/components/sections/Hero/Hero";
import Process from "@/components/sections/Process/Process";
import Professional from "@/components/sections/Professional/Professional";
import Results from "@/components/sections/Results/Results";
import Treatments from "@/components/sections/Treatments/Treatments";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Header />
      <Hero />
      <Treatments />
      <Process />
      <Results />
      <Professional />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
