import { useState, useEffect, useRef, useCallback } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import flota1 from "@/assets/flota1.jpeg";
import flota2 from "@/assets/flota2.jpeg";
import flota3 from "@/assets/flota3.jpg";
import flota7 from "@/assets/flota7.png";
import flota8 from "@/assets/flota8.png";

const carouselImages = [flota1, flota2, flota3, flota7, flota8];

const categories = [
  { title: "Grúas y elevación", desc: "Grúas telescópicas, articuladas y de torre para trabajos en altura y montaje industrial. Disponibles con operador certificado y servicio de mantenimiento preventivo incluido.", imgs: [flota1, flota2] },
  { title: "Maquinaria pesada", desc: "Excavadoras, bulldozers y motoniveladoras para movimiento de suelos y obras civiles. Equipos de última generación con GPS y telemetría en tiempo real.", imgs: [flota2, flota3] },
  { title: "Transporte y logística", desc: "Camiones, semirremolques y plataformas para traslado de equipos y materiales en obra. Cobertura en todo el territorio nacional.", imgs: [flota3, flota7] },
  { title: "Equipos de proceso", desc: "Compresores, generadores y bombas industriales para operaciones en oil & gas y petroquímica. Certificados para zonas ATEX y ambientes explosivos.", imgs: [flota7, flota8] },
  { title: "Andamios y acceso", desc: "Sistemas de andamiaje tubular y plataformas de trabajo para mantenimiento e instalación. Armado y desarmado incluido con personal capacitado.", imgs: [flota8, flota1] },
  { title: "Herramientas especiales", desc: "Equipamiento especializado para soldadura, corte, alineación y montaje de precisión. Calibración certificada y disponibilidad inmediata.", imgs: [flota1, flota3] },
];

const steps = [
  { num: "01", title: "Consultá", desc: "Completá el formulario o llamanos. Asesoramos sin cargo para que elijas el equipo adecuado." },
  { num: "02", title: "Cotizamos", desc: "Recibís una propuesta personalizada con disponibilidad, plazos y condiciones en menos de 24 hs." },
  { num: "03", title: "Entregamos", desc: "Coordinamos la logística y entregamos el equipo en obra en la fecha acordada." },
  { num: "04", title: "Asistencia técnica", desc: "Brindamos soporte técnico durante toda la duración del alquiler para garantizar la continuidad operativa." },
];

