import { NavLink } from "react-router-dom";
import { RiTeamLine } from "react-icons/ri";
import NosotrosCard from "../NosotrosCard/NosotrosCard";

const Nosotros = () => {
  return (
    <div className="flex flex-col items-center mb-10 mt-20 ">
      <a className="flex items-center space-x-4 my-20 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl ">
        <RiTeamLine />
        <span>Nosotros</span>
      </a>

      <NosotrosCard
        avatarUrl={"https://avatars.githubusercontent.com/u/101590889?v=4"}
        nombre={"Sebastian Gallego"}
        rol={"FrontEnd Developer"}
        linkedinUrl={"https://www.linkedin.com/in/sebastiangallegocanon/"}
      />
    </div>
  );
};

export default Nosotros;
