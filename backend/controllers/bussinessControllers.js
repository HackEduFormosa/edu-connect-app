import Business from '../models/Business.js';

// Crear un nuevo emprendimiento
export const createBusiness = async (req, res) => {
    const { name, description } = req.body;

    try {
        const newBusiness = new Business({
            name,
            description
        });

        await newBusiness.save();
        res.status(201).json(newBusiness);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el emprendimiento', error: error.message });
    }
};

// Obtener todos los emprendimientos
export const getAllBusinesses = async (req, res) => {
    try {
        const businesses = await Business.find();
        res.status(200).json(businesses);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los emprendimientos', error: error.message });
    }
};

// Obtener un emprendimiento por ID
export const getBusinessById = async (req, res) => {
    const { id } = req.params;

    try {
        const business = await Business.findById(id);
        if (!business) {
            return res.status(404).json({ message: 'Emprendimiento no encontrado' });
        }

        res.status(200).json(business);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el emprendimiento', error: error.message });
    }
};

// Actualizar un emprendimiento
export const updateBusiness = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const business = await Business.findByIdAndUpdate(id, {
            name,
            description
        }, { new: true });

        if (!business) {
            return res.status(404).json({ message: 'Emprendimiento no encontrado' });
        }

        res.status(200).json(business);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el emprendimiento', error: error.message });
    }
};

// Eliminar un emprendimiento
export const deleteBusiness = async (req, res) => {
    const { id } = req.params;

    try {
        const business = await Business.findByIdAndDelete(id);
        if (!business) {
            return res.status(404).json({ message: 'Emprendimiento no encontrado' });
        }

        res.status(200).json({ message: 'Emprendimiento eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el emprendimiento', error: error.message });
    }
};
