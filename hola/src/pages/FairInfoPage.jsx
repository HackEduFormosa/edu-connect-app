import React from 'react';
import FairInfo from '../components/FairInfo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFunction } from "../api/apiFetch"

const FairInfoPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Información sobre Ferias</h2>
        <FairInfo />
      </main>
      <Footer />
    </div>
  );
};

export default FairInfoPage;
