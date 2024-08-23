import React, { useState } from 'react';
import axios from 'axios';
import '../styles/global.css'
import { fetchFunction } from "../api/apiFetch"
const ReservationForm = () => {
  const [product, setProduct] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reservations', { product, date });
      console.log(response.data);
      // Manejar la respuesta del servidor
    } catch (error) {
      console.error('Error al realizar la reserva:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Seleccionar producto:
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
      </label>
      <label>
        Fecha de reserva:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <button type="submit">Reservar</button>
    </form>
  );
};

export default ReservationForm;
