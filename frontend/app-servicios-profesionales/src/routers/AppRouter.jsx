import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import ServiciosPage from "../pages/ServiciosPage/ServiciosPage";
import ProfesionalPage from "../pages/ProfesionalPage/ProfesionalPage";
import HomeProyecto from "../pages/HomeProyecto/HomeProyecto";
import ContactoPage from "../pages/ContactoPage/ContactoPage";
import QuienesSomosPage from "../pages/QuienesSomosPage/QuienesSomosPage";
import Perfil from "../pages/Perfil/Perfil";
import PrivateRoute from "./PrivateRoute";
import Publicas from "./Publicas";
import PublicRoute from "./PublicRoutes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Public Routes */}

        <Route
          path="/*"
          element={
            <PublicRoute>
              <Publicas />
            </PublicRoute>
          }
        ></Route>

        {/* Public Routes */}

        <Route path="/" element={<LandingPage />} />

        <Route path="servicios/:servicio" element={<ServiciosPage />} />

        <Route path="profesional/:index" element={<ProfesionalPage />} />

        <Route path="proyecto" element={<HomeProyecto />} />

        <Route path="quienes-somos" element={<QuienesSomosPage />} />

        <Route path="contacto" element={<ContactoPage />} />

        {/* Private Route */}

        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
