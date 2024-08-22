import axios from 'axios';

// Configura la base URL para las solicitudes API usando la variable de entorno
const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api',
});

// Agrega un interceptor para incluir el token de autenticación en cada solicitud
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Agrega un interceptor para manejar errores globales
api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // Manejo global de errores (puedes agregar lógica personalizada aquí)
  console.error('API Error:', error.response?.data || error.message);
  return Promise.reject(error);
});

export default api;
