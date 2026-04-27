import { useRef, useState } from "react";

const ITEMS = 3;

export const InnovationContent = () => {
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
          Control y eficiencia en ingeniería
        </h2>
        <p className="leading-[25.6px]">
          Desarrollamos ingeniería aplicada en cada proyecto, permitiendo
          controlar cada etapa del proceso con precisión técnica y eficiencia
          operativa. Integramos planificación, análisis de recursos y
          coordinación en campo para optimizar tiempos de ejecución y asegurar
          resultados consistentes.
        </p>
        <p className="leading-[25.6px] mt-4">
          Aseguramos la calidad mediante controles rigurosos en procesos
          críticos, cumpliendo con normas internacionales y garantizando
          resultados confiables en cada obra. Nuestro enfoque se basa en la
          mejora continua, la trazabilidad de los procesos y el cumplimiento
          estricto de los estándares de seguridad y calidad exigidos por la
          industria.
        </p>
      </div>

      {/* Right column */}
      <div className="w-full md:w-1/2">
        {/* Mobile: horizontal scroll carousel */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto md:overflow-visible md:flex-col md:gap-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="shrink-0 w-[75vw] md:w-auto snap-start border-l-2 border-sky-950 pl-6">
            <h3 className="text-sky-950 font-semibold mb-2">Planificación de obra</h3>
            <p className="leading-[25.6px]">Organizamos cada proyecto con una planificación clara de etapas, recursos y tiempos para asegurar una ejecución ordenada.</p>
          </div>

          <div className="shrink-0 w-[75vw] md:w-auto snap-start border-l-2 border-sky-950 pl-6">
            <h3 className="text-sky-950 font-semibold mb-2">Coordinación en campo</h3>
            <p className="leading-[25.6px]">Integramos equipos técnicos y operativos en obra para dar respuesta ágil, seguimiento continuo y cumplimiento de objetivos.</p>
          </div>

          <div className="shrink-0 w-[75vw] md:w-auto snap-start border-l-2 border-sky-950 pl-6">
            <h3 className="text-sky-950 font-semibold mb-2">Seguridad y calidad</h3>
            <p className="leading-[25.6px]">Trabajamos con foco en la seguridad, el control de procesos y la calidad de ejecución en cada intervención industrial.</p>
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