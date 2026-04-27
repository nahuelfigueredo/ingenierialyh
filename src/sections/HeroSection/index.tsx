import { HeroBackground } from "@/sections/HeroSection/components/HeroBackground";
import { HeroContent } from "@/sections/HeroSection/components/HeroContent";
import { HeroScrollLink } from "@/sections/HeroSection/components/HeroScrollLink";

export const HeroSection = () => {
  return (
    <section id="hero-section" className="relative text-white">
      <div className="relative flex flex-col justify-start h-[650px] min-h-[550px] md:min-h-[700px] md:h-[1000px] w-full overflow-hidden">
        
        <HeroBackground />

        <div className="relative z-[2] px-6 md:px-20 pt-40 md:pt-52">
          <HeroContent />
        </div>

        <HeroScrollLink />

      </div>
    </section>
  );
};