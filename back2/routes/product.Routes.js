import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import protect from '../middlewares/authMiddleware.js'; // Importar middleware para proteger las rutas

const router = express.Router();

// Rutas de productos
router.get('/', getProducts); // Ruta pública para obtener todos los productos
router.get('/:id', getProductById); // Ruta pública para obtener un producto por ID
router.post('/', protect, createProduct); // Ruta protegida para crear un producto
router.put('/:id', protect, updateProduct); // Ruta protegida para actualizar un producto
router.delete('/:id', protect, deleteProduct); // Ruta protegida para eliminar un producto

export default router;
