import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import ServiciosPage from "../pages/ServiciosPage/ServiciosPage";
import ProfesionalPage from "../pages/ProfesionalPage/ProfesionalPage";
import HomeProyecto from "../pages/HomeProyecto/HomeProyecto";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactoPage from "../pages/ContactoPage/ContactoPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<LandingPage />} />

        <Route path="servicios/:servicio" element={<ServiciosPage />} />

        <Route path="profesional/:index" element={<ProfesionalPage />} />

        <Route path="proyecto" element={<HomeProyecto />} />

        <Route path="login" element={<LoginPage />} />

        <Route path="register" element={<RegisterPage />} />

        <Route path="contacto" element={<ContactoPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
