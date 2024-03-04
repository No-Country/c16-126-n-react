import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SwalError, swalExitoso } from '../../helpers/sweetAlert';

const CargarPerfilProfesional = () => {

  const [horario, setHorario] = useState('')
  const [profesion, setProfesion] = useState([])
  const [selectedProfesion, setSelectedProfesion] = useState(0);


  console.log(horario)
  console.log(selectedProfesion)
  console.log(profesion)
  
  const handleHorarioProfesional = async (e) => {
    e.preventDefault();
    
    try {
      if (horario === '') {
        SwalError('Por favor, complete el campo de Disponibilidad Horaria.');
      } else {
        const response = await axios.post('https://allservicesapi-production.up.railway.app/api/horarioProfesional', {
          disponibilidad_horaria: horario, 
        });
        
        if (response.data) {
          swalExitoso(response.data.mensaje);
          console.log('Response:', response.data);
        } else {
          SwalError('Hubo un problema al guardar la disponibilidad horaria.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      SwalError(error.response.data.error);
    }
  };

  const handleSelectProfesion = async (e) => {
    e.preventDefault();
    
    try {
      if (!selectedProfesion) {
        SwalError('Por favor, elija una profesión');
      } else {
        const response = await axios.post('https://allservicesapi-production.up.railway.app/api/cargarOficios', {
          profesion: selectedProfesion, 
        });
        swalExitoso(response.data.mensaje);
        console.log('Response:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
      SwalError(error.response.data.error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://allservicesapi-production.up.railway.app/api/profesiones');
        setProfesion(response.data.profesiones[0]);
      } catch (error) {
        console.error('Error fetching professions:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
    <p className='font-bold text-2xl '>Cargar datos del Profesional</p>

    <form className='flex flex-col  mt-5 ' onSubmit={handleHorarioProfesional}>
      <label className='text-[18px] font-bold mb-3' htmlFor='Direccion'>
        Disponibilidad Horaria
      </label>
      <input
        type='text'
        onChange={(e) => setHorario(e.target.value)}
        placeholder='Ingrese su disponibilidad horaria'
        className='block lg:w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[100px]'
      />
      <button className='bg-blue-700 text-white rounded-md mt-5 w-[200px] h-[50px] text-[18px]' type='submit'>
        Guardar Disponibilidad
      </button>
    </form>

<div className='mt-10'>

    <hr/>

</div>

    <form className='flex flex-col  mt-5' onSubmit={handleSelectProfesion}>
      <label className='text-[18px] font-bold mb-3' htmlFor='Direccion'>
        Elegir Profesión 
      </label>
      <select
        id="professions"
        name="professions"
        value={selectedProfesion}
        onChange={(e) => setSelectedProfesion(e.target.value)}
        className="p-2  mt-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Select...</option>
        {profesion.map((prof) => (
          <option key={prof.profesion_id} value={prof.profesion_id}>
            {prof.nombre}
          </option>
        ))}
      </select>
      <button className='bg-blue-700  text-white rounded-md mt-5 w-[200px] h-[50px] text-[18px]' type='submit'>
        Guardar Profesión
      </button>
    </form>
  </div>
  )
}

export default CargarPerfilProfesional
