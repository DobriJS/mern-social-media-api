import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

dotenv.config({ path: '.env' })
const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);
app.use("/user", userRouter);
app.get("/", (req, res) => {
	res.send("Hello to FEED");
});

const PORT = process.env.PORT || 4000;

mongoose.connect(`mongodb://DobriJS:tGwe7DhTR11xoIpA@cluster0-shard-00-00.myt24.mongodb.net:27017,cluster0-shard-00-01.myt24.mongodb.net:27017,cluster0-shard-00-02.myt24.mongodb.net:27017/mern-social?ssl=true&replicaSet=atlas-v5slnn-shard-0&authSource=admin&retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));
