import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['superadmin', 'emprendedor'], required: true },
  business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' } // Referencia al emprendimiento si es emprendedor
});

const User = mongoose.model('User', userSchema);
export default User;
