import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function SelectUbicacion() {
  const [provincias, setProvincias] = useState([]);
  const [selectedProvincia, setSelectedProvincia] = useState("");
  const [ciudades, setCiudades] = useState([]);

  useEffect(() => {
    axios
      .get("https://apis.datos.gob.ar/georef/api/provincias")
      .then((response) => {
        setProvincias(response.data.provincias);
      })
      .catch((error) => {
        console.error("Error al obtener las provincias:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedProvincia) {
      axios
        .get(
          `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${selectedProvincia}`,
          {
            params: {
              max: 135,
            },
          }
        )
        .then((response) => {
          setCiudades(response.data.departamentos);
        })
        .catch((error) => {
          console.error("Error al obtener las ciudades:", error);
        });
    }
  }, [selectedProvincia]); // se efecuta cuando ya tenga una provincia

  return (
    <div className="flex flex-col mt-4 p-4 gap-4 justify-center items-center text-center">
      <label htmlFor="provincia" className="text-lg underline font-semibold">
        Selecciona una provincia:
      </label>
      <select
        id="provincia"
        onChange={(e) => setSelectedProvincia(e.target.value)}
        value={selectedProvincia}
        className="w-[360px] border p-2 font-semibold rounded-md shadow-md focus:outline-none focus:border-blue-500"
      >
        <option value="">Selecciona...</option>
        {provincias.map((provincia) => (
          <option key={provincia.id} value={provincia.nombre}>
            {provincia.nombre}
          </option>
        ))}
      </select>

      <label htmlFor="ciudad" className="text-lg underline font-semibold">
        Selecciona una ciudad:
      </label>
      <select
        id="ciudad"
        className="w-[360px] border p-2 font-semibold rounded-md shadow-md focus:outline-none focus:border-blue-500"
      >
        <option value="">Selecciona...</option>
        {ciudades.map((ciudad) => (
          <option key={ciudad.id} value={ciudad.id}>
            {ciudad.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}
