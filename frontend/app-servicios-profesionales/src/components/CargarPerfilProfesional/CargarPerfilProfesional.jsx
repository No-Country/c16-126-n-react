import React from 'react'

const CargarPerfilProfesional = () => {
  return (
    <div>
    <p className='font-bold text-2xl '>Cargar datos del Profesional</p>

    <form className='flex flex-col  mt-5 '>
      <label className='text-[18px] font-bold mb-3' htmlFor='Direccion'>
        Disponibilidad Horaria
      </label>
      <input
        type='text'
        placeholder='Ingrese su disponibilidad horaria'
        className='block w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
      />
      <button className='bg-blue-700 text-white rounded-md mt-5 w-[200px] h-[50px] text-[18px]' type='submit'>
        Guardar disponibilidad
      </button>
    </form>

<div className='mt-10'>

    <hr/>

</div>

    <form className='flex flex-col  mt-5 '>
      <label className='text-[18px] font-bold mb-3' htmlFor='Direccion'>
        Elegir Profesión 
      </label>
      <input
        type='text'
        placeholder='Elegir profesión'
        className='block w-[500px] p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base
        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
      />
      <button className='bg-blue-700 text-white rounded-md mt-5 w-[200px] h-[50px] text-[18px]' type='submit'>
        Guardar Profesión
      </button>
    </form>
  </div>
  )
}

export default CargarPerfilProfesional
