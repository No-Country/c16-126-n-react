import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import ServiciosPage from "../pages/ServiciosPage/ServiciosPage";
import ProfesionalPage from "../pages/ServiciosPage/ProfesionalPage/ProfesionalPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingPage />} />

        <Route path="servicios" element={<ServiciosPage />} />

        <Route path="profesional" element={<ProfesionalPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
