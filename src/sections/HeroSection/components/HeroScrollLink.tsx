export const HeroScrollLink = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("capabilities-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href="#capabilities-section"
      onClick={handleClick}
      className="absolute bottom-0 right-0 z-[3] flex items-stretch transition-opacity hover:opacity-90"
    >
      <span className="flex items-center bg-white px-8 py-6 text-[20px] text-sky-950 md:min-w-[385px] md:px-14 md:py-9 md:text-[22px]">
        Conoce lo que hacemos
      </span>

      <span className="flex items-center justify-center border-l border-sky-950/10 bg-neutral-100 px-8 py-6 md:min-w-[148px] md:px-12 md:py-9">
        <img
          src="https://c.animaapp.com/mny151nwX361MY/assets/icon-7.svg"
          alt="Icon"
          className="w-7 md:w-8"
        />
      </span>
    </a>
  );
};