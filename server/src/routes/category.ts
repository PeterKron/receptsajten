import express from 'express'
import { getCategories, getRecipeByCategory, getRecipeInCategory } from '../db/category'

const router = express.Router()

router.get('/', async (req, res) => {
    const category = await getCategories()
    res.status(200).json(category)
})

router.get('/:categoryName/recipes', async (req, res) => {
    const category = await getRecipeByCategory(req.params.categoryName)
    res.status(200).json(category)
})

router.get('/:categoryName/:query', async (req, res) => {
    const category = await getRecipeInCategory(req.params.categoryName, req.params.query)
    res.status(200).json(category)
})

export default router