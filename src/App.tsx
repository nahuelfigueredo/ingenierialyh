import { useState } from "react";
import { CapabilitiesSection } from "./sections/CapabilitiesSection";
import { CookieBanner } from "./components/cookieBanner";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { InnovationSection } from "./sections/InnovationSection";
import { MobileMenu } from "./components/MobileMenu";
import { NewsSection } from "./sections/NewsSection";
import { ProfessionalSection } from "./sections/ProfessionalSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SustainabilitySection } from "./sections/SustainabilitySection";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookies, setShowCookies] = useState(true);

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        <HeroSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <ProfessionalSection />
        <InnovationSection />
        <SustainabilitySection />
        <NewsSection />
      </main>

      <Footer />

      {showCookies && <CookieBanner onAccept={() => setShowCookies(false)} />}
    </div>
  );
};

export default App;