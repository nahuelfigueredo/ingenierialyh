import { useState, useRef, useEffect } from "react";

export const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("es");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const languages = ["es", "en", "pt"].filter((l) => l !== selected);

  return (
    <div ref={ref} className="relative mr-5 md:mr-10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center bg-transparent text-center p-0 cursor-pointer"
      >
        <span className="text-[13px] leading-[15.6px] uppercase">
          {selected}
        </span>

        <span className="block h-3 w-3 ml-2">
          <img
            src="https://c.animaapp.com/mny151nwX361MY/assets/icon-2.svg"
            alt="Dropdown"
            className="h-full w-full"
          />
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-7 z-500 bg-neutral-100 border border-zinc-300">
          <ul>
            {languages.map((lang, i) => (
              <li key={lang} className={`${i < languages.length - 1 ? "border-b border-zinc-300" : ""}`}>
                <button
                  className="block px-[15px] py-[6px] text-[13px] uppercase"
                  onClick={() => {
                    setSelected(lang);
                    setOpen(false);
                  }}
                >
                  {lang}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};