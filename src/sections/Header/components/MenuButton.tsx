type MenuButtonProps = {
  onOpen: () => void;
};

export const MenuButton = ({ onOpen }: MenuButtonProps) => {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex items-center bg-transparent text-center p-0"
      aria-label="Abrir menú"
    >
      <span className="relative block w-5 h-4 overflow-hidden">
        <span className="absolute bg-white h-px w-full left-0 top-0"></span>
        <span className="absolute bg-white h-px w-full left-0 top-1/2 -translate-y-1/2"></span>
        <span className="absolute bg-white h-px w-full left-0 bottom-0"></span>
      </span>

      <span className="hidden md:block text-[15px] leading-[18px] ml-2">
        Menú
      </span>
    </button>
  );
};