import { NavLink, useNavigate } from "react-router-dom";
import { solicitarProfesionales } from "../../data/getData";
import { useState } from "react";

const ServiceCard = ({ servicio, rutaIcono }) => {
  const iconPath = `/icons/${rutaIcono}.png`;
  const navigate = useNavigate();
  const [profesion, setProfesion] = useState(""); //estado para manejar las profesiones

  const handleButtonClick = async () => {
    const lowerCaseServicio = servicio.toLowerCase(); // convierte la profesion a letras minisculas
    setProfesion(lowerCaseServicio); // asigna el valor del servicio al estado profesion

    //const profesionales = await solicitarProfesionales(lowerCaseServicio); // funcion que llama al api de solicitarProfesionales
    //console.log(profesionales.profesionales);

    navigate(`/servicios/${lowerCaseServicio}`); // navegacion a la profesion especifica para listar profesionales
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <div>
        <img
          src={iconPath}
          alt={`${servicio} Icon`}
          width="110"
          height="110"
          className="mb-5"
        />
      </div>
      <NavLink to={`servicios/${profesion}`}>
        <button
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
          onClick={handleButtonClick}
        >
          {servicio}
        </button>
      </NavLink>
    </div>
  );
};

export default ServiceCard;
