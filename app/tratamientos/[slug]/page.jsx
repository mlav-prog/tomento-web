import { notFound } from "next/navigation";
import TreatmentLandingPage from "@/components/treatments/TreatmentLandingPage";
import { site } from "@/content/site";
import { treatments, treatmentSlugs } from "@/content/treatments";

export const dynamicParams = false;

export function generateStaticParams() {
  return treatmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const treatment = treatments[slug];
  if (!treatment) return {};
  const url = `${site.url.replace(/\/$/, "")}/tratamientos/${slug}/`;
  return {
    title: `${treatment.title} | Tomento Capilar`,
    description: treatment.description,
    alternates: { canonical: url },
    openGraph: { type: "website", locale: "es_AR", url, title: treatment.title, description: treatment.description, images: [{ url: `${site.url.replace(/\/$/, "")}${treatment.image}`, alt: treatment.imageAlt }] },
  };
}

export default async function TreatmentPage({ params }) {
  const { slug } = await params;
  const treatment = treatments[slug];
  if (!treatment) notFound();
  return <TreatmentLandingPage treatment={treatment} slug={slug} />;
}

