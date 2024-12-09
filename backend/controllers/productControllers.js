import Product from '../models/Product.js';
import Entrepreneur from '../models/Entrepreneur.js';

// Crear un nuevo producto
export const createProduct = async (req, res) => {
    const { name, description, category, price, image, entrepreneurId } = req.body;

    try {
        const entrepreneur = await Entrepreneur.findById(entrepreneurId);
        if (!entrepreneur) {
            return res.status(404).json({ message: 'Emprendedor no encontrado' });
        }

        const newProduct = new Product({
            name,
            description,
            category,
            price,
            image,
            entrepreneur: entrepreneurId
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto', error: error.message });
    }
};

// Obtener todos los productos
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('entrepreneur');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos', error: error.message });
    }
};

// Obtener un producto por ID
export const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id).populate('entrepreneur');
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error: error.message });
    }
};

// Actualizar un producto
export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, category, price, image, entrepreneurId } = req.body;

    try {
        const entrepreneur = await Entrepreneur.findById(entrepreneurId);
        if (!entrepreneur) {
            return res.status(404).json({ message: 'Emprendedor no encontrado' });
        }

        const product = await Product.findByIdAndUpdate(id, {
            name,
            description,
            category,
            price,
            image,
            entrepreneur: entrepreneurId
        }, { new: true });

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto', error: error.message });
    }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error: error.message });
    }
};
