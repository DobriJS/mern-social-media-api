import express from 'express';
import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';
import cors from 'cors';

function createServer() {
  const app = express();
  app.use(express.json({ limit: '30mb', extended: true }));
  app.use(express.urlencoded({ limit: '30mb', extended: true }));
  app.use(cors());
  app.use('/posts', postRoutes);
  app.use('/user', userRouter);
  app.get('/', (req, res) => {
    res.sendStatus(200);
  });
  return app;
}

export default createServer;
