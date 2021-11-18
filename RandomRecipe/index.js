let fetchButton = document.getElementById("fetchR")
let recipeList = document.getElementsByTagName("ul")
let jsonResults;
let title = document.getElementsByTagName('h1')
let instructions = document.getElementsByTagName('p')


fetchButton.addEventListener('click', ev=>{
    fetch("https://themealdb.com/api/json/v1/1/random.php")
    .then( e => e.json() )
    .then(json =>{
        jsonResults = json
        console.log(jsonResults.meals[0])
    })
})

// Recipe Name, Ingredients, Instructions and a picture