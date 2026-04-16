import { SustainabilityContent } from "./components/SustainabilityContent";

export const SustainabilitySection = () => {
  return (
    <section id="sustainability-section" className="text-zinc-500 bg-neutral-100 overflow-hidden py-[60px] md:py-[100px]">
      <div className="max-w-[1600px] mx-auto px-[34px] md:px-20">
        <SustainabilityContent />
      </div>
    </section>
  );
};