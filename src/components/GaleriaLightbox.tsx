import { useState, useEffect, useCallback } from "react";

type Props = {
  imagenes: string[];
  titulo: string;
};

export const GaleriaLightbox = ({ imagenes, titulo }: Props) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + imagenes.length) % imagenes.length);
  }, [lightboxIndex, imagenes.length]);

  const next = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % imagenes.length);
  }, [lightboxIndex, imagenes.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {imagenes.map((img, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className="h-[220px] md:h-[280px] overflow-hidden focus:outline-none group"
          >
            <img
              src={img}
              alt={`${titulo} ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-6 text-white text-4xl leading-none hover:opacity-70 z-10"
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-10 text-white text-5xl leading-none hover:opacity-70 z-10 select-none"
            aria-label="Anterior"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={imagenes[lightboxIndex]}
            alt={`${titulo} ${lightboxIndex + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-10 text-white text-5xl leading-none hover:opacity-70 z-10 select-none"
            aria-label="Siguiente"
          >
            ›
          </button>

          {/* Counter */}
          <span className="absolute bottom-5 text-white/70 text-sm">
            {lightboxIndex + 1} / {imagenes.length}
          </span>
        </div>
      )}
    </>
  );
};
