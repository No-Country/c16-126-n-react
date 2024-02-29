import axios from "axios";

export const solicitarProfesionales = async (profesion) => {
  const apiUrl =
    "https://allservicesapi-dev-mszq.3.us-1.fl0.io/api/solicitarProfesionales";

  try {
    const response = await axios.post(
      apiUrl,
      { profesion: profesion },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data);

    return { error: true, data: error.response.data };
  }
};


export const inicioSesion = async ({ email, password }) => {
  const apiUrl =
    "https://allservicesapi-production.up.railway.app/api/inicioCliente";

  try {
    const response = await axios.post(
      apiUrl,
      { email,password },

      
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    console.error(error.response.data);

    return { error: true, data: error.response.data };
  }
}
