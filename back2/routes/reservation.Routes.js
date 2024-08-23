import express from 'express';
import { createReservation, getAllReservations } from '../controllers/reservationController.js';

const router = express.Router();

// Crear una reserva
router.post('/', createReservation);

// Obtener todas las reservas
router.get('/', getAllReservations);

export default router;
