export interface RecipeType {
    title: String,
    description: String,
    imageUrl: String,
    timeInMins: Number,
    ratings: Array<Number>,
    category: Array<String>,
    ingredients: Array<IngredientType>,
    instructions: Array<String>
    comments: Array<CommentType>
}

export interface IngredientType {
    ingredient: String,
    amount: Number,
    unit: String 
}

export interface CommentType {
    comment: String,
    name: String,
    createdAt?: Date
}