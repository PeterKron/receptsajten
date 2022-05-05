import mongoose from "mongoose"
import { RecipeType, CommentType, IngredientType } from "../interfaces/interfaces"

const ingredientSchema = new mongoose.Schema<IngredientType>({
    ingredient: {type: String, required: true},
    amount: {type: Number, required: true},
    unit: {type: String, required: true},
})

const commentSchema = new mongoose.Schema<CommentType>({
    comment: {type: String, required: true},
    name: {type: String, required: true},
    createdAt: {type: Date, required: true}
})

const recipeSchema = new mongoose.Schema<RecipeType>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    timeInMins: {type: Number, required: true},
    ratings: {type: [Number], required: true},
    category: {type: [String], required: true},
    instructions: {type: [String], required: true},
    ingredients: {type: [ingredientSchema], required: true},
    comments: {type: [commentSchema], required: true}
})
// const recipeschema = new mongoose.Schema<RecipeType>({
//     title: {type: String, required: true},
//     description: {type: String, required: true},
//     imageUrl: {type: String, required: true},
//     timeInMins: {type: Number, required: true},
//     ratings: {type: [Number], required: true},
//     category: {type: [String], required: true},
//     ingredients: {type: [Object], required: true},
//     instructions: {type: [String], required: true},
//     comments: {type: [Object], required: true}
// })

export const RecipeModel = mongoose.model<RecipeType>('Recipe', recipeSchema)
// export const CommentModel = mongoose.model<CommentType>('Comment', commentschema)
