import axios, { AxiosResponse } from 'axios';

interface LoginResponse {
  accessToken: string;
  user: {
    email: string;
    role: string;
    id: number;
  };
}

export const postLoginData = (email: string, password: string): Promise<LoginResponse> => {
  const loginData = {
    email: email,
    password: password
  };

  return axios
    .post('http://127.0.0.1:8080/login', loginData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response: AxiosResponse<LoginResponse>) => {
      return response.data;
    })
    .catch((error) => {
      console.error('Error al iniciar sesión:', error);
      throw error;
    });
};

//Función para la llamada a la API
//La función tendrá como parámetros los valores de los inputs
//Esta función tiene que ser enviada cada vez que se apriete el botón de inicio de sesión
