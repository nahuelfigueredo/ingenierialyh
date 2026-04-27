import { useCallback, useRef, useState } from "react";

const videos = [
  {
    src: "/videos/avances.mp4",
    title: "Avance de obra en nuestra nueva sede corporativa",
  },
  {
    src: "/videos/avances1.mp4",
    title: "Avance de montaje y trabajos en obra",
  },
];

export const NewsCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const CARD_WIDTH = 660 + 24;

  const goTo = useCallback((index: number) => {
    if (!trackRef.current) return;
    const clamped = Math.max(0, Math.min(index, videos.length - 1));
    setCurrentIndex(clamped);
    trackRef.current.scrollTo({ left: clamped * CARD_WIDTH, behavior: "smooth" });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (!trackRef.current) return;
    const newIndex = Math.round(trackRef.current.scrollLeft / CARD_WIDTH);
    setCurrentIndex(Math.max(0, Math.min(newIndex, videos.length - 1)));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5;
  };

  const progressWidth = ((currentIndex + 1) / videos.length) * 100;

  return (
    <section className="relative overflow-hidden pb-2.5">
      <div className="mx-auto w-full max-w-[1600px] px-[34px] md:px-20">

        {/* Track */}
        <div
          ref={trackRef}
          className={`overflow-x-auto flex gap-6 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
        >
          {videos.map((video, i) => (
            <div key={i} className="shrink-0 w-[320px] md:w-[660px]">
              <video
                src={video.src}
                controls
                preload="metadata"
                className="w-full rounded-sm aspect-video object-cover bg-black pointer-events-auto"
                onMouseDown={(e) => e.stopPropagation()}
              />
              <p className="mt-3 text-sky-950 text-lg md:text-xl leading-snug font-medium">{video.title}</p>
            </div>
          ))}
        </div>

        {/* Dots mobile */}
        <div className="mt-6 flex gap-2 md:hidden">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 bg-emerald-600" : "w-1.5 bg-zinc-300"}`}
            />
          ))}
        </div>

        {/* Arrows desktop */}
        <div className="mt-6 hidden justify-end gap-3 md:flex">
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="flex h-10 w-10 items-center justify-center border border-zinc-400 transition hover:bg-sky-950 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ←
          </button>
          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === videos.length - 1}
            className="flex h-10 w-10 items-center justify-center border border-zinc-400 transition hover:bg-sky-950 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>

        {/* Progress bar */}
        <div className="relative mt-5 h-px w-full bg-zinc-300 md:mt-8">
          <span
            className="absolute left-0 top-0 block h-px bg-emerald-600 transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

      </div>
    </section>
  );
};