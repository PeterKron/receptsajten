import axios from "axios"


export const getRecipes = async () => {
    const recipes = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/`)
    return recipes.data 
}
export const getOneRecipe = async (recipeId : any) => {
    const recipes = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}`)
    return recipes.data 
}
export const searchRecipes = async (searchstring: any) => {
    const recipes = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/search${searchstring}`)
    return recipes.data 
}

export const getComments = async (recipeId:any) => {
    const comments = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}/comments`)
    return comments.data 
}
export const postComment = async (recipeId:any, comment: any) => {
    const comments = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}/comments`, comment)
    return comments.data 
}

export const postRating = async (recipeId:any, rating: any) => {
    const ratings = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}/comments`, rating)
    return ratings.data 
}