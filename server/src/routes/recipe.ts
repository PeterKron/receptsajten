import express from 'express'
import {getRecipes ,getRecipeById, getRecipeBySearch, postRatingOnRecipe} from '../db/recipe'
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

router.post('/:recipeId/ratings', async (req, res) => {
    const postedRating = await postRatingOnRecipe(req.params.recipeId, req.body)
    res.status(200).json(postedRating)
})

export default router