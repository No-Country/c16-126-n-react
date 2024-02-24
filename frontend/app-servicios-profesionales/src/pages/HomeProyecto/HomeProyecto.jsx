import React from "react";
import Nosotros from "../../components/Nosotros/Nosotros";
import { FaFigma, FaGithub } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";

const HomeProyecto = () => {
  return (
    <section className="flex flex-col  lg:mx-auto lg:max-w-6xl  ">
      <nav className="flex flex-col py-6 lg:flex-row gap-5 mx-auto   ">
        <a className="flex w-[200px] items-center   text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer">
          <RiTeamLine />
          <span>Nosotros</span>
        </a>
        <a className="flex w-[200px] items-center  text-xl space-x-4 font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer">
          <CgWebsite />
          <span>Website</span>
        </a>
        <a
          className="flex w-[200px] items-center space-x-4 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer"
          href="https://github.com/No-Country/c16-126-n-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a className="flex w-[200px] items-center space-x-4 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer">
          <IoDocumentTextOutline />
          <span>Docs</span>
        </a>
        <a
          className="w-[200px] items-center flex space-x-4 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer"
          href="https://www.figma.com/file/Cf1oTmGWXlKIRCI7ESnn97/Proyecto-Servicios-Hogar?type=design&node-id=101-2&mode=design&t=Amgc1lh9F9Th2yy5-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFigma />
          <span>Figma</span>
        </a>
      </nav>

      <div className="flex flex-col  items-center lg:flex-row lg:max-w-vw mx-auto  max-w-vw mt-20 ">
        <div className="flex flex-col w-[80%] lg:w-[60%] ">
          <p className="text-2xl font-bold">Descripción del Proyecto: </p>
          <p className="text-xl font-semibold text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id
            tenetur quia eaque sequi autem recusandae amet voluptatum blanditiis
            dicta, voluptate facere maiores atque ipsa, laborum expedita
            architecto. Asperiores, voluptates!. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quae id tenetur quia eaque sequi autem
            recusandae amet voluptatum blanditiis dicta, voluptate facere
            maiores atque ipsa, laborum expedita architecto. Asperiores,
            voluptates!
          </p>
        </div>
        <div className="mt-10 lg:ml-auto items-center">
          <img
            src="https://i.blogs.es/6f95f6/tools-864983_1280/650_1200.jpg"
            alt="imagen del proyecto"
            className="w-[300px] h-[300px] shadow-2xl  rounded-full"
          />
        </div>
      </div>

      <Nosotros />
    </section>
  );
};

export default HomeProyecto;
