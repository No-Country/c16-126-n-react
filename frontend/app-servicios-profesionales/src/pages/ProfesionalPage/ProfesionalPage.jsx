import React from "react";
import RatingToStar from "../../components/RatingToStar/RatingToStar";
import { useState, useEffect } from "react";
import Valoraciones from "../../components/Valoraciones/Valoraciones";
import axios from "axios";

const ProfesionalPage = () => {
  const rutaActual = window.location.pathname;
  const segmentos = rutaActual.split("/");
  const idProfesional = segmentos[segmentos.length - 1];

  const [profesional, setProfesional] = useState(null);

  useEffect(() => {
    const listaProfesionales = localStorage.getItem("profesionales");

    const profesionales = JSON.parse(listaProfesionales);
    const profesionalSeleccionado = profesionales.find(
      (prof) => prof.usuario_id == idProfesional
    );
    setProfesional(profesionalSeleccionado);
  }, [idProfesional]);

  useEffect(() => {
    if (profesional) {
      axios
        .post(
          "https://allservicesapi-production.up.railway.app/api/profesional",
          {
            email: profesional.email,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => console.log(response.data))
        .catch((error) => console.error("Error:", error));
    }
  }, [profesional]);

  if (!profesional) {
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

  const {
    nombre,
    apellido,
    email,
    codigo_postal,
    ciudad,
    provincia,
    usuario_id,
  } = profesional;

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
            src={`https://randomuser.me/api/portraits/men/${idProfesional}.jpg`}
            alt=""
            className="w-44 h-44 rounded-full m-5 mx-auto"
          />
          <p className="text-lg font-bold">
            {" "}
            {nombre} {apellido}
          </p>
          <p className="text-lg text-gray-600"> {provincia}</p>
          <p className="text-lg text-gray-600"> {ciudad}</p>
          <p className="text-lg text-gray-600"> ({codigo_postal})</p>
          <div className=" mx-auto flex items-center">
            <RatingToStar rating={4} />
          </div>
        </div>

        <div className=" flex flex-col p-4 flex-grow items-center mx-auto container ">
          <div className="flex flex-col  w-2/3  ">
            <div className="flex flex-col  items-center mx-center gap-4  ">
              <div className="flex flex-col md:flex-row gap-2 p-4 text-md font-bold border shadow-xl rounded-lg items-center">
                <p className="text-md font-bold mr-4">Profesiones:</p>
                <span className="bg-blue-100 text-blue-800 text-md font-medium me-2 px-2.5 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                  Carpintería
                </span>
                <span className="bg-gray-100 text-gray-800 text-md font-medium me-2 px-2.5 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
                  Electricidad
                </span>
                <span className="bg-red-100 text-red-800 text-md font-medium me-2 px-2.5 py-1 rounded dark:bg-red-900 dark:text-red-300">
                  Fontanería
                </span>
                <span className="bg-green-100 text-green-800 text-md font-medium me-2 px-2.5 py-1 rounded dark:bg-green-900 dark:text-green-300">
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
                <a href={email} className="text-blue-500">
                  {email}
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
