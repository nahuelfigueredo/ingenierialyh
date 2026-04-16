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

export const metalurgia: Obra[] = [
  {
    id: "reparaciones-vapor-metalurgia",
    titulo: "Reparaciones Metalúrgicas en Líneas de Vapor",
    cliente: "YPF",
    ubicacion: "Plaza Huincul, Neuquén",
    resumen: "Relevamiento, corte y reparación de cañerías afectadas con soldadura certificada y END.",
    descripcion: `Relevamiento e inspección de cañerías afectadas por corrosión y erosión en líneas de vapor de proceso.

Corte de costuras y tramos de cañería afectados. Amolado de extremos hasta metal base en buen estado.

Soldadura con procedimientos calificados y materiales certificados. Aplicación de ensayos no destructivos (radiografía, ultrasonido y líquidos penetrantes).

Prueba hidráulica final y entrega con documentación técnica completa.`,
    imagenPortada: "/src/assets/garantia.jpeg",
    imagenes: ["/src/assets/garantia.jpeg", "/src/assets/Fabricacion-de-Chimenea.jpg"],
  },
  {
    id: "caldereria-refineria",
    titulo: "Trabajos de Calderería y Metalurgia en Refinería",
    cliente: "YPF",
    ubicacion: "Refinería La Plata, Buenos Aires",
    resumen: "Fabricación y reparación de recipientes a presión e intercambiadores con materiales de alta aleación.",
    descripcion: `Fabricación y reparación de recipientes a presión, intercambiadores de calor y componentes metálicos en refinería.

Trabajos de soldadura con materiales de alta aleación (aceros inoxidables, cromo-molibdeno y materiales especiales).

Aplicación de ensayos no destructivos certificados: radiografía industrial, ultrasonido, partículas magnéticas y líquidos penetrantes.

Tratamientos térmicos post-soldadura (PWHT) según requerimientos de normas ASME y del cliente.

Entrega con dossier técnico completo incluyendo certificados de materiales, procedimientos y resultados de END.`,
    imagenPortada: "/src/assets/Fabricacion-de-Chimenea.jpg",
    imagenes: ["/src/assets/Fabricacion-de-Chimenea.jpg", "/src/assets/garantia.jpeg"],
  },
];
