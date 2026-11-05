import type { Metadata } from "next";
import { ClickToPlayVideo } from "@/components/ClickToPlayVideo";

export const metadata: Metadata = {
  title: "Vos questions, nos réponses | MathPlus",
  description:
    "Les réponses courtes sur les ateliers MathPlus, avant de réserver votre appel.",
  openGraph: {
    title: "Vos questions, nos réponses | MathPlus",
    description:
      "Les réponses courtes sur les ateliers MathPlus, avant de réserver votre appel.",
    locale: "fr_CA",
    type: "website",
  },
};

const videos = [
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

const answers = [
  {
    question: "C'est quoi, MathPlus?",
    answer:
      "C'est de l'enrichissement. Votre enfant construit de ses mains, comprend pourquoi ça fonctionne, puis vous l'explique dans ses mots. Ce n'est pas du tutorat scolaire.",
  },
  {
    question: "Pour quel âge?",
    answer:
      "Pour les enfants du primaire, de 5 à 12 ans. Si vous hésitez, on en parle à l'appel.",
  },
  {
    question: "À quoi ressemble un cours?",
    answer:
      "En présentiel, en petit groupe, chaque semaine. Il construit un vrai défi, pas un modèle à copier. On avance quand il a compris le principe. L'horaire exact se confirme à l'appel.",
  },
  {
    question: "Que se passe-t-il pendant l'appel?",
    answer:
      "Une consultation gratuite de 30 minutes, sans engagement. On parle de l'âge de votre enfant, de ce qu'il aime construire et de ce que vous cherchez. On voit ensuite quel parcours lui correspond.",
  },
  {
    question: "C'est où?",
    answer:
      "Les cours sont en présentiel, au Québec. L'adresse précise, on vous la donne à l'appel. Ce n'est pas un cours en ligne.",
  },
  {
    question: "Est-ce que ça remplace l'aide aux devoirs?",
    answer:
      "Non. On ne travaille pas les notes. Il apprend à construire et à vous expliquer ce qu'il a fait.",
  },
  {
    question: "Comment on commence?",
    answer:
      "Vous réservez une consultation gratuite. Après l'appel, vous décidez. Rien n'est engagé avant.",
  },
];

export default function FaqPage() {
  return (
    <main className="faq-page">
      <section className="faq-hero">
        <div className="wrap wrap--narrow">
          <h1>Vos questions, nos réponses</h1>
          <p className="faq-hero__sub">
            L&apos;essentiel sur les ateliers, avant votre appel.
          </p>
        </div>
      </section>

      <section className="faq-videos">
        <div className="wrap">
          <h2>En vidéo</h2>
          <div className="obj-grid">
            {videos.map((video) => (
              <article key={video.videoId} className="obj-card">
                <ClickToPlayVideo
                  videoId={video.videoId}
                  title={video.question}
                />
                <h3 className="obj-card__question">{video.question}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-written">
        <div className="wrap wrap--narrow">
          <h2>À lire</h2>
          <div className="faq-list">
            {answers.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-cta">
        <div className="wrap wrap--narrow">
          <h2>On en parle?</h2>
          <p>Gratuit. 30 minutes. Sans engagement.</p>
          <a className="btn" href="/reserver">
            Réservez votre consultation <span className="arrow">&rarr;</span>
          </a>
        </div>
      </section>
    </main>
  );
}
