import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css'
import { fetchFunction } from "../api/apiFetch"
const Header = () => {
  return (
    <header>
      <h1>FormosaEmprende</h1>
      <nav>
        <ul className='flex gap-3'>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Registro</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/product-list">Productos</Link></li>
          <li><Link to="/reservation">Reservas</Link></li>
          <li><Link to="/fair-info">Ferias</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
