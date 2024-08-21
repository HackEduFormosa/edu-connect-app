import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css'; // Archivo de estilos globales

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Asegúrate de tener un elemento con id="root" en tu index.html
);
