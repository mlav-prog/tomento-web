import "./globals.css";

export const metadata = {
  title: "Tomento Capilar | Microimplante Capilar FUE",
  description:
    "Microimplante capilar con técnica FUE y tratamientos capilares personalizados en CABA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
