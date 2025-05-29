
import express from 'express';
const router = express.Router();
import User from '../models/User.js';

// GET all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ point: -1 });
  res.json(users);
});


router.get('/search', async (req, res) => {
  try {
    const email = req.query.email;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error('Error occurred while searching for user:', err);
    res.status(500).json({ error: err.message });
  }
});


// GET user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create new user
router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT update user
router.put('/:id', async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE user
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
