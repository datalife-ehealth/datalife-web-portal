import Link from "next/link";

export default function AccessGrantPage() {
  return (
    <main id="main-content" className="placeholder-page section-container" tabIndex={-1} aria-labelledby="access-grant-heading">
      <p className="eyebrow">DATA LIFE · DIGITAL HEALTHCARE</p>
      <h1 id="access-grant-heading">Access grant</h1>
      <p role="status">This access workflow is not available yet. No patient information has been requested or accessed.</p>
      <Link className="button button-primary" href="/">Return to the portal home</Link>
    </main>
  );
}
