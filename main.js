//Loader
$("#content").css("display", "none");

setTimeout(() => {
  $("#content").css("display", "block");
  $(".loader").css("display", "none");
}, 4000);

//Api
recipeApi = "https://www.themealdb.com/api/json/v1/1/search.php?f=c#";

let recipeArray = [];

//Performing fetch request from api
fetch(recipeApi, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);
    recipeArray = data.meals;
  })
  .catch((error) => console.log("Error ", error));

//DOM MANIPULATION
let recipeDiv = document.querySelector(".recipeDiv"); //Div for containing elements

//This gives the array enough time to be assigned data from the api
setTimeout(() => {
  console.log(recipeArray);

  for (let i = 0; i <= recipeArray.length; i++) {
    let foodDiv = document.createElement("div");

    recipeDiv.appendChild(foodDiv);

    foodDiv.innerHTML = ` 
        <img loading = "lazy" class="img-fluid animImg animate__animated"  src= "${recipeArray[i].strMealThumb}"/>
        <em><h3 class="text-center">${recipeArray[i].strMeal}</h3></em>
        <p>${recipeArray[i].strInstructions}</p>
        <a href = "${recipeArray[i].strYoutube}" target="_blank">Watch Video</a>
        <br/>
        <p class="text-warning">#${recipeArray[i].strTags}</p>
        <br/>

    `;
  }
}, 3000);
