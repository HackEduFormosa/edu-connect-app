import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    name: '',
    lastName: '',
    dni: '',
    address: '',
    birthDate: '',
    phone: '',
    email: '',
    password: '',
    role: 'admin',
    businessName: '',
    businessCategory: '',
    businessPhone: '',
    businessAddress: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple de formulario
    let formErrors = {};
    if (!userData.name) formErrors.name = 'El nombre es requerido';
    if (!userData.email) formErrors.email = 'El email es requerido';
    if (!userData.password) formErrors.password = 'La contraseña es requerida';
    // Agregar más validaciones según sea necesario

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Aquí va la lógica para enviar los datos al servidor
      // Por ejemplo, usando fetch o axios

      // Si el registro es exitoso
      setMessage('Registro exitoso!');
      navigate('/some-route'); // Redirige a la página deseada
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
            <input
              type="text"
              name="businessName"
              value={userData.businessName}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Nombre del Negocio"
            />
            <label
              htmlFor="businessName"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Nombre del Negocio
            </label>
            {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}
          </div>

          <div className="relative">
            <input
              type="text"
              name="businessCategory"
              value={userData.businessCategory}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Categoría del Negocio"
            />
            <label
              htmlFor="businessCategory"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Categoría del Negocio
            </label>
            {errors.businessCategory && <p className="text-red-500 text-sm">{errors.businessCategory}</p>}
          </div>

          <div className="relative">
            <input
              type="text"
              name="businessPhone"
              value={userData.businessPhone}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Teléfono del Negocio"
            />
            <label
              htmlFor="businessPhone"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Teléfono del Negocio
            </label>
            {errors.businessPhone && <p className="text-red-500 text-sm">{errors.businessPhone}</p>}
          </div>

          <div className="relative">
            <input
              type="text"
              name="businessAddress"
              value={userData.businessAddress}
              onChange={handleChange}
              className="peer h-10 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Dirección del Negocio"
            />
            <label
              htmlFor="businessAddress"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Dirección del Negocio
            </label>
            {errors.businessAddress && <p className="text-red-500 text-sm">{errors.businessAddress}</p>}
          </div>

          <div className="relative">
            <textarea
              name="description"
              value={userData.description}
              onChange={handleChange}
              className="peer h-24 w-full border-b-2 border-gray-300 bg-transparent text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              placeholder="Descripción del Negocio"
            />
            <label
              htmlFor="description"
              className="absolute left-0 -top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-500 peer-focus:text-sm"
            >
              Descripción del Negocio
            </label>
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="admin"
              name="role"
              value="admin"
              checked={userData.role === 'admin'}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="admin" className="mr-4">Admin</label>
            <input
              type="radio"
              id="user"
              name="role"
              value="user"
              checked={userData.role === 'user'}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="user">Usuario</label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Registrarse
          </button>
          
          {message && <p className="text-green-500 text-center">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
