import { useState, useEffect } from "react";

type Props = {};

const enlaces = () => (
  <>
    <li className="relative group">
      <a href="#camping">Camping</a>
      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-customColor-400 md:bg-customColor-200 group-hover:w-full group-hover:transition-all group-hover:ease-in-out"></span>
    </li>
    <li className="relative group">
      <a href="#">Cabañas</a>
      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-customColor-400 md:bg-customColor-200 group-hover:w-full group-hover:transition-all group-hover:ease-in-out"></span>
    </li>
    <li className="relative group">
      <a href="#">Quienes Somos</a>
      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-customColor-400 md:bg-customColor-200 group-hover:w-full group-hover:transition-all group-hover:ease-in-out"></span>
    </li>
    <li className="relative group">
      <a href="#">Contacto</a>
      <span className="absolute -bottom-2 left-0 w-0 h-1 bg-customColor-400 md:bg-customColor-200 group-hover:w-full group-hover:transition-all group-hover:ease-in-out"></span>
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
        <ul className="flex flex-row items-center justify-between gap-x-4 animate-fade-down animate-once animate-ease-in-out animate-delay-100 [&>li>a]:font-bold [&>li>a]:text-lg">
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
          id="menu-button"
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6 text-customColor-200"
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
              ? "fixed h-screen inset-0 bg-customColor-200 z-30 animate-fade-down animate-once animate-ease-in-out"
              : "hidden animate-fade-up animate-once animate-ease-in-out"
          } lg:hidden`}
        >
          {/* Botón para cerrar el menú en dispositivos móviles */}
          <button
            onClick={handleToggle}
            className="absolute top-8 right-4 text-gray-500 focus:outline-none focus:text-gray-700"
          >
            <svg
              className="h-6 w-6 text-customColor-400"
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

          <ul className="flex flex-col items-center justify-center h-screen gap-y-8 [&>li>a]:font-bold [&>li>a]:text-4xl">
            {enlaces()}
          </ul>
        </div>
      </div>
    );
  };

  return <div>{renderNav()}</div>;
};

export default MenuNavbar;
