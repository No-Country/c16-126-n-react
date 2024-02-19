import React from "react";

export default function Login() {
  return (
    <div className="flex justify-center">
      <div className="w-[1440px] h-[1024px] flex gap-20 justify-center items-center bg-[#DEE9EC] ">
        <div>
          <form className="flex flex-col items-center p-2 m-3 gap-y-8 ">
            <h1 className="text-black text-[40px] ">Ingrese sus datos</h1>

            <input
              className="text-start text-[24px] px-3 w-[637px] h-[67px] text-[#000000BF] placeholder-black bg-[#F2F5F5] border-solid border-[3px] rounded-[20px] border-[#ffffff10] shadow-md shadow-[#00000040]"
              placeholder="Correo Electrónico"
            />

            <input
              className="text-start text-[24px] px-3 w-[637px] h-[67px] text-[#000000BF] placeholder-black bg-[#F2F5F5] border-solid border-[3px] rounded-[20px] border-[#ffffff10] shadow-md shadow-[#00000040]"
              type="password"
              placeholder="Contraseña"
            />

            <button className="w-[640px] h-[80px] text-center text-[32px] text-white bg-[#354ED1] border-[3px] rounded-[20px] border-[#354ED1] shadow-md shadow-[#00000040] ">
              Iniciar sesión
            </button>

            <p className="text-[32px] text-[#000000BF] ">o</p>

            <button className="flex items-center w-[640px] h-[80px] text-[32px]  text-[#000000BF] bg-[#F2F5F5] border-[2px] rounded-[20px] border-[#ffffff10] shadow-md shadow-[#00000040] ">
              <div className="px-[26px]">
                <img
                  src="../src/assets/google.png"
                  alt="google"
                  className="w-[65px] h-[65px]"
                />
              </div>
              <div className="px-[48px] ">
                <span className="w-[523px]">Continuar con Google</span>
              </div>
            </button>

            <a href="#" className="text-[#454BE0] text-[30px] underline">
              ¿Olvidaste tu contraseña?
            </a>
          </form>
        </div>
        <div>
          <img
            src="../src/assets/register.png"
            alt="electricista"
            className="w-[465px] h-[748px]"
          />
        </div>
      </div>
    </div>
  );
}
