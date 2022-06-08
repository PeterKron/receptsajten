import { getRecipes, searchRecipes } from "../api/Recipes"
import { useState, useEffect} from "react"
import {RecipeType} from '../interfaces/interfaces'
import { StyledRecipes } from "../Styles/RecipeListStyle"
import { Link } from "react-router-dom"
import { getRating } from "../function"
import { Input } from "../components/Input"


export const RecipeList = () => {
    const [ search, setSearch] = useState('')
    const [ allRecipes, setRecipes] = useState<RecipeType[]>([])
    useEffect(()=>{
        if (search.length > 0){
            searchRecipes(`${search}`).then(recipes => {setRecipes(recipes)})
        }else {
            getRecipes().then(recipes => {setRecipes(recipes)})
        }
    }, [search])

    return <div>
    <Input placeholder={`Sök recept`} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}/>
    <ul>
        {allRecipes.map((recipe: RecipeType, index) => 
        <Link to={`/recipe/${recipe._id}`} key={index}>
            <StyledRecipes>
                <img src={recipe.imageUrl} alt="" width={196} height={196}/>
                <div className="textcontent">
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
</div>
}
