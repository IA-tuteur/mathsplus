export function ProblemSection() {
  return (
    <section className="problem">
      <div className="wrap wrap--narrow">
        <span className="eyebrow">Le vrai problème</span>
        <h2 className="problem__title">
          Vous êtes ingénieur. Votre enfant ne peut toujours pas vous
          expliquer ce qu&apos;il construit.
        </h2>
        <ul className="problem__points">
          <li className="problem__point">
            <span className="problem__icon">&times;</span>
            <span>
              Vous lui achetez des ensembles de construction, des jouets
              STEM, des applications. Il joue, il assemble. Mais quand vous
              lui demandez <strong>pourquoi</strong> sa structure tient
              debout, il hausse les épaules.
            </span>
          </li>
          <li className="problem__point">
            <span className="problem__icon">&times;</span>
            <span>
              Vous l&apos;avez inscrit à des camps. Deux semaines
              d&apos;activités, puis plus rien. Aucune compétence qui reste.
            </span>
          </li>
          <li className="problem__point">
            <span className="problem__icon">&times;</span>
            <span>
              Sur YouTube, il suit des instructions étape par étape. Il
              reproduit sans comprendre. Quand le modèle change, il est
              perdu.
            </span>
          </li>
        </ul>
        <p className="problem__bottom">
          Le problème n&apos;est pas le manque d&apos;outils. C&apos;est que
          personne ne lui a appris à <em>penser</em> comme un ingénieur —
          pas juste à suivre des instructions.
        </p>
      </div>
    </section>
  );
}
