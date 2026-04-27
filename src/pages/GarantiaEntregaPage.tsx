import { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import heroBg from "@/assets/prueba8.jpeg";
import garantiaImg from "@/assets/garantia.jpeg";
import obraImg from "@/assets/05.png";
import garantia2Img from "@/assets/garantia2.png";

export const GarantiaEntregaPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        {/* Hero */}
        <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden">
          <img src={heroBg} alt="Garantía de entrega" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="relative z-10 flex flex-col justify-end h-full max-w-[1600px] mx-auto px-[34px] md:px-20 pb-8 md:pb-36">
            <span className="block text-white/80 text-sm mb-2 md:mb-4">Cómo lo hacemos</span>
            <h1 className="text-white text-3xl md:text-7xl font-light leading-tight tracking-[-1px] max-w-[800px]">
              Garantía de entrega
            </h1>
          </div>
        </div>

        {/* Cuadro intro */}
        <div className="relative z-20 md:-mt-16 px-[34px] md:px-20 bg-white pb-0">
          <div className="bg-white max-w-[1600px] mx-auto px-6 md:px-16 py-8 md:py-14 shadow-md">
            <p className="text-sky-950 text-lg md:text-3xl leading-relaxed max-w-[900px]">
              Cumplimos con cada compromiso asumido. Nuestra metodología de gestión y control de proyectos garantiza la entrega en tiempo, forma y con los más altos estándares de calidad.
            </p>
            <p className="text-zinc-500 text-sm md:text-lg leading-relaxed max-w-[900px] mt-4 md:mt-6">
              Cada proyecto es monitoreado en todas sus etapas, desde la planificación hasta la puesta en marcha, asegurando que los plazos, costos y especificaciones técnicas se cumplan sin excepciones. La confianza de nuestros clientes se construye obra a obra.
            </p>
          </div>
        </div>

        {/* Foto con cuadro superpuesto — desktop */}
        <div className="hidden md:block relative bg-sky-950 h-[700px] flex items-end pb-0">
          <div className="absolute right-0 top-0 h-full w-[65%]">
            <img src={garantiaImg} alt="Garantía de entrega" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 bg-white ml-0 p-24 max-w-[580px] min-h-[520px] shadow-lg mb-[-80px] flex flex-col justify-center">
            <span className="text-zinc-400 text-sm block mb-4">Garantía de entrega</span>
            <h3 className="text-sky-950 text-4xl font-light leading-tight mb-6">Compromiso en cada etapa</h3>
            <p className="text-zinc-500 text-base leading-relaxed">Supervisamos cada fase del proyecto con rigor técnico y compromiso total, asegurando resultados que superan las expectativas del cliente. La entrega puntual no es una promesa, es nuestra forma de trabajar.</p>
          </div>
        </div>

        {/* Foto con cuadro — mobile: apilado */}
        <div className="md:hidden">
          <img src={garantiaImg} alt="Garantía de entrega" className="w-full h-[240px] object-cover" />
          <div className="bg-sky-950 px-8 py-10">
            <span className="text-white/60 text-sm block mb-3">Garantía de entrega</span>
            <h3 className="text-white text-2xl font-light leading-tight mb-4">Compromiso en cada etapa</h3>
            <p className="text-white/80 text-sm leading-relaxed">Supervisamos cada fase del proyecto con rigor técnico y compromiso total, asegurando resultados que superan las expectativas del cliente.</p>
          </div>
        </div>

        {/* Pilares */}
        <div className="bg-zinc-100 pt-10 pb-[60px] md:pt-[200px] md:pb-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Planificación rigurosa", desc: "Cada proyecto comienza con un plan detallado de etapas, recursos y plazos. Identificamos riesgos antes de que ocurran." },
                { title: "Control de avance", desc: "Seguimiento diario del estado de obra con reportes de avance, indicadores de desempeño y alertas tempranas ante desvíos." },
                { title: "Equipo dedicado", desc: "Asignamos un equipo estable desde el inicio hasta la entrega, garantizando continuidad y responsabilidad en cada etapa." },
              ].map((p, i) => (
                <div key={i} className="bg-white p-10 border-l-2 border-sky-950 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                  <h3 className="text-sky-950 text-xl font-semibold mb-4">{p.title}</h3>
                  <p className="leading-[25.6px]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Foto + card "Ejecución en campo" — desktop */}
        <div className="hidden md:block relative mb-[180px]">
          <img src={garantia2Img} alt="Obra" className="w-full h-[600px] object-cover" />
          <div className="absolute bottom-[-160px] left-[120px] z-10 bg-white p-20 max-w-[620px] shadow-lg">
            <span className="text-zinc-400 text-sm block mb-4">Ejecución en campo</span>
            <h3 className="text-sky-950 text-3xl font-light leading-tight mb-4">Tecnología y experiencia en cada obra</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Contamos con equipamiento propio de última generación y equipos especializados que garantizan eficiencia, seguridad y precisión en cada intervención.</p>
          </div>
        </div>

        {/* Foto + card "Ejecución en campo" — mobile: apilado */}
        <div className="md:hidden">
          <img src={garantia2Img} alt="Obra" className="w-full h-[220px] object-cover" />
          <div className="bg-white px-8 py-8 shadow-md">
            <span className="text-zinc-400 text-sm block mb-3">Ejecución en campo</span>
            <h3 className="text-sky-950 text-xl font-light leading-tight mb-3">Tecnología y experiencia en cada obra</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Contamos con equipamiento propio de última generación y equipos especializados que garantizan eficiencia, seguridad y precisión en cada intervención.</p>
          </div>
        </div>

        {/* Proceso */}
        <div className="bg-sky-950 py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <h2 className="text-white text-3xl md:text-4xl font-light tracking-[-1px] mb-12">Nuestro proceso</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "01", title: "Relevamiento", desc: "Analizamos en detalle el alcance, las condiciones del sitio y los requerimientos técnicos y normativos del proyecto." },
                { num: "02", title: "Ingeniería y planificación", desc: "Desarrollamos la ingeniería de detalle y el plan de ejecución con cronograma, recursos y gestión de riesgos." },
                { num: "03", title: "Ejecución controlada", desc: "Implementamos con equipos propios, tecnología de monitoreo y supervisión permanente en campo." },
                { num: "04", title: "Entrega y postventa", desc: "Formalizamos la entrega con documentación completa y brindamos soporte técnico posterior a la puesta en marcha." },
              ].map((step, i) => (
                <div key={i} className="border-t border-white/20 pt-8">
                  <span className="text-white/30 text-5xl font-light block mb-4">{step.num}</span>
                  <h3 className="text-white text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compromiso */}
        <div className="bg-white py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20 flex flex-col md:flex-row gap-10 md:gap-24">
            <div className="md:w-1/4 shrink-0 pt-2">
              <span className="text-zinc-400 text-sm">Nuestro compromiso</span>
            </div>
            <div className="md:w-3/4">
              <p className="text-sky-950 text-xl md:text-2xl leading-relaxed mb-8">
                En Ingeniería L&H, la palabra empeñada tiene el mismo valor que el contrato firmado. Cada obra es una oportunidad de demostrar que el cumplimiento es parte de nuestra identidad.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                {[
                  { label: "Cumplimiento de plazo", value: "95%" },
                  { label: "Proyectos con cero accidentes", value: "+300" },
                  { label: "Años de trayectoria ininterrumpida", value: "+20" },
                  { label: "Clientes que repiten con L&H", value: "8 de cada 10" },
                ].map((stat, i) => (
                  <div key={i} className="border-l-2 border-sky-950 pl-6 py-2">
                    <p className="text-sky-950 text-3xl font-light mb-1">{stat.value}</p>
                    <p className="text-zinc-500 text-sm">{stat.label}</p>
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
