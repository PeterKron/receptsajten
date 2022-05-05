import { RecipeModel } from "./models/models";


export const getRecipes = async () => {
    const recipes = await RecipeModel.find()
    return recipes
}

export const getRecipeById = async (recipeId: String) => {
    const recipes = await RecipeModel.find({_id: recipeId})
    return recipes
}

export const getRecipeBySearch = async (title: String) => {
    const foundRecipe = await RecipeModel.find({
        title: { $regex: title, $options: 'i' } 
    })
    return foundRecipe
}