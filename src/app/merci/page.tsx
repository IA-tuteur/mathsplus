import type { Metadata } from "next";
import { client } from "@/config/client";

export const metadata: Metadata = {
  title: `Consultation confirmée | ${client.name}`,
  description:
    "Votre consultation gratuite est réservée. Préparez-vous pour votre appel.",
};

export default function ThankYouPage() {
  return (
    <main>
      <section className="ty-hero">
        <div className="wrap wrap--narrow">
          <div className="ty-check">
            <svg viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1>Votre consultation est réservée.</h1>
          <p className="lead">
            {client.spokesperson} va vous appeler à l&apos;heure prévue
            pour discuter de la situation de votre enfant et voir si la
            méthode Young Engineers est le bon fit.
          </p>

          <div className="email-alert">
            <strong>Vérifiez votre boîte de réception</strong>
            <p>
              Un courriel de confirmation vient de vous être envoyé avec
              les détails de votre consultation. Si vous ne le voyez pas,
              vérifiez vos courriers indésirables.
            </p>
          </div>
        </div>
      </section>

      <section className="prep-section">
        <div className="wrap wrap--narrow">
          <h2>Comment vous préparer</h2>
          <p className="prep-subtitle">
            Pour qu&apos;on puisse vous aider au maximum en 30 minutes
          </p>
          <ol className="prep-steps">
            <li>
              <span className="prep-num" />
              <div>
                <strong>
                  L&apos;âge de votre enfant et ses intérêts actuels
                </strong>
                <p>
                  Ce qu&apos;il aime construire, les activités qu&apos;il a
                  déjà essayées, ce qui a fonctionné ou non.
                </p>
              </div>
            </li>
            <li>
              <span className="prep-num" />
              <div>
                <strong>Vos questions</strong>
                <p>
                  Notez ce que vous aimeriez savoir sur la méthode, le
                  format des cours ou les résultats attendus.
                </p>
              </div>
            </li>
            <li>
              <span className="prep-num" />
              <div>
                <strong>Un endroit calme</strong>
                <p>
                  La consultation dure 30 minutes. Assurez-vous d&apos;être
                  disponible sans interruptions.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="closing">
        <div className="wrap wrap--narrow">
          <h2>On a hâte de vous parler.</h2>
          <p>
            Si vous avez besoin de modifier votre créneau, utilisez le lien
            dans votre courriel de confirmation.
          </p>
        </div>
      </section>
    </main>
  );
}
