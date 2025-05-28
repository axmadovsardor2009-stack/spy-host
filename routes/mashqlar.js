import express from 'express';
const router = express.Router();
import Mashq from '../models/mashq.js';

router.get('/', async (req, res) => {
  const mashq = await Mashq.find();
  res.json(mashq);
});


export default router;