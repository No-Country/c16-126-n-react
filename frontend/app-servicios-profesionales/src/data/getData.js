import axios from "axios"



export const solicitarProfesionales = async (profesion) => {
    const apiUrl = 'https://allservicesapi-dev-mszq.3.us-1.fl0.io/api/solicitarProfesionales';

    try {
        const response = await axios.post(apiUrl, {"profesion":profesion}, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error(error);
        console.error(error.response.data);

        return { error: true, data: error.response.data };
    }
};


