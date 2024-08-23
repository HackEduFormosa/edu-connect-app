// routes/dashboard.Routes.js
import express from 'express';
import { getDashboardData } from '../controllers/dashboardController.js';

const router = express.Router();

// Ruta para obtener datos del dashboard
router.get('/', getDashboardData);

export default router;
