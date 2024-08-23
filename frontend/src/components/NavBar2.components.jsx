import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api'; // Asegúrate de que la ruta sea correcta
import imagen1 from '../assets/images/image3.png';
import imagen2 from '../assets/images/image4.png';
import imagen3 from '../assets/images/image5.png';
import imagen4 from '../assets/images/image6.png';

function NavBar2() {
  const [products, setProducts] = useState([]);

  // Paso 2: Usa useEffect para obtener los productos cuando el componente se monte
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="mt-16 container mx-auto px-6 py-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Productos Locales!!</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product, index) => (
          <div key={product.id} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div
              className="flex items-end justify-end h-56 w-full bg-cover"
              style={{ backgroundImage: `url(${product.image || imagen1})` }} // Usa la imagen del producto si está disponible, de lo contrario una imagen predeterminada
            >
              <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </button>
            </div>
            <div className="px-5 py-3">
              <h3 className="text-gray-700 uppercase">{product.name}</h3>
              <span className="text-gray-500 mt-2">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NavBar2;
