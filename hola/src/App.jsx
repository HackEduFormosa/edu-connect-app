// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProductListPage from './pages/ProductListPage';
import ReservationPage from './pages/ReservationPage';
import FairInfoPage from './pages/FairInfoPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <LoginPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Header />
              <RegisterPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Header />
              <DashboardPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Header />
              <ProductListPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/reservations"
          element={
            <>
              <Header />
              <ReservationPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/fairs"
          element={
            <>
              <Header />
              <FairInfoPage />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
