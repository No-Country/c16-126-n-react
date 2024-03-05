import React from "react";
import { useState, useEffect } from "react";

const servicios = [
  {
    profesion_id: 1,
    servicio: "Jardinería",
    rutaIcono: "jardineria",
    color: "blue",
  },
  {
    profesion_id: 2,
    servicio: "Fontanería",
    rutaIcono: "fontaneria",
    color: "green",
  },
  {
    profesion_id: 3,
    servicio: "Carpintería",
    rutaIcono: "carpinteria",
    color: "red",
  },
  {
    profesion_id: 4,
    servicio: "Cerrajería",
    rutaIcono: "cerrajeria",
    color: "yellow",
  },
  {
    profesion_id: 5,
    servicio: "Limpieza",
    rutaIcono: "limpieza",
    color: "orange",
  },
  {
    profesion_id: 6,
    servicio: "Albañilería",
    rutaIcono: "albanileria",
    color: "indigo",
  },
  {
    profesion_id: 7,
    servicio: "Electricidad",
    rutaIcono: "electricidad",
    color: "pink",
  },
  {
    profesion_id: 8,
    servicio: "Decoración",
    rutaIcono: "decoracion",
    color: "purple",
  },
  {
    profesion_id: 9,
    servicio: "Mascotas",
    rutaIcono: "mascotas",
    color: "rose",
  },
  {
    profesion_id: 10,
    servicio: "Reparaciones",
    rutaIcono: "reparaciones",
    color: "teal",
  },
];

const obtenerServicioColor = (profesionId) => {
  const servicioEncontrado = servicios.find(
    (servicio) => servicio.profesion_id === profesionId
  );

  if (servicioEncontrado) {
    return {
      servicio: servicioEncontrado.servicio,
      color: servicioEncontrado.color,
    };
  } else {
    return { servicio: "Servicio", color: "gray" };
  }
};

export default function BadgeProfesion({ profesion_id }) {
  const [servicioInfo, setServicioInfo] = useState(
    obtenerServicioColor(profesion_id)
  );

  useEffect(() => {
    const nuevoServicioInfo = obtenerServicioColor(profesion_id);
    setServicioInfo(nuevoServicioInfo);
    console.log(nuevoServicioInfo.color);
  }, []);

  if (!servicioInfo.servicio) {
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
    <div>
      <p
        className={`bg-blue-700 text-white text-md font-medium me-2 px-2.5 py-1 rounded `}
      >
        {servicioInfo.servicio}
      </p>
    </div>
  );
}
