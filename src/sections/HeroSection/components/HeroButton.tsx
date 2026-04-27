export const HeroButton = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("projects-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href="#projects-section"
      onClick={handleClick}
      className="group inline-flex items-stretch overflow-hidden transition-all duration-300"
    >
      <span
        className="relative flex items-center border-y border-l border-white px-6 py-3 text-[16px] text-white overflow-hidden"
      >
        <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
        <span className="relative z-10 group-hover:text-sky-950 transition-colors duration-300">
          Ver proyecto
        </span>
      </span>

      <span
        className="relative flex items-center justify-center border-y border-r border-white px-5 text-white overflow-hidden"
      >
        <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out delay-75" />
        <span className="relative z-10 group-hover:text-sky-950 transition-colors duration-300 text-base leading-none">→</span>
      </span>
    </a>
  );
};