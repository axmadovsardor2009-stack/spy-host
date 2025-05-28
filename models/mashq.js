import mongoose from 'mongoose';

const exercise = new mongoose.Schema({
  iday:{type: Number, required: true, unique: true},
  level:{ type: String, required: true},
  day: {type: Number, required: true},
  mashq1: {type: String, required: true},
  info1: {type: String, required: true},
  mashq2: {type: String, required: true},
  info2: {type: String, required: true},
  mashq3: {type: String, required: true},
  info3: {type: String, required: true},
  mashq4: {type: String, required: true},
  info4: {type: String, required: true},
  mashq5: {type: String, required: true},
  info5: {type: String, required: true},
});

export default mongoose.model('Mashq', exercise);