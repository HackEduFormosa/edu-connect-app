import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import sequelize from './config/database.js';

// Importar rutas
import authRoutes from './routes/auth.Routes.js';
import userRoutes from './routes/user.Routes.js';
import moduleRoutes from './routes/module.Routes.js';
import progressRoutes from './routes/progress.Routes.js';

// Configuración de dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/learning-modules', moduleRoutes);
app.use('/api/progress', progressRoutes);

// Iniciar el servidor
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
});

// Exportar módulos para uso en otros archivos
export { jwt, bcrypt };
