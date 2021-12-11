import React from "react";
import Recepie from "./Recepie";

function IndexRec() {
  let recepies = [];
  fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => {
      res.json();
    })
    .then((data) => {
      recepies = data;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>
      {recepies.length ? (
        recepies.map((item) => (
          <Recepie
            title={item.title}
            description={item.description}
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
