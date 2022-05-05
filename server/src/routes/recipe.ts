import express from 'express'
import { RecipeModel } from '../models/models'

const router = express.Router()

// UTAN ABSTRAKTION -----------------------------------
router.get('/',async (req, res) => {
    const allRecipes = await RecipeModel.find()
    res.status(200).json(allRecipes)
})

router.get('/:recipeId',async (req, res) => {
    const oneRecipe = await RecipeModel.find({_id: req.params.recipeId})
    res.status(200).json(oneRecipe)
})

router.get('/search/:query', async (req, res) => {
    const foundRecipe = await RecipeModel.find({
        title: { $regex: req.params.query, $options: 'i' } 
    })
    res.status(200).json(foundRecipe)
});
// ----------------------------------------------
export default router

/* överdriven förkortning?? ingen som skriver sådan kod
// router.get('/:recipeId',async (req, res) => {
//     res.status(200).json(await RecipeModel.find({_id: req.params.recipeId}))
// }) */

// functions

// const getRecipes = async () => {
//     const recipes = await RecipeModel.find()
//     return recipes
// }

// const getRecipeById = async (recipeId: string) => {
//     const recipes = await RecipeModel.find({_id: recipeId})
//     return recipes
// }

// SÖKFUNKTION
// const getRecipeBySearch = async (title: string) => {
//     let params = {}
//     if(title){
//         params['title'] = {'$regex' : '.*' + title + '.*', '$options' : 'i'}
//     }
//     const recipes = await RecipeModel.find(params)
//     return recipes
// }

// routes

// router.get('/',async (req, res) => {
//     const recipt = await getRecipes()
//     res.status(200).json(recipt)
// })

// router.get('/:recipeId',async (req, res) => {
//     const recipt = await getRecipeById(req.params.recipeId)
//     res.status(200).json(recipt)
// })

// SÖKFUNKTION
// router.get('/:query',async (req, res) => {
//     getRecipeBySearch(req.params.query).then((recipes) => res.json(recipes));
// })
