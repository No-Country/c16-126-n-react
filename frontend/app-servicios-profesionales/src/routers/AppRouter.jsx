import React from 'react'
import {Route, Routes } from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import ServiciosPage from '../pages/ServiciosPage/ServiciosPage'



const AppRouter = () => {
  return (
    <>
        <Routes>
         
            <Route path='servicios' element={<ServiciosPage/>}/>  


            <Route path='/*' element={<LandingPage/>}/>  

        </Routes>      
    </>
  )
}

export default AppRouter