import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import heroBg from "@/assets/erstructura.png";
import { estructuras } from "./data/estructuras";

export const EstructurasPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <main>
        <div className="relative h-[380px] md:h-[500px] w-full overflow-hidden">
          <img src={heroBg} alt="Estructuras" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-sky-950/50" />
          <div className="relative z-10 flex flex-col justify-center h-full max-w-[1600px] mx-auto px-[34px] md:px-20">
            <span className="block text-white/80 text-sm mb-4">Nuestros Proyectos</span>
            <h1 className="text-white text-5xl md:text-7xl font-light leading-tight tracking-[-1px] max-w-[800px]">Estructuras y Equipos</h1>
          </div>
        </div>
        <div className="relative z-10 -mt-10 bg-white py-[60px] md:py-[80px] shadow-md">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <p className="text-sky-950 text-xl md:text-3xl font-light leading-relaxed max-w-[900px]">
              Fabricacion y montaje de estructuras metalicas, equipos de proceso y soporteria para la industria oil and gas y petroquimica.
            </p>
          </div>
        </div>
        <div className="bg-zinc-100 py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <h2 className="text-sky-950 text-2xl md:text-3xl font-light mb-10 tracking-[-1px]">Obras realizadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {estructuras.map((obra) => (
                <button
                  key={obra.id}
                  onClick={() => navigate(`/proyectos/estructuras/${obra.id}`)}
                  className="group bg-white shadow-sm text-left overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="h-[240px] overflow-hidden">
                    <img src={obra.imagenPortada} alt={obra.titulo} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-8 border-l-4 border-sky-950">
                    <p className="text-zinc-400 text-xs mb-2 uppercase tracking-widest">{obra.cliente} - {obra.ubicacion}</p>
                    <h3 className="text-sky-950 text-lg font-semibold mb-3 leading-snug">{obra.titulo}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{obra.resumen}</p>
                    <span className="inline-block mt-4 text-sky-950 text-sm font-medium group-hover:underline">Ver detalle</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
