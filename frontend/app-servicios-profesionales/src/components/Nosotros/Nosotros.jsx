import { NavLink } from "react-router-dom";
import { RiTeamLine } from "react-icons/ri";
import NosotrosCard from "../NosotrosCard/NosotrosCard";

const Nosotros = () => {
  const devs = [
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/106778830?v=4",
      nombre: "Laura Marcela Rozo Rodriguez",
      rol: "Tester QA - Diseño UI/UX ",
      linkedinUrl: "https://www.linkedin.com/in/laura-rozorodriguez/",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/109558787?v=4",
      nombre: "Franco Martí­n Ojeda",
      rol: "BackEnd Developer",
      linkedinUrl: "https://www.linkedin.com/in/sebastiangallegocanon/",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/101590889?v=4",
      nombre: "Sebastian Gallego",
      rol: "FrontEnd Developer",
      linkedinUrl: "https://www.linkedin.com/in/franco-ojeda-5470b399",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/54607894?v=4",
      nombre: "Eduardo Hidalgo",
      rol: "FrontEnd Developer",
      linkedinUrl: "https://www.linkedin.com/in/eduardo-antonio-hidalgo/",
    },
    {
      avatarUrl: "https://avatars.githubusercontent.com/u/128101914?v=4",
      nombre: "Gabriel Taboada",
      rol: "FrontEnd Developer",
      linkedinUrl:
        "https://www.linkedin.com/in/gabriel-alberto-taboada-cardullo",
    },
  ];

  return (
    <div className="flex flex-col items-center mb-10 mt-20 ">
      <a className="flex items-center space-x-4 my-20 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl ">
        <RiTeamLine />
        <span>Nosotros</span>
      </a>

      {devs.map((dev, index) => (
        <NosotrosCard key={index} {...dev} />
      ))}
    </div>
  );
};
export default Nosotros;
