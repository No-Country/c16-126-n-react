import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfesionalCard from "../../components/ProfesionalCard/ProfesionalCard";
import axios from "axios";
import SelectUbicacion from "../../components/SelectUbicacion/SelectUbicacion";

const ServiciosPage = () => {
  const [profesion, setProfesion] = useState([]);
  const [profesiones, setProfesiones] = useState([]);
  const [profesionales, setProfesionales] = useState([]);

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

  //saca null
  useEffect(() => {
    if (profesion) {
      axios
        .post(
          "https://allservicesapi-production.up.railway.app/api/solicitarProfesionales",
          {
            profesion: profesion_id,
          }
        )
        .then((response) => {
          const profesionalesObtenidos = response.data.profesionales; // Ajusta esto según la estructura de tu respuesta
          setProfesionales(profesionalesObtenidos);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [profesion_id]); // Se ejecuta cuando la profesión cambie

  //Renderizado Condicional por si se demora el Get
  if (!profesion || !profesionales) {
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

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 p-2 container justify-between mx-auto gap-6 mt-10">
        {profesionales.map((profesional) => (
          <Link
            key={profesional.usuario_id}
            to={{
              pathname: `/profesional/${profesional.usuario_id}`,
              state: { profesional },
            }}
          >
            <ProfesionalCard {...profesional} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiciosPage;
