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
    const mashq = await Mashq.findOne({ id : iday });
    const newmashq = await Mashq.findByIdAndUpdate(mashq._id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'Exercise not found' });
    res.json(newmashq);
  } catch (err) {
    console.error('Error occurred while searching for exercise:', err);
    res.status(500).json({ error: err.message });
  }
});

export default router;