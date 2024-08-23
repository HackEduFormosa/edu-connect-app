import express from 'express';
import helmet from 'helmet'; // Importa helmet
import connectDB from './config/database.js';
import authRoutes from './routes/auth.Routes.js'; 
import productRoutes from './routes/product.Routes.js';
import businessRoutes from './routes/business.Routes.js'; 
import cors from 'cors';
import dotenv from 'dotenv';
import testRoutes from './routes/test.Routes.js';

dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para el análisis de JSON
app.use(express.json());

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3500' // Cambia esto si tu frontend está en otro puerto o dominio
}));

// Configuración de Helmet para CSP
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", 'http://localhost:3500'], // Permitir imágenes del mismo origen y del puerto 3000
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["'self'"]
    }
  }
}));

// Rutas
app.use('/api/auth', authRoutes); 
app.use('/api/products', productRoutes); 
app.use('/api/businesses', businessRoutes); 
app.use('/api', testRoutes);

// Ruta de prueba para verificar la conexión
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is connected!' });
});

// Configuración del puerto y inicio del servidor
const PORT = process.env.PORT || 3500; // Cambia esto si tu servidor corre en un puerto diferente
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
