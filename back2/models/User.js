import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Definición del esquema de usuario
const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  dni: { type: String, required: true, unique: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: { 
    type: String, 
    enum: ['admin', 'superadmin'], // Roles permitidos
    required: true 
  },
  datosPersonales: {
    domicilio: String,
    fechaNacimiento: Date,
    celular: String,
    email: String,
  },
  datosEmprendimiento: {
    nombreEmprendimiento: String,
    rubro: String,
    celular: String,
    descripcion: String,
    domicilio: String
  }
});

// Hook de pre-save para encriptar la contraseña antes de guardar
userSchema.pre('save', async function(next) {
  if (!this.isModified('contraseña')) {
    return next();
  }
  try {
    this.contraseña = await bcrypt.hash(this.contraseña, 12);
    next();
  } catch (error) {
    next(error);
  }
});

// Método para comparar contraseñas
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.contraseña);
};

export default mongoose.model('User', userSchema);