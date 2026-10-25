export function FitSection() {
  return (
    <section className="fit">
      <div className="wrap">
        <h2 className="fit__title">Est-ce pour vous?</h2>
        <div className="fit__grid">
          <div className="fit-col fit-col--yes">
            <div className="fit-col__heading">C&apos;est pour vous si :</div>
            <ul className="fit-col__list">
              <li>
                Vous travaillez dans un domaine technique (ingénierie,
                informatique, sciences)
              </li>
              <li>Votre enfant est au primaire</li>
              <li>
                Vous voulez qu&apos;il développe une vraie compréhension,
                pas juste qu&apos;il s&apos;amuse
              </li>
              <li>
                Vous avez essayé des camps ou des jouets, mais rien ne
                reste vraiment
              </li>
            </ul>
          </div>
          <div className="fit-col fit-col--no">
            <div className="fit-col__heading">
              Ce n&apos;est pas pour vous si :
            </div>
            <ul className="fit-col__list">
              <li>
                Vous cherchez uniquement une activité pour occuper votre
                enfant
              </li>
              <li>
                Vous n&apos;êtes pas prêt à vous engager pour au moins
                90 jours
              </li>
              <li>
                Votre enfant n&apos;est pas au primaire
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
