import { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import heroBg from "@/assets/06-2.png";
import visionBg from "@/assets/02-4.png";
import valoresBg from "@/assets/valores.jpg";

export const MisionPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        {/* Hero */}
        <div className="relative h-[500px] md:h-[640px] w-full overflow-hidden">
          <img src={heroBg} alt="Misión, visión y valores" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="relative z-10 flex flex-col justify-end h-full max-w-[1600px] mx-auto px-[34px] md:px-20 pb-28 md:pb-36">
            <span className="block text-white/80 text-sm mb-4">Misión, visión y valores</span>
            <h1 className="text-white text-5xl md:text-7xl font-light leading-tight tracking-[-1px] max-w-[800px]">
              Ingeniería que transforma
            </h1>
          </div>
        </div>

        {/* Misión — overlaps hero */}
        <div className="relative z-10 -mt-20 bg-white py-[60px] md:py-[80px] shadow-md">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20 flex flex-col md:flex-row gap-10 md:gap-24">
            <div className="md:w-1/4 shrink-0 pt-2">
              <span className="text-zinc-400 text-sm">Misión</span>
            </div>
            <div className="md:w-3/4">
              <p className="text-sky-950 text-xl md:text-3xl leading-relaxed">
                Brindar soluciones de montaje y mantenimiento industrial con los más altos estándares
                de seguridad, calidad y cumplimiento de plazos, generando valor sostenible para
                nuestros clientes, colaboradores y la comunidad.
              </p>
            </div>
          </div>
        </div>

        {/* Visión — foto + cuadrado superpuesto */}
        <div className="relative h-[500px] md:h-[640px] w-full overflow-visible">
          <img src={visionBg} alt="Visión" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10 -mt-32 bg-white py-[60px] md:py-[80px] shadow-md border-t border-zinc-200">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20 flex flex-col md:flex-row gap-10 md:gap-24">
            <div className="md:w-1/4 shrink-0 pt-2">
              <span className="text-zinc-400 text-sm">Visión</span>
            </div>
            <div className="md:w-3/4">
              <p className="text-sky-950 text-xl md:text-3xl leading-relaxed">
                Ser la empresa de referencia en ingeniería industrial en Argentina, reconocida por
                la excelencia técnica, la solidez de nuestro equipo humano y la capacidad de
                afrontar proyectos de alta complejidad con autonomía y seguridad.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="border-t border-zinc-200">
          <img src={valoresBg} alt="Valores L&H" className="w-full h-[400px] md:h-[520px] object-cover object-center" />
          <div className="bg-zinc-100 py-[60px] md:py-[80px]">
            <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
              <span className="text-zinc-400 text-sm mb-8 block">Valores</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { title: "Seguridad", desc: "Es innegociable. Cada decisión en obra parte del cuidado de las personas." },
                  { title: "Compromiso", desc: "Cumplimos lo que prometemos. Los plazos y la calidad son nuestra firma." },
                  { title: "Integridad", desc: "Actuamos con transparencia y honestidad en cada relación con clientes, proveedores y equipo." },
                  { title: "Excelencia", desc: "Buscamos constantemente mejorar nuestros procesos, técnicas y resultados." },
                ].map((v, i) => (
                  <div key={i} className="border-l-2 border-sky-950 pl-6">
                    <h3 className="text-sky-950 font-semibold mb-2 text-lg">{v.title}</h3>
                    <p className="leading-[25.6px]">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
