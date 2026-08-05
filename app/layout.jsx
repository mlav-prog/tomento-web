import "./globals.css";
import { assetPath } from "@/lib/assets";

export const metadata = {
  title: "Tomento Capilar | Microimplante Capilar FUE",
  description:
    "Microimplante capilar con técnica FUE y tratamientos capilares personalizados en CABA.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      style={{
        "--leaf-background": `url("${assetPath("/images/brand/leaf-background.jpg")}")`,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
