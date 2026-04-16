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
          Ingeniería propia con precisión y control
        </h2>
        <p className="leading-[25.6px]">
          Desarrollamos ingeniería in-house para cada proyecto: relevamiento de instalaciones, replanteo APC,
          confección de planos y cómputos propios. Esto nos permite controlar cada etapa del proceso
          con rigor técnico y sin depender de terceros.
        </p>
        <p className="leading-[25.6px] mt-4">
          Aplicamos controles de calidad estrictos en todas las uniones soldadas —radiografiado 100%
          y tratamientos térmicos— garantizando que cada obra cumpla con las normas ASME y las
          especificaciones del cliente.
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
            <h3 className="text-sky-950 font-semibold mb-2">Ingeniería de detalle</h3>
            <p className="leading-[25.6px]">Planos, isométricos y cómputos desarrollados por nuestro equipo técnico para cada trabajo específico.</p>
          </div>

          <div className="shrink-0 w-[75vw] md:w-auto snap-start border-l-2 border-sky-950 pl-6">
            <h3 className="text-sky-950 font-semibold mb-2">Control radiográfico</h3>
            <p className="leading-[25.6px]">Radiografiado al 100% en uniones críticas, con emisión de informes certificados por personal calificado.</p>
          </div>

          <div className="shrink-0 w-[75vw] md:w-auto snap-start border-l-2 border-sky-950 pl-6">
            <h3 className="text-sky-950 font-semibold mb-2">Tratamientos térmicos</h3>
            <p className="leading-[25.6px]">Aplicación de PWHT según norma en materiales especiales como A335 P5, P11 y P22, garantizando integridad mecánica.</p>
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