export type Obra = {
  id: string;
  titulo: string;
  cliente: string;
  ubicacion: string;
  resumen: string;
  descripcion: string;
  imagenPortada: string;
  imagenes: string[];
};

export const hornos: Obra[] = [
  {
    id: "h301-h306",
    titulo: "Reemplazo de Tubos de Radiación en Hornos H-301 y H-306",
    cliente: "YPF",
    ubicacion: "Complejo Industrial Plaza Huincul, Neuquén",
    resumen: "Prefabricación y montaje de serpentines de radiación con tratamientos térmicos y 100% de radiografiado.",
    descripcion: `Se realizó la prefabricación y montaje de los serpentines de radiación de los Hornos H-301 (A335 P5) y H-306 (Acero al Carbono).

Se ejecutó la prefabricación de líneas de Ø10" A335 P11, con 100% de radiografiado y tratamientos térmicos post-soldadura.

Se realizó el desmontaje de las chimeneas de ambos hornos para evaluación y reparación de sectores afectados.

Todos los trabajos fueron ejecutados bajo procedimientos de soldadura calificados y con inspección de terceros certificados.`,
    imagenPortada: "/src/assets/TINGLADO.jpg",
    imagenes: ["/src/assets/TINGLADO.jpg", "/src/assets/garantia.jpeg"],
  },
  {
    id: "mantenimiento-hornos-lp",
    titulo: "Mantenimiento y Reparación de Hornos Industriales",
    cliente: "YPF",
    ubicacion: "Refinería La Plata, Buenos Aires",
    resumen: "Inspección, reparación y puesta en marcha de hornos de proceso con materiales de aleación especial.",
    descripcion: `Inspección integral de hornos de proceso en refinería con relevamiento de condiciones de cañerías internas y refractarios.

Reparación de sectores afectados por erosión y corrosión con materiales de alta aleación aprobados por el cliente.

Puesta en marcha asistida con monitoreo de temperatura y presión durante el arranque.

Trabajo ejecutado durante parada programada con cumplimiento estricto del cronograma de reanudación de operaciones.`,
    imagenPortada: "/src/assets/Fabricacion-de-Chimenea.jpg",
    imagenes: ["/src/assets/Fabricacion-de-Chimenea.jpg", "/src/assets/10.jpg"],
  },
];
