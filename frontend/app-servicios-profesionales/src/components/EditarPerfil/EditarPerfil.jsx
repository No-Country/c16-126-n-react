import axios from 'axios';
import React, { useContext, useState } from 'react';
import { swalExitoso } from '../../helpers/sweetAlert';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../auth/types/types';

const EditarPerfil = ({ usuario }) => {

  console.log(usuario)
    const [state , setState] = useState({
        
        ciudad:usuario.ciudad,
        provincia:usuario.provincia,
        codigo_postal:usuario.codigo_postal
    });


      const {dispatch} = useContext(AuthContext);



    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await axios.post('https://allservicesapi-production.up.railway.app/api/actualizarUsuario', {
          ciudad: state.ciudad,
          provincia: state.provincia,
          codigo_postal: state.codigo_postal,
        });
    

        
        swalExitoso(response.data.mensaje);
        console.log('Response:', response.data);
    
        const updatedUser = {
          ...JSON.parse(localStorage.getItem('user')),
          ciudad: state.ciudad,
          provincia: state.provincia,
          codigo_postal: state.codigo_postal,
        };
        localStorage.setItem('user', JSON.stringify(updatedUser));

         const action = {
            type:types.login,
            payload:updatedUser
        }

        dispatch(action)
     
        
      } catch (error) {
        console.error('Error:', error);
      }
    };



  

  return (
    <div>
      <p className='font-bold text-2xl'>Editar Datos del Perfil</p>

      <form className='flex flex-col mt-5 ' onSubmit={handleSubmit}>
      
        <div className='mt-5'>
          <label className='text-[18px] font-bold mb-3' htmlFor='Ciudad'>
            Ciudad
          </label>
          <input
            type='text'
            defaultValue={usuario.ciudad}
            onChange={(e) => setState(prevState => ({ ...prevState, ciudad: e.target.value }))}
            placeholder='Ingrese su ciudad'
            className='block lg:w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
            focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400
            dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>

        <div className='mt-5'>
          <label className='text-[18px] font-bold mb-3' htmlFor='Provincia'>
            Provincia
          </label>
          <input
            type='text'
            defaultValue={usuario.provincia}
            onChange={(e) => setState(prevState => ({ ...prevState, provincia: e.target.value }))}
            placeholder='Ingrese su provincia'
            className='block lg:w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
            focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400
            dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>

        <div className='mt-5'>
          <label className='text-[18px] font-bold mb-3' htmlFor='CodigoPostal'>
            Codigo Postal
          </label>
          <input
            type='text'
            defaultValue={usuario.codigo_postal}
            onChange={(e) => setState(prevState => ({ ...prevState, codigo_postal: e.target.value }))}
            placeholder='Ingrese su código postal'
            className='block lg:w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
            focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400
            dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>


        <button className='bg-blue-700 text-white rounded-md mt-5 w-[200px] h-[50px] text-[18px]' type='submit'>
          Actualizar Datos
        </button>
      </form>
    </div>
  );
};

export default EditarPerfil;
