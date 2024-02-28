import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-blue-700 w-full sm:p-0 md:p-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Servicios Hogar</span>
            <p className="text-white text-2xl font-bold">ContactaAPP</p>
            {/* <img className="h-8 w-auto" src="" alt="logo" /> */}
          </a>
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Abrir/Cerrar Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            className="text-sm font-semibold leading-6 text-white"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/servicios"
            className="text-sm font-semibold leading-6 text-white"
          >
            Servicios
          </NavLink>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            ¿Quiénes somos?
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Contacto
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Notificaciones
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="/register"
            className="text-sm font-semibold leading-6 text-white"
          >
            Mi Cuenta
          </NavLink>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden " role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white ">
            <div className="flex items-center justify-between ">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Servicios Hogar</span>
                <p className="text-white text-2xl font-bold">ContactaAPP</p>
              </a>
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Cerrar </span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root ">
              <div className="-my-6 divide-y divide-gray-500/10 ">
                <div className="space-y-2 py-6">
                  <NavLink
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                  >
                    Inicio
                  </NavLink>
                  <NavLink
                    to="/servicios"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                  >
                    Servicios
                  </NavLink>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                  >
                    Quienes Somos?
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                  >
                    Contacto
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                  >
                    Notificaciones
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                  >
                    Mi Cuenta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
