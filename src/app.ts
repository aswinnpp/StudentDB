// src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import studentRoutes from './routes/studentRoutes';
import connectDB from './config/db';

dotenv.config();
connectDB();

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', studentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
