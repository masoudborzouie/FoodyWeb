import React from "react";
import SearchRecipes from "../../Components/SearchRecipes";
import Recipes from "../../Components/ShowRecipes";

export default function Home() {
  return (
    <div className="row">
      <SearchRecipes />
      <Recipes />
    </div>
  );
}
