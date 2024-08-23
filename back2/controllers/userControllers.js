import User from '../models/User.js';
import bcrypt from 'bcryptjs';

// @desc    Register a new user
// @route   POST /api/users/profile
// @access  Public
export const registerUser = async (req, res) => {
  const { nombre, apellido, dni, correo, contraseña, rol, datosPersonales, datosEmprendimiento } = req.body;

  try {
    // Verifica si el usuario ya existe
    const existingUser = await User.findOne({ correo }).exec();
    if (existingUser) {
      return res.status(400).json({ mensaje: 'El correo ya está en uso' });
    }

    // Crea un nuevo usuario
    const user = new User({
      nombre,
      apellido,
      dni,
      correo,
      contraseña: await bcrypt.hash(contraseña, 10), // Encripta la contraseña
      rol,
      datosPersonales,
      datosEmprendimiento
    });

    // Guarda el usuario en la base de datos
    const savedUser = await user.save();

    res.status(201).json({
      _id: savedUser._id,
      nombre: savedUser.nombre,
      apellido: savedUser.apellido,
      dni: savedUser.dni,
      correo: savedUser.correo,
      rol: savedUser.rol,
      datosPersonales: savedUser.datosPersonales,
      datosEmprendimiento: savedUser.datosEmprendimiento,
    });
  } catch (error) {
    console.error('Error al registrar el usuario:', error.message);
    res.status(500).json({ mensaje: 'Error al registrar el usuario.' });
  }
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(400).json({ mensaje: 'ID de usuario no proporcionado' });
    }

    // Encuentra al usuario por ID
    const user = await User.findById(req.user.id).exec();
    
    // Verifica si el usuario existe
    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    
    // Devuelve los datos del usuario
    res.json({
      _id: user._id,
      nombre: user.nombre,
      apellido: user.apellido,
      dni: user.dni,
      correo: user.correo,
      rol: user.rol,
      datosPersonales: user.datosPersonales,
      datosEmprendimiento: user.datosEmprendimiento,
    });
  } catch (error) {
    // Manejo de errores
    console.error('Error al obtener el perfil del usuario:', error.message);
    res.status(500).json({ mensaje: 'Error al obtener el perfil del usuario.' });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = async (req, res) => {
  const { nombre, apellido, dni, correo, datosPersonales, datosEmprendimiento, contraseña } = req.body;

  try {
    if (!req.user || !req.user.id) {
      return res.status(400).json({ mensaje: 'ID de usuario no proporcionado' });
    }

    // Encuentra al usuario por ID
    const user = await User.findById(req.user.id).exec();
    
    // Verifica si el usuario existe
    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    if (correo && correo !== user.correo) {
      const existingUser = await User.findOne({ correo }).exec();
      if (existingUser) {
        // Muestra los detalles del usuario existente en la consola
        console.log('Usuario con correo existente:', existingUser);
        return res.status(400).json({ mensaje: 'El correo ya está en uso' });
      }
    }

    // Actualiza los campos del usuario
    user.nombre = nombre || user.nombre;
    user.apellido = apellido || user.apellido;
    user.dni = dni || user.dni;
    user.correo = correo || user.correo;
    user.datosPersonales = datosPersonales || user.datosPersonales;
    user.datosEmprendimiento = datosEmprendimiento || user.datosEmprendimiento;

    // Si se proporciona una nueva contraseña, encripta y actualiza
    if (contraseña) {
      user.contraseña = await bcrypt.hash(contraseña, 10);
    }

    // Guarda el usuario actualizado en la base de datos
    const updatedUser = await user.save();

    // Devuelve los datos actualizados del usuario
    res.json({
      _id: updatedUser._id,
      nombre: updatedUser.nombre,
      apellido: updatedUser.apellido,
      dni: updatedUser.dni,
      correo: updatedUser.correo,
      datosPersonales: updatedUser.datosPersonales,
      datosEmprendimiento: updatedUser.datosEmprendimiento,
    });
  } catch (error) {
    // Manejo de errores
    console.error('Error al actualizar el perfil del usuario:', error.message);
    res.status(500).json({ mensaje: 'Error al actualizar el perfil del usuario.' });
  }
};
