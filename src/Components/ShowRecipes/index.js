import React from "react";
import Recipe from "./Recipe";

function ShowRec({ result }) {
  const { data, queryApi } = result;
  return (
    <div className="row mt-5 ">
      <div>
        <h2>{queryApi}</h2>
      </div>
      {data.length ? (
        data.map((item) => (
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

export default ShowRec;
