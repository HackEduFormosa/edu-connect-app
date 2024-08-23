

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true } // Referencia al emprendimiento
});

const Product = mongoose.model('Product', productSchema);
export default Product;
