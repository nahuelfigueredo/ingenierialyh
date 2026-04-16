import { HeaderNav } from "@/sections/Header/components/HeaderNav";

type HeaderProps = {
  onMenuOpen: () => void;
};

export const Header = ({ onMenuOpen }: HeaderProps) => {
  return (
    <header className="absolute inset-x-0 top-0 z-[99] w-full text-white">
      <div className="relative w-full pt-[35px] md:pt-[60px]">
        <HeaderNav onMenuOpen={onMenuOpen} />
      </div>
    </header>
  );
};