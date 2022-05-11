import React from "react"

export interface RecipeType {
    title: String,
    description: String,
    imageUrl: string,
    timeInMins: React.ReactNode,
    ratings: Array<React.ReactNode>,
    category: Array<String>,
    ingredients: Array<IngredientType>,
    instructions: Array<String>
    comments: Array<CommentType>
}

export interface IngredientType {
    ingredient: String,
    amount: React.ReactNode,
    // amount: Number,
    unit: String 
}

export interface CommentType {
    comment: String,
    name: String,
    createdAt?: Date
}