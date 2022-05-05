import express from 'express'
import {getRecipes ,getRecipeById, getRecipeBySearch} from '../db/recipe'
const router = express.Router()


router.get('/',async (req, res) => {
    const recipes = await getRecipes()
    res.status(200).json(recipes)
})

router.get('/:recipeId',async (req, res) => {
    const recipe = await getRecipeById(req.params.recipeId)
    res.status(200).json(recipe)
})

router.get('/search/:query', async (req, res) => {
    const foundRecipe = await getRecipeBySearch(req.params.query)
    res.status(200).json(foundRecipe)
})

export default router