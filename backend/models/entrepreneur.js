import mongoose from 'mongoose';

const entrepreneurSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true }, // Relación con el emprendimiento
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Relación con el usuario
});

const Entrepreneur = mongoose.model('Entrepreneur', entrepreneurSchema);
export default Entrepreneur;
