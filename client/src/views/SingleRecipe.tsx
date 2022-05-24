import { StyledRecipe } from '../Styles/SingleRecipeStyle'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { RecipeType } from '../interfaces/interfaces'
import { getOneRecipe, postRating } from '../api/Recipes'
import { Rating } from 'react-simple-star-rating'
import { getRating } from '../function'


export const SingleRecipe = () => {

    let params: any = useParams()
    // const { recipeId } = useParams()
    const [ratingText, setratingText] = useState(false)
    const [oneRecipe, setRecipe] = useState<RecipeType[]>([])
    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        let rating = rate / 20
        setRating(rate)
        postRating(params.recipeId, {rating: rating})
        setratingText(true)
    }
    const renderRating = () => {
        {if (ratingText) {
            return <h3 className='ratingText'>Tack för ditt betyg!</h3>
        }else {
            return <Rating onClick={handleRating} ratingValue={rating} />
        }}
    }

    useEffect(()=>{
        getOneRecipe(`${params.recipeId}`).then(recipes => {setRecipe(recipes)})
      
    }, [params.recipeId])

    return  <section> 
    {oneRecipe.map((recipe: RecipeType, index: number) => 
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
            {renderRating()}
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