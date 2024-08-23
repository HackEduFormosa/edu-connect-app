import express from 'express';
import UserControllers from '../controllers/userControllers.js';  // Verifica la ruta y la exportación

const router = express.Router();

// Verifica que estas funciones están definidas en UserControllers
router.post('/register-superadmin', UserControllers.registerSuperadmin);
router.post('/register-admin', UserControllers.registerAdmin);
router.post('/create-business', UserControllers.createBusiness);

export default router;
