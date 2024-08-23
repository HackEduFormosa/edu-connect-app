// backend/controllers/authController.js
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Genera un token JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
export const registerUser = async (req, res) => {
  const {
    nombre,
    apellido,
    dni,
    correo,
    contraseña,
    rol,
    datosPersonales,
    datosEmprendimiento
  } = req.body;

  try {
    // Verificar si el correo ya está en uso
    const existingUser = await User.findOne({ correo });
    if (existingUser) {
      return res.status(400).json({ mensaje: 'El correo ya está en uso' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 12);

    // Crear el nuevo usuario
    const newUser = new User({
      nombre,
      apellido,
      dni,
      correo,
      contraseña: hashedPassword,
      rol,
      datosPersonales,
      datosEmprendimiento,
    });

    // Guardar el usuario en la base de datos
    const createdUser = await newUser.save();

    // Enviar la respuesta con el token JWT
    res.status(201).json({
      _id: createdUser._id,
      nombre: createdUser.nombre,
      apellido: createdUser.apellido,
      dni: createdUser.dni,
      correo: createdUser.correo,
      rol: createdUser.rol,
      token: generateToken(createdUser._id),
    });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
export const authUser = async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    // Buscar al usuario por correo
    const user = await User.findOne({ correo });
    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(contraseña, user.contraseña);
    if (!isMatch) {
      return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
    }

    // Enviar la respuesta con el token JWT
    res.json({
      _id: user._id,
      nombre: user.nombre,
      apellido: user.apellido,
      correo: user.correo,
      rol: user.rol,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};
