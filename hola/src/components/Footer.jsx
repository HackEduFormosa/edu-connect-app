import React from 'react';
import { fetchFunction } from "../api/apiFetch"
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 FormosaEmprende. Todos los derechos reservados.</p>
      <p>
        <a href="mailto:contacto@formosaemprende.com">Contacto</a> | 
        <a href="https://twitter.com/formosaemprende" target="_blank" rel="noopener noreferrer">Twitter</a> |
        <a href="https://facebook.com/formosaemprende" target="_blank" rel="noopener noreferrer">Facebook</a>
      </p>
    </footer>
  );
};

export default Footer;
