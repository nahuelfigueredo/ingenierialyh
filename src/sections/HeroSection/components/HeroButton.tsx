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
        className="flex items-center border border-white bg-transparent px-6 py-3 text-[16px] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-sky-950"
      >
        Ver proyecto
      </span>

      <span
        className="flex items-center justify-center border-y border-r border-white bg-transparent px-5 text-white transition-colors duration-300 group-hover:bg-white group-hover:text-sky-950"
      >
        <span className="text-base leading-none">→</span>
      </span>
    </a>
  );
};