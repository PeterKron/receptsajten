import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { RecipeType } from '../interfaces/interfaces'
import { getOneRecipe } from '../api/Recipes'

export const StyledRecipe = styled.div`
    background-color: white;
    width: 967px;
    border: 2px solid #9B5400;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-left: 150px;
    border-radius: 5px;
    .divider {
        background-color: black;
        width: 884px;
        height: 3px;
        border-radius: 500px;
        margin: 15px 0px 15px 16px;
    }
    img {
        object-fit: contain;
    }
    .header {
        display: flex;
        justify-content: space-between;
    }
    .wrapper2{
        padding: 25px;
    }
    input {
        border: 2px solid #9B5400;
        background-color: #FFFFFF;
        margin-bottom: 5px;
        color: #000000;
        text-align: start;
    }
    textarea {
        width: 750px;
        height: 250px;
        border: 2px solid #9B5400;
        background-color: #FFFFFF;
        border-radius: 10px;
        font-family: 'Maitree';
        font-size: 20px;
        padding-left: 10px;
        outline: none;
        resize: none;
    }
    button {
        width: 125px;
        height: 45px;
        background-color: #9B5400;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
        border-radius: 10px;
        font-family: 'Maitree';
        font-size: 20px;
        padding-left: 10px;
        outline: none;
        margin-left: 20px;
        align-self: flex-end;
    }
    h1, h3, h4 {
        font-family: 'Spectral SC';
        font-weight: bold;
        margin: 0;
    }
    h1 {
        font-size: 40px;
    }
    p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', sans-serif;
        font-style: italic;
    }
    .titleandingredients {
        width: 500px;
    }
    .ratings {
        display: flex;
        align-items: flex-start;
    }
    .ratingstar {
        margin: 0px 5px;
    }
    .commentfield {
        display: flex;
    }
        
`

export const SingleRecipe = () => {
    let params = useParams()
    const [ oneRecipe, setRecipe] = useState<RecipeType[]>([])
  
    useEffect(()=>{
        getOneRecipe(`${params.recipeId}`).then(recipes => {setRecipe(recipes)})
      
    }, [params.recipeId])


    return  <section> 
    {oneRecipe.map((recipe: RecipeType, index) => 
    <StyledRecipe key={index}>
        <div className="wrapper2">
            <div className='header'>
                <div className='titleandingredients'>
                    <h1>{recipe.title}</h1>
                    <div className="ratings">
                        <h3>{getRating(recipe.ratings)}</h3>
                        <img className="ratingstar" src="../star.png" alt=""/>
                        <h3>| {recipe.timeInMins} minuter</h3>
                    </div>
                    <p>{recipe.description}</p>
                    <h3>Ingredienser</h3>
                    {recipe.ingredients.map((ingredient) => <p>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</p>)}
                </div>
            

                <img src={recipe.imageUrl} alt="" width={370} height={370}/>
            </div>
            
            <div className="divider"></div>

            <h3>GÖR SÅHÄR</h3>
            {recipe.instructions.map((instruction) => <p>{instruction}</p>)}
            
            <div className="divider"></div>
            <h3>Vad tyckte du om receptet! Rösta här!</h3>
            <p>*****</p>

            <h3>ska du kommentera något dumt? isåfall gör det här</h3>

            <input type="text" placeholder='Namn'/>
            <div className='commentfield'>
            <textarea placeholder='Skriv en text'/>
            <button>Skicka</button>
            </div>

        </div>
    </StyledRecipe>)} 
    </section>
}
        
function getRating(ratings : Array<number>) {
    let sum = 0;
    ratings.map((rate: number) => (sum += rate));
    return (sum / ratings.length).toFixed(1);
}
