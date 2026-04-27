import { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import heroBg from "@/assets/prueba7.jpeg";
import obraImg from "@/assets/erstructura.png";

export const MercadosPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        {/* Hero */}
        <div className="relative h-[500px] md:h-[640px] w-full overflow-hidden">
          <img src={heroBg} alt="Mercados" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="relative z-10 flex flex-col justify-end h-full max-w-[1600px] mx-auto px-[34px] md:px-20 pb-28 md:pb-36">
            <span className="block text-white/80 text-sm mb-4">Servicios</span>
            <h1 className="text-white text-5xl md:text-7xl font-light leading-tight tracking-[-1px] max-w-[800px]">
              Donde la industria toma forma
            </h1>
          </div>
        </div>

        {/* Mercados — overlaps hero */}
        <div className="relative z-10 -mt-20 bg-white py-[60px] md:py-[80px] shadow-md">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20 flex flex-col md:flex-row gap-10 md:gap-24">
            <div className="md:w-1/4 shrink-0 pt-2">
              <span className="text-zinc-400 text-sm">Servicios</span>
            </div>
            <div className="md:w-3/4">
              <p className="text-sky-950 text-xl md:text-3xl leading-relaxed">
                Ingenieria l&h opera en los sectores más exigentes de la industria argentina. Nuestra experiencia en oil & gas, energía y petroquímica nos permite adaptarnos a cada entorno productivo con autonomía técnica y altos estándares de seguridad.
              </p>
            </div>
          </div>
        </div>

        {/* Cards de mercados */}
        <div className="bg-zinc-100 py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Oil & Gas", desc: "Montaje y mantenimiento de instalaciones upstream y midstream. Trabajamos en las principales cuencas del país." },
                { title: "Energía", desc: "Construcción y mantenimiento de plantas de generación eléctrica, subestaciones y tendido de líneas de alta tensión." },
                { title: "Petroquímica", desc: "Instalación y mantenimiento de plantas de proceso, intercambiadores de calor, hornos industriales y columnas de destilación." },
              ].map((m, i) => (
                <div key={i} className="bg-white p-10 border-l-2 border-sky-950 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <h3 className="text-sky-950 text-xl font-semibold mb-4">{m.title}</h3>
                  <p className="leading-[25.6px]">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Foto separadora */}
        <div className="w-full h-[420px] md:h-[560px] overflow-hidden">
          <img src={obraImg} alt="Obra industrial" className="w-full h-full object-cover object-center" />
        </div>

        {/* Servicios */}
        <div className="bg-white py-[60px] md:py-[80px] border-t border-zinc-200">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <h2 className="text-sky-950 text-2xl md:text-3xl font-light mb-12">Nuestros servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Obras Industriales — Mecánica",
                  items: [
                    "Ingeniería detalle cañerías, estructuras, soportes.",
                    "Prefabricado y montaje de cañerías y soportes.",
                    "Estructuras metálicas, plataformas, escaleras.",
                    "Montaje de equipos y bombas.",
                  ],
                },
                {
                  title: "Electricidad",
                  items: [
                    "Instalaciones eléctricas de plantas.",
                    "Armado de tableros.",
                    "Montaje de cañerías, bandejas, cableado y conexionado.",
                    "Iluminación.",
                  ],
                },
                {
                  title: "Civil",
                  items: [
                    "Estructuras de hormigón armado, fundaciones.",
                    "Cañerías, desagües industriales.",
                    "Cámaras, alcantarillados.",
                    "Mampostería en general.",
                    "Prestaciones de servicios.",
                    "Paro de planta y mantenimiento.",
                  ],
                },
                {
                  title: "Hornos",
                  items: [
                    "Chapa de cobertura (calderería en general).",
                    "Construcción y reparación de quemadores.",
                    "Construcción y reparación de serpentina.",
                    "Desmontaje de tapones, limpieza y montajes.",
                    "Prueba Hidráulica.",
                  ],
                },
                {
                  title: "Torres",
                  items: [
                    "Reparación exterior.",
                    "Apertura y cierre.",
                    "Desmontaje, reparación, limpieza y montaje de componentes internos.",
                    "Aislamiento, pintura.",
                    "Prueba hidráulica.",
                  ],
                },
                {
                  title: "Acumuladores",
                  items: [
                    "Reparación zonas corroídas.",
                    "Cambio de virola y casquete.",
                    "Desmontaje, limpieza y reparación demister.",
                    "Reparación de chapa deflectora.",
                    "Aislación, pintura.",
                    "Prueba de estanquedad e hidráulica.",
                  ],
                },
                {
                  title: "Equipos Rotantes",
                  items: [
                    "Control, alineación, lubricación.",
                    "Cambio de empaquetaduras.",
                    "Desmontaje y montaje de sello mecánico.",
                    "Reparación de circuito de refrigeración y calefacción.",
                    "Maquinado de piezas.",
                  ],
                },
              ].map((s, i) => (
                <div key={i}>
                  <h3 className="text-sky-950 font-semibold text-lg mb-4">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.items.map((item, j) => (
                      <li key={j} className="flex gap-3 leading-[25.6px]">
                        <span className="text-sky-600 mt-1 shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
