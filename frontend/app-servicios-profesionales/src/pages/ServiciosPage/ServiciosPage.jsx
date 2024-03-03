import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfesionalCard from "../../components/ProfesionalCard/ProfesionalCard";
import axios from "axios";
import SelectUbicacion from "../../components/SelectUbicacion/SelectUbicacion";

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
  }, [profesiones]);

  //Renderizado Condicional por si se demora el Get
  if (!profesion) {
    return (
      <section className="flex justify-center h-screen items-center text-center ">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </section>
    );
  }

  return (
    <div className=" ">
      <div className=" flex   justify-center items-center text-center h-[60px] bg-blue-600">
        <p className="text-2xl text-white font-bold"> {profesion.nombre}</p>
      </div>

      <section>
        <SelectUbicacion />
      </section>
    </div>
  );
};

export default ServiciosPage;

/*
    


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
