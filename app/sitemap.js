import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap() {
  const base = site.url.replace(/\/$/, "");
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/en/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pt/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
