export function MethodSection() {
  return (
    <section className="method">
      <div className="wrap">
        <span className="eyebrow">Ce qui nous rend différents</span>
        <h2 className="method__title">La Méthode Young Engineers</h2>
        <p className="method__subtitle">
          3 étapes. 90 jours. Une compétence qui reste.
        </p>
        <div className="method__steps">
          <div className="method-card">
            <div className="method-card__num">1</div>
            <div className="method-card__title">Manipulation concrète</div>
            <p className="method-card__text">
              Chaque semaine, votre enfant construit quelque chose de ses
              mains. Pas un modèle à copier — un vrai défi mécanique, avec
              des pièces motorisées.
            </p>
          </div>
          <div className="method-card">
            <div className="method-card__num">2</div>
            <div className="method-card__title">
              Compréhension du mécanisme
            </div>
            <p className="method-card__text">
              On ne passe pas au suivant tant qu&apos;il ne comprend pas le
              pourquoi. Engrenages, leviers, structures — il apprend le
              principe, pas juste la procédure.
            </p>
          </div>
          <div className="method-card">
            <div className="method-card__num">3</div>
            <div className="method-card__title">
              Transfert et explication
            </div>
            <p className="method-card__text">
              Il reformule dans ses propres mots ce qu&apos;il a compris.
              C&apos;est cette étape qui crée la vraie conversation à la
              maison — celle que vous attendez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
