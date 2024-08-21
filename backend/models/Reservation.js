import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
