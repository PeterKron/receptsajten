import express  from "express";
import cors from 'cors'
import mongoose from 'mongoose'


mongoose.connect('mongodb://localhost:27017/receptsajten')

import recipeRouter from './routes/recipe'
import categoryRouter from './routes/category'
import commentRouter from './routes/comment'

const app = express()
const port = 3100
app.use(express.json())
app.use(cors())

app.use('/recipes', recipeRouter)
app.use('/categories', categoryRouter)
app.use(commentRouter)


app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
  });