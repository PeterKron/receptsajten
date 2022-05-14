import styled from 'styled-components'

export const StyledRecipe = styled.div`
    background-color: white;
    display: flex;
    /* align-items: center; */
    width: 967px;
    height: 236px;
    border: 5px solid #9B5400;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 5px;
    margin-bottom: 32px;
    img {
        object-fit: contain;
        margin-left: 28px;
        margin-top: 20px;
    } 
        
`








// export const Recipes = () => {
    // const allRecipes = getAllRecipes()
    // fetchfunction

    // useEffect(()=>{
    //     const getRecipes = async () => {
    //         const recipes = await axios.get("http://localhost:3100/recipes/")
    //         setRecipes(recipes.data) 
    //     }
    //     getRecipes()
    // }, [])

    // kalla på fetch function 

    // return <ul>
    //     {allRecipes.map((recipe: any, index: any) => 
    //     <StyledRecipe key={index}>
    //         <img src={recipe.imageUrl} alt="" width={196} height={196}/>
    //         <div>
    //             <h1>{recipe.title}</h1>
    //             {recipe.description}    
    //         </div>
    //         RATING{recipe.ratings.length + recipe.ratings.length} 

    //         <h3>TIME IN MINS{recipe.timeInMins}</h3>
    //         <h2>ingredients {recipe.ingredients.length} </h2>
    //     </StyledRecipe>)}
    // </ul>
// }
