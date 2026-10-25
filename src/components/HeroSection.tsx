import { client } from "@/config/client";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">
          Parents ingénieurs · Enfants du primaire · Québec
        </span>
        <h1 className="hero__h1">
          En 90&nbsp;jours, votre enfant peut avoir une{" "}
          <em className="hero__accent">vraie conversation</em>{" "}
          d&apos;ingénierie avec vous.
        </h1>
        <p className="hero__sub">
          Pas juste assembler des pièces. Comprendre pourquoi ça tient,
          comment ça bouge, et vous l&apos;expliquer dans ses propres mots.
        </p>

        <div className="hero__video">
          <div className="video-container">
            {client.vsl.embedUrl ? (
              <iframe
                src={`${client.vsl.embedUrl}?autoplay=1&mute=1`}
                title="Young Engineers, présentation de la méthode"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="video-placeholder">VIDÉO À VENIR</div>
            )}
          </div>
        </div>

        <div className="hero__cta">
          <a href="#calendrier" className="btn btn--lg">
            Réservez votre consultation gratuite{" "}
            <span className="arrow">&rarr;</span>
          </a>
          <p className="cta-micro">
            15 min · Gratuit · 5 places par semaine
          </p>
        </div>

        <p className="hero__proof">
          Cours hebdomadaires · 1h en petit groupe · En présentiel
        </p>
      </div>
    </section>
  );
}
