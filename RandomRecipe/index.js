let fetchButton = document.getElementById("fetchR")
let recipeList = document.querySelector("ul")
let jsonResults;
let title = document.querySelector('h1')
let instructions = document.querySelector('p')


fetchButton.addEventListener('click', ev=>{
    fetch("https://themealdb.com/api/json/v1/1/random.php")
    .then( e => e.json() )
    // .then(json =>{
    //     jsonResults = json.meals[0]
    //     console.log(jsonResults)
    //     // instructions.innerText = jsonResults.meals[0].strInstructions
    // })
    .then(function(json){
        console.log(json)
        let recipe = json.meals[0]
        for(r in recipe){
            if(r === 'strIngredient1'){
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient1;
                recipeList.appendChild(listItem)
                // console.log('strIngredient1: r and recipe.stringredient1',r, recipe.strIngredient1)
            } else if(r === 'strIngredient2' && recipe.strIngredient2 !== ""){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient2;
                recipeList.appendChild(listItem)
                // console.log('strIngredient2: r and recipe.stringredient2',r, recipe.strIngredient2) 
            }
            else if(r === 'strIngredient3' && recipe.strIngredient3 !== ''){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient3;
                recipeList.appendChild(listItem)
                // console.log('strIngredient3: r and recipe.stringredient3',r, recipe.strIngredient3)
            }
            else if(r === 'strIngredient4' && recipe.strIngredient4 !== ''){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient4;
                recipeList.appendChild(listItem)
                // console.log('strIngredient4: r and recipe.stringredient4',r, recipe.strIngredient4)
            }
            else if(r === 'strIngredient5' && recipe.strIngredient5 !== '' ){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient5;
                recipeList.appendChild(listItem)
                // console.log('strIngredient5: r and recipe.stringredient5',r, recipe.strIngredient5)
            }
            else if(r === 'strIngredient6' && recipe.strIngredient6 !== ''){
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient6;
                recipeList.appendChild(listItem)
                // console.log('strIngredient6: r and recipe.stringredient6',r, recipe.strIngredient6)
             }
            else if(r === 'strIngredient7' && recipe.strIngredient7 !== ''){
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient7;
                recipeList.appendChild(listItem)
                // console.log('strIngredient7: r and recipe.stringredient7',r, recipe.strIngredient7)
             }
            else if(r === 'strIngredient8' && recipe.strIngredient8 !== ""){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient8;
                recipeList.appendChild(listItem)
                // console.log('strIngredient8: r and recipe.stringredient8',r, recipe.strIngredient8)
            }
            else if(r === 'strIngredient9' && recipe.strIngredient9 !== ""){
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient9;
                recipeList.appendChild(listItem)
                // console.log('strIngredient9: r and recipe.stringredient9',r, recipe.strIngredient9)
             }
            else if(r === 'strIngredient10' && recipe.strIngredient10 !== ""){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient10;
                recipeList.appendChild(listItem)
                // console.log('strIngredient10: r and recipe.stringredient10',r, recipe.strIngredient10)
            }
            else if(r === 'strIngredient11' && recipe.strIngredient11 !== ""){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient11;
                recipeList.appendChild(listItem)
                // console.log('strIngredient11: r and recipe.stringredient11',r, recipe.strIngredient11)
            }
            else if(r === 'strIngredient12' && recipe.strIngredient12 !== ""){
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient12;
                recipeList.appendChild(listItem)
                // console.log('strIngredient12: r and recipe.stringredient12',r, recipe.strIngredient12)
             }
            else if(r === 'strIngredient13' && recipe.strIngredient13 !== ""){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient13;
                recipeList.appendChild(listItem)
                // console.log('strIngredient13: r and recipe.stringredient13',r, recipe.strIngredient13)
            }
            else if(r === 'strIngredient14' && recipe.strIngredient14 !== ""){
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient14;
                recipeList.appendChild(listItem)
                // console.log('strIngredient14: r and recipe.stringredient14',r, recipe.strIngredient14)
             }
            else if(r === 'strIngredient15' && recipe.strIngredient15 !== ""){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient15;
                recipeList.appendChild(listItem)
                // console.log('strIngredient15: r and recipe.stringredient15',r, recipe.strIngredient15)
            }
            else if(r === 'strIngredient16' && recipe.strIngredient16 !== ""){
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient16;
                recipeList.appendChild(listItem)
                // console.log('strIngredient16: r and recipe.stringredient16',r, recipe.strIngredient16)
             }
            else if(r === 'strIngredient17' && recipe.strIngredient17 !== ""){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient17;
                recipeList.appendChild(listItem)
                // console.log('strIngredient17: r and recipe.stringredient17',r, recipe.strIngredient17)
            }
            else if(r === 'strIngredient18' && recipe.strIngredient18 !== ""){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient18;
                recipeList.appendChild(listItem)
                // console.log('strIngredient18: r and recipe.stringredient18',r, recipe.strIngredient18)
            }
            else if(r === 'strIngredient19' && recipe.strIngredient19 !== ""){
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient19;
                recipeList.appendChild(listItem)
                // console.log('strIngredient19: r and recipe.stringredient19',r, recipe.strIngredient19)
             }
            else if(r === 'strIngredient20' && recipe.strIngredient20 !== ""){ 
                let listItem = document.createElement('li');
                listItem.innerHTML = recipe.strIngredient20;
                recipeList.appendChild(listItem)
                // console.log('strIngredient20: r and recipe.stringredient20',r, recipe.strIngredient20)
            } else {
                // console.log("things not used i am iterating over",r)
            }
        if ( r === 'strMeal'){
        // console.log(recipe.strMeal)
        title.innerText = recipe.strMeal
        }else {
            // console.log(`this is not the title this is ${r}`)
        }
        if( r === 'strInstructions'){
            instructions.innerText = recipe.strInstructions
        } else console.log()}

    })
})

// instructions.textContent = jsonResults.strInstructions
// Recipe Name, Ingredients, Instructions and a picture