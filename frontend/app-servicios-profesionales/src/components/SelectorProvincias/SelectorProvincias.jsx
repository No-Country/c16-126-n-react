import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const SelectorProvincias = () => {
  const [provincias, setProvincias] = useState([]);
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState("");

  const obtenerProvincias = async () => {
    try {
      const response = await axios.get(
        "https://apis.datos.gob.ar/georef/api/provincias"
      );
      const provinciasFiltradas = response.data.provincias.map((provincia) => ({
        id: provincia.id,
        nombre: provincia.nombre,
      }));
      const provincia_id = response.data.provincias.map((provincia) => ({
        id: provincia.id,
      }));
      setProvincias(provinciasFiltradas);
    } catch (error) {
      console.error("Error obteniendo provincias:", error);
    }
  };

  useEffect(() => {
    const cargarProvincias = async () => {
      await obtenerProvincias();
    };

    cargarProvincias();
  }, []);

  const handleProvinciaChange = (event) => {
    setProvinciaSeleccionada(event.target.value);
  };

  return (
    <div>
      <select
        value={provinciaSeleccionada}
        onChange={handleProvinciaChange}
        className="ipt-reg-l"
      >
        <option value="" disabled>
          Provincia
        </option>
        {Array.isArray(provincias) && provincias.length > 0 ? (
          provincias.map((provincia) => (
            <option key={provincia.id} value={provincia.nombre}>
              {provincia.nombre}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No hay provincias disponibles
          </option>
        )}
      </select>
    </div>
  );
};

export default SelectorProvincias;
