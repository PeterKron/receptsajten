import express  from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


mongoose.connect(`mongodb+srv://${process.env.USER2}:${process.env.PASS}@recipedb.4sg5r.mongodb.net/receptsajten`)

import recipeRouter from './routes/recipe'
import categoryRouter from './routes/category'
import commentRouter from './routes/comment'

const app = express()
const port = process.env.PORT || 3100
app.use(express.json())
app.use(cors())

app.use(recipeRouter)
app.use('/categories', categoryRouter)
app.use('comments',commentRouter)

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
  });