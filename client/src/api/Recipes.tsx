import axios from "axios"


export const getRecipes = async () => {
    const recipes = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes`)
    return recipes.data 
}
export const getOneRecipe = async (recipeId : string) => {
    const recipes = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}`)
    return recipes.data 
}
export const searchRecipes = async (searchstring: string) => {
    const recipes = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/search/${searchstring}`)
    return recipes.data 
}

export const getComments = async (recipeId:string) => {
    const comments = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}/comments`)
    return comments.data 
}
export const postComment = async (recipeId:string, comment: object) => {
    const comments = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}/comments`, comment)
    return comments.data 
}

export const postRating = async (recipeId:string, rating: object) => {
    const ratings = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/recipes/${recipeId}/ratings`, rating)
    return ratings.data 
}