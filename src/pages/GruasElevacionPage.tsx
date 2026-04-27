import { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import { Link } from "react-router-dom";
import flota1 from "@/assets/flota1.jpeg";
import flota2 from "@/assets/flota2.jpeg";
import flota3 from "@/assets/flota3.jpg";
import flota7 from "@/assets/flota7.png";
import flota8 from "@/assets/flota8.png";

type Disponibilidad = "Disponible" | "En obra" | "Reservado";

type Equipo = {
  nombre: string;
  modelo: string;
  capacidad: string;
  descripcion: string;
  disponibilidad: Disponibilidad;
  img: string;
};

const equipos: Equipo[] = [
  {
    nombre: "Grúa Telescópica",
    modelo: "Liebherr LTM 1050",
    capacidad: "50 t",
    descripcion: "Grúa telescópica autopropulsada ideal para montaje industrial y obras en altura. Disponible con operador certificado.",
    disponibilidad: "Disponible",
    img: flota1,
  },
  {
    nombre: "Grúa Articulada",
    modelo: "Fassi F660",
    capacidad: "25 t/m",
    descripcion: "Grúa articulada montada sobre camión, perfecta para espacios reducidos y carga/descarga en obra.",
    disponibilidad: "Disponible",
    img: flota2,
  },
  {
    nombre: "Grúa Torre",
    modelo: "Potain MDT 178",
    capacidad: "8 t",
    descripcion: "Grúa de torre para construcción vertical y montaje de estructuras metálicas en altura.",
    disponibilidad: "En obra",
    img: flota3,
  },
  {
    nombre: "Plataforma Elevadora",
    modelo: "Genie Z-60/37",
    capacidad: "227 kg",
    descripcion: "Plataforma articulada de brazo para trabajos en altura hasta 20 m. Apta para interiores y exteriores.",
    disponibilidad: "Disponible",
    img: flota7,
  },
  {
    nombre: "Elevador de Horquilla",
    modelo: "Manitou MT 932",
    capacidad: "3.2 t",
    descripcion: "Manipulador telescópico para carga y elevación en obra. Alcance hasta 9 m de altura.",
    disponibilidad: "Reservado",
    img: flota8,
  },
  {
    nombre: "Grúa Telescópica Pesada",
    modelo: "Terex AC 100",
    capacidad: "100 t",
    descripcion: "Grúa de gran porte para montaje de equipos pesados en industria oil & gas y petroquímica.",
    disponibilidad: "Disponible",
    img: flota1,
  },
];

const colorDisponibilidad: Record<Disponibilidad, string> = {
  "Disponible": "bg-emerald-100 text-emerald-700",
  "En obra": "bg-amber-100 text-amber-700",
  "Reservado": "bg-red-100 text-red-600",
};

export const GruasElevacionPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filtro, setFiltro] = useState<"Todos" | Disponibilidad>("Todos");

  const filtrados = filtro === "Todos" ? equipos : equipos.filter(e => e.disponibilidad === filtro);

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        {/* Hero */}
        <div className="relative h-[320px] md:h-[420px] w-full overflow-hidden">
          <img src={flota1} alt="Grúas y Elevación" className="absolute inset-0 w-full h-full object-cover object-center" />

          <div className="relative z-10 flex flex-col justify-end h-full max-w-[1600px] mx-auto px-[34px] md:px-20 pb-14 md:pb-20">
            <Link to="/alquiler-de-flota" className="text-white/60 text-sm mb-4 hover:text-white transition-colors">
              ← Alquiler de flota
            </Link>
            <span className="block text-white/70 text-sm mb-3">Categoría de equipos</span>
            <h1 className="text-white text-4xl md:text-6xl font-light leading-tight tracking-[-1px]">
              Grúas y Elevación
            </h1>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-[1600px] mx-auto px-[34px] md:px-20 py-5 flex flex-wrap gap-3 items-center">
            <span className="text-sm text-zinc-400 mr-2">Filtrar por disponibilidad:</span>
            {(["Todos", "Disponible", "En obra", "Reservado"] as const).map(f => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`px-4 py-1.5 text-sm border transition-all ${
                  filtro === f
                    ? "bg-sky-950 text-white border-sky-950"
                    : "border-zinc-300 text-zinc-600 hover:border-sky-950 hover:text-sky-950"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-sm text-zinc-400">{filtrados.length} equipo{filtrados.length !== 1 ? "s" : ""}</span>
          </div>
        </div>

        {/* Grid de equipos */}
        <div className="max-w-[1600px] mx-auto px-[34px] md:px-20 py-[60px] md:py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtrados.map((equipo, i) => (
              <div key={i} className="group border border-zinc-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Imagen */}
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={equipo.img}
                    alt={equipo.nombre}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-sky-950/20 group-hover:bg-sky-950/10 transition-colors duration-300" />
                  <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${colorDisponibilidad[equipo.disponibilidad]}`}>
                    {equipo.disponibilidad}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-sky-950 text-lg font-semibold leading-tight">{equipo.nombre}</h3>
                    <span className="text-sky-950 text-xl font-light ml-4 shrink-0">{equipo.capacidad}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3 font-medium uppercase tracking-wide">{equipo.modelo}</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">{equipo.descripcion}</p>

                  <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-zinc-400 block">Capacidad</span>
                      <span className="text-sky-950 font-semibold">{equipo.capacidad}</span>
                    </div>
                    <Link
                      to={`/contacto?mensaje=${encodeURIComponent(`Hola, quiero consultar disponibilidad del equipo: ${equipo.nombre} - Modelo: ${equipo.modelo} - Capacidad: ${equipo.capacidad}.`)}`}
                      className="text-sm text-sky-950 border border-sky-950 px-4 py-2 hover:bg-sky-950 hover:text-white transition-all duration-200"
                    >
                      Consultar
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtrados.length === 0 && (
            <div className="text-center py-20 text-zinc-400">
              No hay equipos con ese filtro actualmente.
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-sky-950 mx-[34px] md:mx-20 mb-16 px-10 py-12 md:px-16 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="block text-white/60 text-sm mb-3">¿No encontraste lo que buscás?</span>
            <h2 className="text-white text-2xl md:text-3xl font-light">Consultanos por equipos especiales</h2>
          </div>
          <Link
            to="/contacto"
            className="flex items-center gap-3 text-white border border-white/40 px-8 py-4 hover:bg-white hover:text-sky-950 transition-all duration-200 shrink-0"
          >
            <span>→</span>
            <span>Contactar</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};
