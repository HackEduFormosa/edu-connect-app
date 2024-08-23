import express from 'express';
import connectDB from './config/database.js';
import authRoutes from './routes/auth.Routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
