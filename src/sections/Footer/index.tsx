import logo from "@/assets/Logo-original-2-blanco-1.png";

const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer id="footer-section" className="bg-sky-950 text-white">

      {/* Main grid */}
      <div className="mx-auto max-w-[1600px] px-[34px] md:px-20 py-6 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">

        {/* Logo + tagline */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-3 md:gap-4">
          <img src={logo} alt="L&H Ingeniería" className="h-36 w-auto object-contain" />
        </div>

        {/* Nav col 1 */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 md:mb-4">Empresa</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/80">
            <li><a href="#capabilities-section" className="hover:text-white transition-colors">Quiénes somos</a></li>
            <li><a href="#capabilities-section" className="hover:text-white transition-colors">Qué hacemos</a></li>
            <li><a href="#innovation-section" className="hover:text-white transition-colors">Cómo lo hacemos</a></li>
            <li><a href="#professional-section" className="hover:text-white transition-colors">Nuestra flota</a></li>
          </ul>
        </div>

        {/* Nav col 2 */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 md:mb-4">Proyectos</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/80">
            <li><a href="#projects-section" className="hover:text-white transition-colors">Plaza Huincul — YPF</a></li>
            <li><a href="#projects-section" className="hover:text-white transition-colors">Complejo La Plata — YPF</a></li>
            <li><a href="#news-section" className="hover:text-white transition-colors">Avances de obra</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 md:mb-4">Contacto</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/80">
            <li>Argentina</li>
            <li>
              <a href="mailto:info@lyhingenieria.com" className="hover:text-white transition-colors">
                info@lyhingenieria.com
              </a>
            </li>
            <li>
              <a href="tel:+5491100000000" className="hover:text-white transition-colors">
+54 9 11 0000-0000
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-[34px] md:px-20 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-xs text-white/40">
          <span>© {year} L&H Ingeniería SRL. Todos los derechos reservados.</span>
          <span>Diseño y desarrollo web</span>
        </div>
      </div>

    </footer>
  );
};