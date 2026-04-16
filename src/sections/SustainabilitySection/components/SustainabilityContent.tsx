import { useRef, useState } from "react";

const ITEMS = 3;

export const SustainabilityContent = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const itemWidth = (scrollWidth - clientWidth) / (ITEMS - 1);
    setCurrent(Math.round(scrollLeft / itemWidth));
  };

  const goTo = (i: number) => {
    if (!trackRef.current) return;
    const { scrollWidth, clientWidth } = trackRef.current;
    const itemWidth = (scrollWidth - clientWidth) / (ITEMS - 1);
    trackRef.current.scrollTo({ left: i * itemWidth, behavior: "smooth" });
    setCurrent(i);
  };

  return (
    <div className="flex flex-col md:flex-row gap-16 md:gap-24">

      {/* Left column */}
      <div className="w-full md:w-1/2">
        <span className="block text-sm leading-[25.6px] mb-2.5 md:mb-[15px]">
          Cómo lo hacemos
        </span>
        <h2 className="text-sky-950 text-2xl md:text-[32px] leading-tight tracking-[-0.5px] mb-6">
          Trabajo seguro, impacto responsable
        </h2>
        <p className="leading-[25.6px]">
          La seguridad es el eje de cada decisión en obra. Operamos con un sistema de gestión HSE
          que abarca desde la planificación hasta el cierre de cada trabajo, garantizando condiciones
          seguras para todo el personal propio y contratado.
        </p>
        <p className="leading-[25.6px] mt-4">
          Capacitamos continuamente a nuestro equipo en normas de seguridad industrial,
          uso correcto de EPPs y procedimientos de emergencia, promoviendo una cultura
          donde el cuidado de las personas es innegociable.
        </p>
      </div>

      {/* Right column */}
      <div className="w-full md:w-1/2">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto md:overflow-visible md:flex-col md:gap-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="shrink-0 w-[75vw] md:w-auto snap-start border-l-2 border-sky-950 pl-6">
            <h3 className="text-sky-950 font-semibold mb-2">Gestión HSE</h3>
            <p className="leading-[25.6px]">Planificación y control de riesgos en todas las etapas de la obra, con registros documentados y auditorías periódicas.</p>
          </div>

          <div className="shrink-0 w-[75vw] md:w-auto snap-start border-l-2 border-sky-950 pl-6">
            <h3 className="text-sky-950 font-semibold mb-2">Capacitación continua</h3>
            <p className="leading-[25.6px]">Formación permanente del personal en seguridad, procedimientos de trabajo y normas específicas de cada cliente.</p>
          </div>

          <div className="shrink-0 w-[75vw] md:w-auto snap-start border-l-2 border-sky-950 pl-6">
            <h3 className="text-sky-950 font-semibold mb-2">Cuidado del entorno</h3>
            <p className="leading-[25.6px]">Gestión responsable de residuos de obra, minimización de impacto ambiental y respeto por las normativas vigentes en cada planta.</p>
          </div>
        </div>

        {/* Dots — mobile only */}
        <div className="mt-4 flex gap-2 md:hidden">
          {Array.from({ length: ITEMS }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-emerald-600" : "w-1.5 bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};