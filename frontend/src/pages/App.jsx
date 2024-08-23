import { Footer } from '../components/Footer.components';
import { Header } from '../components/Header.components';
import logo from "../assets/images/image1.png";


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
              "FormosaEmprende, pensado para emprendedores como vos"
            </h2>
          </div>

          <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="px-6 py-8 overflow-hidden bg-indigo-900 rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-400">Conexión Directa</h2>
              <p className="max-w-md mt-4 text-gray-50">
                En FormosaEmprende, facilitamos la conexión entre emprendedores locales y sus clientes. Nuestro objetivo es fortalecer el mercado local y crear oportunidades de crecimiento.
              </p>
            </div>

            <div className="px-6 py-8 overflow-hidden bg-indigo-900 rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-400">Control Total</h2>
              <p className="max-w-md mt-4 text-gray-50">
                Te brindamos herramientas prácticas para que tengas control total sobre tus productos y servicios, simplificando la gestión de tu emprendimiento y permitiéndote enfocarte en crecer.
              </p>
            </div>

            <div className="px-6 py-8 overflow-hidden bg-indigo-900 rounded-md shadow-md">
              <h2 className="text-xl font-medium text-gray-400">Promoción y Visibilidad</h2>
              <p className="max-w-md mt-4 text-gray-50">
                Ayudamos a los emprendedores a destacar su oferta en el mercado. Promocionamos productos y servicios locales, aumentando su visibilidad y atrayendo nuevos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
