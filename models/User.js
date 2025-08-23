import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  point: {type: Number, default: 0},
  firstReg: {type: String, default: "0/0/2000"},
  LastSeen: {type: String, default: "0/0/2000"},
  Play: {type: Number, default: 0},
  Win: {type: Number, default: 0},
  BeenSpy: {type: Number, default: 0}
});

export default mongoose.model('User', userSchema);