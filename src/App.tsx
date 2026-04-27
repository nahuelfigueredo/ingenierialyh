import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as any)?.scrollTo;
    if (scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location.state]);

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