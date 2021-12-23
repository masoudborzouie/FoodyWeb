import { useState, useEffect } from "react";
import Recipe from "./Recipe";

function IndexRec() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?number=3&tags=vegetarian&apiKey=63b751c222884517b53e6e46f8ba9021"
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        // console.log(data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row mt-5 ">
      {recipes.length ? (
        recipes.map((item) => (
          <Recipe
            title={item.title}
            summary={item.summary}
            image={item.image}
            price={item.price}
          />
        ))
      ) : (
        <h1>No Recipes</h1>
      )}
    </div>
  );
}

export default IndexRec;
