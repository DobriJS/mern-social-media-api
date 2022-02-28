import express from 'express';
import cors from 'cors';
import mongoConnect from './services/mongo.js';
import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const app = express();
const PORT = process.env.PORT || 4000;

async function startServer() {
  await mongoConnect();
  app.use(express.json({ limit: '30mb', extended: true }));
  app.use(express.urlencoded({ limit: '30mb', extended: true }));
  app.use(cors());
  app.use('/posts', postRoutes);
  app.use('/user', userRouter);
  app.get('/', (req, res) => {
    res.send('Hello to FEED');
  });
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
