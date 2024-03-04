import React from "react";
import RatingToStar from "../RatingToStar/RatingToStar";

export default function Valoraciones() {
  return (
    <div className="container ">
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
  );
}
