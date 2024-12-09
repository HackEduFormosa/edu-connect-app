import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFunction } from "../api/apiFetch"
const AdminPanelPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Panel de Administración</h2>
        {/* Contenido del panel de administración */}
      </main>
      <Footer />
    </div>
  );
};

export default AdminPanelPage;
