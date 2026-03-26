import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angèle Ferrere — Historienne & Curatrice",
  description:
    "Angèle Ferrere, docteure en histoire et esthétique de la photographie. 1ère lauréate de la Bourse de recherche curatoriale Martine Franck, Fondation Henri Cartier-Bresson.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${instrumentSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
