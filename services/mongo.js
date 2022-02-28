import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(
    `mongodb://${process.env.USER}:${process.env.PASS}@cluster0-shard-00-00.myt24.mongodb.net:27017,cluster0-shard-00-01.myt24.mongodb.net:27017,cluster0-shard-00-02.myt24.mongodb.net:27017/mern-social?ssl=true&replicaSet=atlas-v5slnn-shard-0&authSource=admin&retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
}

export default mongoConnect;

/* mongoose
  .connect(
    `mongodb://${process.env.USER}:${process.env.PASS}@cluster0-shard-00-00.myt24.mongodb.net:27017,cluster0-shard-00-01.myt24.mongodb.net:27017,cluster0-shard-00-02.myt24.mongodb.net:27017/mern-social?ssl=true&replicaSet=atlas-v5slnn-shard-0&authSource=admin&retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`)); */
