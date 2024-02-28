import React from "react";
import RatingToStar from "../../components/RatingToStar/RatingToStar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProfesionalPage = () => {
  const profesional = {
    foto: "https://media.licdn.com/dms/image/D4D03AQFV7s7YwSIz1Q/profile-displayphoto-shrink_400_400/0/1701561732877?e=1714608000&v=beta&t=4nq5kHe_ppgZZuan2Wk32iaEpnzBs-gU5Nsc8pXQxII",
    nombre: "Juan Vital",
    profesion: "Electricista",
    ciudad: "Ramallo",
    puntaje: "4.5",
    resumen:
      "Reparaciones eléctricas residenciales - 15 Años de experiencia en la zona. Trabajo en hoteles y brarrios privados ",
  };

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

      <div className="flex flex-grow mx-auto container">
        <div className="flex-shrink-0 p-4 text-center items-center">
          <img
            src={profesional.foto}
            alt=""
            className="w-60 h-60 rounded-full m-10 "
          />
          <p className="text-lg font-bold"> {profesional.nombre}</p>
          <p className="text-lg text-gray-600"> {profesional.profesion}</p>
          <p className="text-lg text-gray-600"> {profesional.ciudad}</p>
          <div className=" ml-auto flex items-center">
            <RatingToStar rating={profesional.puntaje} />
          </div>
        </div>

        <div className="flex flex-col p-4 flex-grow items-center h-full">
          <div className=" w-2/3 ">
            <h3 className="text-lg font-semibold my-4 text-center ">
              Acerca de mi:
            </h3>
            <p>{profesional.resumen}</p>
            <h3 className="text-lg font-semibold my-4 text-center">
              Valoraciones:
            </h3>
            <div className="container">
              <div className="bg-white p-2 rounded-xl shadow-md my-2 ">
                <p className="text-lg font-semibold mx-auto">
                  Excelente atención - Rápida Respuesta
                </p>
                <div className="flex flex-col lg:flex-row items-center justify-start ">
                  <div className="flex items-center ">
                    <RatingToStar rating={5} />
                  </div>
                  <p className="text-md font-semibold  ml-auto">Sofía Pérez</p>
                </div>
              </div>
              <div className="bg-white p-2 rounded-xl shadow-md my-2">
                <p className="text-lg font-semibold mx-auto">
                  Cumplió con el horario de visita - todo tal cual lo acordado
                </p>
                <div className="flex flex-col lg:flex-row items-center justify-start ">
                  <div className="flex items-center ">
                    <RatingToStar rating={4} />
                  </div>
                  <p className="text-md font-semibold  ml-auto">Martín López</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesionalPage;
