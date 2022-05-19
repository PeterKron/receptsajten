
import { useState, useEffect} from "react"
import {RecipeType} from '../interfaces/interfaces'
import { useParams, Link } from "react-router-dom"
import { StyledRecipes } from "../components/RecipeList"
import { getRecipesByCategory } from "../api/Categories"

export default function Categories() {
  let params = useParams()
  const [ RecipesInCategory, setRecipesInCategory] = useState([])

  useEffect(()=>{
    getRecipesByCategory(`${params.categoryname}`).then(recipes => {setRecipesInCategory(recipes)})
    
  }, [params.categoryname])

  return <ul>
    {RecipesInCategory.map((recipe: RecipeType, index) => 
    <Link to={`/recipe/${recipe._id}`}>
      <StyledRecipes key={index} >
        <img src={recipe.imageUrl} alt="" width={196} height={196}/>
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
