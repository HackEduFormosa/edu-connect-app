import React from 'react';
import { Header } from '../components/Header.components';
import { Footer } from '../components/Footer.components';
import imagen3 from '../assets/images/image5.png';

export const Noticias = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">📰 Noticias de Ferias Emprendedores</h1>
                <p className="mt-2 text-lg text-gray-600">
                    ¿Cuándo y dónde se realizan las ferias? <br />
                    ¡Entérate de todo aquí!
                </p>
            </div>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center">✨ Ferias Locales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div  className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={imagen3} alt="Noticia Imagen" className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-4">Feria en la Plaza San Martin</h3>
                                    <p className="text-gray-700">Descripción breve de la noticia para captar la atención del lector.</p>
                                    <a href="#" className="block text-blue-600 hover:underline mt-4">Leer más 🚀</a>
                                </div>
                            </div>
                            <div  className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={imagen3} alt="Noticia Imagen" className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-4">Feria en el Ferro</h3>
                                    <p className="text-gray-700">Descripción breve de la noticia para captar la atención del lector.</p>
                                    <a href="#" className="block text-blue-600 hover:underline mt-4">Leer más 🚀</a>
                                </div>
                            </div>
                            <div  className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={imagen3} alt="Noticia Imagen" className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-4">Feria en la Avenida</h3>
                                    <p className="text-gray-700">Descripción breve de la noticia para captar la atención del lector.</p>
                                    <a href="#" className="block text-blue-600 hover:underline mt-4">Leer más 🚀</a>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};
