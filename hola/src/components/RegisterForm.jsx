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
        const response = await fetchFunction('auth/register', 'POST', userData);
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">Registrar Usuario</h2>
        <p className="text-center text-gray-600">Completa el formulario para crear una cuenta.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Nombre"
              required
            />
            <label
              htmlFor="name"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Nombre
            </label>
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Apellido"
              required
            />
            <label
              htmlFor="lastName"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Apellido
            </label>
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
          </div>

          <div className="relative">
            <input
              type="text"
              name="dni"
              value={userData.dni}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="DNI"
              required
            />
            <label
              htmlFor="dni"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              DNI
            </label>
            {errors.dni && <p className="text-red-500 text-sm">{errors.dni}</p>}
          </div>

          <div className="relative">
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Domicilio"
              required
            />
            <label
              htmlFor="address"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Domicilio
            </label>
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          <div className="relative">
            <input
              type="date"
              name="birthDate"
              value={userData.birthDate}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Fecha de Nacimiento"
              required
            />
            <label
              htmlFor="birthDate"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Fecha de Nacimiento
            </label>
            {errors.birthDate && <p className="text-red-500 text-sm">{errors.birthDate}</p>}
          </div>

          <div className="relative">
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Celular"
              required
            />
            <label
              htmlFor="phone"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Celular
            </label>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Email"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Email
            </label>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Contraseña"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Contraseña
            </label>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div className="relative">
            <select
              name="role"
              value={userData.role}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="admin">Admin</option>
              <option value="user">Usuario</option>
              <option value="entrepreneur">Emprendedor</option>
            </select>
            <label
              htmlFor="role"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Rol
            </label>
          </div>

          {/* Campos adicionales para emprendedores */}
          {userData.role === 'entrepreneur' && (
            <>
              <div className="relative">
                <input
                  type="text"
                  name="businessName"
                  value={userData.businessName}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
                  placeholder="Nombre del Emprendimiento"
                />
                <label
                  htmlFor="businessName"
                  className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
                >
                  Nombre del Emprendimiento
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="businessCategory"
                  value={userData.businessCategory}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
                  placeholder="Categoría del Emprendimiento"
                />
                <label
                  htmlFor="businessCategory"
                  className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
                >
                  Categoría del Emprendimiento
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="businessPhone"
                  value={userData.businessPhone}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
                  placeholder="Teléfono del Emprendimiento"
                />
                <label
                  htmlFor="businessPhone"
                  className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
                >
                  Teléfono del Emprendimiento
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="businessAddress"
                  value={userData.businessAddress}
                  onChange={handleChange}
                  className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
                  placeholder="Dirección del Emprendimiento"
                />
                <label
                  htmlFor="businessAddress"
                  className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
                >
                  Dirección del Emprendimiento
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="description"
                  value={userData.description}
                  onChange={handleChange}
                  className="peer h-24 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
                  placeholder="Descripción del Emprendimiento"
                />
                <label
                  htmlFor="description"
                  className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
                >
                  Descripción del Emprendimiento
                </label>
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md shadow-lg transition duration-200"
          >
            Registrar
          </button>

          {message && <p className="text-green-500 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
