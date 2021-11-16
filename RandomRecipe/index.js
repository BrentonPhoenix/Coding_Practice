let fetchButton = document.getElementById("fetchR")
let recipeList = document.getElementsByTagName("ul")
let jsonResults;



fetchButton.addEventListener('click', ev=>{
    fetch("https://themealdb.com/api/json/v1/1/random.php")
    .then( e =>{
       jsonResults = e.json()
    })
    .then(json => console.log(jsonResults))
    

})

// Recipe Name, Ingredients, Instructions and a picture