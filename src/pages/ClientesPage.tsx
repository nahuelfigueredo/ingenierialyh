import { useState, useEffect, useRef } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import heroBg from "@/assets/prueba5.jpeg";
import logoCentralDock from "@/assets/clientes/LOGOS CLIENTES/1685051536415.jpg";
import logoAESA from "@/assets/clientes/LOGOS CLIENTES/1704732677499.jpg";
import logoAguasYProcesos from "@/assets/clientes/LOGOS CLIENTES/aguas_y_procesos_logo.jpg";
import logoPetersen from "@/assets/clientes/LOGOS CLIENTES/wVzRrNiRDGJSBcfKIovSotvEkRWXHUYxRtqJSDDmAEbeTPQAJHqXabaUYBkmHewM.jpg";
import logoPampa from "@/assets/clientes/LOGOS CLIENTES/images.jpg";
import logoOdebrecht from "@/assets/clientes/LOGOS CLIENTES/Odebrecht.svg.png";
import logoOldelval from "@/assets/clientes/LOGOS CLIENTES/o_1679184545.jpg";
import logoYPF from "@/assets/clientes/LOGOS CLIENTES/ypf-logo.png";

const clientes = [
  { logo: logoYPF, nombre: "YPF" },
  { logo: logoCentralDock, nombre: "Central Dock Sud" },
  { logo: logoAESA, nombre: "AESA" },
  { logo: logoAguasYProcesos, nombre: "Aguas y Procesos" },
  { logo: logoPetersen, nombre: "Petersen, Thiele y Cruz" },
  { logo: logoPampa, nombre: "Pampa Energía" },
  { logo: logoOdebrecht, nombre: "Odebrecht" },
  { logo: logoOldelval, nombre: "Oldelval" },
  
];

export const ClientesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.15 }
    );
    cardRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <main>
        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] w-full overflow-hidden">
          <img
            src={heroBg}
            alt="Clientes"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="relative z-10 flex flex-col justify-end h-full max-w-[1600px] mx-auto px-[34px] md:px-20 pb-28 md:pb-36">
            <span className="block text-white/80 text-sm mb-4">L&H Ingeniería</span>
            <h1 className="text-white text-5xl md:text-7xl font-light leading-tight tracking-[-1px] max-w-[800px]">
              Nuestros Clientes
            </h1>
          </div>
        </div>

        {/* Párrafo intro */}
        <div className="bg-white py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <p className="text-sky-950 text-xl md:text-3xl font-light leading-relaxed max-w-[900px]">
              Trabajamos junto a las principales empresas del sector oil & gas y petroquímica de Argentina, construyendo relaciones de largo plazo basadas en la confianza, el cumplimiento y la excelencia técnica en cada proyecto.
            </p>
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-[800px] mt-8">
              Cada cliente que elige a Ingeniería L&H lo hace sabiendo que detrás de cada obra hay un equipo comprometido con los plazos, la seguridad y la calidad. Nuestro historial habla por sí solo: 8 de cada 10 clientes vuelven a trabajar con nosotros.
            </p>
          </div>
        </div>

        {/* Grid de logos */}
        <div className="bg-zinc-100 py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <h2 className="text-sky-950 text-2xl md:text-3xl font-light mb-10 tracking-[-1px]">
              Empresas con las que trabajamos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {clientes.map((c, i) => (
                <div
                  key={i}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className="bg-white shadow-sm p-8 flex items-center justify-center min-h-[140px] opacity-0 translate-y-8 transition-all duration-700 cursor-pointer hover:shadow-lg hover:scale-105"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <img
                    src={c.logo}
                    alt={c.nombre}
                    className="max-h-[80px] max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
};
