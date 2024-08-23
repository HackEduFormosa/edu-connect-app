import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet'; // Para seguridad adicional
import connectDB from './config/database.js';
import authRoutes from './routes/auth.Routes.js';
import productRoutes from './routes/product.Routes.js';
import reservationRoutes from './routes/reservation.Routes.js';
import fairRoutes from './routes/fair.Routes.js';
import userRoutes from './routes/user.Routes.js';
import dashboardRoutes from './routes/dashboard.Routes.js';
import protect from './middlewares/authMiddleware.js';
import seedData from './scripts/init.js';

dotenv.config();

const app = express();

// Middleware para manejar CORS
app.use(cors());

// Middleware para seguridad adicional
app.use(helmet());

// Middleware para manejar JSON
app.use(express.json());

// Conectar a la base de datos
connectDB().then(async () => {
  // Ejecutar la inicialización de datos
  await seedData();

  // Rutas públicas
  app.use('/api/auth', authRoutes); 
  app.use('/api/products', productRoutes);
  app.use('/api/reservations', reservationRoutes);
  app.use('/api/fairs', fairRoutes);
  app.use('/api/users', userRoutes); 
  app.use('/api/dashboard', dashboardRoutes);

  // Ruta protegida de ejemplo (requiere autenticación)
  app.use('/api/protected', protect, (req, res) => {
    console.log('Protected route accessed');
    res.send('Esta es una ruta protegida');
  });

  // Middleware para registrar solicitudes
  app.use((req, res, next) => {
    console.log(`Request method: ${req.method}, Request URL: ${req.url}`);
    next();
  });

  // Middleware para manejar rutas no encontradas (404)
  app.use((req, res, next) => {
    res.status(404).json({ error: 'Recurso no encontrado' });
  });

  // Middleware para manejar errores generales
  app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(err.status || 500).json({ error: err.message || 'Error interno del servidor' });
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Error connecting to MongoDB:', error.message);
});
