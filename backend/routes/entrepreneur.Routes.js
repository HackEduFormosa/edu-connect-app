import express from 'express';
import {
    createEntrepreneur,
    getAllEntrepreneurs,
    getEntrepreneurById,
    updateEntrepreneur,
    deleteEntrepreneur
} from '../controllers/entrepreneurController.js';

const router = express.Router();

router.post('/', createEntrepreneur);
router.get('/', getAllEntrepreneurs);
router.get('/:id', getEntrepreneurById);
router.put('/:id', updateEntrepreneur);
router.delete('/:id', deleteEntrepreneur);

export default router;
