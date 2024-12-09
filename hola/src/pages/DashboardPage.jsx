import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import '../styles/global.css';

// Utilidad para calcular edad
const calculateAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

// Utilidad para agrupar datos por mes
const groupByMonth = (data) => {
  const months = {};
  data.forEach(item => {
    const month = new Date(item.fechaNacimiento).toLocaleString('default', { month: 'long' });
    months[month] = (months[month] || 0) + 1;
  });
  return Object.keys(months).map(month => ({ name: month, count: months[month] }));
};

// Utilidad para agrupar datos por grupo etáreo
const groupByAgeRange = (data) => {
  const ageRanges = {
    '18-25': 0,
    '26-35': 0,
    '36-45': 0,
    '46-60': 0,
    '60+': 0,
  };

  data.forEach(item => {
    const age = calculateAge(item.fechaNacimiento);
    if (age <= 25) ageRanges['18-25']++;
    else if (age <= 35) ageRanges['26-35']++;
    else if (age <= 45) ageRanges['36-45']++;
    else if (age <= 60) ageRanges['46-60']++;
    else ageRanges['60+']++;
  });

  return Object.keys(ageRanges).map(range => ({ name: range, count: ageRanges[range] }));
};

const Dashboard = () => {
  const [emprendedoresPorMes, setEmprendedoresPorMes] = useState([]);
  const [emprendedoresPorEdad, setEmprendedoresPorEdad] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/ruta/a/formosaemprende_db.usersgenerate.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Datos recibidos:', data); // Verifica los datos aquí

        // Configurar datos para los gráficos
        setEmprendedoresPorMes(groupByMonth(data));
        setEmprendedoresPorEdad(groupByAgeRange(data));
      } catch (err) {
        console.error('Failed to fetch data:', err.message);
      }
    };

    fetchData();
  }, []);

  const emprendedoresPorMesData = {
    labels: emprendedoresPorMes.map(item => item.name),
    datasets: [
      {
        label: 'Emprendedores por Mes',
        data: emprendedoresPorMes.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const emprendedoresPorEdadData = {
    labels: emprendedoresPorEdad.map(item => item.name),
    datasets: [
      {
        label: 'Emprendedores por Grupo Etáreo',
        data: emprendedoresPorEdad.map(item => item.count),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard de Emprendedores</h2>

      <div className="chart-container">
        <h3>Cantidad de Emprendedores por Mes</h3>
        <Bar data={emprendedoresPorMesData} options={{ scales: { y: { beginAtZero: true } } }} />
      </div>

      <div className="chart-container">
        <h3>Cantidad de Emprendedores por Grupo Etáreo</h3>
        <Bar data={emprendedoresPorEdadData} options={{ scales: { y: { beginAtZero: true } } }} />
      </div>
    </div>
  );
};

export default Dashboard;
