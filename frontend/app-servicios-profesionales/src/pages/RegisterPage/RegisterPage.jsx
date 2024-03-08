import React, { useContext } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { inicioSesion, registroUsuarios } from "../../data/getData";
import { AuthContext } from "../../auth/AuthContext";
import img from "../../assets/register.png";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const onSubmit = async (formData, e) => {
    e.preventDefault();

    try {
      await registroUsuarios(formData);

      login({ email: formData.email, password: formData.password });

      navigate("/perfil", {
        state: { success: true },
      });
    } catch (error) {
      console.error("Error during registration:", error.data);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="register ">
        <div>
          <form
            className="flex flex-col max-sm:items-center p-2 m-3 gap-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="titulo1">Crear cuenta</h1>

            <div className="contents sm:flex gap-[1.5rem]">
              <div className="flex flex-col">
                <input
                  className="ipt-reg-s"
                  placeholder="Nombre"
                  name="nombre"
                  type="text"
                  {...register("nombre", {
                    required: { value: true, message: "Nombre requerido" },
                    minLength: {
                      value: 2,
                      message: "El nombre debe tener más de 2 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message: "El nombre no puede tener más de 20 caracteres",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Solo se permiten letras en el nombre",
                    },
                  })}
                />

                {errors.nombre && (
                  <span className="text-red-500">{errors.nombre.message}</span>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  className="ipt-reg-s"
                  placeholder="Apellido"
                  name="apellido"
                  type="text"
                  {...register("apellido", {
                    required: { value: true, message: "Apellido requerido" },
                    minLength: {
                      value: 2,
                      message: "El apellido debe tener más de 2 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message:
                        "El apellido no puede tener más de 20 caracteres",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: "Solo se permiten letras en el apellido",
                    },
                  })}
                />

                {errors.apellido && (
                  <span className="text-red-500">
                    {errors.apellido.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <input
                className="ipt-reg-l"
                placeholder="Correo Electrónico"
                name="email"
                type="email"
                {...register("email", {
                  required: { value: true, message: "Correo requerido" },
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Correo no válido",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                className="ipt-reg-l"
                placeholder="Contraseña"
                name="password"
                type="password"
                {...register("password", {
                  required: { value: true, message: "Contraseña requerida" },
                  minLength: {
                    value: 6,
                    message:
                      "La contraseña debe tener un mínimo de 6 caracteres",
                  },
                  /* REQUISITO DE CONTRASEÑA
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).+$/,
                    message:
                      'La contraseña debe contener al menos una mayúscula y un número',
                  }, */
                })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                className="ipt-reg-l"
                placeholder="Provincia"
                name="provincia"
                type="text"
                {...register("provincia", {
                  required: { value: true, message: "Elija una provincia" },
                })}
              />
              {errors.provincia && (
                <span className="text-red-500">{errors.provincia.message}</span>
              )}
            </div>

            <div className="contents sm:flex gap-[1.5rem]">
              <div className="flex flex-col">
                <input
                  className="ipt-reg-s"
                  placeholder="Ciudad"
                  name="ciudad"
                  type="text"
                  {...register("ciudad", {
                    required: { value: true, message: "Coloque una ciudad" },
                  })}
                />
                {errors.ciudad && (
                  <span className="text-red-500">{errors.ciudad.message}</span>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  className="ipt-reg-s"
                  placeholder="Codigo Postal"
                  name="codigo_postal"
                  type="text"
                  {...register("codigo_postal", {
                    required: {
                      value: true,
                      message: "Coloque un código postal",
                    },
                    minLength: {
                      value: 4,
                      message: "El CP debe contener 4 caracteres",
                    },
                    maxLength: {
                      value: 4,
                      message: "El CP debe contener 4 caracteres",
                    },
                    pattern: { value: /[0-9]{4}$/, message: "CP no válido" },
                  })}
                />
                {errors.codigo_postal && (
                  <span className="text-red-500">
                    {errors.codigo_postal.message}
                  </span>
                )}
              </div>
            </div>

            <button className="btn-blue">Registrarse</button>

            <div className="flex flex-col items-center justify-center">
              <p className="text-[#000000BF] text-[15px] sm:text-[20px] font-bold">
                ¿Ya tienes una cuenta?
              </p>
              <NavLink
                to="/login"
                className="text-[#454BE0E0] text-[15px] sm:text-[20px] underline px-3"
              >
                Inicia sesión
              </NavLink>
            </div>
          </form>
        </div>
        <div className="max-w-[350px]">
          <img src={img} alt="electricista" className="hidden md:flex" />
        </div>
      </div>
    </div>
  );
}
