import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfesionalCard from "../../components/ProfesionalCard/ProfesionalCard";

import axios from "axios";

//Cuando abro esta pagina tengo que hacer una consulta
//a la API buscando los profesionales que complan con
//el servicio solicitado segun el ID

const ServiciosPage = () => {
  const [profesion, setProfesion] = useState([]);
  const [profesiones, setProfesiones] = useState([]);

  useEffect(() => {
    axios
      .get("https://allservicesapi-production.up.railway.app/api/profesiones")
      .then((response) => {
        setProfesiones(response.data.profesiones);
        console.log(profesiones);
      })
      .catch((error) => {
        console.error("Error al obtener las profesiones:", error);
      });
  }, []);

  const rutaActual = window.location.pathname;
  const segmentos = rutaActual.split("/");
  const profesion_id = segmentos[segmentos.length - 1];

  useEffect(() => {
    const prof = profesiones
      .flat()
      .find((profesion) => profesion.profesion_id == profesion_id);

    setProfesion(prof);
  }, [profesion_id]);

  return (
    <div className=" ">
      <div className=" flex   justify-center items-center text-center h-[60px] bg-blue-600">
        <p className="text-2xl text-white font-bold"></p>
      </div>

      <div className="flex flex-col p-4 gap-4 justify-center items-center text-center">
        <p>Filtro de Búsqueda:</p>
        <div className=" flex gap-2">
          <label htmlFor="opciones">Provincia:</label>
          <select id="opciones">
            <option value="">Seleccionar...</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <div className=" flex gap-2">
          <label htmlFor="opciones">Ciudad:</label>
          <select id="opciones">
            <option value="">Seleccionar...</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 p-10 container justify-between mx-auto gap-5"></div>
    </div>
  );
};

export default ServiciosPage;

/*
    <div>
      

      <div className="grid grid-cols-2 lg:grid-cols-4 p-10 container justify-between mx-auto gap-5">
        {profesionales.map((profesional, index) => (
          <Link
            key={index}
            to={{
              pathname: `/profesional/${profesional.nombre}`,
              state: { profesional },
            }}
          >
            <ProfesionalCard {...profesional} />
          </Link>
        ))}
      </div>

      {/* <div className="grid grid-cols-2 grid-rows-1 w-full max-h-full p-5 h-screen ">
        <div className="w-[50%] h-[50%] mt-10 border-l-4 border-blue-700/90 m-5  ">
          <form className="max-w-sm mx-auto">
            <p className="text-[20px] font-bold text-blue-800">
              Busca una ciudad
            </p>
            <label htmlFor="underline_select" className="sr-only">
              Busca una ciudad
            </label>
            <select
              id="underline_select"
              className="block py-2.5 px-0 w-full text-md text-gray-500 bg-transparent
      border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400
      dark:border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option defaultValue="" disabled selected>
                Busca una ciudad
              </option>
              <option defaultValue="Buenos Aires">Buenos Aires</option>
              <option defaultValue="Santa Fe">Santa Fe</option>
            </select>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {profesional.map((prof, index) => (
            <div
              className=" h-[350px] flex flex-col justify-center items-center"
              key={index}
            >
              <img
                src="https://avatars.githubusercontent.com/u/101590889?v=4"
                className=" rounded-full h-[150px] w-[150px] "
                alt="a"
              />
              <p className="text-[20px] font-semibold">
                {prof.nombre} {prof.apellido}
              </p>
              <p className="text-[18px] font-semibold">{prof.ciudad}</p>
              <RatingToStar rating={4} />
            </div>
          ))}
        </div>
      </div> }
    </div>
  );
};

export default ServiciosPage;*/
