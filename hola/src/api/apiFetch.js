import { env } from "../config/config";

export const fetchFunction = async (route, method, payload) => {
  const url = `${env.SERVER_PATH}/${route}`;

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token") || '',
      },
      body: method !== "GET" ? JSON.stringify(payload) : undefined,
    });

    if (!response.ok) {
     
      const errorResponse = await response.text(); 
      console.log('Response Error:', errorResponse);

      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error en la solicitud:', error.message);
    throw error;
  }
};
