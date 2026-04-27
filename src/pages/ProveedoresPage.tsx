import { useState } from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { MobileMenu } from "@/components/MobileMenu";

const CLAVE_ACCESO = "lyh2024";

export const ProveedoresPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [claveIngresada, setClaveIngresada] = useState("");
  const [acceso, setAcceso] = useState(false);
  const [errorClave, setErrorClave] = useState(false);

  const [form, setForm] = useState({
    empresa: "",
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  type DocKey = 
    | "nominaPersonal" | "art" | "seguroVida" | "medicinaLaboral"
    | "epp" | "afip" | "iericIngreso" | "licencia" | "vehiculo"
    | "s931" | "iericMensual" | "fondoDesempleo" | "uocra"
    | "uecara" | "autonomo" | "monotributo" | "recibosSueldo";
  const [archivos, setArchivos] = useState<Record<DocKey, File | null>>({
    nominaPersonal: null, art: null, seguroVida: null, medicinaLaboral: null,
    epp: null, afip: null, iericIngreso: null, licencia: null, vehiculo: null,
    s931: null, iericMensual: null, fondoDesempleo: null, uocra: null,
    uecara: null, autonomo: null, monotributo: null, recibosSueldo: null,
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  const handleClave = (e: React.FormEvent) => {
    e.preventDefault();
    if (claveIngresada === CLAVE_ACCESO) {
      setAcceso(true);
      setErrorClave(false);
    } else {
      setErrorClave(true);
    }
  };

  if (!acceso) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-[420px]">
            <p className="text-sky-950/50 text-xs uppercase tracking-widest mb-6">Ingeniería L&H</p>
            <h2 className="text-sky-950 text-2xl font-light mb-2 tracking-tight">Acceso Proveedores</h2>
            <p className="text-zinc-400 text-sm mb-8">Esta sección es de acceso restringido. Ingresá la clave para continuar.</p>
            <form onSubmit={handleClave} className="flex flex-col gap-4" autoComplete="off">
              <input
                type="password"
                placeholder="Contraseña"
                value={claveIngresada}
                onChange={(e) => { setClaveIngresada(e.target.value); setErrorClave(false); }}
                className="w-full border border-zinc-300 px-4 py-3 text-zinc-700 placeholder-zinc-400 focus:outline-none focus:border-sky-950 transition-colors"
                autoFocus
              />
              {errorClave && (
                <p className="text-red-500 text-sm">Contraseña incorrecta. Intentá de nuevo.</p>
              )}
              <button
                type="submit"
                className="group relative inline-flex items-stretch overflow-hidden w-full"
              >
                <span className="relative flex items-center justify-center border border-sky-950 px-8 py-3 text-sky-950 overflow-hidden w-full">
                  <span className="absolute inset-0 bg-sky-950 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-medium">
                    Ingresar
                  </span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-zinc-500">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Header onMenuOpen={() => setIsMenuOpen(true)} />

      <main>
        {/* Hero */}
        <div className="relative h-[340px] md:h-[440px] w-full overflow-hidden" style={{ backgroundColor: "#192FB0" }}>
          <div className="absolute inset-0" style={{ backgroundColor: "#192FB0" }} />
          <div className="relative z-10 flex flex-col justify-end h-full max-w-[1600px] mx-auto px-[34px] md:px-20 pb-28 md:pb-36">
            <span className="block text-white/70 text-sm mb-4">Ingeniería L&H</span>
            <h1 className="text-white text-4xl md:text-6xl font-light leading-tight tracking-[-1px]">
              Proveedores
            </h1>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white py-[60px] md:py-[90px]">
          <div className="mx-auto max-w-[900px] px-[34px] md:px-20">
            {enviado ? (
              <div className="text-center py-20">
                <p className="text-sky-950 text-2xl font-light mb-4">¡Solicitud enviada correctamente!</p>
                <p className="text-zinc-500">Nos pondremos en contacto a la brevedad.</p>
              </div>
            ) : (
              <>
                <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-10 max-w-[680px]">
                  Si sos proveedor o querés incorporarte a nuestra red de proveedores, completá el formulario y adjuntá la documentación correspondiente.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Empresa */}
                  <div>
                    <label className="block text-sky-950 text-sm font-medium mb-2">
                      Nombre de empresa / razón social <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      required
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Ej: Servicios Industriales S.A."
                      className="w-full border border-zinc-300 px-4 py-3 text-zinc-700 placeholder-zinc-400 focus:outline-none focus:border-sky-950 transition-colors"
                    />
                  </div>

                  {/* Nombre contacto */}
                  <div>
                    <label className="block text-sky-950 text-sm font-medium mb-2">
                      Nombre del contacto <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Nombre y apellido"
                      className="w-full border border-zinc-300 px-4 py-3 text-zinc-700 placeholder-zinc-400 focus:outline-none focus:border-sky-950 transition-colors"
                    />
                  </div>

                  {/* Email y Teléfono */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sky-950 text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="contacto@empresa.com"
                        className="w-full border border-zinc-300 px-4 py-3 text-zinc-700 placeholder-zinc-400 focus:outline-none focus:border-sky-950 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sky-950 text-sm font-medium mb-2">Teléfono</label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+54 11 0000-0000"
                        className="w-full border border-zinc-300 px-4 py-3 text-zinc-700 placeholder-zinc-400 focus:outline-none focus:border-sky-950 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sky-950 text-sm font-medium mb-2">
                      Descripción de productos / servicios
                    </label>
                    <textarea
                      name="mensaje"
                      rows={4}
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Contanos brevemente qué productos o servicios ofrecés..."
                      className="w-full border border-zinc-300 px-4 py-3 text-zinc-700 placeholder-zinc-400 focus:outline-none focus:border-sky-950 transition-colors resize-none"
                    />
                  </div>

                  {/* Documentación a adjuntar */}
                  <div className="pt-4">
                    <h3 className="text-sky-950 text-base font-semibold mb-1">Documentación a adjuntar</h3>
                    <p className="text-zinc-400 text-xs mb-6">PDF, Word, Excel o imágenes — máx. 10 MB por archivo</p>

                    {/* Ingreso de Personal */}
                    <p className="text-sky-950 text-xs font-semibold uppercase tracking-widest mb-4 border-b border-zinc-200 pb-2">Ingreso de Personal</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {([
                        { key: "nominaPersonal", label: "Nómina de Personal", sub: "Form. 01" },
                        { key: "art", label: "ART", sub: "Nómina" },
                        { key: "seguroVida", label: "Seguro de Vida", sub: "Nómina y Pago" },
                        { key: "medicinaLaboral", label: "Medicina Laboral", sub: "Exámenes médicos, DJ" },
                        { key: "epp", label: "EPP", sub: "Formulario" },
                        { key: "afip", label: "AFIP", sub: "Alta y Relación Laboral" },
                        { key: "iericIngreso", label: "I.E.R.I.C", sub: "Hoja Móvil" },
                        { key: "licencia", label: "Licencia", sub: "Licencia de Conducir y Manejo Defensivo" },
                        { key: "vehiculo", label: "Vehículo", sub: "Cédula, Seguro y Formularios" },
                      ] as { key: DocKey; label: string; sub: string }[]).map(({ key, label, sub }) => (
                        <div key={key} className="border border-zinc-200 px-4 py-3 flex items-center justify-between gap-4 hover:border-sky-950 transition-colors">
                          <div>
                            <p className="text-sky-950 text-sm font-medium">{label}</p>
                            <p className="text-zinc-400 text-xs">{sub}</p>
                          </div>
                          <div className="shrink-0">
                            <input type="file" id={`doc-${key}`} className="hidden" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png" onChange={(e) => setArchivos(prev => ({ ...prev, [key]: e.target.files?.[0] ?? null }))} />
                            <label htmlFor={`doc-${key}`} className="cursor-pointer flex items-center gap-2 text-sm border border-sky-950 px-3 py-1.5 text-sky-950 hover:bg-sky-950 hover:text-white transition-all">
                              {archivos[key] ? <span className="text-emerald-600 font-medium">✓ {archivos[key]!.name.length > 14 ? archivos[key]!.name.slice(0, 14) + "…" : archivos[key]!.name}</span> : "Adjuntar"}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Documentación Mensual */}
                    <p className="text-sky-950 text-xs font-semibold uppercase tracking-widest mb-4 border-b border-zinc-200 pb-2">Documentación Mensual</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {([
                        { key: "s931", label: "931", sub: "Nómina, Formularios, Pago, DJ" },
                        { key: "iericMensual", label: "I.E.R.I.C", sub: "Formulario y Pago" },
                        { key: "fondoDesempleo", label: "Fondo de Desempleo", sub: "Nómina y Pago" },
                        { key: "uocra", label: "U.O.C.R.A.", sub: "Formulario y Pago" },
                        { key: "uecara", label: "U.E.C.A.R.A.", sub: "Formulario y Pago" },
                        { key: "autonomo", label: "Autónomo", sub: "Formulario y Pago" },
                        { key: "monotributo", label: "Monotributo", sub: "Formulario y Pago" },
                        { key: "recibosSueldo", label: "Recibos de Sueldo", sub: "Pagos y Nómina" },
                      ] as { key: DocKey; label: string; sub: string }[]).map(({ key, label, sub }) => (
                        <div key={key} className="border border-zinc-200 px-4 py-3 flex items-center justify-between gap-4 hover:border-sky-950 transition-colors">
                          <div>
                            <p className="text-sky-950 text-sm font-medium">{label}</p>
                            <p className="text-zinc-400 text-xs">{sub}</p>
                          </div>
                          <div className="shrink-0">
                            <input type="file" id={`doc-${key}`} className="hidden" accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png" onChange={(e) => setArchivos(prev => ({ ...prev, [key]: e.target.files?.[0] ?? null }))} />
                            <label htmlFor={`doc-${key}`} className="cursor-pointer flex items-center gap-2 text-sm border border-sky-950 px-3 py-1.5 text-sky-950 hover:bg-sky-950 hover:text-white transition-all">
                              {archivos[key] ? <span className="text-emerald-600 font-medium">✓ {archivos[key]!.name.length > 14 ? archivos[key]!.name.slice(0, 14) + "…" : archivos[key]!.name}</span> : "Adjuntar"}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group relative inline-flex items-stretch overflow-hidden"
                    >
                      <span className="relative flex items-center border-y border-l border-sky-950 px-8 py-4 text-sky-950 overflow-hidden">
                        <span className="absolute inset-0 bg-sky-950 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300 font-medium">
                          Enviar solicitud
                        </span>
                      </span>
                      <span className="relative flex items-center justify-center border border-sky-950 px-5 text-sky-950 overflow-hidden">
                        <span className="absolute inset-0 bg-sky-950 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out delay-75" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300 text-base leading-none">→</span>
                      </span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
