import { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import heroBg from "@/assets/Fabricacion-de-Chimenea.jpg";

export const EticaPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        {/* Hero */}
        <div className="relative h-[480px] md:h-[560px] w-full overflow-hidden">
          <img src={heroBg} alt="Ética" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-sky-950/30" />
          <div className="relative z-10 flex flex-col justify-end h-full max-w-[1600px] mx-auto px-[34px] md:px-20 pb-12 md:pb-16">
            <span className="block text-white/70 text-sm mb-3">Quiénes somos</span>
            <h1 className="text-white text-4xl md:text-6xl font-medium leading-tight tracking-[-1px] max-w-[700px]">
              Ética y compliance
            </h1>
          </div>
        </div>

        <section className="bg-white py-[60px] md:py-[100px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">

            <div className="flex flex-col md:flex-row gap-16 md:gap-24">

              <div className="w-full md:w-1/2">
                <p className="leading-[25.6px]">
                  En L&H Ingeniería la ética no es una declaración de intenciones: es parte de nuestra
                  cultura de trabajo. Operamos bajo principios de transparencia, equidad y responsabilidad
                  en cada relación con clientes, proveedores, subcontratistas y comunidades.
                </p>
                <p className="leading-[25.6px] mt-4">
                  Nuestro programa de compliance establece políticas claras contra la corrupción,
                  el conflicto de interés y el incumplimiento normativo, con canales de reporte
                  accesibles para todo el equipo.
                </p>
              </div>

              <div className="w-full md:w-1/2">
                <div
                  className="flex gap-6 overflow-x-auto md:overflow-visible md:flex-col md:gap-6 snap-x snap-mandatory"
                  style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                  {[
                    { title: "Política anticorrupción", desc: "Cero tolerancia a prácticas corruptas en cualquier nivel de la organización." },
                    { title: "Canal de denuncias", desc: "Canal confidencial disponible para reportar inconductas sin temor a represalias." },
                    { title: "Capacitación continua", desc: "Formación regular del equipo en ética empresarial, normativa vigente y buenas prácticas." },
                  ].map((v, i) => (
                    <div key={i} className="shrink-0 w-[75vw] md:w-auto snap-start border-l-2 border-sky-950 pl-6">
                      <h3 className="text-sky-950 font-semibold mb-2">{v.title}</h3>
                      <p className="leading-[25.6px]">{v.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-2 md:hidden">
                  {[0,1,2].map((i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
