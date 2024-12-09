import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFunction } from "../api/apiFetch"

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Bienvenido a FormosaEmprende</h2>
        {/* Contenido de la página de inicio */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
