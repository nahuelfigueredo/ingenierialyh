import brandLogo from "@/assets/logoprueba5.png";

export const HeaderLogo = () => {
  return (
    <a
      href="/es"
      className="block h-[100px] w-auto md:h-[300px] md:w-[900px] md:-mt-24 pointer-events-auto"
      style={{ maxWidth: "calc(100vw - 80px)" }}
    >
      <img src={brandLogo} alt="Ingenieria LYH" className="block h-full w-auto object-contain object-left" />
    </a>
  );
};