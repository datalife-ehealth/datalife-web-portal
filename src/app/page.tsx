import { ClosingSection, FeatureSection, HeroSection, StatusSection } from "@/components/ui/HomeSections";

export default function HomePage() {
  return <main id="main-content" tabIndex={-1}>
    <HeroSection />
    <StatusSection />
    <FeatureSection />
    <ClosingSection />
  </main>;
}
