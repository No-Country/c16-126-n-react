import React from "react";
import RatingToStar from "../../components/RatingToStar/RatingToStar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Valoraciones from "../../components/Valoraciones/Valoraciones";

const ProfesionalPage = () => {
  //Hacer el Fetch con el id del profesional

  const rutaActual = window.location.pathname;
  const segmentos = rutaActual.split("/");
  const profesion_id = segmentos[segmentos.length - 1];

  /*useEffect(() => {
    axios
      .post(
        "https://allservicesapi-production.up.railway.app/api/solicitarProfesionales",
        {
          profesion: profesion_id,
        }
      )
      .then((response) => {
        const profesionalObtenido = response.data.profesionales;
        setProfesional(profesionalsObtenido);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [profesion_id]);*/

  return (
    <div className="bg-blue-100 flex flex-col   ">
      <header className="bg-blue-500 flex  ">
        <div className="flex items-center flex-grow mx-auto max-w-[1280px] justify-between">
          <p className="text-white container text-2xl p-3 text-center mx-auto  ">
            TARJETA PROFESIONAL
          </p>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row mx-auto lg:w-[1280px] ">
        <div className=" h-[420px] w-[330px] flex flex-col mx-auto p-4 text-center border shadow-xl rounded-lg m-4">
          <img
            src={`https://randomuser.me/api/portraits/men/${profesion_id}.jpg`}
            alt=""
            className="w-44 h-44 rounded-full m-5 mx-auto"
          />
          <p className="text-lg font-bold"> Nombre Apellido</p>
          <p className="text-lg text-gray-600"> Provincia</p>
          <p className="text-lg text-gray-600"> Ciudad</p>
          <p className="text-lg text-gray-600"> (CP)</p>
          <div className=" mx-auto flex items-center">
            <RatingToStar rating={4} />
          </div>
        </div>

        <div className=" flex flex-col p-4 flex-grow items-center mx-auto container ">
          <div className="flex flex-col  w-2/3  ">
            <div className="flex flex-col  items-center mx-center gap-4  ">
              <div className="flex flex-col md:flex-row gap-2 p-4 text-md font-bold border shadow-xl rounded-lg items-center">
                <p className="text-md font-bold mr-4 ">Profesiones:</p>
                <span class="bg-blue-100 text-blue-800 text-md font-medium me-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                  Carpintería
                </span>
                <span class="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                  Electricidad
                </span>
                <span class="bg-red-100 text-red-800 text-md font-medium me-2 px-2.5 py-1 rounded dark:bg-red-900 dark:text-red-300">
                  Fontanería
                </span>
                <span class="bg-green-100 text-green-800 text-md font-medium me-2 px-2.5 py-1 rounded dark:bg-green-900 dark:text-green-300">
                  Mascotas
                </span>
              </div>
              <div className="flex flex-col md:flex-row gap-2 p-4 text-md font-bold border shadow-xl rounded-lg ">
                <p>Disponibilidad:</p>
                <span className="font-semibold">
                  Lunes a viernes de 10 a 18 hs.{" "}
                </span>
              </div>
              <div className="flex flex-col md:flex-row gap-2 p-4 text-md font-bold border shadow-xl rounded-lg ">
                <p>Contacto: </p>
                <a href="mailto:jU1jv@example.com" className="text-blue-500">
                  correo@test.com
                </a>
              </div>
            </div>

            <h3 className="text-lg font-semibold my-4 text-center ">
              Acerca de mi:
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              sunt similique harum laborum maxime in impedit minima odit porro
              non deleniti repudiandae sit ut nihil sequi quo fuga, quia eum.
            </p>
            <h3 className="text-lg font-semibold my-4 text-center">
              Valoraciones:
            </h3>
            <Valoraciones />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesionalPage;
