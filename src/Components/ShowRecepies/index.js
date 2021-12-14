import { useState, useEffect } from "react";
import Recepie from "./Recepie";

function IndexRec() {
  const [recepies, setRecepies] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => {
        setRecepies(data);
        console.log(data);
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
