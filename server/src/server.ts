import express  from "express";
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/receptsajten')

import recipeRouter from './routes/recipe'
import categoryRouter from './routes/category'
import { CommentModel } from "./models/models";


const app = express()
const port = 3000
app.use(express.json())


app.use('/recipes', recipeRouter)
app.use('/categories', categoryRouter)


app.get('/recipes/:recipeId/comments', async (req, res) => {

})

// const addTransaction = async (comment : Object) => {
//   const transaction = await new CommentModel(comment).save()
//   // await transaction.save()
//   return transaction
// }


app.post('/recipes/:recipeId/comments', async (req, res) => {
    const newComment = new CommentModel({
      comment: req.body.comment,
      name: req.body.name,
      // createdAt: req.body.createdAt,
      // description: req.body.description,
    }).save();

    res.json(newComment);
  }
)
// app.post('/recipes/:recipeId/comments', async (req, res) => {
//     const newTransaction = await addTransaction({
//       comment: req.body.comment,
//       name: req.body.name,
//       // createdAt: req.body.createdAt,
//       // description: req.body.description,
//     });

//     res.json(newTransaction[0]);
//   }
// )

// try surfacce


// import { RecipeModel } from "./db/models/models";

// export const getRecipes = async () => {
//     const recipes = await RecipeModel.find()
//     return recipes
// }

// app.get('/recipes', async (req, res) => {
//     const recipt = await getRecipes()
//     res.json(recipt)
// })

// end of try surfacce

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
  });