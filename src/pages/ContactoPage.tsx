import { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";
import heroBg from "@/assets/garantia.jpeg";

export const ContactoPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <main>
        {/* Hero */}
        <div className="relative h-[380px] md:h-[500px] w-full overflow-hidden">
          <img src={heroBg} alt="Contacto" className="absolute inset-0 w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-sky-950/60" />
          <div className="relative z-10 flex flex-col justify-center h-full max-w-[1600px] mx-auto px-[34px] md:px-20">
            <span className="block text-white/80 text-sm mb-4">L&H Ingeniería</span>
            <h1 className="text-white text-5xl md:text-7xl font-light leading-tight tracking-[-1px] max-w-[700px]">
              Contacto
            </h1>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="bg-white py-[60px] md:py-[80px]">
          <div className="mx-auto max-w-[1600px] px-[34px] md:px-20 flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Columna izquierda — datos */}
            <div className="lg:w-2/5 shrink-0 flex flex-col gap-10">
              <div>
                <p className="text-sky-950 text-xl md:text-2xl font-light leading-relaxed">
                  Estamos disponibles para responder consultas, presupuestos y proyectos. Contactanos por el medio que prefieras.
                </p>
              </div>

              {/* Teléfono */}
              <div className="border-l-4 border-sky-950 pl-6">
                <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">Teléfono</span>
                <a href="tel:+5492994123456" className="text-sky-950 text-lg font-medium hover:underline">
                  +54 9 299 412-3456
                </a>
              </div>

              {/* WhatsApp */}
              <div>
                <a
                  href="https://wa.me/5492994123456?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20sus%20servicios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Escribinos por WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="border-l-4 border-sky-950 pl-6">
                <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">Email</span>
                <a href="mailto:contacto@lyhingenieria.com" className="text-sky-950 text-lg font-medium hover:underline">
                  contacto@lyhingenieria.com
                </a>
              </div>

              {/* Oficina */}
              <div className="border-l-4 border-sky-950 pl-6">
                <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">Oficina Comercial</span>
                <p className="text-sky-950 font-medium">Av. Del Libertador 2340, Piso 4</p>
                <p className="text-zinc-500 text-sm">Neuquén Capital, Neuquén, Argentina</p>
              </div>

              {/* Taller */}
              <div className="border-l-4 border-sky-950 pl-6">
                <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">Taller y Planta</span>
                <p className="text-sky-950 font-medium">Ruta Provincial 7, Km 12</p>
                <p className="text-zinc-500 text-sm">Plaza Huincul, Neuquén, Argentina</p>
              </div>
            </div>

            {/* Columna derecha — formulario */}
            <div className="lg:w-3/5">
              {enviado ? (
                <div className="flex flex-col items-start justify-center h-full gap-4 py-12">
                  <div className="w-12 h-12 bg-sky-950 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-sky-950 text-2xl font-light">Mensaje enviado</h3>
                  <p className="text-zinc-500">Gracias por contactarnos. Te respondemos a la brevedad.</p>
                  <button onClick={() => { setEnviado(false); setForm({ nombre: "", empresa: "", email: "", mensaje: "" }); }} className="mt-4 text-sky-950 text-sm underline">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <h2 className="text-sky-950 text-2xl md:text-3xl font-light tracking-[-1px] mb-2">Envianos un mensaje</h2>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-2">
                      <label className="text-zinc-400 text-xs uppercase tracking-widest">Nombre *</label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={form.nombre}
                        onChange={handleChange}
                        className="border border-zinc-200 bg-zinc-50 px-4 py-3 text-sky-950 text-sm outline-none focus:border-sky-950 transition-colors"
                        placeholder="Juan García"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <label className="text-zinc-400 text-xs uppercase tracking-widest">Empresa</label>
                      <input
                        type="text"
                        name="empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        className="border border-zinc-200 bg-zinc-50 px-4 py-3 text-sky-950 text-sm outline-none focus:border-sky-950 transition-colors"
                        placeholder="Nombre de la empresa"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-400 text-xs uppercase tracking-widest">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="border border-zinc-200 bg-zinc-50 px-4 py-3 text-sky-950 text-sm outline-none focus:border-sky-950 transition-colors"
                      placeholder="correo@empresa.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-zinc-400 text-xs uppercase tracking-widest">Mensaje *</label>
                    <textarea
                      name="mensaje"
                      required
                      rows={6}
                      value={form.mensaje}
                      onChange={handleChange}
                      className="border border-zinc-200 bg-zinc-50 px-4 py-3 text-sky-950 text-sm outline-none focus:border-sky-950 transition-colors resize-none"
                      placeholder="Contanos en qué podemos ayudarte..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="self-start bg-sky-950 text-white px-10 py-4 text-sm font-medium hover:bg-sky-900 transition-colors duration-200"
                  >
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
