import { useContext, useEffect, useState } from "react";
import CargarUsuario from "../../components/CargarDatosUsuario/CargarUsuario";
import CargarPerfilProfesional from "../../components/CargarPerfilProfesional/CargarPerfilProfesional";
import EditarPerfil from "../../components/EditarPerfil/EditarPerfil";
import { AuthContext } from "../../auth/AuthContext";
import axios from "axios";
import BadgeProfesion from "../../components/BadgeProfesion/BadgeProfesion";

const Perfil = () => {
  const [usuario, setUsuario] = useState({});
  const [step, setStep] = useState(1);
  const [oficios, setOficios] = useState([]);

  const { user } = useContext(AuthContext)

  useEffect(() => {
    // const datosUsuario = localStorage.getItem("user");

    if (user) {
      // const usuarioGuardado = JSON.parse(datosUsuario);
      setUsuario(user);
    }
  }, [user]);


  useEffect(() => {
    if (usuario) {
      axios
        .post(
          "https://allservicesapi-production.up.railway.app/api/profesional",
          {
            email: usuario.email,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setOficios(response.data.oficios);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          
        });
    }
  }, [usuario]);

  const handleDatosUsuario = () => {
    setStep(2);
  };

  const handleDatosProfesional = () => {
    setStep(3);
  };

  const handleEditarPerfil = () => {
    setStep(4);
  };

  const handleDatosPerfil = () => {
    setStep(1);
    window.location.reload();
  };


  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="container mx-auto">
            <h3 className="text-3xl font-semibold my-4 text-center ">
              {usuario.nombre} {usuario.apellido}
            </h3>
            <div className="flex gap-4 justify-center mt-8 mx-auto">
              <button

                className="text-lg bg-slate-200 text-slate-900  rounded-xl p-4 shadow-lg"
                onClick={handleDatosUsuario}
              >
                Cargar Datos de Usuario
              </button>
              <button

                className="text-lg bg-slate-200 text-slate-900  rounded-xl p-4 shadow-lg"
                onClick={handleDatosProfesional}
              >
                Cargar Perfil Profesional
              </button>
            </div>

            <div className="grid grid-cols-1 gap-y-5 max-w-full mt-14 text-xl  ">
              <div className="flex  justify-between md:grid md:grid-cols-2">
                <p className="text-gray-600 text-start">Email</p>
                <p className="text-black font-semibold text-end">
                  {usuario.email}
                </p>
              </div>
              <div className="grid grid-cols-2 ">
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

              {oficios.length > 0? <div>
                <p className="text-md font-bold mr-4">Profesiones:</p>
                <div className="grid grid-cols-2 md:grid md:grid-cols-2 gap-2 p-4 text-md font-bold border shadow-xl rounded-lg items-center">

                  {oficios.map((oficio, index) => (
                    <BadgeProfesion key={index} {...oficio} />
                  ))}
                </div>
              </div> :

                <div></div>
              }

            </div>




            <div className="flex flex-col text-gray-400">
              <h4 className="text-2xl font-semibold my-8 text-start">
                FAVORITOS
              </h4>
              <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-14">
                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 10) + 1}.jpg`}
                    alt="user"
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Lucas</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 10) + 1}.jpg`}
                    alt="user"
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Marcela</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src={`https://randomuser.me/api/portraits/women/${Math.floor(Math.random() * 100) + 1}.jpg`}
                    alt=""
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Susana</p>
                </div>
                <div className="flex flex-col items-center gap-2 text-lg font-semibold">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 10) + 1}.jpg`}
                    alt=""
                    className="h-20 w-20 rounded-full shadow-lg bg-gray-300 border"
                  />
                  <p>Hernán</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1">
            <CargarUsuario />

          </div>

        );

      case 3:
        return (
          <CargarPerfilProfesional />
        )

      case 4:
        return (
          <EditarPerfil usuario={usuario} setUsuario={setUsuario} />
        )

      default:
        return null;
    }
  }



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
            src={`https://randomuser.me/api/portraits/men/${usuario.usuario_id}.jpg`}
            alt="imagen del usuario"
            className="w-[220px] h-[220px] rounded-full m-10 "
          />
          <button onClick={handleDatosPerfil} className="h-12 w-[200px] p-5 flex justify-center items-center bg-blue-700 text-white text-2xl rounded-xl shadow-md mb-5">
            Volver al Perfil
          </button>


          <button onClick={handleEditarPerfil} className="h-12 w-[200px] p-7 flex justify-center items-center bg-blue-700 text-white text-2xl rounded-xl shadow-md">
            Editar Perfil
          </button>
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

            {renderStep()}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
