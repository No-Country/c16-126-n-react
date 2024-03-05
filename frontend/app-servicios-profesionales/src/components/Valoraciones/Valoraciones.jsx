import React from "react";
import RatingToStar from "../RatingToStar/RatingToStar";

export default function Valoraciones() {
  return (
    <div className="container ">
      <div className="bg-gray-300 p-2 rounded-xl shadow-md my-2 ">
        <p className="text-lg font-semibold mx-auto text-gray-500">
          Excelente atención - Rápida Respuesta
        </p>
        <div className="flex flex-col text-gray-500 lg:flex-row items-center justify-start ">
          <div className="flex items-center ">
            <RatingToStar rating={5} />
          </div>
          <p className="text-md font-semibold text-gray-500 ml-auto">
            Sofía Pérez
          </p>
        </div>
      </div>
      <div className="bg-gray-300 p-2 rounded-xl shadow-md my-2">
        <p className="text-lg font-semibold mx-auto text-gray-500">
          Cumplió con el horario de visita - todo tal cual lo acordado
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-start ">
          <div className="flex items-center ">
            <RatingToStar rating={4} />
          </div>
          <p className="text-md font-semibold text-gray-500 ml-auto">
            Martín López
          </p>
        </div>
      </div>
    </div>
  );
}
