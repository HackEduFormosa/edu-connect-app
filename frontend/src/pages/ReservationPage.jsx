import React from 'react';
import ReservationForm from '../components/ReservationForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFunction } from "../api/apiFetch"
const ReservationPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Reservar Producto</h2>
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
};

export default ReservationPage;
