import { LanguageSelector } from "@/sections/Header/components/LanguageSelector";
import { SearchForm } from "@/sections/Header/components/SearchForm";
import { MenuButton } from "@/sections/Header/components/MenuButton";

type HeaderControlsProps = {
  onMenuOpen: () => void;
};

export const HeaderControls = ({ onMenuOpen }: HeaderControlsProps) => {
  return (
    <div className="flex items-center md:-mt-24">
      <SearchForm />
      <MenuButton onOpen={onMenuOpen} />
    </div>
  );
};