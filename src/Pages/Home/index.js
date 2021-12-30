import { useState, useEffect } from "react";
import SearchRecipes from "../../Components/SearchRecipes";
import Recipes from "../../Components/ShowRecipes";

export default function Home() {
  const queryApi = {
    ingredient: ["", "", ""],
    number: 2,
    title: "Newest Recepies: ",
  };

  const [recipes, setRecipes] = useState({
    data: [],
    queryApi: queryApi,
  });
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?number=${queryApi.number}&tags=vegetarian&apiKey=63b751c222884517b53e6e46f8ba9021`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [queryApi.number]);
  return (
    <div className="row">
      <SearchRecipes resultApi={(resultApi) => setRecipes(resultApi)} />
      <Recipes recipes={recipes} />
    </div>
  );
}
