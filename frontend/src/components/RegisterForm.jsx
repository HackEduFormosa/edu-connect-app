// src/components/RegisterForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchFunction } from '../api/apiFetch'; // Ajusta la ruta según la estructura de tu proyecto

const RegisterForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    dni: '',
    address: '',
    birthDate: '',
    phone: '',
    email: '',
    password: '',
    role: 'admin', // Valor por defecto como 'admin' (emprendedor)
    businessName: '',
    businessCategory: '',
    businessPhone: '',
    businessAddress: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Para redirigir al usuario después del registro

  // Maneja el cambio de valores en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  // Valida los campos del formulario
  const validate = () => {
    let tempErrors = {};
    tempErrors.name = userData.name ? '' : 'Este campo es obligatorio.';
    tempErrors.lastName = userData.lastName ? '' : 'Este campo es obligatorio.';
    tempErrors.dni = userData.dni ? '' : 'Este campo es obligatorio.';
    tempErrors.address = userData.address ? '' : 'Este campo es obligatorio.';
    tempErrors.birthDate = userData.birthDate ? '' : 'Este campo es obligatorio.';
    tempErrors.phone = userData.phone ? '' : 'Este campo es obligatorio.';
    tempErrors.email = userData.email
      ? /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(userData.email)
        ? ''
        : 'Email no válido.'
      : 'Este campo es obligatorio.';
    tempErrors.password = userData.password ? '' : 'Este campo es obligatorio.';

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetchFunction('users/register', 'POST', userData);
        setMessage('Usuario registrado exitosamente. Redirigiendo al inicio de sesión...');
        setErrors({});
        setTimeout(() => {
          navigate('/login'); // Redirige al login después de un registro exitoso
        }, 2000); // Redirige después de 2 segundos para mostrar el mensaje
      } catch (error) {
        // Manejo de errores
        setMessage('Error al registrar el usuario. Inténtelo de nuevo.');
        console.error('Error registrando usuario:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Usuario</h2>
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p>{errors.name}</p>}
      </label>
      <label>
        Apellido:
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </label>
      <label>
        DNI:
        <input
          type="text"
          name="dni"
          value={userData.dni}
          onChange={handleChange}
          required
        />
        {errors.dni && <p>{errors.dni}</p>}
      </label>
      <label>
        Domicilio:
        <input
          type="text"
          name="address"
          value={userData.address}
          onChange={handleChange}
          required
        />
        {errors.address && <p>{errors.address}</p>}
      </label>
      <label>
        Fecha de Nacimiento:
        <input
          type="date"
          name="birthDate"
          value={userData.birthDate}
          onChange={handleChange}
          required
        />
        {errors.birthDate && <p>{errors.birthDate}</p>}
      </label>
      <label>
        Celular:
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p>{errors.phone}</p>}
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p>{errors.email}</p>}
      </label>
      <label>
        Contraseña:
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p>{errors.password}</p>}
      </label>
      <label>
        Rol:
        <select
          name="role"
          value={userData.role}
          onChange={handleChange}
        >
          <option value="admin">Emprendedor</option>
          <option value="superadmin">Superadmin</option>
        </select>
      </label>

      {userData.role === 'admin' && (
        <>
          <h3>Datos del Emprendimiento</h3>
          <label>
            Nombre del Emprendimiento:
            <input
              type="text"
              name="businessName"
              value={userData.businessName}
              onChange={handleChange}
            />
          </label>
          <label>
            Rubro:
            <input
              type="text"
              name="businessCategory"
              value={userData.businessCategory}
              onChange={handleChange}
            />
          </label>
          <label>
            Celular del Emprendimiento:
            <input
              type="text"
              name="businessPhone"
              value={userData.businessPhone}
              onChange={handleChange}
            />
          </label>
          <label>
            Domicilio Laboral:
            <input
              type="text"
              name="businessAddress"
              value={userData.businessAddress}
              onChange={handleChange}
            />
          </label>
          <label>
            Descripción:
            <textarea
              name="description"
              value={userData.description}
              onChange={handleChange}
            ></textarea>
          </label>
        </>
      )}

      <button type="submit">Registrar</button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default RegisterForm;
