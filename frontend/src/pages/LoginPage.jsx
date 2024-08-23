import React from 'react';
import LoginForm from '../components/LoginForm'; 
const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Welcome to FormosaEmprende</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
