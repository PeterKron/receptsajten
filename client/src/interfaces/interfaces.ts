import React from "react"

export interface RecipeType {
    _id?: String,
    title: String,
    description: String,
    imageUrl: string,
    timeInMins: number,
    ratings: Array<number>,
    category: Array<String>,
    ingredients: Array<IngredientType>,
    instructions: Array<String>
    comments: Array<CommentType>
}

export interface IngredientType {
    ingredient: String,
    // amount: React.ReactNode,
    amount: number,
    unit: String 
}

export interface CommentType {
    comment: String,
    name: String,
    createdAt?: Date
}

export interface CategoryType{
    name: string,
    amount: number
}