import companyImg from "@/assets/WhatsApp-Image-2023-09-14-at-09.21.48-2.jpeg";

const values = [
  {
    title: "Compromiso",
    description: "Cada obra es una promesa. Nos comprometemos con los plazos, la calidad y la seguridad en cada etapa del trabajo.",
  },
  {
    title: "Seguridad ante todo",
    description: "Operamos bajo un sistema HSE estricto que protege a nuestro personal, a los clientes y al entorno en cada proyecto.",
  },
  {
    title: "Excelencia técnica",
    description: "Ingeniería in-house, controles radiográficos y certificaciones internacionales respaldan cada trabajo que realizamos.",
  },
];

export const CompanyContent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 md:gap-24">

      {/* Left column */}
      <div className="w-full md:w-1/2 flex flex-col">
        <span className="block text-sm leading-[25.6px] mb-2.5 md:mb-[15px]">
          Nuestra empresa
        </span>
        <h2 className="text-sky-950 text-2xl md:text-[32px] leading-tight tracking-[-0.5px] mb-6">
          Más de 20 años construyendo infraestructura industrial
        </h2>
        <p className="leading-[25.6px]">
          L&H Ingeniería es una empresa argentina especializada en montaje y mantenimiento
          de instalaciones industriales. Trabajamos para los sectores de oil & gas, energía
          y petroquímica, con presencia en las principales cuencas del país.
        </p>
        <p className="leading-[25.6px] mt-4">
          Nuestro equipo combina experiencia de campo con ingeniería propia, lo que nos permite
          asumir proyectos complejos con autonomía técnica, cumplimiento de normas internacionales
          y foco absoluto en la seguridad del personal.
        </p>

        {/* Values — mobile: horizontal scroll, desktop: vertical stack */}
        <div className="mt-8 w-full">
          <div
            className="flex gap-6 overflow-x-auto md:overflow-visible md:flex-col md:gap-6 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {values.map((v, i) => (
              <div key={i} className="shrink-0 w-[75vw] md:w-auto snap-start border-l-2 border-sky-950 pl-6">
                <h3 className="text-sky-950 font-semibold mb-2">{v.title}</h3>
                <p className="leading-[25.6px]">{v.description}</p>
              </div>
            ))}
          </div>

          {/* Dots — mobile only */}
          <div className="mt-4 flex gap-2 md:hidden">
            {values.map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-zinc-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right column — image */}
      <div className="w-full md:w-1/2">
        <img
          src={companyImg}
          alt="L&H Ingeniería — equipo en obra"
          className="w-full h-[420px] md:h-[750px] object-cover"
        />
      </div>

    </div>
  );
};
