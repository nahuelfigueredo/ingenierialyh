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

export const estructuras: Obra[] = [
  {
    id: "estructuras-refineria-lp",
    titulo: "Estructuras Metálicas y Soportería en Refinería La Plata",
    cliente: "YPF",
    ubicacion: "Refinería La Plata, CIE Ensenada y Puerto La Plata",
    resumen: "Diseño, fabricación y montaje de estructuras metálicas y soportería para cañerías bajo contrato marco.",
    descripcion: `Diseño, fabricación y montaje de estructuras metálicas y soportería para cañerías en el marco del contrato de nuevos proyectos con Gerencia de Ingeniería YPF.

Más de 90 obras ejecutadas en Refinería La Plata, CIE Ensenada y Puerto La Plata con equipos propios de L&H.

Fabricación en taller con control dimensional y verificación de materiales. Montaje en campo con grúas y equipos de elevación propios.

Coordinación permanente con las áreas de operación del cliente para minimizar impacto en la producción.`,
    imagenPortada: "/src/assets/12.png",
    imagenes: ["/src/assets/12.png", "/src/assets/06-2.png"],
  },
  {
    id: "equipos-plaza-huincul",
    titulo: "Montaje de Equipos y Estructuras en Plantas de Proceso",
    cliente: "YPF",
    ubicacion: "Complejo Industrial Plaza Huincul, Neuquén",
    resumen: "Fabricación y montaje de estructuras de soporte, plataformas de acceso y equipos de proceso.",
    descripcion: `Fabricación y montaje de estructuras de soporte para equipos de proceso en el Complejo Industrial Plaza Huincul.

Instalación de plataformas de acceso, escaleras y barandas en instalaciones industriales bajo normas de seguridad vigentes.

Trabajos de calderería y herrería especializada para la adaptación de equipos existentes.

Ejecución con equipos propios y personal certificado, con cumplimiento de todos los requerimientos HSE del cliente.`,
    imagenPortada: "/src/assets/05.png",
    imagenes: ["/src/assets/05.png", "/src/assets/10.jpg"],
  },
];
