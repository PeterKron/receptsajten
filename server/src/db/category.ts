import { RecipeModel} from './models/models'

export const getCategories = async () => {
    const category = await RecipeModel.find().distinct('category')
    return category
}

export const getRecipeByCategory = async (category: String) => {    
    const foundcategory = await RecipeModel.find({category: category})
    return foundcategory
}

export const getRecipeInCategory = async (category: String, recipeTitle: String) => {    
    const foundRecipe = await RecipeModel.find({
    category: category,
    title: { $regex: recipeTitle, $options: 'i' } 
})
    return foundRecipe
}
