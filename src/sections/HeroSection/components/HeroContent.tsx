import { HeroButton } from "@/sections/HeroSection/components/HeroButton";

export const HeroContent = () => {
  return (
    <div className="relative max-w-[1600px] mx-auto w-full">
      <div className="flex max-w-[520px] flex-col items-start">
        <h2 className="text-white text-2xl md:text-5xl font-medium leading-tight">
          Construccion y montaje industrial
        </h2>

        <p className="mt-3 md:mt-4 max-w-[400px] text-sm md:text-base text-white leading-relaxed">
          Desarrollamos soluciones integrales para plantas industriales y de
          proceso, combinando experiencia tecnica, respuesta eficiente y un
          fuerte compromiso con la seguridad operativa.
        </p>

        <div className="mt-5 self-start">
          <HeroButton />
        </div>
      </div>
    </div>
  );
};