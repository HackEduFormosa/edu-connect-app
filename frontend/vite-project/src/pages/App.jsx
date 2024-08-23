import { Footer } from '../components/Footer.components';
import { Header } from '../components/Header.components';
import logo from "../assets/images/image11.jpg";
import imagen1 from '../assets/images/image8.png';
import imagen2 from '../assets/images/image7.png';
import imagen3 from '../assets/images/image9.png';



function App() {
  return (
    <>
      <Header />
      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <h3 className="text-5xl font-semibold text-gray-800">
                MERCADO COMUNITARIO DE EMPRENDEDORES
              </h3>
              <p className="max-w-md mt-4 text-gray-600">
                La Subsecretaría de Empleo brinda este espacio para que los emprendedores y emprendedoras puedan dar a conocer sus productos, además brindamos capacitaciones y asesoramientos  totalmente gratuitos.
              </p>
            </div>

            <div className="mt-10 md:mt-0 md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-4xl">
                  <img
                    className="object-cover object-center w-screen rounded-md shadow md:ml-8"
                    src={logo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="md:flex md:justify-between">
            <h2 className="text-3xl font-semibold text-gray-800">
              Emprendimientos
            </h2>
          </div>

          <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div  className="bg-white rounded-lg shadow-md overflow-hidden">
                 <img src={imagen2} alt="Noticia Imagen" className="w-full h-64 object-cover" />
                      <div className="p-6">
                          <h3 className="text-2xl font-bold mb-4">Brujas Mayorista</h3>
                              <p className="text-gray-700">Ropa - bazar - calzados</p>
                            <a href="/emprendimiento" className="block text-blue-600 hover:underline mt-4">Leer más 🚀</a>
                           </div>
          </div>

          <div  className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={imagen1} alt="Noticia Imagen" className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-4">Hecho con Amor❤️</h3>
                                    <p className="text-gray-700">Accesorios hechos a mano</p>
                                    <a href="/emprendimiento" className="block text-blue-600 hover:underline mt-4">Leer más 🚀</a>
                                </div>
                            </div>

                            <div  className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={imagen3} alt="Noticia Imagen" className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-4">Coronadas</h3>
                                    <p className="text-gray-700">Ropa - bazar - lencería</p>
                                    <a href="/emprendimiento" className="block text-blue-600 hover:underline mt-4">Leer más 🚀</a>
                                </div>
                            </div>
                          
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
