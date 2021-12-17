import { useState, useEffect } from "react";
import Recepie from "./Recepie";

function IndexRec() {
  const [recepies, setRecepies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?number=8&tags=vegetarian,dessert&apiKey=9f113b083e584777b7d9d00820ef41a4"
    )
      .then((res) => res.json())
      .then((data) => {
        setRecepies(data.recipes);
        console.log(data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row mt-5 ">
      {recepies.length ? (
        recepies.map((item) => (
          <Recepie
            title={item.title}
            summary={item.summary}
            image={item.image}
            price={item.price}
          />
        ))
      ) : (
        <h1>No Recepies</h1>
      )}
    </div>
  );
}

export default IndexRec;
