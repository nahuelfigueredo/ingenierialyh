import { useState, useEffect } from "react";
import flota1 from "@/assets/flota1.jpeg";
import flota2 from "@/assets/flota2.jpeg";
import flota3 from "@/assets/flota3.jpg";
import flota7 from "@/assets/flota7.png";
import flota8 from "@/assets/flota8.png";

const fleetImages = [flota1, flota2, flota3, flota7, flota8];

export const ProfessionalContent = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fleetImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-neutral-100 flex flex-col-reverse md:flex-row md:justify-between gap-[55px]">

      {/* Text */}
      <div className="w-full md:max-w-[calc(50%_-_27.5px)] flex flex-col justify-center">

        <span className="block leading-[25.6px] mb-2.5 md:mb-[15px]">
          Nuestra flota
        </span>

        <h2 className="text-sky-950 text-2xl md:text-[26px] leading-[33.6px] md:leading-[36.4px] tracking-[-0.5px] mb-[30px]">
          Equipos y maquinaria listos para cada desafío
        </h2>

        <p className="leading-[25.6px]">
          Contamos con una flota propia de vehículos, maquinaria pesada y equipos especializados,
          mantenidos en óptimas condiciones para garantizar el cumplimiento de cada obra en tiempo y forma.
          <br /><br />
          Grúas, camiones, vehículos utilitarios y maquinaria de obra conforman nuestra capacidad
          operativa para responder a cualquier exigencia del proyecto.
        </p>

        <a
          href="#capabilities-section"
          className="inline-flex items-center mt-[30px] text-sky-950 hover:opacity-70 transition-opacity"
        >
          <span className="leading-[25.6px]">
            Conoce nuestra capacidad operativa &rarr;
          </span>
        </a>

      </div>

      {/* Slideshow */}
      <div className="w-full md:max-w-[calc(50%_-_27.5px)] relative overflow-hidden h-[320px] md:h-[480px]">
        {fleetImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Flota ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {fleetImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[6px] rounded-full transition-all duration-300 ${
                i === current ? "w-5 bg-white" : "w-[6px] bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};