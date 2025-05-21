
import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Sardor:Dib7TNuFWp3w@cluster0.sh84pqh.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

app.use('/users', usersRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});