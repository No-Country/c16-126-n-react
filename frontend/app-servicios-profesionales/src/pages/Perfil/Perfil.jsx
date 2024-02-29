import { useEffect, useState } from "react";

const Perfil = () => {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const datosUsuario = localStorage.getItem("user");
    if (datosUsuario) {
      const usuarioGuardado = JSON.parse(datosUsuario);
      setUsuario(usuarioGuardado);
    }
  }, []);

  console.log(usuario);

  return (
    <div className=" flex flex-col   ">
      <header className="bg-blue-600 flex  ">
        <div className="flex items-center flex-grow mx-auto max-w-[1280px] justify-between">
          <p className="text-white text-2xl mx-auto py-6 ">PERFIL</p>
        </div>
      </header>

      <div className="flex flex-col md:flex-row mx-auto md:max-w-[1280px] ">
        <div className="flex flex-col  p-4 text-center items-center">
          <img
            src=""
            alt="imagen del usuario"
            className="w-[220px] h-[220px] rounded-full m-10 "
          />
          <a className="h-12 w-[200px] p-7 flex justify-center items-center bg-blue-700 text-white text-2xl rounded-xl shadow-md">
            Editar Perfil
          </a>
          <a className=" h-10 mb-6  flex items-center  text-blue-700 text-2xl ">
            Cambiar Contraseña
          </a>

          <ul className="flex flex-col items-center text-gray-400 pointer-none">
            <a className=" h-10 font-semibold flex items-center   text-2xl ">
              Idioma
            </a>
            <a className=" h-10  font-semibold flex items-center   text-2xl ">
              Preferencias
            </a>
            <a className=" h-10  font-semibold flex items-center   text-2xl ">
              Modo
            </a>
            <a className=" h-10  font-semibold flex items-center   text-2xl ">
              Privacidad
            </a>
          </ul>
        </div>

        <div className="flex flex-col ml-8 p-4 flex-grow items-center h-full">
          <div className="flex flex-col max-w-6xl text-center  ">
            <h3 className="text-3xl font-semibold my-4 text-center ">
              {usuario.nombre} {usuario.apellido}
            </h3>
            <div className="flex gap-4 justify-center mt-8 mx-auto">
              <a
                href=""
                className="text-lg bg-slate-200 text-slate-900  rounded-xl p-4 shadow-lg"
              >
                Cargar Datos de Usuario
              </a>
              <a
                href=""
                className="text-lg bg-slate-200 text-slate-900  rounded-xl p-4 shadow-lg"
              >
                Cargar Perfil Profesional
              </a>
            </div>

            <div className="grid grid-cols-1 gap-y-5 max-w-full mt-14 text-xl  ">
              <div className="grid grid-cols-2 justify-between   ">
                <p className="text-gray-600 text-start">Email</p>
                <p className="text-black font-semibold text-end">
                  {usuario.email}
                </p>
              </div>
              <div className="grid grid-cols-2  ">
                <p className="text-gray-600 text-start">Ciudad</p>
                <p className="text-black font-semibold text-end">
                  {usuario.ciudad}
                </p>
              </div>
              <div className="grid grid-cols-2  ">
                <p className="text-gray-600 text-start">Códido Postal:</p>
                <p className="text-black font-semibold text-end">
                  {usuario.codigo_postal}
                </p>
              </div>
              <div className="grid grid-cols-2  ">
                <p className="text-gray-600 text-start ">Provincia</p>
                <p className="text-black font-semibold text-end">
                  {usuario.provincia}
                </p>
              </div>
            </div>

            <div className="flex flex-col text-gray-400">
              <h4 className="text-2xl font-semibold my-8 text-start ">
                FAVORITOS
              </h4>
              <div className="flex gap-14 ">
                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src=""
                    alt=""
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Lucas</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src=""
                    alt=""
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Marcela</p>
                </div>

                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src=""
                    alt=""
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Susana</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src=""
                    alt=""
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Hernán</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;