// backend/routes/testRoutes.js
import express from 'express';
const router = express.Router();

// Ruta POST para la prueba
router.post('/test', (req, res) => {
  const { data } = req.body; // Suponiendo que envíes un cuerpo con una propiedad 'data'
  
  // Aquí puedes realizar cualquier lógica que necesites con los datos recibidos
  res.json({ message: 'Datos recibidos', data });
});

export default router;
