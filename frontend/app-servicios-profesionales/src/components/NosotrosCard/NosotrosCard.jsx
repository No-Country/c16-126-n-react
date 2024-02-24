import { FaLinkedin } from "react-icons/fa";

const NosotrosCard = ({ avatarUrl, nombre, rol, linkedinUrl }) => {
  return (
    <div className="flex flex-col items-center justify-between m-8">
      <div className="flex flex-col items-center lg:flex-row">
        <div className=" flex w-[400px]   ">
          <img
            src={avatarUrl}
            alt="Imagen del Desarrollador"
            className="w-[180px] h-[180px] mx-auto my-5 rounded-full shadow-md"
          />
        </div>
        <div className=" w-[450px] px-8 mx-auto border-2 py-5  shadow-md">
          <p className="text-2xl font-bold ">{nombre} </p>
          <p className="text-xl font-semibold text-gray-600 mb-4">Rol: {rol}</p>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-500 font-semibold "
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NosotrosCard;
