import "./globals.css";
import { assetPath } from "@/lib/assets";
import { site } from "@/content/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: "Tomento Capilar | Microimplante capilar FUE en CABA",
  description:
    "Microimplante capilar FUE, plasma rico en plaquetas, mesoterapia y microdermopigmentación capilar en CABA. Solicitá una evaluación personalizada.",
  keywords: [
    "microimplante capilar en CABA",
    "implante capilar FUE",
    "tratamientos capilares CABA",
    "PRP capilar",
    "mesoterapia capilar",
    "microdermopigmentación capilar",
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.name,
    title: "Tomento Capilar | Microimplante capilar FUE en CABA",
    description: "Tratamientos capilares personalizados y seguimiento profesional en CABA.",
    images: [{ url: `${site.url.replace(/\/$/, "")}/images/social/tomento-og.jpg`, width: 1200, height: 630, alt: "Tomento Capilar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomento Capilar | Microimplante capilar FUE en CABA",
    description: "Tratamientos capilares personalizados y seguimiento profesional en CABA.",
    images: [`${site.url.replace(/\/$/, "")}/images/social/tomento-og.jpg`],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      style={{
        "--leaf-background": `url("${assetPath("/images/brand/leaf-background.webp")}")`,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
