import Reservation from '../models/Reservation.js';
import Product from '../models/Product.js';
import User from '../models/User.js';

// Crear una reserva
export const createReservation = async (req, res) => {
    const { userId, productId } = req.body;

  try {
    // Verificar que el usuario y el producto existen
    const user = await User.findById(userId);
    const product = await Product.findById(productId);

    if (!user || !product) {
      return res.status(404).json({ message: 'Usuario o producto no encontrado' });
    }

    // Crear la reserva
    const reservation = new Reservation({ userId, productId });
    await reservation.save();

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todas las reservas
export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('userId').populate('productId');
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
