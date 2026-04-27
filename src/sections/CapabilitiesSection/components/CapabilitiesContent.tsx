import capabilitiesBackground from "@/assets/WhatsApp Image 2026-03-25 at 12.27.51 AM.jpeg";

export const CapabilitiesContent = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-visible">

      {/* Foto — visible en mobile arriba, fondo absoluto en desktop */}
      <div className="relative h-[260px] w-full md:hidden">
        <img
          src={capabilitiesBackground}
          alt="Capacidades"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      {/* Card — en mobile ocupa todo el ancho debajo de la foto, en desktop se superpone */}
      <div className="relative md:min-h-[820px]">
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${capabilitiesBackground})` }}
        />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

        <div className="relative bg-white px-8 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.14)] md:absolute md:bottom-[-210px] md:left-[72px] md:w-[640px] md:px-14 md:py-16">
          <h2 className="max-w-[430px] text-3xl leading-tight tracking-[-1px] text-sky-950 md:text-[28px] md:leading-[1.45]">
            Ingeniería aplicada a resultados reales
          </h2>

          <p className="mt-6 max-w-[500px] text-base leading-[1.65] text-zinc-500 md:mt-12 md:text-[16px] md:leading-[1.8]">
            Acompañamos a nuestros clientes en cada etapa del proyecto,
            ofreciendo soluciones industriales adaptadas a sus necesidades, con
            rapidez de respuesta y compromiso operativo.
          </p>

          <a
            href="#projects-section"
            onClick={handleClick}
            className="mt-8 inline-flex items-center gap-3 text-base text-sky-950 transition-opacity hover:opacity-80 md:mt-10 md:text-[18px]"
          >
            <span className="text-2xl leading-none md:text-[28px]">→</span>
            <span>Conoce nuestras capacidades</span>
          </a>
        </div>
      </div>

    </div>
  );
};