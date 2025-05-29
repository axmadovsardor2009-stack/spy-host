import express from 'express';
const router = express.Router();
import Mashq from '../models/mashq.js';
import mashq from '../models/mashq.js';

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

router.put('/:iday', async (req, res) => {
  try {
    const iday = req.query.iday
    const mashq = await Mashq.findOne({ iday });
    const updated = await Mashq.findByIdAndUpdate(mashq.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;