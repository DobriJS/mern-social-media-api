import mongoose from 'mongoose';
import dotenv from 'dotenv';
import createServer from './server.js';

const app = createServer();
dotenv.config({ path: '.env' });
const PORT = process.env.PORT || 4000;

mongoose
  .connect(
    `mongodb://${process.env.USER}:${process.env.PASS}@cluster0-shard-00-00.myt24.mongodb.net:27017,cluster0-shard-00-01.myt24.mongodb.net:27017,cluster0-shard-00-02.myt24.mongodb.net:27017/mern-social?ssl=true&replicaSet=atlas-v5slnn-shard-0&authSource=admin&retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server has started on port ${PORT}`);
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
