// controllers/userController.js
import User from '../models/User.js';
import Business from '../models/Business.js';
import bcrypt from 'bcrypt';

// Registrar superadmin
export const registerSuperadmin = async (req, res) => {
  const { name, lastName, dni, address, birthDate, phone, email, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const superadmin = new User({
      name, lastName, dni, address, birthDate, phone, email, password: hashedPassword, role: 'superadmin'
    });
    await superadmin.save();
    res.status(201).send({ message: 'Superadmin registrado exitosamente.' });
  } catch (error) {
    res.status(500).send({ message: 'Error al registrar el superadmin.' });
  }
};

// Registrar admin
export const registerAdmin = async (req, res) => {
  const { name, lastName, dni, address, birthDate, phone, email, password, business } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = new User({
      name, lastName, dni, address, birthDate, phone, email, password: hashedPassword, role: 'admin', business
    });
    await admin.save();
    res.status(201).send({ message: 'Admin registrado exitosamente.' });
  } catch (error) {
    res.status(500).send({ message: 'Error al registrar el admin.' });
  }
};

// Crear negocio
export const createBusiness = async (req, res) => {
  const { name, category, phone, address, description } = req.body;

  try {
    const business = new Business({ name, category, phone, address, description });
    await business.save();
    res.status(201).send({ message: 'Negocio creado exitosamente.', business });
  } catch (error) {
    res.status(500).send({ message: 'Error al crear el negocio.' });
  }
};

export default {
  registerSuperadmin,
  registerAdmin,
  createBusiness
};
