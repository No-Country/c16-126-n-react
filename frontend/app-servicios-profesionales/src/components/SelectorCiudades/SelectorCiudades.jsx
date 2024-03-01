import React, { useState, useEffect } from "react";
import axios from "axios";

const SelectorDepartamentos = () => {
  const [departamentos, setDepartamentos] = useState([]);
  const [departamentoSeleccionada, setCiudadSeleccionada] = useState("");

  const obtenerDepartamentos = async () => {
    try {
      const response = await axios.get(
        `https://apis.datos.gob.ar/georef/api/departamentos?provincia=14&campos=id,nombre&max=100`
      );
      const departamentosFiltradas = response.data.departamentos.map(
        (departamento) => ({
          id: departamento.id,
          nombre: departamento.nombre,
        })
      );
      setDepartamentos(departamentosFiltradas);
    } catch (error) {
      console.error("Error obteniendo departamentos:", error);
    }
  };

  useEffect(() => {
    const cargarDepartamentos = async () => {
      await obtenerDepartamentos();
    };

    cargarDepartamentos();
  }, []);

  const handleCiudadChange = (event) => {
    setCiudadSeleccionada(event.target.value);
  };

  return (
    <div>
      <select
        value={departamentoSeleccionada}
        onChange={handleCiudadChange}
        className="ipt-reg-s"
      >
        <option value="" disabled>
          Ciudad
        </option>
        {Array.isArray(departamentos) && departamentos.length > 0 ? (
          departamentos.map((departamento) => (
            <option key={departamento.id} value={departamento.nombre}>
              {departamento.nombre}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No hay ciudades disponibles
          </option>
        )}
      </select>
    </div>
  );
};

export default SelectorDepartamentos;
