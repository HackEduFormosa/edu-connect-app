import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AdminPanelPage from './pages/AdminPanelPage';
import ProductListPage from './pages/ProductListPage';
import ReservationPage from './pages/ReservationPage';
import FairInfoPage from './pages/FairInfoPage';
import LandingPage from './pages/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/index.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><AdminPanelPage /></ProtectedRoute>} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/reserve" element={<ProtectedRoute><ReservationPage /></ProtectedRoute>} />
          <Route path="/fair-info" element={<FairInfoPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
