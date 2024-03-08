import React, { useState, useRef, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";
import img from "../../assets/register.png";

export default function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // navigate
  const navigate = useNavigate();

  // Context
  const { login } = useContext(AuthContext);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("Algo salió mal");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    login({ email, password });

    navigate("/perfil", {
      replace: setSuccess(true),
    });

    // setEmail("");
    // setPassword("");
    // setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section className="flex justify-center">
          <p className="text-[#000000BF] text-[28px]">
            Iniciaste sesion con exito
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
          <div className="sm:w-[1240px] sm:h-[824px] w-full flex md:gap-20 justify-center items-center bg-[#DEE9EC]">
            <form
              className="flex flex-col items-center p-2 m-3 gap-y-8"
              onSubmit={handleSubmit}
            >
              <h1 className="titulo1">Ingrese sus datos</h1>

              <input
                className="ipt-reg-l"
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

              <div className="flex flex-col items-center sm:w-[100%] sm:items-end">
                <input
                  className="ipt-reg-l"
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
                  className="flex justify-end text-[#454BE0E0] text-x sm:text-[19px] underline mt-3"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button className="btn-blue">Iniciar sesión</button>

              <div className="flex flex-col items-center justify-center">
                <p className="text-[#000000BF] text-[15px] sm:text-[20px] font-bold">
                  ¿No tienes una cuenta?
                  <NavLink
                    to="/register"
                    className="text-[#454BE0E0] text-[15px] sm:text-[20px] underline px-3"
                  >
                    Registrarse
                  </NavLink>
                </p>
              </div>
            </form>

            <div className="max-w-[350px]">
              <img src={img} alt="electricista" className="hidden md:flex" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
