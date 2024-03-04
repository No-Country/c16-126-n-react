import  axios  from 'axios';
import React, { useState } from 'react'
import { SwalError, swalExitoso } from '../../helpers/sweetAlert';

const CargarUsuario = () => {
    const [direccion, setDireccion] = useState('');
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        
        if(direccion === '') {
            SwalError('El campo dirección no puede ir vacio')
        } else {

          const response = await axios.post('https://allservicesapi-production.up.railway.app/api/datosCliente', {
            direccion: direccion, 
          });
          
          
          swalExitoso(response.data.mensaje);
          console.log('Response:', response.data);
        }

      } catch (error) {
        
        console.error('Error:', error);
      }
    };
    

  
    return (
      <div>
        <p className='font-bold text-2xl '>Cargar datos de Usuario</p>
  
        <form className='flex flex-col  mt-5 ' onSubmit={handleSubmit}>
          <label className='text-[18px] font-bold mb-3' htmlFor='Direccion'>
            Dirección
          </label>
          <input
            type='text'
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className=' block lg:w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:w-[100px]'
          />
          <button className='bg-blue-700 text-white rounded-md mt-5 w-[200px] h-[50px] text-[18px]' type='submit'>
            Guardar dirección
          </button>
        </form>
      </div>
    );
  };
  
  export default CargarUsuario;