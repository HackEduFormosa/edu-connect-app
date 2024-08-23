import React from 'react';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchFunction } from "../api/apiFetch"

const ProductListPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Lista de Productos</h2>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default ProductListPage;
