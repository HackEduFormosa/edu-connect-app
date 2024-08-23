import { Footer } from '../components/Footer.components';
import { Header } from '../components/Header.components';
import logo from "../assets/images/image1.png";
import imagen1 from '../assets/images/image5.png';



function App() {
  return (
    <>
      <Header />
      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <h3 className="text-5xl font-semibold text-gray-800">
                ¡Descubre lo que Formosa tiene para ofrecer!
              </h3>
              <p className="max-w-md mt-4 text-gray-600">
                Conectamos a emprendedores formoseños con su comunidad, facilitando el crecimiento de negocios y la promoción de productos y servicios únicos.
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
              Todos los emprendimientos de Formosa
            </h2>
          </div>

          <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
          <div  className="bg-white rounded-lg shadow-md overflow-hidden">
                 <img src={imagen1} alt="Noticia Imagen" className="w-full h-64 object-cover" />
                      <div className="p-6">
                          <h3 className="text-2xl font-bold mb-4">Las Brujas Moda</h3>
                              <p className="text-gray-700">Empredimiento de ropa de damas</p>
                            <a href="/emprendimiento" className="block text-blue-600 hover:underline mt-4">Leer más 🚀</a>
                           </div>
          </div>

          <div  className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={imagen1} alt="Noticia Imagen" className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-4">Hecho con Amor</h3>
                                    <p className="text-gray-700">Accesorios hecho a mano</p>
                                    <a href="/emprendimiento" className="block text-blue-600 hover:underline mt-4">Leer más 🚀</a>
                                </div>
                            </div>

                            <div  className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img src={imagen1} alt="Noticia Imagen" className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-4">Coronadas</h3>
                                    <p className="text-gray-700">Pulseras hecho a mano</p>
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
