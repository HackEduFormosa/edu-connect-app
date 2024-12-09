import React, { useState } from 'react';
import { FaBagShopping } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <header className="bg-indigo-900 border-slate-600 text-white border-b-1 pl-28">
        <nav className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a
              className="text-xl font-bold text-white flex items-center space-x-2 transition-colors duration-300 transform md:text-2xl hover:text-indigo-600"
              href="#"
            >
              <FaBagShopping />
              <span>FormosaEmprende</span>
              <FaBagShopping />
            </a>

            {/* Botón de menú móvil */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
              >hola
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Menú móvil abierto: "block", Menú cerrado: "hidden" */}
          <div
            className={`${
              isOpen ? 'flex' : 'hidden'
            } flex-col mt-2 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0`}
          >
            <a
              className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-600"
              href="/"
            >
              Inicio
            </a>
            <a
              className="text-sm font-medium text-gray-200 transition-colors duration-300 transform hover:text-indigo-600"
              href="#"
            >
              Productos
            </a>
            <a
              className="px-4 py-1 text-sm font-medium text-center text-gray-200 transition-colors duration-300 transform border rounded hover:bg-indigo-600"
              href="/login"
            >
              Iniciar Sesión
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
