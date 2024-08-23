
import { Route, Routes } from "react-router-dom";
import App from "../pages/App";
import LoginForm from "../pages/Login";
import NavBar from "../components/NavBarEmp.components";
import PrivateRoute from "./Private.routes";
import { Noticias } from "../pages/Noticias";
import Categories from "../components/PublicarArt.components";
import Emprendimiento from "../pages/Empredimientos";
import NavBar2 from "../components/NavBar2.components";
import RegisterForm from "../pages/RegistroUser";
import NavBarAdm from "../components/NavBarAdm.components";

const MainRoutes = () => {
  const isAuthenticated = true; // Aquí iría tu lógica de autenticación real

  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/publicar" element={<Categories />} />
        <Route path="/emprendimiento" element={<Emprendimiento />} />
        <Route path="/productos" element={<NavBar2 />} />
        <Route path="/registro" element={<RegisterForm />} />
        <Route path="/adm" element={<NavBarAdm />} />


        
        {/* Ruta privada */}
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/navbar" element={<NavBar />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
