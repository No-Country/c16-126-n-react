import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import ServiciosPage from "../pages/ServiciosPage/ServiciosPage";
import ProfesionalPage from "../pages/ProfesionalPage/ProfesionalPage";
import HomeProyecto from "../pages/HomeProyecto/HomeProyecto";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingPage />} />

        <Route path="servicios" element={<ServiciosPage />} />

        <Route path="profesional" element={<ProfesionalPage />} />

        <Route path="proyecto" element={<HomeProyecto />} />
      </Routes>
    </>
  );
};

export default AppRouter;
