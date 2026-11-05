import type { Metadata } from "next";
import { ClickToPlayVideo } from "@/components/ClickToPlayVideo";
import { client } from "@/config/client";

export const metadata: Metadata = {
  title: `Avant votre appel | ${client.name}`,
  description: "Voici tout ce que vous devez savoir avant notre appel.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: `Avant votre appel | ${client.name}`,
    description: "Voici tout ce que vous devez savoir avant notre appel.",
    locale: "fr_CA",
    type: "website",
  },
};

function youtubeId(embedUrl: string) {
  return embedUrl.split("/embed/")[1]?.split(/[?&]/)[0] ?? "";
}

const callPoints = [
  "Faire le point sur l'âge, les intérêts et l'expérience de votre enfant",
  "Vous présenter les programmes qui lui correspondent",
  "Répondre à vos questions, sans engagement",
];

const roadmap = [
  "L'appel : on fait le point sur l'âge, les intérêts et l'expérience de votre enfant.",
  "Le programme : on choisit un parcours selon son âge.",
  "Les ateliers : des cours en petits groupes, pour construire et expérimenter.",
  "Les projets : mécanique, robotique ou code, selon le parcours retenu.",
];

const faqs = [
  {
    videoId: "5aoVM-LNXu8",
    question: "Et si mon enfant n'est pas assez motivé?",
  },
  {
    videoId: "IRvEB5zW6gc",
    question: "Est-ce que j'ai vraiment le temps pour ça?",
  },
  {
    videoId: "jbnibnf0Oqo",
    question: "Pourquoi ne pourrais-je pas choisir une autre option?",
  },
];

type PrecallTestimonial = {
  name: string;
  videoId: string;
};

// Aucun témoignage pour l'instant. Ajouter une entrée pour afficher la section.
const testimonials: PrecallTestimonial[] = [];

export default function AvantVotreAppelPage() {
  const vslId = youtubeId(client.vsl.embedUrl);

  return (
    <main className="precall">
      <section className="precall-hero">
        <div className="wrap wrap--narrow">
          <h1>Voici tout ce que vous devez savoir avant notre appel</h1>
          <ol className="precall-points">
            {callPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="precall-section precall-section--ground">
        <div className="wrap">
          <h2>Comment ça fonctionne</h2>
          <div className="precall-vsl">
            <ClickToPlayVideo
              videoId={vslId}
              title="Présentation des programmes Young Engineers"
            />
          </div>
        </div>
      </section>

      <section className="precall-section precall-road-section">
        <div className="wrap">
          <h2>Le parcours</h2>
          <ol className="precall-road">
            {roadmap.map((step, index) => (
              <li key={step}>
                <span className="precall-road__num" aria-hidden="true">
                  {index + 1}
                </span>
                <p className="precall-road__text">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {testimonials.length > 0 ? (
        <section
          className="precall-section precall-section--ground"
          id="temoignages"
        >
          <div className="wrap">
            <h2>Ce que les autres parents disent</h2>
            <div className="testimonials__grid">
              {testimonials.map((item) => (
                <article key={item.videoId} className="testimonial-card">
                  <ClickToPlayVideo
                    videoId={item.videoId}
                    title={`Témoignage de ${item.name}`}
                  />
                  <p className="testimonial-card__author">
                    <strong>{item.name}</strong>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="precall-section precall-section--ground">
        <div className="wrap">
          <span className="eyebrow">Questions fréquentes</span>
          <h2>Toutes les questions qu&apos;on nous pose avant l&apos;appel, répondues</h2>
          <div className="obj-grid">
            {faqs.map((faq) => (
              <article key={faq.videoId} className="obj-card">
                <ClickToPlayVideo videoId={faq.videoId} title={faq.question} />
                <h3 className="obj-card__question">{faq.question}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="precall-close">
        <div className="wrap wrap--narrow">
          <p className="precall-close__sign">
            À très bientôt&nbsp;! — {client.spokesperson}
          </p>
        </div>
      </section>
    </main>
  );
}
