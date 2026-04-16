import capabilitiesBackground from "@/assets/WhatsApp Image 2026-03-25 at 12.27.51 AM.jpeg";

export const CapabilitiesContent = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[620px] overflow-visible md:min-h-[820px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${capabilitiesBackground})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

      <div className="relative min-h-[620px] px-5 py-8 md:min-h-[820px] md:px-0 md:py-0">
        <div className="w-full bg-white px-8 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.14)] md:absolute md:bottom-[-210px] md:left-[72px] md:w-[640px] md:px-14 md:py-16">
          <h2 className="max-w-[430px] text-4xl leading-tight tracking-[-1px] text-sky-950 md:text-[28px] md:leading-[1.45]">
            Hacemos realidad lo que parecia imposible
          </h2>

          <p className="mt-10 max-w-[500px] text-xl leading-[1.65] text-zinc-500 md:mt-12 md:text-[16px] md:leading-[1.8]">
            Disenamos y construimos infraestructuras de gran escala: desde la
            planta de GNL de Dunkerque, la mas grande de Europa, hasta el ducto
            mas alto del mundo en Peru, ubicado a 4.900 msnm.
          </p>

          <a
            href="#projects-section"
            onClick={handleClick}
            className="mt-10 inline-flex items-center gap-3 text-[18px] text-sky-950 transition-opacity hover:opacity-80"
          >
            <span className="text-[28px] leading-none">→</span>
            <span>Conoce nuestras capacidades</span>
          </a>
        </div>
      </div>
    </div>
  );
};