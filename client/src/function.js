function containsElement(arr) {
    const ArrayofAmounts = []
    for (const element of arr) {
        if (!ArrayofAmounts.find((obj) => obj.name === element)){
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


export function getRating(ratings) {
    let sum = 0;
    ratings.map((rate) => (sum += rate));
    return (sum / ratings.length).toFixed(1);
}


// function getRating(ratings : Array<number>) {
//     let sum = 0;
//     ratings.map((rate: number) => (sum += rate));
//     return (sum / ratings.length).toFixed(1);
// }
