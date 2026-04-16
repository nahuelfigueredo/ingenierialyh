import { CompanyContent } from "@/sections/CompanySection/components/CompanyContent";

export const CompanySection = () => {
  return (
    <section id="company-section" className="bg-white text-zinc-500 py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
        <CompanyContent />
      </div>
    </section>
  );
};
