import SitePage from "@/components/SitePage";
import { site } from "@/content/site";

export const metadata = {
  title: "Tomento Capilar | FUE Hair Transplant in Buenos Aires",
  description: "FUE hair transplant, PRP, mesotherapy, and scalp micropigmentation in Buenos Aires. Request a personalized assessment.",
  alternates: { canonical: `${site.url.replace(/\/$/, "")}/en/`, languages: { es: site.url, en: `${site.url.replace(/\/$/, "")}/en/`, "pt-BR": `${site.url.replace(/\/$/, "")}/pt/` } },
};

export default function EnglishPage() {
  return <SitePage locale="en" />;
}
