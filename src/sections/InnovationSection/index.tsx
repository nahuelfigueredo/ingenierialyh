import { InnovationContent } from "@/sections/InnovationSection/components/InnovationContent";

export const InnovationSection = () => {
  return (
    <section id="innovation-section" className="bg-white text-zinc-500 py-[60px] md:py-[100px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-[34px] md:px-20">
        <InnovationContent />
      </div>
    </section>
  );
};