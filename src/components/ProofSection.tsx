export function ProofSection() {
  return (
    <section className="proof">
      <div className="wrap wrap--narrow">
        <span className="eyebrow">Crédibilité</span>
        <p className="proof__text">
          Reconnue par la Commission de l&apos;Union européenne et la
          Harvard Graduate School of Education.
        </p>

        <div className="proof__logos">
          <div className="cred-badge cred-badge--lg">
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
          <div className="cred-badge cred-badge--lg">
            <svg className="cred-badge__icon" viewBox="0 0 40 40" aria-hidden="true">
              <path d="M20 4 L36 14 V28 L20 38 L4 28 V14 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <text x="20" y="24" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="Georgia, serif">H</text>
            </svg>
            <span className="cred-badge__text">Harvard Graduate School of Education</span>
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
