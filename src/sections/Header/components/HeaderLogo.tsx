import brandLogo from "@/assets/Logo-original-2-blanco-1.png";

export const HeaderLogo = () => {
  return (
    <a
      href="/es"
      className="block h-[52px] w-[210px] md:h-[84px] md:w-[338px]"
    >
      <img src={brandLogo} alt="Ingenieria LYH" className="block h-full w-full object-contain object-left" />
    </a>
  );
};