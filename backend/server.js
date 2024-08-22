import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js'; // Asegúrate de que el archivo se llame 'database.js'
import authRoutes from './routes/auth.Routes.js'; // Asegúrate de que los nombres de archivos coincidan
import productRoutes from './routes/product.Routes.js';
import reservationRoutes from './routes/reservation.Routes.js';
import fairRoutes from './routes/fair.Routes.js';
import protect from './middlewares/authMiddleware.js'; // Asegúrate de que el archivo se llame 'authMiddleware.js'
import seedData from './scripts/init.js'; // Importar el script de inicialización

dotenv.config();

// Conectar a la base de datos
connectDB().then(async () => {
  // Ejecutar la inicialización de datos
  await seedData();

  const app = express();

  // Middleware para manejar JSON
  app.use(express.json());

  // Rutas públicas
  app.use('/api/auth', authRoutes);
  app.use('/api/products', productRoutes);
  app.use('/api/reservations', reservationRoutes);
  app.use('/api/fairs', fairRoutes);

  // Ruta protegida de ejemplo (requiere autenticación)
  app.use('/api/protected', protect, (req, res) => {
    res.send('Esta es una ruta protegida');
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error connecting to MongoDB:', error.message);
});
