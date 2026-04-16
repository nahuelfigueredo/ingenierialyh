import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { metalurgia } from "./data/metalurgia";

export const MetalurgiaDetallePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const obra = metalurgia.find((h) => h.id === id);

  if (!obra) {
    return <div className="min-h-screen flex items-center justify-center text-sky-950 text-2xl">Obra no encontrada.</div>;
  }

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <main>
        <div className="relative h-[420px] md:h-[580px] w-full overflow-hidden">
          <img src={obra.imagenPortada} alt={obra.titulo} className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-sky-950/55" />
          <div className="relative z-10 flex flex-col justify-end h-full max-w-[1600px] mx-auto px-[34px] md:px-20 pb-16">
            <button onClick={() => navigate("/proyectos/metalurgia")} className="text-white/70 text-sm mb-6 hover:text-white text-left">
              ← Volver a Metalurgia
            </button>
            <span className="block text-white/70 text-sm mb-3">{obra.cliente} — {obra.ubicacion}</span>
            <h1 className="text-white text-3xl md:text-5xl font-light leading-tight tracking-[-1px] max-w-[900px]">{obra.titulo}</h1>
          </div>
        </div>
        <div className="bg-white py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20 flex flex-col md:flex-row gap-10 md:gap-24">
            <div className="md:w-1/4 shrink-0">
              <span className="text-zinc-400 text-sm block mb-2">Cliente</span>
              <p className="text-sky-950 font-medium mb-6">{obra.cliente}</p>
              <span className="text-zinc-400 text-sm block mb-2">Ubicación</span>
              <p className="text-sky-950 font-medium">{obra.ubicacion}</p>
            </div>
            <div className="md:w-3/4">
              <div className="text-zinc-600 text-base md:text-lg leading-relaxed whitespace-pre-line">{obra.descripcion}</div>
            </div>
          </div>
        </div>
        {obra.imagenes.length > 0 && (
          <div className="bg-zinc-100 py-[60px] md:py-[80px]">
            <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
              <h2 className="text-sky-950 text-2xl font-light mb-8 tracking-[-1px]">Galería</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {obra.imagenes.map((img, i) => (
                  <div key={i} className="h-[300px] overflow-hidden">
                    <img src={img} alt={`${obra.titulo} ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};
