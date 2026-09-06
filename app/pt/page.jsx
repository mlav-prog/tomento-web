import SitePage from "@/components/SitePage";
import { site } from "@/content/site";

export const metadata = {
  title: "Tomento Capilar | Microimplante Capilar FUE em Buenos Aires",
  description: "Microimplante capilar FUE, PRP, mesoterapia e microdermopigmentação capilar em Buenos Aires. Solicite uma avaliação personalizada.",
  alternates: { canonical: `${site.url.replace(/\/$/, "")}/pt/`, languages: { es: site.url, en: `${site.url.replace(/\/$/, "")}/en/`, "pt-BR": `${site.url.replace(/\/$/, "")}/pt/` } },
};

export default function PortuguesePage() {
  return <SitePage locale="pt" />;
}
