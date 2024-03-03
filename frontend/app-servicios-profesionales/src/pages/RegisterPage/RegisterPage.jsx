import React, { useState, useEffect } from "react";
import { NavLink, json } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registroUsuarios } from "../../data/getData";
import axios from "axios";
import SelectorProvincias from "../../components/SelectorProvincias/SelectorProvincias";
import SelectorCiudades from "../../components/SelectorCiudades/SelectorCiudades";

export default function RegisterPage() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
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
  const [provincia, setProvincias] = useState([]);
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState("");
  const [ciudades, setCiudades] = useState([]);

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
      } else {
        alert("Error al registrar usuario");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  });

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  const obtenerProvincias = async () => {
    try {
      const response = await axios.get(
        "https://apis.datos.gob.ar/georef/api/provincias"
      );
      const provinciasFiltradas = response.data.provincias.map((provincia) => ({
        id: provincia.id,
        nombre: provincia.nombre,
      }));
      setProvincias(provinciasFiltradas);
    } catch (error) {
      console.error("Error obteniendo provincias:", error);
    }
  };

  const handleProvinciaChange = (e) => {
    const selectedProvinciaId = e.target.value;
    setProvinciaSeleccionada(selectedProvinciaId);
    setFormState((prevState) => ({
      ...prevState,
      provincia: e.target.value,
      ciudad: "",
    }));
  };

  useEffect(() => {
    const cargarProvincias = async () => {
      await obtenerProvincias();
    };

    cargarProvincias();
  }, []);

  const obtenerCiudades = async () => {
    try {
      if (provinciaSeleccionada) {
        const response = await axios.get(
          `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provinciaSeleccionada}&campos=id,nombre&max=100`
        );
        const ciudadesFiltradas = response.data.departamentos.map((ciudad) => ({
          id: ciudad.id,
          nombre: ciudad.nombre,
        }));
        setCiudades(ciudadesFiltradas);
      } else {
        console.error("No hay una provincia seleccionada");
      }
    } catch (error) {
      console.error("Error obteniendo ciudades:", error);
    }
  };

  useEffect(() => {
    const cargarCiudades = async () => {
      await obtenerCiudades();
    };
    cargarCiudades();
  }, [provinciaSeleccionada]);

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
              {/* Input Nombre */}
              <div className="flex flex-col">
                <input
                  className="ipt-reg-s"
                  placeholder="Nombre"
                  name="nombre"
                  value={formState.nombre}
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
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      nombre: e.target.value,
                    }))
                  }
                />

                {errors.nombre && (
                  <span className="text-red-500">{errors.nombre.message}</span>
                )}
              </div>
              {/* Input Apellido */}
              <div className="flex flex-col">
                <input
                  className="ipt-reg-s"
                  placeholder="Apellido"
                  name="apellido"
                  value={formState.apellido}
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
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      apellido: e.target.value,
                    }))
                  }
                />

                {errors.apellido && (
                  <span className="text-red-500">
                    {errors.apellido.message}
                  </span>
                )}
              </div>
            </div>
            {/* Input Email */}
            <div className="flex flex-col">
              <input
                className="ipt-reg-l"
                placeholder="Correo Electrónico"
                name="email"
                value={formState.email}
                type="email"
                {...register("email", {
                  required: { value: true, message: "Correo requerido" },
                  pattern: {
                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Correo no válido",
                  },
                })}
                onChange={(e) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            {/* Input Contraseña */}
            <div className="flex flex-col">
              <input
                className="ipt-reg-l"
                placeholder="Contraseña"
                name="password"
                value={formState.password}
                type="password"
                {...register("password", {
                  required: { value: true, message: "Contraseña requerida" },
                  minLength: {
                    value: 6,
                    message:
                      "La contraseña debe tener un mínimo de 6 caracteres",
                  },
                })}
                onChange={(e) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            {/* Input Confirmar Contraseña */}
            <div className="flex flex-col">
              <input
                className="ipt-reg-l"
                placeholder="Confirmar Contraseña"
                name="confirmarPassword"
                type="password"
                {...register("confirmarPassword", {
                  required: {
                    value: true,
                    message: "Confirmar contraseña es requerido",
                  },
                  validate: (value) => {
                    return (
                      value === watch("password") ||
                      "Las contraseñas no coinciden"
                    );
                  },
                })}
              />
              {errors.confirmarPassword && (
                <span className="text-red-500">
                  {errors.confirmarPassword.message}
                </span>
              )}
            </div>
            {/* Select Provincia */}
            <div className="flex flex-col">
              <select
                className="ipt-reg-l"
                name="provincia"
                value={formState.provincia.nombre}
                {...register("provincia", {
                  required: { value: true, message: "Elija una provincia" },
                })}
                onChange={handleProvinciaChange}
              >
                <option value="" selected disabled>
                  Provincia
                </option>
                {Array.isArray(provincia) && provincia.length > 0 ? (
                  provincia.map((provincia) => (
                    <option key={provincia.nombre} value={provincia.nombre}>
                      {provincia.nombre}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No hay provincias disponibles
                  </option>
                )}
              </select>
              {errors.provincia && (
                <span className="text-red-500">{errors.provincia.message}</span>
              )}
            </div>
            {/* Select Ciudad + Input CP */}
            <div className="flex gap-[1.5rem]">
              <div className="flex flex-col">
                <select
                  className="ipt-reg-s"
                  name="ciudad"
                  value={formState.ciudad}
                  {...register("ciudad", {
                    required: { value: true, message: "Coloque una ciudad" },
                  })}
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      ciudad: e.target.value,
                    }))
                  }
                >
                  <option value="" selected disabled>
                    Ciudad
                  </option>
                  {Array.isArray(ciudades) && ciudades.length > 0 ? (
                    ciudades.map((ciudad) => (
                      <option key={ciudad.id} value={ciudad.nombre}>
                        {ciudad.nombre}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No hay ciudades disponibles
                    </option>
                  )}
                </select>
                {errors.ciudad && (
                  <span className="text-red-500">{errors.ciudad.message}</span>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  className="ipt-reg-s"
                  placeholder="Codigo Postal"
                  name="codigo_postal"
                  value={formState.codigo_postal}
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
                  onChange={(e) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      codigo_postal: e.target.value,
                    }))
                  }
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
