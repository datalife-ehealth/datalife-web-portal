import Link from "next/link";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="section-container footer-inner">
      <p className="footer-copy">© {new Date().getFullYear()} DataLife e-Health. Built with accessibility in mind.</p>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link href="/">Home</Link>
        <Link href="/#application-status">Application status</Link>
        <Link href="/#overview">Accessibility</Link>
      </nav>
    </div>
  </footer>;
}
