import img06 from "@/assets/06.jpg";
import img062 from "@/assets/06-2.png";
import img12 from "@/assets/12.png";
import img10 from "@/assets/10.jpg";
import img05 from "@/assets/05.png";
import img024 from "@/assets/02-4.png";
import imgChimenea from "@/assets/Fabricacion-de-Chimenea.jpg";
import imgTinglado from "@/assets/TINGLADO.jpg";
import imgGarantia from "@/assets/garantia.jpeg";
import imgGarantia2 from "@/assets/garantia2.png";

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

export const piping: Obra[] = [
  {
    id: "linea-reflujo-coke-topping",
    titulo: "Nueva Línea de Reflujo desde Coke A a Topping C",
    cliente: "YPF CILP",
    ubicacion: "Complejo Industrial La Plata, Buenos Aires",
    resumen: "Construcción y montaje de líneas de Ø8\" con soportería completa y soldadura certificada.",
    descripcion: `Relevamiento de las instalaciones existentes con ingeniería desarrollada por L&H para la ejecución de la obra de Piping.

Se realizó la construcción de todas las líneas que intervienen la obra (Ø de 8").

Construcción y montaje de toda la soportería necesaria para el tendido de las líneas.

Montaje y soldadura de la línea y válvulas para la nueva línea sector Coke A.

Todos los trabajos fueron realizados bajo procedimientos de soldadura calificados y con ensayos no destructivos según requerimientos del cliente.`,
    imagenPortada: img06,
    imagenes: [img06, img062, img12, img10, img05, img024, imgChimenea, imgTinglado, imgGarantia, imgGarantia2],
  },
  {
    id: "piping-ingenieria-ypf",
    titulo: "Nuevos Proyectos de Piping para Gerencia de Ingeniería YPF",
    cliente: "YPF",
    ubicacion: "Refinería La Plata, CIE Ensenada y Puerto La Plata",
    resumen: "Más de 90 obras de modificaciones de plantas y nuevas obras metalúrgicas ejecutadas bajo contrato marco.",
    descripcion: `Al día de la fecha se terminaron más de 90 obras de modificaciones de plantas y nuevas obras metalúrgicas (estructuras y piping) en Refinería La Plata, CIE Ensenada y Puerto La Plata.

Desarrollo de ingeniería, replanteo APC y propuestas para nuevas ingenierías y mejoras de instalaciones.

Coordinación con la Gerencia de Ingeniería y Gerencia de Paros YPF para la planificación y ejecución de cada intervención.

Trabajo ejecutado con equipos propios bajo estrictos estándares de seguridad y calidad de YPF.`,
    imagenPortada: img12,
    imagenes: [img12, img10],
  },
  {
    id: "reparaciones-lineas-vapor",
    titulo: "Reparaciones Metalúrgicas en Líneas de Vapor",
    cliente: "YPF",
    ubicacion: "Plaza Huincul, Neuquén",
    resumen: "Relevamiento, corte y reparación de cañerías afectadas en líneas de vapor de proceso.",
    descripcion: `Relevamiento e inspección de cañerías afectadas por corrosión y erosión en líneas de vapor de proceso.

Corte de costuras y tramos de cañería afectados detectados durante la inspección inicial.

Amolado de extremos hasta metal base en buen estado para garantizar la calidad de la junta soldada.

Instalación de nuevos tramos de cañería con materiales certificados y soldadura bajo procedimientos calificados.

Prueba hidráulica y puesta en servicio con supervisión del cliente.`,
    imagenPortada: imgGarantia,
    imagenes: [imgGarantia, imgTinglado],
  },
];
