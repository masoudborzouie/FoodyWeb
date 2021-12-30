import React from "react";
import Recipe from "./Recipe";

function IndexRec({ recipes }) {
  return (
    <div className="row mt-5 ">
      {recipes.length ? (
        recipes.map((item) => (
          <Recipe
            title={item.title}
            // summary={item.summary}
            image={item.image}
            // price={item.price}
          />
        ))
      ) : (
        <h1>No Recipes</h1>
      )}
    </div>
  );
}

export default IndexRec;
