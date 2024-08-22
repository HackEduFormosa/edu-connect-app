import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../pages/App"
import LoginForm from "../pages/Login";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
