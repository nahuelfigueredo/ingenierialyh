type CookieBannerProps = {
  onAccept: () => void;
};

export const CookieBanner = ({ onAccept }: CookieBannerProps) => {
  return (
    <section className="fixed bottom-0 left-0 w-full z-[999] bg-neutral-100 border-t border-zinc-300 py-5 md:py-10 animate-[slideUp_0.4s_ease-out]">
      
      <div className="max-w-[1600px] mx-auto px-[34px] flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:px-20">
        
        <p className="text-[15px] md:text-base leading-6 md:leading-[25.6px] max-w-[calc(66.666%-18.333px)] mb-5 md:mb-0">
          Nuestro sitio utiliza cookies. Al utilizar nuestro sitio web usted acepta estas reglas sobre el uso de cookies. Puede acceder a más información en los{" "}
          <a
            href="#"
            title="Términos & Condiciones"
            className="underline hover:text-emerald-600"
          >
            Términos &amp; Condiciones
          </a>.
        </p>

        <button
          onClick={onAccept}
          className="flex items-center justify-center min-h-[auto] min-w-[auto] text-center overflow-hidden px-10 py-[15px] md:px-[60px] bg-sky-950 text-white cursor-pointer transition-colors duration-300 hover:bg-emerald-600"
        >
          <span className="text-nowrap z-[1]">
            Sí, acepto
          </span>
        </button>

      </div>
    </section>
  );
};