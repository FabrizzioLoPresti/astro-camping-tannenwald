import { useState, useEffect } from "react";

type Props = {};

const enlaces = () => (
  <>
    <li>
      <a href="#" className="font-bold text-4xl md:text-lg">
        Camping
      </a>
    </li>
    <li>
      <a href="#" className="font-bold text-4xl md:text-lg">
        Cabañas
      </a>
    </li>
    <li>
      <a href="#" className="font-bold text-4xl md:text-lg">
        Quienes Somos
      </a>
    </li>
    <li>
      <a href="#" className="font-bold text-4xl md:text-lg">
        Contacto
      </a>
    </li>
  </>
);

const MenuNavbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderNav = () => {
    if (width >= 768) {
      // Pantallas más grandes, renderiza enlaces
      return (
        <ul className="flex flex-row items-center justify-between gap-x-4 animate-fade-down animate-once animate-ease-in-out animate-delay-100">
          {enlaces()}
        </ul>
      );
    }
    // Pantallas más pequeñas, renderiza menú de hamburguesa
    return (
      <div className="block lg:hidden">
        <button
          onClick={handleToggle}
          className="text-gray-500 focus:outline-none focus:text-gray-700"
        >
          <svg
            className="h-6 w-6 text-[#d48642]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Menú */}
        <div
          className={`${
            isOpen
              ? "fixed inset-0 bg-[#d48642] z-10 animate-fade-down animate-once animate-ease-in-out"
              : "hidden animate-fade-up animate-once animate-ease-in-out"
          } lg:hidden`}
        >
          {/* Botón para cerrar el menú en dispositivos móviles */}
          <button
            onClick={handleToggle}
            className="absolute top-8 right-4 text-gray-500 focus:outline-none focus:text-gray-700"
          >
            <svg
              className="h-6 w-6 text-[#703022]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <ul className="flex flex-col items-center justify-center h-screen gap-y-8">
            {enlaces()}
          </ul>
        </div>
      </div>
    );
  };

  return <div>{renderNav()}</div>;
};

export default MenuNavbar;
