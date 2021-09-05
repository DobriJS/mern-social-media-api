import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors());
dotenv.config({ path: '.env' })


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
.catch((error) => console.log(`${error} did not connect`));



/* mongodb://DobriJS:<password>@cluster0-shard-00-00.myt24.mongodb.net:27017,cluster0-shard-00-01.myt24.mongodb.net:27017,cluster0-shard-00-02.myt24.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-v5slnn-shard-0&authSource=admin&retryWrites=true&w=majority */