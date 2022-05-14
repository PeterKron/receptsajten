import { RecipeModel} from './models/models'

export const getCategories = async () => {
    // const category = await RecipeModel.find().distinct('category')
    // return category
    
    // const recipes = await RecipeModel.find()
    // const categories = recipes.map((recipe) => recipe.category)
    // return categories.flat()

    const recipes = await RecipeModel.find()
    return recipes.flatMap((recipe) => recipe.category)
    

    // const recipes = await RecipeModel.find()
    // const categories = recipes.map((recipe) => recipe.category)
    // const katarray = []
    // for (let i = 0; i < categories.length; i++) {
    //     const category = categories[i];
    //     for (const kategory of category) {
    //         katarray.push(kategory)
    //     }
    // }
    // return katarray

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
