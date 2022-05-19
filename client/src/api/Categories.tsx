import axios from "axios"


export const getCategories = async () => {
    const categories = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories/`)
    return categories.data
}

export const getRecipesByCategory = async (categoryName : any) => {
    const categories = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories/${categoryName}/recipes`)
    return categories.data
}

export const searchRecipeInOneCategory = async (categoryName : any, search : any) => {
    const categories = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/categories/${categoryName}${search}`)
    return categories.data
}