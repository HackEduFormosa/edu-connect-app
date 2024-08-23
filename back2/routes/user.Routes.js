import express from 'express';
import { registerUser, getUserProfile, updateUserProfile } from '../controllers/userControllers.js';
import protect from '../middlewares/authMiddleware.js'; // Asegúrate de que la ruta es correcta

const router = express.Router();

// Ruta para registrar usuarios (pública)
router.post('/register', registerUser);

// Ruta para obtener el perfil del usuario (protegida)
router.get('/profile', protect, getUserProfile);

// Ruta para actualizar el perfil del usuario (protegida)
router.put('/profile', protect, updateUserProfile);

export default router;

