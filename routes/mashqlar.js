import express from 'express';
const router = express.Router();
import Mashq from '../models/mashq.js';

router.get('/', async (req, res) => {
  const mashq = await Mashq.find();
  res.json(mashq);
});

router.post('/', async (req, res) => {
  const mashq = new Mashq(req.body);
  try {
    const savedMashq = await mashq.save();
    res.status(201).json(savedMashq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/search', async (req, res) => {
  try {
    const iday = req.query.iday;
    const user = await Mashq.findOne({ id : iday });
    if (!user) return res.status(404).json({ message: 'Mashq not found' });
    res.json(user);
  } catch (err) {
    console.error('Error occurred while searching for user:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;