import { client } from "@/config/client";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap">
        <span className="eyebrow">
          Parents ingénieurs · Enfants du primaire · Québec
        </span>
        <h1 className="hero__h1">
          En 90&nbsp;jours, votre enfant maîtrise les bases de
          l&apos;ingénierie et peut en{" "}
          <em className="hero__accent">parler avec vous</em>.
          <br />
          <span className="hero__guarantee">
            Sinon, on continue gratuitement.
          </span>
        </h1>
        <p className="hero__sub">
          Pas juste assembler des pièces. Comprendre pourquoi ça tient,
          comment ça bouge, et vous l&apos;expliquer dans ses propres mots.
        </p>

        <div className="hero__credibility">
          <span className="hero__cred-label">Reconnue par</span>
          <div className="hero__cred-logos">
            <div className="cred-badge">
              <svg className="cred-badge__icon" viewBox="0 0 40 40" aria-hidden="true">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 - 90) * (Math.PI / 180);
                  const cx = 20 + 13 * Math.cos(angle);
                  const cy = 20 + 13 * Math.sin(angle);
                  return <circle key={i} cx={cx} cy={cy} r="1.8" fill="currentColor" />;
                })}
              </svg>
              <span className="cred-badge__text">Commission européenne</span>
            </div>
            <div className="cred-badge">
              <svg className="cred-badge__icon" viewBox="0 0 40 40" aria-hidden="true">
                <path d="M20 4 L36 14 V28 L20 38 L4 28 V14 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <text x="20" y="24" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="Georgia, serif">H</text>
              </svg>
              <span className="cred-badge__text">Harvard Graduate School of Education</span>
            </div>
          </div>
        </div>

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
            30 min · Gratuit · 5 places par semaine
          </p>
        </div>

        <p className="hero__proof">
          Cours hebdomadaires · 1h en petit groupe · En présentiel
        </p>
      </div>
    </section>
  );
}
