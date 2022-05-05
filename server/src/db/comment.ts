import { CommentType } from "./interfaces/interfaces";
import { RecipeModel } from "./models/models";


export const getComments =async (recipeId: String) => {
    const comments = await RecipeModel.findById(recipeId).distinct('comments')
    return comments
}

export const getCategories = async () => {
    const category = await RecipeModel.find().distinct('category')
    return category
}

export const addComment = async (recipeId: String, comment: CommentType) => {
const recipe = await RecipeModel.findById(recipeId)
    if (!recipe){
        throw '404'
    }else {
        recipe.comments.push(comment)
        await recipe.save()
        return comment;
    }
}
