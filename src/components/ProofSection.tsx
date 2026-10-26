export function ProofSection() {
  return (
    <section className="proof">
      <div className="wrap wrap--narrow">
        <span className="eyebrow">Crédibilité</span>
        <p className="proof__text">
          Reconnue par la Commission de l&apos;Union européenne et la
          Harvard Graduate School of Education.
        </p>

        <div className="cred-bar cred-bar--section">
          <div className="cred-bar__logos">
            <img src="/images/eu-commission-logo.png" alt="Commission européenne" className="cred-bar__logo cred-bar__logo--lg cred-bar__logo--eu" />
            <img src="/images/harvard-logo.png" alt="Harvard Business School" className="cred-bar__logo cred-bar__logo--lg" />
          </div>
        </div>

        <p className="proof__sub">
          La méthode Young Engineers est utilisée dans plus de 50 pays à
          travers le monde.
        </p>
      </div>
    </section>
  );
}
