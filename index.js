import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // CORS ni import qilamiz
import usersRouter from './routes/users.js';
import mashqRouter from './routes/games.js';


const app = express();

// CORS uchun ruxsat (frontend domeningizni shu yerga yozing)
app.use(cors({
  origin: 'https://solo-workout.netlify.app', // frontend manzilingiz
  credentials: true // agar cookie, token yuborilsa kerak bo‘lsa
}));

app.use(cors({
  origin: 'http://localhost:5173', // frontend manzilingiz
  credentials: true // agar cookie, token yuborilsa kerak bo‘lsa
}));


app.use(express.json());

// MongoDB ulanishi
mongoose.connect('mongodb+srv://axmadovsardor2009:8fRGgIjcbz5p313o@cluster0.op1c36u.mongodb.net/', {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Route
app.use('/users', usersRouter);
app.use('/game', mashqRouter);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
