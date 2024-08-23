import Entrepreneur from '../models/Entrepreneur.js';
import Business from '../models/Business.js';

// Crear un nuevo emprendedor
export const createEntrepreneur = async (req, res) => {
    const { firstName, lastName, email, phone, address, businessId, userId } = req.body;

    try {
        const business = await Business.findById(businessId);
        if (!business) {
            return res.status(404).json({ message: 'Emprendimiento no encontrado' });
        }

        const entrepreneur = new Entrepreneur({
            firstName,
            lastName,
            email,
            phone,
            address,
            business: businessId,
            user: userId
        });

        await entrepreneur.save();
        res.status(201).json(entrepreneur);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el emprendedor', error: error.message });
    }
};

// Obtener todos los emprendedores
export const getAllEntrepreneurs = async (req, res) => {
    try {
        const entrepreneurs = await Entrepreneur.find().populate('business').populate('user');
        res.status(200).json(entrepreneurs);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los emprendedores', error: error.message });
    }
};

// Obtener un emprendedor por ID
export const getEntrepreneurById = async (req, res) => {
    const { id } = req.params;

    try {
        const entrepreneur = await Entrepreneur.findById(id).populate('business').populate('user');
        if (!entrepreneur) {
            return res.status(404).json({ message: 'Emprendedor no encontrado' });
        }

        res.status(200).json(entrepreneur);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el emprendedor', error: error.message });
    }
};

// Actualizar un emprendedor
export const updateEntrepreneur = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, phone, address, businessId } = req.body;

    try {
        const business = await Business.findById(businessId);
        if (!business) {
            return res.status(404).json({ message: 'Emprendimiento no encontrado' });
        }

        const entrepreneur = await Entrepreneur.findByIdAndUpdate(id, {
            firstName,
            lastName,
            email,
            phone,
            address,
            business: businessId
        }, { new: true });

        if (!entrepreneur) {
            return res.status(404).json({ message: 'Emprendedor no encontrado' });
        }

        res.status(200).json(entrepreneur);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el emprendedor', error: error.message });
    }
};

// Eliminar un emprendedor
export const deleteEntrepreneur = async (req, res) => {
    const { id } = req.params;

    try {
        const entrepreneur = await Entrepreneur.findByIdAndDelete(id);
        if (!entrepreneur) {
            return res.status(404).json({ message: 'Emprendedor no encontrado' });
        }

        res.status(200).json({ message: 'Emprendedor eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el emprendedor', error: error.message });
    }
};
