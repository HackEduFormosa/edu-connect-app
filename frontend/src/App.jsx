import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Actualiza el estado al iniciar sesión
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Actualiza el estado al cerrar sesión
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            {isAuthenticated ? (
              <>
                <li><Link to="/profile">Perfil</Link></li>
                <li><button onClick={handleLogout}>Cerrar sesión</button></li>
              </>
            ) : (
              <li><Link to="/login">Iniciar sesión</Link></li>
            )}
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/login" element={<AuthForm isLogin={true} />} />
            <Route path="/register" element={<AuthForm isLogin={false} />} />
            <Route 
              path="/profile" 
              element={
                <PrivateRoute isAuthenticated={isAuthenticated}>
                  <Profile />
                </PrivateRoute>
              } 
            />
            <Route path="/" element={<h1>Bienvenido a la Aplicación</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
