import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  point: {type: Number, default: 0, required: true},
});

export default mongoose.model('User', userSchema);