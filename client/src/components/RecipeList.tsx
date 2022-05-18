import axios from "axios"
import React, { useState, useEffect, ReactNode } from "react"
import {RecipeType} from '../interfaces/interfaces'
import styled from 'styled-components'
import { Link } from "react-router-dom"

export const StyledRecipes = styled.div`
    background-color: white;
    display: flex;
    /* align-items: center; */
    width: 967px;
    height: 236px;
    border: 5px solid #9B5400;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    margin-bottom: 32px;
    margin-left: 124px;
    img {
        object-fit: cover;
        margin-left: 28px;
        margin-top: 20px;
    }
    h1,h4, p{
        margin: 0;
        margin-left: 28px;
    }
    h1, h4 {
        font-family: 'Spectral SC';
        font-weight: bold;
    }
    h1 {
        margin-top: 20px;
    }
    .smallinfo {
        display: flex;
        align-items: center;
        font-size: 20px;
        margin-bottom: 2px;
    }
    p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', sans-serif;
        font-style: italic;
        /* font-weight: bold; */
        font-size: 15px;
        line-height: 18px;
        margin-top: 6px;
    }
    .divider {
        background-color: black;
        width: 684px;
        height: 2px;
        border-radius: 500px;
        margin-left: 16px;
    }
    .title {
        display: flex;
        justify-content: space-between;
    }
    .ratings {
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-left: 0px;
    }
    .ratingnumber {
        margin-top: 12px;
        margin-left: 2px;
    }
    .ratingstar {
        margin-left: 5px;
    }
`

export const Recipes = () => {
    const [ allRecipes, setRecipes] = useState<RecipeType[]>([])
    useEffect(()=>{
        const getRecipes = async () => {
            const recipes = await axios.get("http://localhost:3100/recipes/")
            setRecipes(recipes.data) 
        }
        getRecipes()
    }, [])
    

    return <ul>
        {allRecipes.map((recipe: RecipeType, index) => 
        <Link to={`/recipe/${recipe._id}`}>
            <StyledRecipes key={index} >
                <img src={recipe.imageUrl} alt="" width={196} height={196}/>
                <div>
                    <div className="title">
                        <h1 className="h1recipe">{recipe.title}</h1>
                        <div className="ratings">
                            <h1 className="ratingnumber">{getRating(recipe.ratings)}</h1>
                            <img className="ratingstar" src="./star.png" alt=""/>
                        </div>
                    </div>
                    <div className="smallinfo">
                        <h4>{recipe.timeInMins} MIN | {recipe.ingredients.length} Ingredienser</h4>
                    </div>
                    <div className="divider"></div>
                    <p>{recipe.description}</p>
                </div>
            </StyledRecipes>
        </Link>
        )}
    </ul>
}


function getRating(ratings : Array<number>) {
    let sum = 0;
    ratings.map((rate: number) => (sum += rate));
    return (sum / ratings.length).toFixed(1);
}
