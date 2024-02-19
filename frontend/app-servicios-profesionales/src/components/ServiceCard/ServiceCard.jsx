import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ servicio, rutaIcono }) => {
  const iconPath = `/icons/${rutaIcono}.png`;

  const handleButtonClick = () => {
    // Manejar la lógica cuando se hace clic en el botón
    // Hacer la peticion de el listados proveedores de ese servicio

    console.log("Pedir a la base");
  };

  return (
    <div className="flex flex-col items-center mb-10 ">
      <div>
        <img
          src={iconPath}
          alt={`${servicio} Icon`}
          width="110"
          height="110"
          className="mb-5"
        />
      </div>
      <NavLink to="/servicios">
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
