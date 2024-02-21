import React from "react";
import RatingToStar from "../../components/RatingToStar/RatingToStar";

const ProfesionalPage = () => {
  return (
    <div className="bg-blue-100 flex flex-col h-screen ">
      <header className="bg-blue-500 flex  ">
        <div className="flex items-center flex-grow mx-auto max-w-[1280px] justify-between">
          <p className="text-white text-2xl mx-auto  ">TARJETA PROFESIONAL</p>
          <button className=" h-10 w-35 m-3 p-5 flex items-center  bg-blue-700 text-white text-xl rounded-md  border border-white shadow-md">
            Contactar
          </button>
        </div>
      </header>

      <div className="flex flex-grow mx-auto max-w-[1280px]">
        <div className="flex-shrink-0 p-4 text-center items-center">
          <img
            src="https://avatars.githubusercontent.com/u/101590889?v=4"
            alt=""
            className="w-60 h-60 rounded-full m-10 "
          />
          <p className="text-lg font-bold"> JORGE MUÑOZ</p>
          <p className="text-lg text-gray-600"> Electricista UNC</p>
          <p className="text-lg text-gray-600"> Córdoba</p>
          <div className=" ml-auto flex items-center">
            <RatingToStar rating={4} />
          </div>
        </div>

        <div className="flex flex-col p-4 flex-grow items-center h-full">
          <div className=" w-2/3 ">
            <h3 className="text-lg font-semibold my-4 text-center ">
              Acerca de mi:
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              repellat? Explicabo libero quas pariatur amet eos similique soluta
              nisi. Quia nisi provident explicabo corporis quo, tempore odio
              corrupti itaque iure!
            </p>
            <h3 className="text-lg font-semibold my-4 text-center">
              Valoraciones:
            </h3>
            <div className="bg-white p-2 rounded-xl shadow-md my-2">
              <p className="text-lg font-semibold mx-auto">Un capo :D</p>
              <div className="flex items-center justify-start ">
                <div className="flex items-center ">
                  <RatingToStar rating={5} />
                </div>
                <p className="text-md font-semibold  ml-auto">
                  Margarita Perez
                </p>
              </div>
            </div>
            <div className="bg-white p-2 rounded-xl shadow-md my-2">
              <p className="text-lg font-semibold mx-auto">
                Me prendió el foco
              </p>
              <div className="flex items-center justify-start ">
                <div className="flex items-center ">
                  <RatingToStar rating={4} />
                </div>
                <p className="text-md font-semibold  ml-auto">Luis Correa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesionalPage;
