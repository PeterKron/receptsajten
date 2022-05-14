import axios from "axios"


export const getCategories = async () => {
    const categories = await axios.get("http://localhost:3100/categories/")
    return categories.data
}

export const getOneCategory = async (categoryName : any) => {
    const categories = await axios.get("http://localhost:3100/categories/" + `${categoryName}` + "recipes")
    return categories.data
}

export const getRecipeInOneCategory = async (categoryName : any, search : any) => {
    const categories = await axios.get("http://localhost:3100/categories/" + `${categoryName}` + `${search}`)
    return categories.data
}