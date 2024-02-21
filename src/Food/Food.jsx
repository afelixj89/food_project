import React from "react";
import { useEffect, useState } from "react";
import "./Food.css";
import Ingredients from "../Ingredients/Ingredients";

function Food() {
  const [search, setSearch] = useState("");
  const [food, setFood] = useState({});
  const [showCard, setShowCard] = useState(true)
  
  

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

  const fetchFood = () => {
    if (search) {
      fetch(url, {
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.meals);
          setShowCard(false)
          setFood(data.meals[0]);
        });
    }
  };

  useEffect(() => {
    fetchFood();
  }, []);

  function handleClick(){
    setSearch("")
    setFood({})
    setShowCard(true)
  }

  return (
    <div>
      {showCard && (
        <card className="foodItem">
          <h2>Please Input a Recipe!</h2>
          <div>
            <input
              type="search"
              placeholder="Burger"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div>
              <button className="searchButton" onClick={fetchFood}>
                Search
              </button>
            </div>
          </div>
        </card>
      )}

      {food.strMeal && (
        <div className="toggleIngredients">

        <div className="ingredients">
          <h3>{food.strMeal}</h3>
          <img src= {food.strMealThumb} alt={`Image of ${food.strMeal}`}></img>
          <div>
          <a className="linksCSS" href={food.strYoutube}>Video on how to prepare the dish!</a>
          </div>
          
          <p className="ingredientTitle">Ingredients and Quantities</p>
          <ul>
            <li>{`${food.strIngredient1} ${food.strMeasure1}`}</li>
            <li>{`${food.strIngredient2} ${food.strMeasure2}`}</li>
            <li>{`${food.strIngredient3} ${food.strMeasure3}`}</li>
            <li>{`${food.strIngredient4} ${food.strMeasure4}`}</li>
            <li>{`${food.strIngredient5} ${food.strMeasure5}`}</li>
            <li>{`${food.strIngredient6} ${food.strMeasure6}`}</li>
            <li>{`${food.strIngredient7} ${food.strMeasure7}`}</li>
            <li>{`${food.strIngredient8} ${food.strMeasure8}`}</li>
            <li>{`${food.strIngredient9} ${food.strMeasure9}`}</li>
            <li>{`${food.strIngredient10} ${food.strMeasure10}`}</li>
            <li>{`${food.strIngredient11} ${food.strMeasure11}`}</li>
            <li>{`${food.strIngredient12} ${food.strMeasure12}`}</li>
            <li>{`${food.strIngredient13} ${food.strMeasure13}`}</li>
            <li>{`${food.strIngredient14} ${food.strMeasure14}`}</li>
            <li>{`${food.strIngredient15} ${food.strMeasure15}`}</li>
            <li>{`${food.strIngredient16} ${food.strMeasure16}`}</li>
            <li>{`${food.strIngredient17} ${food.strMeasure17}`}</li>
            <li>{`${food.strIngredient18} ${food.strMeasure18}`}</li>
            <li>{`${food.strIngredient19} ${food.strMeasure19}`}</li>
            <li>{`${food.strIngredient20} ${food.strMeasure20}`}</li>
          
          </ul>
      

        </div>
        <button onClick={handleClick}>Back to search</button>
        </div>
      )}

    </div>
  );
}

export default Food;
