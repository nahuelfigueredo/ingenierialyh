import { useState, useRef, useEffect } from "react";

export const SearchForm = () => {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (expanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expanded]);

  return (
    <div className="mr-5 md:mr-10">
      <form
        className="flex items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <button
          type="button"
          aria-label="toggle-search"
          onClick={() => setExpanded(!expanded)}
          className="bg-transparent p-0"
        >
          <span className="inline-block h-[19px] w-[19px]">
            <img
              src="https://c.animaapp.com/mny151nwX361MY/assets/icon-3.svg"
              alt="Buscar"
              className="h-full w-full"
            />
          </span>
        </button>

        {expanded && (
          <input
            ref={inputRef}
            type="text"
            name="search"
            placeholder="Buscar..."
            className="ml-2 bg-transparent text-white outline-none"
          />
        )}

        {expanded && (
          <button
            type="button"
            aria-label="close-search"
            onClick={() => setExpanded(false)}
            className="ml-2"
          >
            <span className="inline-block h-[15px] w-[15px]">
              <img
                src="https://c.animaapp.com/mny151nwX361MY/assets/icon-4.svg"
                alt="Cerrar búsqueda"
                className="h-full w-full"
              />
            </span>
          </button>
        )}
      </form>
    </div>
  );
};