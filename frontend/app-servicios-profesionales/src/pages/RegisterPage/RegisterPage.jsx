import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registroUsuarios } from "../../data/getData";
import SelectorProvincias from "../../components/SelectorProvincias/SelectorProvincias";
import SelectorCiudades from "../../components/SelectorCiudades/SelectorCiudades";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    codigo_postal: "",
    ciudad: "",
    provincia: "",
    password: "",
  };

  const [formState, setFormState] = useState({ ...initialValues });

  const onSubmit = handleSubmit(async () => {
    const data = {
      Nombre: formState.nombre,
      Apellido: formState.apellido,
      Email: formState.email,
      Codigo_Postal: formState.codigo_postal,
      Ciudad: formState.ciudad,
      Provincia: formState.provincia,
      Password: formState.password,
    };

    try {
      const response = await registroUsuarios(data);

      if (response.data) {
        alert("Usuario registrado exitosamente");
        // reset();
      } else {
        alert("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  });

  return (
    <div className="flex justify-center">
      <div className="register ">
        <div>
          <form
            className="flex flex-col items-center p-2 m-3 gap-y-8 "
            onSubmit={onSubmit}
          >
            <h1 className="text-black text-[40px] border-[#00000040] ">
              Crear cuenta
            </h1>

            <div className="flex gap-[1.5rem]">
              <div className="flex flex-col">
                <input
                  className="ipt-reg-s"
                  placeholder="Nombre"
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      nombre: e.target.value,
                    }))
                  }
                  name="nombre"
                  type="text"
                  {...register("nombre", {
                    required: {
                      value: true,
                      message: "Nombre requerido",
                    },
                    minLength: {
                      value: 2,
                      message: "El nombre debe tener mas de 2 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message: "El nombre no puede tener mas de 20 caracteres",
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
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      apellido: e.target.value,
                    }))
                  }
                  name="apellido"
                  type="text"
                  {...register("apellido", {
                    required: {
                      value: true,
                      message: "Apellido requerido",
                    },
                    minLength: {
                      value: 2,
                      message: "El apellido debe tener mas de 2 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message:
                        "El apellido no puede tener mas de 20 caracteres",
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
                onChange={(e) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
                name="password"
                type="password"
                {...register("password", {
                  required: { value: true, message: "Contraseña requerida" },
                  minLength: {
                    value: 6,
                    message:
                      "La contraseña debe tener un mínimo de 6 caracteres",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="flex flex-col">
              {/* <SelectorProvincias /> */}
              <input
                className="ipt-reg-l"
                placeholder="Provincia"
                onChange={(e) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    provincia: e.target.value,
                  }))
                }
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

            <div className="flex gap-[1.5rem]">
              <div className="flex flex-col">
                {/* <SelectorCiudades /> */}
                <input
                  className="ipt-reg-s"
                  placeholder="Ciudad"
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      ciudad: e.target.value,
                    }))
                  }
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
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      codigo_postal: e.target.value,
                    }))
                  }
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
                    pattern: {
                      value: /[0-9]{4}$/,
                      message: "CP no válido",
                    },
                  })}
                />
                {errors.codigo_postal && (
                  <span className="text-red-500">
                    {errors.codigo_postal.message}
                  </span>
                )}
              </div>
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
