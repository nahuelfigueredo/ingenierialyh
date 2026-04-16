import { ProfessionalContent } from "@/sections/ProfessionalSection/components/ProfessionalContent";

export const ProfessionalSection = () => {
  return (
    <section id="professional-section" className="bg-neutral-100 px-[34px] py-[60px] text-zinc-500 md:px-20 md:py-[100px]">
      <div className="mx-auto max-w-[1600px]">
        <ProfessionalContent />
      </div>
    </section>
  );
};

export { ProfessionalContent };