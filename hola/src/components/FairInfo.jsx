import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/global.css'
import { fetchFunction } from "../api/apiFetch"
const FairInfo = () => {
  const [fairs, setFairs] = useState([]);

  useEffect(() => {
    const fetchFairs = async () => {
      try {
        const response = await axios.get('/api/fairs');
        setFairs(response.data);
      } catch (error) {
        console.error('Error al obtener la información de las ferias:', error);
      }
    };

    fetchFairs();
  }, []);

  return (
    <div>
      <h2>Información de Ferias</h2>
      <ul>
        {fairs.map(fair => (
          <li key={fair._id}>
            <h3>{fair.name}</h3>
            <p>{fair.description}</p>
            <p>{fair.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FairInfo;
