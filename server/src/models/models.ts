import mongoose from "mongoose"

interface RecipeType {
    title: string,
    description: string,
    imageUrl: string,
    timeInMins: number,
    ratings: Array<number>,
    category: Array<string>,
    ingredients: Array<Object>,
    instructions: Array<Object>
    comments: Array<Object>
}

interface CommentType {
    comment: String,
    name: String,
    createdAt?: Date
}

const recipeschema = new mongoose.Schema<RecipeType>({
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    timeInMins: {type: Number, required: true},
    ratings: {type: [Number], required: true},
    category: {type: [String], required: true},
    ingredients: {type: [Object], required: true},
    instructions: {type: [Object], required: true},
    comments: {type: [Object], required: true}
})

const commentschema = new mongoose.Schema<CommentType>({
    comment: {type: String, required: true},
    name: {type: String, required: true},
    // createdAt: {type: Date, required: true},
})

export const RecipeModel = mongoose.model<RecipeType>('Recipe', recipeschema)
export const CommentModel = mongoose.model<CommentType>('Comment', commentschema)
