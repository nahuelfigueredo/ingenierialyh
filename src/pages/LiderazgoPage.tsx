import { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import heroBg from "@/assets/Fabricacion-de-Chimenea.jpg";

export const LiderazgoPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        {/* Hero */}
        <div className="relative h-[480px] md:h-[560px] w-full overflow-hidden">
          <img src={heroBg} alt="Liderazgo" className="absolute inset-0 w-full h-full object-cover object-center" />

          <div className="relative z-10 flex flex-col justify-end h-full max-w-[1600px] mx-auto px-[34px] md:px-20 pb-28 md:pb-36">
            <span className="block text-white/70 text-sm mb-3">Quiénes somos</span>
            <h1 className="text-white text-4xl md:text-6xl font-medium leading-tight tracking-[-1px] max-w-[700px]">
              Liderazgo
            </h1>
          </div>
        </div>

        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">

            <div className="flex flex-col gap-12 md:gap-16">
              <p className="max-w-[680px] leading-[25.6px]">
                L&H Ingeniería es conducida por un equipo de profesionales con amplia trayectoria
                en el sector industrial. La dirección combina visión estratégica con experiencia
                técnica de campo, garantizando decisiones sólidas en cada proyecto.
              </p>

              <div
                className="flex gap-6 overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 md:gap-10 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {[
                  { name: "Dirección General", role: "Conducción estratégica y relaciones institucionales de la empresa." },
                  { name: "Dirección Técnica", role: "Supervisión de ingeniería, calidad y ejecución de obras." },
                  { name: "Dirección de Operaciones", role: "Coordinación de equipos, flota y logística de cada proyecto." },
                ].map((p, i) => (
                  <div key={i} className="shrink-0 w-[75vw] md:w-auto snap-start border-t-2 border-sky-950 pt-6">
                    <h3 className="text-sky-950 font-semibold text-lg mb-2">{p.name}</h3>
                    <p className="leading-[25.6px] text-sm">{p.role}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 md:hidden">
                {[0,1,2].map((i) => (
                  <div key={i} className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
