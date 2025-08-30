import express from 'express';
const router = express.Router();
import Game from '../models/game.js';

router.get('/', async (req, res) => {
  const game = await Game.find();
  res.json(game);
});

router.post('/', async (req, res) => {
  const game = new Game(req.body);
  try {
    const savedGame = await game.save();
    res.status(201).json(savedGame);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/search', async (req, res) => {
  try {
    const code = req.query.code;
    const game = await Game.findOne({ code });
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.json(game);
  } catch (err) {
    console.error('Error occurred while searching for game:', err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ message: 'Game not found' });
    res.status(200).json(game);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/update', async (req, res) => {
  try {
    const code = req.query.code;
    const user = await Game.findOne({ code });
    if (!user) return res.status(404).json({ message: 'Game not found' });
    const updated = await Game.findByIdAndUpdate(user._id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    console.error('Error occurred while searching for user:', err);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/end', async (req, res) => {
  try {
    const code = req.query.code;
    const deleted = await Game.findOneAndDelete({code});
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;