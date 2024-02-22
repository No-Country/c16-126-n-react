import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import ServiciosPage from "../pages/ServiciosPage/ServiciosPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="servicios" element={<ServiciosPage />} />

        <Route path="register" element={<RegisterPage />} />

        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
