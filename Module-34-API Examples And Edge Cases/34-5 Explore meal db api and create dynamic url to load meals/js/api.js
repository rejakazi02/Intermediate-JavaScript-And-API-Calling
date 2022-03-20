const searchFood = () => {

    const searchfField = document.getElementById('search-field');
    const searchText = searchfField.value;
    searchfField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
   
}
searchFood();

const displaySearchResult = meals => {
 const searchResult = document.getElementById('card-section');
 console.log(meals)
 meals.forEach(meal => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    cardDiv.innerHTML =` 
    <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">"${meal.strMeal}"</h3>
          <h5 class="card-title">Food Category : ${meal.strCategory}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
        <div class="card-footer text-center bg-skyblue">
   <a class=" " href="${meal.strYoutube}">Making video</a>
        </div>
      </div>
    `;

searchResult.appendChild(cardDiv);

 });

}