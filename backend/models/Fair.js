import mongoose from 'mongoose';

const fairSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const Fair = mongoose.model('Fair', fairSchema);

export default Fair;
