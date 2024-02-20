import { NavLink } from "react-router-dom";

import Servicios from "../Servicios/Servicios";

const LandingPage = () => {
  return (
    <>
      <section className="flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-80 mt-20">
          <div className="w-80 md:w-full">
            <p className="text-2xl text-wrap">
              El servicio que buscas a un click de distancia
            </p>
          </div>
          <div>
            <img
              src="placeholder-image-1.jpg"
              alt="foto-1"
              className="w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-80 mt-20 ">
          <div>
            <img
              src="placeholder-image-2.jpg"
              alt="foto-2"
              className="w-full"
            />
          </div>
          <div className="w-80 md:w-full">
            <p className="text-2xl text-wrap">
              El servicio que buscas a un click de distancia
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-80 mt-20">
          <div className="w-80 md:w-full">
            <p className="text-2xl text-wrap">
              El servicio que buscas a un click de distancia
            </p>
          </div>
          <div>
            <img
              src="placeholder-image-3.jpg"
              alt="foto-3"
              className="w-full"
            />
          </div>
        </div>

        <div className="h-40"></div>

        <div className="h-40"></div>
      </section>

      <Servicios />

      <NavLink to="/profesional">
        <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
          Profesional
        </button>
      </NavLink>
    </>
  );
};

export default LandingPage;
