import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import ServiciosPage from "../pages/ServiciosPage/ServiciosPage";
import ProfesionalPage from "../pages/ProfesionalPage/ProfesionalPage";
import HomeProyecto from "../pages/HomeProyecto/HomeProyecto";
import Perfil from "../components/Perfil/Perfil";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingPage />} />

        <Route path="servicios/:servicio" element={<ServiciosPage />} />

        <Route path="profesional" element={<ProfesionalPage />} />

        <Route path="proyecto" element={<HomeProyecto />} />

        <Route path="perfil" element={<Perfil />} />
      </Routes>
    </>
  );
};

export default AppRouter;
