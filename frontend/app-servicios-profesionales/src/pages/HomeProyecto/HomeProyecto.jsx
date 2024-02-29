import React from "react";
import Nosotros from "../../components/Nosotros/Nosotros";
import { FaFigma, FaGithub } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";

const HomeProyecto = () => {
  return (
    <section className="flex flex-col  flex-grow mx-auto container ">
      <nav className="flex flex-col my-4 gap-2  lg:flex-row items-center justify-between">
        <a className="flex items-center space-x-4  text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer min-w-56">
          <RiTeamLine />
          <span>Nosotros</span>
        </a>
        <a className="flex items-center  text-xl space-x-4 font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer min-w-56">
          <CgWebsite />
          <span>Website</span>
        </a>
        <a
          className="flex items-center space-x-4 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer min-w-56"
          href="https://github.com/No-Country/c16-126-n-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a className="flex items-center space-x-4 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer min-w-56">
          <IoDocumentTextOutline />
          <span>Docs</span>
        </a>
        <a
          className=" items-center flex space-x-4 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer min-w-56"
          href="https://www.figma.com/file/Cf1oTmGWXlKIRCI7ESnn97/Proyecto-Servicios-Hogar?type=design&node-id=101-2&mode=design&t=Amgc1lh9F9Th2yy5-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFigma />
          <span>Figma</span>
        </a>
      </nav>

      <div className="flex flex-col lg:flex-row mx-auto items-center justify-center mt-20 ">
        <div className="container w-1/2  ">
          <p className="text-2xl font-bold">Descripción del Proyecto: </p>
          <p className="text-xl font-semibold text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id
            tenetur quia eaque sequi autem recusandae amet voluptatum blanditiis
            dicta, voluptate facere maiores atque ipsa, laborum expedita
            architecto. Asperiores, voluptates!
          </p>
        </div>
        <div className="m-5  ">
          <img
            src="https://i.blogs.es/6f95f6/tools-864983_1280/650_1200.jpg"
            alt="imagen del proyecto"
            className="w-52 h-52 rounded-full cover "
          />
        </div>
      </div>

      <Nosotros />
    </section>
  );
};

export default HomeProyecto;
