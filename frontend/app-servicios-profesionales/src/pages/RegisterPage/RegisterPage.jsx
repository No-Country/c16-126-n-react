import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="flex justify-center">
      <div className="register ">
        <div>
          <form className="flex flex-col items-center p-2 m-3 gap-y-8 ">
            <h1 className="text-black text-[40px] border-[#00000040] ">
              Crear cuenta
            </h1>

            <div className="flex gap-[1.5rem]">
              <input
                className="ipt-reg-s"
                placeholder="Nombre"
                name="nombre"
                type="text"
              />

              <input
                className="ipt-reg-s"
                placeholder="Apellido"
                name="apellido"
                type="text"
              />
            </div>

            <input
              className="ipt-reg-l"
              placeholder="Correo Electrónico"
              name="email"
              type="email"
            />

            <input
              className="ipt-reg-l"
              placeholder="Contraseña"
              name="password"
              type="password"
            />

            <input
              className="ipt-reg-l"
              placeholder="Provincia"
              name="provincia"
              type="text"
            />

            <div className="flex gap-[1.5rem]">
              <input
                className="ipt-reg-s"
                placeholder="Ciudad"
                name="ciudad"
                type="text"
              />

              <input
                className="ipt-reg-s"
                placeholder="Codigo Postal"
                name="codigo_postal"
                type="text"
              />
            </div>

            <button className="btn-reg">Registrarse</button>

            <div className="flex flex-col items-center justify-center">
              <p className="text-[#000000BF] text-[28px]">
                ¿Ya tienes una cuenta?
              </p>
              <NavLink
                to="/login"
                className="text-[#454BE0E0] text-[30px] underline"
              >
                Inicia sesión
              </NavLink>
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
  );
}
