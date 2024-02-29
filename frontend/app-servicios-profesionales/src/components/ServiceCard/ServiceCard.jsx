import { NavLink, useNavigate } from "react-router-dom";


const ServiceCard = ({ servicio, rutaIcono }) => {
  const iconPath = `/icons/${rutaIcono}.png`;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const lowerCaseServicio = servicio.toLowerCase();
    
    
    navigate(`/servicios/${lowerCaseServicio}`);
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
     
      <button
        className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
        onClick={handleButtonClick}
      >
        {servicio}
      </button>
    </div>
  );
};

export default ServiceCard;