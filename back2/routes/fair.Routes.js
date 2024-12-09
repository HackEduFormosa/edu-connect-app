import express from 'express';
import { createFair, getFairs } from '../controllers/fairControllers.js';

const router = express.Router();

// Crear una nueva feria
router.post('/', createFair);

// Obtener todas las ferias
router.get('/', getFairs);

export default router;
