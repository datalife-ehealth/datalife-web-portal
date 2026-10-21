import Link from "next/link";
import ClinicalIllustration from "./ClinicalIllustration";

const features = [
  {
    number: "01",
    title: "Privacy First",
    description: "Designed with privacy-conscious principles for the e-Health ecosystem.",
    icon: "shield",
  },
  {
    number: "02",
    title: "Clinical Focus",
    description: "A foundation for consultation workflows and audit readiness.",
    icon: "clinical",
  },
  {
    number: "03",
    title: "Built for Everyone",
    description: "Designed around accessibility, keyboard navigation, and clarity.",
    icon: "accessibility",
  },
];

function FeatureIcon({ name }: { name: string }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 4 40 10v12c0 10-7 17-16 22C15 39 8 32 8 22V10L24 4Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="m17 23 5 5 10-11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "clinical") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="7" y="8" width="34" height="32" rx="5" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 15v18M15 24h18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="5" y="7" width="38" height="27" rx="3" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M17 41h14M24 34v7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="hero section-container" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">DATA LIFE · DIGITAL HEALTHCARE</p>
        <h1 id="hero-heading">
          Welcome to the <span>Clinical Portal</span>
        </h1>
        <p className="hero-description">
          A privacy-conscious consultation and audit console for the DataLife e-Health ecosystem.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="#overview">
            Explore overview <span aria-hidden="true">→</span>
          </Link>
          <a className="text-link" href="#application-status">View application status</a>
        </div>
        <div className="trust-indicator">
          <span className="trust-dot" aria-hidden="true" />
          <span>Application foundation</span>
          <span className="trust-divider" aria-hidden="true" />
          <span>Accessibility focused</span>
        </div>
      </div>
      <div className="hero-art">
        <ClinicalIllustration />
        <div className="art-caption">
          <span className="art-caption-icon" aria-hidden="true">✓</span>
          Privacy-conscious by design
        </div>
      </div>
    </section>
  );
}

export function StatusSection() {
  return (
    <section id="application-status" className="status-section section-container" aria-labelledby="status-heading">
      <div className="status-card">
        <div className="status-icon" aria-hidden="true">!</div>
        <div className="status-copy">
          <div className="status-label">CURRENT STATUS</div>
          <h2 id="status-heading">Application Status</h2>
          <p role="status">
            Clinical workflows are not available yet. This portal currently provides the application shell only.
          </p>
        </div>
        <span className="status-badge"><span aria-hidden="true" />Foundation</span>
      </div>
    </section>
  );
}

export function FeatureSection() {
  return (
    <section id="overview" className="features-section section-container" aria-labelledby="features-heading">
      <div className="section-heading">
        <p className="eyebrow">OUR FOUNDATION</p>
        <h2 id="features-heading">Thoughtfully designed for healthcare</h2>
        <p>A clean starting point for a secure, accessible, and maintainable e-Health experience.</p>
      </div>
      <div className="feature-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <div className="feature-card-top">
              <div className="feature-icon"><FeatureIcon name={feature.icon} /></div>
              <span className="feature-number">{feature.number}</span>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ClosingSection() {
  return (
    <section className="closing-section">
      <div className="section-container closing-content">
        <div>
          <p className="eyebrow">BUILT ON A STRONG FOUNDATION</p>
          <h2>Clear. Accessible. Ready to grow.</h2>
          <p>This initial release focuses on the user interface foundation, not live clinical workflows.</p>
        </div>
        <a className="button button-light" href="#main-content">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </section>
  );
}
