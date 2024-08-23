import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Para redirigir al usuario después del login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.email = loginData.email
      ? /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(loginData.email)
        ? ''
        : 'Email no válido.'
      : 'Este campo es obligatorio.';
    tempErrors.password = loginData.password ? '' : 'Este campo es obligatorio.';

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('/api/users/login', loginData);
        console.log('Usuario autenticado:', response.data);
        navigate('/dashboard'); // Redirige al dashboard después del login exitoso
      } catch (error) {
        console.error('Error en el login:', error.response.data);
        setLoginError('Email o contraseña incorrectos');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={loginData.email}
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
          value={loginData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p>{errors.password}</p>}
      </label>

      <button type="submit">Iniciar Sesión</button>

      {loginError && <p>{loginError}</p>}

      <p>¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link></p> {/* Redirección al registro */}
    </form>
  );
};

export default LoginForm;
