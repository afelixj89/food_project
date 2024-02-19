import React from "react";
import { useEffect, useState } from "react";


function Food() {
  const [food, setFood] = useState();

  
  const fetchFood = () => {fetch("https://www.themealdb.com/api/json/v1/1/search.php?s", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.meals);
    });}

  useEffect(() => { fetchFood()
  }, []);

  return (
    <>
      <div className="foodItem">
        <h1>{food}</h1>
      </div>
      <button onClick={fetchFood}>Food</button>
    </>
  );
}

export default Food;
