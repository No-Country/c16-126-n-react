import React from "react";

import { NavLink } from "react-router-dom";
import Servicios from "../Servicios/Servicios";

const LandingPage = () => {
  return (
    <>
      <div className="bg-cover bg-center h-auto text-white py-24 px-10 bg-blue-300 flex items-center justify-center">
        <div className="md:w-3/4 lg:w-1/2 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Busca un profesional <br /> o ofrece tus servicios
          </h1>
          <p className="text-lg md:text-xl text-white font-bold mb-10 leading-relaxed">
            Encuentra profesionales confiables para tus necesidades o da a
            conocer tus servicios al mundo.
          </p>
          <a
            href="#"
            className="bg-blue-800 py-4 px-8 text-white font-bold uppercase text-sm md:text-base rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          >
            Busca un profesional
          </a>
        </div>
      </div>

      <section className="flex justify-center items-center flex-col mt-20">
        <div className="w-full md:w-auto p-4">
          <p className="text-3xl text-blue-700/80 font-bold text-wrap">
            Un profesional cualificado en algunos clicks
          </p>

          <p className="mt-2 text-[20px]  font-semibold ">
            Puedes encontrar un profesional altamente cualificado y de confianza
            <br /> ingresando a nuestra plataforma
          </p>
        </div>
        <div className="max-w-screen-lg grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mt-10">
          <div className="w-full md:w-auto p-4">
            <h3 className="text-xl font-bold mb-2 text-blue-700/90">
              Ofrece tus servicios como profesional
            </h3>
            <p className="text-[17px] font-semibold">
              Si eres un profesional puedes ofrecer tus servicios a través de
              nuestra plataforma
            </p>
          </div>
          <div className="w-full md:w-auto p-4">
            <h3 className="text-xl font-bold mb-2 text-blue-700/90">
              Contacta un profesional
            </h3>
            <p className="text-[17px] font-semibold">
              Si necesitas un profesional en los rubros que ofrece nuestra
              plataforma, puedes ponerte en contacto con uno en unos cuantos
              clicks.
            </p>
          </div>
          <div className="w-full md:w-auto p-4">
            <h3 className="text-xl font-bold mb-2 text-blue-700/90">
              Te facilitamos la vida
            </h3>
            <p className="text-[17px] font-semibold">
              Nuestra plataforma ofrece una amplia gama de servicios
              proporcionados por profesionales cualificados en diversos campos.
            </p>
          </div>
        </div>
      </section>

      <section className="servicios mt-10">
        <Servicios />
      </section>

      <NavLink to="/profesional">
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-2">
          Tarjeta Profesional
        </button>
      </NavLink>

      <NavLink to="/proyecto">
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-2">
          Home Proyecto
        </button>
      </NavLink>

      <NavLink to="/perfil">
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl m-2">
          Perfil
        </button>
      </NavLink>
    </>
  );
};

export default LandingPage;
