import User from '../models/User.js';
import Product from '../models/Product.js';
import Reservation from '../models/Reservation.js';
import Fair from '../models/Fair.js';

const seedData = async () => {
  try {
    // Crear un usuario admin si no existe
    const adminUser = await User.findOne({ email: 'admin@example.com' });
    if (!adminUser) {
      await User.create({
        name: 'Admin',
        email: 'admin@example.com',
        password: 'password',
        isAdmin: true,
      });
    }

    // Crear productos iniciales si no existen
    const products = await Product.find({});
    if (products.length === 0) {
      await Product.create([
        { name: 'Producto 1', price: 100, description: 'Descripción del producto 1' },
        { name: 'Producto 2', price: 200, description: 'Descripción del producto 2' },
      ]);
    }

    // Crear ferias iniciales si no existen
    const fairs = await Fair.find({});
    if (fairs.length === 0) {
      await Fair.create([
        { name: 'Feria de Invierno', date: new Date('2024-06-01'), location: 'Ubicación 1' },
        { name: 'Feria de Verano', date: new Date('2024-12-01'), location: 'Ubicación 2' },
      ]);
    }

    console.log('Datos iniciales creados');
  } catch (error) {
    console.error('Error al crear datos iniciales:', error.message);
  }
};

export default seedData;
