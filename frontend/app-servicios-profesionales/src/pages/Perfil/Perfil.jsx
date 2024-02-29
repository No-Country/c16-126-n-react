import React from "react";
import RatingToStar from "../../components/RatingToStar/RatingToStar";

const Perfil = () => {
  return (
    <div className=" flex flex-col   ">
      <header className="bg-blue-600 flex  ">
        <div className="flex items-center flex-grow mx-auto max-w-[1280px] justify-between">
          <p className="text-white text-2xl mx-auto py-6 ">PERFIL</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row mx-auto md:max-w-[1280px] ">
        <div className="flex flex-col  p-4 text-center items-center">
          <img
            src="https://avatars.githubusercontent.com/u/101590889?v=4"
            alt=""
            className="w-[220px] h-[220px] rounded-full m-10 "
          />
          <a className="h-12 w-[200px] p-7 flex justify-center items-center bg-blue-700 text-white text-2xl rounded-xl shadow-md">
            Editar Perfil
          </a>
          <a className=" h-10 mb-6  flex items-center  text-blue-700 text-2xl ">
            Cambiar Contraseña
          </a>

          <ul className="flex flex-col items-center ">
            <a className=" h-10 font-semibold flex items-center  text-slate-800 text-2xl ">
              Idioma
            </a>
            <a className=" h-10  font-semibold flex items-center  text-slate-800 text-2xl ">
              Preferencias
            </a>
            <a className=" h-10  font-semibold flex items-center  text-slate-800 text-2xl ">
              Modo
            </a>
            <a className=" h-10  font-semibold flex items-center  text-slate-800 text-2xl ">
              Privacidad
            </a>
          </ul>
        </div>

        <div className="flex flex-col ml-8 p-4 flex-grow items-center h-full">
          <div className="flex flex-col max-w-6xl text-center  ">
            <h3 className="text-3xl font-semibold my-4 text-center ">
              JORGE MUÑOZ
            </h3>
            <div className="flex gap-4 justify-center mt-8 mx-auto">
              <a
                href=""
                className="text-lg bg-slate-200 text-slate-900  rounded-xl p-4 shadow-lg"
              >
                Cargar Datos de Usuario
              </a>
              <a
                href=""
                className="text-lg bg-slate-200 text-slate-900  rounded-xl p-4 shadow-lg"
              >
                Cargar Perfil Profesional
              </a>
            </div>

            <div className="grid grid-cols-1 gap-y-5 max-w-full mt-14 text-xl  ">
              <div className="grid grid-cols-2 justify-between   ">
                <p className="text-gray-600 text-start">Fecha de Nacimiento</p>
                <p className="text-black font-semibold text-end">01/01/1990</p>
              </div>
              <div className="grid grid-cols-2  ">
                <p className="text-gray-600 text-start">Email</p>
                <p className="text-black font-semibold text-end">
                  usuario@example.com
                </p>
              </div>
              <div className="grid grid-cols-2  ">
                <p className="text-gray-600 text-start">Teléfono</p>
                <p className="text-black font-semibold text-end">
                  123-456-7890
                </p>
              </div>
              <div className="grid grid-cols-2  ">
                <p className="text-gray-600 text-start ">Domicilio</p>
                <p className="text-black font-semibold text-end">
                  9 de Julio 101
                </p>
              </div>
              <div className="grid grid-cols-2 ">
                <p className="text-gray-600 text-start">Ciudad / Provincia</p>
                <p className="text-black font-semibold text-end">Córdoba</p>
              </div>
              <div className="grid grid-cols-2  ">
                <p className="text-gray-600 text-start">Profesión</p>
                <p className="text-black font-semibold text-end">-</p>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-2xl font-semibold my-8 text-start ">
                FAVORITOS
              </h4>
              <div className="flex gap-14 ">
                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src=""
                    alt=""
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Lucas</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src=""
                    alt=""
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Marcela</p>
                </div>

                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src=""
                    alt=""
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Susana</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src=""
                    alt=""
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Hernán</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;