import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Young Engineers | Ingénierie et robotique pour enfants au Québec",
  description:
    "En 90 jours, votre enfant peut avoir une vraie conversation d'ingénierie avec vous. Cours hebdomadaires en petit groupe. Réservez votre consultation gratuite.",
  openGraph: {
    title:
      "Young Engineers | Ingénierie et robotique pour enfants",
    description:
      "Réservez votre consultation gratuite. Cours d'ingénierie et de robotique en petit groupe pour enfants du primaire.",
    locale: "fr_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <div className="top-bar">
          <a href="#calendrier">
            Réservez votre consultation gratuite &rarr;
          </a>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
