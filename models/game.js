import mongoose from 'mongoose';

const spyGame = new mongoose.Schema({
  code:{type: Number, required: true, unique: true},
  PlayerNum:{ type: Number, required: true, default: 3},
  PlayerNum:{ type: Number, required: true, default: 1},
  HostP1:{ type: String, required: true},
  p1stat:{ type:String, required: true, default: "none"},
  p1choosen:{type:String, default: "False"}
});

export default mongoose.model('Game', spyGame);