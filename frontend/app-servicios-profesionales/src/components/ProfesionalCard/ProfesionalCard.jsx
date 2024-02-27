import RatingToStar from "../RatingToStar/RatingToStar";

const ProfesionalCard = ({ foto, nombre, ciudad, puntaje }) => {
  return (
    <div className=" flex flex-col  items-center  border-2 shadow-md p-2 rounded-xl">
      <img
        src={foto}
        alt="Foto del Prestador del Servicio"
        className="w-[200px] h-[200px] rounded-full shadow-md cover"
      />
      <p className="text-3xl font-bold text-center">{nombre}</p>
      <p className="text-xl font-bold text-center ">{ciudad} </p>
      <RatingToStar rating={puntaje} />
    </div>
  );
};

export default ProfesionalCard;
