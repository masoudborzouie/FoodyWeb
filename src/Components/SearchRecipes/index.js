import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

function SearchRecipes({ resultApi }) {
  const [queryApi, setQueryApi] = useState({
    recipe: "",
    number: 0,
  });
  // const [resultApi, setResultApi] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${queryApi.recipe}&number=${queryApi.number}&apiKey=63b751c222884517b53e6e46f8ba9021`
    )
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        const data = resData.results;
        resultApi({ data, queryApi }); //props
        console.log({ data, queryApi });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Form
      className=" w-50 m-auto mt-3 shadow p-3 mb-5 bg-body rounded"
      onSubmit={formHandler}
    >
      <div className="m-auto">
        <h3 className="mb-3 d-flex justify-content-center">Serach Recipes</h3>
        <FormControl
          type="search"
          placeholder="Search a Recipe"
          className=""
          aria-label="Search"
          onChange={(e) => setQueryApi({ ...queryApi, recipe: e.target.value })}
        />
      </div>
      <div className="d-flex justify-content-center m-2">
        <label className="me-2" name="">
          Number of Recipes
        </label>
        <select
          onChange={(e) => setQueryApi({ ...queryApi, number: e.target.value })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="d-flex justify-content-center mt-2">
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </div>
    </Form>
  );
}

export default SearchRecipes;
