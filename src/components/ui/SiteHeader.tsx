import Image from "next/image";
import Link from "next/link";

const navigationItems = [
  { label: "Overview", href: "#overview" },
  { label: "Status", href: "#application-status" },
];

export default function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="header-inner">
          <Link
            className="brand"
            href="/"
            aria-label="DataLife e-Health home"
          >
            <span className="brand-mark" aria-hidden="true">
              <Image src="/datalife-mark.svg" alt="" width={44} height={44} priority />
            </span>

            <span>
              <span className="brand-name">DataLife</span>
              <span className="brand-subtitle">e-Health</span>
            </span>
          </Link>

          <nav className="primary-nav" aria-label="Main navigation">
            <Link href="/" aria-current="page">
              Home
            </Link>

            {navigationItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-label">
            <span aria-hidden="true" />
            Portal foundation
          </div>
        </div>
      </header>
    </>
  );
}
