import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde .env

const connectDB = async () => {
  try {
    // Conectar a MongoDB usando la URI de conexión almacenada en las variables de entorno
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // Analiza la URL de conexión de forma más moderna
      useUnifiedTopology: true, // Usa el motor de topología unificado para las conexiones
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Termina el proceso si hay un error
  }
};

export default connectDB;
