import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

function SearchRecipes() {
  return (
    <Form className=" w-50 m-auto mt-3 shadow p-3 mb-5 bg-body rounded">
      <div className="m-auto">
        <h3 className="mb-3 d-flex justify-content-center">Serach Recipes</h3>
        <FormControl
          type="search"
          placeholder="Search a Recipe"
          className=""
          aria-label="Search"
        />
      </div>
      <div className="d-flex justify-content-center m-2">
        <label className="me-2">Number of Recipes</label>{" "}
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <Button className="w-100 mt-2" variant="outline-success">
          Search
        </Button>
      </div>
    </Form>
  );
}

export default SearchRecipes;
