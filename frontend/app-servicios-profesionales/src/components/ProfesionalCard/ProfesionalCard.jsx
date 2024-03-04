const ProfesionalCard = ({
  usuario_id,
  nombre,
  apellido,
  ciudad,
  provincia,
}) => {
  return (
    <div className=" w-[360px] h-[420px] flex flex-col items-center border-2 shadow-md p-4 rounded-xl pointer gap-4">
      <img
        src={`https://randomuser.me/api/portraits/men/${usuario_id}.jpg`}
        alt="Foto del Prestador del Servicio "
        className="w-[200px] h-[200px] rounded-full shadow-md cover mt-4"
      />

      <div className="flex flex-col gap-4 ">
        <p className="text-2xl font-bold text-center">
          {nombre} {apellido}
        </p>
        <p className="text-xl font-semibold mt-2 ">
          Provincia:
          <span className="mx-2  text-blue-500 text-xl ">{provincia}</span>
        </p>
        <p className="text-xl font-semibold  ">
          Ciudad:
          <span className="mx-2 text-xl text-blue-500 ">{ciudad}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfesionalCard;
