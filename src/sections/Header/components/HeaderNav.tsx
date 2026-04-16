import { HeaderLogo } from "@/sections/Header/components/HeaderLogo";
import { HeaderControls } from "@/sections/Header/components/HeaderControls";

type HeaderNavProps = {
  onMenuOpen: () => void;
};

export const HeaderNav = ({ onMenuOpen }: HeaderNavProps) => {
  return (
    <div className="flex items-center justify-between max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14">
      <HeaderLogo />
      <HeaderControls onMenuOpen={onMenuOpen} />
    </div>
  );
};