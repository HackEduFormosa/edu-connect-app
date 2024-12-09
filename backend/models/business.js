import mongoose from 'mongoose';

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Referencia al dueño (emprendedor)
  address: { type: String, required: true }
});

const Business = mongoose.model('Business', businessSchema);
export default Business;
