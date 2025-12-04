import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const URI = process.env.MONGODB_URI ;
try {
    mongoose.connect(URI)
    console.log("Connected to MongoDB");
    
} catch (error) {
    console.log(error);
}
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
