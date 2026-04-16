import { useState, useRef, useCallback } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { CompanyContent } from "@/sections/CompanySection/components/CompanyContent";
import heroBg from "@/assets/Fabricacion-de-Chimenea.jpg";
import videoPoster from "@/assets/tinglado.jpg";

export const CompanyPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const stats = [
    { number: "+20", label: "años de experiencia en el sector industrial." },
    { number: "+500", label: "proyectos realizados en todo el país." },
    { number: "+200", label: "profesionales especializados." },
    { number: "+50", label: "clientes activos en oil & gas y petroquímica." },
  ];
  const STAT_CARD_WIDTH = 420 + 16;
  const statsRef = useRef<HTMLDivElement>(null);
  const [statIndex, setStatIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const goToStat = useCallback((index: number) => {
    if (!statsRef.current) return;
    const clamped = Math.max(0, Math.min(index, stats.length - 1));
    setStatIndex(clamped);
    statsRef.current.scrollTo({ left: clamped * STAT_CARD_WIDTH, behavior: "smooth" });
  }, []);

  const handleStatMouseDown = (e: React.MouseEvent) => {
    if (!statsRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - statsRef.current.offsetLeft);
    setScrollLeft(statsRef.current.scrollLeft);
  };
  const handleStatMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !statsRef.current) return;
    e.preventDefault();
    statsRef.current.scrollLeft = scrollLeft - (e.pageX - statsRef.current.offsetLeft - startX) * 1.5;
  };
  const handleStatDragEnd = () => {
    setIsDragging(false);
    if (!statsRef.current) return;
    setStatIndex(Math.max(0, Math.min(Math.round(statsRef.current.scrollLeft / STAT_CARD_WIDTH), stats.length - 1)));
  };
  const handleStatTouchStart = (e: React.TouchEvent) => {
    if (!statsRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - statsRef.current.offsetLeft);
    setScrollLeft(statsRef.current.scrollLeft);
  };
  const handleStatTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !statsRef.current) return;
    statsRef.current.scrollLeft = scrollLeft - (e.touches[0].pageX - statsRef.current.offsetLeft - startX) * 1.5;
  };

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        {/* Hero */}
        <div className="relative h-[500px] md:h-[640px] w-full overflow-visible">
          <img
            src={heroBg}
            alt="Nuestra empresa"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-sky-950/40" />
          <div className="relative z-10 flex flex-col justify-center h-full max-w-[1600px] mx-auto px-[34px] md:px-20">
            <span className="block text-white/80 text-sm mb-4">Quiénes somos</span>
            <h1 className="text-white text-5xl md:text-7xl font-light leading-tight tracking-[-1px] max-w-[800px]">
              Un socio confiable para cada desafío
            </h1>
          </div>

          {/* Intro card overlapping hero */}
          <div className="absolute bottom-0 translate-y-[70%] left-0 right-0 z-20 px-[34px] md:px-20">
            <div className="bg-white max-w-[1600px] mx-auto px-10 md:px-16 py-10 md:py-14 shadow-md">
              <p className="text-sky-950 text-xl md:text-3xl leading-relaxed max-w-[900px]">
                Ingeniería L&H trabaja para ofrecer servicios, bienes y Obras para el Mantenimiento, Construcción de Equipos y Plantas de Proceso. Desarrollamos una fuerte especialización en Intercambiadores de calor, Hornos de proceso, Acumuladores y Columnas de Destilación.
              </p>
            </div>
          </div>
        </div>

        {/* Spacer for overlapping card */}
        <div className="h-[200px] md:h-[260px] bg-white" />

        {/* Video section */}
        <div className="relative w-full h-[380px] md:h-[500px] overflow-hidden">
          <img
            src={videoPoster}
            alt="Ver video"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-sky-950/30" />

          {/* Botón central */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <button
              onClick={() => setVideoOpen(true)}
              className="flex items-center justify-center w-32 h-32 rounded-full border-2 border-white text-white text-sm tracking-wide hover:bg-white/10 transition-colors"
            >
              Ver video
            </button>
          </div>

          {/* Título abajo izquierda */}
          <div className="absolute bottom-0 left-0 z-10 max-w-[1600px] w-full mx-auto px-[34px] md:px-20 pb-8 md:pb-12">
            <h2 className="text-white text-3xl md:text-5xl font-normal leading-tight max-w-[600px]">
              Ingeniería L&H la hacemos realidad en soluciones
            </h2>
          </div>
        </div>

        {/* Video modal */}
        {videoOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            onClick={() => setVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVideoOpen(false)}
                className="absolute -top-10 right-0 text-white text-sm hover:underline"
              >
                Cerrar ✕
              </button>
              <video
                src="/videos/empresa.mp4"
                controls
                autoPlay
                className="w-full"
              />
            </div>
          </div>
        )}

        {/* Stats carousel */}
        <div className="bg-zinc-100 py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <h2 className="text-sky-950 text-lg mb-10">L&H en números</h2>

            {/* Track */}
            <div
              ref={statsRef}
              className={`flex gap-4 overflow-x-auto ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onMouseDown={handleStatMouseDown}
              onMouseMove={handleStatMouseMove}
              onMouseUp={handleStatDragEnd}
              onMouseLeave={handleStatDragEnd}
              onTouchStart={handleStatTouchStart}
              onTouchMove={handleStatTouchMove}
              onTouchEnd={handleStatDragEnd}
            >
              {stats.map((stat, i) => (
                <div key={i} className="shrink-0 bg-white p-10 md:p-12 w-[75vw] md:w-[420px] min-h-[220px] flex flex-col justify-between">
                  <span className="text-sky-950 text-5xl md:text-6xl font-semibold">{stat.number}</span>
                  <p className="text-zinc-500 text-sm mt-6 leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Dots mobile */}
            <div className="mt-6 flex gap-2 md:hidden">
              {stats.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToStat(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === statIndex ? "w-6 bg-sky-950" : "w-1.5 bg-zinc-300"}`}
                />
              ))}
            </div>

            {/* Arrows desktop */}
            <div className="mt-6 hidden justify-end gap-3 md:flex">
              <button
                onClick={() => goToStat(statIndex - 1)}
                disabled={statIndex === 0}
                className="flex h-10 w-10 items-center justify-center border border-zinc-400 transition hover:bg-sky-950 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
              >←</button>
              <button
                onClick={() => goToStat(statIndex + 1)}
                disabled={statIndex === stats.length - 1}
                className="flex h-10 w-10 items-center justify-center border border-zinc-400 transition hover:bg-sky-950 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
              >→</button>
            </div>

            {/* Progress bar */}
            <div className="relative mt-5 h-px w-full bg-zinc-300 md:mt-8">
              <div
                className="absolute left-0 top-0 h-px bg-sky-950 transition-all duration-300"
                style={{ width: `${((statIndex + 1) / stats.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
};
