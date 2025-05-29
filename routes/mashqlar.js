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

router.put('/:id', async (req, res) => {
  try {
    const idy = req.query.id
    const mashq = await Mashq.findOne({ iday: idy });
    console.log(mashq)
    const updated = await Mashq.findByIdAndUpdate(mashq._id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;