import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/user.route.js';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

// connect DB
mongoose.connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/users", userRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
