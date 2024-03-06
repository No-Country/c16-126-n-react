import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center text-white bg-blue-600 mt-auto">
      <div className="container p-6">
        <p className="flex items-center justify-center">
          <span className="mr-4">Registrate gratis</span>
          <button
            type="button"
            className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <NavLink to="/register">Registrarse</NavLink>
          </button>
        </p>
      </div>

      <div className="w-full p-4 text-center bg-blue-500">
        <p className="font-bold">© 2024 Todos Los Derechos Reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