export const AlquilerFlotaPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [catImgIndex, setCatImgIndex] = useState(0);
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const catIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Stats drag
  const statsRef = useRef<HTMLDivElement>(null);
  const STAT_CARD_WIDTH = 420 + 16;
  const [statIndex, setStatIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const statsCount = 5;

  const goToStat = useCallback((index: number) => {
    if (!statsRef.current) return;
    const clamped = Math.max(0, Math.min(index, statsCount - 1));
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
    setStatIndex(Math.max(0, Math.min(Math.round(statsRef.current.scrollLeft / STAT_CARD_WIDTH), statsCount - 1)));
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

  const prevSlide = () => setCarouselIndex((i) => (i === 0 ? carouselImages.length - 1 : i - 1));
  const nextSlide = () => setCarouselIndex((i) => (i === carouselImages.length - 1 ? 0 : i + 1));

  const startCatInterval = (catIndex: number) => {
    if (catIntervalRef.current) clearInterval(catIntervalRef.current);
    setCatImgIndex(0);
    catIntervalRef.current = setInterval(() => {
      setCatImgIndex((i) => (i + 1) % categories[catIndex].imgs.length);
    }, 2500);
  };

  useEffect(() => {
    startCatInterval(activeCategory);
    return () => { if (catIntervalRef.current) clearInterval(catIntervalRef.current); };
  }, [activeCategory]);

  const handleCategoryClick = (i: number) => {
    setActiveCategory(i);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        {/* Hero */}
        <div className="relative w-full">
          <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden">
            <img src={flota1} alt="Alquiler de flota" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>
          <div className="relative -mt-16 z-10 bg-sky-950 w-full px-[34px] md:px-20 py-20 md:py-28 flex items-center justify-center">
            <a href="#categorias" onClick={e => { e.preventDefault(); document.getElementById('categorias')?.scrollIntoView({ behavior: 'smooth' }); }} className="absolute -top-[56px] right-0 bg-white px-10 py-7 flex items-center gap-6 shadow-md z-20 cursor-pointer hover:bg-zinc-50 transition-colors">
              <span className="text-sky-950 text-base font-light">Encuentra el equipo para tu obra</span>
              <span className="text-sky-950 text-xl">→</span>
            </a>
            <p className="text-white text-2xl md:text-4xl font-light leading-relaxed text-center max-w-[860px]">
              Un portafolio integral de alquiler de equipos, con asistencia técnica especializada, que impulsan tus proyectos sin demoras.
            </p>
          </div>
        </div>

        {/* Categorías de equipos — tabs */}
        <div id="categorias" className="bg-white py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <h2 className="text-sky-950 text-3xl md:text-4xl font-light tracking-[-1px] mb-12">Categorías de equipos</h2>
            <div className="flex flex-col md:flex-row gap-0">
              {/* Lista de categorías */}
              <div className="md:w-[340px] shrink-0 border-r border-zinc-200">
                {categories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => handleCategoryClick(i)}
                    className={`w-full text-left px-6 py-5 border-b border-zinc-100 flex items-center justify-between transition-all duration-200 ${
                      activeCategory === i
                        ? "bg-sky-950 text-white border-sky-950"
                        : "text-sky-950 hover:bg-zinc-50"
                    }`}
                  >
                    <span className="text-sm font-medium">{cat.title}</span>
                    <span className={`text-lg transition-colors ${activeCategory === i ? "text-white" : "text-zinc-300"}`}>→</span>
                  </button>
                ))}
              </div>
              {/* Contenido de la categoría activa */}
              <div className="flex-1 md:ml-0">
                <div className="relative h-[220px] md:h-[340px] w-full overflow-hidden">
                  {categories[activeCategory].imgs.map((img, i) => (
                    <img
                      key={`${activeCategory}-${i}`}
                      src={img}
                      alt={`${categories[activeCategory].title} ${i + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
                        i === catImgIndex ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-sky-950/30" />
                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {categories[activeCategory].imgs.map((_, i) => (
                      <span key={i} className={`block w-1.5 h-1.5 rounded-full transition-colors ${i === catImgIndex ? "bg-white" : "bg-white/40"}`} />
                    ))}
                  </div>
                </div>
                <div className="bg-zinc-50 px-10 py-8">
                  <h3 className="text-sky-950 text-xl font-semibold mb-3">{categories[activeCategory].title}</h3>
                  <p className="text-zinc-500 leading-relaxed">{categories[activeCategory].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats — dimensión de la flota */}
        <div className="bg-zinc-100 py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <h2 className="text-sky-950 text-2xl md:text-3xl font-light mb-12">La dimensión de nuestra flota</h2>
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
              {[
                { num: "+500", label: "Equipos propios disponibles para alquiler inmediato en todo el país." },
                { num: "+200", label: "Profesionales especializados en operación, mantenimiento e inspección de equipos." },
                { num: "+20", label: "Años de experiencia en alquiler de maquinaria para la industria oil & gas y civil." },
                { num: "24 hs", label: "Asistencia técnica disponible las 24 horas, los 7 días de la semana en todo el país." },
                { num: "+50", label: "Clientes activos en sectores de oil & gas, energía, petroquímica y construcción civil." },
              ].map((stat, i) => (
                <div key={i} className="shrink-0 bg-white px-10 py-12 w-[75vw] md:w-[420px] min-h-[220px] flex flex-col justify-between">
                  <p className="text-sky-950 text-6xl font-light mb-6">{stat.num}</p>
                  <p className="text-zinc-500 leading-relaxed text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Dots mobile */}
            <div className="mt-6 flex gap-2 md:hidden">
              {Array.from({ length: statsCount }).map((_, i) => (
                <button key={i} onClick={() => goToStat(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === statIndex ? "w-6 bg-sky-950" : "w-1.5 bg-zinc-300"}`} />
              ))}
            </div>

            {/* Arrows desktop */}
            <div className="mt-6 hidden justify-end gap-3 md:flex">
              <button onClick={() => goToStat(statIndex - 1)} disabled={statIndex === 0} className="flex h-10 w-10 items-center justify-center border border-zinc-400 transition hover:bg-sky-950 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed">←</button>
              <button onClick={() => goToStat(statIndex + 1)} disabled={statIndex === statsCount - 1} className="flex h-10 w-10 items-center justify-center border border-zinc-400 transition hover:bg-sky-950 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed">→</button>
            </div>

            {/* Progress bar */}
            <div className="relative mt-5 h-px w-full bg-zinc-300 md:mt-8">
              <div className="absolute left-0 top-0 h-px bg-sky-950 transition-all duration-300" style={{ width: `${((statIndex + 1) / statsCount) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Proceso de alquiler */}
        <div className="bg-sky-950 py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20">
            <h2 className="text-white text-3xl md:text-4xl font-light tracking-[-1px] mb-12">Proceso de alquiler</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="border-t border-white/20 pt-8">
                  <span className="text-white/30 text-5xl font-light block mb-4">{step.num}</span>
                  <h3 className="text-white text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      {/* CTA Banner */}
      <div className="bg-sky-950 mx-[34px] md:mx-20 my-16">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 px-10 py-12 md:px-14 md:py-16 border-r border-white/10">
            <span className="block text-white/60 text-sm mb-4">Alquiler de equipos</span>
            <h2 className="text-white text-2xl md:text-3xl font-light">¿Necesitás maquinaria o soporte?</h2>
          </div>
          <div className="flex items-center justify-center px-10 py-10 md:px-16">
            <button onClick={() => { setSent(false); setForm({ nombre: "", empresa: "", email: "", telefono: "", mensaje: "" }); setModalOpen(true); }} className="flex items-center gap-3 text-white text-base hover:opacity-70 transition-opacity">
              <span>→</span>
              <span>Cotizá tu equipo y ponete en contacto</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal formulario */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4" onClick={() => setModalOpen(false)}>
          <div className="relative bg-white w-full max-w-2xl px-10 py-12 shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-6 text-zinc-400 hover:text-zinc-700 text-xl">✕</button>
            <h2 className="text-sky-950 text-2xl font-light mb-2">Consultá disponibilidad</h2>
            <p className="text-zinc-500 text-sm mb-4 leading-relaxed">Completá el formulario y un especialista te contactará en menos de 24 horas.</p>
            <div className="flex flex-col gap-1 mb-8">
              <a href="mailto:contacto@lyh.com.ar" className="text-sky-950 text-sm hover:underline">✉ contacto@lyh.com.ar</a>
              <a href="tel:+541112345678" className="text-sky-950 text-sm hover:underline">✆ +54 11 1234-5678</a>
            </div>
            {sent ? (
              <div className="bg-sky-950 text-white px-10 py-12 text-center">
                <p className="text-2xl font-light mb-2">¡Consulta enviada!</p>
                <p className="text-white/70">Nos pondremos en contacto a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input required placeholder="Nombre y apellido" value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})} className="border border-zinc-200 px-5 py-4 text-sm text-zinc-700 outline-none focus:border-sky-950 transition-colors" />
                <input placeholder="Empresa" value={form.empresa} onChange={e => setForm({...form, empresa: e.target.value})} className="border border-zinc-200 px-5 py-4 text-sm text-zinc-700 outline-none focus:border-sky-950 transition-colors" />
                <input required type="email" placeholder="Correo electrónico" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="border border-zinc-200 px-5 py-4 text-sm text-zinc-700 outline-none focus:border-sky-950 transition-colors" />
                <input placeholder="Teléfono" value={form.telefono} onChange={e => setForm({...form, telefono: e.target.value})} className="border border-zinc-200 px-5 py-4 text-sm text-zinc-700 outline-none focus:border-sky-950 transition-colors" />
                <textarea required placeholder="¿Qué equipo necesitás? Describí tu proyecto..." value={form.mensaje} onChange={e => setForm({...form, mensaje: e.target.value})} rows={4} className="md:col-span-2 border border-zinc-200 px-5 py-4 text-sm text-zinc-700 outline-none focus:border-sky-950 transition-colors resize-none" />
                <div className="md:col-span-2">
                  <button type="submit" className="bg-sky-950 text-white px-10 py-4 text-sm hover:bg-sky-900 transition-colors">Enviar consulta →</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
