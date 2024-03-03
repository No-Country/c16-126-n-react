import ServiceCard from "../ServiceCard/ServiceCard";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Servicios = () => {
  const servicios = [
    { profesion_id: 1, servicio: "Jardinería", rutaIcono: "jardineria" },
    { profesion_id: 2, servicio: "Fontanería", rutaIcono: "fontaneria" },
    { profesion_id: 3, servicio: "Carpintería", rutaIcono: "carpinteria" },
    { profesion_id: 4, servicio: "Cerrajería", rutaIcono: "cerrajeria" },
    { profesion_id: 5, servicio: "Limpieza", rutaIcono: "limpieza" },
    { profesion_id: 6, servicio: "Albañilería", rutaIcono: "albanileria" },
    { profesion_id: 7, servicio: "Electricidad", rutaIcono: "electricidad" },
    { profesion_id: 8, servicio: "Decoración", rutaIcono: "decoracion" },
    { profesion_id: 9, servicio: "Mascotas", rutaIcono: "mascotas" },
    { profesion_id: 10, servicio: "Reparaciones", rutaIcono: "reparaciones" },
  ];

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

  return (
    <section id="servicios" className="text-center mt-20">
      <p className="text-4xl text-blue-800 font-bold text-wrap">
        Nuestros Servicios
      </p>

      <div className="mx-auto container mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {servicios.map((servicio, index) => (
            <ServiceCard key={index} {...servicio} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
