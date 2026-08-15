import "./PricingCard.css";

const icons = {
  sun: (
    <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true">
      <circle
        cx="30"
        cy="30"
        r="16"
        fill="#cdeadd"
        stroke="#2f6b4f"
        strokeWidth="1.5"
      />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 30 + Math.cos(angle) * 20;
        const y1 = 30 + Math.sin(angle) * 20;
        const x2 = 30 + Math.cos(angle) * 26;
        const y2 = 30 + Math.sin(angle) * 26;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#2f6b4f"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true">
      <path
        d="M38 14a18 18 0 1 0 12 30 15 15 0 0 1-12-30Z"
        fill="#c7cfe0"
        stroke="#4a5670"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text x="44" y="20" fontSize="8" fill="#4a5670">
        z
      </text>
      <text x="50" y="14" fontSize="6" fill="#4a5670">
        z
      </text>
    </svg>
  ),
  chair: (
    <svg viewBox="0 0 64 64" width="72" height="72" aria-hidden="true">
      <path
        d="M20 14c4 0 7 3 7 7v8M40 12l8 8"
        fill="none"
        stroke="#3a4658"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="22" y="30" width="16" height="6" rx="2" fill="#3a4658" />
      <path
        d="M24 36v10a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6V36"
        fill="none"
        stroke="#3a4658"
        strokeWidth="1.5"
      />
      <path
        d="M16 52h32"
        stroke="#3a4658"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};

function InfoIcon({ color }) {
  return (
    <svg
      className="pc-info-icon"
      style={{ color }}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
      <line
        x1="8"
        y1="7"
        x2="8"
        y2="11.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="8" cy="4.7" r="0.9" fill="currentColor" />
    </svg>
  );
}

const PricingCard = ({
  icon = "sun",
  eyebrow,
  title,
  accent = "green", // 'green' | 'slate' | 'dark'
  monthlyPrice,
  monthlyNote = "or less*",
  oneTimePrice,
  ctaLabel,
  ctaHref = "#",
  moreLabel,
  moreHref = "#",
}) => (
  <div className="pc-wrap">
    <div className={`pc-card accent-${accent}`}>
      <div className="pc-icon">{icons[icon]}</div>

      <h3 className="pc-heading">
        <span className="pc-eyebrow">{eyebrow}</span>
        <br />
        {title}
      </h3>

      <div className="pc-price-block">
        <p className="pc-label">Monthly Payment</p>
        <p className="pc-price">
          {monthlyPrice}
          <span className="pc-price-unit">/month</span>
        </p>
        <p className="pc-note">{monthlyNote}</p>
      </div>

      <div className="pc-separator">
        <span>or</span>
      </div>

      <div className="pc-price-block">
        <p className="pc-label">One-Time Payment</p>
        <p className="pc-price pc-price--onetime">{oneTimePrice}</p>
      </div>

      <div className="pc-cta-wrap">
        <a className="pc-cta" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
    </div>

    {moreLabel && (
      <a className="pc-more-link" href={moreHref}>
        {moreLabel}
      </a>
    )}
  </div>
);

/**
 * PricingCardGroup
 *
 * Lays pricing cards out in a row on desktop and stacks them on mobile,
 * matching the reference screenshot.
 */
export const PricingCardGroup = ({ children }) => (
  <div className="pc-group">{children}</div>
);

export default PricingCard;
