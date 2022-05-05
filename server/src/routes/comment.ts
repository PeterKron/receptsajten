import  express  from 'express'
import { addComment, getComments } from '../db/comment'

const router = express.Router()

router.get('/recipes/:recipeId/comments', async (req, res) => {
    const comments = await getComments(req.params.recipeId)
    res.json(comments)
})

router.post('/recipes/:recipeId/comments', async (req, res) => {
    const comment = await addComment(req.params.recipeId, req.body)
    res.json(comment)
})

export default router