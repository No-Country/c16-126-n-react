import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//import { solicitarProfesionales } from "../../data/getData";

//import RatingToStar from "../../components/RatingToStar/RatingToStar";
import ProfesionalCard from "../../components/ProfesionalCard/ProfesionalCard";

const ServiciosPage = () => {
  const [profesionales, setProfesionales] = useState([]);
  const { servicio } = useParams();

  /*useEffect(() => {
    const fetchData = async () => {
      try {
        const profesion = await solicitarProfesionales(servicio);
        setProfesional(profesion.profesionales);
      } catch (error) {
        console.error("Error obteniendo la data:", error);
      }
    };
    fetchData();
  }, [servicio]);*/

  //Simulo la  Peticion al Backend
  //corto la ruta para quedarme con la profesion
  const rutaActual = window.location.pathname;
  const segmentos = rutaActual.split("/");
  const profesion = segmentos[segmentos.length - 1];
  const jsonFilePath = "/lista.json";

  // Simula Realiza la solicitud fetch de la base de datos
  useEffect(() => {
    fetch(jsonFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error al cargar el archivo JSON (${response.status} ${response.statusText})`
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          const listaData = data[profesion] || [];
          setProfesionales(listaData);
        } else {
          throw new Error(
            "El archivo JSON está vacío o tiene un formato incorrecto."
          );
        }
      })
      .catch((error) => console.error(error));
  }, [servicio]);

  return (
    <div>
      <div className="w-full flex justify-center items-center text-center h-[60px] bg-blue-600">
        <p className="text-2xl text-white font-bold">
          {servicio.charAt(0).toUpperCase() + servicio.slice(1)}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 p-10 container justify-between mx-auto gap-5">
        {profesionales.map((profesional, index) => (
          <Link
            key={index}
            to={{
              pathname: `/profesional/${index}`,
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
      </div> */}
    </div>
  );
};

export default ServiciosPage;
