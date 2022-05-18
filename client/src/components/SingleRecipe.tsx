import styled from 'styled-components'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { RecipeType } from '../interfaces/interfaces'
import { getOneRecipe } from '../api/Recipes'

export const StyledRecipe = styled.div`
    background-color: white;
    /* display: flex; */
    /* align-items: center; */
    width: 967px;
    height: 736px;
    /* border: 5px solid #9B5400; */
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-left: 150px;
    border-radius: 5px;
    .divider {
        background-color: black;
        width: 884px;
        height: 3px;
        border-radius: 500px;
        margin-left: 16px;
    }
    img {
        object-fit: contain;
        margin-left: 28px;
        margin-top: 20px;
        /* align-self: flex-end; */
    }
    .header {
        display: flex;
    }
    .wrapper2{
        padding: 10px 25px;
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
                <div>
                    <h1>{recipe.title}</h1>
                    <h5>{recipe.timeInMins} MINUTER</h5>
                    <p>{recipe.description}</p>
                    <h2>Ingredienser</h2>
                    {recipe.ingredients.map((ingredient) => <p>{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</p>)}
                </div>
            
                <div className="ratings">
                    <h1 className="ratingnumber">{getRating(recipe.ratings)}</h1>
                    <img className="ratingstar" src="../star.png" alt=""/>
                </div>
                <img src={recipe.imageUrl} alt="" width={396} height={396}/>
            </div>
            
            <div className="divider"></div>

            <h2>GÖR SÅHÄR</h2>
            {recipe.instructions.map((instruction) => <p>{instruction}</p>)}
        </div>
    </StyledRecipe>)} 
    </section>
}
{/* <img src={recipe.imageUrl} alt="" width={196} height={196}/>
<div>
  <div className="title">
      <h1 className="h1recipe">{recipe.title}</h1>
      <div className="ratings">
          <h1 className="ratingnumber">{getRating(recipe.ratings)}</h1>
          <img className="ratingstar" src="../star.png" alt=""/>
      </div>
  </div>
  <div className="smallinfo">
      <h4>{recipe.timeInMins} MIN | {recipe.ingredients.length} Ingredienser</h4>
  </div>
  <div className="divider"></div>
  <p>{recipe.description}</p>
</div> */}
        
function getRating(ratings : Array<number>) {
    let sum = 0;
    ratings.map((rate: number) => (sum += rate));
    return (sum / ratings.length).toFixed(1);
}
