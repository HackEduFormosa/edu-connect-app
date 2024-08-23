import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../pages/App";
import LoginForm from "../pages/Login";
import NavBar from "../components/NavBarEmp.components";
import PrivateRoute from "./Private.routes";
import { Noticias } from "../pages/Noticias";

const MainRoutes = () => {
  const isAuthenticated = true; // Aquí iría tu lógica de autenticación real

  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/noticias" element={<Noticias />} />
        
        {/* Ruta privada */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/navbar" element={<NavBar />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
