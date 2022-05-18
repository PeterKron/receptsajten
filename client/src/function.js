function containsElement(arr) {
    const ArrayofAmounts = []
    for (const element of arr) {
        if (!ArrayofAmounts.find((obj) => obj.name == element)){
            ArrayofAmounts.push({name: element, amount: 1})
        }
        for (const object of ArrayofAmounts) {
            if(object.name === element){
                object.amount++
            }
        }
    }
    ArrayofAmounts.map((objects) => objects.amount--)
    return ArrayofAmounts
 }



 // supershort?
 export function ContainsElement2(array) {
    const ArrayofAmounts = []
    array.map((element) => 
        {!ArrayofAmounts.find((obj) => obj.name === element) ?
            ArrayofAmounts.push({name: element, amount: 1})  :
            ArrayofAmounts.map((object) => 
            {if (object.name === element) object.amount++})
        }
    )
    return ArrayofAmounts
}




    // const allRecipes = getAllRecipes()
    // // fetchfunction

    // useEffect(()=>{
    //     const getRecipes = async () => {
    //         const recipes = await axios.get("http://localhost:3100/recipes/")
    //         setRecipes(recipes.data) 
    //     }
    //     getRecipes()
    // }, [])

    // // kalla på fetch function 