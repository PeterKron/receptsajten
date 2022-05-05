import express from 'express'
import { RecipeModel } from '../models/models'

const router = express.Router()

router.get('/', async (req, res) => {
    const category = await RecipeModel.find().distinct('category')
    res.status(200).json(category)
})

router.get('/:categoryName/recipes', async (req, res) => {
    const category = await await RecipeModel.find({category: req.params.categoryName})
    res.status(200).json(category)
})

router.get('/:categoryName/:query', async (req, res) => {
        const foundRecipe = await RecipeModel.find({ 
        category: req.params.categoryName,
        title: { $regex: req.params.query, $options: 'i' } 
    })
    res.status(200).json(foundRecipe)
})


export default router

// functions
// const getCategories = async () => {
//     const category = await RecipeModel.find().distinct('category')
//     return category
// }

// const getRecipeByCategory = async (category: string) => {    
//     const foundcategory = await RecipeModel.find({category: category})
//     return foundcategory
// }

// SÖKFUNKTION
// const getRecipeInCategory = async (category: string, recipeTitle: string) => {    
//     const foundRecipe = await RecipeModel.find({category: category,
//         $and: [
//             {recipeTitle: recipeTitle}
//           ]})
//     return foundRecipe
// }

// routes
// router.get('/', async (req, res) => {
//     const category = await getCategories()
//     res.status(200).json(category)
// })

// router.get('/:categoryName/recipes', async (req, res) => {
//     const category = await getRecipeByCategory(req.params.categoryName)
//     res.status(200).json(category)
// })

// SÖKFUNKTION
// router.get('/:categoryName/:query', async (req, res) => {
//     const category = await getRecipeInCategory()
//     res.status(200).json(category)
// })