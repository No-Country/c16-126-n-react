import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import ServiciosPage from '../pages/ServiciosPage/ServiciosPage'
import ProfesionalPage from '../pages/ProfesionalPage/ProfesionalPage'
import HomeProyecto from '../pages/HomeProyecto/HomeProyecto'
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import ContactoPage from '../pages/ContactoPage/ContactoPage'

const Publicas = () => {
    return (
        <Routes>


           
            <Route path="login" element={<LoginPage />} />

            <Route path="register" element={<RegisterPage />} />

            
        </Routes>
    )
}

export default Publicas
