import { useState, useEffect } from "react";
import SearchRecipes from "../../Components/SearchRecipes";
import ShowRec from "../../Components/ShowRecipes";

function Home() {
  const queryApi = {
    ingredient: ["", "", ""],
    number: 2,
    title: "Newest Recipes: ",
  };
  const [result, setResult] = useState({
    data: [],
    queryApi: queryApi,
  });
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/random?number=${queryApi.number}&tags=vegetarian&apiKey=63b751c222884517b53e6e46f8ba9021`
    )
      .then((res) => res.json())
      .then((resData) => {
        const data = resData.recipes;
        setResult({ data, queryApi });
        console.log({ data, queryApi });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="row">
      <SearchRecipes resultApi={(resultApi) => setResult(resultApi)} />
      <ShowRec result={result} />
    </div>
  );
}
export default Home;
