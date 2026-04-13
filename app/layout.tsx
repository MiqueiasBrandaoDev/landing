import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sistema Fullbody — Protocolo Completo para Entrenadores",
  description:
    "El método que usaron 40.000 entrenadores para dejar de perder alumnos. Guía PDF + Plantillas + Certificado. Descarga inmediata.",
  openGraph: {
    title: "Sistema Fullbody — Protocolo Completo para Entrenadores",
    description:
      "El método que usaron 40.000 entrenadores para dejar de perder alumnos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      <body>{children}</body>
    </html>
  );
}
