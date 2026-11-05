import type { Metadata } from "next";
import { RendezVousCalendar } from "@/components/RendezVousCalendar";
import { client } from "@/config/client";

export const metadata: Metadata = {
  title: "Réservez votre consultation | MathPlus",
  description: `Consultation gratuite · ${client.subject}`,
  openGraph: {
    title: "Réservez votre consultation | MathPlus",
    description: `Consultation gratuite · ${client.subject}`,
    locale: "fr_CA",
    type: "website",
  },
};

export default function RendezVousPage() {
  return (
    <main className="rdv-page">
      <div className="wrap">
        <h1>Réservez votre consultation gratuite</h1>
        <p className="rdv-page__sub">
          Consultation gratuite · {client.subject}
        </p>
        <RendezVousCalendar />
      </div>
    </main>
  );
}
