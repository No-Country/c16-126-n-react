import React from "react";
import Nosotros from "../../components/Nosotros/Nosotros";
import { FaFigma, FaGithub } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";

const HomeProyecto = () => {
  return (
    <section className="flex flex-col  flex-grow mx-auto max-w-[1280px] ">
      <nav className="  py-6   ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-between flex-grow">
            <a className="flex items-center space-x-4  text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer">
              <RiTeamLine />
              <span>Nosotros</span>
            </a>
            <a className="flex items-center  text-xl space-x-4 font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer">
              <CgWebsite />
              <span>Website</span>
            </a>
            <a
              className="flex items-center space-x-4 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer"
              href="https://github.com/No-Country/c16-126-n-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a className="flex items-center space-x-4 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer">
              <IoDocumentTextOutline />
              <span>Docs</span>
            </a>
            <a
              className=" items-center flex space-x-4 text-xl font-bold text-white bg-green-400 px-10 py-2 rounded-xl cursor-pointer"
              href="https://www.figma.com/file/Cf1oTmGWXlKIRCI7ESnn97/Proyecto-Servicios-Hogar?type=design&node-id=101-2&mode=design&t=Amgc1lh9F9Th2yy5-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFigma />
              <span>Figma</span>
            </a>
          </div>
        </div>
      </nav>

      <div className="flex mx-auto max-w-[1200px] items-center mt-20 ">
        <div className="w-[50%]  px-5 ">
          <p className="text-2xl font-bold">Descripción del Proyecto: </p>
          <p className="text-xl font-semibold text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id
            tenetur quia eaque sequi autem recusandae amet voluptatum blanditiis
            dicta, voluptate facere maiores atque ipsa, laborum expedita
            architecto. Asperiores, voluptates!
          </p>
        </div>
        <div className=" px-5 ml-auto">
          <img
            src="https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-1/269994737_4691575650923407_6689640126878975117_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=596444&_nc_eui2=AeGKtk7eXyo9-XoR4AHsAvr8R5YcAyWiCUpHlhwDJaIJStK4RqbcY4v1wPJTo-pDpWqbdsjoiaeQlm5rFHLbKV-x&_nc_ohc=GL4p3nMH1XMAX8E2FBN&_nc_ht=scontent.fros2-1.fna&oh=00_AfBiBf1aQDbso7n4tbCeE-jOGH7nMBaBxOg28402YU_oFQ&oe=65D9BBBE"
            alt="imagen del proyecto"
            className="w-50 h-50 rounded-full"
          />
        </div>
      </div>

      <Nosotros />
    </section>
  );
};

export default HomeProyecto;
