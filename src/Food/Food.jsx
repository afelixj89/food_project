import React from "react";
import { useEffect, useState } from "react";
import "./Food.css"


function Food() {
  const [food, setFood] = useState();

  
  const fetchFood = () => {fetch("https://www.themealdb.com/api/json/v1/1/search.php?s", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.meals[1]);
    });}

  useEffect(() => { fetchFood()
  }, []);

  return (
    
      <div>
        
        <card className="foodItem">
         <h2>Please Input a Recipe!</h2>
         <div> 
          <input 
          type="search"
          placeholder="Cheeseburger?"
          value={null}
          onChange={null}
          />
          <div> 
          <button className ="searchButton" onClick={fetchFood}>Search</button>
         </div>
         </div>
        </card>
      
     
    </div>
  )}


export default Food;
