import React, { useState, useRef, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../context/AuthProvider";

const LOGIN_URL = "https://jsonplaceholder.typicode.com/users";

export default function Login() {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("Algo salió mal");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, username: password }),
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      /* const roles = response?.data?.roles; */
      setAuth({ email, password, accessToken });
      setEmail("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Error de email u contraseña");
      } else if (err.response?.status === 401) {
        setErrMsg("Sin autorización");
      } else {
        setErrMsg("Inicio de Sesión Falló");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section className="flex flex-col items-center ">
          <p className="text-[#000000BF] text-[28px]">
            Iniciaste sesion con exito
          </p>
          <br />
          <p>
            <NavLink
              to="/"
              className="text-[#454BE0E0] text-[30px] underline px-3"
            >
              Volver al inicio
            </NavLink>
          </p>
        </section>
      ) : (
        <div className="flex justify-center">
          <div className="w-[1440px] h-[1024px] flex gap-20 justify-center items-center bg-[#DEE9EC]">
            <div>
              <form
                className="flex flex-col items-center p-2 m-3 gap-y-8"
                onSubmit={handleSubmit}
              >
                <h1 className="text-black text-[40px] ">Ingrese sus datos</h1>

                <input
                  className="text-start text-[24px] px-3 w-[637px] h-[67px] text-[#000000BF] placeholder-black bg-[#F2F5F5] border-solid border-[3px] rounded-[20px] border-[#ffffff10] shadow-md shadow-[#00000040]"
                  placeholder="Correo Electrónico"
                  name="email"
                  id="email"
                  ref={userRef}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  autoComplete="off"
                  required
                />

                <div className="flex flex-col ">
                  <input
                    className="text-start text-[24px] px-3 w-[637px] h-[67px] text-[#000000BF] placeholder-black bg-[#F2F5F5] border-solid border-[3px] rounded-[20px] border-[#ffffff10] shadow-md shadow-[#00000040]"
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    id="password"
                    ref={userRef}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    required
                  />
                  <a
                    href="#"
                    className="flex justify-end text-[#454BE0E0] text-[20px] underline "
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>

                <button className="w-[640px] h-[80px] text-center text-[32px] text-white bg-[#354ED1] border-[3px] rounded-[20px] border-[#354ED1] shadow-md shadow-[#00000040]">
                  Iniciar sesión
                </button>

                <p className="text-[32px] text-[#000000BF]">o</p>

                <button
                  className="flex items-center w-[640px] h-[80px] text-[32px]  text-[#000000BF] bg-[#F2F5F5] border-[2px] rounded-[20px] border-[#ffffff10] shadow-md shadow-[#00000040]"
                  onClick={() => console.log("Hola")}
                >
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

                <div className="flex flex-col items-center justify-center">
                  <p className="text-[#000000BF] text-[28px]">
                    ¿No tienes una cuenta?
                    <NavLink
                      to="/register"
                      className="text-[#454BE0E0] text-[30px] underline px-3"
                    >
                      Registrarse
                    </NavLink>
                  </p>
                </div>
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
      )}
    </>
  );
}