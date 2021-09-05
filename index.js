import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

dotenv.config({ path: '.env' })
const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
.catch((error) => console.log(`${error} did not connect`));
