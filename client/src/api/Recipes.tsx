import axios from "axios"


export const getRecipes = async () => {
    const recipes = await axios.get("http://localhost:3100/recipes/")
    return recipes.data 
}
export const getOneRecipe = async (recipeId : any) => {
    const recipes = await axios.get("http://localhost:3100/recipes/" + `${recipeId}`)
    return recipes.data 
}
export const searchRecipes = async (searchstring: any) => {
    const recipes = await axios.get("http://localhost:3100/recipes/search" + `${searchstring}`)
    return recipes.data 
}

export const getComments = async (recipeId:any) => {
    const comments = await axios.get("http://localhost:3100/recipes/" + `${recipeId}` + "/comments")
    return comments.data 
}
export const postComment = async (recipeId:any, comment: any) => {
    const comments = await axios.post("http://localhost:3100/recipes/" + `${recipeId}` + "/comments", comment)
    return comments.data 
}

export const postRating = async (recipeId:any, rating: any) => {
    const ratings = await axios.post("http://localhost:3100/recipes/" + `${recipeId}` + "/comments", rating)
    return ratings.data 
}