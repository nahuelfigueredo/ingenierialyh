import { useRef, useState, useCallback } from "react";
import { ProjectCard } from "@/sections/ProjectsSection/components/ProjectCard";
import firstProjectImage from "@/assets/WhatsApp-Image-2023-09-14-at-09.21.48-2.jpeg";
import secondProjectImage from "@/assets/06.jpg";
import thirdProjectImage from "@/assets/12.png";
import fourthProjectImage from "@/assets/10.jpg";

const projects = [
  {
    href: "/proyectos/metalurgia/reparaciones-vapor-metalurgia",
    imageClass: "",
    imageSrc: firstProjectImage,
    country: "Plaza Huincul, Neuquen YPF.",
    title: "REPARACIONES METALURGICAS EN LINEAS DE VAPOR.",
    description:
      "Relevamiento e Inspeccion de Canerias Afectadas.\n\nCorte de Costuras/Tramos de Caneria Afectado.\n\nAmolado de extremos hasta metal base en buen estado",
  },
  {
    href: "/proyectos/piping/linea-reflujo-coke-topping",
    imageClass: "",
    imageSrc: secondProjectImage,
    country: "YPF CILP. Complejo industrial la Plata YPF.",
    title: "NUEVA LINEA DE ROFLO DESDE COKE A, A TOPPING C.",
    description:
      "Relevamiento de las instalaciones existentes con ingenieria desarrollada por L&H, para la ejecucion de la obra Piping.\n\nSe realizo la construccion de todas las lineas que intervienen la obra (Ø de 8”).\n\nConstruccion y montaje de toda la soporteria.\n\nMontaje y soldadura de la linea y valvulas para la nueva linea sector Coke A.",
  },
  {
    href: "/proyectos/estructuras/estructuras-refineria-lp",
    imageClass: "",
    imageSrc: thirdProjectImage,
    country: "La Plata, Buenos Aires YPF.",
    title: "CONTRATO PARA NUEVOS PROYECTOS DE PIPING, ESTRUCTURAS Y EQUIPOS, PARA GCIA. DE INGENIERIA YPF, Y PARA GCIA DE PAROS YPF.",
    description:
      "Al dia de la fecha, se terminaron mas de 90 obras, de modificaciones de plantas y nuevas obras metalurgicas (estructuras y piping), en Refineria La Plata, CIE Ensenada y Puerto La Plata.\n\nDesarrollo de ingenieria, replanteo APC. Propuestas para nuevas ingenierias y mejoras de instalaciones.",
  },
  {
    href: "/proyectos/hornos/h301-h306",
    imageClass: "",
    imageSrc: fourthProjectImage,
    country: "Complejo Industrial Plaza Huincul.",
    title: "REEMPLAZO DE TUBOS DE RADIACION EN HORNOS H301 Y 306.",
    description:
      "Se realizo el prefabricacion y montaje de los Serpentines de radiacion de los Hornos H-301 (A 335 P5) y 306 (Acero Al Carbono).\nTambien se realizo la prefabricacion de lineas de Ø10” A335 P11, Realizando en un 100% de Radiografiado y Tratamiento Termicos.\nSe realizo el Desmontaje de las Chimeneas de ambos Hornos, para luego Evaluar y reparar los lugares necesarios.",
  },
];

export const ProjectsCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const CARD_WIDTH = 320; // ancho estimado

  const goTo = useCallback((index: number) => {
    if (!trackRef.current) return;

    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    setCurrentIndex(clamped);

    trackRef.current.scrollTo({
      left: clamped * CARD_WIDTH,
      behavior: "smooth",
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();

    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;

    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    if (!trackRef.current) return;

    const newIndex = Math.round(
      trackRef.current.scrollLeft / CARD_WIDTH
    );

    setCurrentIndex(
      Math.max(0, Math.min(newIndex, projects.length - 1))
    );
  };

  const progressWidth = ((currentIndex + 1) / projects.length) * 100;

  return (
    <section className="relative overflow-hidden pb-6">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">

        {/* Track */}
        <div
          ref={trackRef}
          className={`overflow-x-auto flex gap-5 scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              href={project.href}
              imageClass={project.imageClass}
              imageSrc={project.imageSrc}
              country={project.country}
              title={project.title}
              description={project.description}
              hasBorderClass={i < projects.length - 1}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-6 md:hidden">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-emerald-600"
                  : "w-2 bg-zinc-300"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="hidden md:flex justify-end gap-3 mt-6">
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="w-10 h-10 border border-zinc-400 flex items-center justify-center hover:bg-sky-950 hover:text-white transition"
          >
            ←
          </button>

          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === projects.length - 1}
            className="w-10 h-10 border border-zinc-400 flex items-center justify-center hover:bg-sky-950 hover:text-white transition"
          >
            →
          </button>
        </div>

        {/* Progress */}
        <div className="mt-6 bg-zinc-300 h-[2px] w-full relative">
          <div
            className="absolute top-0 left-0 h-[2px] bg-emerald-600 transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          />
        </div>
      </div>
    </section>
  );
};